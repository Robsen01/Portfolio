import Logo from '../assets/Logo.svg'
import './Header.css'

function Header() {
    return(
        <div class="container">
            {/* Left */}
            <div class="avatar">
                <img src={Logo} 
                id='logo'
                width={40}
                height={40}/>
            </div>
            

            {/* Center */}


                
            {/* Right */}
        </div>
    )
}

export default Header