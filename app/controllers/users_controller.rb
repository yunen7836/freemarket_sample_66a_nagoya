class UsersController < ApplicationController
  before_action :set_user, only: [:show, :profile_show]
  before_action :move_to_login, only: [:show, :logout, :profile_show]

  def show
    @user = User.all
  end

  def new
  end

  def logout
  end
  
  def profile_show
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def move_to_login
    redirect_to new_user_session unless user_signed_in?
  end

end
