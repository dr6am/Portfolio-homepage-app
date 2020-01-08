import React from "react";
import styled from "styled-components";

const StyledMarque = styled.div`
	${props=>props.margin?props.margin+": auto;":null}
	width:${props=>props.width};
	overflow:hidden;
	height: min-content;
	span {
		color:#212121;
		width: max-content;
		font-size:${props=>props.fz};
		display:flex;
		padding-left:100%;
		-webkit-animation: marquee 10s infinite linear;
		animation: marquee 10s infinite linear;
	}
	@-webkit-keyframes marquee {
		0%{-webkit-transform: translate(0, 0);}
		100%{-webkit-transform: translate(-100%, 0);}
	}
	@keyframes marquee{
		0%{transform: translate(0, 0);}
		100%{transform: translate(-100%, 0)}
	}
`;

const Marque = ({children,width,fontSize,margin}) => {
	return (
	<StyledMarque margin={"margin-"+margin} width={width} fz={fontSize}>
		<span>{children}</span>
	</StyledMarque>
	)
}
export default Marque;