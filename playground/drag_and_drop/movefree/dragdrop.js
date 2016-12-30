(function() {
    let ls = localStorage;
    //要素内のクリックされた位置を取得するグローバル（のような）変数
    let x;
    let y;

    function initialize() {
        console.log("initialize");
        let counter = ls.getItem("elementCounter");
        if (counter === null) {
            ls.setItem("elementCounter", 0);
        }
        Object.keys(ls).forEach(function(key) {
            if (key === "elementCounter") return;
            let item = ls.getItem(key);
            console.log(item);
            let data = JSON.parse(item);
            createElement(key, data.text, data.top, data.left);
        });
        addMouseEvent();
    }
    initialize();

    function addMouseEvent() {
        //要素の取得
        let elements = document.getElementsByClassName("drag-and-drop");

        //マウスが要素内で押されたとき、又はタッチされたとき発火
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener("mousedown", mouseDown, false);
            elements[i].addEventListener("doubleclick", console.log("double"), false);
            //elements[i].addEventListener("touchstart", mouseDown, false);
        }
    }

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
        console.log(e.target.value);
        var drag = document.getElementsByClassName("drag")[0];

        //ムーブベントハンドラの消去
        document.body.removeEventListener("mousemove", mouseMove, false);
        drag.removeEventListener("mouseup", mouseUp, false);
        //document.body.removeEventListener("touchmove", mouseMove, false);
        //drag.removeEventListener("touchend", mouseUp, false);

        //クラス名 .drag も消す
        drag.classList.remove("drag");
        let item = {
            "elementId": e.target.id,
            "text": e.target.value,
            "top": drag.style.top,
            "left": drag.style.left
        }
        ls.setItem(item.elementId, JSON.stringify(item));
        //console.log(ls.getItem("name"));
    }

    var button = document.querySelector("#createButton");
    button.addEventListener("click", function(e) {
        console.log('button');
        ls.setItem("elementCounter", Number.parseInt(ls.getItem("elementCounter")) + 1);
        let item = {
            "elementId": ls.getItem("elementCounter"),
            "text": "",
            "top": "10px",
            "left": "10px"
        }
        ls.setItem(ls.getItem("elementCounter"), JSON.stringify(item));
        createElement(ls.getItem("elementCounter"), "", "10px", "10px");
        addMouseEvent();
    });

    function createElement(id, text, top, left) {
        let textarea = document.createElement("textarea");
        textarea.setAttribute("id", id);
        textarea.setAttribute("cols", "50");
        textarea.className = 'drag-and-drop';
        textarea.style.top = top;
        textarea.style.left = left;
        textarea.value = text;
        document.body.appendChild(textarea);
    }

})()
