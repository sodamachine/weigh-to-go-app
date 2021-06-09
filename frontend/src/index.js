// // let dayForm = document.getElementById('dayForm')
// // dayForm.addEventListener('submit', Day.postDay)

const calendar = document.getElementById("calendar")

function jsonToJS(resp) {
    return resp.json()
}

Tracker.appendCalendar()