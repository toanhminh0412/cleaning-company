import Link from "next/link"

export default function UpperNav() {
    return (
        <div className="fixed top-0 left-0 w-screen z-40">
            <div className="navbar bg-gradient-to-r from-red-500 to-orange-500 shadow-lg text-white">
                <div className="navbar-start">
                    <Link href="#" className="btn btn-ghost normal-case text-xl">CleaningCompany</Link>
                </div>
                <div className="navbar-center hidden md:flex prose text-white text-xl font-light">
                    We clean and wash, and you relax.
                </div>
                <div className="navbar-end">
                    <Link href="mailto:user@example.org" className="btn btn-warning">Get a quote</Link>
                </div>
            </div>
            <div className="p-2 font-light bg-neutral-800 flex text-white">
                <div><i className="fa-solid fa-envelope me-2 text-yellow-500"></i> <Link href="mailto:user@example.org">user@example.org</Link></div>
                <span className="mx-8"> | </span>
                <div><i className="fa-solid fa-phone me-2 text-yellow-500"></i> 250-884-5157</div>
            </div>
        </div>
    )
}