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
        let today = new Date()
        // // let currentMonth = new Date(
        //     today.getFullYear(), 
        //     today.getMonth(), 1
        //     )
        let monthDiv = document.createElement("div")
        // let monthLength = new Date(
        //     today.getFullYear(),
        //     today.getMonth() + 1,
        //     0
        // )
        monthDiv.classList.add("month")
        monthDiv.innerText = monthList[today.getMonth()] + " " + today.getFullYear()
        headerDiv.append(monthDiv)
        this.appendWeekdays(today)
    }







}