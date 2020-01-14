class ItemsController < ApplicationController
  def index
    @items = Item.includes(:item_images).order('created_at DESC')
  end
  def new
    @item = Item.new
    @item.item_images.new
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
    params.require(:item).permit(:name, :price, item_images_attributes: [:image])
  end
end
