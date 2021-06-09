const header = document.createElement("div")
let today = new Date()

class Tracker {

    static allTrackers = []

    constructor({name, id, records}){
        this.name = name
        this.id = id
        this.records = records.map(record => new Record(record))
        
        Tracker.allTrackers.push(this)
    }

    appendTracker(navBar){
        const navBtn = document.createElement("button")
        navBtn.innerText = this.name
        navBtn.id = this.id
        navBtn.classList.add("button")
        navBar.appendChild(navBtn)
        calendar.appendChild(navBar)
        // add EL
    }

    static fetchTrackers(){
        fetch("http://localhost:3000/trackers")
        .then(jsonToJS)
        .then(this.appendCalendar)
    }

    static appendCalendar(trackers){
        const navBar = document.createElement("div")
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

        for (let tracker of trackers){
            let newTracker = new Tracker(tracker)
            newTracker.appendTracker(navBar)
        }
        calendar.appendChild(navBar)

        const weekday = document.createElement("div")
        let dayList = new Array(
            "SUN",
            "MON",
            "TUE",
            "WED",
            "THU",
            "FRI",
            "SAT"
        )
        for (let i = 0; i < dayList.length; i++){
            let cell = document.createElement("span")
            cell.classList.add("cell")
            cell.classList.add("day")
            cell.innerText = dayList[i].substring(0, 3)
            weekday.appendChild(cell)
        }
        calendar.appendChild(weekday)

        Record.appendDays()

    }
}