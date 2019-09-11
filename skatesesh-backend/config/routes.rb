Rails.application.routes.draw do
  resources :sponsors
  resources :athletes
  root 'sponsors#index'

  namespace :api do
    namespace :v1 do
      resources :users

      post '/login', to: "auth#create"
      get '/profile', to: "users#profile"
    end
  end

  post '/search', to: "search#create"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
