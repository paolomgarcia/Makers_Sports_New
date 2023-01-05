class OrganizationsController < ApplicationController

    wrap_parameters format: []

    def index
        render json: Organization.all, status: :ok
    end


end
