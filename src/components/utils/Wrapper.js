import React from 'react'
const Wrapper = ({ children }) => {
    return (
        <main className='flex min-h-screen w-full justify-center'>
            <div className="flex min-h-screen w-full max-w-[1288px] flex-col items-center justify-center gap-4 p-24 relative">
                {children}
            </div>
        </main>
    )
}

export default Wrapper