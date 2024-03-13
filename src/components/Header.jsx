import Logo from '../assets/Logo.svg'
import './Header.css'

function Header() {
    return(
        <div>
            {/* Left */}
            <div class="container">
                <div class="avatar">
                    <img src={Logo} 
                    id='logo'
                    width={40}
                    height={40}/>
                </div>
            </div>

            {/* Center */}
            {/* Right */}
        </div>
    )
}

export default Header