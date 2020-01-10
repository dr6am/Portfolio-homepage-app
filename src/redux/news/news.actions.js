import NewsActionTypes from './news.types';


export const fetchNewsStart = () => ({
	type: NewsActionTypes.FETCH_NEWS_START
});

export const fetchNewsSuccess = NewsArray => ({
	type: NewsActionTypes.FETCH_NEWS_SUCCESS,
	payload: NewsArray
});

export const fetchNewsFailure = errorMessage => ({
	type: NewsActionTypes.FETCH_NEWS_FAILURE,
	payload: errorMessage
});

export const fetchNewsStartAsync = () => {
	return (dispatch) => {
		dispatch(fetchNewsStart);
		fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=kxVgG6LIUn8ivPxepGeHuyvzAXGpGucN')
			.then( resp =>{return  resp.json()})
			.then( data =>{dispatch(fetchNewsSuccess(data))})
			.catch(e=>dispatch(fetchNewsFailure(e.message)));
	};
};
