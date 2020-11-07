class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.integer "city_id", null: false
      t.integer "hbn_id", null:false
      t.string "rap_name"
      t.string "birth_name"
      t.timestamps
    end
  end
end
