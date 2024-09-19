
import { memo, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./style.scss";
import "utils/formater";
import { AiOutlineDownCircle, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineMenu, AiOutlinePhone, AiOutlineShoppingCart, AiOutlineUpCircle, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/formater";
import { ROUTERS } from "utils/router";
import{BiUser} from  "react-icons/bi";
import{MdEmail} from  "react-icons/md";
export const categories = [
    "Thịt tươi",
    "Rau củ",
    "Nước trái cây",
    "Trái cây",
    "Hải sản"
];
const Header =()=>{
    const location = useLocation();
    const[isShowHamburger,setShowHamburger]=useState(false);
    const[isHome,setIsHome]=useState(location.pathname.length <= 1);
    const[isShowCategories,setShowCategories]=useState(isHome);
    const [menus,setMenus] = useState(
        [
            {
                name: "Trang chủ",
                path: ROUTERS.USER.HOME,
            },
            {
                name: "Cửa hàng",
                path: ROUTERS.USER.PRODUCTS,
            },
            {
                name: "Sản phẩm",
                path: ROUTERS.USER.PRODUCT,
                isShowSubmenu: false,
                child: [
                    {
                        name: "Thịt",
                        path: "",
                    },
                    {
                        name: "Rau củ",
                        path: "",
                    },
                    {
                        name: "Thức ăn nhanh",
                        path: "",
                    },                   
                ]
            },
            {
                name: "Bài viết",
                path: "",
            },
            {
                name: "Liên hệ",
                path: "",
            },
        ]
    )
    
    useEffect( () => {
        const isHome = location.pathname.length <= 1;
        setIsHome(isHome);
        setShowCategories(isHome);
    },[location])
    return (
        <>
        <div className={  `hamburger__menu__overlay ${isShowHamburger ? "active" : ""}`} onClick={()=>setShowHamburger(false)}/>
        <div/>
        <div className={`hamburger__menu__wrapper ${isShowHamburger ? "show" : ""}`}>
            <div className="header__logo">
                <h1>ĐT SHOP</h1>
            </div>
            <div className="hamburger__menu__cart">
                <ul>
                    <li>
                        <Link to={""}>
                            <AiOutlineShoppingCart/>
                            <span>1</span>
                        </Link>
                    </li>
                </ul>
                <div className="header__cart_price">
                    Giỏ hàng <span>{formatter(1001230)}</span>
                </div>
            </div>
            <div className="hamburger__menu__widget">
                <div className="header__top__right__auth">
                    <Link to={""}>
                        <BiUser/> Đăng nhập
                    </Link>
                </div>
            </div>
            <div className="hamburger__menu__nav">
                <ul>
                    {menus.map((menu,menuKey) => (
                        <li key={menuKey} to={menu.path}>
                        <Link to={menu.path}
                            onClick={() => {
                                const newMenus = [...menus];
                                newMenus[menuKey].isShowSubmenu=!newMenus[menuKey].isShowSubmenu;
                                setMenus(newMenus);
                            }}
                        >
                            {menu.name}
                            {menu.child && (menu.isShowSubmenu ? (<AiOutlineDownCircle/>)
                            : (<AiOutlineUpCircle/>))} 
                        </Link>
                        {menu.child && 
                        (<ul className={`header__menu__dropdown ${menu.isShowSubmenu ? 
                        "show__submenu" : ""}`}>
                            {menu.child.map((childItem,childKey) => (
                            <li key={`${childKey}`}>                  
                                <Link to={childItem.path}>{childItem.name}</Link>
                            </li>
                        ))}
                        </ul>
                        )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="header__top__right__social">   
                <Link to={""}><AiOutlineFacebook/></Link>                        
                <Link to={""}><AiOutlineInstagram/></Link>                            
                <Link to={""}><AiOutlineLinkedin/></Link>   
                <Link to={""}><AiOutlineUser/></Link>
            </div>
            <div className="hamburger__menu__contact">
                <ul>
                    <li>
                        <MdEmail/>
                        <i className="fa-fa-envelop">trongleviet05@gmail.com</i>                        
                    </li>
                    <li>Miễn phí đơn từ {formatter(200000)}</li>
                </ul>

            </div>
        </div>
            <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 header__top_left"> 
                                <ul >
                                    <li ><AiOutlineMail/>
                                        trongleviet05@gmail.com
                                    </li>
                                    <li>
                                        Miễn phí ship hàng đơn từ {formatter(200000)}
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 header__top_right">
                                <ul>
                                    <li>                      
                                    <Link to={""}><AiOutlineFacebook/></Link>                        
                                    </li>
                                    <li>
                                    <Link to={""}><AiOutlineInstagram/></Link>                            
                                    </li>
                                    <li>
                                    <Link to={""}><AiOutlineLinkedin/></Link>   
                                    </li>
                                    <li>
                                    <Link to={""}><AiOutlineUser/></Link>
                                    <span >Đăng nhập</span>
                                    </li>
                                </ul>
                            </div>
                        </div>  
                    </div>            
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3" >
                    <div className="header__logo">
                        <h1>Đạt Trọng SHOP</h1>

                    </div>
                    </div>

                    <div className="col-lg-6">
                        <nav className="header__menu">
                           <ul>
                            {
                                menus?.map((menu , menuKey)=>(
                                    <li key={menuKey} className={menuKey === 0 ?"active":""}>
                                        <Link to={menu?.path}>
                                            {menu?.name}
                                        </Link>
                                        {
                                            menu.child&&(
                                                <ul className="header__menu__dropdown">
                                                    {
                                                        menu.child.map((childItem,childKey)=>(
                                                            <li key={`${menuKey}-${childKey}`}>                                                         
                                                                <Link to={childItem.path}>{childItem.name}</Link>
                                                            </li>
                                                    ))
                                                    }
                                                </ul>
                                    
                                            )
                                        }
                                    </li>
                                ))                     
                            }
                           </ul>
                        </nav>
                    </div>    
                    <div className="col-lg-3">
                    <div className="header__cart">
                        <div className="header__cart__price">
                        <span>
                         {formatter(1000000)}
                        </span>
                        </div>
                        
                        <ul>
                            <li>
                                <Link to="#">
                                    <AiOutlineShoppingCart/>
                                    <span>5</span>
                                </Link>
                            </li>
                        </ul>  
                    </div>
                    <div className="hamburger__open">
                        <AiOutlineMenu
                            onClick={()=>{
                                setShowHamburger(true);
                        }} />
                    </div>
                    </div>
                </div>              
            </div>
            <div className="container">
             <div className="row hero__categories_container">
                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 hero__categories" >
                    <div className="hero__categories_all " onClick={()=>setShowCategories(!isShowCategories)}>
                        <AiOutlineMenu/>
                        Danh sách sản phẩm 
                    </div>
                    {isShowCategories &&
                    (<ul className={isShowCategories ? "" : "hidden"}>     
                        {
                            categories.map((category,keycate) => (
                                <li key={keycate}>
                                <Link to={ROUTERS.USER.PRODUCTS}>{category}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    )
                    }
               
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 hero__search_container">
                    <div className="hero__search">
                        <div className="hero__search_form">
                            <form>
                                <input type="text" placeholder="Bạn đang tìm gì">   
                                </input>
                                <button type="submit">
                                    Tìm kiếm
                                </button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <AiOutlinePhone/>
                            </div>
                            <div className="hero__search__phone__text">
                                <p>1234567890</p>
                                <span>Hỗ trợ 24.7</span>
                            </div>
                        </div>
                    </div>
                    {isHome &&
                    <div className="hero__item">
                        <div className="hero__text">
                            <span> Trái cây tươi</span>
                            <h2>Rau quả <br/> sạch 100%</h2>
                            <p>Miễn phí giao hàng tận nơi</p>
                            <Link to="" className="primary-btn">
                                Mua ngay
                            </Link>
                        </div>
                    </div>
                    }
                </div>
             </div>
            </div>

        </>
      
    );
};
export default memo(Header);
