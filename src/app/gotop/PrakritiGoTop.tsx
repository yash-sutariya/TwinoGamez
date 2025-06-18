"use client";
// eslint-disable-next-line @next/next/no-img-element

import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import '../../css/gcs.css';
import '../../css/media.css';
import "../../css/prakriti_by_jiya/style.css";
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faAnglesUp } from '@fortawesome/free-solid-svg-icons';

export default function PrakritiGoTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth: "easeInOutQuint" 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="prakriti-go-top" style={{ display: isVisible ? 'block' : 'none' }} onClick={scrollToTop}>
      {/* <p className="go-top-text"><i className="fas fa-arrow-up"></i></p> */}
      <p className="go-top-text"><i style={{padding: '4px 12px'}}><FontAwesomeIcon icon={faAnglesUp} /></i></p>
    </div>
  );
}
