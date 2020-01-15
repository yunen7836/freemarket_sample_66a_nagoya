Rails.application.routes.draw do
  devise_for :users, controllers: {
  omniauth_callbacks: 'users/omniauth_callbacks',
  registrations: 'users/registrations'
  }


  root "items#index"
  get "users/logout"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_scope :user do
    root :to => "devise/sessions#new"
    get 'address_users', to: 'users/registrations#new_address_user'
    post 'address_users', to: 'users/registrations#create_address_user'
  end
  resources :items, only: [:new, :create]
  resources :users, only: [:show, :new]
end