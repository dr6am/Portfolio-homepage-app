import React from "react";
import styled from "styled-components";
import Marque from "../marque/marque.component";

///TODO make a margue with other api features
/// http://gnatkovsky.com.ua/begushhaya-stroka-na-sajt-s-pomoshhyu-css.html

function FeedItem({url, title, caption, thumb="",stripe}) {
	return (
		<Item onClick={() => window.open(url, '_blank').focus}>
			{Boolean(thumb) ? <ImgBlock img={thumb.url} size={thumb.height*0.8}/>:""}
			<TextBlock size={thumb.height*0.8}>
				<h1>{title ? title : "Title not found"}</h1>
				<SubText>{caption}</SubText>
				{stripe? <Marque margin={"top"} width={"100%"} fontSize={"15px"}>{stripe}</Marque>:""}
			</TextBlock>
		</Item>
	
	)
}

const Item = styled.div`
	padding: 15px 10px;
	display: flex;
	border-top:1px solid #111;
	align-content: baseline;
	transition: all ease .3s;
	background:none;
	cursor:pointer;
	:hover{
		background: #efefef;
	}
	:first-of-type{
		border-top:none;
		border-radius: 15px 15px 0 0;
	}
	:last-of-type{
		border-radius: 0 0 15px 15px ;
	}
	
`;
const ImgBlock = styled.div`
	border-radius: 15px;
	min-height: ${props => props.size + "px"};
	min-width: ${props => props.size + "px"};
	max-height: ${props => props.size + "px"};
	max-width: ${props => props.size + "px"};
	background: url("${props => props.img}");
	background-size: cover;
	margin-right: 10px;
	margin-top: auto;
	margin-bottom: auto;
`;
const TextBlock = styled.div`
	display: block;
	box-sizing: content-box;
	position: relative;
	width: 75%;
	//max-height: ${props => props.size + "px"};
	//min-height: ${props => props.size + "px"};
	height:min-content;
	padding-right: 5px;
	h1{
		margin-top: .3em;
		margin-bottom: 0;
		color: #1b1b1b;
		font-size: 1em;
	}
	
`;
const SubText = styled.p`

		width: 90%;
		margin-left: auto;
		color: #333;
		font-size: .7em;
		min-height: auto;
	
`
export default FeedItem;
