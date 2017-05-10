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

const mar = {
	top: 10,
	left: 20,
	bottom: 20,
	right: 10
};

class Plot extends React.PureComponent {
	componentDidMount() {
		console.log("hello");
		d3.select(this.xAxis).call(d3.axisBottom().scale(aScale));
		d3.select(this.yAxis).call(d3.axisLeft().scale(bScale));
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
		// let a = d3.sum(this.props.cups);
		return (
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
		);
	}
}

export default Plot;
