class Tracker {

    appendTracker(){
        const trackersDiv = document.getElementById("trackers")
        const li = document.createElement("li")
        const div = document.createElement("div")
        li.innerText = this.name
        li.addEventListener('click', this.showTrackerPage.bind(this))
        trackersDiv.append(div)
        div.append(li)
        this.appendRecords(div)
    }
    
    static fetchTrackers(){
        fetch("http://localhost:3000/trackers")
        .then(jsonToJS)
        .then(this.appendTrackers)
    }

    static appendTrackers(trackers){
        for (let tracker of trackers){
            let newTracker = new Tracker(tracker)
            newTracker.appendTracker()
        }
    }

}