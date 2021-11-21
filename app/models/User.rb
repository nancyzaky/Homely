class User < ApplicationRecord
 has_secure_password
 has_many :products, through: :favorites
 has_many :favorites
 has_many :carts, -> {order(:created_at)}
 has_many :products, through: :carts
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze


  validates :name, presence: true, uniqueness:true
  validates :password, presence: true, length: {minimum: 6}
  validates :email, presence: true, uniqueness: true, format: {with: VALID_EMAIL_REGEX}
end