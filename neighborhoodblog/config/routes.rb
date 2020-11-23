Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    
    resources :cities, only: [:show,:index]
    resources :hbns, only: [:show, :index]
    resources :artist, only: [:show,:index]
    resources :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :update, :show, :index]
    resources :styles, only[:show]
  end
  root "static_pages#root"
end
