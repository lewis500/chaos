import React, { Component } from "react";
import { render } from "react-dom";
import style from "./styleMain";
import Plot from "./plot";
import * as d3 from "d3";
import PT from "prop-types";
import { pure } from "recompose";

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

const Cup = pure(({ θ, m }) => {
	let pos = [
		Math.cos(θ + Math.PI / 2) * RADIUS,
		-Math.sin(θ + Math.PI / 2) * RADIUS
	];
	return (
		<g className={style.cup} transform={`translate(${pos}) translate(-9,-8)`}>
			<rect width="18" height="16" className={style.shell} />
			<rect width="14" height="14" x="2" className={style.fill} />
			{<rect width="14" x="2" height={m} y={14 - m} className={style.water} />}
		</g>
	);
});

const Vis = pure(({ cups }) => {
	return (
		<svg width={WIDTH} height={HEIGHT}>
			<line
				x1={WIDTH / 2}
				x2={WIDTH / 2}
				y2={HEIGHT}
				className={style.spigot}
			/>
			;
			<g transform={`translate(${WIDTH / 2},${HEIGHT / 2})`}>
				<circle r={RADIUS} className={style.wheel} />
				<g>
					{cups.map(({ θ, m }, i) => <Cup θ={θ} m={m} key={i} />)}
				</g>
			</g>
		</svg>
	);
});

function underSpigot(θ) {
	let bool = θ <= Math.PI * 0.03 || θ >= Math.PI * 1.97;
	return bool;
	// return Math.cos(θ) > 0 && Math.abs(Math.sin(θ)) * RADIUS > 5;
}

function tick(ω, cups) {
	const torque = γ * d3.sum(cups, d => Math.sin(d.θ) * d.m);
	const cupMass = d3.sum(cups, d => d.m);
	// console.log(cupMass);
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

class App extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			cups: d3.range(0, NUM_CUPS).map(i => ({
				θ: i * τ / NUM_CUPS,
				m: 190 / 36 + Math.random() - Math.random()
			})),
			ω: 0
		};
		this.timer = null;
		this.onClick = () => {
			if (this.timer) return this.timer.stop(), (this.timer = null);
			this.timer = d3.timer(() => {
				this.setState(({ cups, ω }) => {
					return tick(ω, cups);
				});
			});
		};
	}
	render() {
		return (
			<div className={style.main}>
				<div className={style.row}>
					<Vis cups={this.state.cups} />
					<Plot cups={this.state.cups} />
				</div>
				<button onClick={this.onClick}>click </button>
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));

function mod(x, m) {
	return (x % m + m) % m;
}
