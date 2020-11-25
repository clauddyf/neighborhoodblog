# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


##First seed of City

# washington = City.new(city_name:'Washington D.C.', longitude:'-77.0369',latitude:'38.9072')
# washington.save!
# puts "successfuly seeded"

require 'open-uri'
require 'csv'
# Style.destroy_all
# First seed of Hbn    
gardens = Hbn.new(hbn_name:'Da Gardens',city_id:1, longitude:'38.880722', latitude:'-76.989542')
gardens.save!
puts "successfuly seeded first hbn"

## First seed of Artist
# glizzy = Artist.new(city_id: 1, hbn_id: 1, rap_name:'Ant Glizzy', birth_name:'Antwon Evans')
# glizzy.save!
# puts "successfuly seeded first artist"

csv_text = File.read(Rails.root.join('db','lib','firstseed.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
    t = Style.new

    t.name = row['Name']
    t.json = row['JSON']
    t.save!
    puts "#{t.name} saved"
end
puts "There are now #{Style.count} rows in the MapStyles table"

# t.json1.each do |char|
#     char = 

# end
