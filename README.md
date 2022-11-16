# Assignment 1 - ReactJS app.

Name: Yifei Ma

## Overview.

contains Trending as home page, together with: discover mivies; movie details; discover TV series; search movie/TV and top rating.

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]

+ add pagination
+ add background color switch
+ add bottom Navigation
+ add Carousel
+ modify genres
+ modify rating
+ add modal to show movie details
+ is that ok to see top rating as kind of sorting?

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]
"react-alice-carousel": "^2.2.2",

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 
+ trending today - /trending/all/day
+ find top rated movie - /movie/top_rated
+ search tv or movies - /search/movie (/search/tv)
+ get youtube trailer video - /movie/:id/video(/tv/:id/video)
+ Get the cast and crew for a movie - /movie/:id/credits (/tv/:id/credits)
+ descover people - /person/popular
+ get person detail - /person/:id
+ get person related movies or TVs - /person/:id/credits


## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ find out trending today( for movies and TVs together) - /
+ discover list of TVs - /series
+ search for movies or TVs - /search
+ top rated movies and TVs - /topRating
+ discover popular person - /people


[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).
https://www.youtube.com/watch?v=vxUfx4aM5d8&t=6365s