import Link from "next/link";



const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>D.Swargiary</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/blog"><a>Blogs</a></Link>
        </nav>

    );
}

export default Navbar