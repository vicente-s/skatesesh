class SkatersController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]

  def index
    @skaters = Skater.all
    render json: @skaters.to_json
  end


end
