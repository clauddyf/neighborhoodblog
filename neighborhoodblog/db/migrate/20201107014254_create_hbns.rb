class CreateHbns < ActiveRecord::Migration[5.2]
  def change
    create_table :hbns do |t|
      t.string "hbn_name", null: false
      t.integer "city_id", null: false
      t.integer "longitude"
      t.integer "latitude" 
      t.timestamps
    end
  end
end
