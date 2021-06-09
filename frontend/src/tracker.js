const header = document.createElement("div")
let today = new Date()

class Tracker {

    constructor({name, id, records}){
        this.name = name
        this.id = id
        this.records = records.map(record => new Record(record))
    }

    appendTracker(){
        const navBtn = document.createElement("button")
        navBtn.innerText = this.name
        navBtn.id = this.id
        navBtn.classList.add("button")
        calendar.appendChild(navBtn)
        // add EL
        
    }

    static appendCalendar(){
        const month = document.createElement("div")
        const monthList = new Array(
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        )
        header.classList.add("header")
        month.classList.add("month")
        month.innerText = monthList[today.getMonth()] + " " + today.getFullYear()
        header.appendChild(month)
        calendar.appendChild(header)
        Tracker.fetchTrackers()
    }

    static fetchTrackers(){
        fetch("http://localhost:3000/trackers")
        .then(jsonToJS)
        .then(this.appendTrackers)
    }

    static appendTrackers(trackers){
        for (let tracker of trackers){
            let newTracker = new Tracker(tracker)
            newTracker.appendTracker()
        }
    }
    




}