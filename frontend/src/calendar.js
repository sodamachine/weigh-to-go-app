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

    









}