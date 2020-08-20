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
                <h2 className='otherh4'>Screenshot of 'Randomize Colors' with Default Text &amp; Layout Properties</h2>
                <img src={require("../../images/random-palette-page-no-layout.png")} alt="" />
                <h2 className='otherh4'>Screenshot of 'Configure Colors' with Randomized Texts, H3's, P's</h2>
                <img src={require("../../images/configure-colors-page.png")} alt="" />
                <h2 className='otherh4'>Screenshot of 'Randomize Page'</h2>
                <img src={require("../../images/layout-page.png")} alt="" />
                
                {/* <p className='basicText'>This is an app for exploring color schemes. The Randomize by Color Scheme page will get 
                    a random user submitted color scheme from <a href="http://colr.org">colr.org</a> of 2 to 10 colors. 
                    The Randomize Layout page uses JavaScript to randomize spacing and element sizes and weights within 
                    certain bounds, as well as to set shuffled paragraph text from
                    <a href="http://randomtext.me/">randomtext.me</a>. The Configure Colors pages allows you to set 
                    colors one at a time to the page and prints the deleted colors' hex values at the top left. The 
                    changes made with each function will persist when switching functions until the browser tab is closed 
                    or reloaded</p>
                    <p>Note: If you run the browser extension Ghostery, you will need to pause the
                        extension in order for the color scheme randomization to work. I have not tested it
                        against regular ad-blockers or other extensions.
                    </p>
                    <h4 className='otherh4' >Screenshot of the Configure Colors function</h4>
                    <img src={require("./configure-colors.jpg")} alt="screenshot of configure colors page" /> */}
            </div>
        )
    }
}

export default HowToUse;