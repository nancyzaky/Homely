class Api::FeaturesController < ApplicationController
    def create
 feature = Feature.create!(feature_params)
 render json: feature, status: :created
  end


  private

  def feature_params
  params.permit(:feat, :product_id)
  end
end
