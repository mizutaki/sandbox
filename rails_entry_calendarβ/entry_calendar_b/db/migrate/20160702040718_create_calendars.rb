class CreateCalendars < ActiveRecord::Migration
  def change
    create_table :calendars do |t|
      t.belongs_to :entry
      t.string :calendar_id

      t.timestamps null: false
    end
  end
end
