let timer;
let send = () => {
    $.ajax({
        url: './banner.json',
        type: 'get',
        async: false,
        success: function (data) {
            bindHtml(data);
            timer = setInterval(autoMove, 2000);
        }
    });
};
let bindHtml = (data) => {
    let imgs = ``;
    let lis = ``;
    $.each(data, function (index, item) {
        imgs += `<img src="${item.img}">`
        lis += `<li></li>`
    });
    $("#wrapper").html(imgs);
    $("#list").html(lis);
};
let step = 0;
let autoMove = () => {
    step++;
    $("img").eq(step).fadeIn().siblings().fadeOut();
}
send()
