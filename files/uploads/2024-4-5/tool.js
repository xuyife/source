$(".learn-tool-all a").click(function () {
   $(this).addClass("learn-tool-all-on").siblings().removeClass("learn-tool-all-on")
});

$(".tool-point li").click(function () {
    $(this).addClass("tool-point-on").siblings().removeClass("tool-point-on");
    var tab_index = $(this).index();
    $(".tool-item-tab").eq(tab_index).fadeIn(300).siblings().fadeOut(300);
});


//详情页面复制提取码
var content = $("#copyNum span").html();
var clipboard = new Clipboard('#copyNum', {
    text: function() {
        return content;
    }
});
clipboard.on('success', function(e) {
    alert("提取码复制成功");
});

//微信弹框
$(".tool-detail-down .share-action .share-weixin").click(function () {
    $(".tool-detail-down .share-alert").show()
});
$(".tool-detail-down .share-alert .share-alert-close").click(function () {
    $(".tool-detail-down .share-alert").hide();
});
function dolog(_info, _callback) {
    var img = new Image();
    img.onload=img.onerror=_callback;
    img.src = 'http://www.bjpowernode.com/logo.jpg';
}