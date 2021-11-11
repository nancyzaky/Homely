class CartSerializer < ActiveModel::Serializer
  attributes :id, :product, :quantity, :pictures
end
