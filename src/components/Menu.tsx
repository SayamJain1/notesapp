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
                <button onClick={() => setShowMenu(!showMenu)} className="btn btn-sm btn-ghost"><Link href='/login'>Login</Link></button>
                <button onClick={() => setShowMenu(!showMenu)} className="btn btn-sm btn-ghost"><Link href='/signup'>Signup</Link></button>
            </div>
        </div>
    )
}

export default Menu