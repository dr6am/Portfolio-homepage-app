import {all, call, put, takeLatest} from 'redux-saga/effects';


import {fetchNewsFailure, fetchNewsSuccess} from './news.actions';

import NewsActionTypes from './news.types';

export function* fetchNewsAsync() {
	try {
		const json = yield fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=kxVgG6LIUn8ivPxepGeHuyvzAXGpGucN').then(response => response.json());
		var data = [];
		json.results.forEach(d => {
			if(d.multimedia.length >= 2)
			data.push({
				title: d.title,
				url: d.url,
				caption: d.abstract,
				thumb: {
					height: d.multimedia[1].height,
					url: d.multimedia[1].url
				},
				stripeData:{
					published_date:d.published_date,
					geo:Array.isArray(d.geo_facet)?d.geo_facet[0]:null,
					section:d.section,
					subsection:d.subsection?d.subsection:null
				}
			});
		});
		yield put(fetchNewsSuccess(data))
	} catch (e) {
		yield put(fetchNewsFailure(e.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(
		NewsActionTypes.FETCH_NEWS_START,
		fetchNewsAsync
	);
}

export function* newsSagas() {
	yield all([call(fetchCollectionsStart)]);
}
