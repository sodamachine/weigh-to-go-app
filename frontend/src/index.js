const dayForm = document.getElementById('dayForm')
dayForm.addEventListener('submit', Day.postDay)

Day.fetchDays()

function jsonToJS(resp) {
    return resp.json()
}

function returnHome() {
    document.getElementById('dayContainer').innerHTML = `
        <form id="dayForm">
            <label>Log your day</label>
            <input type="text" id="datepicker">
            <input type="submit" value="Submit">
        </form>
        <div id="days"></div>`
    dayForm = document.getElementById("dayForm")
    dayForm.addEventListener("submit", Day.postDay)
    Day.appendListsOnReturnHome()
}