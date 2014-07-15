class AddExamDateToTutorSeek < ActiveRecord::Migration
  def change
    add_column :tutor_seeks, :exam_date, :datetime
  end
end
