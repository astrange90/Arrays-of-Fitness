// Info.jsx
import React from 'react';

function Info() {
    return (
        <section id="about" className="info_section layout_padding2">
            <div className="container">
                <div className="info_items">
                    <a href="">
                        <div className="item ">
                            <div className="img-box box-1">
                                <img src="" alt="" />
                            </div>
                            <div className="detail-box">
                                <p>
                                    Los Angeles, CA
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="item ">
                            <div className="img-box box-2">
                                <img src="" alt="" />
                            </div>
                            <div className="detail-box">
                                <p>
                                    (555) 555-5555
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="item ">
                            <div className="img-box box-3">
                                <img src="" alt="" />
                            </div>
                            <div className="detail-box">
                                <p>
                                    Arrays.Of.Fitness@AOF.com
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Info;
