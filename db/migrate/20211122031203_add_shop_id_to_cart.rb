class AddShopIdToCart < ActiveRecord::Migration[6.1]
  def change
    add_column :carts, :shop_id, :integer
  end
end
