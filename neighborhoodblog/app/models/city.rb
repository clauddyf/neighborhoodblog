class City < ApplicationRecord
    validates :city_name, presence: true

    has_many :hbns, class_name: :Hbn, foreign_key: :city_id 

    has_many :artists, class_name: :Artist, foreign_key: :city_id
end
