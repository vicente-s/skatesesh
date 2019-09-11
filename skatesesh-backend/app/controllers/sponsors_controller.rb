class SponsorsController < ApplicationController
  skip_before_action :authorized, only: [:index]


  def index
    @sponsors = Sponsor.all
    render json: @sponsors.to_json
  end

end
