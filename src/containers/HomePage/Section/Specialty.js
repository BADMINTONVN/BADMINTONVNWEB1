import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Specialty extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 2
        };

        return (
            <div className="section-specialty">

                <div className="specialty-content">
                    <div className="court-header">
                        <span className="title-court"> SÂN CẦU NỔI BẬT</span>
                        <button className="button-court"> Xem thêm </button>
                    </div>

                    <Slider {...settings}>
                        <div className="img-customize1">
                            <div className="img-court1" /> 
                            <div>SÂN CẦU LÔNG TADA</div>
                        </div>
                        <div className="img-customize2">
                            <div className="img-court2" /> 
                            <div>SÂN NGUYỄN THƯỢNG HIỀN</div>
                        </div>
                        <div className="img-customize3">
                            <div className="img-court3" /> 
                            <div>SÂN CẦU LÔNG HOA SEN</div>
                        </div>
                        <div className="img-customize4">
                            <div className="img-court4" /> 
                            <div>SÂN CẦU LÔNG CHÂU DƯƠNG</div>
                        </div>
                        <div className="img-customize5">
                            <div className="img-court5" /> 
                            <div>SÂN CẦU LÔNG SƠN TẠ</div>
                        </div>
                        <div className="img-customize6">
                            <div className="img-court6" /> 
                            <div>SÂN CẦU LÔNG TRƯỜNG CHINH</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
