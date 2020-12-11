Rails.application.routes.draw do
  devise_for :users
  root to: "scores#index" 
  resources :scores do
    collection do
      get 'all'
    end
    collection do
      get 'myscore'
    end
  end  
end
