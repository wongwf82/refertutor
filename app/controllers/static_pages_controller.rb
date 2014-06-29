class StaticPagesController < ApplicationController

  def home
    @support = Support.new
    @tutor_seek = TutorSeek.new
  end

  def about
    @support = Support.new
  end

  def test
    @support = Support.new
  end

end
