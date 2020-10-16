import React,{Component} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import instagram from "../Components/img/instagram.png";
import facebook from "../Components/img/facebook.png";
import twitter from "../Components/img/twitter.png";

class Contact extends Component{
    constructor(props){
        super(props)
        this.state = {
            nama_kontak : "",
            email : "",
            pesan : ""
        }
    }

    componentDidMount(){
        this.postMessageClient();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    postMessageClient = () => {
        let data = {
            nama_kontak : this.state.nama_kontak,
            email   : this.state.email,
            pesan   : this.state.pesan
        };

        fetch("http://localhost:4000/pesan/kirim",{
            method : "POST",
            body : JSON.stringify(data),
            headers : {
                "Content-type" : "application/json"
            }
        })
        .then( data => console.log(data))
        .catch(err => console.log(err));
    }

    render(){
        return(
            <section>
                <Header />
                <div id="descript-contact">
                    <h3>Silahkan hubungi kami</h3>
                    <p>
                        Bila anda memiliki ulasan berupa pujian,saran maupun keluhan
                        seputar layanan maupun fasilitas
                        yang diberikan kami,Silahkan hubungi kontak kami.
                    </p>
                </div>
                <div id="contact">
                    <form onSubmit={this.postMessageClient}>
                        <label>Nama : </label><br />
                        <input type="text" name="nama_kontak" onChange={this.handleChange}/><br />
                        <label>email anda : </label><br />
                        <input type="email" name="email" onChange={this.handleChange} placeholder="Contoh:example@gmail.com" />
                        <br/>
                        <label>Pesan : </label><br />
                        <textarea cols="40" rows="5" name="pesan" onChange={this.handleChange} placeholder="Silahkan isi pesan anda disini"></textarea><br />
                        <button type="submit">Kirim</button>
                    </form>
                </div>
                <div id="big-horizontal-border" />
                <div class="menu-contact">
                    <ul>
                        <h3>Atau silahkan hubungi kontak di bawah ini</h3>
                        <li><p>Tel: +622282602020</p></li>
                        <li><p>Faks: (+62)22/82601896</p></li>
                        <li><p>Email kontak : H9397-RE@accor.com</p></li>
                    </ul>
                    <div id="menu-sosmed">
                        <h3>Follow our social media</h3>
                        <a href="https://www.instagram.com/ibisbandungpasteur/"><img src={instagram} className="" alt="" /></a>
                        <a href="https://web.facebook.com/ibisBandungPasteur/"><img src={facebook} className="" alt="" /></a>
                        <a href="https://twitter.com/ibisBDGpasteur"><img src={twitter} className="" alt="" /></a>
                    </div>
                </div>
            <Footer />
        </section>
        );
    }
}

export default Contact;