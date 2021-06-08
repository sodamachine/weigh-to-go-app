class Tracker {

    static fetchTrackers(){
        fetch("http://localhost:3000/trackers")
        .then(jsonToJS)
        .then(this.appendTrackers)
    }

}