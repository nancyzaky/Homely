class ProductsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :authorize
  def create
 product = Product.create!(product_params)
 render json: product, status: :created
  end
# def getcat
# products = Product.find_by(cat: params[:cat])
# #  products = Product.all
# render json: products
# end
def index

 products = Product.all
 render json: products, includes: :pictures
end
def show
  product = Product.find(params[:id])
  render json: product,  includes: :pictures
end
  private

  def product_params
  params.permit(:description, :material, :price)

  end
  def authorize
    render json: {error: "Category doesn't exit"}, status: :not_found
  end
end
