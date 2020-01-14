class AddColumnUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :uid, :integer,index: true
    add_column :users, :provider, :integer,index: true
  end
end
