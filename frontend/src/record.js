class Record {

    constructor({id, weight, dayId}){
        this.id = id
        this.weight = weight
        this.dayId = dayId
    }

    appendRecord(ul){
        const li = document.createElement("li")
        li.innerText = this.weight
        ul.append(li)
    }

}