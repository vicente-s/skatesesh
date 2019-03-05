class SearchController < ApplicationController

  def create
    response = RestClient.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.7006374,-73.9876029&radius=2500&type=skatepark&keyword=skatepark&key=')
    byebug
    json_response = JSON.parse(response.body)
    json_to_render = json_response['results'].map do |skatepark|
      # reference = skatepark['photos'][0]['photo_reference']
      # photo_url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=#{reference}&key=AIzaSyAY6Ne4POUv5MWjCRq7Uk1AlI-0JQO2S7U"
      # photo = RestClient.get(photo_url)
      # byebug
      # photo_response = JSON.parse(photo)

      open_now = skatepark['opening_hours']['open_now'] if skatepark['opening_hours']

      {
        latitude: skatepark["geometry"]['location']['lat'],
        longitude: skatepark["geometry"]['location']['lng'],
        rating: skatepark["rating"],
        address: skatepark['vicinity'],
        open_now: open_now,
        name: skatepark["name"]
      }

    end
    # create a search result
    # params lat, long
    # make the request to google's api
    # respond with the coordinates of all the skateparks nearby

    render json: json_to_render.to_json
    # render back to front
  end

end
