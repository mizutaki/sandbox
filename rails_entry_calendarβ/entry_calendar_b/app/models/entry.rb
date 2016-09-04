class Entry < ActiveRecord::Base
  belongs_to :calendar, foreign_key: "calednar_id"
end
