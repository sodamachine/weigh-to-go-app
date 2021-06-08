class Day {

    constructor({name, id, records}){
        this.name = name
        this.id = id
        this.records = records
    }

    static fetchDays(){
        fetch("http://localhost:3000/days")
        .then(jsonToJS)
        .then(days => this.appendDays(days))
    }

    static appendDays(days){
        for (let day of days){
            let newDay = new Day(day)
            newDay.appendDay()
            debugger
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