import createNodeHelpers from 'gatsby-node-helpers'

const {
	createNodeFactory,
	generateNodeId,
	generateTypeName,
} = createNodeHelpers({
	typePrefix: `Myanimelist`,
})

export const ANIME_TYPE = `Anime`; 

export const META_TYPE = `Meta`

export {generateNodeId}

export const AnimeNode = createNodeFactory(ANIME_TYPE)

export const MetaNode = createNodeFactory(META_TYPE)