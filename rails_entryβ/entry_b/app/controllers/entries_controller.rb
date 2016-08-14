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
    #p @entry
    if @entry.save
      redirect_to @entry, notice: "作成しました。"
    else

    end
  end

  def show
    @entry = Entry.find(params[:id])
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

  private
  def entry_params
    params.require(:entry).permit(:title, :body, :posted_at)
  end
end
