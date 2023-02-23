Rails.application.routes.draw do
  post 'use/create'
  # cable
  mount ActionCable.server => "/cable"

  root to: "home#index"

  get 'home/index'
  devise_for :users

  get '/card/:id', to: 'use#card'

  get "/service-worker.js" => "service_worker#service_worker"
  get "/manifest.json" => "service_worker#manifest"
end
