import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import style from "./style.module.css";
import {PhoneFilled} from '@ant-design/icons'
import { CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const Home = () => {
  return (
    <>
      <header className={style.header}>
        <nav>
          <ul className={style.ul_nav}>
            {[
              {
                label: <>Điểm lấy máu</>,
                url: "#",
              },
              {
                label: <>Xem kết quả xét nghiệm</>,
                url: "#",
              },
              {
                label: <>Ứng dụng dành cho đối tác</>,
                url: "#",
              },
              {
                label: <>Hỗ trợ</>,
                url: "#",
              },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.url}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link to="#"><PhoneFilled  /> 0908.710.710</Link>
            </li>
          </ul>
        </nav>
        <div className={style.container_nav_2}>
          <img src="MemLogo_315_Logo.png" alt="#" />
          <div className={style.menu}>
            <ul>
              {[
                {
                  label: "Về 315",
                  url:'#'
                },
                {
                  label: "Xét nghiệm",
                  url:'#'
                },
                {
                  label: "Kết quả xét nghiệm",
                  url:'#'
                },
                {
                  label: "Khách hàng",
                  url:'#'
                },
                {
                  label: "Hỗ trợ",
                  url:'#'
                },
              ].map((items)=><li><Link to={items.url}>{items.label}</Link></li>)}
            </ul>
          </div>
        </div>
      </header>
      <main>
        <div className={style.main}>
              <h2>Kết Quả Trực Tuyến</h2>
              <p>Dành cho phòng khám, bệnh viện và bệnh nhân</p>
              <p>Chào mừng đến với <span style={{color:'#00afef'}}>Hệ Thống Phòng Khám 315.</span> Để tra cứu <i>Kết Quả Xét Nghiệm Trực Tuyến</i>, quý khách vui lòng nhập vào hệ thống.</p>

        </div>
        <div className={style.container_form}>
        <form className={style.form}>
       <p className={style.form_title}>Đăng nhập</p>
        <div className={style.input_container}>
        <span>
            Tài khoản
          </span>
          <input  placeholder="Tài khoản"/>
          
      </div>
      <div className={style.input_container}>
      <span>
            Mật Khẩu
          </span>
          <input type="password" placeholder="Mật khẩu"/>
        </div>
         <button type="submit" className={style.submit}>
        Đăng nhập
      </button>
      <p className={style.signup_link}>
        <a href="#">Quên mật khẩu ?</a>
      </p>
   </form>
        </div>
      </main>
      <FloatButton
      shape="circle"
      type="primary"
      style={{
        right: 94,
      }}
      icon={<CustomerServiceOutlined />}
    />
    </>
  );
};

export default Home;
