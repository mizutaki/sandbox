class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :title
      t.string :calendar_id
      t.text :body
      t.datetime :posted_at
      t.binary :attachment_file
      t.string :content_type
      
      t.timestamps null: false
    end
  end
end
