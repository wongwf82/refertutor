require 'test_helper'

class TutorSeeksControllerTest < ActionController::TestCase
  setup do
    @tutor_seek = tutor_seeks(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:tutor_seeks)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create tutor_seek" do
    assert_difference('TutorSeek.count') do
      post :create, tutor_seek: { home_number: @tutor_seek.home_number, level: @tutor_seek.level, mobile_number: @tutor_seek.mobile_number, name: @tutor_seek.name, num_students: @tutor_seek.num_students, reason: @tutor_seek.reason, requirements: @tutor_seek.requirements, service_area: @tutor_seek.service_area, state: @tutor_seek.state, subjects: @tutor_seek.subjects, title: @tutor_seek.title }
    end

    assert_redirected_to tutor_seek_path(assigns(:tutor_seek))
  end

  test "should show tutor_seek" do
    get :show, id: @tutor_seek
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @tutor_seek
    assert_response :success
  end

  test "should update tutor_seek" do
    patch :update, id: @tutor_seek, tutor_seek: { home_number: @tutor_seek.home_number, level: @tutor_seek.level, mobile_number: @tutor_seek.mobile_number, name: @tutor_seek.name, num_students: @tutor_seek.num_students, reason: @tutor_seek.reason, requirements: @tutor_seek.requirements, service_area: @tutor_seek.service_area, state: @tutor_seek.state, subjects: @tutor_seek.subjects, title: @tutor_seek.title }
    assert_redirected_to tutor_seek_path(assigns(:tutor_seek))
  end

  test "should destroy tutor_seek" do
    assert_difference('TutorSeek.count', -1) do
      delete :destroy, id: @tutor_seek
    end

    assert_redirected_to tutor_seeks_path
  end
end
