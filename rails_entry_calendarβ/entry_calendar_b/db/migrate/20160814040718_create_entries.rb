class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :title
      t.text :body
      t.datetime :posted_at
      t.binary :attachment_file
      t.string :content_type
      t.integer :calendar_id

      t.timestamps null: false
    end
  end
end
