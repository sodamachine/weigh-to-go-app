class Tracker {

    static allTrackers = []

    constructor({name, id, records}){
        this.name = name
        this.id = id
        this.records = records.map(record => new Record(record))
        
        Tracker.allTrackers.push(this)
    }

    appendTracker(navBar){
        const trackerBtn = document.createElement("button")
        trackerBtn.innerText = this.name
        trackerBtn.id = this.id
        trackerBtn.classList.add("button")
        // trackerBtn.addEventListener('click', () => Record.appendDays(trackerBtn.id))
        navBar.appendChild(trackerBtn)
    }

    static appendCalendar(){
        const header = document.createElement("div")
        const month = document.createElement("div")
        const weekday = document.createElement("div")
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
        let dayList = new Array(
            "SUN",
            "MON",
            "TUE",
            "WED",
            "THU",
            "FRI",
            "SAT"
        )
        header.classList.add("header")
        month.classList.add("month")
        weekday.classList.add("weekday")
        month.innerText = monthList[today.getMonth()] + " " + today.getFullYear()
        for (let i = 0; i < dayList.length; i++){
            let cell = document.createElement("span")
            cell.classList.add("cell")
            cell.classList.add("day")
            cell.innerText = dayList[i].substring(0, 3)
            weekday.appendChild(cell)
        }
        header.appendChild(month)
        calendar.appendChild(header)
        calendar.appendChild(weekday)
        this.fetchTrackers()
    }

    static fetchTrackers(){
        fetch("http://localhost:3000/trackers")
        .then(jsonToJS)
        .then(this.appendTrackers)
    }
    
    static appendTrackers(trackers){
        const navBar = document.createElement("div")
        for (let tracker of trackers){
            let newTracker = new Tracker(tracker)
            newTracker.appendTracker(navBar)
        }
        calendar.appendChild(navBar)
        Record.appendDays()
    }

    

}