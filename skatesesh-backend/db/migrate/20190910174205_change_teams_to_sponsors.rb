class ChangeTeamsToSponsors < ActiveRecord::Migration[5.2]
  def change
    rename_table :teams, :sponsors
  end
end
