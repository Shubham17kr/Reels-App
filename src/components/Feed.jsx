import "./Feed.css"

function Feed()
{
    return(
        <>
            <div className="header">
                <img className="insta_img" src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png" alt=""></img> 
                <img  className="profile_img" src="https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg" alt="" />
            </div>
            <div className="main_container">
                <div className="upload_container">upload</div>
                <div className="reel_container">reels</div>
            </div>
        </>
    )
}
export default Feed