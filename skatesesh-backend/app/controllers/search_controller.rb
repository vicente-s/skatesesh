class SearchController < ApplicationController
skip_before_action :authorized, only: [:create]

    def create

      response = RestClient.get "https://maps.googleapis.com/maps/api/place/nearbysearch/json?name=skatepark&location=#{params["lat"]},#{params["lng"]}&radius=2500&type=skatepark&keyword=skatepark&key=#{ENV['GOOGLE_KEY']}"
      parsed_response = JSON.parse(response)
      results = parsed_response["results"]

      new_results = results.collect { |skatepark|
        {
          skatepark["name"] => {
              "location" => skatepark["geometry"]["location"],
              "rating" => skatepark["rating"],
              "vicinity" => skatepark["vicinity"]
            }
        }
      }

      # results[skatepark]["name"]
      # results[skatepark]["rating"]
      # results[skatepark]["vicinity"]
      render json: new_results.to_json
    end


end
