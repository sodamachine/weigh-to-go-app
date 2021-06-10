
    
const calendar = document.getElementById("calendar")

    const trackerBar = document.getElementById("trackerBar")
        const trackerForm = document.getElementById("trackerForm")
        const trackerDiv = document.getElementById("trackerDiv")

    const header = document.getElementById("header")
        const monthDiv = document.getElementById("monthDiv")
    const weekdayDiv = document.getElementById("weekdayDiv")
    const dayDiv = document.getElementById("dayDiv")

function jsonToJS(resp) {
    return resp.json()
}

Tracker.fetchTrackers()