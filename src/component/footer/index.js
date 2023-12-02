import './index.css'
import icone1 from '../Assets/instagram.svg'
import icone2 from '../Assets/twitter.svg'
import icone3 from '../Assets/youtube.svg'
import icone4 from '../Assets/facebook.svg'


function Footer(){
    return(
        <footer>
        <div class="footer-conatainer">
            <div class="icons">
                <a href=""><img src={icone1}/></a>
                <a href=""><img src={icone2}/></a>
                <a href=""><img src={icone3}/></a>
                <a href=""><img src={icone4}/></a>
            </div>
            <div class="list">
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">NEWS</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">CONTACT US</a></li>
                    <li><a href="">OUR TEAM</a></li>
                </ul>
            </div>
            <div class="footerbottom">
                <p>Copyright &copy; 2023; Design by <span class="designer">Ezechiel BATCHI</span></p>
            </div>
        </div>
        </footer>
    )
}
export default Footer;