import React, { Component } from "react";
import { render } from "react-dom";
import style from "./stylePlot";
import * as d3 from "d3";
import PT from "prop-types";
import { pure } from "recompose";
const RADIUS = 180;
const WIDTH = 300;
const HEIGHT = 300;
const aScale = d3.scaleLinear().domain([-0.1, 0.1]).range([0, WIDTH]);
const bScale = d3.scaleLinear().domain([-0.1, 0.1]).range([HEIGHT, 0]);
const colorScale = d3
	.scaleSequential(d3.interpolatePlasma)
	.domain([-0.05, 0.05]);
// .domain
const mar = {
	top: 10,
	left: 20,
	bottom: 20,
	right: 10
};

export default class Plot extends React.PureComponent {
	componentDidMount() {
		// console.log("hello");
		d3.select(this.xAxis).call(d3.axisBottom().scale(aScale).ticks(2));
		d3.select(this.yAxis).call(d3.axisLeft().scale(bScale).ticks(2));
		// this.a0 = 0;
		// this.b0 = 0;
		this.ctx = this.canvas.getContext("2d");
	}

	render() {
		let M = 0, a = 0, b = 0;
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

		return (
			<div className={style.plot}>
				<canvas
					style={{ left: mar.left, top: mar.top, height: HEIGHT, width: WIDTH }}
					className={style.canvas}
					ref={d => (this.canvas = d)}
					width={WIDTH}
					height={HEIGHT}
				/>
				<svg
					width={WIDTH + mar.left + mar.right}
					height={HEIGHT + mar.top + mar.bottom}
					className={style.plot}
				>
					<g transform={`translate(${mar.left},${mar.right})`}>
						<g
							ref={d => (this.xAxis = d)}
							transform={`translate(0,${HEIGHT / 2})`}
						/>
						<g
							transform={`translate(${WIDTH / 2}, 0)`}
							ref={d => (this.yAxis = d)}
						/>
						<circle
							r="3"
							className={style.dot}
							transform={`translate(${aScale(a)},${bScale(b)})`}
						/>
					</g>
				</svg>

			</div>
		);
	}
}

