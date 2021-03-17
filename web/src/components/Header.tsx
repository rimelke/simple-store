import Image from 'next/image'
import { FiShoppingBag, FiUser, FiSearch } from 'react-icons/fi'
import { BiMenu, BiSearch, BiUser, BiShoppingBag } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'

const Header = () => {
	return (
		<header className="flex justify-between items-center p-6">
			<section className="flex md:hidden">
				<BiSearch className="w-9 h-9" />
			</section>

			<section className="flex lg:flex-1 items-center">
				<div className="w-16 md:w-12">
					<Image
						className="object-contain"
						layout="responsive"
						height={800}
						width={800}
						src="/logo5.svg" />
				</div>
				<div className="hidden md:flex">
					<a className="px-1 h-5 ml-4 transition hover:shadow-underline font-mono" href="#">HOME</a>
					<a className="px-1 h-5 ml-8 transition hover:shadow-underline font-mono" href="#">POPULAR</a>
					<a className="px-1 h-5 ml-8 transition hover:shadow-underline font-mono" href="/offers">OFFERS</a>
				</div>
			</section>

			<section className="md:flex lg:flex-1 justify-center hidden items-center">
				<div className="flex border border-black p-2 items-center shadow-offset">
					<FiSearch />
					<input placeholder="Search for something" className="ml-4 outline-none font-mono" type="text"/>
				</div>
			</section>

			<section className="hidden md:flex lg:flex-1 justify-end">
				<div className="w-10 h-10 mr-5 shadow-underline">
					<Image src="/basket.svg" layout="responsive" height={100} width={100} />
				</div>
				<div className="w-10 h-10 shadow-underline">
					<Image src="/user2.svg" layout="responsive" height={100} width={100} />
				</div>
			</section>

			<section className="flex md:hidden">
				<BiMenu className="w-12 h-12" />
			</section>
		</header>
	)
}

export default Header
