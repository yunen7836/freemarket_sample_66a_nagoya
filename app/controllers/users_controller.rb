class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:show, :profile_show, :update]
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
  
  def update
    @user.update(update_params)
    redirect_back(fallback_location: root_path)
  end

  private

  def set_user
    @user = User.find(current_user.id)
  end

  def move_to_login
    redirect_to new_user_session_path unless user_signed_in?
  end

  def update_params
    params.require(:user).permit(:nickname, :first_name, :last_name, :first_name_kana, :last_name_kana, :phone_number, :birthday, :email, :self_introduction)
  end
  end
