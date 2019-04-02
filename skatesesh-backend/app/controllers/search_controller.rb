class SearchController < ApplicationController
skip_before_action :authorized, only: [:create]

    def create

      response = RestClient.get "https://maps.googleapis.com/maps/api/place/nearbysearch/json?name=skatepark&location=#{params["lat"]},#{params["lng"]}&radius=2500&type=skatepark&keyword=skatepark&key=#{ENV['GOOGLE_KEY']}"
      parsed_response = JSON.parse(response)

      json_to_render = parsed_response["results"].map { |skatepark|
        {
              "name" => skatepark["name"],
              "location" => skatepark["geometry"]["location"],
              "rating" => skatepark["rating"],
              "vicinity" => skatepark["vicinity"]
         }
       }

      # results[skatepark]["name"]
      # results[skatepark]["rating"]
      # results[skatepark]["vicinity"]
      render json: json_to_render.to_json
    end


end
