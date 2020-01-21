class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :name, null: false
      t.string :ancestry
      t.timestamps
      paginates_per 4
    end
  end
end
