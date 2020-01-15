class AddressUser < ApplicationRecord
  belongs_to :user, optional: true
  validates :prefecture_id, :postal_code, :city, :street, presence: true
end