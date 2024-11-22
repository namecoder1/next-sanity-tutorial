import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";


const ArticlePage = async ({ params }) => {
	const {slug} = params
	const post = await client.fetch(POST_QUERY, {slug})
	return (
		<div className="mx-5 my-10">
			<div className="mb-3">
				<Link className="px-4 py-2 rounded-lg bg-gray-700 text-white" href='/articoli'>Torna indietro</Link>
			</div>
			<h1 className="text-3xl font-semibold mb-1">{post.title}</h1>
			<p className="mb-3">{post.description}</p>
			<Image src={post.image} width={200} height={100} alt="Foto dell'articolo" className="w-full rounded-2xl" />
		</div>
	);
};
export default ArticlePage;