import Article from "@/components/article";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

const ArticlesPage = async () => {
	const posts = await client.fetch(POSTS_QUERY)
	return (
		<section className="mt-10 mx-5">
			<h1 className="mb-4 text-2xl font-semibold">Tutti gli articoli</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
				{posts.map((post) => {
					return (
						<Article title={post.title} id={post._id} image={post.image} description={post.description} slug={post.slug} />
					)
				})}
			</div>
		</section>
	);
};

export default ArticlesPage;