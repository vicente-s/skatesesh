class CreateSkatespotFaves < ActiveRecord::Migration[5.2]
  def change
    create_table :skatespot_faves do |t|
      t.integer :user_id
      t.integer :skatespot_id

      t.timestamps
    end
  end
end
