Rails.application.routes.draw do
  devise_for :users, controllers: {
    omniauth_callbacks: 'users/omniauth_callbacks',
    registrations: 'users/registrations'
  }
  root to: "scores#index" 
  resources :scores do
    collection do
      get 'all'
    end
    collection do
      get 'myscore'
    end
  end  
  resources :posts do
    collection do
      get 'search'
    end
  end
  resources :sentences do
    collection do
      get 'search'
    end
  end
  post 'like/:id' => 'likes#create', as: 'create_like'
end
