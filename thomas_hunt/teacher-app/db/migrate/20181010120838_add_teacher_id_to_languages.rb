class AddTeacherIdToLanguages < ActiveRecord::Migration[5.2]
  def change
    add_column :languages, :teacher_id, :Integer
  end
end
