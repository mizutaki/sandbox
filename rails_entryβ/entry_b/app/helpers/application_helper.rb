module ApplicationHelper
  def entry_image_tag(entry, options = {})
    if entry.attachment_file.present?
      path = entry_path(entry,format:"png")
      link_to(image_tag(path, { alt: "hoge" }.merge(options)), path)
    end
  end
end
