class MembersController < ApplicationController
  before_action :login_required
  def index
    @members = Member.order("number")
    .paginate(page: params[:page], per_page: 15)
  end
  #会員情報の詳細
  def show
    @member = Member.find(params[:id])
  end
  #新規作成フォーム
  def new
    @member = Member.new(birthday:Date.new(1970,1,1))
  end

  def edit
    @member = Member.find(params[:id])
  end
  #会員の新規登録
  def create
    @member = Member.new(member_params)
    if @member.save
      redirect_to @member, notice:"会員を登録しました。"
    else
      render "new"
    end
  end
  #会員情報の更新
  def update
    @member = Member.find(params[:id])
    @member.assign_attributes(member_params)
     p @member
    if @member.save
      redirect_to @member, notice:"会員情報を更新しました。"
    else
      render "edit"
    end
  end
  #会員の削除
  def destroy
    @member = Member.find(params[:id])
    @member.destroy
    redirect_to :members, notice:"会員を削除しました。"
  end

  def search
    @members = Member.search(params[:q])
    .paginate(page: params[:page], per_page: 15)
    render "index"
  end

  private
  def member_params
    attrs = [:number, :name, :full_name, :gender,:birthday, :email,
    :password,:password_confirmation]
    attrs << :administrator if current_member.administrator?
    params.require(:member).permit(attrs)
  end
end
