class CreateSpecifics < ActiveRecord::Migration[6.1]
  def change
    create_table :specifics do |t|
      t.integer :product_id
      t.string :style
      t.float :height
      t.float :width
      t.float :depth
      t.string :materials
      t.string :color

      t.timestamps
    end
  end
end
