class CreateRecords < ActiveRecord::Migration[6.1]
  def change
    create_table :records do |t|
      t.date :date
      t.integer :num
      t.string :unit
      t.belongs_to :tracker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
