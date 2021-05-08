import { Link } from 'react-router-dom'
import useDelayLink from '../../../hook/useDelayLink'


export default function CourseDone({ title, description, image, ava_teacher, name_teacher }) {
    let delayLink = useDelayLink()
    return (
        <div className="col-md-6 course">
            <div className="wrap">
                <Link onClick={delayLink} to="/du-an" className="cover">
                    <img src={image} alt="" />
                </Link>
                <div className="info">
                    <Link onClick={delayLink} to="/du-an" className="name">
                        {title}
                    </Link>
                    <p className="des">
                        {description}
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={ava_teacher} alt="" />
                        </div>
                        <div className="name">{name_teacher}</div>
                    </div>
                    <Link onClick={delayLink} to="/du-an" className="register-btn">Website</Link>
                </div>
            </div>
        </div>
    )
}
