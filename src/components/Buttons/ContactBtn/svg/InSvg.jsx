import React from "react";

const InSvg = ({colorStyle}) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9963 15V14.9994H15V9.49814C15 6.80689 14.4207 4.73376 11.2744 4.73376C9.76191 4.73376 8.74691 5.56377 8.33254 6.35064H8.28879V4.98501H5.30566V14.9994H8.41191V10.0406C8.41191 8.73502 8.65941 7.47252 10.2763 7.47252C11.8694 7.47252 11.8932 8.96252 11.8932 10.1244V15H14.9963Z"
        fill="#EBEBEB"
        className={colorStyle}
      />
      <path d="M0.24762 4.9856H3.35762V15H0.24762V4.9856Z" fill="#EBEBEB" className={colorStyle} />
      <path
        d="M1.80125 0C0.806875 0 0 0.806875 0 1.80125C0 2.79563 0.806875 3.61938 1.80125 3.61938C2.79563 3.61938 3.6025 2.79563 3.6025 1.80125C3.60188 0.806875 2.795 0 1.80125 0V0Z"
        fill="#EBEBEB"
        className={colorStyle}
      />
    </svg>
  );
};

export default InSvg;
