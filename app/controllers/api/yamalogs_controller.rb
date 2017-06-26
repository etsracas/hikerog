class YamalogsController < ApplicationController
  def index
    @yamalogs = Yamalog.all.order(created_at: :desc)

    render 'index', formats: 'json', handlers: 'jbuilder'
  end

  def new
  end

  def show
    @yamalog = Yamalog.find_by(id: params[:id])
  end
end
