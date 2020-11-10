@hbns.each do |hbn| 
    json.set! hbn.id do 
        json.partial! 'hbn', hbn: hbn
    end
end 