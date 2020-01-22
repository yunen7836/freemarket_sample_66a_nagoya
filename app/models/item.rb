class Item < ApplicationRecord
  has_many :item_images, dependent: :destroy
  accepts_nested_attributes_for :item_images
  belongs_to :brand
  accepts_nested_attributes_for :brand
  belongs_to :category
  belongs_to :user


  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :ah_prefecture
  belongs_to_active_hash :ah_condition
  belongs_to_active_hash :ah_shipping_days
  belongs_to_active_hash :ah_shipping_method
  belongs_to_active_hash :ah_shipping_charge

end