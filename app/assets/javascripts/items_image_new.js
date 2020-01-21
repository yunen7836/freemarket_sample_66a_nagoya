$(function(){
  const buildImg = (index, url)=> {
    const html = `<div class="js-edit-list">
                    <img data-index="${index}" src="${url}" width="20%">
                    <ul>
                      <li>
                      <label for="item_item_images_attributes_${index}_image">編集</label>
                        <div data-index="${index}">
                          <div data-index="${index}" class="js-file_group">
                          <input class="js-file" type="file"
                          name="item[item_images_attributes][${index}][image]"
                          id="item_item_images_attributes_${index}_image">
                          </div>
                        </div>
                      </li>
                      <li class="js-remove">削除</li>
                    </ul>
                  </div>`;
    return html;
  }
  const buildFileField = (index)=> {
    const html = `<div class="js-input">
                    <label class="item-image-box" for="item_item_images_attributes_${index}_image">ドラッグアンドドロップ<br>またはクリックしてファイルをアップロード</label>
                    <div data-index="${index}" class="js-file_group">
                    <input class="js-file" type="file"
                    name="item[item_images_attributes][${index}][image]"
                    id="item_item_images_attributes_${index}_image"><br>
                    </div>
                  </div>`;
    return html;
  }

  let fileIndex = [1,2,3,4,5,6,7,8,9,10];
  let previews = document.getElementById("previews");
  let image = previews.getElementsByTagName("img");

  $('.image-content__input-box').on('change', '.js-file', function(e) {
    $('#previews').css("width", "100%")
    w = $(".item-image-box").outerWidth();
    width = w - 124;
    $(".js-image-content__input-box").remove();
    $(".js-input").remove();
    previews = document.getElementById("previews");
    image = previews.getElementsByTagName("img");
    
    const targetIndex = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    // 該当indexを持つimgタグがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
    } else {  // 新規画像追加の処理
      $('#previews').append(buildImg(targetIndex, blobUrl));
      // fileIndexの先頭の数字を使ってinputを作る
      $('.image-content__input-box').append(buildFileField(fileIndex[0]));
      fileIndex.shift();
      // 末尾の数に1足した数を追加する
      fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
      $(".item-image-box").css("width", width)
      if(image.length == 5){
        $(".item-image-box").css("width", "100%")
        $(".image-content__input-box").css("top", "130px")
        $("#previews").append(`<div class="js-image-content__input-box"></div>`)
      }
      if(image.length == 10){
        $(".js-input").remove();
      }
    }
  });
  $('#previews').on('change', '.js-file', function(e) {
    
    
    const targetIndex = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    // 該当indexを持つimgタグがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
    } else {  // 新規画像追加の処理
      $('#previews').append(buildImg(targetIndex, blobUrl));
      // fileIndexの先頭の数字を使ってinputを作る
      $('.image-content__input-box').append(buildFileField(fileIndex[0]));
      fileIndex.shift();
      // 末尾の数に1足した数を追加する
      fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
      $(".item-image-box").css("width", width)
      if(image.length == 5){
        $(".item-image-box").css("width", "100%")
        $(".image-content__input-box").css("top", "130px")
        $("#previews").append(`<div class="js-image-content__input-box"></div>`)
      }
      if(image.length == 10){
        $(".js-input").remove();
      }
    }
  });

  $('#previews').on('click', '.js-remove', function() {
    w = $(".item-image-box").outerWidth();
    width = w + 124;
    $(".item-image-box").css("width", width)
    const targetIndex = $(this).parent().data('index');
    $(this).parent().parent().remove();
    $(`img[data-index="${targetIndex}"]`).remove();
    // 画像入力欄が0個にならないようにしておく
    if(image.length == 0){
      $(".image-content__box").append(`<div class="js-image-content__input-box"></div>`)
    }
    if ($('.js-file').length == 0){
      $('.image-content__input-box').append(buildFileField(fileIndex[0]));
    }
  });
})