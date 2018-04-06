import {
	MetaNode,
	AnimeNode,
	generateNodeId, 
	META_TYPE,
	ANIME_TYPE, 
} from './nodes'
import fetch from 'isomorphic-fetch'
import {parseString} from 'xml2js'


function api(url) {
	return fetch(url).then(results=> {
		return results.text()
	})
}

function animeListUrl(username) {
	var url = 'https://myanimelist.net/malappinfo.php'
	url += '?u=' + username
	url += '&status=all&type=anime'
	return url
}

exports.sourceNodes = async({boundActionCreators}, {
	username
}) => {
	const { createNode } = boundActionCreators

	var xml = await api(animeListUrl(username))

	parseString(xml, {trim: true}, (err, result) => {
		//console.log("\n" + result.myanimelist.anime.length + " Anime")

		result.myanimelist.anime.forEach(anime => {
			const animeNode = AnimeNode({
				id: anime.series_animedb_id[0],
				series_title: anime.series_title[0],
				series_synonyms: anime.series_synonyms[0],
				series_type: anime.series_type[0],
				series_status: anime.series_status[0],
				series_start: anime.series_start[0],
				series_end: anime.series_end[0],
				series_image: anime.series_image[0],
				series_episodes: anime.series_episodes[0],
				//
				my_id: anime.my_id[0],
				my_watched_episodes: anime.my_watched_episodes[0],
				my_start: anime.my_start_date[0],
				my_end: anime.my_finish_date[0],
				my_score: anime.my_score[0],
				my_status: anime.my_status[0],
				my_rewatching: anime.my_rewatching[0],
				my_rewatching_ep: anime.my_rewatching_ep[0],
				my_last_updated: anime.my_last_updated[0],
				my_tags: anime.my_tags[0],
			})
			createNode(animeNode)
		})
	})

	return
}