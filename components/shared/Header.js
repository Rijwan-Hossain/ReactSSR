import React, { Component } from 'react'
import Link from 'next/link' 

class Header extends Component { 
    render() { 
        return ( 
            <div> 
                <Link href="/"> 
                    <a>Home</a> 
                </Link> 
                <Link href="about"> 
                    <a>About</a> 
                </Link> 
                <style jsx> 
                {` 
                    a { margin: 0px 10px } 
                `} 
                </style> 
            </div> 
        ) 
    } 
} 

export default Header;