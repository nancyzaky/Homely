class Shop < ApplicationRecord
belongs_to :user
has_many :carts
has_many :products, through: :carts
end