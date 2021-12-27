import HSlider from './home_components/home_slider';
import HAbout from './home_components/home_about';
import HServices from './home_components/home_services';
import HPortfolio from './home_components/home_portfolio';
import HContact from './home_components/home_contact';

const Home = () => {
    return (  
        <div className="home">
            <HSlider></HSlider>
            <HAbout></HAbout>
            <HServices></HServices>
            <HPortfolio></HPortfolio>
            <HContact></HContact>
        </div>
    );
}
 
export default Home;