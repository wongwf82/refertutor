require 'test_helper'

class SupportsControllerTest < ActionController::TestCase
  setup do
    @support = supports(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:supports)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create support" do
    assert_difference('Support.count') do
      post :create, support: { email: @support.email, message: @support.message, name: @support.name, phone: @support.phone, subject: @support.subject }
    end

    assert_redirected_to support_path(assigns(:support))
  end

  test "should show support" do
    get :show, id: @support
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @support
    assert_response :success
  end

  test "should update support" do
    patch :update, id: @support, support: { email: @support.email, message: @support.message, name: @support.name, phone: @support.phone, subject: @support.subject }
    assert_redirected_to support_path(assigns(:support))
  end

  test "should destroy support" do
    assert_difference('Support.count', -1) do
      delete :destroy, id: @support
    end

    assert_redirected_to supports_path
  end
end
