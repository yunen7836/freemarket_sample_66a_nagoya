# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, index:true|
|email|string|null: false|
|password|string|null: false|
|first_name|string|null: false|
|last_name|string|null: false|
|first_name_kana|string|null: false|
|last_name_kana|string|null: false|
|birthday|date|null: false|
|phone_number|string|null: false|
|self_introduction|string|

### Association
- has_one :adress_delivery dependent::destroy
- has_one :credit_card dependent::destroy
- has_one :sns_credential dependent::destroy
- has_many :items
- has_one :address_user dependent::destroy

## address_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|index: true, null: false, foreign_key: true|
|prefecture_id|integer|null: false|
|postal_code|string|null: false|
|city|string|null: false|
|street|string|null: false|
|building|string|

### Association
- belongs_to :user

## address_deliverysテーブル

|Column|Type|Options|
|------|----|-------|
|first_name|string|null: false|
|last_name|string|null: false|
|first_name_kana|string|null: false|
|last_name_kana|string|null: false|
|postal_code|string|null: false|
|prefecture_id|string|null: false|
|user_id|integer|index: true, null: false, foreign_key: true|
|address_city|string|null: false|
|address_street|string|null: false|
|address_building|string|
|phone_number|string|

### Association
- belongs_to :user

## credit_cardsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|index: true, null: false, foreign_key: true|
|customer_id|integer|index: true, null: false|
|card_id|integer|index: true, null: false|


### Association
- belongs_to :user

## sns_credentialsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|provider|stribg|
|uid|string|

### Association
- belongs_to :user

## itemsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index:true|
|price|integer|null: false|
|description|text|null: false|
|catagory|references|null: false, foreign_key:true|
|size|integer||
|brand|references|foreign_key:true|
|condition|integer|null: false|
|shipping_charge|integer|null: false|
|shipping_method|integer|null: false|
|ship_form|integer|null: false, index:true|
|shipping_days|integer|null: false|
|payment_status|integer|null: false|
|sending_status|integer|null: false|
|receiving_status|integer|null: false|
|payment_method|integer|null: false|
|user|references|null: false, foreign_key:true|
|buyer|references|foreign_key:true|

### Association
- has_many :item_images dependent::destroy
- belongs_to :category
- belongs_to :brand
- belongs_to :user

## item_imagesテーブル

|Column|Type|Options|
|------|----|-------|
|item_id|references|null: false, foreign_key:true|
|image|string|

### Association
- belongs_to :item

## categorysテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|ancestry|string|

### Association
- has_many :items

## brandsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|

### Association
- has_many :items
