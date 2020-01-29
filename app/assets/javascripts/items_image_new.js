
$(function(){
  if (document.getElementById("js-image-true") != null){
  const buildImg = (index, url)=> {
    const html = `<div class="js-edit-list" data-index="${index}">
                    <img data-index="${index}" src="${url}" width="20%">
                    <ul>
                      <li>
                        <label for="item_item_images_attributes_${index}_image">編集</label>
                      </li>
                      <li class="js-remove" data-index="${index}">削除</li>
                    </ul>
                  </div>`;
    return html; 
  }
  const buildFileField = (index)=> {
    const html = `<div class="js-input" id="js-hidden-input${index}" data-index="${index}">
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
    const targetIndex = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    $('#previews').css("width", "100%")
    w = $(".item-image-box").outerWidth();
    width = w - 124;
    // 該当indexを持つimgタグがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
    } else {  // 新規画像追加の処理
      $(`#js-hidden-input${targetIndex}`).css("display", "none")
      $(".js-image-content__input-box").remove();
      $(".item-image-box").remove();
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
      if(image.length >= 10){
        lastIndex = $('.js-input:last').data("index")
        $(`#js-hidden-input${lastIndex}`).css("display", "none")
        $(".item-image-box").remove();
      }
    }
  });

  $('#previews').on('click', '.js-remove', function() {
    const targetIndex = $(this).data('index');
    w = $(".item-image-box").outerWidth();
    width = w + 124;
    $(".item-image-box").css("width", width)
    $(this).parent().parent().remove();
    // 画像入力欄が0個にならないようにしておく
    $(`#js-hidden-input${targetIndex}`).remove();
    if (image.length == 0){
      $(".image-content__box").append(`<div class="js-image-content__input-box"></div>`)
    }
    if(image.length == 4){
      lastIndex = $('.js-input:last').data("index")
      $(`#js-hidden-input${lastIndex}`).css("display", "none")
      $(".item-image-box").remove();
      $('.image-content__input-box').append(buildFileField(fileIndex[0]));
      fileIndex.shift();
      // 末尾の数に1足した数を追加する
      fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
      $(".item-image-box").css("width", "124px")
      $(".image-content__input-box").css("top", "0")
      $(".js-image-content__input-box").remove()
    }else if(image.length == 9){
      $('.image-content__input-box').append(buildFileField(fileIndex[0]));
      fileIndex.shift();
      // 末尾の数に1足した数を追加する
      fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
      $(".item-image-box").css("width", "124px")
      $(".image-content__input-box").css("top", "130px")
    }
  });
  }
})
