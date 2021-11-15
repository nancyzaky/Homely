class Favorite <ApplicationRecord
belongs_to :user
belongs_to :product
has_many :pictures, through: :product

validates :user_id, presence: true
validates :user_id, numericality: { greater_than: 0 }
validates :product_id, presence: true
validates :product_id, numericality: { greater_than: 0 }

end