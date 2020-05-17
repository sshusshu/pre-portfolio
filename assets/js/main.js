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


//웨이브 멈춤

//명언 한글로
var eng = document.querySelector('#quote .eng');
var ko = document.querySelector('#quote .ko');
var ko_li = document.querySelectorAll('#quote .ko ul li');
var res_ani = document.querySelector(".respect_right .animation");
var res_video = document.querySelector(".respect_right .video");
var back_tit = document.querySelectorAll('.back_tit');

console.log(back_tit)
window.addEventListener('scroll',function(){
	var wScroll = $(this).scrollTop();

	if(wScroll>=1100){
		eng.classList.add('off');
		ko.classList.add('on');
	}else{
		eng.classList.remove('off');
		ko.classList.remove('on');
	}
	for(var i = 0; i< ko_li.length ;i++){
		if(wScroll>=i*400+1100){
			if(i>0){//스크롤 내리면
				ko_li[i-1].classList.remove('on');
				ko_li[i].classList.add('on');
			}else{
				ko_li[i].classList.add('on');
			}
		}else{
			if(i>0){//스크롤 올리면
				ko_li[i].classList.remove('on');
			}else{
				ko_li[i].classList.remove('on');
			}
		}
	}
	
	if(wScroll>=3500){
		res_ani.classList.add('off');
		res_video.classList.add('on');
	}else{
		res_ani.classList.remove('off');
		res_video.classList.remove('on');
	}
})

//스크롤 제어



//선 웨이브
var canvas = document.getElementById( "canvas" );
	var size = {
		width: window.innerWidth,
		height: window.innerHeight
	};

	/*
	 * CONFIG
	 */

	var options = {
		color: "#fff",
		waveAmplitude: 40,
		waveRadius: 200,
		waveElasticity: 0.95,
		waveStrength: 0.011,
		waveMouse: 40,
		waveMax: 200,
		waveComeUp: function() {},
		waveRiseSpeed: 15,
		lineWidth: 1,
		waveLength: 100,
		distance: 20
	};

	/*
	 * UTILITIES
	 */

	function times( amount, closure ) {
		for ( var i = 0; i < amount; i++ ) {
			closure( i );
		}
	}

	function func( name ) {
		return function( obj ) {
			return obj[ name ]();
		};
	}


	function rand( min, max ) {
		return min + ( max - min ) * Math.random();
	}

	function bezier( points, context ) {

		var a, b, x, y;

		for ( var i = 1, length = points.length - 2; i < length; i++ ) {

			a = points[ i ];
			b = points[ i + 1 ];

			x = ( a.x + b.x ) * 0.5;
			y = ( a.y + b.y ) * 0.5;

			context.quadraticCurveTo( a.x, a.y, x, y );
		}

		a = points[ i ];
		b = points[ i + 1 ];

		context.quadraticCurveTo( a.x, a.y, b.x, b.y );
	}

	function distance( a, b ) {
		var x = b.x - a.x;
		var y = b.y - a.y;

		return Math.sqrt( x * x + y * y );
	}

	function clamp( val, min, max ) {
		return val < min ? min : ( val > max ? max : val );
	}

	/*
	 * GLOBAL CLASSES
	 */

	var Mouse = ( function() {

		var exports = {
			x: 0,
			y: 0,
			bind: function( canvas ) {
				canvas.addEventListener( "mousemove", onMouseMove );
				canvas.addEventListener( "touchmove", onTouchMove );
			},
			unbind: function( canvas ) {
				canvas.removeEventListener( "mousemove", onMouseMove );
				canvas.removeEventListener( "touchmove", onTouchMove );
			}
		};

		function onMouseMove( event ) {
			exports.x = event.pageX;
			exports.y = event.pageY;
		}

		function onTouchMove( event ) {
			event.preventDefault();

			exports.x = event.touches[ 0 ].pageX;
			exports.y = event.touches[ 0 ].pageY;
		}

		return exports;

	} )();

	var Stage = {
		width: 1,
		height: 1,
		set: function( values ) {
			Stage.width = values.width;
			Stage.height = values.height;
		}
	};

	/*
	 * ARCHITECTURE CLASSES
	 */

	var Water = function( context ) {

		var waves;

		function init() {
			options.waveComeUp = this.start.bind( this );
		}

		this.render = function() {
			context.strokeStyle = options.color;
			context.lineWidth = options.lineWidth;
			context.lineCap = "round";
			context.beginPath();

			waves.forEach( func( "render" ) );

			context.stroke();
		};

		this.setSize = function( width, height ) {

			createWaves( height );

			waves.forEach( function( wave ) {
				wave.setSize( width, height );
			} );

		};

		this.start = function() {
			waves.forEach( func( "start" ) );
		};

		function createWaves( height ) {

			waves = [];
			var distance = options.distance;

			times( height / distance, function( index ) {
				waves.push( new Wave( 0, index * distance + 10, context, rand( 0.08, 0.12 ) * index ) );
			} );

		}

		init.call( this );

	};

	var Wave = function( originalX, originalY, context, offset ) {

		var anchors;
		var width;
		var height;
		var mouseDirection;
		var oldMouse;
		var x;
		var y;

		function init() {
			x = originalX;
			y = originalY;

			anchors = [];
			mouseDirection = { x: 0, y: 0 };

			var anchor;
			var current = 0;
			var start = - options.waveAmplitude;
			var target = options.waveAmplitude;
			var delta = offset;
			var step = 0.4;

			times( window.innerWidth / options.waveLength, function() {
				anchor = new Anchor( current, 0, start, target, delta );
				anchor.setOrigin( current + x, y );

				anchors.push( anchor );

				current += 90;
				delta += step;

				if ( delta > 1 ) {
					times( Math.floor( delta ), function() {
						delta--;
						start *= -1;
						target *= -1;
					} );
				}

			} );
		}

		this.render = function() {

			update();

			context.save();
			context.translate( x, y );

			context.moveTo( anchors[ 0 ].x, anchors[ 0 ].y );
			bezier( anchors, context );

			context.restore();
		};

		this.setSize = function( _width, _height ) {
			width = _width;
			height = _height;

			var step = _width / ( anchors.length - 1 );

			anchors.forEach( function( anchor, i ) {
				anchor.x = step * i;
				anchor.setOrigin( anchor.x, y );
			} );
		};

		this.onAmpChange = function() {
			anchors.forEach( func( "onAmpChange" ) );
		};

		this.start = function() {
			y = height + 300 + originalY * 0.4;
		};

		function update() {
			var targetY = Math.min( y, Mouse.y + originalY );
			y += ( targetY - y ) / options.waveRiseSpeed;

			updateMouse();

			anchors.forEach( function( anchor ) {
				anchor.update( mouseDirection, y );
			} );
		}

		function updateMouse() {
			if ( ! oldMouse ) {
				oldMouse = { x: Mouse.x, y: Mouse.y };
				return;
			}

			mouseDirection.x = Mouse.x - oldMouse.x;
			mouseDirection.y = Mouse.y - oldMouse.y;

			oldMouse = { x: Mouse.x, y: Mouse.y };
		}

		init.call( this );

	};

	var Anchor = function( x, y, start, target, delta ) {

		var spring;
		var motion;
		var origin;

		function init() {
			spring = new Spring();
			motion = new Motion( start, target, delta );
			origin = {};
			this.x = x;
			this.y = y;
		}

		this.update = function( mouseDirection, currentY ) {
			origin.y = currentY;

			var factor = getMultiplier();
			var vector = {
				x: mouseDirection.x * factor * options.waveMouse,
				y: mouseDirection.y * factor * options.waveMouse
			};

			if ( factor > 0 ) {
				spring.shoot( vector );
			}

			spring.update();
			motion.update();

			this.y = motion.get() + spring.y;
		};

		this.onAmpChange = function() {
			motion.onAmpChange();
		};

		this.setOrigin = function( x, y ) {
			origin.x = x;
			origin.y = y;
		};


		function getMultiplier() {
			var lang = distance( Mouse, origin );
			var radius = options.waveRadius;

			return  lang < radius ? 1 - lang / radius : 0;
		}

		init.call( this );

	};

	var Motion = function( start, target, delta ) {

		var SPEED = 0.009;
		var half;
		var upper;
		var lower;
		var min;
		var max;

		function init() {
			this.onAmpChange();
		}


		this.setRange = function( a, b ) {
			min = a;
			max = b;
		};

		this.update = function() {
			delta += SPEED;

			if ( delta > 1 ) {
				delta = 0;
				start = target;
				target = target < half ? rand( upper, max ) : rand( min, lower );
			}
		};

		this.get = function() {
			var factor = ( Math.cos( ( 1 + delta ) * Math.PI ) + 1 ) / 2;
			return start + factor * ( target - start );
		};

		this.onAmpChange = function() {
			min = - options.waveAmplitude;
			max = options.waveAmplitude;
			half = min + ( max - min ) / 2;
			upper = min + ( max - min ) * 0.75;
			lower = min + ( max - min ) * 0.25;
		};


		init.call( this );

	};

	var Spring = function() {

		var px = 0;
		var py = 0;
		var vx = 0;
		var vy = 0;
		var targetX = 0;
		var targetY = 0;
		var timeout;

		function init() {
			this.x = 0;
			this.y = 0;
		}

		this.update = function() {
			vx = targetX - this.x;
			vy = targetY - this.y;
			px = px * options.waveElasticity + vx * options.waveStrength;
			py = py * options.waveElasticity + vy * options.waveStrength;
			this.x += px;
			this.y += py;
		};

		this.shoot = function( vector ) {
			targetX = clamp( vector.x, -options.waveMax, options.waveMax );
			targetY = clamp( vector.y, -options.waveMax, options.waveMax );

			clearTimeout( timeout );
			timeout = setTimeout( cancelOffset, 100 );
		};

		function cancelOffset() {
			targetX = 0;
			targetY = 0;
		}

		init.call( this );
	};

	var Canvas = function( canvas, size ) {

		var context;
		var width, height;
		var animation;

		function init() {

			context = canvas.getContext( "2d" );

			setTimeout( function() {
				Mouse.bind( canvas );
			}, 1000 );

			Stage.set( size );

			animation = new Water( context );

			this.setSize( size.width, size.height );

			animation.start();

			requestAnimationFrame( render );
		}

		function render() {
			context.setTransform( 1, 0, 0, 1, 0, 0 );
			context.clearRect( 0, 0, width, height );

			context.save();
			animation.render();
			context.restore();

			requestAnimationFrame( render );
		}

		this.setSize = function( _width, _height ) {

			canvas.width = Stage.width = width = _width;
			canvas.height = Stage.height = height = _height;

			animation.setSize( _width, _height );
		};

		init.call( this );
	};

	/*
	 * START
	 */

	var app = new Canvas( canvas, size );

	window.addEventListener( "resize", function() {
		app.setSize( window.innerWidth, window.innerHeight );
	}, false );