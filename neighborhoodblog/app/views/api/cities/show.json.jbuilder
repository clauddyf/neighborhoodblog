json.city do 
    json.partial! '/api/cities/city', city: @city
end