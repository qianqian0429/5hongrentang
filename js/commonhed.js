 function Header(obt) {
 	this.box = obt.box;
 	this.nav = obt.nav;
 	this.cur = obt.cur|| 0;
 	this.init();
 	this.header= '';
 	this.html="";
 }
 Header.prototype={
 	init(){
 		this.Render();
 	},
 	Render(){
 		for (var key in this.nav) {
 			// console.log(this.nav);
 			this.html+=`<div class="swiper-slide hei"><a href="${this.nav[key]}" class="col33 f28">${key}<b></b></a></div>`
 			// console.log(this.html)
 			// console.log(this.nav);

 			// console.log(this.nav[key])

 		}
 		 this.html=this.html.substring(9);

 		 console.log(this.html)
 		 this.header=`<div class="headbox">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        ${this.html}
                    </div>
                </div>
            </div>
            <div class="sounav">
                <div class="navsbox">
                   <div class="headsearch">
                   		<a href="search.html" ></a>
                   </div>
                   <div class="headmenu">
                   	  <a href="javascript:;" class="menubtn"></a>
                   </div>
                </div>
            </div>`;
                $(this.box).html(this.header);
                 $('.hei a').removeClass('cur');
        			$('.hei a').eq(this.cur-1).addClass('cur');
        			

 	}
 }


function Footer(opt){
    this.box = $(opt.box);
    this.html = '';
    this.cur =opt.cur|| 0 ;
    this.init();
}

Footer.prototype={
    constructor:Footer,
    init(){
       this.Render();
    },
    Render(){
        this.html=  `<div class="common_footer">
        <a href="index.html">
            <span></span>
            <p>首页</p>
        </a>
        <a href="finecourse.html">
            <span></span>
            <p>学堂</p>
        </a>
        <a href="register.html">
            <span></span>
            <p>注册</p>
        </a>
        <a href="bbs.html">
            <span></span>
            <p>问答</p>
        </a>
        <a href="user.html">
            <span></span>
            <p>我的</p>
        </a>
    </div>`;
    this.box.html(this.html);
    $('.common_footer a').removeClass('cur');
    $('.common_footer a').eq(this.cur).addClass('cur');
    }
}