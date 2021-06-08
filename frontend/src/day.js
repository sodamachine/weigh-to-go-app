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
        // li.addEventListener('click', this.showDay.bind(this))
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

//     static postTracker(e){
//         e.preventDefault()
//         const userInput = e.target.children[1].value
//         const body = {
//             list: {
//                 name: userInput
//             }
//         }
//         const options = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(body)
//         }
//         e.target.reset()
//         fetch("http://localhost:3000/trackers", options)
//         .then(jsonToJS)
//         .then(tracker => {
//             let newTracker = new Tracker(tracker)
//             newTracker.appendTracker()
//         })
//     }

}