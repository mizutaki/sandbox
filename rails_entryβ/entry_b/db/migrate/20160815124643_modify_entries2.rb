class ModifyEntries2 < ActiveRecord::Migration
  def change
    add_column :entries, :attachment_file, :binary
  end
end
