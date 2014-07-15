class ClientSeeksController < ApplicationController
  before_action :set_client_seek, only: [:show, :edit, :update, :destroy]

  # GET /client_seeks
  # GET /client_seeks.json
  def index
    @client_seeks = ClientSeek.all
  end

  # GET /client_seeks/1
  # GET /client_seeks/1.json
  def show
  end

  # GET /client_seeks/new
  def new
    @client_seek = ClientSeek.new
  end

  # GET /client_seeks/1/edit
  def edit
  end

  # POST /client_seeks
  # POST /client_seeks.json
  def create
    @client_seek = ClientSeek.new(client_seek_params)
    if @client_seek.save
      UserMailer.delay.client_seek(@client_seek)
      flash[:success] = 'Thank you and chat soon!'
      redirect_to :back
    end
  end

  # PATCH/PUT /client_seeks/1
  # PATCH/PUT /client_seeks/1.json
  def update
    respond_to do |format|
      if @client_seek.update(client_seek_params)
        format.html { redirect_to @client_seek, notice: 'Client seek was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @client_seek.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /client_seeks/1
  # DELETE /client_seeks/1.json
  def destroy
    @client_seek.destroy
    respond_to do |format|
      format.html { redirect_to client_seeks_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_client_seek
      @client_seek = ClientSeek.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def client_seek_params
      params.require(:client_seek).permit(:heading, :name, :mobile_number, :email, :state, :tutor_name, :tutor_mobile_number, :tutor_email, :age, :gender, :service_area, :subjects, :levels, :availability, :experience)
    end
end
