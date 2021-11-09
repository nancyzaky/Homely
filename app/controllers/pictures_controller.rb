class PicturesController < ApplicationController
def create
 pic = Picture.create!(pic_params)
 render json: pic, status: :created
  end


  private

  def pic_params
  params.permit(:url, :product_id)
  end
end
