import { Link } from 'react-router-dom'
import useDelayLink from '../../../hook/useDelayLink';



export default function Action() {
    let delayLink = useDelayLink()
    return (
        <section className="section-action">
            <div className="container">
                <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
                <Link onClick={delayLink} to="/dang-ky" className="btn main round bg-white">Đăng ký</Link>
            </div>
        </section>
    )
}
