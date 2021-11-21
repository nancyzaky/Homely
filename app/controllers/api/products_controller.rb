class Api::ProductsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :authorize
  def create
 product = Product.create!(product_params)
 render json: product, status: :created
  end


def getcat
products = Product.where(cat: params[:cat])
render json: products, include: :pictures
end
# def index
def getfilter
   if params[:filter] === "Price_Low"
    products = Product.where(cat: params[:cat]).order("price ASC")
   elsif
    params[:filter] === "Price_High"
   products = Product.where(cat: params[:cat]).order("price DESC")
  elsif
    params[:filter] === "Below $1000"
    products = Product.where(cat: params[:cat]).where("price < ?", 1000)
  elsif
    params[:filter] === "Below $500"
     products = Product.where(cat: params[:cat]).where("price < ?", 500)
  end
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
