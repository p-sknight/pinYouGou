window.onload = function() {
    var ul = document.querySelector(".comment-area");
    var input = document.querySelector(".comment-panel");
    var btn = document.querySelector(".publish");
    // -- -- -- - comment-- -


    function tailIfo(user) {

        var ifo = "用户" + '\t' + user + "发布于" + '\
        t ' + new Date();
        return "<span>" + ifo + "</span>";
    }

    console.log(tailIfo("hehe"));

    // -- -
    input.onfocus = function() {
        this.onkeypress = function(e) {
            if (e.keyCode == '13')
                btn.click();
        }
    }

    btn.onclick = function() {
            var comment = input.value;
            var li = document.createElement('li');
            li.innerHTML = comment + tailIfo() + "<a href='javascript:;'>删除</a>";
            ul.insertBefore(li, ul.children[0]);
            var as = ul.querySelectorAll('a');

            for (var i = 0; i < as.length; i++) {
                as[i].onclick = function() {
                    console.log(this);
                    console.log(this.parentNode);
                    ul.removeChild(this.parentNode)
                }

            }
        }
        // -- -- -- -- --tab
        // 
        // var nav = document.querySelectorAll(".m-nav ul li");

    // var item = document.querySelectorAll(".mc-item");

    // console.log(item);

    // for (var i = 0; i < nav.length; i++) {
    //     nav[i].onclick = function() {
    //         for (var i = 0; i < nav.length; i++) {
    //             nav[i].style.backgroundColor = '#f1f1f1';
    //             nav[i].style.color = '#333';
    //             nav[i].setAttribute('index', i);
    //         }
    //         this.style.backgroundColor = '#c81623';
    //         this.style.color = '#fff';
    //         var index = this.getAttribute('index');


    //         for (var i = 0; i < nav.length; i++) {
    //             item[i].style.display = 'none';
    //         }

    //         item[index].style.display = 'block';
    //         console.log(this);
    //         console.log(item[index]);
    //         console.log(index);

    //     }
    // }
    $(function() {
        $(".m-nav>ul").children('li').click(function() {
            var index = $(this).index();
            $(this).css({
                "background-color": "#c81623",
                "color": "white"
            }).siblings().css({
                "background-color": "#f1f1f1",
                "color": "#333"
            });

            $(".mc-item").eq(index).show();
            $(".mc-item").eq(index).siblings().hide();



        })
    })

    // -- -- -- -放大镜
    var mask = document.querySelector('.mask');
    var box = document.querySelector('.f1-show');
    var big = document.querySelector('.big');
    console.log(mask);
    console.log(box);
    box.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';

    });
    box.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    });
    box.addEventListener('mousemove', function(e) {
        // -- --在盒子内坐标
        var x = e.pageX - box.offsetLeft;
        var y = e.pageY - box.offsetTop;
        // -- --mask的偏移量
        var mx = x - mask.offsetWidth / 2;
        var my = y - mask.offsetHeight / 2;
        var maskMax = box.offsetWidth - mask.offsetWidth;
        if (mx <= 0) {
            mx = 0
        } else if (mx >= maskMax) {
            mx = maskMax;
        }
        if (my <= 0) {
            my = 0
        } else if (my >= maskMax) {
            my = maskMax;
        }

        mask.style.left = mx + 'px';
        mask.style.top = my + 'px';
        console.log(mx);
        var bigImg = document.querySelector('.bigImg');
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        var bigX = mx * bigMax / maskMax;
        var bigY = my * bigMax / maskMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';


    });








}