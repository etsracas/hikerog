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
      redirect_to @yamalog
    else
      render :new
    end
  end

  def show
    @yamalog = Yamalog.find(params[:id])
  end

  def edit
    @yamalog = current_user.yamalogs.find(params[:id])
  end

  def update
    @yamalog = current_user.yamalogs.find(params[:id])
    if @yamalog.update(yamalog_params)
      redirect_to @yamalog
    else
      render :edit
    end
  end

  def destroy
    @yamalog = current_user.yamalogs.find(params[:id])
    @yamalog.destroy!
    redirect_to yamalogs_path
  end

  private

  def yamalog_params
    params.require(:yamalog).permit(
      :hiking_date, :mountain_name, :weather, :member, :route, :yamalog_pic, :yamalog_pic_cache, :remove_yamalog_pic, :gpslog
    )
  end
end
