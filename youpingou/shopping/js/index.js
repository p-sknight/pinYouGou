window.onload = function() {
    var skinbtn = document.querySelector('.skin');
    var flag = true;
    var body = document.querySelector("body");
    skinbtn.ondblclick = function() {
        if (flag) {
            body.className = 'evemode';
            skinbtn.innerHTML = "夜间";
            flag = false;
        } else {
            body.className = '';
            skinbtn.innerHTML = "白天";
            flag = true;
        }
    }


    var ol = document.querySelector('.circle');
    var wrap = document.querySelector('.focus1');
    var ul = wrap.querySelector('ul');
    var ar = document.querySelector('.arrow-tr');
    var al = document.querySelector('.arrow-tl');
    var focusWidth = wrap.offsetWidth + 20;
    var circle = 0;
    var num = 0;



    wrap.addEventListener('mouseenter', function() {
        ar.style.display = 'block';
        al.style.display = 'block';
    })
    wrap.addEventListener('mouseleave', function() {
        ar.style.display = 'none';
        al.style.display = 'none';

    })


    // --动态生成圆圈
    var lis = wrap.querySelector('ul').querySelectorAll('li');

    for (var i = 0; i < lis.length; i++) {
        // 创建一个小li 
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性来做 
        li.setAttribute('index', i);
        // 把小li插入到ol 里面
        ol.appendChild(li);
        // 4. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件

        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            var index = this.getAttribute('index');
            circle = index;
            num = index;
            this.className = 'circle-current';
            animate(ul, -index * focusWidth);
            console.log(circle);
            console.log(num);
        })
    }

    function circleChange(circle) {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'circle-current';
    }

    ol.children[0].className = 'circle-current';

    ar.addEventListener('click', function() {
        if (num == ul.children.length - 1)
            num = 0;
        else {
            num++;
        }

        animate(ul, -num * focusWidth);
        circle = num;
        circleChange(num);



    })
    al.addEventListener('click', function() {
        if (num != 0) {
            num--;
        } else {
            num = ul.children.length - 1;
        }

        animate(ul, -num * focusWidth);
        circle = num;
        circleChange(num);

    })


    var wrapTriger = setInterval(function() {
        ar.click();
    }, 2000)

}