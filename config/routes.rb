Rails.application.routes.draw do
  
  devise_for :users, controllers: {
  omniauth_callbacks: 'users/omniauth_callbacks',
  registrations: 'users/registrations'
  }


  root "items#index"
  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_scope :user do
    root :to => "devise/sessions#new"
    get 'address_users', to: 'users/registrations#new_address_user'
    post 'address_users', to: 'users/registrations#create_address_user'
    get "phone_number_confirmation", to: 'users/registrations#phone_number_confirmation'
  end
  

  resources :items, only: [:new, :create, :show, :edit, :update] do
    get 'buy_confirmation'
    collection do
      get 'get_category_children', defaults: { format: 'json' }
      get 'get_category_grandchildren', defaults: { format: 'json' }
    end
  end

  resources :users, only: [:show, :new, :update] do
    get "profile_show"
    get "logout"
  end

  #クレカ登録
  resources :card, only: [:index, :new, :show] do
    collection do
      post 'show', to: 'card#show'
      post 'pay', to: 'card#pay'
      post 'delete', to: 'card#delete'
    end
  end

  #商品購入
  resources :purchase, only: [:index] do
    collection do
      get 'index', to: 'purchase#index'
      post 'pay', to: 'purchase#pay'
      get 'done', to: 'purchase#done'
    end
  end

end