class Record {

    // static allRecords = []

    constructor({id, weight, dayId}){
        this.id = id
        this.weight = weight
        this.dayId = dayId
        // Record.allRecords.push(this)
    }

    appendRecord(recordUl){
        const recordLi = document.createElement("li")
        recordLi.innerText = this.weight
        recordUl.append(recordLi)
    }

    static addRecord(e){
        e.preventDefault()
        const userInput = e.target.children[1].value
        const dayId = e.target.children[2].id
        const body = {
            record: {
                weight: userInput,
                day_id: dayId
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
            let recordUl = document.getElementById(`day-${record.day_id}`)
            let newRecord = new Record(record)
            newRecord.appendRecord(recordUl)
        })
    }

}