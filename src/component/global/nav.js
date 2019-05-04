import React from 'react';
import MaterialIcon from './materialicon';
import NavLinks from './partials/navLinks';
import SideNav from './partials/sideNav';
import { Link } from 'react-router-dom';
import PopUpModel from './popUpModel';
import { auth, SignOut } from '../../Auth/auth';

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.hide = this.hide.bind(this)
        this.state = {
            logo: {
                imgId: ["nav-logo", "nav-logo-sm"],
            },
            dropdownText: ["My Bag", "my Profile"],
            navText: ["Games", "Online_Earning", "Social_App", "Info"],
            navText2: ["Games", "Online_Earning", "Social_App", "Info"],
            navText3: ["Daily Deals", "Sell", "Help & Contact"],
            modal: "",
            isAuthenticated: false,
            userName: ""
        }

    }
    componentDidMount() {

        auth.onAuthStateChanged(async (res) => {

            this.setState({ loading: true });
            if (res && res.email) {
                await this.setState({ isAuthenticated: true, loading: false , userName: auth.currentUser.displayName })
            } else {
                await this.setState({ isAuthenticated: false, loading: false })
            }
        });
    }
    render() {
        const { modal, isAuthenticated, userName } = this.state;
        // console.log(auth.currentUser.displayName);
        return (
            
            <nav>
            
            {isAuthenticated ? console.log(auth) : null}
                <div className="nav-wrapper">
                    <div className="row" style={{ marginBottom: 0 }}>
                        <Link to="#!" data-target="mobile-demo"
                            style={{ color: "#f35698" }}
                            className="sidenav-trigger waves-effect waves-light">
                            <MaterialIcon iconName="menu" />
                        </Link>

                        <Link to="/" className="brand-logo" >
                            {this.navLogos()}
                        </Link>
                        <Link to="/cart"
                            onClick={() => this.Popup("bag")}
                        >
                            <i style={icon} className="material-icons right" >file_download</i>
                        </Link>
                        <Link to="#!">
                            {window.innerWidth > 712 ?
                                <input className="search-form col m2 l2 right" type="email" placeholder=" Search Here" /> : null}
                        </Link>

                        <NavLinks active={this.props.activeLink} text={localStorage.getItem("user") !== null ? this.state.navText2 : this.state.navText} />
                        <SideNav active={this.props.activeLink} text={localStorage.getItem("user") !== null ? this.state.navText2 : this.state.navText} />
                        <PopUpModel data={modal} hide={this.hide} />
                    </div>

                    {/* another nav */}
                    <div className="row upper-nav">
                        <ul  >
                                {isAuthenticated ? 
                            <li> &nbsp;
                                
                                <span style={{ color: "#f0458cee", paddingLeft: "5px" }}
                                    onClick={() => this.Popup("profile")}
                                > Hi! {userName}</span>
                                    &nbsp;
                                <span style={{ color: "#f0458cee", paddingLeft: "5px" }}
                                    onClick={(e) => SignOut(e)}
                                >Sign Out</span>

                                </li>
                                :
                                <li>&nbsp;
                                    
                                <span style={{ color: "#f0458cee", paddingLeft: "5px" }}
                                    onClick={() => this.Popup("signIn")}
                                >Sign In</span>
                                &nbsp; or
                                <span style={{ color: "#f0458cee", paddingLeft: "5px" }}
                                    onClick={() => this.Popup("signUp")}
                                >Register</span>

                            </li>}
                        </ul>
                        {window.innerWidth <= 715 ? null : window.innerWidth > 715 ?
                            <ul className="container"
                                style={{
                                    width: "50%",
                                    paddingLeft: "10%"
                                }}
                            >

                                {this.state.navText3.map((data, index) => {
                                    return (<li key={index}>
                                        <Link to="#!">
                                            {data}
                                        </Link>
                                    </li>)
                                })}
                            </ul>
                            : null
                        }
                        <Link to="/download"
                            style={{ float: "right", paddingRight: 20 }}>
                            Download <span style={{ color: "#f0458cee" }}></span>
                        </Link>
                    </div>
                </div>

            </nav >
        );
    }


    listItems(textArray) {

        let temp = [], i;

        for (i = 0; i < textArray.length; i++) {
            temp.push(
                <li key={i} style={{ fontWeight: "bold !important", marginRight: 10 }}><Link to={textArray[i]} >{textArray[i]}</Link></li>
            )
        }

        return temp;

    }

    navLogos() {

        let temp = [], i;

        for (i = 0; i < 1; i++) {
            temp.push(
                <h5 key={i}
                    style={logo1}
                    id={window.innerWidth > 0 || window.innerWidth <= 1500 ? "nav-logo" : "nav-logo-sm"} >
                    APPSTORE
                </h5>
            )
        }

        return temp;

    }
    Popup(id) {

        this.setState({
            modal: id
        })
    }

    hide() {
        this.setState({
            modal: null
        })
    }

    componentWillMount() {
        return window.onresize = () => {
            if (window.innerWidth >= 715 || window.innerWidth < 715) {
                this.forceUpdate()
            }
        };
    }

}
const logo1 = {
    color: "#cc4365fa",
    letterSpacing: "5px",
    marginLeft: "30px",
    fontWeight: "bold"
};
const icon = {
    marginRight: 30,
    color: "black",
    float: "right"
}

export default Nav;
