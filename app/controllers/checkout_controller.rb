class CheckoutController < ApplicationController

  def create
    product = Product.find(params[:id])
    tot = params[:tot]
  session = Stripe::Checkout::Session.create({

    line_items: [{
      name: product.name,
      amount: tot,
      currency: "usd",
       quantity: 1

    }],
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
