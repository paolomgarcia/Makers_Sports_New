class Agent < ApplicationRecord
    has_many :players
    has_many :organizations, through: :players

    has_secure_password
end
