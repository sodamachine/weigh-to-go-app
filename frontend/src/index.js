
const calendar = document.getElementById("calendar")

        const header = document.getElementById("header")
            const monthDiv = document.getElementById("monthDiv")
            const trackerDiv = document.getElementById("trackerDiv")

        const weekdayDiv = document.getElementById("weekdayDiv")

        const content = document.getElementById("content")
            const dayDiv = document.getElementById("dayDiv")
        
        const footer = document.getElementById("footer")

    // const trackerNav = document.getElementById("trackerNav")
    // const recordDiv = document.getElementById("recordDiv")
    // const trackerForm = document.getElementById("trackerForm")
    // const recordForm = document.getElementById("recordForm")
    // const trackerBar = document.getElementById("trackerBar")        

function jsonToJS(resp) {
    return resp.json()
}

Tracker.appendHeader()


// header.remove()
// weekdayDiv.remove()
// dayDiv.remove()