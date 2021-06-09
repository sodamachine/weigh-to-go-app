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

    // selectDate(e){
    //     //     let timestamp = new Date(
    // //         today.getFullYear(),
    // //         today.getMonth(),
    // //         i
    // //     ).getTime()
    // //     document.querySelector(".cell.today")?.classList.remove("today");
    // //         cell.classList.add("today");
    // //         debugger
    // //         Record.addRecord(today)
    // //     if (timestamp === today.getTime()) {
    // //         cell.classList.add("today");
    // //   } 

    // // }
    // }

    // addRecord(dayDate){
    //     debugger
    // }

    static appendDays(trackerId = 0){
        const day = document.createElement("div")
        let monthLength = new Date(
            today.getFullYear(),
            today.getMonth() + 1,
            0
        ).getDate()
        for (let i = 1; i < today.getDay(); i++){
            let dayBlank = document.createElement("span")
            dayBlank.classList.add("cell")
            dayBlank.classList.add("empty")
            day.appendChild(dayBlank)
        }
        for (let i = 1; i <= monthLength; i++){
            let dayDate = document.createElement("span")
            // dayDate.addEventListener('click', selectDate)
            dayDate.classList.add("cell")
            dayDate.innerHTML = `${i}<br><br>`
            day.appendChild(dayDate)
            // this.appendRecords(trackerId, i, dayDate)
        }
        calendar.appendChild(day)
    }

    // static appendRecords(trackerId, i, dayDate){
    //     for (record of Record.allRecords){
    //         if (trackerId > 0){
    //             record.tracker.id == trackerId
    //             let date = new Date(`${record.date}`).getDate()
    //         }
    //         if (date == i-1){
    //             dayDate.innerHTML += `<li>${record.num} ${record.unit}</li>`
    //         }
    //     }
    // }

}
