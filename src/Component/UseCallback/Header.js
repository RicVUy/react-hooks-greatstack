import React from 'react'
import Footer from './Footer'
function Header() {
    console.log("Header Rendered")
    return (
        <div>
            <h2>Header</h2>
            <Footer/>
        </div>
    )
}

export default React.memo(Header)

