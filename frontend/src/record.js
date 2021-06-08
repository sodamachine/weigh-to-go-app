class Record {

    static allRecords = []

    constructor({id, content, trackerId}){
        this.id = id
        this.content = content
        this.trackerId = trackerId
        Record.allRecords.push(this)
    }

    appendRecord(ul){
        
    }

}