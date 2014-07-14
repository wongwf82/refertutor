class StaticPagesController < ApplicationController

  def home
    init
  end

  def about
    init
  end

  def how
    init
  end

  def test
    init
  end

private

  def init
    @support = Support.new
    @tutor_seek = TutorSeek.new
    @client_seek = ClientSeek.new
  end

end
