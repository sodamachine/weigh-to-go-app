# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Day.create(date: "06/01/2021")
Day.create(date: "06/02/2021")

Record.create(weight: 140, day_id: 1)
Record.create(weight: 139, day_id: 2)