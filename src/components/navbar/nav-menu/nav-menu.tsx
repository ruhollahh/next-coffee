import Link from "next/link";

const menuItems = [
	"محصولات",
	"طرز تهیه",
	"مشاوره",
	"کلاب",
	"درباره ما",
	"تماس با ما",
];

export const NavMenu = () => {
	return (
		<div className="flex grow justify-center">
			<ul className="flex gap-12">
				{menuItems.map((item, i) => (
					<li key={i}>
						<Link href="#">
							<a className="text-gray-800 text-lg">{item}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
