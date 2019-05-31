import React from 'react';
import './header-component.css';
class HeaderComp extends React.Component {
    render () {
        return (
            <div className="main-header">
                <ul>
                    <li>Trang Chủ</li>
                    <li>Sản Phẩm</li>
                    <li>Nông Trại</li>
                    <li>Tin Tức</li>
                    <li>Liên Hệ</li>
                </ul>
            </div>
        )
    }
}

export default HeaderComp