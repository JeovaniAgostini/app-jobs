import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import RoutesList from "./pages/routes";
import { ClerkProvider } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
    const navigate = useNavigate();

    return (
        <ClerkProvider
            publishableKey={clerkPubKey}
            navigate={(to) => navigate(to)}
            appearance={{
                variables: {
                    colorPrimary: "#0c2c48",
                    colorText: "#0c2c48",
                    fontFamily: "IBM Plex Serif",
                    fontSize: "18px"
                }
            }}
        >
            <GlobalStyle />
            <Header />
            <RoutesList />
            <Footer />
        </ClerkProvider>
    );
};

export default App;