class Hbn < ApplicationRecord
    validates :hbn_name, presence: true

    has_many :artists, class_name: :Artist, foreign_key: :hbn_id

    belongs_to :city
end
