class CreateTutorSeeks < ActiveRecord::Migration
  def change
    create_table :tutor_seeks do |t|
      t.string :title
      t.string :name
      t.string :mobile_number
      t.string :home_number
      t.string :email
      t.string :reason
      t.string :state
      t.string :service_area
      t.string :subjects
      t.string :levels
      t.string :num_students
      t.string :requirements

      t.timestamps
    end
  end
end
