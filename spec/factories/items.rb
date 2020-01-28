FactoryBot.define do

  factory :item do
    name             {"div"}
    price            {"30000"}
    description      {"名古屋校"}
    category_id      {"300"}
    brand_id            {"1"}
    user_id          {"1"}
    condition        {"1"}
    shipping_charge  {"1"}
    shipping_method  {"1"}
    ship_form        {"1"}
    shipping_days    {"1"}
  end

end