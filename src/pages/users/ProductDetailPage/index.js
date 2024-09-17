
import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import cat1Img from "assets/users/images/categories/hoaquakho.jpg";
import cat2Img from "assets/users/images/categories/anhraucutuoi.jpg";
import cat3Img from "assets/users/images/categories/anhsuahop.jpg";
import { AiOutlineCopy, AiOutlineEye, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { formatter } from "utils/formater";
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
                            <img src={cat3Img} alt="product-pic"/>    
                            <div className="main">
                                {
                                    imgs.map((item,key) => (
                                        <img src={item} alt="product-pic" key={key}/> 
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-lg-6 product__detail__text">
                            <h2>
                                Sữa hộp
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
                            TP HCM cung cấp cho quý khách những dòng sữa vô cùng chất lượng
                            từ những con bò được nuôi hữu cơ
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
                </div>
        </>
    );
};
export default memo(ProductDetailPage);