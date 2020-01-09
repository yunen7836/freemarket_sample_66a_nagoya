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
|nickname|string|index: true, null: false|
|email|string|null: false|
|password|string|null: false|
|first_name|string|index: true, null: false|
|last_name|string|index: true, null: false|
|first_name_kana|string|index: true, null: false|
|last_name_kana|string|index: true, null: false|
|birthday|datatime|null: false|
|provider|stribg||
|uid|string||
|phone_number|string|null: false|
|self_introduction|string|

### Association
- has_one :delivery
- has_one :credit_card
- has_one :sns_credential
- has_many :items
- has_one :user_adress

## user_addressesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|index: true, null: false, foreign_key: true|
|prefecture_id|string|null: false|
|postal_code|string|null: false|
|city|string|null: false|
|street|string|null: false|
|building|string|

### Association
- belongs_to :user

## deliverysテーブル

|Column|Type|Options|
|------|----|-------|
|first_name|string|index: true, null: false|
|last_name|string|index: true, null: false|
|first_name_kana|string|index: true, null: false|
|last_name_kana|string|index: true, null: false|
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
|name|string|null: false|
|price|integer|null: false|
|description|text|null: false|
|catagory_id|references|null: false, foreign_key:true|
|size|int|null: false|
|brand_id|integer|
|condition|integer|null: false|
|shipping_charge|integer|null: false|
|ship_form|integer|null: false, index:true|
|shipping_days|integer|null: false|
|payment_status|integer|null: false|
|sending_status|integer|null: false|
|receiving_status|integer|null: false|
|payment_method|integer|null: false|

### Association
- has_many :item_images
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
