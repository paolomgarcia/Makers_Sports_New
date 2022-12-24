class UsersController < ApplicationController
   # skip_before_action
    skip_before_action :authorized_user, only: [:create]
    wrap_parameters format: []

   def show
       # user = User.find(params[:id])
       render json: current_user, status: :ok
   end

   def create
    
       user = User.create!(user_params)
       session[:user_id] = user.id
       render json: user, status: :created
   end

   private

   def user_params
       params.permit(:name, :email, :password)
   end
end
