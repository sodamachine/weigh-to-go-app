let monthList = new Array(
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  )

  let dayList = new Array(
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  )

  let today = new Date()
  
  class Calendar {

    constructor({date, id, records}){
        this.date = date
        this.id = id
        this.records = records.map(record => new Record(record))
    }

    static appendCalendar(){
        let calendarDiv = document.getElementById("calendar")
        let currentMonth = new Date(today.getFullYear(), today.getMonth(), 1)
        let header = document.createElement("div")
        header.classList.add("header")
        calendarDiv.append(header)

    }








}