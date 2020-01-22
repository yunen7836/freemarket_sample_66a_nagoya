class ItemsController < ApplicationController
  before_action :move_to_login, only: [:new, :create]
  before_action :set_item, only: [:show, :buy_comfirmation]

  def index
  end

  def show
  end

  def buy_confirmation
    @user = User.find(current_user.id)
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

  def credit
  end

  
  
  private

  def move_to_login
    redirect_to new_user_session_path unless user_signed_in?
  end

  def item_params
    params.require(:item).permit(:name, :price, :description, :category_id, :condition, :shipping_charge, :shipping_method, :ship_form, :shipping_days,brand_attributes: [:name], item_images_attributes: [:image, :_destroy, :id]).merge(user_id: current_user.id)
  end

  def set_item
    @item = Item.find(params[:id])
  end
end
