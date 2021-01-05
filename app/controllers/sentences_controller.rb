class SentencesController < ApplicationController

  before_action :search_sentence, only: [:index, :search]

  def index
    @sentences = Sentence.all
    set_sentence_column
  end

  def search
    @results = @p.result.all
  end

  private

  def search_sentence
    @p = Sentence.ransack(params[:q])
  end

  def set_sentence_column
    @sentence_name = Sentence.select("tag").distinct 
    @sentence = Sentence.select("sentence").distinct
    @sentence_explaination = Sentence.select("explaination").distinct
  end

end