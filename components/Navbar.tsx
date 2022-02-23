import Link from "next/link";
// import type { MyNavbar } from './Navbar'



export default function MyNavbar() {
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
