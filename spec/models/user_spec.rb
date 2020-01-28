require 'rails_helper'
describe User do
  describe '#create' do
    it "is invalid without a email" do
      user = User.new(email: "", password: "00000000", password_confirmation: "00000000")
      user.valid?
      expect(user.errors[:email]).to include("を入力してください")
    end
  end
end