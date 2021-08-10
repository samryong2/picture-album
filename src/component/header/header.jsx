import React from 'react';
import styles from './header.module.css';

const Header = (props) => {


    return(
        <nav>
            <div>
                <h1>사진첩</h1>
            </div>

            <ul>
                <li>사진</li>
                <li>비디오</li>
            </ul>

            <div>
                <h1>로그인</h1>
            </div>
        </nav>
    );
};

export default Header;