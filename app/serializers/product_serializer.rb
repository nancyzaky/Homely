class ProductSerializer < ActiveModel::Serializer
  attributes :id, :price, :description, :material, :specific, :features, :pictures, :cat, :name
end
