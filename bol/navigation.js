function abjql(e) {
    var a = document.createElement('script');
    (a.type = 'text/javascript'),
        a.readyState
            ? (a.onreadystatechange = function () {
                ('loaded' !== a.readyState && 'complete' !== a.readyState) ||
                    ((a.onreadystatechange = null), e());
            })
            : (a.onload = function () {
                e();
            }),
        (a.src = '//code.jquery.com/jquery-3.3.1.min.js'),
        document.getElementsByTagName('head')[0].appendChild(a);
}
function abjqlr(n) {
    var e = window.language_abtest

        (window.dataLayer = window.dataLayer || []),
        dataLayer.push({
            event: 'event-to-ga',
            eventCategory: 'Exp - PL Navigation v.2',
            eventAction: 'loaded',
        });
    var i = e,
        l = {
            marine: {
                text: i.marine,
                link: 'https://www.blackoakled.com/collections/marine-led-light-bars',
            },
            night_vision: {
                text: i.night_vision,
                link: 'https://www.blackoakled.com/products/extra-new-nitron-xd-marine-night-vision-camera',
            },
            vehicle: {
                text: i.vehicle,
                link: 'https://www.blackoakled.com/pages/search-by-vehicle',
            },
            hunting: {
                text: i.hunting,
                link: 'https://www.blackoakled.com/collections/hunting-led-light-bars',
            },
            atv_utv: {
                text: i.atv_utv,
                link: 'https://www.blackoakled.com/pages/search-by-vehicle?utv=true',
            },
            emergency: {
                text: i.emergency,
                link: 'https://www.blackoakled.com/collections/emergency-response-vehicles',
            },
            mounting: {
                text: i.mounting,
                link: 'https://www.blackoakled.com/collections/led-light-bar-mounts-2',
            },
        },
        r =
            '<div class="ab-test-menu"><span class="test-menu-control control-prev"></span>',
        d = 1,
        c = !1;
    for (item in l) {
        var u = l[item],
            h =
                'https://conversionratestore.github.io/projects/bol/img/' +
                item +
                '.svg';
        (r += '<a href="' + u.link + '" class="test-item-event '),
            location.href == u.link && 0 == c && ((r += 'active '), (c = !0)),
            (r +=
                'test-item-' +
                d +
                '" data-scrolgoto="' +
                d +
                '"><img src="' +
                h +
                '"/><span>' +
                u.text +
                '</span></a>'),
            d++;
    }
    (r += '<span class="test-menu-control control-next"></span></div>'),
        n('.header_nav .col-md-12').append(r),
        n('.header_nav .col-md-12').addClass('at-wraper'),
        n('.navbar-right .dropdown-grid.no-open-arrow.extra_img').remove();
    var p =
        '<ul><li class="parent has-sub"><a href="/pages/about-us" class="submenu-main-link">' +
        i.AboutUs +
        '</a><ul class="submenu"><li><a href="/pages/how-black-oak-ranks-superior">BuiltBetter</a></li><li><a href="/pages/customer-testimonials">Testimonials</a></li></ul></li><li><a href="/pages/wholesale">Dealers</a></li><li><a href="/pages/contact-us">ContactUs</a></li></ul>',
        m = n('#cssmenu .parent.has-sub:eq(0)').clone(),
        b = n('#cssmenu .parent.has-sub:eq(1)').clone(),
        g = n('.navbar-right .nav-search').html();
    function v() {
        n('body').find('.ab-test-menu').scrollLeft(0),
            n('body')
                .find('.ab-test-menu a')
                .each(function (e, a) {
                    var t =
                        n(this).offset().left -
                        n('body').find('.ab-test-menu').offset().left;
                    console.log(n(this)),
                        console.log(t),
                        n(this).data('firstposition', t);
                });
    }
    n('.row.collapse.navbar-collapse.no-transition').html(
        '<div class="col-md-12 search-and-menu"><div class="left-menu"><ul></ul></div><ul></ul>' +
        g +
        '<div class="right-menu">' +
        p +
        '</div></div>'
    ),
        m.appendTo('body .search-and-menu .left-menu ul'),
        b.appendTo('body .search-and-menu .left-menu ul'),
        n('.search-and-menu .left-menu [href="/pages/search-by-vehicle"]').html(
            i.vehicle
        ),
        n('.header_nav .menu-outer-wrapper').remove(),
        n('.header_nav').addClass('ab-test-header').removeClass('header_nav'),
        n('body').find('.ab-test-menu').data('current_pos', 1),
        v(),
        n(window).resize(function () {
            v();
        }),
        n(document).on('click', '.test-menu-control', function (e) {
            var a,
                t = n('body').find('.ab-test-menu').data('current_pos');
            t < 0 && (t = 1),
                t > n('body').find('.ab-test-menu a').length && (t = 1),
                n(this).hasClass('control-next') ? t++ : t--,
                (a = t),
                n('body')
                    .find('.ab-test-menu')
                    .animate({
                        scrollLeft: n('body')
                            .find('.ab-test-menu a:eq(' + a + ')')
                            .data('firstposition'),
                    });
        }),
        n(document).on('click', '.ab-test-menu a', function () {
            var e = n(this).find('span').text();
            (window.dataLayer = window.dataLayer || []),
                dataLayer.push({
                    event: 'event-to-ga',
                    eventCategory: 'Exp - PL Navigation v.2',
                    eventAction: 'click on navigation',
                    eventLabel: e,
                });
        }),
        n('body').append(
            '<style>.ab-test-header{width:100%!important;background:linear-gradient(180deg,#e9e9e9,#dedede),#d9d9d9}.ab-test-header .col-md-12{overflow:hidden;padding:0}.ab-test-header .col-md-12,.ab-test-menu{display:flex;justify-content:space-between}.ab-test-menu{max-width:990px;margin:0 auto;position:relative}.ab-test-menu a{color:#231f20;display:flex;align-items:center;flex:0 0 auto;justify-content:center;padding:5px 17px;transition:background-color .2s ease-in-out}.ab-test-menu a:active,.ab-test-menu a:hover{background-color:#a9a9a9}.ab-test-menu a img{margin-right:6px;}.ab-test-menu a.active{background-color:#a9a9a9}span.test-menu-control{display:block;cursor:pointer;width:28px;height:28px;position:absolute}span.test-menu-control.control-next{right:0}.submenu{display:none;position:absolute}.has-sub{position:relative}.has-sub:after{position:absolute;top:22px;right:11px;width:8px;height:2px;display:block;background:0 0;content:"";vertical-align:middle;border-top:4px solid #fff;border-right:4px solid transparent;border-left:4px solid transparent}.has-sub>a:hover+.submenu{display:block}#main_navbar .col-md-9.col-sm-6{padding-top:20px;padding-left:0}.parent.has-sub .submenu-main-link+ul{display:none;position:absolute;top:auto;left:0}.parent.has-sub .submenu-main-link:hover+ul,.parent.has-sub:hover>.submenu-main-link+ul{display:block}.search-and-menu{display:flex;align-items:center;justify-content:space-between;padding:0}#header .search-and-menu form[role=search]{width:297px;margin:0 10px}#header .search-and-menu form[role=search] .menu_c{border-radius:2px;overflow:hidden}#header .search-and-menu form[role=search] .search_menu .search_box button{right:0}.search-and-menu ul{display:flex;margin:0;z-index:1;flex-wrap:wrap}.search-and-menu ul li a{padding:13px 17px 13px 10px;display:block;color:#fff}.search-and-menu ul li a:hover{text-decoration:underline;color:#fff}.search-and-menu ul li.has-sub a{padding-right:25px}.search-and-menu ul ul li{border:1px solid #676767}.search-and-menu ul ul li:hover a{color:#393939;background:#ddd!important;border-bottom:1px solid hsla(0,0%,59%,.15)!important}.search-and-menu ul ul li a{color:#393939;background:#ddd;border-bottom:1px solid hsla(0,0%,59%,.15);padding:11px 15px;width:195px}.search-and-menu ul ul .has-sub:after{border-top:4px solid #393939}.search-and-menu ul ul .has-sub:hover>ul{display:block}.search-and-menu ul ul ul{right:auto;left:100%!important;top:0!important}.search-and-menu ul ul ul li:hover a,.search-and-menu ul ul ul li a{background-color:#f3f3f3}</style>'
        );
}
(window.language_abtest = {
    AboutUs: 'About Us',
    BuiltBetter: 'Built Better',
    Testimonials: 'Testimonials',
    Dealers: 'Dealers',
    ContactUs: 'Contact Us',
    marine: 'Marine',
    night_vision: 'Night Vision',
    vehicle: 'Vehicle',
    hunting: 'Hunting',
    atv_utv: 'ATV/UTV',
    emergency: 'Emergency',
    mounting: 'Mounting',
}),
    window.jQuery
        ? jQuery(function (e) {
            abjqlr(e);
        })
        : abjql(function () {
            jQuery(function (e) {
                abjqlr(e);
            });
        });
