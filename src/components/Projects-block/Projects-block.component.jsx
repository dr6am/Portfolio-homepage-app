import React, {Component} from "react";
import styled from "styled-components";
import FeedItem from "../FeedItem/FeedItem.component";

const Wrap = styled.div`
height: 550px;
width: 550px;
`
const Txt = styled.div`
	font-size: 2em;
	font-family: "San Francisco","Lato",sans-serif;
	padding-bottom: 10px;
	font-weight: 700;
	color: #282c34;
`
const Card = styled.div`
	margin: auto;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	background: #fff;
	border-radius: 15px;
	width: 500px;
	padding: 25px;
	height: 529px;
	box-shadow: 0 0 10px rgba(0,0,0,0.5);
`;
const CardItems = styled.div`
	margin-top: auto;
	max-height: 415px;
	border: 1px solid #282c34;
	border-radius: 15px;
	overflow: hidden;
	`;


class PortfolioBlock extends Component {
	state = {
		hasError: null
	};
	data = [
		{
			url: "https://dr6am-clothing-store.glitch.me/",
			title: "Clothing store",
			caption: "My e-commerce project",
			thumb: {
				url: "https://cdn.glitch.com/80115052-6f77-4004-8889-e3d0122fea2c%2F%D0%90%D0%BD%D0%BD%D0%BE%D1%82%D0%B0%D1%86%D0%B8%D1%8F%202020-01-10%20132242-min.png?v=1578651832213",
				size: "150"
			}
		},
		{
			url: "/",
			title: "Homepage app",
			caption: "Drag & drop test",
			thumb: {
				url: "https://cdn.glitch.com/80115052-6f77-4004-8889-e3d0122fea2c%2Fc30db698-bbe7-4922-bbb4-76f0f5457454.%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5.png",
				size: "150"
			}
		},
		{
			url: "https://dr6am.github.io/todo-app/",
			title: "Todo app",
			caption: "Simple todo app",
			thumb: {
				url: "https://cdn.glitch.com/80115052-6f77-4004-8889-e3d0122fea2c%2Fc30db698-bbe7-4922-bbb4-76f0f5457454.%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5.png",
				size: "150"
			}
		},
		{
			url: "https://dr6am.github.io/react-monsters-app/",
			title: "Monsters Rolodex",
			caption: "Monsters Rolodex App",
			thumb: {
				url: "https://cdn.glitch.com/80115052-6f77-4004-8889-e3d0122fea2c%2F%D0%90%D0%BD%D0%BD%D0%BE%D1%82%D0%B0%D1%86%D0%B8%D1%8F%202020-01-10%20131815-min(1).png?v=1578651705498",
				size: "150"
			}
		}
	];
	
	componentDidMount() {
	}
	
	componentDidCatch(error, errorInfo) {
		this.setState({hasError: error});
	}
	
	render() {
		const {data} = this;
		return (
			<Wrap>
				<Card>
					<Txt>My Projects:</Txt>
					<CardItems>
						
						{Array.isArray(data) && data.map((item, idx) =>
							<FeedItem
								key={idx}
								url={item.url}
								title={item.title}
								caption={item.caption}
								thumb={item.thumb}
							/>)}
					</CardItems>
					{
					
					}
				
				</Card>
			</Wrap>
		)
	}
}


export default PortfolioBlock;
