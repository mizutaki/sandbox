Rails.application.routes.draw do
  root "top#index"
  get "about" => "top#about", as: "about"
  get "about/:a/:b" => "top#about"
  get "lesson/:action(/:name)" => "lesson"

  resources :members do
    collection { get "search" }
  end
  resources :articles
end
