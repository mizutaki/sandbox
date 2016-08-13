require 'test_helper'

class MembersControllerTest < ActionController::TestCase
  def setup
    login_as("taro")
  end

  test "index" do
    get :index
    assert_response :success
  end

  test "index_before login" do
    logout
    get :index
    assert_response :missing
  end
end
