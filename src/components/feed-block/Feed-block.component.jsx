import React, {Component} from "react";
import styled from "styled-components";
import {connect} from 'react-redux'
import {fetchNewsStart} from "../../redux/news/news.actions";
import FeedItem from "../FeedItem/FeedItem.component";


const Card = styled.div`
	position: fixed;
	top: 40vh;
	left: 25px;
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
`;
const ErrMsg = styled.span`
	margin: auto 10px auto auto;
	font-size: 1.2em;
	font-family: "San Francisco","Lato",sans-serif;
	font-weight: 700;
`;
const SectionStripeText = styled.h1`
	color: #111;
	font-size: 1em;
`;
const SubsectionStripeText = styled.p`
	margin-right: 15px;
	color: #282c34;
	font-size: 1em;
`;
const StripeLine = styled.div`
	display: flex;
	white-space: nowrap;
	vertical-align: bottom;
	align-content: baseline;
	align-items: baseline;
	font-size: 1em;
`;
const WatchImg = styled.img`
	height: 1.5em;
	margin:  auto;
`;
class FeedBlock extends Component {
	state = {
		hasError: null
	};
	
	componentDidMount() {
		this.props.fetchNewsStart()
	}
	
	componentDidCatch(error, errorInfo) {
		this.setState({hasError: error});
	}
	
	makeStripe(stripeData) {
		console.log(stripeData);
		//
		return <StripeLine>
			<SectionStripeText>{stripeData.section}</SectionStripeText>
			<SubsectionStripeText>{Boolean(stripeData.subsection) && '|' + stripeData.subsection}</SubsectionStripeText>
			<WatchImg src="https://cdnjs.cloudflare.com/ajax/libs/topcoat-icons/0.1.0/svg/location.svg" alt=""/>
			<SubsectionStripeText>{Boolean(stripeData.geo) && ' ' + stripeData.geo}</SubsectionStripeText>
			<WatchImg src="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/collection/build/ionicons/svg/ios-stopwatch.svg" alt=""/>
			<SubsectionStripeText>{Boolean(stripeData.published_date) && stripeData.published_date}</SubsectionStripeText>
		</StripeLine>
	}
	
	render() {
		const {data, isFetching, error} = this.props.newsList;
		const {hasError} = this.state;
		return (
			<Card error={error || isFetching || hasError}>
				<NYTlogo src={"https://1000logos.net/wp-content/uploads/2017/04/Symbol-New-York-Times.png"}
				         alt={"nyt"}
				         onClick={() => window.open("https://nytimes.com", "_blank")}/>
				{!isFetching && !(error || hasError) && <CardItems>
					{Array.isArray(data) && !isFetching && data.map((item, idx) =>
						<FeedItem
							key={idx}
							url={item.url}
							title={item.title}
							caption={item.caption}
							thumb={item.thumb}
							stripe={this.makeStripe(item.stripeData)}
						/>)}
				</CardItems>}
				{(hasError || error) && <ErrMsg>Сould not get data from NY times</ErrMsg>}
				{isFetching && <ErrMsg>Fetching data...</ErrMsg>}
			
			</Card>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchNewsStart: () => dispatch(fetchNewsStart()),
	}
};
const mapStateToProps = (state) => ({
	newsList: state.news,
});
export default connect(mapStateToProps, mapDispatchToProps)(FeedBlock);
