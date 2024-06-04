import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Tournaments.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Tournaments extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 2
        };

        return (
            <div className="section-tournament">

                <div className="tournament-content">
                    <div className="court-header">
                        <span className="title-court"> GIẢI ĐẤU NỔI BẬT</span>
                        <button className="button-court"> Xem thêm </button>
                    </div>

                    <Slider {...settings}>
                        <div className="img-customize1">
                            <div className="img-court1" /> 
                            <div>ĐẠI HỌC CNTT</div>
                        </div>
                        <div className="img-customize2">
                            <div className="img-court2" /> 
                            <div>GIẢI CẦU LÔNG ABZ</div>
                        </div>
                        <div className="img-customize3">
                            <div className="img-court3" /> 
                            <div>GIẢI CẦU LÔNG HẢI HIỀN</div>
                        </div>
                        <div className="img-customize4">
                            <div className="img-court4" /> 
                            <div>GIẢI CẦU LÔNG YONEX-SUNRISE</div>
                        </div>
                        <div className="img-customize5">
                            <div className="img-court5" /> 
                            <div>GIẢI CẦU LÔNG PHONG TRÀO HCM</div>
                        </div>
                        <div className="img-customize6">
                            <div className="img-court6" /> 
                            <div>GIẢI CẦU LÔNG TDH</div>
                        </div>
                    </Slider>

                </div>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tournaments);
