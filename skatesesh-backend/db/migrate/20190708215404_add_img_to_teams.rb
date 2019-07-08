class AddImgToTeams < ActiveRecord::Migration[5.2]
  def change
    add_column :teams, :img, :string
  end
end
