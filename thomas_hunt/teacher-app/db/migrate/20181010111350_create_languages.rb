class CreateLanguages < ActiveRecord::Migration[5.2]
  def change
    create_table :languages do |t|
      t.text :name
      t.text :type
      t.text :difficulty

      t.timestamps
    end
  end
end
