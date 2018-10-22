class CreateBrands < ActiveRecord::Migration[5.2]
  def change
    create_table :brands do |t|
      t.text :company_name
      t.text :founded
      t.text :image

      t.timestamps
    end
  end
end
