import Image from "next/image";
import Link from "next/link";

const Article = ({
	title, 
	image,
	slug,
	description,
	id
}) => {
	return (
		<article key={id}>
			<Link href={`/articoli/${slug}`}>
				<Image src={image} width={300} height={180} className="w-full rounded-xl" alt={title} />
				<h1 className="text-2xl font-semibold mt-2 mb-1">{title}</h1>
				<p>{description}</p>
			</Link>
		</article>
	);
};

export default Article;