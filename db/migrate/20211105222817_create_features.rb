class CreateFeatures < ActiveRecord::Migration[6.1]
  def change
    create_table :features do |t|
      t.string :feat
      t.integer :product_id

      t.timestamps
    end
  end
end
