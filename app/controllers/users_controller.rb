class UsersController < ApplicationController
  def show
    @user = User.all
  end

  def new
  end

  def logout
  end
end
