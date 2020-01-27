class CategoryController < ApplicationController
  def new
    @children = Category.find(params[:parent_id]).children
    respond_to do |format|
      format.html
      format.json
    end
  end

  def show
    @category = Category.find(params[:id])
    @items = Item.where(category_id: params[:id]).limit(50)
  end

end