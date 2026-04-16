import Link from 'next/link';


const Footer = () => {

    return (
        <footer>
            <div className='flex flex-col md:flex-row items-start justify-center px-6 md:px-32 gap-10 py-14 border-b border-gray-500/30 bg-black text-white'>
                <div className="w-4/5">
                    <Link href={"/"}>
                        <span className="text-2xl font-bold text-[#fce3c7] block">Dzo Store</span>
                    </Link>
                    <p className=" mt-6 text-sm">
                        We are dedicated to providing the best service possible. Our team is
                        committed to ensuring your satisfaction with every interaction. If
                        you have any questions or concerns, please don&apos;t hesitate to
                        reach out to us. We are here to help and will do our best to address
                        any issues you may have. Thank you for choosing us, and we look
                        forward to serving you again in the future.
                    </p>
                </div>

                <div className="w-1/2 flex items-center justify-star md:justify-center">
                    <div>
                        <h2 className="font-medium text-[#fce3c7] mb-5">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><Link href="/" className="hover:underline transition">Home</Link></li>
                            <li><Link href="/about" className="hover:underline transition">About us</Link></li>
                            <li><Link href="/contact" className="hover:underline transition">Contact us</Link></li>
                            <li><Link href="/privacy" className="hover:underline transition">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="w-1/2 flex items-start justify-star md:justify-center">
                    <div>
                        <h2 className="font-medium text-[#fce3c7] mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>Phone: +22899530363</p>
                            <p>contact@dzoamega.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="py-4 text-center text-xs md:text-sm text-white bg-black">
                copyright 2026 Dzo Store. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer