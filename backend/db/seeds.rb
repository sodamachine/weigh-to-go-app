# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Tracker.create(name: "Weight", id: 1)
Tracker.create(name: "Waist", id: 2)
Tracker.create(name: "Activity", id: 3)

Record.create(date: "01/06/2021", num: 140, unit: "lbs", tracker_id: 1)
Record.create(date: "02/06/2021", num: 139, unit: "lbs", tracker_id: 1)
Record.create(date: "03/06/2021", num: 138, unit: "lbs", tracker_id: 1)