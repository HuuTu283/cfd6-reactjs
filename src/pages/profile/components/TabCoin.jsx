import CoinCheck from "./CoinCheck";
import CoinHistory from "./CoinHistory";


export default function TabCoin() {
    return (
        <div className="tab5 cointab" style={{ display: 'block' }}>
            <div className="coininfo">
                <div className="coininfo__box">
                    <h3><strong>Thông tin COIN</strong></h3>
                    <div className="coininfo__box-ct">
                        <div>
                            <img src="img/cfd-coin.png" alt="" />
                            <p>Bạn có <strong>300</strong> COIN</p>
                        </div>
                    </div>
                </div>



                <div className="coininfo__box">
                    <h3><strong>Đổi COIN</strong></h3>
                    <div className="coininfo__box-ct">
                        <CoinCheck title="Voucher Tiki 100k" />
                        <CoinCheck title="Voucher Tiki 200k" />
                        <CoinCheck title="Voucher Tiki 500k" />
                        <CoinCheck title="Thẻ nạp điện thoại 100k" />
                        <CoinCheck title="Thẻ nạp điện thoại 200k" />
                        <CoinCheck title="Thẻ nạp điện thoại 500k" />


                        <small><i>*Bạn có thể đổi COIN 1 lần</i></small>
                    </div>
                    <a href="javascript:void(0)" className="btn main">Đổi COIN</a>
                </div>
            </div>



            <div className="coinhistory">
                <h3><strong>Lịch sử COIN</strong></h3>
                <div className="itemhistory">
                    <div className="td"><strong>COIN</strong></div>
                    <div className="td"><strong>Thời gian</strong></div>
                    <div className="td"><strong>Nội dung</strong></div>
                    <div className="td"><strong>Trạng thái</strong></div>
                </div>

                <CoinHistory
                    coin="red"
                    time="09/09/2020"
                    content="Giới thiệu khóa học cho học viên mới"
                    status="Đã chấp nhận"
                />
                <CoinHistory
                    coin=""
                    time="19/09/2020"
                    content="Dùng COIN để quy đổi sang Voucher Tiki"
                    status="Đã chấp nhận"
                />
                <CoinHistory
                    coin="red"
                    time="19/09/2020"
                    content="Dùng COIN để đổi sang Thẻ nạp điện thoại"
                    status="Chờ duyệt"
                />
            </div>
        </div>
    )
}
