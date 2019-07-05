class TeamsController < ApplicationController
  skip_before_action :authorized, only: [:index]


  def index
    @teams = Team.all
    render json: @teams.to_json
  end

end
