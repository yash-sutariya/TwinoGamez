import React, { useEffect, useState } from 'react'
import CustomModal from '../popup/login';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MobileUserInfo = () => {
    const redirectDir = '';

    const [userInfo, setUserInfo] = useState(null);
    const [isLoginClicked, setIsLoginClicked] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleLoginClick = () => {
        setIsLoginClicked(true);
    };

    const logout = () => {
        localStorage.removeItem('GCS_user_authorization');
        localStorage.removeItem('user_info');
        setUserInfo(null);

        toast.success('Successfully Logout!');
    };

    const http_getProfile = async () => {
        try {
            const getData = JSON.parse(localStorage.getItem("user_info"))
            setUserInfo(getData);
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
                <ul>
                    <li className='mb-1' style={{ cursor: 'pointer' }}>
                        <a href={`${redirectDir}/user/profile`}>Hi, {userInfo.lastName} <i className="far fa-user"></i> </a>
                    </li>
                    <li>
                        <a href={`${redirectDir}/user/profile`}><i className="far fa-user"></i> Profile</a>
                    </li>
                    <li onClick={logout}>
                        <a href="#"><i className="fas fa-sign-out-alt"></i> Log Out</a>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <a onClick={openModal} style={{ cursor: 'pointer' }}> Login <i className="far fa-user ml-1"></i></a>
                        {showModal && <CustomModal onClose={closeModal} />}
                    </li>
                </ul>
            )}
        </div>
    );
};

export default MobileUserInfo;
