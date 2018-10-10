class TeachersController < ApplicationController
  #CREATE

    def new
    @teacher = Teacher.new

    end

    def create
      Teacher.create teacher_params
      redirect_to(teachers_path)
    end
  #READ
    def index
    # Teacher.all
    @teachers = Teacher.all
  # raise "hell"
    end

    def show
    @teachers = Teacher.find params[:id]
    end

    def edit
      @teacher = Teacher.find params[:id]

    end

    def update
      @teacher = Teacher.find params[:id]
      @teacher.update teacher_params
      redirect_to teachers_path(@teacher.id)
    end

    def destroy

      @teacher = Teacher.find params[:id]
      @teacher.destroy
      redirect_to(teachers_path)
    end



    private
    def teacher_params
    params.require(:teacher).permit(:name, :nationality, :dob)
    end
  end
