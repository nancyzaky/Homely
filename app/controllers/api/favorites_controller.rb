class Api::FavoritesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  def create
    product = Product.find(params[:product_id])
    user = User.find(params[:user_id])
if user && product
  fav_find = Favorite.find_by(user_id: params[:user_id], product_id: params[:product_id])
  if !fav_find
fav = Favorite.create!(fav_params)
return render json: fav, status: :created

else
  render json: {error: "Item already added to favorites"}, status: :unprocessable_entity
end
end
  end

  def most_fav
favs = Product.joins(:favorites).group("products.id").order("count(product_id) DESC"
).limit(5)
# arr = favs.keys
# products = Product.find(arr)
render json: favs
  end
def index
  user = User.find(params[:user_id])
  favs = Favorite.where(user_id: user)
   render json: favs, include: :product

end
  def destroy
    fav = Favorite.find(params[:id])
    fav.destroy
   head :no_content
end
  private
  def fav_params
    params.permit(:user_id, :product_id)
  end
    def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
  def render_not_found
 render json: { error: "Not authorized" }, status: :unauthorized
  end
end
