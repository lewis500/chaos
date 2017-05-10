webpackJsonp([1],{

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stylePlot__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stylePlot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__stylePlot__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_recompose__ = __webpack_require__(51);






const RADIUS = 180;
const WIDTH = 300;
const HEIGHT = 300;
const aScale = __WEBPACK_IMPORTED_MODULE_3_d3__["scaleLinear"]().domain([-0.1, 0.1]).range([0, WIDTH]);
const bScale = __WEBPACK_IMPORTED_MODULE_3_d3__["scaleLinear"]().domain([-0.1, 0.1]).range([HEIGHT, 0]);
const colorScale = __WEBPACK_IMPORTED_MODULE_3_d3__["scaleSequential"](__WEBPACK_IMPORTED_MODULE_3_d3__["interpolatePlasma"]).domain([-0.05, 0.05]);
// .domain
const mar = {
	top: 10,
	left: 20,
	bottom: 20,
	right: 10
};

class Plot extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent {
	componentDidMount() {
		// console.log("hello");
		__WEBPACK_IMPORTED_MODULE_3_d3__["select"](this.xAxis).call(__WEBPACK_IMPORTED_MODULE_3_d3__["axisBottom"]().scale(aScale).ticks(2));
		__WEBPACK_IMPORTED_MODULE_3_d3__["select"](this.yAxis).call(__WEBPACK_IMPORTED_MODULE_3_d3__["axisLeft"]().scale(bScale).ticks(2));
		// this.a0 = 0;
		// this.b0 = 0;
		this.ctx = this.canvas.getContext("2d");
	}

	render() {
		let M = 0,
		    a = 0,
		    b = 0;
		for (var d of this.props.cups) {
			a += -d.m * Math.sin(d.θ);
			b += d.m * Math.cos(d.θ);
			M += d.m;
		}
		a = a / M;
		b = b / M;
		if (this.a0) {
			let ctx = this.ctx;
			ctx.strokeStyle = colorScale(this.props.ω);
			ctx.beginPath();
			ctx.moveTo(aScale(this.a0), bScale(this.b0));
			ctx.lineTo(aScale(a), bScale(b));
			ctx.stroke();
		}
		this.a0 = a;
		this.b0 = b;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{ className: __WEBPACK_IMPORTED_MODULE_2__stylePlot___default.a.plot },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("canvas", {
				style: { left: mar.left, top: mar.top, height: HEIGHT, width: WIDTH },
				className: __WEBPACK_IMPORTED_MODULE_2__stylePlot___default.a.canvas,
				ref: d => this.canvas = d,
				width: WIDTH,
				height: HEIGHT
			}),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"svg",
				{
					width: WIDTH + mar.left + mar.right,
					height: HEIGHT + mar.top + mar.bottom,
					className: __WEBPACK_IMPORTED_MODULE_2__stylePlot___default.a.plot
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"g",
					{ transform: `translate(${mar.left},${mar.right})` },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
						ref: d => this.xAxis = d,
						transform: `translate(0,${HEIGHT / 2})`
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
						transform: `translate(${WIDTH / 2}, 0)`,
						ref: d => this.yAxis = d
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", {
						r: "3",
						className: __WEBPACK_IMPORTED_MODULE_2__stylePlot___default.a.dot,
						transform: `translate(${aScale(a)},${bScale(b)})`
					})
				)
			)
		);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Plot;


/***/ }),

/***/ 81:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wheel":"styleMain__wheel___3Nt","cup":"styleMain__cup___3O1","shell":"styleMain__shell___346","fill":"styleMain__fill___3Dz","water":"styleMain__water___3vY","spigot":"styleMain__spigot___39O","row":"styleMain__row___25W"};

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styleMain__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styleMain___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styleMain__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plot__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_recompose__ = __webpack_require__(51);








const RADIUS = 180;
const HEIGHT = 400;
const WIDTH = 400;
const NUM_CUPS = 36;
const τ = Math.PI * 2;
const ν = 8;
const γ = 1 / 20;
const λ = 0.1;
const k = 0.0005;
const WHEEL_INTERTIA = 100;

const Cup = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_recompose__["a" /* pure */])(({ θ, m }) => {
	let pos = [Math.cos(θ + Math.PI / 2) * RADIUS, -Math.sin(θ + Math.PI / 2) * RADIUS];
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"g",
		{ className: __WEBPACK_IMPORTED_MODULE_2__styleMain___default.a.cup, transform: `translate(${pos}) translate(-9,-8)` },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { width: "18", height: "16", className: __WEBPACK_IMPORTED_MODULE_2__styleMain___default.a.shell }),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { width: "14", height: "14", x: "2", className: __WEBPACK_IMPORTED_MODULE_2__styleMain___default.a.fill }),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { width: "14", x: "2", height: m, y: 14 - m, className: __WEBPACK_IMPORTED_MODULE_2__styleMain___default.a.water })
	);
});

const Vis = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_recompose__["a" /* pure */])(({ cups }) => {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"svg",
		{ width: WIDTH, height: HEIGHT },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", {
			x1: WIDTH / 2,
			x2: WIDTH / 2,
			y2: HEIGHT,
			className: __WEBPACK_IMPORTED_MODULE_2__styleMain___default.a.spigot
		}),
		";",
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"g",
			{ transform: `translate(${WIDTH / 2},${HEIGHT / 2})` },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", { r: RADIUS, className: __WEBPACK_IMPORTED_MODULE_2__styleMain___default.a.wheel }),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				null,
				cups.map(({ θ, m }, i) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Cup, { θ: θ, m: m, key: i }))
			)
		)
	);
});

function underSpigot(θ) {
	return θ <= Math.PI * 0.03 || θ >= Math.PI * 1.97;
}

function tick(ω, cups) {
	const torque = γ * __WEBPACK_IMPORTED_MODULE_4_d3__["sum"](cups, d => Math.sin(d.θ) * d.m);
	const cupMass = __WEBPACK_IMPORTED_MODULE_4_d3__["sum"](cups, d => d.m);
	const ω̇ = (torque - ν * ω) / (cupMass + WHEEL_INTERTIA);
	ω += ω̇;

	cups = cups.map(({ θ, m }) => {
		θ = mod(θ + ω, τ);
		let under = underSpigot(θ);
		m = Math.max(m - k * m + (under ? λ : 0), 0);
		return { θ, m };
	});
	return { cups, ω };
}

class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent {
	constructor(props) {
		super(props);
		let state = {
			cups: __WEBPACK_IMPORTED_MODULE_4_d3__["range"](0, NUM_CUPS).map(i => ({
				θ: i * τ / NUM_CUPS,
				m: 190 / 36 + Math.random() - Math.random()
			})),
			ω: 0
		};
		for (var i = 0; i < 700; i++) {
			state = tick(state.ω, state.cups);
		}
		this.state = state;
		this.timer = null;
		this.onClick = () => {
			if (this.timer) return this.timer.stop(), this.timer = null;
			this.timer = __WEBPACK_IMPORTED_MODULE_4_d3__["timer"](() => {
				this.setState(({ cups, ω }) => {
					return tick(ω, cups);
				});
			});
		};
	}
	render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{ className: __WEBPACK_IMPORTED_MODULE_2__styleMain___default.a.main },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_2__styleMain___default.a.row },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Vis, { cups: this.state.cups }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__plot__["a" /* default */], { cups: this.state.cups, ω: this.state.ω })
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"button",
				{ onClick: this.onClick },
				"click "
			)
		);
	}
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, null), document.getElementById("root"));

function mod(x, m) {
	return (x % m + m) % m;
}

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dot":"stylePlot__dot___17w","plot":"stylePlot__plot___2TO","canvas":"stylePlot__canvas___3kH"};

/***/ })

},[82]);
//# sourceMappingURL=main.js.map