import React from 'react';
import ReadMoreReact from 'read-more-react';

const Isi = (props) => {
    return (
        <div>
            <div id="menu">
                <div id="menu-isi">
                    <ul>
                        <li><a href="#">{props.menu11}</a></li>
                        <li><a href="#">{props.menu12}</a></li>
                        <li><a href="#">{props.menu13}</a></li>
                        <li><a href="#">{props.menu14}</a></li>
                        <li><a href="#">{props.menu15}</a></li>
                        <li><a href="#">{props.menu16}</a></li>
                        <li><a href="#">{props.menu17}</a></li>
                        <li><a href="#">{props.menu18}</a></li>
                        <li><a href="#">{props.menu19}</a></li>
                        <li><a href="#">{props.menu110}</a></li>
                        <li><a href="#">{props.menu111}</a></li>
                        <li><a href="#">{props.menu112}</a></li>
                        <li><a href="#" id="sale">{props.menu113}</a></li>
                    </ul>
                </div>
            </div>
            <div id="menu2">
                <ul>
                    <li><img src={props.menu21} id="persen" /><a href="#">PRODUK ORIGINAL & TERJAMIN</a></li>
                    <li><img src={props.menu22} /><a href="#">RIBUAN FASHION BRAND</a></li>
                    <li><img src={props.menu23} /><a href="#">GRATIS PENGEMBALIAN</a></li>
                    <li><img src={props.menu24} /><a href="#">PERTANYAAN ?</a></li>
                </ul>
                <img src={props.menu25} href="#" id="hp" />
            </div>
            <div id="content">
                <div id="gambar-besar">
                    <img src={props.content1} href="#" />
                </div>
                <div id="bawah-gambar-besar">
                    <img src={props.content2} href="#" />
                </div>
                <div id="gambarke2">
                    <img src={props.content3} />
                </div>
                <div id="gambar-bank">
                    <img src={props.content4} />
                </div>

                <div id="brands">
                    <h1>Featured Brands</h1>
                    <div id="logo-brand">
                        <img href="#" src={props.brands1} />
                        <img href="#" src={props.brands2} />
                        <img href="#" src={props.brands3} />
                        <img href="#" src={props.brands4} />
                        <img href="#" src={props.brands5} />
                        <img href="#" src={props.brands6} />
                        <img href="#" src={props.brands7} />
                        <img href="#" src={props.brands8} />
                        <img href="#" src={props.brands9} />
                        <img href="#" src={props.brands10} />
                        <img href="#" src={props.brands11} />
                        <img href="#" src={props.brands12} />
                        <img href="#" src={props.brands13} />
                        <img href="#" src={props.brands14} />
                    </div>
                </div>
                <div id="model">
                    <div id="judul-model">
                        <h1>New This Week</h1>
                    </div>
                    <div id="modelnya">
                        <div id="pertama">
                            <img src={props.model1} />
                            <h5>MODEL CEWE</h5>
                            <p><ReadMoreReact className="readmore" text={props.modelp} min={10} ideal={20} max={25}
                                readMoreText="Read More...."></ReadMoreReact> </p>
                        </div>
                        <div id="kedua">
                            <img src={props.model2} />
                            <h5>MODEL BATIK</h5>
                            <p><ReadMoreReact className="readmore" text={props.modelp} min={10} ideal={20} max={25}
                                readMoreText="Read More...."></ReadMoreReact></p>
                        </div>
                        <div id="ketiga">
                            <img src={props.model3} />
                            <h5>MODEL LAKI-LAKI</h5>
                            <p><ReadMoreReact className="readmore" text={props.modelp} min={10} ideal={20} max={25}
                                readMoreText="Read More...."></ReadMoreReact></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                CopyRight &copy; Sofiezar Ricky
            </div>
        </div>
    );
}

export default Isi;