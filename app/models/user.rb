class User < ApplicationRecord
  # :confirmable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable

  validates :name, presence: true
end
