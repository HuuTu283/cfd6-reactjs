
import { Input } from '../../components'

export default function Cooperate() {
    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des">
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
            việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
          </p>
                <div className="form">
                    <Input
                        title="Họ và tên"
                        type="text"
                        value="Họ và tên bạn"
                    />

                    <Input
                        title="Số điện thoại"
                        type="text"
                        value="Số điện thoại"
                    />

                    <Input
                        title="Email"
                        type="text"
                        value="Email của bạn"
                    />
                    <Input
                        title="Website"
                        type="text"
                        value="Đường dẫn website https://"
                    />
                    <Input
                        title="Tiêu đề"
                        type="text"
                        value="Tiêu đề liên hệ"
                    />

                    <label>
                        <p>Nội dung<span>*</span></p>
                        <textarea name id cols={30} rows={10} defaultValue={""} />
                    </label>
                    <div className="btn main rect">đăng ký</div>
                </div>
            </section>

        </main>
    )
}
