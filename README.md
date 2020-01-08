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
|birthday|string|null: false|
|provider|stribg||
|uid|string||
|postal_code|string|null: false|
|prefecture_id|string|null: false|
|address_city|string|null: false|
|address_street|string|null: false|
|address_building|string||
|phone_number|string|null: false|
|self_introduction|string||


### Association
- belongs_to :delivery
- belongs_to :creditcard
- belongs_to :snscredential
- has_many :items

## deliverysテーブル

|Column|Type|Options|
|------|----|-------|
|first_name|string|index: true, null: false|
|last_name|string|index: true, null: false|
|first_name_kana|string|index: true, null: false|
|last_name_kana|string|index: true, null: false|
|postal_code|string|null: false|
|prefecture_id|string|null: false|
|address_city|string|null: false|
|address_street|string|null: false|
|address_building|string||
|phone_number|string||

### Association
- belongs_to :user

## creditcardsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|index: true, null: false, foreign_key: true|
|customer_id|integer|index: true, null: false|
|card_id|integer|index: true, null: false|


### Association
- belongs_to :user

## snscredentialsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|index: true, null: false, foreign_key: true|
|provider|stribg||
|uid|string||

### Association
- belongs_to :user


## itemsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|price|integer|null: false|
|description|text|null: false|
|catagory_id|references|null: false, foreign_key:true|
|size_id|references|foreign_key:true|
|brand_id|integer|
|condition|integer|null: false|
|shipping_charge|integer|null: false|
|ship_form|integer|null: false, index:true|
|shipping_days|integer|null: false|
|payment_status|integer|null: false|
|sending_status|integer|null: false|
|receiving_status|integer|null: false|
|buyer_id|reference|foreign_key:{to_table::users}|
|seiler_id|string|foreign_key:{to_table::users}|
|payment_method|integer|null: false|

### Association
- has_many :itemimages
- belongs_to :category
- belongs_to :size
- belongs_to :brand
- belongs_to :user

## itemimagesテーブル

|Column|Type|Options|
|------|----|-------|
|product_id|references|null: false, foreign_key:true|
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

## sizesテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique:true|

### Association
- has_many :items

## brandsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|

### Association
- has_many :items
