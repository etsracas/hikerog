class YamalogsController < ApplicationController
  def index
    @yamalogs = Yamalog.all.order(created_at: :desc)
  end

  def new
    @yamalog = current_user.yamalogs.build
  end

  def create
    @yamalog = current_user.yamalogs.build(yamalog_params)
    if @yamalog.save
      redirect_to @yamalog, notice: '作成しました'
    else
      render :new
    end
  end

  def show
    @yamalog = Yamalog.find(params[:id])
  end

  def destroy

  end

  private

  def yamalog_params
    params.require(:yamalog).permit(
      :hiking_date, :mountain_name, :weather, :member, :route, :gpslog
    )
  end
end
