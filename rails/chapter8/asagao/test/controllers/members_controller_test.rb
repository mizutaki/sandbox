require 'test_helper'

class MembersControllerTest < ActionController::TestCase
  test "index" do
    login_as("taro")
    get :index
    assert_response :success
  end

  test "index_before login" do
    get :index
    assert_response :missing

  end
end
