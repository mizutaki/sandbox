class ModifyEntries < ActiveRecord::Migration
  def change
    change_column :entries, :posted_at, :datetime, null: false
    change_column :entries, :calendar_id, :integer, null: false
  end
end
