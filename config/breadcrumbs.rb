crumb :root do
  link "トップページ", root_path
end

#マイページ
crumb :mypage do
  link "マイページ", user_path(current_user.id)
end

crumb :profile do
  link "プロフィール", user_profile_show_path(current_user.id)
  parent :mypage
end

crumb :logout do
  link "ログアウト", user_logout_path(current_user.id)
  parent :mypage
end