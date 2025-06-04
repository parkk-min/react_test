import './App.css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
    return (
        <>
            <Swiper style={{width: "400px", height: "300px"}}
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{clickable: true}}
                    navigation={true}
            >
                <SwiperSlide style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}><img src={"/img/africa1.jpg"} style={{width: "300px", height: "200px"}}/>
                </SwiperSlide>
                <SwiperSlide style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}><img src={"/img/africa2.jpg"} style={{width: "300px", height: "200px"}}/>
                </SwiperSlide>
                <SwiperSlide style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}><img src={"/img/africa3.jpg"} style={{width: "300px", height: "200px"}}/>
                </SwiperSlide>
            </Swiper>
        </>

    );
}

export default App;
