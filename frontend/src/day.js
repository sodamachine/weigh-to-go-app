    // // daysDiv = days
    // //   dayDiv = day = sending -> appendRecords(dayDiv)
    //        dayLi = date
    //        recordUl = sending -> appendRecord(recordUl)
    //          recordLi = weight


class Day {

    constructor({date, id, records}){
        this.date = date
        this.id = id
        this.records = records.map(record => new Record(record))
    }

    appendDay(){
        const daysDiv = document.getElementById("days")
        const dayDiv = document.createElement("div")
        const dayLi = document.createElement("li")
        dayLi.innerText = this.date
        dayLi.addEventListener('click', this.showDay.bind(this))
        daysDiv.append(dayDiv)
        dayDiv.append(dayLi)
        this.appendRecords(dayDiv)
    }

    appendRecords(dayDiv){
        const recordUl = document.createElement("ul")
        dayDiv.append(recordUl)
        for (let record of this.records){
            record.appendRecord(recordUl)
        }
    }

    showDay(){
        const dayContainer = document.getElementById("dayContainer")
        const homeButton = document.createElement("button")
        dayContainer.children[1].innerHTML = ""
        dayContainer.children[0].remove()
        homeButton.addEventListener('click', returnHome)
        homeButton.innerText = "Home"
        dayContainer.append(homeButton)
        this.appendList()
        this.appendRecordForm()
    }

    appendRecordForm(){
        const records = document.getElementById("records")
        const recordForm = `
            <form id="recordForm">
                <label><Weight:</label>
                <input id="recordWeight"/>
                <input type="hidden" id="${this.id}"/>
                <input type="text" id="weight">
                <input type="submit" value="Add weight"/>
            </form>
            `
        records.innerHTML += recordForm
        document.getElementById("recordForm").addEventListener("submit", Record.addRecord.bind(this))
    }

    static fetchDays(){
        fetch("http://localhost:3000/days")
        .then(jsonToJS)
        .then(days => this.appendDays(days))
        // .then(this.appendDays)
    }

    static appendDays(days){
        for (let day of days){
            let newDay = new Day(day)
            newDay.appendDay()
        }
    }

    static postDay(e){
        e.preventDefault()
        const userDate = e.target.children[1].value
        const body = {
            day: {
                date: userDate
            }
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(body)
        }
        e.target.reset()
        fetch("http://localhost:3000/days", options)
        .then(jsonToJS)
        .then(day => {
            let newDay = new Day(day)
            newDay.appendDay()
        })
    }

}