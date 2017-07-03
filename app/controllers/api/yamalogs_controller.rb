class Api::YamalogsController < ApplicationController
  before_action :set_yamalog, only: [:show, :update, :destroy]

  #GET /yamalogs
  def index
    @yamalogs = Yamalog.all.order(created_at: :desc)
    render 'index', formats: 'json', handlers: 'jbuilder'
  end

  #GET /yamalogs/:id
  def show
    render 'show', formats: 'json', handlers: 'jbuilder'
  end

  #POST /yamalogs/new
  def create
    @yamalog = Yamalog.new(yamalog_params)
    if @yamalogs.save
      render 'create', formats: 'json', handlers: 'jbuilder'
    else
      render json: @yamalog.errors, status: :unprocessable_entity
    end
  end

  #PATCH /yamalogs/:id
  def update
    if @yamalog.update(yamalog_params)
      render 'update', formats: 'json', handlers: 'jbuilder'
    else
      render json: @yamalog.errors, status: :unprocessable_entity
    end
  end

  #DELETE /yamalogs/:id
  def destroy
    @yamalog.destroy
  end

  private
    def set_yamalog
      @yamalog = Yamalog.find(params[:id])
    end

    def yamalog_params
      params.require(:yamalog).permit(:hiking_date, :mountain_name, :weather, :member, :route, :gpslog, :yamalog_pic)
    end

end
