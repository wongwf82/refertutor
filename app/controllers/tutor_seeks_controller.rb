class TutorSeeksController < ApplicationController
  before_action :set_tutor_seek, only: [:show, :edit, :update, :destroy]

  # GET /tutor_seeks
  # GET /tutor_seeks.json
  def index
    @tutor_seeks = TutorSeek.all
  end

  # GET /tutor_seeks/1
  # GET /tutor_seeks/1.json
  def show
  end

  # GET /tutor_seeks/new
  def new
    @tutor_seek = TutorSeek.new
  end

  # GET /tutor_seeks/1/edit
  def edit
  end

  # POST /tutor_seeks
  # POST /tutor_seeks.json
  def create

    @tutor_seek = TutorSeek.new(tutor_seek_params)
    if @tutor_seek.save
      UserMailer.tutor_seek(@tutor_seek).deliver
      flash[:success] = 'Thank you and chat soon!'
      redirect_to :back
    end   

  end

  # PATCH/PUT /tutor_seeks/1
  # PATCH/PUT /tutor_seeks/1.json
  def update
    respond_to do |format|
      if @tutor_seek.update(tutor_seek_params)
        format.html { redirect_to @tutor_seek, notice: 'Tutor seek was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @tutor_seek.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tutor_seeks/1
  # DELETE /tutor_seeks/1.json
  def destroy
    @tutor_seek.destroy
    respond_to do |format|
      format.html { redirect_to tutor_seeks_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tutor_seek
      @tutor_seek = TutorSeek.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def tutor_seek_params
      params.require(:tutor_seek).permit(:title, :name, :mobile_number, :home_number, :email, :reason, :state, :service_area, :subjects, :levels, :num_students, :requirements)
    end
end
