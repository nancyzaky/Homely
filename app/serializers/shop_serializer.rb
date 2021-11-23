class ShopSerializer < ActiveModel::Serializer
attributes :id, :product, :quantity, :cart
end
