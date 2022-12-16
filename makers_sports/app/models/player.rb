class Player < ApplicationRecord
  belongs_to :agent
  belongs_to :organization
end
