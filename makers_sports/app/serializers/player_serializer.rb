class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :p_name, :p_birthday, :p_nationality, :height, :weight, :position
  has_one :user
  has_one :organization
end
