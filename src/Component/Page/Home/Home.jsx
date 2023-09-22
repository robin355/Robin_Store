import Banner from "./Banner/Banner";
import Cetagori from "./Cetagori/Cetagori";
import Feature from "./Feature/Feature";
import PopulerMenu from "./PopulerMenu/PopulerMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cetagori></Cetagori>
            <PopulerMenu></PopulerMenu>
            <Feature></Feature>
        </div>
    );
};

export default Home;