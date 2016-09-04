class ModifyEntries < ActiveRecord::Migration
  def change
    change_column :entries, :posted_at, :datetime, null: false
  end
end
