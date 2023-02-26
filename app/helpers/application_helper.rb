module ApplicationHelper
  def get_svg(path)
    File.open("app/assets/images/#{path}", "rb") { |file| raw(file.read) }
  end

  def validate_email_with_domain(email)
    !(email =~ /\A[\w+\-.]+@seudominio\.com\z/i).nil?
  end
end