$(function(){
  // カテゴリーセレクトボックスのオプションを作成
  function appendOption(category){
    var html = `<option value="${category.id}" data-category="${category.id}">${category.name}</option>`;
    return html;
  }
  // 子カテゴリーの表示作成
  function appendChidrenBox(insertHTML){
    var childSelectHtml = '';
    childSelectHtml = `<select class="listing-select-wrapper__box--select" id="child_category">
                        <option value="---" data-category="---">---</option>
                        ${insertHTML}
                       <select>`;
    $('#select-boxs').append(childSelectHtml);
  }
  // 孫カテゴリーの表示作成
  function appendGrandchidrenBox(insertHTML){
    var grandchildSelectHtml = '';
    grandchildSelectHtml = `<select class="listing-select-wrapper__box--select" id="grandchild_category" name="item[category_id]">
                              <option value="---" data-category="---">---</option>
                              ${insertHTML}
                            <select>`
    $('#select-boxs').append(grandchildSelectHtml);
  }

  function appendBrand(){
    var BrandHtml = "";
    BrandHtml = `<div class="item-show__categorie--input-bottom" id="label-brand">
                  ブランド
                  <span class="item-label-gray">任意</span>
                </div>
                <input type="text" name="item[brand_id]" id="item_brand_id">`
    $('#select-boxs').append(BrandHtml)
  }

  //ブランドのインクリメンタルサーチのview
  function BrandSearch(brand){
    var brand_search_html = `<div class="brand-search" data-brand-id="${brand.id}" data-brand-name="${brand.name}">
                              ${brand.name}
                            </div>`;
    $('#select-boxs').append(brand_search_html);
  }

  function addNoBrand() {
    let html = `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">ユーザーが見つかりません</p>
      </div>
    `;
    $("#user-search-result").append(html);
  }

  function addBrandValue(id, name) {
    var BrandHtml = "";
    BrandHtml = `<input type="text" value="${name}" id="item_brand_id">
                <input type="hidden" value="${id}" name="item[brand_id]" id="item_brand_name_id">`
    $('#select-boxs').append(BrandHtml)
  }

  $('#parent_category').on('change', function(){
    var parentCategory = document.getElementById('parent_category').value; //選択された親カテゴリーの名前を取得
    if (parentCategory != "---"){ //親カテゴリーが初期値でないことを確認
      $.ajax({
        url: '/items/get_category_children',
        type: 'GET',
        data: { parent_name: parentCategory },
        dataType: 'json'
      })
      .done(function(children){
        $('#child_category').remove(); //親が変更された時、子以下を削除する
        $('#grandchild_category').remove();
        var insertHTML = '';
        children.forEach(function(child){
          insertHTML += appendOption(child);
        });
        appendChidrenBox(insertHTML);
      })
      .fail(function(){
        alert('カテゴリー取得に失敗しました');
      })
    }else{
      $('#child_category').remove();
      $('#grandchild_category').remove();
    }
  })
  // 子カテゴリー選択後のイベント
  $('#select-boxs').on('change', "#child_category", function(){
    var childId = $('#child_category option:selected').data('category'); //選択された子カテゴリーのidを取得
    if (childId != "---"){ //子カテゴリーが初期値でないことを確認
      
      $.ajax({
        url: '/items/get_category_grandchildren',
        type: 'GET',
        data: { child_id: childId },
        dataType: 'json'
      })
      .done(function(grandchildren){
        if (grandchildren.length != 0) {
          $('#grandchild_category').remove(); 
          var insertHTML = '';
          grandchildren.forEach(function(grandchild){
            insertHTML += appendOption(grandchild);
          });
          appendGrandchidrenBox(insertHTML);
        }
      })
      .fail(function(){
        alert('カテゴリー取得に失敗しました');
      })
    }else{
      $('#grandchild_category').remove();
    }
  })
  // 孫カテゴリー 選択
  $('#select-boxs').on('change', "#grandchild_category", function(){
    var childId = $('#grandchild_category option:selected').data('category');
    $("#item_brand_id").remove()
    $("#label-brand").remove()
    if (childId != "---"){ //孫カテゴリーが初期値でないことを確認
      appendBrand()
    }
  })
  
  $('#select-boxs').on('keyup', "#item_brand_id", function(){
    $("#item_brand_name_id").remove();
    let input = $("#item_brand_id").val();
    $.ajax({
      type: "GET",
      url: "/items/brand_search",
      data: { keyword: input },
      dataType: "json"
    })
    .done(function(brands) {
      $(".brand-search").remove();
      if(brands.length !== 0){
        brands.forEach(function(brand){
          BrandSearch(brand);
        });
      }else if(input.length == 0){
        return false;
      }else{
        addNoBrand();
      }
    })
    .fail(function() {
      alert("失敗です");
    });
  })

  $('#select-boxs').on('click', ".brand-search", function(){
    const brandName = $(this).attr("data-brand-name");
    const brandId = $(this).attr("data-brand-id");
    $(".brand-search").remove();
    $("#item_brand_id").remove();
    $("#item_brand_name_id").remove();
    addBrandValue(brandId, brandName);
  })
})
