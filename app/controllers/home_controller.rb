class HomeController < ApplicationController
  def index
    coord_ids = $redis.georadius('locations', 0, 0, 99999999, 'km')
    members = []

    coord_ids.each do |id|
      user =  User.find(id)

      geo = $redis.geopos('locations', id).first
      html = render_to_string(partial: 'home/card', formats: [:html], locals: { user: user })

      data = {
        id: id,
        html: html,
        latitude: geo[0],
        longitude: geo[1]
      }

      members << data
    end

    @data_coords = members
  end
end
