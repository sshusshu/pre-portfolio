//로고 애니메이션
var ver = document.querySelectorAll('#ver');
var hor = document.querySelectorAll('#hor');
var cir = document.querySelectorAll('#cir');
var none = document.querySelectorAll('#none');
var rect = document.querySelectorAll('#rect');
var black = document.querySelectorAll('#black');
var ball= document.querySelectorAll('#ball');
var ruler= document.querySelectorAll('#ruler');
var letter= document.querySelectorAll('#letter');
function addCl (v,second){
	setTimeout(function(){
		v.forEach(function(a){
		a.classList.add('on')
	})
	},second)		
}

addCl(ver,1000)
addCl(hor,1000)
addCl(cir,2000)	
addCl(none,2000)
addCl(rect,2000)
addCl(black,3000)
addCl(ball,4000)
addCl(ruler,4000)
addCl(letter,4000)
