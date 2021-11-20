class CartsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def create
    find_item = @user.carts.find_by(product_id: params[:product_id])
    if find_item
      return render json: {error: "Item Already Added To Cart"}
    else
  cart = Cart.create!(cart_params)
  all_user_carts = User.find(params[:user_id]).carts

  render json: all_user_carts, status: :created
    end
  end

  def show

    items = User.find(params[:id]).carts

    render json: items
  end

  def update
    cart = Cart.find_by(user_id:params[:id], product_id: params[:product_id])
    cart.update(quantity: params[:quantity])
    all_user_carts = User.find(params[:id]).carts

    render json: all_user_carts
  end
def destroy

  cart = Cart.find(params[:id])
  cart.delete

  head :no_content
end
  private
  def cart_params
params.permit(:user_id, :product_id, :quantity)
  end

  def record_not_found
render json: {error: "Record not found"}, status: :not_found
  end

    def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
