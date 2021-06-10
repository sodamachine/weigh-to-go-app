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

    def destroy
        tracker = Tracker.find_by(id: params[:id])
        tracker.destroy
        render json: {message: "Succesfully deleted"}
    end

    private

        def tracker_params
            params.require(:tracker).permit(:name)
        end
    
end
