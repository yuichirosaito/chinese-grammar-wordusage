require 'rails_helper'

RSpec.describe "Sentences", type: :request do

  describe "GET /index" do
    it "returns http success" do
      get "/sentences/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /search" do
    it "returns http success" do
      get "/sentences/search"
      expect(response).to have_http_status(:success)
    end
  end

end
