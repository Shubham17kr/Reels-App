import './profile.css'

function Profile()
{
    return(
        <>
        <div className='header'></div>
        <div className="main">
            <div className="pimg_container">
                <img className='pimg' src='https://via.placeholder.com/640x360' alt=''/>
            </div>
            <div className="details">
                <div className="content">Shubham</div>
                <div className="content">No. Of posts <span className='bold_text'>post</span></div>
                <div className="content">Email <span className='bold_text'>email</span></div>
            </div>
        </div>
        </>
    )
}
export default Profile