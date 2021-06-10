class TrackersController < ApplicationController

    def index
        render json: Tracker.all
    end

    def show
        tracker = Tracker.find_by(id: params[:id])
        render json: tracker
    end

    def create
        tracker = Tracker.create(tracker_params)
        render json: tracker
    end

    private

        def tracker_params
            params.require(:tracker).permit(:name)
        end
    
end
