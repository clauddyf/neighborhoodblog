class Artist < ApplicationRecord

    validates :rap_name, presence: true

    belongs_to :hbn
    belongs_to :city
end
