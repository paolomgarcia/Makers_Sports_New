class Organization < ApplicationRecord
    has_many :players
    has_many :agents, through: :players
end
