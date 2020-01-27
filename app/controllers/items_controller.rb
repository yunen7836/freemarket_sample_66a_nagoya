class ItemsController < ApplicationController
  before_action :move_to_login, only: [:new, :create]
  before_action :set_item, only: [:show]

  def index
    @parents = Category.where(ancestry: nil).page(params[:page]).per(4)
    @parents1 = Category.where(ancestry: nil, id: 1)
    @parents2 = Category.where(ancestry: nil, id: 200)
    @parents3 = Category.where(ancestry: nil, id: 346)
    @parents4 = Category.where(ancestry: nil, id: 481)
    @items1 = Item.joins(:item_images).select('items.id, items.name, items.price, item_images.image').where(category_id: 1)
    @items2 = Item.joins(:item_images).select('items.id, items.name, items.price, item_images.image').where(category_id: 200)
    @items3 = Item.joins(:item_images).select('items.id, items.name, items.price, item_images.image').where(category_id: 346)
    @items4 = Item.joins(:item_images).select('items.id, items.name, items.price, item_images.image').where(category_id: 481)

    
  end

  def show
  end

  def new
    @item = Item.new
    @item.item_images.new
    @item.build_brand
    @parents = Category.where(ancestry: nil).order("id ASC")
  end

  def create
    @item = Item.new(product_params)
    if @item.save
      redirect_to root_path
    else
      render :new
    end
  end
  
  private

  def set_item
    @item = Item.find(params[:id])
  end

  def move_to_login
    redirect_to new_user_session_path unless user_signed_in?
  end

  def product_params
    params.require(:item).permit(:name, :price, :description, :category_id, :condition, :shipping_charge, :shipping_method, :ship_form, :shipping_days,brand_attributes: [:name], item_images_attributes: [:image]).merge(user_id: current_user.id)
  end
end
