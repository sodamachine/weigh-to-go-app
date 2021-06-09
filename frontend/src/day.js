    // // daysDiv = days
    // //   dayDiv = day = sending -> appendRecords(dayDiv)
    //        dayLi = date
    //        recordUl = sending -> appendRecord(recordUl)
    //          recordLi = weight

class Day {

    static allDays = []

    constructor({date, id, records}){
        this.date = date
        this.id = id
        this.records = records.map(record => new Record(record))
        // records.forEach(record => new Record(record))
        Day.allDays.push(this)
    }

    appendDay(){
        const daysDiv = document.getElementById("days")
        const dayDiv = document.createElement("div")
        const dayLi = document.createElement("li")
        dayLi.innerText = this.date
        // dayLi.addEventListener('click', this.showDay.bind(this))
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

    appendRecordForm(newDayId){
        debugger
        const dayContainer = document.getElementById("dayContainer")
        const recordForm = document.createElement("div")
        recordForm.innerHTML = `
            <form id="recordForm">
                <label>Weight:</label>
                <input id="recordWeight"/>
                <input type="hidden" id="${newDayId}"/>
                <input type="submit" value="Add weight"/>
            </form>
            `
        dayContainer.innerHTML += recordForm
        document.getElementById("recordForm").addEventListener("submit", postRecord)
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
        const userWeight = e.target.children[2].value
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
            Record.postRecord(newDay.id, userWeight)
        })
    }

}