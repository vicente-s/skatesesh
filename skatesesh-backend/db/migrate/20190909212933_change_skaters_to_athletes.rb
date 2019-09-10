class ChangeSkatersToAthletes < ActiveRecord::Migration[5.2]
  def change
    rename_table :skaters, :athletes
  end
end
