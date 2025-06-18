import React, { useEffect, useState } from 'react';
import LoginModal from '../popup/login';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserInfo = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const logout = () => {
        localStorage.removeItem('GCS_user_authorization');
        localStorage.removeItem('user_info');
        setUserInfo(null);
        toast.success('Successfully Logout!');
    };

    const toggleUserMenu = () => {
        setIsUserMenuVisible(!isUserMenuVisible);
    };

    const http_getProfile = async () => {
        try {
            const response = JSON.parse(localStorage.getItem("user_info"));
            setUserInfo(response);
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    useEffect(() => {
        http_getProfile();
    }, []);

    return (
        <div>
            {userInfo ? (
                <div>
                    <div className='mb-1' onClick={toggleUserMenu} style={{ cursor: 'pointer' }}>
                        Hi, {userInfo.first_name} <i className="far fa-user"></i>
                    </div>
                    {isUserMenuVisible && (
                        <div className="user-menu">
                            <ul style={{ display: 'block' }}>
                                <li>
                                    <a href={`/account/profile`}><i className="far fa-user"></i> Profile</a>
                                </li>
                                <li onClick={logout}>
                                    <a href="#"><i className="fas fa-sign-out-alt"></i> Log Out</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <button onClick={openModal} style={{ cursor: 'pointer' }}> Login <i className="far fa-user ml-1"></i></button>
                    {showModal && <LoginModal onClose={closeModal} />}
                </div>
            )}
        </div>
    );
};

export default UserInfo;
