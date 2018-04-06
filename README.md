# gatsby-source-lastfm

This is a source plugin for GatsbyJS to pull information from MyAnimeList.  Currently, the plugin grabs all of a user's listed anime and provides it under a single node.  Providing node based organization of categories is a work-in-progress.  Additional features by request.


## Install

```bash
npm install --save gatsby-source-myanimelist
```


## Configuration
```javascript
// In your gatsby-config.js
plugins: [
	{
	      resolve: "gatsby-source-myanimelist",
	      options: {
	        username: '<<USERNAME TO TRACK>>'
	      },
	},
	...
]
```

## Provided Queries

### Animes
```graphql
  allMyanimelistAnime {
    edges {
      node {
        id
        series_title
        series_synonyms
        series_type
        series_status
        series_start
        series_end
        series_image
        series_episodes
        my_id
        my_watched_episodes
        my_start
        my_end
        my_score
        my_status
        my_rewatching
        my_rewatching_ep
        my_last_updated
        my_tags
        myanimelistId
      }
    }
  }
```
