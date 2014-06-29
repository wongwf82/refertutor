class UserMailer < ActionMailer::Base
  default :from => "info@refertutor.com"
  default :to => "chuanjye@gmail.com"
  default :bcc => "wongwf82@gmail.com"

  def support(support)
    @support = support
    mail(:subject => 'ReferTutor.com - Support', :from => @support[:email])
  end

  def tutor_seek(tutor_seek)
    @tutor_seek = tutor_seek
    mail(:subject => "ReferTutor.com - I'm looking for tutors", :from => @tutor_seek[:email])
  end

  def client_seek(client_seek)
    @client_seek = client_seek
    mail(:subject => "ReferTutor.com - I'm looking for clients", :from => @client_seek[:email])
  end

end
