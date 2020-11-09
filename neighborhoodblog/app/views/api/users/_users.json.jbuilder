if user
    json.extract! user, :id, :email, :username 
else
 {}
end