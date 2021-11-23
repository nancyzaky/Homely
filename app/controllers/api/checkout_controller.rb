class Api::CheckoutController < ApplicationController

  def create
    shop = Shop.find_by(user_id: @user.id, active:true)
    products = Shop.find_by(user_id: @user.id, active:true).carts
    all_products =  products.map do |item|
       find_product = Product.find(item[:product_id])

   if params[:discountApplied] === "Final-week-20"
    item_price = find_product.price * 100 - ((find_product.price * 100) /5)
   else
    item_price = find_product.price * 100
   end

       {"name" => find_product[:name] , "amount" =>item_price,  "currency" => "usd" , "quantity" =>item[:quantity]}
     end
  session = Stripe::Checkout::Session.create({
   line_items:all_products,
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: "http://localhost:4000/success/#{shop.id}",
    cancel_url: "http://localhost:4000/error",
  })
  # redirect session.url, 303
  render json: session.to_json
  end
end

