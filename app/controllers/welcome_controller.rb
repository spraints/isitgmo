class WelcomeController < ApplicationController
  def index
    cache_for 1.day
  end
end
