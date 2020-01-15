class CreateAddressUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :address_users do |t|
      t.integer :prefecture_id, null: false
      t.string :postal_code, null: false
      t.string :city, null: false
      t.string :street, null: false
      t.string :building
      t.references :user
      t.timestamps
    end
  end
end