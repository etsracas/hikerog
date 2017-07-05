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
  get 'yamalogs/' => 'yamalogs#index'
  get 'yamalogs/new' => 'yamalogs#new'
  post 'yamalogs/new' => 'yamalogs#create'
  get 'yamalogs/:id' => 'yamalogs#show'
  patch 'yamalogs/:id' => 'yamalogs#update'
  delete 'yamalogs/:id' => 'yamalogs#destroy'

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
