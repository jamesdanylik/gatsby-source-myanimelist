import createNodeHelpers from 'gatsby-node-helpers'

const {
	createNodeFactory,
	generateNodeId,
	generateTypeName,
} = createNodeHelpers({
	typePrefix: `Myanimelist`,
})

// 

export const ANIME_TYPE = `Anime`; // Artist is 1-> Many with Album, 1-> Many with Track 1-> Many with Playback

export const META_TYPE = `Meta`

export {generateNodeId}

export const AnimeNode = createNodeFactory(ANIME_TYPE)

export const MetaNode = createNodeFactory(META_TYPE)