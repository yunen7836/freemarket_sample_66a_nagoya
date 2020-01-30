
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

  var fileIndex = [1,2,3,4,5,6,7,8,9,10];
  let previews = document.getElementById("previews");
  let image = previews.getElementsByTagName("img");
  
  if($(".hidden-destroy").length){
    $(".item-image-box").remove()
    var fileIndex = [11,12,13,14,15,16,17,18,19,20]
    $('.image-content__input-box').append(buildFileField(fileIndex[0]))
    fileIndex.shift();
    // 末尾の数に1足した数を追加する
    fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
    $(".js-image-content__input-box").remove()
    if(image.length == 1){
      $(".image-content__input-box").css("width", "496px")
    }
    if(image.length == 2){
      $(".image-content__input-box").css("width", "372px")
    }
    if(image.length == 3){
      $(".image-content__input-box").css("width", "248px")
    }
    if(image.length == 4){
      $(".image-content__input-box").css("width", "124px")
    }
    if(image.length == 5){
      $(".image-content__input-box").css("top", "130px")
      $(".image-content__input-box").css("width", "620px")
    }
    if(image.length == 6){
      $(".image-content__input-box").css("top", "130px")
      $(".image-content__input-box").css("width", "496px")
    }
    if(image.length == 7){
      $(".image-content__input-box").css("top", "130px")
      $(".image-content__input-box").css("width", "372px")
    }
    if(image.length == 8){
      $(".image-content__input-box").css("top", "130px")
      $(".image-content__input-box").css("width", "248px")
    }
    if(image.length == 9){
      $(".image-content__input-box").css("top", "130px")
      $(".image-content__input-box").css("width", "124px")
    }
    if(image.length == 10){
      $(".item-image-box").remove();
      $(`#js-hidden-input11`).css("display", "none")
    }
  }

  $('.image-content__input-box').on('change', '.js-file', function(e) {
    const targetIndex = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    $('#previews').css("width", "100%")
    w = $(".item-image-box").outerWidth();
    width = w - 124;
    // 該当indexを持つimgタグがあれば取得して変数imgに入れる(画像変更の処理)
    img_length = $("#previews").children().length
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
        $(".item-image-box").css("width", "620px")
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
    const hiddenCheck = $(`input[data-index="${targetIndex}"]`)
    // もしチェックボックスが存在すればチェックを入れる
    hiddenCheck.prop('checked', true);
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
