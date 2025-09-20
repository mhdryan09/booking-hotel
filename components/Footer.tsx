import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-gray-900">
			<div className="max-w-screen-xl mx-auto px-4 py-10 md:py-16">
				<div className="grid md:grid-cols-3 gap-7">
					{/* logo */}
					<div>
						<Link href="/" className="mb-10 block">
							<Image src="/images/logo.png" alt="Booking Hotel" width={128} height={49} />
						</Link>
						<p className="text-gray-400">Book your dream hotel with us and experience unparalleled comfort and luxury. Your perfect stay awaits!</p>
					</div>

					{/* Links Menu */}
					<div>
						<div className="flex gap-20">
							<div className="flex-1 md:flex-none">
								<h4 className="mb-8 text-xl font-semibold text-white">Links</h4>
								<ul className="list-item space-y-5 text-gray-400">
									<li>
										<Link href="/" className="hover:text-white transition">
											Home
										</Link>
									</li>
									<li>
										<Link href="/about" className="hover:text-white transition">
											About
										</Link>
									</li>
									<li>
										<Link href="/room" className="hover:text-white transition">
											Rooms
										</Link>
									</li>
									<li>
										<Link href="/contact" className="hover:text-white transition">
											Contact Us
										</Link>
									</li>
								</ul>
							</div>

							<div className="flex-1 md:flex-none">
								<h4 className="mb-8 text-xl font-semibold text-white">Legal</h4>
								<ul className="list-item space-y-5 text-gray-400">
									<li>
										<Link href="#" className="hover:text-white transition">
											Legal
										</Link>
									</li>
									<li>
										<Link href="#" className="hover:text-white transition">
											Term & Condition
										</Link>
									</li>
									<li>
										<Link href="#" className="hover:text-white transition">
											Payment Method
										</Link>
									</li>
									<li>
										<Link href="#" className="hover:text-white transition">
											Privacy Policy
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* NewsLetter */}
					<div>
						<h4 className="mb-8 text-xl font-semibold text-white">NewsLetter</h4>
						<p className="text-gray-400">Subscribe to our newsletter to get the latest updates and offers.</p>
						<form className="mt-5">
							<div className="mb-5">
								<input type="text" name="email" className="w-full p-3 rounded-sm bg-white" placeholder="jhondoe@gmail.com" />
							</div>
							<button className="bg-orange-400 p-3 font-bold text-white w-full text-center rounded-sm hover:bg-orange-500">Subscribe</button>
						</form>
					</div>
				</div>
			</div>

			<div className="max-w-screen-xl mx-auto px-4 border-t border-gray-500 py-8 text-center text-base text-gray-500">&copy; 2025 Booking Hotel. All Rights Reserved.</div>
		</footer>
	);
};

export default Footer;
