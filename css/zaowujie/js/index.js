var container = document.getElementById('container');
var box = document.getElementById('box');
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var arr =  box.getElementsByTagName('div');
var radius = calculateRadius(129,20);
var item = document.getElementById('item');
var winW = document.documentElement.clientWidth;
var winH = document.documentElement.clientHeight;
function calculateRadius(length, totalNum) {
	return Math.round(length / (2 * Math.tan(Math.PI / totalNum))) - 2 ;
}
var perspect = 700;
var see = -200;
var translateY = winH*0.5 - 560;
//样式
container.style.perspective = perspect+'px';
box2.style.transform = 'translate3d(-50%, -50%, 0px) translate3d(0px,0px, '+perspect+'px)';
box1.style.transform = 'translate3d(-50%, -50%, 0px) translate3d(0px,'+winH/2+'px, '+see+'px)';
for(var i=0;i<arr.length;i++){
	arr[i].style.background = 'url(images/p'+ (i+1)+'.png) no-repeat';
	arr[i].style.backgroundSize = '100% 100%';
	arr[i].style.WebkitTransform = "translate3d(-50%, -50%, 0px) rotateY(" + -360 / arr.length * i + 'deg) translatez(' + -radius + 'px)';
}

//交互
var startX = 0,
x = 0,
endX = 0;
var startY = 0,
y = 0,
endY = 0;
var flag = true;
var ifMove = true;
var rotateX = 0;
container.addEventListener('touchstart',function(e){
	event.preventDefault();
	var touch = event.targetTouches[0];
	startX = touch.pageX - x;
	startY = touch.pageY;
	tempsize = -30;

	box1.style.transform = 'translate3d(-50%, -50%, 0px) translate3d(0px,'+winH/2+'px, '+(see + tempsize)+'px)';
})
container.addEventListener('touchmove',function(e){
	if (flag) {
		event.preventDefault();
		var touch = event.targetTouches[0];
		endX = touch.pageX;
		endY = touch.pageY;
		if(Math.abs(endX - startX)>20){
			x = endX - startX;
		}
		if(Math.abs(endY - startY)>50){
			y = (endY - startY)/100 + y;
			y = Math.abs(y)<30?y:y>0?30:-30;
		}
		box.style.transform = 'translate3d(-50%, -50%, 0px) translate3d(0px,0px, 0px) rotateX('+y+'deg) rotateY('+x/3%360+'deg)';
		window.setTimeout(function(){
			item.style.transform = 'translate3d(-50%, -50%, 0px) translate3d(0px,0px, '+(0-tempsize/4)+'px) rotateX('+y+'deg) rotateY('+x/3%360+'deg)';
		},30);

	} else {
		return false;
	}
});
container.addEventListener('touchend',function(e){
	event.preventDefault();
	(function f(){
		tempsize += 1;
		box1.style.transform = 'translate3d(-50%, -50%, 0px) translate3d(0px,'+winH/2+'px, '+(see + tempsize)+'px)';
		item.style.transform = 'translate3d(-50%, -50%, 0px) translate3d(0px,0px, '+(0-tempsize/4)+'px) rotateX('+y+'deg) rotateY('+x/3%360+'deg)';
		if(tempsize<0){
			window.requestAnimationFrame(f);
		}
	})();
})
//样式
var k = document.getElementsByClassName('k');
for(var i=0;i<k.length;i++){
	k[i].style.background = 'url(images/k'+ (i+1)+'.png) no-repeat';
	k[i].style.backgroundSize = '100% 100%';
	k[i].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * i + 125) + 'deg) translateY(480px) translatez(' + -(radius - 5) + 'px)';
	k[i].style.height = '547px';
}

var o = document.getElementsByClassName('o');
for(var i=0;i<o.length;i++){
	o[i].style.background = 'url(images/o'+ (i+1)+'.png) no-repeat';
	o[i].style.backgroundSize = '100% 100%';
	o[i].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * i + 145) + 'deg) translateY(280px) translatez(' + -(radius - 5) + 'px)';
	o[i].style.height = '196px';
}

var q = document.getElementsByClassName('q');
for(var i=0;i<q.length;i++){
	q[i].style.background = 'url(images/q'+ (i+1)+'.png) no-repeat';
	q[i].style.backgroundSize = '100% 100%';
	q[i].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * i + 110) + 'deg) translateY(290px) translatez(' + -(radius - 5) + 'px)';
	q[i].style.height = '154px';
}

var u = document.getElementsByClassName('u');
for(var i=0;i<u.length;i++){
	u[i].style.background = 'url(images/u'+ (i+1)+'.png) no-repeat';
	u[i].style.backgroundSize = '100% 100%';
	u[i].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * i ) + 'deg) translateY(480px) translatez(' + -(radius - 5) + 'px)';
	u[i].style.height = '679px';
}

var s = document.getElementsByClassName('s');
for(var i=0;i<s.length;i++){
	s[i].style.background = 'url(images/s'+ (i+1)+'.png) no-repeat';
	s[i].style.backgroundSize = '100% 100%';
	s[i].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * i ) + 'deg) translateY(450px) translatez(' + -(radius - 5) + 'px)';
	s[i].style.height = '107px';
}

var e = document.getElementsByClassName('e');
for(var i=0;i<e.length;i++){
	e[i].style.background = 'url(images/e'+ (i+1)+'.png) no-repeat';
	e[i].style.backgroundSize = '100% 100%';
	e[i].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * i  + 60) + 'deg) translateY(770px) translatez(' + -(radius - 7) + 'px)';
	e[i].style.height = '350px';
}

var c = document.getElementsByClassName('c');
for(var i=0;i<c.length;i++){
	c[i].style.background = 'url(images/c'+ (i+1)+'.png) no-repeat';
	c[i].style.backgroundSize = '100% 100%';
	c[i].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * i  + 35) + 'deg) translateY(20px) translatez(' + -(radius - 7) + 'px)';
	c[i].style.height = '128px';
}

var b = document.getElementsByClassName('b');
for(var i=0;i<b.length;i++){
	b[i].style.background = 'url(images/b'+ (i+1)+'.png) no-repeat';
	b[i].style.backgroundSize = '100% 100%';
	b[i].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * i  + 55) + 'deg) translateY(40px) translatez(' + -(radius - 7) + 'px)';
	b[i].style.height = '220px';
}

var l = document.getElementsByClassName('l');
for(var i=0;i<l.length;i++){
	l[i].style.background = 'url(images/l'+ (i+1)+'.png) no-repeat';
	l[i].style.backgroundSize = '100% 100%';
	l[i].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * i  + 180) + 'deg) translateY(970px) translatez(' + -(radius - 7) + 'px)';
	l[i].style.height = '183px';
}

var r = document.getElementsByClassName('r');
for(var i=0;i<r.length;i++){
	r[i].style.background = 'url(images/r'+ (i+1)+'.png) no-repeat';
	r[i].style.backgroundSize = '100% 100%';
	r[i].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * i  + 145) + 'deg) translateY(55px) translatez(' + -(radius - 5) + 'px)';
	r[i].style.height = '188px';
}

var t = document.getElementsByClassName('t');
for(var i=0;i<t.length;i++){
	t[i].style.background = 'url(images/t'+ (i+1)+'.png) no-repeat';
	t[i].style.backgroundSize = '100% 100%';
	t[i].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * i  + 163) + 'deg) translateY(115px) translatez(' + -(radius - 7) + 'px)';
	t[i].style.height = '99px';
}

var m = document.getElementsByClassName('m');
for(var i=0;i<m.length;i++){
	m[i].style.background = 'url(images/m'+ (i+1)+'.png) no-repeat';
	m[i].style.backgroundSize = '100% 100%';
	m[i].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * i  + 216) + 'deg) translateY(306px) translatez(' + -(radius - 5) + 'px)';
	m[i].style.height = '179px';
}

var h = document.getElementsByClassName('h');
for(var i=0;i<h.length;i++){
	h[i].style.background = 'url(images/h'+ (i+1)+'.png) no-repeat';
	h[i].style.backgroundSize = '100% 100%';
	h[i].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * i  + 233) + 'deg) translateY(648px) translatez(' + -(radius - 5) + 'px)';
	h[i].style.height = '410px';
}

var i = document.getElementsByClassName('i');
for(var n=0;n<i.length;n++){
	i[n].style.background = 'url(images/i'+ (n+1)+'.png) no-repeat';
	i[n].style.backgroundSize = '100% 100%';
	i[n].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * n  + 290) + 'deg) translateY(750px) translatez(' + -(radius - 5) + 'px)';
	i[n].style.height = '265px';
}

var f = document.getElementsByClassName('f');
for(var i=0;i<f.length;i++){
	f[i].style.background = 'url(images/f'+ (i+1)+'.png) no-repeat';
	f[i].style.backgroundSize = '100% 100%';
	f[i].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * i  + 305) + 'deg) translateY(25px) translatez(' + -(radius - 5) + 'px)';
	f[i].style.height = '268px';
}

var j = document.getElementsByClassName('j');
for(var i=0;i<j.length;i++){
	j[i].style.background = 'url(images/j'+ (i+1)+'.png) no-repeat';
	j[i].style.backgroundSize = '100% 100%';
	j[i].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * i  + 325) + 'deg) translateY(390px) translatez(' + -(radius - 5) + 'px)';
	j[i].style.height = '238px';
}

var g = document.getElementsByClassName('g');
for(var i=0;i<g.length;i++){
	g[i].style.background = 'url(images/g'+ (i+1)+'.png) no-repeat';
	g[i].style.backgroundSize = '100% 100%';
	g[i].style.WebkitTransform = "translateY(-585px) translate3d(-50%, 0px, 0px) rotateY(" + -(18 * i  + 310) + 'deg) translateY(810px) translatez(' + -(radius - 5) + 'px)';
	g[i].style.height = '151px';
}



// window.setInterval(function(){
// 	i++;
// 	box.style.transform = 'translate3d(-50%, -50%, 0px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY('+i+'deg) rotateZ(0deg) scale3d(1, 1, 1)';
// },50);

// window.addEventListener('deviceorientation', function(event) {

// 	var gamma = event.gamma;
// 	if (Math.abs(gamma) > 1) {
// 		flag = false;
// 		box.style.transform = 'rotateY(' + gamma * 3 + 'deg)';
// 	} else {
// 		flag = true;
// 	}

// })