
import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import cat1Img from "assets/users/images/categories/anhsuahop.jpg";
import cat2Img from "assets/users/images/categories/hoaquakho.jpg";
import cat3Img from "assets/users/images/categories/anhraucutuoi.jpg";
import { AiOutlineCopy, AiOutlineEye, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { formatter } from "utils/formater";
import { ProductCard } from "component";
import { featureProducts } from "utils/common";
const ProductDetailPage =()=>{
    const imgs = [
        cat1Img,cat2Img,cat3Img
    ];
    return (
        <>
            <Breadcrumb name="Chi tiết sản phẩm"/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 product__detail__pic">
                            <img src={cat3Img} alt="product-pic" style={{width: "20px"}}/>    
                            <div className="main">
                                {
                                    imgs.map((item,key) => (
                                        <img src={item} alt="product-pic" key={key} /> 
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-lg-6 product__detail__text">
                            <h2>
                                Rau củ quả
                            </h2>
                            <div className="seen-icon">
                                <AiOutlineEye />
                                {` 10(lượt đã xem) `}
                            </div>
                            <h3>
                                {formatter(40000)};
                            </h3>
                            <p>
                            ĐT SHOP là một trong 
                            những hệ thống cửa hàng hoa quả nhập khẩu ở 
                            TP HCM cung cấp cho quý khách những loại rau củ quả vô cùng chất lượng
                            từ những trang trại được trồng hữu cơ
                            </p>
                            <ul>
                                <li>
                                    <b>Tình trạng: </b>
                                    <span>Còn hàng</span>
                                </li>
                                <li>
                                    <b>Số lượng: </b>
                                    <span>20</span>
                                </li>
                                <li>
                                    <b>Chia sẻ: </b>{" "}
                                    <span>
                                        <AiOutlineCopy/>
                                        <AiOutlineLinkedin/>
                                        <AiOutlineFacebook/>
                                    </span>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="product__detail__tab">
                        <h4>
                            Thông tin chi tiết
                        </h4>
                            <div>
                            <ul>
                            <li>
                                <p>
                                Rau củ chứa rất nhiều vitamin và chất dinh dưỡng nên mang đến
                                rất nhiều lợi ích cho sức khỏe con người.&nbsp;
                                </p>
                            </li>
                            <li>
                                <p>Hỗ trợ giảm cân</p>
                            </li>
                            <li>
                                <p>
                                Giảm nguy cơ mắc các bệnh về tim mạch, béo phì và cả ung thư
                                </p>
                            </li>
                            <li>
                                <p>Tăng cường sức đề kháng của cơ thể</p>
                            </li>
                            <li>
                                <p>Cải thiện thị lực</p>
                            </li>
                            <li>
                                <p>Điều hòa đường huyết</p>
                            </li>
                            <li>
                                <p>Giảm cholesterol trong máu</p>
                            </li>
                            <li>
                                <p>Điều hòa huyết áp</p>
                            </li>
                            </ul>
                            <p>
                            <br />
                            <strong>Cách chọn rau củ tươi ngon</strong>
                            </p>
                            <ul>
                            <li>
                                <p>
                                Dựa vào hình dáng bên ngoài: Nên ưu tiên chọn các loại rau củ
                                có phần vỏ không có các vết sâu, cuống lá không bị nhũn, thâm
                                đen. Tránh chọn những loại quả có vẻ ngoài to tròn, căng lớn,
                                bởi đây có thể là những quả đã bị tiêm thuốc, không an toàn
                                cho sức khỏe.
                                </p>
                            </li>
                            <li>
                                <p>
                                Dựa vào màu sắc: Màu sắc của các loại rau củ thường tươi mới,
                                không có các vết xước, héo hay quá đậm màu. Các loại củ có màu
                                quá xanh hoặc quá bóng sẽ không hẳn là an toàn cho sức khỏe
                                người dùng.
                                </p>
                            </li>
                            <li>
                                <p>
                                Dựa vào mùi hương: Mùi hương tự nhiên của các loại rau củ sẽ
                                là mùi đặc trưng theo từng loại chứ không phải là mùi hắc,
                                nồng khó chịu. Nếu các loại củ bạn đang chọn có mùi hóa chất
                                hãy ngưng sử dụng ngay.
                                </p>
                            </li>
                            <li>
                                <p>
                                Dựa vào cảm nhận khi cầm: Những loại củ quả cầm chắc tay, kích
                                thước vừa phải, không quá to sẽ thường ngon hơn những loại to
                                lớn nhưng khối lượng nhẹ. Một số loại rau củ bạn chỉ nên chọn
                                những quả nhỏ, đều tay sẽ ngon hơn.
                                </p>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-title">
                        <h2>Sản phẩm tương tự</h2>
                    </div>
                    <div className="row">
                        {featureProducts.all.products.map((item,key) => (
                            <div key={key} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <ProductCard img={item.img} name={item.name} price={item.price}/>
                            </div>
                        ))}
                    </div>
                </div>
        </>
    );
};
export default memo(ProductDetailPage);