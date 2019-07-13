import React from 'react';
const style = {
    navStyle: {
        background: 'yellow',
        height: "10vh",
        width: "100%",
        marginTop: 0,
        paddingTop: 0,
        textAlign: "right",
        position: "fixed",
        top: "0",
        left: "0",
        borderBottom: "3px, solid, black",
        borderTop: "3px, solid, black",
    }
}
function Navbar() {
    return (
        <nav style={style.navStyle} >
            <p>this is the navbar div</p></nav>

    );
}
export default Navbar;