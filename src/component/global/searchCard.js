import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class SearchCard extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            value: 10
        }
    }

    handleChangeStart = () => {
        console.log('Change event started')
    };

    handleChange = value => {
        this.setState({
            value: value
        })
    };

    handleChangeComplete = () => {
        console.log('Change event completed')
    };

    render() {
        var { value } = this.state;
        return (
            <div className="card " style={{padding: 10}}>
                <div className="container">
                    <div className="row">
                        <h4 style={{ color: "lightGrey" }}>Colors</h4>
                        <div className="divider"></div>
                        <ul className="colors" >
                            <li className="col s1 m2 l2">
                                <label>
                                    <input className="purple" name="group1" type="radio" />
                                    <span  > </span>
                                </label>
                            </li>
                            <li className="col s1 m2 l2">
                                <label>
                                    <input className="blue" name="group1" type="radio" />
                                    <span  > </span>
                                </label>
                            </li>
                            <li className="col s1 m2 l2">
                                <label>
                                    <input className="darkPink" name="group1" type="radio" />
                                    <span  > </span>
                                </label>
                            </li>
                            <li className="col s1 m2 l2">
                                <label>
                                    <input className="red" name="group1" type="radio" />
                                    <span> </span>
                                </label>
                            </li>
                            <li className="col s1 m2 l2">
                                <label>
                                    <input className="yellow" name="group1" type="radio" />
                                    <span  > </span>
                                </label>
                            </li>
                            <li className="col s1 m2 l2">
                                <label>
                                    <input className="green" name="group1" type="radio" />
                                    <span> </span>
                                </label>
                            </li>
                            <li className="col s1 m2 l2">
                                <label>
                                    <input className="orange" name="group1" type="radio" />
                                    <span  > </span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <h4 style={{ color: "lightGrey" }}>Size</h4>
                        <div className="divider"></div>
                        <ul className="size ">
                            <li >
                                <button className="col s4 m3 l3">XS</button>
                            </li>
                            <li >
                                <button className="col s4 m3 l3">S</button>
                            </li>
                            <li >
                                <button className="col s4 m3 l3">M</button>
                            </li>
                            <li >
                                <button className="col s4 m3 l3">L</button>
                            </li>
                            <li >
                                <button className="col s4 m3 l3">XL</button>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <h4 style={{ color: "lightgrey" }}>PriceRange</h4>
                        <div className="divider"></div>
                        <div className='slider center'>
                            <Slider
                                min={10}
                                max={1000}
                                value={value}
                                onChangeStart={this.handleChangeStart}
                                onChange={this.handleChange}
                                onChangeComplete={this.handleChangeComplete}
                            />
                            <p className='value center'>10$ &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
                       ${value}</p>
                        </div>
                        <h4 style={{ color: "lightgrey" }}>Brands</h4>
                        <div className="divider"></div>
                        <ul>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span  > Abercrombie</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input name="group1" type="checkbox" />
                                    <span  > Fitch</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input name="group1" type="checkbox" />
                                    <span  > Addidas Original</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input name="group1" type="checkbox" />
                                    <span  >ASOS </span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input name="group1" type="checkbox" />
                                    <span  > Cheap Monday</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="row center ">
                        <button className="btn btn-large btn-primary pop-btn col s12 m8 l6 left pink-bg">Apply</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchCard;