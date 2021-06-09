// // let dayForm = document.getElementById('dayForm')
// // dayForm.addEventListener('submit', Day.postDay)

const calendar = document.getElementById("calendar")
let today = new Date()

function jsonToJS(resp) {
    return resp.json()
}

Tracker.appendCalendar()