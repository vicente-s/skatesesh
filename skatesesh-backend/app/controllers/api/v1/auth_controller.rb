class Api::V1::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create, :show]

  def create
  @user = User.find_by(username: user_login_params[:username])
    if @user && @user.authenticate(user_login_params[:password])
      token = encode_token({user_id: @user.id})
      render json: { user: UserSerializer.new(@user), jwt: token, status: 200 }, status: :accepted
    else
      render json: { error: "Invalid username or password"}, status: 400
    end
  end

  def show
    auth_string = request.authorization
    # if @user
    #   render json: { user_id: @user.id, user_name: @user.username}
    # else
    #   render json: { error: "ERROR"}, status: 422
    # end
  end

private

def user_login_params
  params.require(:user).permit(:username, :password)
end

end
