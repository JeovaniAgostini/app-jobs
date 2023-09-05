import { Container, LogoDiv, MobileMenu, UserLoggedMenu, MobileButton, CloseBtn } from './styles';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import { useState } from 'react';
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const { isLoaded, isSignedIn, user } = useUser();

    function toggleMenuMobile() {
        setIsOpenMenu(state => !state);
    }

    console.log("user:", user)

    return (
        <Container>
            <header>
                <LogoDiv>
                    <img width="50px" src={Logo} alt="Logo" />
                    <h1>Jobs</h1>
                </LogoDiv>
                {/* Desktop menu */}
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/jobs">Jobs</Link>
                    <Link to="#">Contact Us</Link>
                </nav>
                <nav>
                    {isLoaded && isSignedIn ? (
                        <UserLoggedMenu>
                            <strong>
                                {user.firstName}
                            </strong>
                            <UserButton afterSignOutUrl="/" />
                        </UserLoggedMenu>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">
                                <button>
                                    Register
                                </button>
                            </Link>
                        </>
                    )}
                </nav>
                {/* Mobile menu */}
                <MobileButton>
                    <button onClick={() => toggleMenuMobile()}>
                        <List size={36} />
                    </button>
                    {isLoaded && isSignedIn && (
                        <UserLoggedMenu>
                            <UserButton afterSignOutUrl="/" />
                        </UserLoggedMenu>
                    )}
                </MobileButton>
                <MobileMenu hide={isOpenMenu}>
                    <nav onClick={() => toggleMenuMobile()}>
                        <CloseBtn>
                            <X size={40} />
                        </CloseBtn>
                        <Link to="/">Home</Link>
                        <Link to="/jobs">Jobs</Link>
                        <Link to="#">Contact Us</Link>
                        {!isSignedIn && (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">
                                    <button>
                                        Register
                                    </button>
                                </Link>
                            </>
                        )}
                    </nav>
                </MobileMenu>
            </header>
        </Container>
    )
};

export default Header;