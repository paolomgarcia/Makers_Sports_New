class AgentSerializer < ActiveModel::Serializer
  attributes :id, :login, :password, :a_name, :a_birthday, :a_nationality
end
