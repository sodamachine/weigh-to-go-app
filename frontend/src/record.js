class Record {

    static allRecords = []

    constructor({date, id, num, tracker_id, unit}){
        this.date = date
        this.id = id
        this.num = num
        this.trackerId = tracker_id
        this.unit = unit
        Record.allRecords.push(this)
    }
    static addRecord(today){
        debugger
        
    }
}