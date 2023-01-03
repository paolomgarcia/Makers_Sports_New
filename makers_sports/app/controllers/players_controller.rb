class PlayersController < ApplicationController
    def index
        render json: Player.all, status: :ok
    end

    def show
        production = Player.find(params[:id])
        render json: player, include: :p_name, status: :ok
    end

    def create
        player = Player.create!(player_params)
        render json: player, status: :created
    end

    def update
        player = Player.find(params[:id])
        player.update!(player_params)
        render json: player, status: :accepted
    end

    def destroy
        player = Player.find(params[:id])
        player.destroy
        head :no_content
    end

    private

    def player_params
        params.permit(:p_name, :p_birthday, :p_nationality, :height, :weight, :position)
    end

end
