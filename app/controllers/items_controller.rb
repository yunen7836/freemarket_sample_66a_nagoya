class ItemsController < ApplicationController
  def index
    @items = Item.includes(:item_images).order('created_at DESC')
  end
  def new
    @item = Item.new
    @item.item_images.new
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

  def product_params
    params.require(:item).permit(:name, :price, :description, :category_id, :condition, :shipping_charge, :shipping_method, :ship_form, :shipping_days, item_images_attributes: [:image]).merge(user_id: current_user.id)
  end
end
