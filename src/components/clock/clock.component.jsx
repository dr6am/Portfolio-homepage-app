import React, {Component} from "react";
import styled from "styled-components";
import Marque from "../marque/marque.component";


export default class extends Component {
	getTime = () => {
		var date = new Date(),
			hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
			minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
			seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
		return (hours + ':' + minutes + ':' + seconds)
	};
	
	render() {
		setTimeout(() => {
			this.forceUpdate()
		}, 1000);
		return (
			<CardWrap>
				<Card>
					<Time id={"time"}>{this.getTime()}</Time>
					<Marque width={"100%"}
					        fontSize={"15px"}>{new Date('December 17, 1995 03:24:00').toString()}</Marque>
				</Card>
			</CardWrap>
		)
	}
}
const Card = styled.div`
	margin-top: auto;
	width: 500px;
	height: min-content;
	align-items: center;
	z-index: 2;
	font-size: 3vmax;
	background: #fff;
	border-radius: 15px;
	padding: 30px;
	top: 0;
	left:0;
	right:0;
	box-shadow: 0 0 10px rgba(0,0,0,0.5);
`;
const CardWrap = styled.div`
	display: flex;
	flex-direction: row;
	height: 509px;
	justify-content: right;
`
const Time = styled.h1`
	letter-spacing: .05em;
	color: #111111;
	font-family: 'Source Sans Pro', sans-serif;
	font-weight: 700;
	margin: 0;
	height: min-content;
	margin-bottom: 5px;
	font-size: 2em;
	text-align: center;
`;
