// navBox.js
(function($){
  // ================================================================
  // navigation 내용을 담을 형식 설정

  var navBox = [ 
    {'titleNav' : {'tname': 'COFFEENAMU', 'tlink':'../html/coffeenamu.html','target':'_salf'},
    'subNav'   : [{'sname':'BRAND STORY', 'slink':'../html/coffeenamu.html'}, 
                  {'sname':'HISTORY',   'slink':'../html/coffeenamu.html'}] },
    {'titleNav' : {'tname':'MENU','tlink':'../html/menu_namu.html','target':'_salf'},
    'subNav'   : [{'sname':'COFFEENAMU ORIGINAL',           'slink':'../html/menu_namu.html'},
                  {'sname':'COFFEENAMU PREMIUM',         'slink':'../html/menu_namu.html'},
                  {'sname':'MENU STORY',   'slink':'../html/menu_namu.html'}] },
    {'titleNav' : {'tname':'STORE','tlink':'../html/store.html','target':'_salf'},
    'subNav'   : [{'sname':'STORE',   'slink':'../html/store.html'}] },
    {'titleNav' : {'tname':'FRANCHISE','tlink':'../html/franchise.html','target':'_salf'},
    'subNav'   : [{'sname':'CONTACT US',     'slink':'../html/franchise.html'}, 
                  {'sname':'PROCESS',   'slink':'../html/franchise.html'}],    
  }];
  // console.log( navBox.length );
  // ================================================================
  // #navBox내부에 각각의 요소내용 삽입

  var navList = '<li><dl><dt></dt><dd></dd></dl></li>';
  var navBoxSel = $('#navBox');
  var navBoxSelUl = navBoxSel.children('ul');
  var navLen = navBox.length;
  var navDt, navDd, subNavLen, i, j, tNav, sNav;
  for(i=0; i<navLen; i+=1){
    navBoxSelUl.append(navList);
    navDt = navBoxSelUl.children('li').eq(i).find('dt');
    navDd = navBoxSelUl.children('li').eq(i).find('dd');
    tNav = navBox[i].titleNav;
                                 
    navDt.append('<a href="'+ tNav.tlink +'" target="'+ tNav.target +'">'+ tNav.tname +'</a>');
    // navDt.append(`<a href="${tNav.tlink}" target="${tNav.target}">${tNav.tname}</a>`);

    subNavLen = navBox[i].subNav.length;    
    for( j=0; j<subNavLen; j+=1){
      sNav = navBox[i].subNav[j];
      navDd.append('<a href="'+ sNav.slink +'">'+ sNav.sname +'</a>');
      // console.log(j);
    }
  } // for end
// ----------------------------------------------------------------------
var navBoxFindDt = navBoxSel.find('dt');
var navBoxFindDtLink = navBoxFindDt.find('a');
var navBoxFindDd = navBoxSel.find('dd');
var navBoxFindDdLink = navBoxFindDd.find('a');
navBoxFindDd.hide();
// navBoxSelUl.addEventListener('mouseenter', function(){});

var navSlideDown = function(){  
  // navBoxFindDd.stop().slideDown(); 
  var nextDd = $(this).nextAll('dd');
  nextDd.stop().slideDown(); 
  navBoxFindDd.not(nextDd).stop().slideUp(); 
};
var navSlideUp = function(){
  navBoxFindDd.stop().slideUp();
};

// navBoxSelUl.on('mouseenter', navSlideDown);
// navBoxSelUl.on('mouseleave', navSlideUp);
navBoxFindDt.on({'mouseenter':navSlideDown});
navBoxSelUl.on({'mouseleave':navSlideUp });

navBoxFindDtLink.on('focus', navSlideDown);
navBoxFindDdLink.eq(-1).on('blur', navSlideUp);

})(jQuery);

/**선택시
js에서는 자식을 선택할경우에 children() -> jQuery에서도 children()
js에서 자손요소를 선택시 getElement...() -> jQuery에서는 find()
*/
/** 요소첨부시 
-- js에서는
document.createElement();  //생성 후
선택자.append()                // 삽입
====================================
-- jQuery에서는 
선택자.append('요소이름')    // 생성과동시에삽입
*/

// 링크 주소담기
// 기능요약/함수화처리