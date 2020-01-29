class UsersController < ApplicationController
  before_action :authenticate_user!, except: [:new]
  before_action :set_user, only: [:show, :profile_show, :update, :logout, :identification, :identification_update]
  before_action :set_address, only: [:identification, :identification_update]
  def show
  end

  def new
  end

  def logout
  end
  
  def profile_show
  end

  def identification
  end

  def identification_update
    if @address.update(update_address_user)
      redirect_to user_identification_path(current_user.id)
    else
      render :identification
    end
  end
  
  def update
    @user.update(update_params)
    redirect_back(fallback_location: root_path)
  end

  private

  def set_user
    @user = User.find(current_user.id)
  end

  def set_address
    @address = AddressUser.find_by(user_id: current_user.id)
  end

  def update_params
    params.require(:user).permit(:nickname, :first_name, :last_name, :first_name_kana, :last_name_kana, :phone_number, :birthday, :email, :self_introduction)
  end

  def update_address_user
    params.require(:address_user).permit(:postal_code, :prefecture_id, :city, :street, :building)
  end
  end
