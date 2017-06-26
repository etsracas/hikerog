Rails.application.routes.draw do
  # routes for jbuilder
  namespace :api do
    namespace :yamalogs do
      get '/', action: 'index'
    end
  end

  get 'yamalogs/' => 'yamalogs#index'
  get 'yamalogs/new' => 'yamalogs#new'
  get 'yamalogs/:id' => 'yamalogs#show'

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
