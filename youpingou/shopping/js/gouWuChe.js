$(function() {


    init();
    //选中框
    $(".all").change(function() {
        $(".all").prop("checked", $(this).prop("checked"));
        $(".goods-check").prop("checked", $(this).prop("checked"));
        sumPayAmout();
    });
    $(".goods-check").on("change", function() {
            if (!$(this).prop("checked"))
                $(".all").prop("checked", false);
            if ($(".goods-check").length == $(".goods-check:checked").length)
                $(".all").prop("checked", true);
            sumPayAmout();
        })
        //数量加减
    $(".plus").click(function() {

        var num = $(this).siblings("input").val();
        num++;
        $(this).siblings("input").val(num);
        var Eprice = $(this).parents(".goods-num").siblings(".goods-price");
        $(this).parents(".goods-num").siblings(".goods-sum").text(getSum(Eprice, num));
        sumPayAmout();
    });
    $(".deplus").click(function() {
        var num = $(this).siblings("input").val();
        if (num != 0)
            num--;
        $(this).siblings("input").val(num);
        var Eprice = $(this).parents(".goods-num").siblings(".goods-price");
        $(this).parents(".goods-num").siblings(".goods-sum").text(getSum(Eprice, num));

        sumPayAmout();
    })
    $(".goods-num input").change(function() {
        var num = $(this).val();
        var Eprice = $(this).parents(".goods-num").siblings(".goods-price");
        $(this).parents(".goods-num").siblings(".goods-sum").text(getSum(Eprice, num));
        sumPayAmout();
    })

    function sumPayAmout() {
        var Pay = 0;
        var Amout = 0;
        $(".goods-num input").each(function(i, ele) {
            Amout += parseInt($(ele).val());
        })
        $(".checkTip h3").text(Amout);
        $(".goods-sum").each(function(i, ele) {
            Pay += parseInt($(ele).text());
        });
        $(".payAmout em").text(Pay);

    }

    function getSum(Eprice, count) {
        var price = Eprice.text();
        console.log(Eprice);
        console.log(price);
        price = parseInt(price.substr(1));
        console.log("price=" + (price * count).toFixed(2));
        return (price * count).toFixed(2);

    }
    $(".deleteChecked").click(function() {
        $(".goods-check:checked").parent().remove();
    });
    $(".deleteAll").click(function() {
        $(".goods-check").parent().remove();
    });
    $(".delete").click(function() {
        $(this).parent().remove();
    });

    function init() {

        $(".goods-list li").each(function(i, ele) {
            var Eprice = $(ele).children(".goods-price");
            var num = parseInt($(ele).find(".goods-num input").val());
            console.log(num);
            console.log($(ele).find(".goods-num input"));
            console.log(Eprice);

            $(ele).children(".goods-sum").text(getSum(Eprice, num));
        })

        sumPayAmout();
    }


})