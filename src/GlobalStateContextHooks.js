import React from 'react';
import ToDosPage from './TodosPage';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from './NavBar';
import Ipsum from './Ipsum'
import { Grid, Paper } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './style/Themes'

const initialGlobalState = {
    count: 0,
    todoItems: [{
        id: 1,
        title: "Do homework",
        done: true
    },
    {
        id: 2,
        title: "Clean bathroom",
        done: false
    },
    {
        id: 3,
        title: "Throw away trash",
    },]
};

// Create a Context for the (global) State
export const GlobalState = React.createContext();

export class Global extends React.Component {
    constructor(props) {
        super(props);

        // Set the initial (global) State
        this.state = {
            globals: initialGlobalState || {},
        };
    }

    // Expose the setGlobals function to the Globals object
    componentDidMount() {
        GlobalState.set = this.setGlobalState;
    }

    setGlobalState = (data = {}) => {
        const { globals } = this.state;

        // Loop over the data items by key, only updating those which have changed
        Object.keys(data).forEach((key) => {
            globals[key] = data[key];
        });

        // Update the state with the new State
        this.setState(globals);
    };

    render() {
        const { globals } = this.state;
        const { Root } = this.props;

        return (
            // Pass the current value of GlobalState, based on this components' State, down
            <GlobalState.Provider value={globals}>
                <Root height="100vh" />
            </GlobalState.Provider>
        );
    }
}

// Create a shorthand Hook for using the GlobalState
export const useGlobalState = () => React.useContext(GlobalState);

// Create an example component which both renders and modifies the GlobalState
function SomeComponent() {
    const { count } = useGlobalState();

    // Create a function which mutates GlobalState
    function incrementCount() {
        GlobalState.set({
            count: count + 1,
        });
    }

    return <div onClick={incrementCount}>{count}</div>;
}

function Routers() {

    return (
        <Grid container  spacing={2} >
            <ThemeProvider theme={theme}>
                <Router>
                    <Grid item sx={{width:'100%'}} >
                        <Header />
                    </Grid>
                    <Grid item md={2}>
                        <NavBar />
                    </Grid>
                    <Grid item md={10}>
                        <Routes>
                            <Route path="/" element={<ToDosPage />} />
                            <Route path="/page" element={<Ipsum />} />
                        </Routes>
                    </Grid>
                    <Grid item>
                        <Footer/>
                    </Grid>
                </Router>
            </ThemeProvider>
        </Grid>
    )
}

export default function App() {
    // Note: within the Root function we can return any Component (not just SomeComponent, but also a Router for instance)
    return <Global Root={() => <Routers />} />;
}

// Expose the GlobalState object to the window (allowing GlobalState.set({ count: 'new' }) from anywhere in the code (even your console))
window.GlobalState = GlobalState;