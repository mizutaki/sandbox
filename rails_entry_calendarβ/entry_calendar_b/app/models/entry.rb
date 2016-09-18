class Entry < ActiveRecord::Base
  def self.entry_count(day)
    Entry.where(calendar_id: day).count
  end
end
