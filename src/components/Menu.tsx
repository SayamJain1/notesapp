import Link from 'next/link'
import React from 'react'

type MenuProps = {
    showMenu: boolean,
    setShowMenu: Dispatch<SetStateAction<boolean>>,
}

function Menu({ showMenu, setShowMenu }: MenuProps) {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <Link href='/login'><button onClick={() => setShowMenu(!showMenu)} className="btn btn-sm btn-ghost">Login</button></Link>
                <Link href='/signup'><button onClick={() => setShowMenu(!showMenu)} className="btn btn-sm btn-ghost">Signup</button></Link>
            </div>
        </div>
    )
}

export default Menu