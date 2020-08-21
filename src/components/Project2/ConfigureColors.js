import React, { Component } from 'react';
import ColorManifest from './ColorManifest';
import TestingBlock from './TestingBlock';

class ConfigureColors extends Component {
    constructor(props) {
        super();
        this.state = {
            value1: '',
            value2: '',
            value3: '',
        };
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBgSubmit = this.handleBgSubmit.bind(this);
    }
    handleChange1(event) {
        this.setState({ value1: event.target.value });
    }
    handleChange2(event) {
        this.setState({ value2: event.target.value });
    }
    handleChange3(event) {
        this.setState({ value3: event.target.value});
    }
    handleSubmit(event) {
        this.props.setAColor(this.state.value2, this.state.value1)
        event.preventDefault();
    }
    handleBgSubmit(event) {
        this.props.bgSet(this.state.value3)
        event.preventDefault();
    }

    render() {
        let removedColorsList = this.props.removedColors.map((colors) => {
            return <li>{colors[0]} <span style={{backgroundColor: colors[1]}}>___</span></li>
        })

        return (
            <div id="configWrapperDiv">
                <ul id="configHistoryDiv">
                    <h4>Removed Colors:</h4>
                   {removedColorsList}
                </ul>
                
                <form className='lineUp' onSubmit={this.handleSubmit}>
                    <label>
                        Slot to set?
                        <input type="number" value={this.state.value1} onChange={this.handleChange1}
                            placeholder='Num 0-10' />
                    </label>
                    <label>
                        Color to set it to?
                        <input type="text" value={this.state.value2} onChange={this.handleChange2}
                            placeholder='six digit hexadecimal' />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <form className='lineUp' onSubmit={this.handleBgSubmit}>
                    <label>
                        Set background color:
                        <input type="text" value={this.state.value3} onChange={this.handleChange3}
                            placeholder='six digit hexadecimal' />
                    </label>
                    <input type="submit" value="Submit" onSubmit={this.handleBgSubmit} />
                </form>

                <ColorManifest colorTags={this.props.colorTags} positionings={this.props.positionings}
                bgColorPrint={this.props.bgColorPrint} colrOrgId={this.props.colrOrgId} />
                <TestingBlock colorTags={this.props.colorTags} positionings={this.props.positionings}
                    paragraphText={this.props.paragraphText} positionClass={this.props.positionClass} 
                    textSettings={this.props.textSettings} headingText={this.props.headingText} />
            </div>
        )
    }
}

export default ConfigureColors;