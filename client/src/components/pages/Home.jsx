import Login from "../login/Login"
import SearchBar from "../ui/SearchBar"
import Map from "../Map"

const Home = () => {
    return(
        // <div id="map"></div>
        <div>
            <div>
                <Login />
            </div>
            <div>
                <Map />
                <SearchBar />
            </div>
        </div>
        
    )
}

export default Home