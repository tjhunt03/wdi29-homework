class CreateMountains < ActiveRecord::Migration[5.2]
  def change
    create_table :mountains do |t|

      t.text    :name
      t.text    :country
      t.float   :elevation
      t.string  :image
      t.integer :pointyness

      #Creates two date columns: date_created and date_modified
      t.timestamps
    end
  end
end
