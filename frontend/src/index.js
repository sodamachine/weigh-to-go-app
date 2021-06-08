trackerForm.addEventListener('submit', Tracker.postTracker)

Tracker.fetchTrackers()

function jsonToJS(resp) {
    return resp.json()
}