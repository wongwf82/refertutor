json.array!(@client_seeks) do |client_seek|
  json.extract! client_seek, :name, :age, :gender, :mobile_number, :home_number, :state, :service_area, :subjects, :levels, :availability, :requirements
  json.url client_seek_url(client_seek, format: :json)
end