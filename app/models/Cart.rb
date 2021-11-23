class Cart < ApplicationRecord
belongs_to :user
belongs_to :product
belongs_to :shop
has_many :pictures, through: :product
end