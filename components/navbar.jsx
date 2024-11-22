import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center px-10 py-2 bg-gray-200">
			<h1>Logo</h1>
			<ul className="flex items-center gap-3">
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/articoli'>Articoli</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;