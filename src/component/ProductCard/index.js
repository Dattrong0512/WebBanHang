import { memo } from "react";
import './style.scss'
import { ROUTERS } from "utils/router";
const { AiOutlineEye, AiOutlineShoppingCart } = require("react-icons/ai");
const { Link, generatePath } = require("react-router-dom");
const { formatter } = require("utils/formater");

const ProductCard = ({img, name, price }) =>{
    return(
    <>
        <div className="featured__item pl-pr-10">
            <div className="featured__item__pic" style={{
                backgroundImage: `url(${img})` 
            }}>
            <ul className="featured__item__pic__hover">
                <li>
                    <AiOutlineEye/>
                    
                </li>
                <li>
                    <AiOutlineShoppingCart/>
                </li>
            </ul>
            </div>
            <div className="featured__item__text">
                <h6>
                    <Link to={generatePath(ROUTERS.USER.PRODUCT,{id: 1})}>{name}</Link>
                </h6>
                <h5>{formatter(price)}</h5>
            </div>
        </div>
    </>
    );
};
export default memo(ProductCard);