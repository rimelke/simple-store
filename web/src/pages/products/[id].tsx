import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useState } from "react";
import Header from "../../components/Header";
import api from "../../services/api";

const ShowProduct = ({ id, name, price, offer, sizes, image_url }) => {
	const [selectedSize, setSelectedSize] = useState<string | null>(null)

	return (
		<>
			<Header />
			<main className="p-6 flex justify-center">
				<div className="flex flex-1 md:flex-none flex-col md:flex-row">
					<div className="max-w-32 md:w-64 border border-black shadow-offset">
						<Image
							className="object-cover"
							layout="responsive"
							height={800}
							width={600}
							src={image_url} />
					</div>
					<section className="mt-4 space-y-8 md:mt-0 md:ml-8 flex flex-col items-start justify-between">
						<div className="flex flex-col">
							<h2 className="font-mono font-bold text-3xl shadow-underline">{name}</h2>
							<span className="text-gray-400 mt-1 text-sm">ID: {id}</span>
						</div>
						<div className="flex space-x-2 self-end md:self-auto">
							{sizes.map(size => (
								<span
									key={size}
									onClick={() => setSelectedSize(size)}
									className={
										"flex cursor-pointer hover:bg-neon-dark transition justify-center border-black items-center border rounded-full w-10 h-10"
										+ (selectedSize === size ? ' bg-neon': '')}>
									{size.toUpperCase()}
								</span>
							))}
						</div>
						<div className="flex flex-col self-end md:self-auto">
							<div>
								<span className={"font-bold  text-xl" + (offer !== null ? ' text-gray-400 line-through' : '')}>{price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</span>
								{offer !== null && (
									<span className="ml-3 font-bold text-2xl">{offer.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</span>
								)}
							</div>
							<button className="hover:bg-neon-dark mt-4 transition border px-16 py-1 font-bold bg-neon border-black shadow-offset-black">BUY NOW</button>
						</div>
					</section>
				</div>
			</main>
		</>
	)
}

export const getStaticProps: GetStaticProps = async ctx => {
	const { id } = ctx.params

	const { data } = await api.get(`/products/${id}`)

	return {
		props: {
			...data,
			sizes: ['xs', 's','m','l','xl']
		},
		revalidate: 5 * 60 * 1000
	}
}

export const getStaticPaths: GetStaticPaths = async ctx => {
	const { data } = await api.get('/products/offers')

	return {
		paths: data.map(product => ({
			params: {
				id: product.id
			}
		})),
		fallback: 'blocking'
	}
}

export default ShowProduct
