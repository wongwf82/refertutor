json.array!(@supports) do |support|
  json.extract! support, :name, :email, :phone, :subject, :message
  json.url support_url(support, format: :json)
end