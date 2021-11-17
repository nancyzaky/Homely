class Product < ApplicationRecord
has_many :pictures
has_many :features
has_one :specific
has_many :favorites
has_many :users, through: :favorites
has_many :users, through: :carts
end