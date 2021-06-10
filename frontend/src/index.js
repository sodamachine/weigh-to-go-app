
const calendar = document.getElementById("calendar")
    const header = document.getElementById("header")
        const monthDiv = document.getElementById("monthDiv")
        const trackerDiv = document.getElementById("trackerDiv")
    const weekdayDiv = document.getElementById("weekdayDiv")
    const dayDiv = document.getElementById("dayDiv")
    const trackerForm = document.getElementById("trackerForm")
    const recordForm = document.getElementById("recordForm")
    // const trackerBar = document.getElementById("trackerBar")        

function jsonToJS(resp) {
    return resp.json()
}

Tracker.fetchTrackers()