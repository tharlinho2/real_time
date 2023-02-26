# frozen_string_literal: true

class LocationReflex < ApplicationReflex

  def update(params)
    data = {
      id: params[:user_id],
      latitude: params[:latitude],
      longitude: params[:longitude]
    }

    location = $redis.geopos('locations', data[:id])

    if location.any?
      cable_ready["user"].dispatch_event(name: "update_marker_user", detail: data).broadcast
    else
      user = User.find(data[:id])
      html = ApplicationController.new.render_to_string(partial: 'home/card', formats: [:html], locals: { user: user })

      set_location = $redis.geoadd('locations', data[:latitude], data[:longitude], data[:id])
      cable_ready["user"].dispatch_event(name: "new_marker_user", detail: data.merge(html: html)).broadcast if set_location.to_b
    end
  end
end
