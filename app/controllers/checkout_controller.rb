class CheckoutController < ApplicationController

  def create

   products =  params[:items].map do |item|


      {"name" =>item[:product][:name], "amount" =>item[:product][:price]*100,  "currency" => "usd" , "quantity" =>item[:quantity]}
     end
  session = Stripe::Checkout::Session.create({
   line_items:products,
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: "http://localhost:4000/success",
    cancel_url: "http://localhost:4000/success",
  })
  # redirect session.url, 303
  render json: session.to_json
  end
end


   # line_items: [{
    #   name: product.name,
    #   amount: tot,
    #   currency: "usd",
    #    quantity: 1

    # }, {  name: "whatever",
    #   amount: 45,
    #   currency: "usd",
    #    quantity: 1}],