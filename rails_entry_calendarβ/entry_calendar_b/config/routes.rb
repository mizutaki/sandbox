Rails.application.routes.draw do
  resources :calendars do
    resources :entries
  end
end
