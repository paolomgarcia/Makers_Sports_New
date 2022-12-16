class CreateOrganizations < ActiveRecord::Migration[7.0]
  def change
    create_table :organizations do |t|
      t.string :sport
      t.string :league
      t.string :team

      t.timestamps
    end
  end
end
