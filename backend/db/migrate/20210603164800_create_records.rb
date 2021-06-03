class CreateRecords < ActiveRecord::Migration[6.1]
  def change
    create_table :records do |t|
      t.string :content
      t.date :date
      t.belongs_to :tracker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
