    // // daysDiv = days
    // //   dayDiv = day = sending -> appendRecords(dayDiv)
    //        dayLi = date
    //        recordUl = sending -> appendRecord(recordUl)
    //          recordLi = weight

// const dayForm = document.getElementById("dayForm")

class Day {

    // static allDays = []

    constructor({date, id, records}){
        this.date = date
        this.id = id
        this.records = records.map(record => new Record(record))
        // records.forEach(record => new Record(record))
        // Day.allDays.push(this)
    }

    // get records(){
    //     return Record.allRecords.filter(record => record.dayId === this.id)
    //     debugger
    // }

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
        recordUl.id = `day-${this.id}`
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
        this.appendDay()
        this.appendRecordForm()
    }

    appendRecordForm(){
        const dayRecords = document.getElementById("dayRecords")
        const recordForm = `
            <form id="recordForm">
                <label>Weight:</label>
                <input id="recordWeight"/>
                <input type="hidden" id="${this.id}"/>
                <input type="submit" value="Add weight"/>
            </form>
            `
        dayRecords.innerHTML += recordForm
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

    static appendDaysOnHome(){
        for (let day of days){
            day.appendDay()
        }
    }

    static postDay(e){
        e.preventDefault()
        const userInput = e.target.children[1].value
        const body = {
            day: {
                date: userInput
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