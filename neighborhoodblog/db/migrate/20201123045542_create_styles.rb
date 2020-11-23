class CreateStyles < ActiveRecord::Migration[5.2]
  def change
    create_table :styles do |t|
      t.string "name", null: false
      t.string "json", null: false 
      t.timestamps
    end
  end
end
