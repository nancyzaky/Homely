class Api::SessionsController < ApplicationController
before_action :authorize
  skip_before_action :authorize, only: [:create]

  def create
    user = User.find_by(email: params[:email])
    #  PostMailer.post_created.deliver_now

    if user&.authenticate(params[:password])

      session[:user_id] = user.id
      render json: user, status: :created

    else
      render json: {error: "Invalid email or password" }, status: :unauthorized
    end
  end

  def destroy
   session.delete :user_id
  head :no_content
   reset_session
   session[:user_id] = nil
  end

  private
 def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

end
