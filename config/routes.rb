Rails.application.routes.draw do

  # routes for jbuilder
  namespace :api do
    namespace :yamalogs do
      get '/', action: 'index'
      get '/new', action: 'new'
      get '/:id', action: 'show'
      post '/new', action: 'create'
      patch '/;id', action: 'update'
      delete '/:id', action: 'destroy'
    end
  end

  devise_for :users, controllers: { :omniauth_callbacks => "omniauth_callbacks" }
  resources :yamalogs

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
