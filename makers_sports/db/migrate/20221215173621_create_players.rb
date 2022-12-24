class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :p_name
      t.date :p_birthday
      t.string :p_nationality
      t.integer :height
      t.integer :weight
      t.string :position
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
