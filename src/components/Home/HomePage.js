import videoHomePage from '../../assets/video-homepage.mp4'
const HomPage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay loop muted  >
                <source src={videoHomePage}
                    type="video/mp4"
                />
            </video>
        </div>
    )
}
export default HomPage;