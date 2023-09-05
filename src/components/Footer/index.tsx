import { Link } from 'react-router-dom';
import { Container } from './styles';
import { DribbbleLogo, FacebookLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';

function Footer() {
    return (
        <Container>
            <footer>
                <nav>
                    <Link to="#">Privacy & Terms.</Link>
                </nav>
                <div>
                    <p>
                        Copyright @2023 Jobs Inc. All rights reserved.
                    </p>
                </div>
                <nav>
                    <Link to="#">
                        <WhatsappLogo size={32} />
                    </Link>
                    <Link to="#">
                        <DribbbleLogo size={32} />
                    </Link>
                    <Link to="#">
                        <InstagramLogo size={32} />
                    </Link>
                    <Link to="#">
                        <FacebookLogo size={32} />
                    </Link>
                </nav>
            </footer>
        </Container>
    )
};

export default Footer;