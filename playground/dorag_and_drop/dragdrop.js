(function() {
    //要素内のクリックされた位置を取得するグローバル（のような）変数
    let x;
    let y;

    function initialize() {
        console.log("initialize");
        //要素の取得
        let elements = document.getElementsByClassName("drag-and-drop");

        //マウスが要素内で押されたとき、又はタッチされたとき発火
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener("mousedown", mouseDown, false);
            //elements[i].addEventListener("touchstart", mouseDown, false);
        }
    }
    initialize();
    //mouseDown→mouseMove→mouseUp

    //マウスが押された際の関数
    function mouseDown(e) {
        console.log("mouseDown");
        //クラス名に .drag を追加
        this.classList.add("drag");

        //タッチデイベントとマウスのイベントの差異を吸収
        /*if (e.type === "mousedown") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }*/

        //要素内の相対座標を取得
        x = event.pageX - this.offsetLeft;
        y = event.pageY - this.offsetTop;

        //ムーブイベントにコールバック
        document.body.addEventListener("mousemove", mouseMove, false);
        //document.body.addEventListener("touchmove", mouseMove, false);
    }

    //マウスカーソルが動いたときに発火
    function mouseMove(e) {
        console.log("mouseMove");
        //ドラッグしている要素を取得
        var drag = document.getElementsByClassName("drag")[0];

        //同様にマウスとタッチの差異を吸収
        /*if (e.type === "mousemove") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }*/

        //フリックしたときに画面を動かさないようにデフォルト動作を抑制
        e.preventDefault();

        //マウスが動いた場所に要素を動かす
        drag.style.top = event.pageY - y + "px";
        drag.style.left = event.pageX - x + "px";

        //マウスボタンが離されたとき、またはカーソルが外れたとき発火
        drag.addEventListener("mouseup", mouseUp, false);
        document.body.addEventListener("mouseleave", mouseUp, false);
        //drag.addEventListener("touchend", mouseUp, false);
        //document.body.addEventListener("touchleave", mouseUp, false);

    }

    //マウスボタンが上がったら発火
    function mouseUp(e) {
        console.log("mouseUp");
        var drag = document.getElementsByClassName("drag")[0];

        //ムーブベントハンドラの消去
        document.body.removeEventListener("mousemove", mouseMove, false);
        drag.removeEventListener("mouseup", mouseUp, false);
        //document.body.removeEventListener("touchmove", mouseMove, false);
        //drag.removeEventListener("touchend", mouseUp, false);

        //クラス名 .drag も消す
        drag.classList.remove("drag");
    }

    var button = document.querySelector("#createButton");
    button.addEventListener("click", function(e) {
        console.log('button');
        let div = document.createElement("div");
        div.className = 'drag-and-drop';
        document.body.appendChild(div);
        initialize();
    })

})()
