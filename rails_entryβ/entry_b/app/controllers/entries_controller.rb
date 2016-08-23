class EntriesController < ApplicationController
  def index
    @entries = Entry.all
  end

  def new
    @entry = Entry.new
  end

  def create
    params[:entry][:posted_at] = Time.now
    @entry = Entry.new(entry_params)
    if @entry.save
      redirect_to @entry, notice: "作成しました。"
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
      redirect_to @entry, notice: "更新しました。"
    else
      render "edit"
    end
  end

  def destroy
    @entry = Entry.find(params[:id])
    @entry.destroy
    redirect_to :entries, notice: "削除しました。"
  end
  private
  def entry_params
    attr = [:title, :body, :posted_at, :attachment_file, :content_type]
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
