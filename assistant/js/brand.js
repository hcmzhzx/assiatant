/**
 * @param 插入信息填写及品牌
 * @param id [插入位]
 * @param btn [触发按钮]
 * @param val [文字填写处]
 */
function InfoBrand(id,btn,val) {
    var brands = '<div id="brand-menu" class="flexv dialog_box">' +
        '<div class="flex center brand-head">' +
        '<i class="flex center icon"><svg class="zs" aria-hidden="true"><use xlink:href="#left"></use></svg></i>' +
        '<h1 class="flexitem center" style="margin-left:-2rem;">选择品牌</h1>' +
        '</div>' +
        '<ul class="flexitemv mainbox company" style="padding-top:2rem"></ul>' +
        '<ul class="flexitemv lettrt">' +
        '<li class="flexitem center"><a href="#">#</a></li>' +
        '<li class="flexitem center"><a href="#A">A</a></li>' +
        '<li class="flexitem center"><a href="#B">B</a></li>' +
        '<li class="flexitem center"><a href="#C">C</a></li>' +
        '<li class="flexitem center"><a href="#D">D</a></li>' +
        '<li class="flexitem center"><a href="#E">E</a></li>' +
        '<li class="flexitem center"><a href="#F">F</a></li>' +
        '<li class="flexitem center"><a href="#G">G</a></li>' +
        '<li class="flexitem center"><a href="#H">H</a></li>' +
        '<li class="flexitem center"><a href="#I">I</a></li>' +
        '<li class="flexitem center"><a href="#J">J</a></li>' +
        '<li class="flexitem center"><a href="#K">K</a></li>' +
        '<li class="flexitem center"><a href="#L">L</a></li>' +
        '<li class="flexitem center"><a href="#M">M</a></li>' +
        '<li class="flexitem center"><a href="#N">N</a></li>' +
        '<li class="flexitem center"><a href="#O">O</a></li>' +
        '<li class="flexitem center"><a href="#P">P</a></li>' +
        '<li class="flexitem center"><a href="#Q">Q</a></li>' +
        '<li class="flexitem center"><a href="#R">R</a></li>' +
        '<li class="flexitem center"><a href="#S">S</a></li>' +
        '<li class="flexitem center"><a href="#T">T</a></li>' +
        '<li class="flexitem center"><a href="#U">U</a></li>' +
        '<li class="flexitem center"><a href="#V">V</a></li>' +
        '<li class="flexitem center"><a href="#W">W</a></li>' +
        '<li class="flexitem center"><a href="#X">X</a></li>' +
        '<li class="flexitem center"><a href="#Y">Y</a></li>' +
        '<li class="flexitem center"><a href="#Z">Z</a></li>' +
        '</ul>' +
        '</div>';

    $(id).append(brands);

    //  品牌
    var brands = [
        {id: 1, title: '安利', pinyin: 'anli'},
        {id: 1, title: '安惠', pinyin: 'anhui'},
        {id: 1, title: '嘉康利', pinyin: 'jiakangli'},
        {id: 1, title: '完美', pinyin: 'wanmei'}
    ];
    var char = '', charlist = [];
    var charTpl = [], listTpl = [];
    for (var k = 0; k < brands.length; k++) {
        var ch = brands[k].pinyin.substring(0, 1);
        if (char == ch) {
            charlist[char].push(brands[k]);
            listTpl.push('<div>' + brands[k].title + '</div>');
        } else {
            if (char != '') listTpl.push('</li>');
            char = ch;
            charlist[char] = [brands[k]];
            listTpl.push('<li id="' + char.toUpperCase() + '">');
            listTpl.push('<p>' + char.toUpperCase() + '</p>');
            listTpl.push('<div>' + brands[k].title + '</div>');
            charTpl.push('<li><a href="#' + char + '">' + char.toUpperCase() + '</a></li>');
        }
    }
    listTpl.push('</li>');
    $(".company").append(listTpl.join(''));

    // 选择
    $(btn).click(function () {
        $("#brand-menu").addClass('show');
        $("#brand-menu ul li div").click(function () {
            $(val).val($(this).text());
            $("#brand-menu").removeClass('show');
        });
        $("#brand-menu i.icon").click(function () {
            $("#brand-menu").removeClass('show');
        });
    });
}