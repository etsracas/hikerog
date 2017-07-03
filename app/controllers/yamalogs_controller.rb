class YamalogsController < ApplicationController
  def index
    @yamalogs = Yamalog.all.order(created_at: :desc)
  end

  def new
  end

  def show
    @yamalog = Yamalog.find(params[:id])
  end

  def destroy
    
  end
end
