Rails.application.routes.draw do
  resources :players, only: [ :index, :show, :create, :update, :destroy]
  resources :organizations, only: [:create, :show, :destroy, :index, :destroy]
  resources :agents, only: [:show, :create, :destroy]

#   # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

#   # Defines the root path route ("/")
#   # root "articles#index"
# end

# config/routes.rb

  # route to test your configuration

  get '/hello', to: 'application#hello_world'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to:'sessions#destroy'
  get '/authorized_user', to: 'users#show'
end
