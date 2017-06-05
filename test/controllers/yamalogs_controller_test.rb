require 'test_helper'

class YamalogsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get yamalogs_index_url
    assert_response :success
  end

end
