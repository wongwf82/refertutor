json.array!(@tutor_seeks) do |tutor_seek|
  json.extract! tutor_seek, :title, :name, :mobile_number, :home_number, :reason, :state, :service_area, :subjects, :level, :num_students, :requirements
  json.url tutor_seek_url(tutor_seek, format: :json)
end