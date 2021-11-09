class CartsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  def create
    find_item = Cart.find_by(product_id: params[:product_id], user_id:params[:user_id])
    if find_item
      return render json: {error: "Item Already Added To Cart"}
    else
  cart = Cart.create!(cart_params)
  render json: cart, status: :created
    end
  end

  def show

    items = User.find(params[:id]).carts
    arr = []
    items.each do |item|
     pdct =   Product.find(item.product_id)

    arr << pdct
    end
    render json: arr
  end

  def update
    cart = Cart.find_by(user_id:params[:user_id], product_id: params[:product_id])
    cart.update
  end

  private
  def cart_params
params.permit(:user_id, :product_id, :quantity)
  end

  def record_not_found
render json: {error: "Record not found"}, status: :not_found
  end
end
