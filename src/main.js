import React, { Component } from "react";
import { render } from "react-dom";
import style from "./styleMain";
import * as d3 from "d3";
import PT from "prop-types";
import { pure } from "recompose";

const RADIUS = 180;
const HEIGHT = 400;
const WIDTH = 400;
const NUM_CUPS = 16;
const τ = Math.PI * 2;
const ν = 0.02;
const γ = 1 / 15;

const Cup = pure(({ θ, m }) => {
	let pos = [-Math.sin(θ) * RADIUS, Math.cos(θ) * RADIUS];
	return (
		<g className={style.cup} transform={`translate(${pos})`}>
			<g transform="translate(-7,-6)">
				<rect width="18" height="16" className={style.shell} />
				<rect width="14" height="14" x="2" className={style.fill} />
				{
					<rect
						width="14"
						x="2"
						height={m}
						y={14 - m}
						className={style.water}
					/>
				}
			</g>
		</g>
	);
});

const Vis = pure(({ cups }) => {
	return (
		<svg width={WIDTH} height={HEIGHT}>
			<g transform={`translate(${WIDTH / 2},${HEIGHT / 2})`}>
				<circle r={RADIUS} className={style.wheel} />
				{cups.map(({ θ, m }, i) => <Cup θ={θ} m={m} key={i} />)}
			</g>
		</svg>
	);
});

function updateCups(cups) {}

class App extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			cups: d3
				.range(0, NUM_CUPS)
				.map(i => ({ θ: i * τ / NUM_CUPS, m: Math.random() * 10 })),
			ω: 0
		};
		this.timer = null;
		this.onClick = () => {
			if (this.timer) return this.timer.stop(), (this.timer = null);
			this.timer = d3.interval(() => {
				this.setState(({ cups, ω }) => {
					const torque = γ * d3.sum(cups, d => Math.sin(d.θ) * d.m);
					const cupMass = d3.sum(cups, d => d.m);
					const ω̇ = (torque - ν * ω) / cupMass;
					ω += ω̇;
					cups = cups.map(({ θ, m }) => ({
						θ: (θ + ω) % τ,
						m
					}));
					return { cups, ω };
				});
			}, 50);
		};
	}
	render() {
		return (
			<div>
				<Vis cups={this.state.cups} />
				<button onClick={this.onClick}>click </button>
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));
