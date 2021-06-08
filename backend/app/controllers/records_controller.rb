class RecordsController < ApplicationController

    def index
        render json: Record.all
    end

    def show
        record = Record.find_by(id: params[:id])
        render json: record
    end

end
