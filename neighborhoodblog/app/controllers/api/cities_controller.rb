class Api::CitiesController < ApplicationController
    def show
        @city = City.find(params[:id])
        render :show
    end

    def index
        @cities = City.all
        render :index
    end

end
