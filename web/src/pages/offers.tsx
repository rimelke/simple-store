import { GetStaticProps } from "next"
import Header from "../components/Header"
import api from "../services/api"
import Image from "next/image"
import Link from "next/link"

interface Product {
	id: string
	name: string
	offer: number
	price: number
	image_url: string
}

const Offers = ({ products }) => {
	return (
		<>
			<Header />
			<main className="px-6 pb-6">
				<ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
					{products.map((product: Product) => (
						<Link href={`/products/${product.id}`} key={product.id}>
							<div className="w-42 lg:w-48 transition cursor-pointer border hover:shadow-offset-black border-black">
								<div>
									<Image
										className="object-cover"
										layout="responsive"
										height={800}
										width={800}
										src={product.image_url} />
								</div>
								<div className="flex flex-col items-start p-2">
									<span className="font-bold font-mono text-lg shadow-underline">{product.name}</span>
									<div className="mt-2">
										<span className="font-bold font-mono text-gray-400 line-through">{Number(product.price).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</span>
										<span className="ml-2 font-bold font-mono text-xl">{Number(product.offer).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</span>
									</div>
								</div>
							</div>
						</Link>
					))}
				</ul>
			</main>
		</>
	)
}

export const getStaticProps: GetStaticProps = async ctx => {
	const { data } = await api.get('/products/offers')

	return {
		props: {
			products: data
		},
		revalidate: 60 * 1000
	}
}

export default Offers
