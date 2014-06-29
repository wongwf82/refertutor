class UserMailer < ActionMailer::Base
  default :from => "info@refertutor.com"
  default :to => "wongwf82@gmail.com"
  default :bcc => "wongwf82@gmail.com"

  def support(support)
    @support = support
    mail(:subject => 'ReferTutor.com - Support', :from => @support[:email])
  end

  def tutor_seek(tutor_seek)
    @tutor_seek = tutor_seek
    mail(:subject => "ReferTutor.com - I'm looking for tutors", :from => @tutor_seek[:email])
  end

end
