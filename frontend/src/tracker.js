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

    static appendContent(e){
        dayDiv.innerHTML = ""
        let currentMonthFirstDay = new Date(
            today.getFullYear(), 
            today.getMonth(), 
            1)
            .getDay()
        for (let i = 0; i < currentMonthFirstDay; i++){
            let dayBlank = document.createElement("span")
            dayBlank.classList.add("cell")
            dayBlank.classList.add("empty")
            dayDiv.append(dayBlank)
        }
        for (let i = 1; i <= monthLength; i++){
            let daySpan = document.createElement("span")
            let selectDate = new Date(
                today.getFullYear(),
                today.getMonth(),
                i
            )
            if (selectDate == today.getDate()) {
                daySpan.classList.add("today")
            }
            daySpan.addEventListener('click', () => {
                document.querySelector(".cell.today")?.classList.remove("today");
                daySpan.classList.add("today");
            })
            daySpan.classList.add("cell")
            daySpan.classList.add("day")
            daySpan.innerText = i
            dayDiv.append(daySpan)
        }
        content.append(dayDiv)
        calendar.append(content)
    }

    appendDay(trackerId, dayDate, daySpan){
        if (trackerId > 0){
            // append records for this day with trackerId = id

            
            
        } else{
           // append all records for this day

            // append records for this day with trackerId = id
        }
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
            weekday.classList.add("weekday")
            weekday.innerText = weekdayList[i]
            weekdayDiv.append(weekday)
        }
        header.classList.add("header")
        monthDiv.classList.add("month")
        weekdayDiv.classList.add("weekday")
        calendar.append(header)
        header.append(monthDiv)
        calendar.append(weekdayDiv)
        this.fetchTrackers()
    }

    static fetchTrackers(){
        fetch("http://localhost:3000/trackers")
        .then(jsonToJS)
        .then(this.appendTrackerDiv)
    }

    static appendTrackerDiv(trackers){
        const homeBtn = document.createElement("button")
        homeBtn.innerText = "Home"
        homeBtn.id = 0
        homeBtn.classList.add("button")
        homeBtn.addEventListener('click', Tracker.appendContent)
        trackerDiv.append(homeBtn)
        for (let tracker of trackers){
            let newTracker = new Tracker(tracker)
            const trackerBtn = document.createElement("button")
            trackerBtn.innerText = newTracker.name
            trackerBtn.id = newTracker.id
            trackerBtn.classList.add("button")
            trackerBtn.addEventListener('click', Tracker.appendContent)
            trackerDiv.append(trackerBtn)
        }
        header.append(trackerDiv)
    }

    // calendar.append(content)
//     static appendTrackerForm(trackers){
        
//         trackerForm.innerHTML = `
//             <form id="trackerForm">
//                 <input type="text">
//                 <input type="submit" value="Add a new tracker">
//             </form>
//         `
//         trackerForm.addEventListener('submit', Tracker.addTracker)
//         trackerBar.append(trackerForm)
//     }

//     appendRecords(daySpan){
//         const recordSpan = document.createElement("span")
//         recordSpan.id = daySpan.innerText
//         daySpan.append(recordSpan)
//         for (let record of this.records){
//             record.appendRecord(recordSpan)
//         }
//     }

//     appendRecordForm(daySpan){
//         const recordForm = document.createElement("form")
//         recordForm.innerHTML = `
//             <form id="recordForm">
//             <input type="text">
//             <input type="submit" value="Log your day">
//             </form>
//         `
//         recordForm.addEventListener('submit', (e) => {
//             Record.addRecord(e, daySpan)
//         })
//         trackerForm.append(recordForm)
//     }
//     // static appendRecords(dayDate){
        
//     //     for (record of Record.allRecords){
//     //         debugger
//     //         // if (trackerId > 0){
//     //             record.tracker.id == trackerId
//     //             let date = new Date(`${record.date}`).getDate()
//     //         // }
//     //         // if (date == i-1){
//     //         //     dayDate.innerHTML += `<li>${record.num} ${record.unit}</li>`
//     //         // }
//     //     }
//     // }
    

//     static addTracker(e){
//         e.preventDefault()
//         const userInput = e.target.children[0].value
//         const body = {
//             tracker: {
//                 name: userInput
//             }
//         }
//         const options = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json"
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