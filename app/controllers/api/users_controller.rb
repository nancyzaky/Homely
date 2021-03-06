class Api::UsersController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :authorize
  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end
def show

render json: @user, include: :favorites
end
  private

def user_params
   params.permit(:name, :email, :password, :password_confirmation)
end
  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
 def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end
end
