import React, { Component } from 'react'
import BaseLayout from '../components/layout/BaseLayout'
import '../styles/main.scss'

class About extends Component {
    static getInitialProps() {
        console.log('Inside');
        return {name: 'Rijwan'}
    }
    render() {
        console.log('About Render');
        console.log(this.props.name);
        
        return (
            <BaseLayout> 
                <p>About Page</p>
            </BaseLayout>
        )
    }
}

export default About;