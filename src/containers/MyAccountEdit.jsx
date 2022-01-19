import React from "react";
import "../styles/MyAccountEdit.scss";

const MyAccountEdit = () => {
    return (
        <div className="login">
            <div className="form-container">
                <h1 className="title">My account</h1>
                <form action="/" className="form">
                    <div>
                        <label for="name" className="label">Name</label>
                        <p class="value">Camila Yokoo</p>
                        <label for="email" className="label">Email</label>
                        <p class="value">camilayokoo@gmail.com</p>
                        <label for="password" className="label">Password</label>
                        <p className="value">*********</p>
                    </div>
                        <input type="submit" value="Edit" className="secondary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export default MyAccountEdit;