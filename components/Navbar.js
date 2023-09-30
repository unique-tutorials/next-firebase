import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-10">
            <Link href="/">
                <button className="text-3xl">
                    AOS Sosyal Medya
                </button>
            </Link>
            <ul>
                <Link href={"/auth/login"} legacyBehavior>
                    <a className="text-xl font-small py-2 bg-orange-500 px-4 rounded-lg">Giriş</a>
                </Link>
            </ul>

        </nav>
    );
}

export default Navbar;