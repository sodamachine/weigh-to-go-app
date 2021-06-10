class RecordsController < ApplicationController

    def index
        render json: Record.all
    end

    def show
        record = Record.find_by(id: params[:id])
        render json: record
    end

    def create
        record = Record.create(record_params)
        render json: record
    end

    private

        def record_params
            params.require(:record).permit(:date, :num, :unit, :tracker_id, :id)
        end

end