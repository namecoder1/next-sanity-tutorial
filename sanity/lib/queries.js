import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
	*[_type == 'post'] | order(_createdAt desc) {
		_id,
		title, 
		description,
		'slug': slug.current,
		'image': image.asset -> url
	}	
`)

export const LAST_POSTS_QUERY = defineQuery(`
	*[_type == 'post'] | order(_createdAt desc) [0...3] {
		_id,
		title, 
		description,
		'slug': slug.current,
		'image': image.asset -> url
	}	
`)

export const POST_QUERY = defineQuery(`
	*[_type == 'post' && slug.current == $slug] [0] {
		_id,
		title, 
		description,
		'slug': slug.current,
		'image': image.asset -> url
	}	
`)