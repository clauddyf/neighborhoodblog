class Api::StylesController < ApplicationController
    def show
        @style = Style.find(params[:id])
        render :show
    end
end
