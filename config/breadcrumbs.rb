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

crumb :identification do
  link "本人情報", user_identification_path(current_user.id)
  parent :mypage
end

crumb :card do
  link "支払方法", card_index_path(current_user.id)
  parent :mypage
end