class EntriesController < ApplicationController
  def index
    @day = params[:calendar_id]
    @entries = Entry.where(calendar_id: @day)
  end

  def new
    @entry = Entry.new
  end

  def create
    params[:entry][:posted_at] = Time.now
    params[:entry][:calendar_id] = params[:calendar_id]
    p params[:entry][:calendar_id]
    @entry = Entry.create(entry_params)
    @calendar = Calendar.create(entry_id: @entry.id, calendar_id: @entry.calendar_id)
    if @entry.save and @calendar.save
      redirect_to calendar_entry_path(@entry.calendar_id, @entry.id), notice: "作成しました。"
    else

    end
  end

  def show
    @entry = Entry.find(params[:id])
    if params[:format].in?(["jpg","png","gif"])
      send_image
    else
      render "show"
    end
  end

  def edit
    @entry = Entry.find(params[:id])
  end

  def update
    @entry = Entry.find(params[:id])
    @entry.assign_attributes(entry_params)
    if @entry.save
      redirect_to calendar_entry_path(@entry.calendar_id, @entry.id), notice: "更新しました。"
    else
      render "edit"
    end
  end

  def destroy
    @entry = Entry.find(params[:id])
    @entry.destroy
    redirect_to :calendars, notice: "削除しました。"
  end
  private
  def entry_params
    attr = [:title, :body, :posted_at, :attachment_file, :content_type, :calendar_id]
    if params[:entry][:attachment_file].present?
      params[:entry][:content_type] = params[:entry][:attachment_file].content_type
      params[:entry][:attachment_file] = params[:entry][:attachment_file].read
    end
    params.require(:entry).permit(attr)
  end

  def send_image
    if @entry.attachment_file.present?
      send_data @entry.attachment_file,
        type: @entry.content_type, disposition: "inline"
    else
      raise NotFound
    end
  end
end
