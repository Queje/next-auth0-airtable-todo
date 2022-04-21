import Link from "next/link"
import { useUser } from '@auth0/nextjs-auth0';

export default function Navbar() {
    const { user } = useUser();

    return(
        <nav className="flex justify-between items-center py-6">
            <p className="text-2xl font-bold text-grey-800">My Todos</p>
            <div className="flex">
                { user && 
                    <Link href="/api/auth/logout"
                    passHref
                    >
                        <span
                            className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
                        >
                            logout
                        </span>
                    </Link>
                }
                { !user && 
                    <Link href="/api/auth/login"
                    passHref
                    >
                        <span
                            className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
                        >
                            login
                        </span>
                    </Link>
                }
            </div>
        </nav>
    )
}