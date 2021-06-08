class RecordsController < ApplicationController
    
    def index
        render json: Record.all
    end

    def show
        record = Record.find_by(id: params[:id])
        render json: record
    end

    def create
        #day = Day.find_by(id: params[:record][:day_id])
        #if day exists, day.records.build(record_params)
        record = Record.create(record_params)
        render json: record
    end

    private

        def record_params
            params.require(:record).permit(:weight, :day_id)
        end

end
