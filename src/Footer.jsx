import Github from "./assets/github.png"
import Linkedin from "./assets/linkedin.png"
import Email from "./assets/email.png"

export function Footer(){
    return(
    <div className="footer">
    <div class="footers">
            <a href = "https://github.com/ArthurFilho"> <img src={Github} width="50px"/></a>
            <a href="https://www.linkedin.com/in/arthur-filho/"> <img src={Linkedin}  width="50px"/></a> 
            <a href="mailto:peraarthur2018@gmail.com"> <img src={Email}  width="50px"/></a>
        </div>
    </div>
    )
}


