class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: "ASC").limit(100)
    @post = Post.new
  end

  def create
    @post = Post.new(content: params[:post][:content])
    if @post.save
      
      ActionCable.server.broadcast 'post_channel', contents: @post
    end
  end

  def search
    @posts = Post.search(params[:keyword])
  end
end
