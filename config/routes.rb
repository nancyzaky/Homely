Rails.application.routes.draw do
namespace :api do
  resources :users, only: [:create, :index] do
      resources :favorites, only: [:create, :index, :destroy]

  end
  resources :carts, only: [:create, :show, :update, :destroy]
  resources :sessions, only: [:create]
  resources :products, only: [:show]
  resources :checkout, only: [:create]
  get "/product/:cat", to: "products#getcat"
  get "/product/:cat/:filter", to: "products#getfilter"
 delete "/logout", to: "sessions#destroy"
get "/bestsellers", to: "favorites#most_fav"
  get "/me", to: "users#show"
  delete "/favorites/:product_id/:user_id", to: "favorites#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
