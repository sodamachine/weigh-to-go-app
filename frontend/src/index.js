const dayForm = document.getElementById('dayForm')
dayForm.addEventListener('submit', Day.postDay)

Day.fetchDays()

function jsonToJS(resp) {
    return resp.json()
}