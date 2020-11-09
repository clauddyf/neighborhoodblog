class Api::HbnsController < ApplicationController
    def show
        @hbn = Hbn.find(params[:id])
        render :show
    end

    def index
        @hbns = Hbn.all
        render :index
    end

end
