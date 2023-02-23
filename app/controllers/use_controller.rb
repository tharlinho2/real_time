class UseController < ApplicationController
  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def card
    user =  User.find(params[:id])
    html = render_to_string(partial: 'home/card', formats: [:html], locals: { user: user })
    render html: html
  end
end
