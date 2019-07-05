class SkatersController < ApplicationController
  skip_before_action :authorized, only: [:index]

  def index
    @skaters = Skater.all
    render json: @skaters
  end


end
