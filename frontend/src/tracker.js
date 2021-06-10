let today = new Date()
let monthLength = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
).getDate()

class Tracker {

    static allTrackers = []

    constructor({name, id, records}){
        this.name = name
        this.id = id
        this.records = records.map(record => new Record(record))
        Tracker.allTrackers.push(this)
    }

    appendTracker(){
        const trackerBtn = document.createElement("button")
        trackerBtn.innerText = this.name
        trackerBtn.id = this.id
        trackerBtn.classList.add("button")
        trackerBtn.addEventListener('click', this.appendMonthWeekdays.bind(this))
        trackerDiv.append(trackerBtn)
    }

    appendMonthWeekdays(){
        header.remove()
        weekdayDiv.remove()
        dayDiv.remove()
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
        const weekdayList = new Array(
            "SUN",
            "MON",
            "TUE",
            "WED",
            "THU",
            "FRI",
            "SAT"
        )
        monthDiv.innerText = monthList[today.getMonth()] + " " + today.getFullYear()
        for (let i = 0; i < weekdayList.length; i++){
            let weekday = document.createElement("span")
            weekday.classList.add("cell")
            weekday.classList.add("day")
            weekday.innerText = weekdayList[i]
            weekdayDiv.append(weekday)
        }
        header.classList.add("header")
        monthDiv.classList.add("month")
        weekdayDiv.classList.add("weekday")
        header.append(monthDiv)
        calendar.append(header)
        calendar.append(weekdayDiv)
        this.appendDays()
    }

    appendDays(){
        for (let i = 1; i < today.getDay(); i++){
            let dayBlank = document.createElement("span")
            dayBlank.classList.add("cell")
            dayBlank.classList.add("empty")
            dayDiv.append(dayBlank)
        }
        for (let i = 1; i <= monthLength; i++){
            let daySpan = document.createElement("span")
            daySpan.id = this.id
            daySpan.addEventListener('click', () => {
                // document.querySelector(".cell.selectday")?.classList.remove("today")
                daySpan.classList.add("today")
                this.appendRecordForm(daySpan)
            })
            daySpan.classList.add("cell")
            daySpan.innerText = i
            this.appendRecords(daySpan)
            dayDiv.append(daySpan)
        }
        calendar.append(dayDiv)
    }
    
    appendRecords(daySpan){
        const recordSpan = document.createElement("span")
        recordSpan.id = daySpan.innerText
        daySpan.append(recordSpan)
        for (let record of this.records){
            record.appendRecord(recordSpan)
        }
    }

    appendRecordForm(daySpan){
        const recordForm = document.createElement("form")
        recordForm.innerHTML = `
            <form id="recordForm">
            <input type="text">
            <input type="submit" value="Log your day">
            </form>
        `
        recordForm.addEventListener('submit', (e) => {
            Record.addRecord(e, daySpan)
        })
        trackerForm.append(recordForm)
    }
    // static appendRecords(dayDate){
        
    //     for (record of Record.allRecords){
    //         debugger
    //         // if (trackerId > 0){
    //             record.tracker.id == trackerId
    //             let date = new Date(`${record.date}`).getDate()
    //         // }
    //         // if (date == i-1){
    //         //     dayDate.innerHTML += `<li>${record.num} ${record.unit}</li>`
    //         // }
    //     }
    // }

    static fetchTrackers(){
        fetch("http://localhost:3000/trackers")
        .then(jsonToJS)
        .then(this.appendTrackerBar)
    }
    
    static appendTrackerBar(trackers){
        for (let tracker of trackers){
            let newTracker = new Tracker(tracker)
            newTracker.appendTracker()
        }
        trackerForm.innerHTML = `
            <form id="trackerForm">
                <input type="text">
                <input type="submit" value="Add a new tracker">
            </form>
        `
        trackerForm.addEventListener('submit', Tracker.addTracker)
        trackerBar.append(trackerDiv)
        trackerBar.append(trackerForm)
    }

    static addTracker(e){
        e.preventDefault()
        const userInput = e.target.children[0].value
        const body = {
            tracker: {
                name: userInput
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
        fetch("http://localhost:3000/trackers", options)
        .then(jsonToJS)
        .then(tracker => {
            let newTracker = new Tracker(tracker)
            newTracker.appendTracker()
        })
    }

}