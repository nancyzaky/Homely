class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :description
      t.string :material
      t.integer :price

      t.timestamps
    end
  end
end
