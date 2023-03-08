import { useState } from 'react'
import background from './assets/portfolioBackground.jpg'
import mainMenuBG from './assets/mainMenuBackground.jpg'

const App = () => {
    const [mainMenuVisibility, setMainMenuVisibility] = useState('true')

    const appStyle = {
        display: "flex",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Raleway",
    }
    
    const mainDivStyle = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "black",
        width: "50%",
        height: "50vh",
        borderRadius: 20,
        boxShadow: "0 0 5px 5px black",
    }
    
    const titleStyle = {
        display: "flex",
        backgroundColor: "#a8d5e5",
        justifyContent: "center",
        width: "90%",
        borderRadius: 5,
        padding: "5 0"
    }
    
    const mainMenuStyle = {
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${mainMenuBG})`,
        backgroundPosition: "center bottom",
        backgroundSize: "175%",
        width: "90%",
        height: "70%"
    }
    
    const viewInfoStyle = {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#a8d5e5",
        fontSize: "40px",
        width: "100%",
        margin: 0,
        visibility: mainMenuVisibility ? "hidden" : "visible"
    }

    return (
        <div style={appStyle}>
            <div style={mainDivStyle}>
                <h1 style={titleStyle}>Nicolas Bussiere</h1>
                <div style={mainMenuStyle} onMouseEnter={() => setMainMenuVisibility(false)} onMouseOut={() => setMainMenuVisibility(true)}>
                        <p style={viewInfoStyle}>View Info</p>
                </div>
            </div>
        </div>
    )
}

export default App