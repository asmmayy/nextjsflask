import link from "@/config";
import { IMAGES } from "@/shared/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ICONS } from "@/shared/constants";

const CustomerReviews = () => {
    const [defaultData, setDefaultData] = useState([])

    // const [reviews, setReviews] = useState([])
    const getReviews = async () => {
        try {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            // fetch(`${link}/reviews`, requestOptions)
            fetch(`https://flaskapinextjs.vercel.app/reviews`, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    setDefaultData(result)
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error);
            toast.error('Qualcosa è andato storto, riprova più tardi.')
            // setIsLoading(false);
        } finally {
            // setIsLoading(false);
        }
    }
    useEffect(() => {
        console.log(link)
        getReviews()
    }, [])


    var settings = {
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 12000,
        autoplaySpeed: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id='customerReview'>
            <Slider slickPlay {...settings}>
                {defaultData.map((review, index) => {
                    const nameWithoutEmail = review.user_name.split('@')[0];
                    const nameWithoutNumbers = nameWithoutEmail.replace(/\d+/g, ''); // Remove numeric characters
                    return (

                        <div className="review_item" key={index} style={{ height: "157px" }}>
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-2/3 text-left px-4 table">
                                    <div className="profile_img_div display_table_cell align-middle">
                                        <Image alt="" width="100%" height="100%" src={ review.gender == "Male" ? ICONS.male_icon : ICONS.female_icon} />

                                    </div>
                                    <div className="profile_text_div border-0 display_table_cell align-middle">
                                        <div className="text-454545 reviews_username">{nameWithoutNumbers}</div>
                                    </div>
                                </div>
                                <div className="md:w-1/3 text-center pt-4 px-4">
                                    <div className="reviews_verified">
                                        <span className="verify_text">VERIFIED</span>
                                    </div>
                                </div>
                            </div>
                            <div className="!pt-2">
                                <div className="paragraph_text text-left text-707070">{review.message}</div>
                            </div>
                        </div>

                    )

                })}


            </Slider>



        </div>
    );
};

export default CustomerReviews;