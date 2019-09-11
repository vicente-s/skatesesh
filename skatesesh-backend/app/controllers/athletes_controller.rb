class AthletesController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]

  def index
    @athletes = Athlete.all
    render json: @athletes.to_json
  end

  def show
    @athlete = Athlete.find(params[:id])
    render json: @athlete.to_json
  end

end
