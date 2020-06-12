import React from 'react'

export default function Header() {
    return (
        <div style={headerStyle}>
            <h3>To Do Application</h3>
        </div>
    )
}

const headerStyle = {
        background:'#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
      
}
