class Api::YamalogsController < ApplicationController
  def index
    @yamalogs = Yamalog.all.order(created_at: :desc)
    render 'index', formats: 'json', handlers: 'jbuilder'
  end
end
