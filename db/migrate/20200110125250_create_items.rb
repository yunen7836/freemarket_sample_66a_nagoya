class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.integer :price, null: false
      t.text :description, null: false
      t.references :category, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.integer :condition, null: false
      t.integer :shipping_charge, null: false
      t.integer :shipping_method, null: false
      t.integer :ship_form, null: false
      t.integer :shipping_days, null: false
      t.references :brand, foreign_key:true
      t.timestamps
    end
  end
end