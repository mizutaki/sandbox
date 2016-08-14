class ModifyEntries < ActiveRecord::Migration
  def change
    add_column :entries, :body, :text
    add_column :entries, :posted_at, :datetime
    change_column :entries, :posted_at, :datetime, null: false
  end
end
