class CreateAgents < ActiveRecord::Migration[7.0]
  def change
    create_table :agents do |t|
      t.string :login
      t.string :password
      t.string :a_name
      t.date :a_birthday
      t.string :a_nationality

      t.timestamps
    end
  end
end
