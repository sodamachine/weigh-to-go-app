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
        const recordSpan = document.createElement("span")
        debugger
        let day
        debugger
        if (daySpan.id < 10){
            day = this.date[9]
            debugger
            if (day === daySpan.id){
                this.appendRecord(daySpan)
            }
        } else{
            day = this.date[8]+this.date[9]
            debugger
            if (day === daySpan.id){
                this.appendRecord(daySpan)
            }
        }
        debugger
    }

    appendRecord(daySpan){
        debugger
        
            const li = document.createElement("li")
            li.innerText = `${this.num} ${this.unit}`
            recordSpan.append(li)
        
        daySpan.append(recordSpan)
    }

    static addRecord(e, daySpan){
        const userInput = e.target.children[0].value
        const trackerId = daySpan.id
        const date = new Date(
            today.getFullYear(),
            today.getMonth(),
            daySpan.innerText
        )
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
            debugger
            let newRecord = new Record(record)
            
            newRecord.appendRecord(daySpan)
        })
    }
}