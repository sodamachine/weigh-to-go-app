class CreateCalendars < ActiveRecord::Migration[6.1]
  def change
    create_table :calendars do |t|
      t.string :month
      t.integer :day
      t.integer :year
      t.string :weekday

      t.timestamps
    end
  end
end
