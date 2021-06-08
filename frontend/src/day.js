class Day {

    constructor({name, id, records}){
        this.name = name
        this.id = id
        this.records = this.records.map(record => new record(record))
    }

    appendDay(){
        const daysDiv = document.getElementById("days")
        const div = document.createElement("div")
        const li = document.createElement("li")
        li.innerText = this.name
        li.addEventListener('click', this.showDay.bind(this))
        daysDiv.append(div)
        div.append(li)
        this.appendRecords(div)
    }

    appendRecords(div){
        const ul = document.createElement("ul")
        div.append(ul)
        for (let record of this.records){
            record.appendDay(ul)
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