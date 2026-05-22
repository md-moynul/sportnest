import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-zinc-400 py-12 px-6 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand Section */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        {/* Your SportNest Logo Here */}
                        <Image className="w-8 md:w-10 h-8 md:h-10 " src={'/assets/logo.png'} alt='loge' width={50} height={50} />
                        <p className="font-bold text-xl md:text-3xl text-sky-600"><span>Sport</span><span className="text-teal-600">Nest</span></p>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-500">
                        Your ultimate hub for booking premium sports facilities and managing your game days seamlessly.
                    </p>
                </div>

                {/* Newsletter */}
                <div className="space-y-4">
                    <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Newsletter</h4>
                    <p className="text-sm text-zinc-500">
                        Subscribe to get the latest tournament updates and exclusive facility discounts.
                    </p>
                    <div className="relative flex items-center">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-teal-500 text-white"
                        />
                        <button className="absolute right-2 text-zinc-400 hover:text-teal-500">
                            ➔
                        </button>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-3">
                    <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">Home</a></li>
                        <li><a href="#" className="hover:text-white transition">All Facilities</a></li>
                        <li><a href="#" className="hover:text-white transition">My Bookings</a></li>
                        <li><a href="#" className="hover:text-white transition">Manage Facilities</a></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="space-y-3">
                    <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Contact Us</h4>
                    <ul className="space-y-2 text-sm text-zinc-500">
                        <li>Phone: <span className="text-zinc-400">+880 1XXX-XXXXXX</span></li>
                        <li>Email: <a href="mailto:support@sportnest.com" className="text-zinc-400 hover:text-teal-500 transition">support@sportnest.com</a></li>
                    </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 gap-4">
                <p>© {new Date().getFullYear()} SportNest. All rights reserved.</p>
                <div className="flex gap-4 text-sm">
                    <a href="#" className="hover:text-white transition">X</a>
                    <a href="#" className="hover:text-white transition">LinkedIn</a>
                    <a href="#" className="hover:text-white transition">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;