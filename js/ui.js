$(document).ready(function(){

    // a, button태그 title 속성 비어있을때 작성된text로 title 생성
    $('a, .btn, button').each(function(){
        let Tag = $(this);
        let attr = Tag.text().trim();
        if ($(this).is('[title]')) {
        } else {
            Tag.attr("title",attr);
        }
    })

    // popup 닫기
    $(".popup .popup_clo_btn").on("click",function(){
        $(this).parents().parents(".popup").hide();
    })


    // range bar
    // 220923 input[type="range"] > .scaleInput 수정
    $('.scaleInput').on('input', function(){
        var val = $(this).val();
        $(this).css('background', 'linear-gradient(to right, #007A8A 0%, #007A8A '+ val +'%, #eee ' + val + '%, #eee 100%)');
    });

    // toolbar deps02
    var tool_deps01 = $(".tool_bar .deps01 > a")
    tool_deps01.on("click",function(){
        $(this).parents('.deps01').toggleClass("on");
        tool_deps01.not($(this)).parents('.deps01').removeClass("on");
    });

    var tool_deps02_btn = $(".tool_bar .opaBtn")
    tool_deps02_btn.on("click",function(){
        $(this).parents('.deps02Popup').parents('.deps01').toggleClass("on");
    })

    // tab
    $('.tab_wrap').each(function(){
        var $tabs= $(this);
        var $tabBtns = $tabs.find('.tab_btn')
        var $btn = $tabBtns.find('a');
        var $tabCont = $tabs.find('.tab_cont');

        $btn.bind('click', function(e){
            e.preventDefault();
            var $this = $(this)
            var trgt = $this.attr('href');
            $tabBtns.find('li').removeClass('on');
            $this.parent().addClass('on');
            $tabCont.removeClass('on');
            $(trgt).addClass('on')
        })
    });

    // tabContTab
    $('.toc_cont').each(function(){
        var $tocs= $(this);
        var $tocBtns = $tocs.find('.tabContBtn')
        var $tocBtn = $tocBtns.find('a');
        var $tocCont = $tocs.find('.tocCont');

        $tocBtn.bind('click', function(e){
            e.preventDefault();
            var $this = $(this)
            var trgt = $this.attr('href');
            $tocBtns.find('li').removeClass('on');
            $this.parent().addClass('on');
            $tocCont.removeClass('on');
            $(trgt).addClass('on')
        })
    });

    // 일필지조회탭
    $(".tabDynamic .tab_btn li").on('click',function(){
        var tabDynamic_idx = $(".tabDynamic li").index(this);
        var tabDynamic_cont_idx = $(".tabDynamic_cont>div").index(this);
        if (tabDynamic_idx == tabDynamic_cont_idx){
          $(".tabDynamic_cont>div:eq("+tabDynamic_idx+")").addClass('on');
          $(".tabDynamic_cont>div").not(".tabDynamic_cont>div:eq("+tabDynamic_idx+")").removeClass('on');
        } else {
          $(".tabDynamic_cont>div:eq("+tabDynamic_idx+")").addClass('on');
          $(".tabDynamic_cont>div").not(".tabDynamic_cont>div:eq("+tabDynamic_idx+")").removeClass('on');
        }
    });

    // area 눈표시
    $(".eyeIco").on("click",function(){
        $(this).toggleClass("on");
    });

    // toc 열고 닫기
    $(".toc .tab_wrap .toc_toggle_btn").on("click",function(){
        if($(this).parents(".tab_wrap").hasClass("hide")){
            $(this).parents(".tab_wrap").removeClass("hide")
            $(this).css("background","#007A8A url('../images/toc/toc_toggle_btn_01.png')no-repeat center")
        }else{
            ($(this).parents(".tab_wrap").addClass("hide"))
            $(this).css("background","#007A8A url('../images/toc/toc_toggle_btn_02.png')no-repeat center")
        }
    });

    // 행정구역 선택
    $('.location > ul > li > span').on({
        "click":function (){
            $(this).siblings('.dep2').toggleClass('active').closest('li').siblings('li').children('.dep2').removeClass('active')
        }
    });
    $('.breadcrumbs > ul > li > span').on({
        "click":function (){
            $(this).siblings('.dep2').toggleClass('active').closest('li').siblings('li').children('.dep2').removeClass('active')
        }
    });

     // popup 열고 닫기
     $(".popup .popup_toggle_btn").on("click",function(){
        if($(this).parents(".popup").hasClass("hide")){
            $(this).parents(".popup").removeClass("hide")
            $(this).css("background","#fff url('../images/toc/popup_toggle_btn_01.png')no-repeat center")
        }else{
            ($(this).parents(".popup").addClass("hide"))
            $(this).css("background","#fff url('../images/toc/popup_toggle_btn_02.png')no-repeat center")
        }
    });

    // 체크박스 전체 선택
    $(".chkBox").on("click", ".chkAll", function () {
        var checked = $(this).is(":checked");
    
        if(checked){
            $(this).parents(".chkBox").find('input').prop("checked", true);
        } else {
            $(this).parents(".chkBox").find('input').prop("checked", false);
        }
    });

    // 체크박스 개별 선택
    $(".chkBox").on("click", ".chkInd", function() {
        var checked = $(this).is(":checked");
    
        if (!checked) {
            $(".chkAll").prop("checked", false);
        }
    });

    // area dep active
	$('.area_cont li.hasSub>p').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			// element.siblings('li').children('ul').slideUp(200);
			// element.siblings('li').removeClass('open');
			// element.siblings('li').find('li').removeClass('open');
			// element.siblings('li').find('ul').slideUp(200);
		}
	});

    // popupSliding 닫기
    $(".popupSliding .cloBtn").on("click",function(){
        $(this).parents().parents().parents(".popupSliding").hide();
    })

    // popupSliding 드래그
    $('.popupSliding').draggable({
        cancel: '.slidingBox',
        containment: "window"
    });

    // popupSliding 최소화
    $('.popupSliding .miniBtn').on('click',function(){
        if($(this).parent().parent().parent().hasClass('active')){
            $(this).parent().parent().next('.slidingBox').stop().slideUp()
            $(this).css("background","url('../images/popup/ico_mini_btn02.png')no-repeat center")
            $(this).parent().parent().parent().removeClass('active')
            $(this).parent().parent().parent().addClass("mini")
        }else{
            $(this).parent().parent().next('.slidingBox').stop().slideDown()
            $(this).css("background","url('../images/popup/ico_mini_btn01.png')no-repeat center")
            $(this).parent().parent().parent().addClass('active')
            $(this).parent().parent().parent().removeClass("mini")
        }
    });


    // 분석도구 on
    var rangeBox = $(".rangeBox > div")
    rangeBox.on("click",function(){
        $(this).toggleClass("on");
        rangeBox.not($(this)).removeClass("on");
    });

    // 검색결과 팝업 닫기
    $(".addressBox .head button").on("click",function(){
        $(".addressBox").hide();
    })

    /* radio tab */
    $('.choiceArea ul li').on({
        'click': function(){
            const index = $(this).index();

            /* 클릭 시 가끔 탭 전환이 안되서 radio checked 됬을 때 탭 전환되도록! */
            if($(this).find('input[type="radio"]').is(':checked')){
                $(this).closest('.top').siblings('.bottom').find('.bottomCont').eq(index)
                .addClass('active').siblings('.bottomCont').removeClass('active');

                // $(this).closest('.titArea').siblings('.rdCont').eq(index)
                // .addClass('active').siblings('.rdCont').removeClass('active');
            }
        }
    });

    /* datepicker */
    $('.cal').datepicker({
        dateFormat: "yy-mm-dd",
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        monthNamesShort: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        // yearSuffix: "년",
        changeYear: true,
        changeMonth:true,
        yearRange: "1960:2030"
    });


    // table tr 클릭 highlight
    var trhighlight = $(".trhighlight tbody tr")
    trhighlight.on("click",function(){
        $(this).toggleClass("on");
        trhighlight.not($(this)).removeClass("on");
    });

    // alert, confirm 팝업 닫기
    $(".commonPopup .cloBtn").on("click",function(){
        $(this).parents(".commonPopup").hide();
        $(this).parents(".commonPopup").next(".dimmed").hide();
    });

    // chkSelectBox 체크박스로 셀렉트제어
    
    $("#chkSelectBox").change (function () {
        var st = this.checked;
        if (st) {
            $("select.applicable").prop("disabled", true);
            $("select.applicable").addClass("disabled");
        } else {
            $("select.applicable").prop("disabled", false);
            $("select.applicable").removeClass("disabled");
        }
    });

    // 항공사진 리스트
    var tool_dep02 = $(".deps02 a > button")
    tool_dep02.on("click",function(){
        $(this).next('.dep02').toggleClass("active");
        tool_dep02.not($(this)).next('.dep02').removeClass("active");
    });
    
});
