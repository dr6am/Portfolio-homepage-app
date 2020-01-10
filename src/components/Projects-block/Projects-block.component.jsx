import React, {Component} from "react";
import styled from "styled-components";
import FeedItem from "../FeedItem/FeedItem.component";


const Card = styled.div`
	background: #fff;
	border-radius: 15px;
	width: 500px;
	padding: 25px;
	display: ${props => props.error ? "flex" : "block"};
	box-shadow: 0 0 10px rgba(0,0,0,0.5);
`;
const CardItems = styled.div`
	max-height: 415px;
	overflow: scroll;
	overflow-x: hidden;
::-webkit-scrollbar-track
{
	border-radius: 10px;
  	border: none;
  	width: 10px;
}

	::-webkit-scrollbar
{
	width: 10px;
	background: rgba(0,0,0,0.08);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb
{
	border-radius: 100px;
	background-color: #282c34;
  	border:none;
}
	`;
const NYTlogo = styled.img`
	min-height: 35px;
	height: 35px;
	max-height: 35px;
	width: auto;
	z-index: 5;
	margin-bottom: 5px;
	cursor: pointer;
	padding: 10px;
`;
const ErrMsg = styled.span`
	margin: auto 10px auto auto;
	font-size: 1.2em;
	font-family: "San Francisco","Lato",sans-serif;
	font-weight: 700;
`;



class PortfolioBlock extends Component {
	state = {
		hasError: null
	};
	
	componentDidMount() {
		this.props.fetchNewsStart()
	}
	
	componentDidCatch(error, errorInfo) {
		this.setState({hasError: error});
	}
	
	data=  [
		{
			url: "https://dr6am-clothing-store.glitch.me/",
			title: "Clothing store",
			caption: "My e-commerce project",
			thumb: "https://cdn.glitch.com/80115052-6f77-4004-8889-e3d0122fea2c%2F%D0%90%D0%BD%D0%BD%D0%BE%D1%82%D0%B0%D1%86%D0%B8%D1%8F%202020-01-10%20132242-min.png?v=1578651832213"
		},
		{
			url: "https://dr6am.github.io/todo-app/",
			title: "Todo app",
			caption: "Simple todo app",
			thumb: "https://cdn.glitch.com/80115052-6f77-4004-8889-e3d0122fea2c%2Fc30db698-bbe7-4922-bbb4-76f0f5457454.%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5.png?v=1578652587901"
		},
		{
			url: "https://dr6am.github.io/react-monsters-app/",
			title: "Monsters Rolodex",
			caption: "Monsters Rolodex App",
			thumb: "https://cdn.glitch.com/80115052-6f77-4004-8889-e3d0122fea2c%2F%D0%90%D0%BD%D0%BD%D0%BE%D1%82%D0%B0%D1%86%D0%B8%D1%8F%202020-01-10%20131815-min(1).png?v=1578651705498"
		}
	];
	
	render() {
		const {data} = this;
		return (
			<Card >
				<NYTlogo src={"https://1000logos.net/wp-content/uploads/2017/04/Symbol-New-York-Times.png"}
				         alt={"nyt"}
				         onClick={() => window.open("https://nytimes.com", "_blank")}/>
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
		)
	}
}


export default PortfolioBlock;
