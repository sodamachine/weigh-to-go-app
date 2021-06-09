// // let dayForm = document.getElementById('dayForm')
// // dayForm.addEventListener('submit', Day.postDay)

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

// // let currentMonth = new Date(
// //     today.getFullYear(), 
// //     today.getMonth(), 
//     // 1
// // )

let monthLength = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
).getDate()

const calendar = document.getElementById("calendar")

function appendMonth(){
    let header = document.createElement("div")
    let month = document.createElement("div")
    header.classList.add("header")
    month.classList.add("month")
    month.innerText = monthList[today.getMonth()] + " " + today.getFullYear()
    header.appendChild(month)
    calendar.appendChild(header)
    appendWeekdays()
}

function appendWeekdays(){
    let weekday = document.createElement("div")
    for (let i = 0; i < dayList.length; i++){
        let cell = document.createElement("span")
        cell.classList.add("cell")
        cell.classList.add("day")
        cell.innerText = dayList[i].substring(0, 3)
        weekday.appendChild(cell)
    }
    for (let i = 0; i < today.getDay(); i++){
        let cell = document.createElement("span")
        cell.classList.add("cell")
        cell.classList.add("empty")
        weekday.appendChild(cell)
    }
    for (let i = 1; i <= monthLength; i++){
        let cell = document.createElement("span")
        cell.classList.add("cell")
        cell.innerText = `${i}`
        weekday.appendChild(cell)
    }
    calendar.appendChild(weekday)
}


    
    
    // calendar.appendChild(day)




// function jsonToJS(resp) {
//     return resp.json()
// }

appendMonth()

// // Tracker.fetchTrackers()