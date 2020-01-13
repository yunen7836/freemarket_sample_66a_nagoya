class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.integer :price, null: false
      t.text :description, null: false
      t.references :category, null: false, foreign_key:true
      t.integer :size, null: false
      t.integer :brand_id
      t.integer :condition, null: false
      t.integer :shipping_charge, null: false
      t.integer :ship_form, null: false, index:true
      t.integer :shipping_days, null: false
      t.integer :payment_status, null: false
      t.integer :sending_status, null: false
      t.integer :receiving_status, null: false
      t.integer :payment_method, null: false

      t.timestamps
    end
  end
end