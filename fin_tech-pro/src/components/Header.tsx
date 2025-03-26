import Link from "next/link"
export default function Header() {
return(
    <div className="py-5 px-6 shadow flex items-center justify-between">
        <h1 className="font-bold text-lg">FinTech Pro</h1>
        <div className="flex items-center gap-2 text-sm text-gray-900"> 
            <Link href=' ' className=" py-2 px-4 hover:text-gray-600" >Features </Link>
            <Link href=' ' className=" py-2 px-4 hover:text-gray-600" >Pricing </Link>
            <Link href=' ' className=" py-2 px-4 hover:text-gray-600 ">About </Link>
            <Link href=' ' className="border border-gray-300 py-2 px-4 rounded hover:bg-gray-100" >Login </Link>
            <Link href=' '  className="bg-gray-900 text-gray-100 hover:bg-gray-800 py-2 px-4 rounded" >Register </Link>


        </div>
       
    </div>
)
}