class Organization < ApplicationRecord
    has_many :players
    has_many :users, through: :players
end
