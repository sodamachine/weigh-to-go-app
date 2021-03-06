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

    def destroy
        record = Record.find_by(id: params[:id])
        record.destroy
        render json: {message: "Succesfully deleted"}
    end

    private

        def record_params
            params.require(:record).permit(:date, :content, :tracker_id, :id)
        end

end