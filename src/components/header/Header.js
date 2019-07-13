import React from 'react';
import './style.css'
const style = {
    HeaderStyle: {
        background: 'green',
        marginTop: 0,
        height: "22vh",
        textAlign: "center",
        width: "100%",
    }
}
function Header() {
    return (<div style={style.HeaderStyle} className='headerDiv'>
        <div><h2>hm</h2></div>
        <h2 id="instructions">Clck each cute penguin only once! Get twelve correct in a row to win.</h2>
    </div >
    );
}
export default Header;