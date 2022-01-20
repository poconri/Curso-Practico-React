import React from "react";
import '../styles/MyAccountMenu.scss';

const MyAccountMenu = () => {
    return (
        <div class="desktop-menu">
            <ul>
                <li>
                    <a href="/" class="title">My orders</a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>
    );
}

export default MyAccountMenu;