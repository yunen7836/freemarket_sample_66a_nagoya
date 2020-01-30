$(function() {
  // 子カテゴリーを追加するための処理です。

    function buildChildHTML(child){
      var html =`<a class="child_category" id="${child.id}" 
                  href="#">${child.name}</a>`; 
      return html;
    }
  
    

    $(".head__bottom__left__category").on("mouseenter", function() {
      $(".category_list").removeClass("none");
    
      $(".parent_category").on("mouseover", function() {
        
        var id = this.id//どのリンクにマウスが乗ってるのか取得します
      
        $(".now-selected-red").removeClass("now-selected-red")//赤色のcssのためです
        $('#' + id).addClass("now-selected-red");//赤色のcssのためです

        $.ajax({
          type: 'GET',
          url: '/category/new',//とりあえずここでは、newアクションに飛ばしてます
          data: {parent_id: id},//どの親の要素かを送ります　params[:parent_id]で送られる
          dataType: 'json'
        }).done(function(children) {
          $(".child_category").remove();//一旦出ている子カテゴリ消します！
          $(".grand_child_category").remove();//孫、てめえもだ！
          children.forEach(function (child) {//帰ってきた子カテゴリー（配列
            var html = buildChildHTML(child);//HTMLにして
            $(".children_list").append(html);//リストに追加します
          })
        });
      });
    }).on("mouseleave", function() {
      $(".child_category").remove();//一旦出ている子カテゴリ消します！
      $(".grand_child_category").remove();//孫、てめえもだ！
      $(".category_list").addClass("none");
      
    });




    // 孫カテゴリを追加する処理です　基本的に子要素と同じです！
    function buildGrandChildHTML(child){
      var html =`<a class="grand_child_category" id="${child.id}"
                    href="/category/${child.id}">${child.name}</a>`;
      return html;
    }
  
    $(document).on("mouseover", ".child_category", function () {//子カテゴリーのリストは動的に追加されたHTMLのため
      var id = this.id
      $(".now-selected-gray").removeClass("now-selected-gray");//灰色のcssのため
      $('#' + id).addClass("now-selected-gray");//灰色のcssのため
      $.ajax({
        type: 'GET',
        url: '/category/new',
        data: {parent_id: id},
        dataType: 'json'
      }).done(function(children) {
        children.forEach(function (child) {
          var html = buildGrandChildHTML(child);
          $(".grand_children_list").append(html);
        })
        $(document).on("mouseover", ".child_category", function () {
          $(".grand_child_category").remove();
        });
      });

      $(document).on("mouseover", ".grand_child_category", function () {
        
        var id = this.id
        $(".gc-now-selected-gray").removeClass("gc-now-selected-gray");//灰色のcssのため
        $('#' + id).addClass("gc-now-selected-gray");//灰色のcssのため
      });
    });  
  });