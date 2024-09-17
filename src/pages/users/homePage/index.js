
import { memo } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./style.scss";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import cat1Img from "assets/users/images/categories/anhcamtuoi.png";
import cat2Img from "assets/users/images/categories/anhraucutuoi.jpg";
import cat3Img from "assets/users/images/categories/anhsuahop.jpg";
import cat4Img from "assets/users/images/categories/hoaquakho.jpg";
import cat5Img from "assets/users/images/categories/thibo.jpg";
import feature1Img from "assets/users/images/featured/feature-1.jpg";
import feature2Img from "assets/users/images/featured/feature-2.jpg";
import feature3Img from "assets/users/images/featured/feature-3.jpg";
import feature4Img from "assets/users/images/featured/feature-4.jpg";
import feature5Img from "assets/users/images/featured/feature-5.jpg";
import feature6Img from "assets/users/images/featured/feature-6.jpg";
import feature7Img from "assets/users/images/featured/feature-7.jpg";
import feature8Img from "assets/users/images/featured/feature-8.jpg";
import banner1Img from "assets/users/images/banner/banner-1.png";
import banner2Img from "assets/users/images/banner/banner-2.png";
import ProductCard from "component/ProductCard";
const HomePage =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const sliderItems = [
        {
            bgImg: cat1Img,
            name: "Cam tươi"
        },
        {
            bgImg: cat2Img,
            name: "Hoa quả khô"
        },
        {
            bgImg: cat3Img,
            name: "Rau củ tươi"
        },
        {
            bgImg: cat4Img,
            name: "Sữa hộp"
        },
        {
            bgImg: cat5Img,
            name: "Thịt bò"
        }
    ];
    const featureProducts={
        all:{
            title: "Toàn bộ",
            products:[
                {
                    img:feature1Img,
                    name:"Chuối",
                    price: 20000
                },
                {
                    img:feature2Img,
                    name:"Dưa hấu",
                    price: 44000
                },
                {
                    img:feature3Img,
                    name:"Xoài",
                    price: 70000
                },
                {
                    img:feature4Img,
                    name:"Thịt bò nạc",
                    price: 100000
                },
                {
                    img:feature5Img,
                    name:"Táo Úc",
                    price: 46000
                },
                {
                    img:feature6Img,
                    name:"Ôỉ",
                    price: 25000
                },
                {
                    img:feature7Img,
                    name:"Nho",
                    price: 120000
                },
                {
                    img:feature8Img,
                    name:"Hamburger",
                    price: 20000
                }
            ]
        },
        freshMeal:{
            title: "Thịt tươi",
            products:[
                {
                    img:feature4Img,
                    name:"Thịt bò nạc",
                    price: 20000
                }
            ]
        },
        fruits:{
            title: "Trái cây",
            products:[
                {
                    img:feature1Img,
                    name:"Chuối",
                    price: 20000
                },
                {
                    img:feature2Img,
                    name:"Dưa hấu",
                    price: 44000
                },
                {
                    img:feature3Img,
                    name:"Xoài",
                    price: 70000
                },
                {
                    img:feature5Img,
                    name:"Táo Úc",
                    price: 46000
                },
                {
                    img:feature6Img,
                    name:"Ôỉ",
                    price: 25000
                },
                {
                    img:feature7Img,
                    name:"Nho",
                    price: 120000
                }
            ]
        },
        fastfood:{
            title: "Thức ăn nhanh",
            products:[
                {                
                    img:feature8Img,
                    name:"Hamburger",
                    price: 20000
                }
            ]
        },
    }
    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];
  
        Object.keys(data).forEach((key,index)=>{
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);   
            const tabPanel = [];
            data[key].products.forEach((item,j) =>{
                tabPanel.push(
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={j}>
                        <ProductCard name={item.name} img={item.img} price={item.price}/>
                    </div>
                );    
            });
            tabPanels.push(tabPanel);
        });
        return (
            <Tabs>
                <TabList>{tabList}</TabList>      
                {
                    tabPanels.map((item,key)=>(
                        <TabPanel key={key}>
                        <div className="row">
                            {item}
                        </div>
                        </TabPanel>
                    ))
                }

            </Tabs>
        )
    }
    return (
        <>
        {/*Categories Begin*/}
        <div className="container container__categories_slider">
            <div>
                <Carousel responsive={responsive} className="categories_slider">
            {sliderItems.map((item, key)=>
                (
                <div className="categories_slider_item" style={{backgroundImage:`url(${item.bgImg})`}}
                key={key}>
                <p>{item.name}</p>
                </div>
            ))}
                </Carousel>
            </div>
        {/*Categories End*/}
        </div>
        {/* Feature Begin */}
        <div className="container">
            <div className="featured">
                <div className="section-title">
                <h2>Sản phẩm nổi bật</h2>
                </div>
                {renderFeaturedProducts(featureProducts)}
            </div>

        </div>
        {/* Feature End */}
        {/* Featured Begin */}
        <div className="container">
            <div className="banner">
                <div className="banner__pic">
                    <img src={banner1Img} alt="banner"/>
                </div>
                <div className="banner__pic">
                    <img src={banner2Img} alt="banner"/>
                </div>
            </div>

        </div>
        {/* Featured End */}
        </>
    );
};
export default memo(HomePage);