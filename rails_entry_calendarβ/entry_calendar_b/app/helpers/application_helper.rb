module ApplicationHelper
  def entry_image_tag(entry, options = {})
    if entry.attachment_file.present?
      path = calendar_entry_path(entry.calendar_id,entry,format:"png")
      link_to(image_tag(path, { alt: "hoge" }.merge(options)), path)
    end
  end
end
