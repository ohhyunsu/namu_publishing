// navBox.js
(function($){
  // ================================================================
  // navigation 내용을 담을 형식 설정

  var navBox = [ 
    {'titleNav' : {'tname': 'COFFEENAMU', 'tlink':'http://naver.com','target':'_blank'},
    'subNav'   : [{'sname':'BRAND STORY', 'slink':'http://xidoweb.com'}, 
                  {'sname':'HISTORY',   'slink':'http://xidoweb.com'}] },
    {'titleNav' : {'tname':'MENU','tlink':'http://naver.com','target':'_blank'},
    'subNav'   : [{'sname':'COFFEENAMU ORIGINAL',           'slink':'http://w3.org'},
                  {'sname':'COFFEENAMU PREMIUM',         'slink':'http://w3.org'},
                  {'sname':'MENU STORY',   'slink':'http://w3.org'}] },
    {'titleNav' : {'tname':'STORE','tlink':'http://naver.com','target':'_blank'},
    'subNav'   : [{'sname':'STORE',   'slink':'http://daum.net'}] },
    {'titleNav' : {'tname':'FRANCHISE','tlink':'http://naver.com','target':'_blank'},
    'subNav'   : [{'sname':'CONTACT US',     'slink':'http://google.com'}, 
                  {'sname':'PROCESS',   'slink':'http://google.com'}],    
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