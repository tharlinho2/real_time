require "test_helper"

class UseControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get use_create_url
    assert_response :success
  end
end
