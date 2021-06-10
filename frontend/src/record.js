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

    

    selectDay(e){
        let timestamp = new Date(
            today.getFullYear(),
            today.getMonth(),
            i
        ).getTime()
        document.querySelector(".cell.today")?.classList.remove("today");
            cell.classList.add("today");
            debugger
            Record.addRecord(today)
        if (timestamp === today.getTime()) {
            cell.classList.add("today");
      } 
    }
    // addRecord(dayDate){
    //     debugger
    // }

}