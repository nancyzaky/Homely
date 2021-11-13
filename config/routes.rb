Rails.application.routes.draw do

  resources :users, only: [:create, :index] do
      resources :favorites, only: [:create]

  end
  resources :carts, only: [:create, :show, :update, :destroy]
  resources :sessions, only: [:create]
  resources :products, only: [:show, :index]
  resources :checkout, only: [:create]
#  get "/product/:cat", to: "products#getcat"
 delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"
  delete "/favorites/:product_id/:user_id", to: "favorites#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

#   get '/order/success' do
#   session = Stripe::Checkout::Session.retrieve(params[:session_id])
#   customer = Stripe::Customer.retrieve(session.customer)

#   "<html><body><h1>Thanks for your order</h1></body></html>"
# end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
