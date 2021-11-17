class Cart < ApplicationRecord
belongs_to :user
belongs_to :product
has_many :pictures, through: :product
end