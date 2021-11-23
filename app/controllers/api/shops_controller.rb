class Api::ShopsController < ApplicationController


def update
shop = Shop.find(params[:id])
shop.active = false
shop.save
render json: shop
end

def show
shops = Shop.where(user_id: params[:id])
# arr = shops.map {|item| item.carts}
render json: shops
end


end
