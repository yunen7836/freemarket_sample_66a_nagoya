class Item < ApplicationRecord
  has_many :item_images, dependent: :destroy
  accepts_nested_attributes_for :item_images, allow_destroy: true
  belongs_to :brand, optional: true, dependent: :destroy
  accepts_nested_attributes_for :brand
  belongs_to :category
  belongs_to :user

  validates :name,
            :price,
            :description,
            :category_id,
            :user_id,
            :condition,
            :shipping_charge,
            :shipping_method,
            :ship_form,
            :shipping_days,
            presence: true
  validates :name, length: { maximum: 40 }
  validates :description, length: { maximum: 1000 }
  validates :price, :numericality => { :greater_than_or_equal_to => 300 }


  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :ah_prefecture
  belongs_to_active_hash :ah_condition
  belongs_to_active_hash :ah_shipping_days
  belongs_to_active_hash :ah_shipping_method
  belongs_to_active_hash :ah_shipping_charge

end