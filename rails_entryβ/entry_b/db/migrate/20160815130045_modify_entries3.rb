class ModifyEntries3 < ActiveRecord::Migration
  def change
    add_column :entries, :content_type, :string
  end
end
