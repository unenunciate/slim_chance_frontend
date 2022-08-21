
import Link from "next/link";

const DrawerFooter = () => {
  return (
        <footer className="flex flex-col w-full p-2 text-gray-700 bg-blue-500 h-auto border-t-2 border-gray-900 absolute bottom-0 justify-center items-center">
            <div className="flex flex-row justify-between w-full items-center">
                <Link href="/about" >
                    <a className="w-1/4 hover:text-gray-300 active:text-white text-center">About</a>
                </Link>
                <Link href="/contact">
                    <a className="w-1/4 hover:text-gray-300 active:text-white text-center">Contact</a>
                </Link>
                <Link href="/terms" >
                    <a className="w-1/4 hover:text-gray-300 active:text-white text-center">Terms</a>
                </Link>
            </div>
            <div className="flex w-full justify-center text-sm text-gray-200"><span>SlimChance © 2022</span></div>
        </footer>
    );
}

export default DrawerFooter;