import bannerImage from '../banner.png'

const Banner = () => {
    return (
      <div className="banner">
        <img src={bannerImage} alt="bannerImage" />
        <h1>Watch something incredible</h1>
      </div>
    );
}
 
export default Banner;