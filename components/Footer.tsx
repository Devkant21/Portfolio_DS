// import type { MyFooter } from 'next'
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bottom-0 py-2 bg-slate-900">
            <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col align-middle text-center display-flex-center">
            <a className="flex title-font font-medium items-center md:justify-center justify-center text-gray-900">
                
                <span className="ml-3 text-white text-xl">Failing frequently, staying convex</span>
            </a>
            <p className="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-center">
                <a href="https://github.com/Devkant21" className="text-gray-200 ml-1" rel="noopener noreferrer" target="_blank">@Devkant Swargiary</a>
            </p>
            </div>
            </footer>
        </div>
    );
}

export default Footer;