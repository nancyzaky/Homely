class Api::ShopsController < ApplicationController


def update
shop = Shop.find(params[:id])
shop.active = false
shop.save
render json: shop
end
end
