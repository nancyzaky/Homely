class Picture < ApplicationRecord
belongs_to :product
validates :url, uniqueness: true
validates :product_id, presence: true
end