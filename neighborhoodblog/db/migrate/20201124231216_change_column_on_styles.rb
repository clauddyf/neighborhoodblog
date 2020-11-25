class ChangeColumnOnStyles < ActiveRecord::Migration[5.2]
  def change
    remove_column :styles, :json, :string

    add_column :styles, :json1, :text, array: true, default: []
  end
end
