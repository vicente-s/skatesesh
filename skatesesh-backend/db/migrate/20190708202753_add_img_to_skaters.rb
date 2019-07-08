class AddImgToSkaters < ActiveRecord::Migration[5.2]
  def change
    add_column :skaters, :img, :string
  end
end
