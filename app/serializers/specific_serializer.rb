class SpecificSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :style, :height, :width, :materials, :color, :depth
end
