# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Tracker.create(name: "Weight", id: 1)
Tracker.create(name: "Exercise", id: 2)

Record.create(date: "2021-06-1", content: "140 lbs", tracker_id: 1)
Record.create(date: "2021-06-2", content: "140 lbs", tracker_id: 1)

Record.create(date: "2021-06-3", content: "Gym: 30 min", tracker_id: 2)
Record.create(date: "2021-06-4", content: "Gym: 20 min", tracker_id: 2)

# new Date('1988-03-21')