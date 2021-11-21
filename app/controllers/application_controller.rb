class API::ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :set_user

  def set_user
    @user = User.find_by(id: session[:user_id])
  end

end
