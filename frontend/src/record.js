class Record {

    static allRecords = []

    constructor({date, id, content, tracker_id}){
        this.date = date
        this.id = id
        this.content = content
        this.trackerId = tracker_id
        Record.allRecords.push(this)
    }

    filterRecordByDate(daySpan){
        let day
        if (daySpan.id < 10){
            day = this.date[9]
            if (day === daySpan.id){
                this.appendRecord(daySpan)
            }
        } else{
            day = this.date[8]+this.date[9]
            if (day === daySpan.id){
                this.appendRecord(daySpan)
            }
        }
    }

    appendRecord(daySpan){
        const recordSpan = document.createElement("span")
        const li = document.createElement("li")
        li.innerText = `${this.content}`
        recordSpan.append(li)
        daySpan.append(recordSpan)
    }

    static showRecordForm(tracker, selectDate){
        const recordForm = document.createElement("form")
        recordForm.innerHTML = `
            <form id="recordForm">
                <label>Log your day:</label>
                <input id="recordContent">
                <input type="hidden" id="${tracker.id}" />
                <input type="submit" value="Save">
            </form>
        `
        recordForm.addEventListener('submit', (e) => Record.addRecord(e, selectDate))
        trackerDiv.append(recordForm)
    }

    static addRecord(e, date){
        e.preventDefault()
        const userInput = recordContent.value
        const trackerId = e.target.children[2].id
        const body = {
            record: {
                date: date,
                content: userInput,
                tracker_id: trackerId
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
        fetch("http://localhost:3000/records", options)
        .then(jsonToJS)
        .then(record => {
            let newRecord = new Record(record)
            calendar.innerHTML = ""
            Tracker.appendTrackers(Tracker.allTrackers)
        })
    }
}