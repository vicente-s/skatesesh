class SearchController < ApplicationController
skip_before_action :authorized, only: [:create]

    def create
      response = RestClient.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{params["lat"]},#{params["lng"]}&radius=2500&type=skatepark&keyword=skatepark&key=')
      byebug

    end


end
