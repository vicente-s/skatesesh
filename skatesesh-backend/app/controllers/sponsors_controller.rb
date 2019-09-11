class SponsorsController < ApplicationController
  skip_before_action :authorized, only: [:index]


  def index
    @sponsors = Sponsor.all
    render json: @sponsors.to_json
  end

  def show
    @sponsor = Sponsor.find(params[:id])
    render json: @sponsor.to_json
  end

end
