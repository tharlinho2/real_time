require_relative "boot"

require "rails/all"
require "action_cable/engine"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module MapRealTime
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.

    config.action_cable.mount_path = "/cable"

    config.i18n.default_locale = "pt-BR"
    config.time_zone = 'America/Sao_Paulo'
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
