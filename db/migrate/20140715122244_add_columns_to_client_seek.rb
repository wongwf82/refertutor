class AddColumnsToClientSeek < ActiveRecord::Migration
  def change
    add_column :client_seeks, :heading, :string
    add_column :client_seeks, :tutor_name, :string
    add_column :client_seeks, :tutor_mobile_number, :string
    add_column :client_seeks, :tutor_email, :string
    add_column :client_seeks, :experience, :string
  end
end
