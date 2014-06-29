require 'test_helper'

class ClientSeeksControllerTest < ActionController::TestCase
  setup do
    @client_seek = client_seeks(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:client_seeks)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create client_seek" do
    assert_difference('ClientSeek.count') do
      post :create, client_seek: { age: @client_seek.age, availability: @client_seek.availability, gender: @client_seek.gender, home_number: @client_seek.home_number, levels: @client_seek.levels, mobile_number: @client_seek.mobile_number, name: @client_seek.name, requirements: @client_seek.requirements, service_area: @client_seek.service_area, state: @client_seek.state, subjects: @client_seek.subjects }
    end

    assert_redirected_to client_seek_path(assigns(:client_seek))
  end

  test "should show client_seek" do
    get :show, id: @client_seek
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @client_seek
    assert_response :success
  end

  test "should update client_seek" do
    patch :update, id: @client_seek, client_seek: { age: @client_seek.age, availability: @client_seek.availability, gender: @client_seek.gender, home_number: @client_seek.home_number, levels: @client_seek.levels, mobile_number: @client_seek.mobile_number, name: @client_seek.name, requirements: @client_seek.requirements, service_area: @client_seek.service_area, state: @client_seek.state, subjects: @client_seek.subjects }
    assert_redirected_to client_seek_path(assigns(:client_seek))
  end

  test "should destroy client_seek" do
    assert_difference('ClientSeek.count', -1) do
      delete :destroy, id: @client_seek
    end

    assert_redirected_to client_seeks_path
  end
end
