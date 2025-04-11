import Link from "next/link";


export default function Header() {
    return(
        <div>
            <header className="z-10 sticky pt-8 bg-[#0B1026]">
            <div className="flex-1 flex justify-around items-center">
                <h1 className="justify-start text-5xl font-extrabold bg-gradient-to-r from-[#4655BA] to-[#59A7FF] text-transparent bg-clip-text"><Link href="/">beni.dev</Link></h1>
                <ul className="flex gap-7 items-center text-md font-medium">
                    <li><Link href="/">{'{ Home }'}</Link></li>
                    <li><Link href="/projects">{'{ Projects }'}</Link></li>
                    <li><Link href="/skills">{'{ Skills }'}</Link></li>
                    <li><Link href="/recommendations">{'{ Recommendations }'}</Link></li>
                    <li><Link href="/contacts">{'{ Contact }'}</Link></li>
                </ul>
            </div>
        </header>
        </div>
        
    );
}