import Banner from "./Banner";
import Search from "./Search";

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <div className="container">
                <Search />
            </div>
        </div>
    );
}
 
export default Home;