import React from 'react';
import "./Footer.css"
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import ramy from "../images/ramy.png";
import yuki from "../images/yuki.jpg";
import reza from "../images/reza.jpeg";



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    icon: {
        color: '#1565c0',
    }
}));

const Footer = () => {
    const classes = useStyles();
    const fontStyle = {
        fontSize: 18,
        color: "#FFFFFF",
        padding: "5px",
        fontWeight: 'bold',
    }




    return (
        <div>
            <footer className="footer" >
                <div className="footer-container">

                    <div className="footer-column-1">
                        <a href="https://privacy.com/" className="resize-on-hover"><p style={fontStyle}>Privacy</p></a>
                    </div>
                    <div className="footer-column-2">
                        <div className="avatar">
                            <a href="https://www.linkedin.com/in/ramy-obeid-005748204/" target="_blank" className="resize-on-hover"><Avatar alt="Ramy" src={ramy} className={classes.small} /></a>
                            <a href="#" className="resize-on-hover"><Avatar alt="yuki" target="_blank" src={yuki} className={classes.small} /></a>
                            <a href="https://www.linkedin.com/in/reza-hajipour-aa07283b/" target="_blank" className="resize-on-hover"><Avatar alt="Reza Hajipour" src={reza} className={classes.small} /></a>
                        </div>
                    </div>

                    <div className="footer-column-3">
                        <a href="https://www.facebook.com/" target="_blank" className="resize-on-hover"><FacebookIcon fontSize="large" /></a>
                        <a href="https://twitter.com/?lang=en" target="_blank" className="resize-on-hover"><TwitterIcon fontSize="large" /></a>
                        <a href="https://www.instagram.com/" target="_blank" className="resize-on-hover"><InstagramIcon fontSize="large" /></a>
                    </div>
                </div>
            </footer>
        </div>

    )

}





export default Footer