import React from 'react'
import Navigation from './navigation';
import Footer from "../components/footer"

function layout(props) {
    const {children} = props;
    return (
        <div>
            <Navigation />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default layout
