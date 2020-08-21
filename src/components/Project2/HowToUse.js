import React, { Component } from 'react';


class HowToUse extends Component {
    constructor (props) {
        super();
    }
    render () {
        return (
            <div>
                <h1>Color Scheme Explorer</h1>
                <p className='basicText'>Test random color schemes and build your custom color scheme against
                    different backgrounds, texts, and text and layout properties. Random schemes
                    by ID# and loading schemes by ID# from <a href="http://www.colr.org">Colr.org</a>.
                    Ipsum/Gibberish from <a href="https://www.randomtext.me">Randomtext.me</a>.
                    Check out the source at my <a href="https://github.com/cooperdozier/color-scheme-explorer">Github Repository</a>.
                </p>
                <h2 className='home-h2'>Screenshot of 'Randomize Colors' with Default Text &amp; Layout Properties</h2>
                <img src={require("../../images/random-palette-page-no-layout.png")} alt="" />
                <h2 className='home-h2'>Screenshot of 'Configure Colors' with Randomized Texts, H3's, P's</h2>
                <img src={require("../../images/configure-colors-page.png")} alt="" />
                <h2 className='home-h2'>Screenshot of 'Randomize Page'</h2>
                <img src={require("../../images/layout-page.png")} alt="" />
                
            </div>
        )
    }
}

export default HowToUse;