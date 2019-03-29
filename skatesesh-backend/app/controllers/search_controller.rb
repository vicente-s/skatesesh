class SearchController < ApplicationController
skip_before_action :authorized, only: [:create]

    def create

      response = RestClient.get "https://maps.googleapis.com/maps/api/place/nearbysearch/json?name=skatepark&location=#{params["lat"]},#{params["lng"]}&radius=2500&type=skatepark&keyword=skatepark&key=#{ENV['GOOGLE_KEY']}"
      parsed_response = JSON.parse(response)
      # results[0]["geoetry"]["location"]

      results = parsed_response["results"]

      results.each do |skatepark|
        byebug
      end

      0
    end


end
