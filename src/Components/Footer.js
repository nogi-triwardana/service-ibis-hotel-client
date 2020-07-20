import React,{Component} from "react";
import "./style.css";

class Footer extends Component{
    render(){
        const hearts = {
            color: "#fc3f5e",
            fontSize:"15px"
        };

        return(
            <footer>
                <div class="top-footer">
                    <p>
                        <a href="">privacy policy</a>
                        <span id="mini-vertical-border"></span>
                        <a href="">about us</a>
                        <span id="mini-vertical-border"></span>
                        <a href="./contact.html">contact us</a>
                    </p>
                </div>
                <div class="middle-footer">
                    <div id="left-middle-footer">
                        <a href="https://goo.gl/maps/DKHRMJyk9mtuZPuJA">
                            <p>
                                Jl. Dr. Djunjunan No.22<br />
                                Sukabungah, Kec. Sukajadi<br />
                                Kota Bandung, Jawa Barat<br />
                                40162
                            </p>
                        </a>
                    </div>
                    <div id="right-middle-footer">
                        <ul>
                            <li><p>Tel: +622282602020</p></li>
                            <li><p>Faks: (+62)22/82601896</p></li>
                            <li><p>Email kontak : H9397-RE@accor.com</p></li>
                        </ul>
                    </div>
                </div>
                <div id="big-horizontal-border"></div>
                <div class="bottom-footer">
                    <p>&copy; Ibis Hotel <span id="years"></span> Made by nogi with <span style={hearts}>&hearts;</span></p> 
                </div>
            </footer>
        );
    }
}

export default Footer;