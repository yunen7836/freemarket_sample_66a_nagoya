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

#カテゴリー検索
crumb :parent do
  category = Category.find(params[:id])
  parent_category = Category.find((/\//.match("#{category.ancestry}")).post_match)
  parent_parent_category = Category.find(parent_category.ancestry)
  link "#{parent_parent_category.name}", "#"
end

crumb :child do
  category = Category.find(params[:id])
  parent_category = Category.find((/\//.match("#{category.ancestry}")).post_match)
  link "#{parent_category.name}", "#"
  parent :parent
end

crumb :grand_child do |category|
  link "#{category.name}", "#"
  parent :child
end

#テキスト検索
crumb :search do |search_text|
  link "検索ワード: #{search_text}"
end