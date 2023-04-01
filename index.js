$(".bi-list").click(function () {
        $(this).hide()
        $(".bi-x-lg").show()
        $(".resnav").css("width", "100%")
    })
    $(".bi-x-lg").click(function () {
        $(this).hide()
        $(".bi-list").show()
        $(".resnav").css("width", "0%")
    })
window.addEventListener('scroll', scroll)

var loader = document.querySelector('.loader')

window.addEventListener('load', preloader)

function preloader() {
    loader.classList.add('active')
}
var m = 0;
$(".partnyorsag").click(function () {
    if (m == -800) {
        m = 0
        m += -100
    }
    else {
        m += -100
    }
    $(".marka").css("transform", "translateX(" + m + "%)")
})

$(".partnyorsol").click(function () {
    if (m == 0) {

    }
    else {
        m += 100
    }
    $(".marka").css("transform", "translateX(" + m + "%)")
})
setInterval(() => {
    if (m == -800) {
        m = 0
        m += -100
    }
    else {
        m += -100
    }
    $(".marka").css("transform", "translateX(" + m + "%)")
}, 2000);
document.querySelector('#person').addEventListener('click', function () {
    document.querySelector('.person-down').classList.toggle('active2')
})
document.querySelector('#tedbir').addEventListener('mouseover', function () {
    document.querySelector('.tedbirdown').classList.add('active4')
})
document.querySelector('#tedbir').addEventListener('mouseleave', function () {
    document.querySelector('.tedbirdown').classList.remove('active4')
})
document.querySelector('.tedbirdown').addEventListener('mouseover', function () {
    document.querySelector('.tedbirdown').classList.add('active4')
})
document.querySelector('.tedbirdown').addEventListener('mouseleave', function () {
    document.querySelector('.tedbirdown').classList.remove('active4')
})
document.querySelector('.resteddown').addEventListener('click', function () {
    document.querySelector('.tedbirresdown').classList.toggle('active5')
})
$("#qey").click(function () {
    $(".daxil").css("display", "none")
    $(".qeydiy").css("display", "block")
})
document.querySelector('.bi-search').addEventListener('click', function () {
    document.querySelector('.signsearch input').classList.toggle('active3')
})
function scroll() {
    var scrollValue = window.scrollY
    if (scrollValue > 10) {
        document.querySelector('header .head-img').style.backgroundSize = '80%'
        document.querySelector('header .head-img').style.filter = 'none'
        document.querySelector('nav').style.backgroundColor = '#e8f4eab7'
    }
    else {
        document.querySelector('header .head-img').style.backgroundSize = '120%'
        document.querySelector('header .head-img').style.filter = 'blur(5px)'
        document.querySelector('nav').style.backgroundColor = '#e8f4ea'
    }
}
window.addEventListener('scroll', scroll)
$(".bi-eye").click(function () {
        $("#sifre1").attr("type", "text")
        $("#sifre2").attr("type", "text")
        $(".bi-eye-slash").css("display", "block")
        $(".bi-eye").css("display", "none")
    })
    $(".bi-eye-slash").click(function () {
        $("#sifre1").attr("type", "password")
        $("#sifre2").attr("type", "password")
        $(".bi-eye").css("display", "block")
        $(".bi-eye-slash").css("display", "none")
    })
document.querySelector('.ticket-shop-1 .minus').addEventListener('click', function () {
    if (document.querySelector('.ticket-shop p span').innerHTML == 1) {

    }
    else {
        Number(document.querySelector('.ticket-shop .num').innerHTML--)
    }
})

document.querySelector('.ticket-shop-1 .plus').addEventListener('click', function () {
    Number(document.querySelector('.say').innerHTML++)
    var num = Number(document.querySelector('.say').innerHTML)
    document.querySelector('#totalprice').value = num * 5
})

document.querySelector('.ticket-shop-1 .minus').addEventListener('click', function () {
    if (document.querySelector('.say').innerHTML == 1) {

    }
    else {
        Number(document.querySelector('.say').innerHTML--)
        if (document.querySelector('#totalprice').value == 5) {

        }
        else {
            document.querySelector('#totalprice').value -= 5
        }
    }
})
$(document).ready(function () {
    // $(".darkbtn").click(function () {
    //     $(".darkbtn").toggle("active1")
    // })
    $('.ticketbuy').click(function () {
        $('.buy2page').css("display", "block");
    })
    $('.buyclose').click(function () {
        $('.buy2page').css("display", "none");
    })
    $("#numberin").val($("#numberin").val() + " ")
    $("#numberin").keyup(function () {
        if ($(this).val().length == 9 || $(this).val().length == 13 || $(this).val().length == 16) {
            $(this).val($(this).val() + "-")
        }
    })
})

document.querySelector('.dark').addEventListener('click', function () {
    document.querySelector('.darkbtn').classList.toggle('active1')
})
document.querySelector('.tedbirdown').addEventListener('mouseover', function () {
    document.querySelector('.tedbirdown').classList.add('active4')
})
document.querySelector('.tedbirdown').addEventListener('mouseleave', function () {
    document.querySelector('.tedbirdown').classList.remove('active4')
})


document.addEventListener('scroll', function () {
    if (window.scrollY * 0.5 >= 1400) {
        document.querySelector('.artan').style.width = "100%"
    }
    else {
        document.querySelector('.artan').setAttribute("style", "width: " + window.scrollY * 0.89 + "px")
    }
})

$(".bi-cart").click(function () {
    $(".sebetopen").show();
})

$(".bi-x").click(function () {
    $(".sebetopen").hide();
})

