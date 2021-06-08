class TrackersController < ApplicationController

    def index
        render json: Tracker.all
    end

    def show
        tracker = Tracker.find_by(id: params[:id])
        render json: tracker
    end

end
