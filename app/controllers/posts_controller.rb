class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: 'DESC').limit(30)
  end

  def create
    post = Post.create(content: params[:content])
    render json: { post: post }
  end

  def search
    @posts = Post.search(params[:keyword])
  end
end
