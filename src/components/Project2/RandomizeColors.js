import React, { Component } from 'react';
import ColorManifest from './ColorManifest';
import TestingBlock from './TestingBlock';

class RandomizeColors extends Component {
    constructor(props) {
        super();
        this.state = {
            value1: '',
            value2: '',
            bgColorPrint: '',
        };
        this.handleChange2 = this.handleChange2.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange2(event) {
        this.setState({ value2: event.target.value });
    }
    // handleSubmit(event) {
    //     this.props.setAColor(this.state.value2, this.state.value1)
    //     event.preventDefault();
    // }

    render() {

        return (
            <div>
                <button onClick={() => this.props.randomizeColors()}>Get random palette</button>
                <button onClick={() => this.props.bgColor()}>Random background</button>
                <button onClick={() => this.props.bgWhite()}>Whitish background</button>
                <button onClick={() => this.props.bgBlack()}>Off-black background</button>
                {/* <button onClick={() => bgBlack()}>Off-black background</button> */}
                <br />
                <form className="inline-form" onSubmit={() => this.props.fetchScheme(this.state.value2)}>
                    <label>
                        Get scheme by colr.org ID#:
                        <input type="number" value={this.state.value2} onChange={this.handleChange2}
                            placeholder='1 to 17564' />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                {/* <button onClick={() => this.props.fetchScheme()}>Set Me</button> */}
                <ColorManifest colorTags={this.props.colorTags} // positionings={this.props.positionings} 
                bgColorPrint={this.props.bgColorPrint} colrOrgId={this.props.colrOrgId} />
                <TestingBlock colors={this.props.colors} colorTags={this.props.colorTags} positionings={this.props.positionings} 
                paragraphText={this.props.paragraphText} positionClass={this.props.positionClass} 
                textSettings={this.props.textSettings} headingText={this.props.headingText} />
            </div>
        )
    }
}

export default RandomizeColors