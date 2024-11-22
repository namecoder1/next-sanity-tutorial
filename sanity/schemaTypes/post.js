import { defineType, defineField } from "sanity";

export const post = defineType({
	name: "post",
	title: "Post",
	type: 'document',
	fields: [
		defineField({
			name: "title",
			title: "Titolo",
			type: "string"
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title"
			}
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text"
		}),
		defineField({
			name: "image",
			title: "Immagine",
			type: "image",
			options: {
				hotspot: true
			}
		}),
	]
})