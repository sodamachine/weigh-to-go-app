class Tracker {

    static allTrackers = []

    constructor({name, id, records}){
        this.name = name
        this.id = id
        records.forEach(record => new Record(record))
        Tracker.allTrackers.push(this)
    }

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

    appendRecords(div){
        const ul = document.createElement("ul")
        ul.id = `tracker-${this.id}`
        div.append(ul)
        for (let record of this.records){
            record.appendRecord(ul)
        }
    }

    showTrackerPage(){
    }
    
    static fetchTrackers(){
        fetch("http://localhost:3000/trackers")
        .then(jsonToJS)
        .then(trackers => this.appendTrackers(trackers))
    }

    static appendTrackers(trackers){
        for (let tracker of trackers){
            let newTracker = new Tracker(tracker)
            newTracker.appendTracker()
        }
    }

    static postTracker(e){
        e.preventDefault()
        const userInput = e.target.children[1].value
        const body = {
            list: {
                name: userInput
            }
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        e.target.reset()
        fetch("http://localhost:3000/trackers", options)
        .then(jsonToJS)
        .then(tracker => {
            let newTracker = new Tracker(tracker)
            newTracker.appendTracker()
        })
    }

}