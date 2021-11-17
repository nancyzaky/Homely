class AddProductIdToPictures < ActiveRecord::Migration[6.1]
  def change
    add_column :pictures, :product_id, :integer
  end
end
