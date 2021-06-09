let monthList = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
)

let dayList = new Array(
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT"
)

let today = new Date()

let currentMonth = new Date(
    today.getFullYear(), 
    today.getMonth(), 1
)

let monthLength = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
)

let calendarDiv = document.getElementById("calendar")
  
  class Calendar {

    constructor({date, id, records}){
        this.date = date
        this.id = id
        this.records = records.map(record => new Record(record))
    }

    static appendCalendar(){
        let headerDiv = document.createElement("div")
        headerDiv.classList.add("header")
        calendarDiv.append(headerDiv)
        this.appendMonth(headerDiv)
    }

    static appendMonth(headerDiv){
        let monthDiv = document.createElement("div")
        monthDiv.classList.add("month")
        monthDiv.innerText = monthList[today.getMonth()] + " " + today.getFullYear()
        headerDiv.append(monthDiv)
        this.appendWeekdays()
    }

    static appendWeekdays(){
        let weekdayDiv = document.createElement("div")
        for (let i = 0; i < dayList.length; i++){
            let weekdaySpan = document.createElement("span")
            weekdaySpan.classList.add("cell")
            weekdaySpan.classList.add("day")
            weekdaySpan.innerText = dayList[i].substring(0, 3)
            weekdayDiv.append(weekdaySpan)
            calendarDiv.append(weekdayDiv)
        }
        // for (let i = 0; i < today.getDay(); i++){
        //     let daySpan = document.createElement("span")
        //     daySpan.classList.add("cell")
        //     daySpan.classList.add("empty")
        // }
        calendarDiv.append(weekdayDiv)
        // this.appendDays()
    }

    static appendDays(){
        let dayDiv = document.createElement("div")
        for (let i = 1; i <= monthLength; i++){
            let daySpan = document.createElement("span")
            daySpan.classList.add("cell")
            daySpan.innerText = `${i}`
            dayDiv.append(daySpan)
        }
        calendarDiv.append(dayDiv)
        this.append
    }

    static fetchCalendar(){
        fetch("http://localhost:3000/calendars")
        .then(jsonToJS)
        .then(this.appendCalendar)
    }





}