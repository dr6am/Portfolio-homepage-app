import NewsActionTypes from './news.types'
const INITIAL_STATE = {
	data: [],
	error:null,
	isFetching: false,
};

const NewsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NewsActionTypes.FETCH_NEWS_START:
			return state={
				isFetching: true,
				...state
			}
		case NewsActionTypes.FETCH_NEWS_SUCCESS:
			return state={
				isFetching:false,
				error:null,
				data: action.payload
			};
		case NewsActionTypes.FETCH_NEWS_FAILURE:
			return state={
				error:action.payload,
				isFetching:false,
				...state
			};
		default:
			return state;
	}
};

export default NewsReducer;
