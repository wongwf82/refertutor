class CreateClientSeeks < ActiveRecord::Migration
  def change
    create_table :client_seeks do |t|
      t.string :name
      t.string :age
      t.string :gender
      t.string :mobile_number
      t.string :home_number
      t.string :email
      t.string :state
      t.string :service_area
      t.string :subjects
      t.string :levels
      t.string :availability
      t.string :requirements

      t.timestamps
    end
  end
end
