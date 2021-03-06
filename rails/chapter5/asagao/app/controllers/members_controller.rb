class MembersController < ApplicationController
  def index
    @members = Member.order("number")
  end
  #会員情報の詳細
  def show
    @member = Member.find(params[:id])
  end
  #新規作成フォーム
  def new
    @member = Member.new(birthday:Date.new(1980,1,1))
  end

  def edit
    @member = Member.find(params[:id])
  end

  def create
  end

  def update
  end

  def destroy
  end

  def search
    @members = Member.search(params[:q])
    render "index"
  end
end
