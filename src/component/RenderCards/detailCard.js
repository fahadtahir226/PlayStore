import React from 'react';
import { Redirect } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

export default class DetailCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: 0
        }
    }

    render() {
        const { info } = this.props
        console.log(info);

        return (<div className='container' >
            {info.length !== 0 ?
                <div className='row' >
                    <div className="col s12 l8 xl9">
                        <h5>Description </h5>
                        <div className="divider"></div>
                        <div className="row">
                            <div className="col s12 m8 l4 xl3 offset-m2">
                                <div className="manga-poster-container">
                                    <img src={info.icon ?
                                        `${info.icon}` :
                                        "https://previews.123rf.com/images/mousemd/mousemd1710/mousemd171000009/87405336-404-not-found-concept-glitch-style-vector.jpg"
                                    } style={{ margin: 10, height: "100%", width: "100%" }} alt="" />
                                </div>
                            </div>
                            <div className="col s12">
                                <h3>{info.name}</h3>
                                <p>{(info.description && info.description.length > 0) || (info.description !== "N/A") ? info.description : "missing ..."}</p>
                                <div className="col m6 s12">
                                    <table className="striped centered">
                                        <tbody>
                                            <tr>
                                                <td>Developer</td>
                                                <td>{info.developer && info.developer.length > 0 ? info.developer : "unknown"}</td>
                                            </tr>
                                            <tr>
                                                <td>Age Required</td>
                                                <td>{info.age_required}</td>
                                            </tr>
                                            <tr>
                                                <td>Downloads</td>
                                                <td>{info.downloads ? info.downloads : 0}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className="col l12 m12 s12">
                                <table className="striped centered">
                                    <tbody>
                                        <tr>
                                            <td>ratings</td>
                                            <td>
                                                <StarRatings
                                                    rating={this.state.rating}
                                                    starRatedColor="rgb(255,215,0)"
                                                    starEmptyColor="grey"
                                                    starHoverColor="rgb(255,215,0)"
                                                    starDimension='20px'
                                                    changeRating={(e) => this.changeRating(e)}
                                                    numberOfStars={5}
                                                    name='rating'
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div> : <Redirect to='/asd' />}
        </div>)
    }

    changeRating = (e) => {
        this.setState({
            rating: e
        })
    }
}