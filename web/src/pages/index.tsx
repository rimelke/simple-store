import Header from "../components/Header"
import Image from 'next/image'
import { GrFacebook, GrInstagram, GrTwitter, GrPinterest, GrYoutube } from 'react-icons/gr'
import { RiInstagramLine, RiTwitterLine, RiYoutubeLine, RiPinterestLine, RiFacebookCircleLine} from 'react-icons/ri'

const Home = () => {
	return (
		<>
			<Header />
			<main className="flex flex-col px-6">
				<section className="grid grid-cols-3 grid-rows-2 gap-6 h-96">
					<div className="col-span-2  row-span-2 relative shadow-offset border border-black">
						<Image
							layout="fill"
							className="object-cover"
							src="/sneakers.jfif" />
						<span className="absolute cursor-pointer transform hover:scale-105 font-mono font-bold bottom-16 right-2 bg-neon py-2 px-6 shadow-offset-black border border-black">SEE DETAILS</span>
						<span className="absolute px-1 bottom-32 bg-white border border-black text-3xl right-2 font-mono font-bold shadow-offset">25% OFF</span>
					</div>
					<div className="relative shadow-offset-black transform hover:scale-105 border border-black cursor-pointer">
						<Image
							layout="fill"
							className="object-cover"
							src="/sneakers.jfif" />
					</div>
					<div className="relative shadow-offset-black transform hover:scale-105 border border-black cursor-pointer">
						<Image
							layout="fill"
							className="object-cover"
							src="/sneakers.jfif" />
					</div>
 				</section>
				<section className="mt-24 flex">
					<h2 className="font-mono shadow-underline font-bold text-3xl">Cause if you simply looks amazing, you simply feels amazing.</h2>
				</section>
			</main>
			<footer className="flex items-end justify-between px-6 my-12 border-t pt-6">
				<section className="flex flex-col">
					<span className="font-mono">Our social medias:</span>
					<div className="flex space-x-4 mt-1">
						<RiFacebookCircleLine className="cursor-pointer w-6 h-6 shadow-underline" />
						<RiInstagramLine className="cursor-pointer w-6 h-6 shadow-underline" />
						<RiTwitterLine className="cursor-pointer w-6 h-6 shadow-underline" />
						<RiPinterestLine className="cursor-pointer w-6 h-6 shadow-underline" />
						<RiYoutubeLine className="cursor-pointer w-6 h-6 shadow-underline" />
					</div>
				</section>
				<section className="flex flex-col items-end">
					<span className="font-mono">All rights reserved.</span>
					<span className="font-mono">SimpleStore © 2020</span>
				</section>
			</footer>
		</>
	)
}

export default Home
