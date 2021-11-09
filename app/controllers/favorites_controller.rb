class FavoritesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  def create
    product = Product.find(params[:product_id])
    user = User.find(params[:user_id])
if user && product
  fav_find = Favorite.find_by(user_id: params[:user_id], product_id: params[:product_id])
  if !fav_find
fav = Favorite.create!(fav_params)
return render json: fav, status: :created

else
  render json: {error: "Item already added to favorites"}, status: :not_found
end
end
  end

  def destroy
    fav = Favorite.find_by(user_id: params[:user_id], product_id: params[:product_id])
    fav.destroy

end
  private
  def fav_params
    params.permit(:user_id, :product_id)
  end
    def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
