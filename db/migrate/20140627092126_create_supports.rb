class CreateSupports < ActiveRecord::Migration
  def change
    create_table :supports do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :subject
      t.string :message

      t.timestamps
    end
  end
end
