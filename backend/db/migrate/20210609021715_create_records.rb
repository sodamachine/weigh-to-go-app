class CreateRecords < ActiveRecord::Migration[6.1]
  def change
    create_table :records do |t|
      t.integer :weight
      t.belongs_to :calendar, null: false, foreign_key: true

      t.timestamps
    end
  end
end
