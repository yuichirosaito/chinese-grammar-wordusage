class ScoresController < ApplicationController
    def index
    end    
    
    def new
        @score = Score.new
    end
    
    def create
        @score = Score.new(score_params)
        if @score.save
            redirect_to root_path
        end
    end    

    def all
        @scores = Score.all.order(score: "DESC").limit(10)
    end

    def myscore
        @scores = current_user.scores.order(score: "DESC").limit(5)
    end

    private
    
    def score_params
        params.require(:score).permit(:score).merge(user_id: current_user.id)
    end
end
