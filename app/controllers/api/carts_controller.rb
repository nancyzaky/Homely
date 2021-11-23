class Api::CartsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def create
      shop_session = Shop.find_by(active: true, user_id:@user)

    find_item = @user.carts.find_by(product_id: params[:product_id], shop_id: shop_session)
    if find_item
      return render json: {error: "Item Already Added To Cart"}
    else
  shop_session = Shop.find_by(active: true, user_id:@user)

    cart = Cart.create!(cart_params)
    cart.shop_id = shop_session.id
    cart.save
  all_user_carts = User.find(params[:user_id]).carts.where(shop_id: shop_session.id)
  render json: all_user_carts, status: :created
    end
  end

  def show

  shop_session = Shop.find_by(active: true, user_id: @user.id)
     if !shop_session
        shop_session = Shop.create(user_id: @user.id)
      end
    items = User.find(params[:id]).carts.where(shop_id: shop_session.id)

    render json: items
  end

  def update
  shop_session = Shop.find_by(active: true, user_id: @user.id)

    cart = Cart.find_by(user_id:params[:id], product_id: params[:product_id], shop_id:shop_session)
    cart.update(quantity: params[:quantity])
    all_user_carts = User.find(params[:id]).carts.where(shop_id: shop_session.id)

    render json: all_user_carts
  end
def destroy
  shop_session = Shop.find_by(active: true, user_id: @user.id)

  cart = Cart.find_by(id: params[:id] , shop_id: shop_session.id)
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
