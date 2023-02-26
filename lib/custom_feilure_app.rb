class CustomFailureApp < Devise::FailureApp
  def respond
    if request.controller_class.to_s.start_with?('ActionCable')
      raise env['warden'].message || :warden
    else
      super
    end
  end
end