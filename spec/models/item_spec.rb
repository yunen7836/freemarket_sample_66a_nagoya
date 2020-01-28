require 'rails_helper'

RSpec.describe Item, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

describe Item do
  describe '#create' do
    it "is invalid without a name" do
      current_user = FactoryBot.build(:user)
      brand = FactoryBot.build(:brand)
      item = FactoryBot.build(:item, name: "")
      item.valid?
      expect(item.errors[:name]).to include("を入力してください")
    end
    
    it "is invalid without a price" do
      current_user = FactoryBot.build(:user)
      brand = FactoryBot.build(:brand)
      item = FactoryBot.build(:item, price: "")
      item.valid?
      expect(item.errors[:price]).to include("を入力してください")
    end

    it "is invalid without a description" do
      current_user = FactoryBot.build(:user)
      brand = FactoryBot.build(:brand)
      item = FactoryBot.build(:item, description: "")
      item.valid?
      expect(item.errors[:description]).to include("を入力してください")
    end

    it "is invalid without a category" do
      current_user = FactoryBot.build(:user)
      brand = FactoryBot.build(:brand)
      item = FactoryBot.build(:item, category_id: "")
      item.valid?
      expect(item.errors[:category_id]).to include("を入力してください")
    end

    it "is invalid without a condition" do
      current_user = FactoryBot.build(:user)
      brand = FactoryBot.build(:brand)
      item = FactoryBot.build(:item, condition: "")
      item.valid?
      expect(item.errors[:condition]).to include("を入力してください")
    end

    it "is invalid without a shipping_charge" do
      current_user = FactoryBot.build(:user)
      brand = FactoryBot.build(:brand)
      item = FactoryBot.build(:item, shipping_charge: "")
      item.valid?
      expect(item.errors[:shipping_charge]).to include("を入力してください")
    end

    it "is invalid without a shipping_method" do
      current_user = FactoryBot.build(:user)
      brand = FactoryBot.build(:brand)
      item = FactoryBot.build(:item, shipping_method: "")
      item.valid?
      expect(item.errors[:shipping_method]).to include("を入力してください")
    end

    it "is invalid without a ship_form" do
      current_user = FactoryBot.build(:user)
      brand = FactoryBot.build(:brand)
      item = FactoryBot.build(:item, ship_form: "")
      item.valid?
      expect(item.errors[:ship_form]).to include("を入力してください")
    end

    it "is invalid without a shipping_days" do
      current_user = FactoryBot.build(:user)
      brand = FactoryBot.build(:brand)
      item = FactoryBot.build(:item, shipping_days: "")
      item.valid?
      expect(item.errors[:shipping_days]).to include("を入力してください")
    end

    it "Within 40 character a name" do
      current_user = FactoryBot.build(:user)
      brand = FactoryBot.build(:brand)
      item = FactoryBot.build(:item, name: "a" * 41)
      item.valid?
      expect(item.errors[:name]).to include("は40文字以内で入力してください")
    end

    it "Within 1000 character a description" do
      current_user = FactoryBot.build(:user)
      brand = FactoryBot.build(:brand)
      item = FactoryBot.build(:item, description: "a" * 1001)
      item.valid?
      expect(item.errors[:description]).to include("は1000文字以内で入力してください")
    end

    it "300 yen or more" do
      current_user = FactoryBot.build(:user)
      brand = FactoryBot.build(:brand)
      item = FactoryBot.build(:item, price: 299)
      item.valid?
      expect(item.errors[:price]).to include("は300以上の値にしてください")
    end
  end
end