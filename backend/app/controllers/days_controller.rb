class DaysController < ApplicationController

    def index
        render json: Day.all
    end

    def show
        day = Day.find_by(id: params[:id])
        render json: day
    end

    def create
        day = Day.create(day_params)
        render json: day
    end

    private

        def day_params
            params.require(:day).permit(:date)
        end

end
