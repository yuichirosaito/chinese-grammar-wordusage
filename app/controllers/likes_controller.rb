class LikesController < ApplicationController
    before_action :post_params
    def create
      Like.create(post_id: params[:id]) 
    end

    private

  def post_params
    @post = Post.find(params[:id])
  end
end