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
        // trackerBtn.id = this.id
        trackerBtn.classList.add("button")
        // trackerBtn.addEventListener('click', (e) => {
        //     debugger
        //     // () => Record.appendDays(trackerBtn.id)) this.renderListShowPage.bind(this)
        // })
        trackerDiv.append(trackerBtn)
    }

    // static appendDays(){
    //     const days = document.createElement("div")
    //     for (let i = 1; i < today.getDay(); i++){
    //         let dayBlank = document.createElement("span")
    //         dayBlank.classList.add("cell")
    //         dayBlank.classList.add("empty")
    //         days.appendChild(dayBlank)
    //     }
    //     for (let i = 1; i <= monthLength; i++){
    //         let dayDate = document.createElement("span")
    //         dayDate.addEventListener('click', Record.selectDay)
    //         dayDate.classList.add("cell")
    //         dayDate.innerText = i
    //         days.appendChild(dayDate)
    //     }
    //     calendar.appendChild(days)
    // }

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
        trackerForm.innerHTML = `
            <form id="trackerForm">
                <input type="text">
                <input type="submit" value="Add a new tracker">
            </form>
        `
        document.getElementById("trackerForm").addEventListener('submit', Tracker.addTracker)
        for (let tracker of trackers){
            let newTracker = new Tracker(tracker)
            newTracker.appendTracker()
        }
        trackerBar.append(trackerForm)
        trackerBar.append(trackerDiv)
        Tracker.appendHeader()
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

    static appendHeader(){
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
            weekdayDiv.appendChild(weekday)
        }
        header.classList.add("header")
        monthDiv.classList.add("month")
        weekdayDiv.classList.add("weekday")
        header.appendChild(monthDiv)
        calendar.appendChild(header)
        calendar.appendChild(weekdayDiv)



    }

}