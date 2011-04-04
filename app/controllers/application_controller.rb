class ApplicationController < ActionController::Base
  protect_from_forgery

  private
  def cache_for span = 5.minutes
    response.headers['Cache-Control'] = "public, max-age=#{span}"
  end
end
