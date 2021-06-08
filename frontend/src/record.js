class Record {

    // static allRecords = []

    constructor({id, weight, dayId}){
        this.id = id
        this.weight = weight
        this.dayId = dayId
        // Record.allRecords.push(this)
    }

    appendRecord(ul){
        const li = document.createElement("li")
        li.innerText = this.weight
        ul.append(li)
    }

}