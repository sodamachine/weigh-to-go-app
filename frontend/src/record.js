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

    appendRecord(){
        debugger
    }

    static appendDays(){
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
            dayDate.classList.add("cell")
            dayDate.innerHTML = `${i}<br><br>`            
            for (let record of this.allRecords){
                let date = new Date(`${record.date}`).getDate()
                if (date == i-1){
                    dayDate.innerHTML += `<li>${record.num} ${record.unit}</li>`
                }
            }                
            day.appendChild(dayDate)
        }
        calendar.appendChild(day)
    }
}