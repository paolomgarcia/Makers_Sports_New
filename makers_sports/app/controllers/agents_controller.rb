class AgentsController < ApplicationController
   # skip_before_action
    skip_before_action :authorized_user, only: [:create]

    def show
        # user = User.find(params[:id])
        render json: current_user, status: :ok
    end

    def create
        user = Agent.create!(user_params)
        session[:user_id] = agent.id
        render json: agent, status: :created
    end

    private

    def user_params
        params.permit(:name, :email, :password)
    end
end
