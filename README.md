# gatsby-source-myanimelist

[![Build Status](https://travis-ci.org/jamesdanylik/gatsby-source-myanimelist.svg?branch=master)](https://travis-ci.org/jamesdanylik/gatsby-source-myanimelist)
[![npm package](https://img.shields.io/npm/v/gatsby-source-myanimelist.svg)](https://www.npmjs.org/package/gatsby-source-myanimelist)
[![npm package](https://img.shields.io/npm/dm/gatsby-source-myanimelist.svg)](https://npmcharts.com/compare/gatsby-source-myanimelist?minimal=true)

# THIS PLUGIN IS DEPRECATED

On or about May 24th, the new owners of MyAnimeList unilateraly decided to discontinue the API with no warning to developers, nor plans on their part to replace it.  It is difficult to see this as anything but a cheap attempt to limit users choices in an attempt to make MAL more appealing to advertisers.

As a result, this plugin (and indeed anything else like it) no longer works.  The only way to get your list programtically from MAL at this point in time is to scrape the HTML from the site yourself.  At some point, I know there was an export to XML available (since I used it the moment I smelled trouble), but I believe this, too, has now been removed, and along with it all reasonable doubts of the new management's intentions. (EDIT: As of June 2nd, the export functionality has been restored, although it is unlinked to from anywhere I could find on the site; it seems that removing that, at least, was impossible to justify in the face of popular outcry.  You can find it [here](https://myanimelist.net/panel.php?go=export)

I recommend everyone migrate to AniList as soon as possible, which has more and better features for development, although it does have  a somewhat disappointing, mobile-first look, for users coming from MAL.  Unlike MAL, though, if that really bothers you, you're absolutely free to get to work and fix it, rather than wait for an indifferent management to do so.  Also, check out [gatsby-source-anilist](https://github.com/jamesdanylik/gatsby-source-anilist), which allows access to A LOT more than this plugin ever did.

# Orignial README.md

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
