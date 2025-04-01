import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
// import Footer from '../components/footer';

function Home() {
    return (
        <div className='bg-white'>
            <Navbar />
            <HeroSection />            
            {/* <Footer/> */}
        </div>
    );
}

export default Home;