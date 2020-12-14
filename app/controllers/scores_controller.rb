class ScoresController < ApplicationController
  def index
  end

  def new
    @score = Score.new
  end

  def create
    @score = Score.new(score_params)
    redirect_to root_path if @score.save
  end

  def all
    @allscores = Score.all.order(score: 'DESC').limit(30)

    today = Date.today
    newtoday = today.strftime("%Y-%m-%d")

    @weeklyscores = Score.where(created_at: newtoday.in_time_zone.all_week).order(score: 'DESC').limit(30)
  end

  def myscore
    @allscores = current_user.scores.order(score: 'DESC').limit(30)

    today = Date.today
    newtoday = today.strftime("%Y-%m-%d")

    @weeklyscores = Score.where(created_at: newtoday.in_time_zone.all_week).where(user_id: current_user).order(score: 'DESC').limit(30)
  end



  private

  def score_params
    params.require(:score).permit(:score).merge(user_id: current_user.id)
  end
end
