import React from 'react'

export default function AboutLayout({ children }) {
    return (
        <div>
            <nav className='my-6'>Mission | Vision</nav>
            {children}
        </div>
    )
}
