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

    private
    
    def score_params
        params.require(:score).permit(:score).merge(user_id: current_user.id)
    end
end
