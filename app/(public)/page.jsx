import Article from "@/components/article";
import { client } from "@/sanity/lib/client";
import { LAST_POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const posts = await client.fetch(LAST_POSTS_QUERY)
  return (
		<section className="mt-10 mx-5">
			<h1 className="mb-4 text-2xl font-semibold">Gli ultimi articoli</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {posts.map((post) => {
          return (
            <Article title={post.title} id={post._id} image={post.image} description={post.description} slug={post.slug} />
          )
        })}
      </div>
    </section>
  );
}
