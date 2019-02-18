class CreateSkatespots < ActiveRecord::Migration[5.2]
  def change
    create_table :skatespots do |t|
      t.string :name

      t.timestamps
    end
  end
end
