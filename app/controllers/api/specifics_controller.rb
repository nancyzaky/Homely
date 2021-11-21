class Api::SpecificsController < ApplicationController
  def create
    spec = Specific.create!(spec_params)
    render json: spec, status: :created

  end


  private
def spec_params
   params.permit(:product_id, :height, :width, :depth, :color, :style, :materials)
end

end