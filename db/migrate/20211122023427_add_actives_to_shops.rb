class AddActivesToShops < ActiveRecord::Migration[6.1]
  def change
    add_column :shops, :active, :boolean, default: true
  end
end
