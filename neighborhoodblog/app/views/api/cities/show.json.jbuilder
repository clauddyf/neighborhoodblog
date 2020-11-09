json.location do 
    json.partial! '/api/cities/city', city: @city
end