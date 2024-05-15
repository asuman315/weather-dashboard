import React, { FC, ReactNode } from "react";
// this file contains icons
// you can get the icons from rhis site: // source https://iamvector.com/
// fill is set to currentColor to take the color of the parent div
// width and height is set to 100% to fit the parent div
// stroke is set to currentColor to take the color of the parent div if needed
// strokeWidth is changed to strokeWidth to avoid error
// stroke-lonejoin is changed to strokeLinejoin to avoid error
// strokeLinecap is changed to strokeLinecap to avoid error

export type IconSVGsProps = {
  [key: string]: JSX.Element;
};

export const iconSVGs: IconSVGsProps = {
  eyeSlashIcon: (
    <svg
      fill="currentColor"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M20.0980654,15.8909586 L18.6838245,14.4767177 C19.3180029,13.8356474 19.9009094,13.1592525 20.4222529,12.4831239 C20.5528408,12.3137648 20.673512,12.1521776 20.7838347,12 C20.673512,11.8478224 20.5528408,11.6862352 20.4222529,11.5168761 C19.8176112,10.7327184 19.1301624,9.94820254 18.37596,9.21885024 C16.2825083,7.1943753 14.1050769,6 12,6 C11.4776994,6 10.9509445,6.07352686 10.4221233,6.21501656 L8.84014974,4.63304296 C9.8725965,4.22137709 10.9270589,4 12,4 C14.7275481,4 17.3356792,5.4306247 19.76629,7.78114976 C20.5955095,8.58304746 21.3456935,9.43915664 22.0060909,10.2956239 C22.4045936,10.8124408 22.687526,11.2189945 22.8424353,11.4612025 L23.1870348,12 L22.8424353,12.5387975 C22.687526,12.7810055 22.4045936,13.1875592 22.0060909,13.7043761 C21.4349259,14.4451181 20.7965989,15.1855923 20.0980652,15.8909583 L20.0980654,15.8909586 Z M17.0055388,18.4197523 C15.3942929,19.4304919 13.7209154,20 12,20 C9.27245185,20 6.66432084,18.5693753 4.23371003,16.2188502 C3.40449054,15.4169525 2.65430652,14.5608434 1.99390911,13.7043761 C1.59540638,13.1875592 1.31247398,12.7810055 1.15756471,12.5387975 L0.812965202,12 L1.15756471,11.4612025 C1.31247398,11.2189945 1.59540638,10.8124408 1.99390911,10.2956239 C2.65430652,9.43915664 3.40449054,8.58304746 4.23371003,7.78114976 C4.6043191,7.42275182 4.9790553,7.0857405 5.35771268,6.77192624 L1.29289322,2.70710678 L2.70710678,1.29289322 L22.7071068,21.2928932 L21.2928932,22.7071068 L17.0055388,18.4197523 Z M6.77972015,8.19393371 C6.39232327,8.50634201 6.00677809,8.84872289 5.62403997,9.21885024 C4.86983759,9.94820254 4.18238879,10.7327184 3.57774714,11.5168761 C3.44715924,11.6862352 3.32648802,11.8478224 3.21616526,12 C3.32648802,12.1521776 3.44715924,12.3137648 3.57774714,12.4831239 C4.18238879,13.2672816 4.86983759,14.0517975 5.62403997,14.7811498 C7.71749166,16.8056247 9.89492315,18 12,18 C13.1681669,18 14.3586152,17.6321975 15.5446291,16.9588426 L14.0319673,15.4461809 C13.4364541,15.7980706 12.7418086,16 12,16 C9.790861,16 8,14.209139 8,12 C8,11.2581914 8.20192939,10.5635459 8.55381909,9.96803265 L6.77972015,8.19393371 Z M10.0677432,11.4819568 C10.0235573,11.6471834 10,11.8208407 10,12 C10,13.1045695 10.8954305,14 12,14 C12.1791593,14 12.3528166,13.9764427 12.5180432,13.9322568 L10.0677432,11.4819568 Z"
      ></path>
    </svg>
  ),
  eyeIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 5c-6.307 0-9.367 5.683-9.91 6.808a.435.435 0 0 0 0 .384C2.632 13.317 5.692 19 12 19s9.367-5.683 9.91-6.808a.435.435 0 0 0 0-.384C21.368 10.683 18.308 5 12 5z"
      ></path>
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></circle>
    </svg>
  ),
  searchIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="100%"
      height="100%"
      stroke="currentColor"
      data-testid="search-icon"
    >
      <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path>
    </svg>
  ),
  arrowDownTwoIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      id="arrow_down"
      data-name="arrow down"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="arrow-down-two-icon"
    >
      <defs>
        <clipPath id="clipPath">
          <rect
            id="Mask"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          ></rect>
        </clipPath>
      </defs>
      <g
        id="_20x20_arrow-back--grey"
        data-name="20x20/arrow-back--grey"
        transform="translate(0 24) rotate(-90)"
      >
        <rect
          id="Mask-2"
          data-name="Mask"
          width="24"
          height="24"
          fill="none"
        ></rect>
        <g
          id="_20x20_arrow-back--grey-2"
          data-name="20x20/arrow-back--grey"
          clipPath="url(#clipPath)"
        >
          <g id="Group_2" data-name="Group 2" transform="translate(8 7)">
            <path
              id="Rectangle"
              d="M0,6.586V0H6.586"
              transform="translate(0.686 5.157) rotate(-45)"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              strokeWidth="1.5"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  checkBoxRoundedCheckedIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      data-testid="check-box-rounded-checked-icon"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <circle cx="12" cy="12" r="10"></circle>
      </g>
    </svg>
  ),
  checkBoxRoundedUnCheckedIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeMiterlimit: 10,
        strokeWidth: "42px",
      }}
      data-testid="check-box-rounded-unchecked-icon"
    >
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"></path>
    </svg>
  ),
  refreshIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
      ></path>
    </svg>
  ),
  starIcon: (
    <svg
      fill="currentColor"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="star-icon"
    >
      <path
        fillRule="evenodd"
        d="M12.672.668a.75.75 0 00-1.345 0L8.27 6.865l-6.838.994a.75.75 0 00-.416 1.279l4.948 4.823-1.168 6.811a.75.75 0 001.088.791L12 18.347l6.117 3.216a.75.75 0 001.088-.79l-1.168-6.812 4.948-4.823a.75.75 0 00-.416-1.28l-6.838-.993L12.672.668z"
      ></path>
    </svg>
  ),
  breadCrumbIcon: (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 52 52"
      enableBackground="new 0 0 52 52"
    >
      <path
        d="M8.4,42c-0.6,0-1-0.4-1-1V10.9c0-0.6,0.4-1,1-1h8.1c0.4,0,0.9,0.2,1.2,0.5L29.3,25c0.4,0.5,0.4,1.3,0,1.9
	L17.6,41.5c-0.3,0.4-0.8,0.6-1.3,0.6L8.4,42z"
      ></path>
      <path
        d="M44.3,25L32.6,10.5c-0.5-0.6-1.4-0.8-2.1-0.2l-2.3,1.9c-0.7,0.5-0.8,1.5-0.2,2.1L37.5,26L28,37.8
	c-0.5,0.6-0.4,1.6,0.2,2.1l2.3,1.9c0.7,0.5,1.5,0.4,2.1-0.2L44.3,27C44.7,26.2,44.7,25.5,44.3,25z"
      ></path>
    </svg>
  ),
  squareCheckIcon: (
    <svg
      fill="currentColor"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      data-testid="square-check-icon"
    >
      <g data-name="Layer 2">
        <g data-name="checkmark-square-2">
          <rect
            width="24"
            height="24"
            transform="rotate(180 12 12)"
            opacity="0"
          ></rect>
          <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"></path>
          <path d="M14.7 8.39l-3.78 5-1.63-2.11a1 1 0 0 0-1.58 1.23l2.43 3.11a1 1 0 0 0 .79.38 1 1 0 0 0 .79-.39l4.57-6a1 1 0 1 0-1.6-1.22z"></path>
        </g>
      </g>
    </svg>
  ),
  exportIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3C10.9767 3 9.95334 3.11763 8.95043 3.35288C6.17301 4.00437 4.00437 6.17301 3.35288 8.95043C2.88237 10.9563 2.88237 13.0437 3.35288 15.0496C4.00437 17.827 6.17301 19.9956 8.95044 20.6471C10.9563 21.1176 13.0437 21.1176 15.0496 20.6471C17.827 19.9956 19.9956 17.827 20.6471 15.0496C20.8824 14.0466 21 13.0233 21 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M17 3H21M21 3V7.66667M21 3L15 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  checkDoneIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 15L8 17L12.5 12.5M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  xCloseIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  deleteIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8489 22.6922C11.5862 22.7201 11.3509 22.5283 11.3232 22.2638L10.4668 14.0733C10.4392 13.8089 10.6297 13.5719 10.8924 13.5441L11.368 13.4937C11.6307 13.4659 11.8661 13.6577 11.8937 13.9221L12.7501 22.1126C12.7778 22.3771 12.5873 22.614 12.3246 22.6418L11.8489 22.6922Z"
        fill="currentColor"
      ></path>
      <path
        d="M16.1533 22.6418C15.8906 22.614 15.7001 22.3771 15.7277 22.1126L16.5841 13.9221C16.6118 13.6577 16.8471 13.4659 17.1098 13.4937L17.5854 13.5441C17.8481 13.5719 18.0387 13.8089 18.011 14.0733L17.1546 22.2638C17.127 22.5283 16.8916 22.7201 16.6289 22.6922L16.1533 22.6418Z"
        fill="currentColor"
      ></path>
      <path
        clipRule="evenodd"
        d="M11.9233 1C11.3494 1 10.8306 1.34435 10.6045 1.87545L9.54244 4.37037H4.91304C3.8565 4.37037 3 5.23264 3 6.2963V8.7037C3 9.68523 3.72934 10.4953 4.67218 10.6145L7.62934 26.2259C7.71876 26.676 8.11133 27 8.56729 27H20.3507C20.8242 27 21.2264 26.6513 21.2966 26.1799L23.4467 10.5956C24.3313 10.4262 25 9.64356 25 8.7037V6.2963C25 5.23264 24.1435 4.37037 23.087 4.37037H18.4561L17.394 1.87545C17.1679 1.34435 16.6492 1 16.0752 1H11.9233ZM16.3747 4.37037L16.0083 3.50956C15.8576 3.15549 15.5117 2.92593 15.1291 2.92593H12.8694C12.4868 2.92593 12.141 3.15549 11.9902 3.50956L11.6238 4.37037H16.3747ZM21.4694 11.0516C21.5028 10.8108 21.3154 10.5961 21.0723 10.5967L7.1143 10.6285C6.86411 10.6291 6.67585 10.8566 6.72212 11.1025L9.19806 24.259C9.28701 24.7317 9.69985 25.0741 10.1808 25.0741H18.6559C19.1552 25.0741 19.578 24.7058 19.6465 24.2113L21.4694 11.0516ZM22.1304 8.7037C22.6587 8.7037 23.087 8.27257 23.087 7.74074V7.25926C23.087 6.72743 22.6587 6.2963 22.1304 6.2963H5.86957C5.34129 6.2963 4.91304 6.72743 4.91304 7.25926V7.74074C4.91304 8.27257 5.34129 8.7037 5.86956 8.7037H22.1304Z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  ),
  clockRefreshIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.4532 12.8928C20.1754 15.5027 18.6967 17.9484 16.2497 19.3612C12.1842 21.7084 6.98566 20.3155 4.63845 16.25L4.38845 15.817M3.54617 11.1071C3.82397 8.49723 5.30276 6.05151 7.74974 4.63874C11.8152 2.29153 17.0138 3.68447 19.361 7.74995L19.611 8.18297M3.49316 18.0659L4.22522 15.3339L6.95727 16.0659M17.0422 7.93398L19.7743 8.66603L20.5063 5.93398M11.9997 7.49995V12L14.4997 13.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  arrowUpRightIcon: (
    <svg
      fill="currentColor"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2">
        <g data-name="diagonal-arrow-right-up">
          <rect
            width="24"
            height="24"
            transform="rotate(180 12 12)"
            opacity="0"
          ></rect>

          <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"></path>
        </g>
      </g>
    </svg>
  ),
  dotIcon: (
    <svg
      fill="currentColor"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 18a6 6 0 100-12 6 6 0 000 12z"></path>
    </svg>
  ),
  supportIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
        fill="currentColor"
      ></path>
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
      <path
        d="M12 14C12 13.8333 12 13.6667 12 13.5C12 13.5 12 12 14 11C16 10 15.5 7 12.5 7C9.5 7 9.5 9.5 9.5 9.5V10"
        stroke="currentColor"
        strokeWidth="2"
      ></path>
    </svg>
  ),
  arrowDownIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C12.5523 4 13 4.44772 13 5V16.5858L17.2929 12.2929C17.6834 11.9024 18.3166 11.9024 18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071L12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071L5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929C5.68342 11.9024 6.31658 11.9024 6.70711 12.2929L11 16.5858V5C11 4.44772 11.4477 4 12 4Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  squareIcon: (
    <svg
      fill="currentColor"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="0.1"
      data-testid="square-icon"
    >
      <path d="M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5zm3 15c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v10z"></path>
    </svg>
  ),
  arrowLeftIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  filterIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 -1 12 12"
      id="meteor-icon-kit__regular-filter-s"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6C2.44772 6 2 5.5523 2 5C2 4.4477 2.44772 4 3 4H9C9.5523 4 10 4.4477 10 5C10 5.5523 9.5523 6 9 6H3zM1 2C0.44772 2 0 1.55228 0 1C0 0.44772 0.44772 0 1 0H11C11.5523 0 12 0.44772 12 1C12 1.55228 11.5523 2 11 2H1zM5 10C4.4477 10 4 9.5523 4 9C4 8.4477 4.4477 8 5 8H7C7.5523 8 8 8.4477 8 9C8 9.5523 7.5523 10 7 10H5z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  listIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 7.5C4.32843 7.5 5 6.82843 5 6C5 5.17157 4.32843 4.5 3.5 4.5C2.67157 4.5 2 5.17157 2 6C2 6.82843 2.67157 7.5 3.5 7.5Z"
        fill="currentColor"
      ></path>
      <path
        d="M8 5C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H8Z"
        fill="currentColor"
      ></path>
      <path
        d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H8Z"
        fill="currentColor"
      ></path>
      <path
        d="M7 18C7 17.4477 7.44772 17 8 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H8C7.44772 19 7 18.5523 7 18Z"
        fill="currentColor"
      ></path>
      <path
        d="M5 12C5 12.8284 4.32843 13.5 3.5 13.5C2.67157 13.5 2 12.8284 2 12C2 11.1716 2.67157 10.5 3.5 10.5C4.32843 10.5 5 11.1716 5 12Z"
        fill="currentColor"
      ></path>
      <path
        d="M3.5 19.5C4.32843 19.5 5 18.8284 5 18C5 17.1716 4.32843 16.5 3.5 16.5C2.67157 16.5 2 17.1716 2 18C2 18.8284 2.67157 19.5 3.5 19.5Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  gridIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V5.5C0.5 6.05228 0.947715 6.5 1.5 6.5H5.5C6.05228 6.5 6.5 6.05228 6.5 5.5V1.5C6.5 0.947715 6.05228 0.5 5.5 0.5Z"
        stroke="currentColor"
      ></path>
      <path
        d="M13.5 0.5H9.5C8.94772 0.5 8.5 0.947715 8.5 1.5V5.5C8.5 6.05228 8.94772 6.5 9.5 6.5H13.5C14.0523 6.5 14.5 6.05228 14.5 5.5V1.5C14.5 0.947715 14.0523 0.5 13.5 0.5Z"
        stroke="currentColor"
      ></path>
      <path
        d="M13.5 8.5H9.5C8.94772 8.5 8.5 8.94772 8.5 9.5V13.5C8.5 14.0523 8.94772 14.5 9.5 14.5H13.5C14.0523 14.5 14.5 14.0523 14.5 13.5V9.5C14.5 8.94772 14.0523 8.5 13.5 8.5Z"
        stroke="currentColor"
      ></path>
      <path
        d="M5.5 8.5H1.5C0.947715 8.5 0.5 8.94772 0.5 9.5V13.5C0.5 14.0523 0.947715 14.5 1.5 14.5H5.5C6.05228 14.5 6.5 14.0523 6.5 13.5V9.5C6.5 8.94772 6.05228 8.5 5.5 8.5Z"
        stroke="currentColor"
      ></path>
    </svg>
  ),
  trailIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ionicons-v5-l</title>
      <line
        x1="256"
        y1="400"
        x2="256"
        y2="464"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
      ></line>
      <line
        x1="256"
        y1="208"
        x2="256"
        y2="272"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
      ></line>
      <line
        x1="256"
        y1="48"
        x2="256"
        y2="80"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
      ></line>
      <path
        d="M416,208H102.63a16,16,0,0,1-11.32-4.69L32,144,91.31,84.69A16,16,0,0,1,102.63,80H416a16,16,0,0,1,16,16v96A16,16,0,0,1,416,208Z"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
      ></path>
      <path
        d="M96,400H409.37a16,16,0,0,0,11.32-4.69L480,336l-59.31-59.31A16,16,0,0,0,409.37,272H96a16,16,0,0,0-16,16v96A16,16,0,0,0,96,400Z"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
      ></path>
    </svg>
  ),
  peopleIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="currentColor"
      className="bi bi-people"
      viewBox="0 0 16 16"
      data-testid="people-icon"
    >
      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
    </svg>
  ),
  revenueIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      data-testid="revenue-icon"
    >
      <title>currency-revenue</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="invisible_box" data-name="invisible box">
          <rect width="48" height="48" fill="none"></rect>
        </g>
        <g id="Q3_icons" data-name="Q3 icons">
          <path d="M44,7.1V14a2,2,0,0,1-2,2H35a2,2,0,0,1-2-2.3A2.1,2.1,0,0,1,35.1,12h2.3A18,18,0,0,0,6.1,22.2a2,2,0,0,1-2,1.8h0a2,2,0,0,1-2-2.2A22,22,0,0,1,40,8.9V7a2,2,0,0,1,2.3-2A2.1,2.1,0,0,1,44,7.1Z"></path>
          <path d="M4,40.9V34a2,2,0,0,1,2-2h7a2,2,0,0,1,2,2.3A2.1,2.1,0,0,1,12.9,36H10.6A18,18,0,0,0,41.9,25.8a2,2,0,0,1,2-1.8h0a2,2,0,0,1,2,2.2A22,22,0,0,1,8,39.1V41a2,2,0,0,1-2.3,2A2.1,2.1,0,0,1,4,40.9Z"></path>
          <path d="M24.7,22c-3.5-.7-3.5-1.3-3.5-1.8s.2-.6.5-.9a3.4,3.4,0,0,1,1.8-.4,6.3,6.3,0,0,1,3.3.9,1.8,1.8,0,0,0,2.7-.5,1.9,1.9,0,0,0-.4-2.8A9.1,9.1,0,0,0,26,15.3V13a2,2,0,0,0-4,0v2.2c-3,.5-5,2.5-5,5.2s3.3,4.9,6.5,5.5,3.3,1.3,3.3,1.8-1.1,1.4-2.5,1.4h0a6.7,6.7,0,0,1-4.1-1.3,2,2,0,0,0-2.8.6,1.8,1.8,0,0,0,.3,2.6A10.9,10.9,0,0,0,22,32.8V35a2,2,0,0,0,4,0V32.8a6.3,6.3,0,0,0,3-1.3,4.9,4.9,0,0,0,2-4h0C31,23.8,27.6,22.6,24.7,22Z"></path>
        </g>
      </g>
    </svg>
  ),
  incomeIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      data-testid="income-icon"
    >
      <path
        d="M31 34L43 34"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="element_fb4715fe"
      ></path>
      <path
        d="M43 26V10C43 8.34315 41.6569 7 40 7H8C6.34315 7 5 8.34315 5 10V38C5 39.6569 6.34315 41 8 41H28.4706"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="element_7a417ef5"
      ></path>
      <path
        d="M36 39L31 34L35.9996 29"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="element_f22935b9"
      ></path>
      <path
        d="M15 15L20 21L25 15"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="element_9f9d5359"
      ></path>
      <path
        d="M14 27H26"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="element_691f17cf"
      ></path>
      <path
        d="M14 21H26"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="element_2a1ea345"
      ></path>
      <path
        d="M20 21V33"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="element_556730c2"
      ></path>
    </svg>
  ),
  rightArrowIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 72 72"
      id="emoji"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="right-arrow-icon"
    >
      <g id="color">
        <polygon
          id="_x27A1__xFE0F_"
          fill="currentColor"
          stroke="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          points="49.2124,51.5343 67,35.0363 49.2124,18.5382 45.4234,22.6138 55.8191,32.2554 5,32.2554 5,37.8171 55.8191,37.8171 45.4234,47.4587"
        ></polygon>
      </g>
      <g id="hair"></g>
      <g id="skin"></g>
      <g id="skin-shadow"></g>
      <g id="line">
        <polygon
          id="_x27A1__xFE0F_"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          points="49.2124,51.5343 67,35.0363 49.2124,18.5382 45.4234,22.6138 55.8191,32.2554 5,32.2554 5,37.8171 55.8191,37.8171 45.4234,47.4587"
        ></polygon>
      </g>
    </svg>
  ),
  buildingIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      height="100%"
      width="100%"
      fill="currentColor"
      data-testid="building-icon"
    >
      <path d="M 10 4 L 8 6 L 10 8 L 12 6 Z M 12 6 L 14 8 L 16 6 L 14 4 Z M 16 6 L 18 8 L 20 6 L 18 4 Z M 20 6 L 22 8 L 24 6 L 22 4 Z M 22 8 L 5 8 L 5 28 L 27 28 L 27 8 Z M 7 10 L 25 10 L 25 26 L 19 26 L 19 21 L 13 21 L 13 26 L 7 26 Z M 9 12 L 9 14 L 11 14 L 11 12 Z M 13 12 L 13 14 L 15 14 L 15 12 Z M 17 12 L 17 14 L 19 14 L 19 12 Z M 21 12 L 21 14 L 23 14 L 23 12 Z M 9 15 L 9 17 L 11 17 L 11 15 Z M 13 15 L 13 17 L 15 17 L 15 15 Z M 17 15 L 17 17 L 19 17 L 19 15 Z M 21 15 L 21 17 L 23 17 L 23 15 Z M 9 18 L 9 20 L 11 20 L 11 18 Z M 13 18 L 13 20 L 15 20 L 15 18 Z M 17 18 L 17 20 L 19 20 L 19 18 Z M 21 18 L 21 20 L 23 20 L 23 18 Z M 9 21 L 9 23 L 11 23 L 11 21 Z M 21 21 L 21 23 L 23 23 L 23 21 Z M 15 23 L 17 23 L 17 26 L 15 26 Z"></path>
    </svg>
  ),
  arrowLeftTwoIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="arrow-left-two-icon"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"></path>
      </g>
    </svg>
  ),
  arrowRightTwoIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="arrow-right-two-icon"
    >
      <g clipPath="url(#clip0_429_11254)">
        <path
          d="M10 17L15 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15 12L10 7"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_429_11254">
          <rect width="24" height="24" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  ),
  homeIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="home-icon"
    >
      <title>home_3_line</title>
      <g
        id="页面-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Building" fillRule="nonzero">
          <g id="home_3_line">
            <path
              d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
              id="MingCute"
              fillRule="nonzero"
            ></path>
            <path
              d="M10.7722,2.68814 C11.4492625,2.16151813 12.3804168,2.12860426 13.0892408,2.5893984 L13.2279,2.68814 L21.6117,9.20884 C22.3334208,9.77022208 21.9818043,10.9006282 21.1132725,10.993854 L20.9971,11 L20.0001,11 L20.0001,19 C20.0001,20.0543909 19.1841589,20.9181678 18.1493537,20.9945144 L18.0001,21 L6.00005,21 C4.94568773,21 4.08188483,20.18415 4.00553573,19.1492661 L4.00005,19 L4.00005,11 L3.00297,11 C2.08960167,11 1.67147285,9.89241543 2.30039361,9.28508754 L2.38841,9.20884 L10.7722,2.68814 Z M12.0001,4.26685 L5.62546,9.22486 C5.85399,9.41004 6.00005,9.69297 6.00005,10.01 L6.00005,19 L9.00005,19 L9.00005,14 C9.00005,12.3431 10.3432,11 12.0001,11 C13.6569,11 15.0001,12.3431 15.0001,14 L15.0001,19 L18.0001,19 L18.0001,10.01 C18.0001,9.69295 18.1461,9.41003 18.3746,9.22486 L12.0001,4.26685 Z M12.0001,13 C11.4478,13 11.0001,13.4477 11.0001,14 L11.0001,19 L13.0001,19 L13.0001,14 C13.0001,13.4477 12.5523,13 12.0001,13 Z"
              id="形状"
              fill="currentColor"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  notesIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="notes-icon"
    >
      <path
        d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V9H19V19ZM5 7V5H19V7H5ZM7 11H17V13H7V11ZM7 15H14V17H7V15Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  activityIcon: (
    <svg
      fill="currentColor"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="activity-icon"
    >
      <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,2a9.01,9.01,0,0,1,8.941,8H16a1,1,0,0,0-.929.629L14,14.307,10.929,6.629a1,1,0,0,0-1.857,0L7.323,11H3.059A9.01,9.01,0,0,1,12,3Zm0,18a9.01,9.01,0,0,1-8.941-8H8a1,1,0,0,0,.928-.629L10,9.692l3.071,7.679a1,1,0,0,0,1.858,0L16.677,13h4.264A9.01,9.01,0,0,1,12,21Z"></path>
    </svg>
  ),
  inventoryIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      id="meteor-icon-kit__regular-products"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="inventory-icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 9C9.44771 9 9 9.44771 9 10V21C9 21.5523 9.44771 22 10 22H21C21.5523 22 22 21.5523 22 21V10C22 9.44771 21.5523 9 21 9H10ZM15 7V3C15 2.44772 14.5523 2 14 2H3C2.44772 2 2 2.44772 2 3V14C2 14.5523 2.44772 15 3 15H7V10C7 8.34315 8.34315 7 10 7H15ZM17 7H21C22.6569 7 24 8.34315 24 10V21C24 22.6569 22.6569 24 21 24H10C8.34315 24 7 22.6569 7 21V17H3C1.34315 17 0 15.6569 0 14V3C0 1.34315 1.34315 0 3 0H14C15.6569 0 17 1.34315 17 3V7Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  availabilityIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="availability-icon"
    >
      <path
        d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V9H19V19ZM5 7V5H19V7H5ZM10.56 17.46L16.49 11.53L15.43 10.47L10.56 15.34L8.45 13.23L7.39 14.29L10.56 17.46Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  devicesIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="currentColor"
      data-testid="devices-icon"
    >
      <path d="M20 3H7c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM6 9h4l-.003 9H4V9h2zm6 8V9c0-1.103-.897-2-2-2H7V5h11v12h-6z"></path>
    </svg>
  ),
  checkCircleIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="currentColor"
      data-testid="check-circle-icon"
    >
      <path
        fillRule="evenodd"
        d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M15.2928932,8.29289322 L10,13.5857864 L8.70710678,12.2928932 C8.31658249,11.9023689 7.68341751,11.9023689 7.29289322,12.2928932 C6.90236893,12.6834175 6.90236893,13.3165825 7.29289322,13.7071068 L9.29289322,15.7071068 C9.68341751,16.0976311 10.3165825,16.0976311 10.7071068,15.7071068 L16.7071068,9.70710678 C17.0976311,9.31658249 17.0976311,8.68341751 16.7071068,8.29289322 C16.3165825,7.90236893 15.6834175,7.90236893 15.2928932,8.29289322 Z"
      ></path>
    </svg>
  ),
  crossIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="cross-icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9498 8.46447C17.3404 8.07394 17.3404 7.44078 16.9498 7.05025C16.5593 6.65973 15.9261 6.65973 15.5356 7.05025L12.0001 10.5858L8.46455 7.05025C8.07402 6.65973 7.44086 6.65973 7.05033 7.05025C6.65981 7.44078 6.65981 8.07394 7.05033 8.46447L10.5859 12L7.05033 15.5355C6.65981 15.9261 6.65981 16.5592 7.05033 16.9497C7.44086 17.3403 8.07402 17.3403 8.46455 16.9497L12.0001 13.4142L15.5356 16.9497C15.9261 17.3403 16.5593 17.3403 16.9498 16.9497C17.3404 16.5592 17.3404 15.9261 16.9498 15.5355L13.4143 12L16.9498 8.46447Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  checkSquareIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="check-square-icon"
    >
      <path
        d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  bookedIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="booked-icon"
    >
      <title>bookmark_line</title>
      <g
        id="页面-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Education" transform="translate(-96.000000, 0.000000)">
          <g id="bookmark_line" transform="translate(96.000000, 0.000000)">
            <path
              d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
              id="MingCute"
              fillRule="nonzero"
            ></path>
            <path
              d="M4,5 C4,3.34315 5.34315,2 7,2 L17,2 C18.6569,2 20,3.34315 20,5 L20,21.0284 C20,22.2485 18.6209,22.9581 17.6281,22.249 L12,18.2289 L6.37186,22.249 C5.37906,22.9581 4,22.2485 4,21.0284 L4,5 Z M7,4 C6.44772,4 6,4.44772 6,5 L6,20.0568 L11.1281,16.3939 C11.6497,16.0213 12.3503,16.0213 12.8719,16.3939 L18,20.0568 L18,5 C18,4.44772 17.5523,4 17,4 L7,4 Z"
              id="形状"
              fill="currentColor"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  sandClockIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="sand-clock-icon"
    >
      <path
        d="M13 6H11V7C11 7.55228 11.4477 8 12 8C12.5523 8 13 7.55228 13 7V6Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2V4H7V7C7 9.76142 9.23858 12 12 12C9.23858 12 7 14.2386 7 17V20H6V22H18V20H17V17C17 14.2386 14.7614 12 12 12C14.7614 12 17 9.76142 17 7V4H18V2H6ZM9 4H15V7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7V4ZM9 17V20H15V17C15 15.3431 13.6569 14 12 14C10.3431 14 9 15.3431 9 17Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  timeLapseIcon: (
    <svg
      fill="currentColor"
      height="100%"
      width="100%"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      enableBackground="new 0 0 512 512"
      data-testid="time-lapse-icon"
    >
      <path
        d="M256,0C179.9,0,111.7,33.4,64.9,86.2L0,21.3V192h170.7l-60.2-60.2C145.6,90.5,197.5,64,256,64c106,0,192,85.9,192,192
  c0,106.1-86,192-192,192c-53,0-101-21.5-135.8-56.2L75,437c46.4,46.3,110.4,75,181,75c141.4,0,256-114.6,256-256S397.4,0,256,0z
   M234.7,106.7v170.7h128v-42.7h-85.3v-128H234.7z"
      ></path>
    </svg>
  ),
  roomIcon: (
    <svg
      width="100%"
      height="100%" // chnaged width and height to 100% to fit the parent div
      viewBox="0 0 24 24"
      fill="currentColor" // changed fill to currentColor to take color of parent div
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      stroke="currentColor"
      data-testid="room-icon"
    >
      <style type="text/css">
        {
          ".st0{opacity:0.2;fill:none;strokeWidth:5.000000e-02;stroke-miterlimit:10;}"
        }
      </style>

      <g id="Layer_Grid"></g>

      <g id="Layer_2">
        <path d="M21,8c0-2.2-1.8-4-4-4H7C4.8,4,3,5.8,3,8v3.8c-0.6,0.5-1,1.3-1,2.2v2.7V17v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-1h16v1   c0,0.6,0.4,1,1,1s1-0.4,1-1v-2v-0.3V14c0-0.9-0.4-1.7-1-2.2V8z M5,8c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2v3h-1v-1c0-1.7-1.3-3-3-3   h-1c-0.8,0-1.5,0.3-2,0.8C11.5,7.3,10.8,7,10,7H9c-1.7,0-3,1.3-3,3v1H5V8z M16,10v1h-3v-1c0-0.6,0.4-1,1-1h1C15.6,9,16,9.4,16,10z    M11,10v1H8v-1c0-0.6,0.4-1,1-1h1C10.6,9,11,9.4,11,10z M20,16H4v-2c0-0.6,0.4-1,1-1h3h3h2h3h3c0.6,0,1,0.4,1,1V16z"></path>
      </g>
    </svg>
  ),
  featuresIcon: (
    <svg
      fill="currentColor"
      width="100%"
      height="100%"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="features-icon"
    >
      <path d="M22.005 0c-.194-.002-.372.105-.458.276l-2.197 4.38-4.92.7c-.413.06-.578.56-.278.846l3.805 3.407-.953 4.81c-.07.406.363.715.733.523L22 12.67l4.286 2.273c.37.19.8-.118.732-.522l-.942-4.81 3.77-3.408c.3-.286.136-.787-.278-.846l-4.916-.7-2.2-4.38C22.368.11 22.195.002 22.005 0zM22 1.615l1.863 3.71c.073.148.216.25.38.273l4.168.595-3.227 2.89c-.12.112-.173.276-.145.436l.813 4.08-3.616-1.927c-.147-.076-.322-.076-.47 0l-3.59 1.926.823-4.08c.028-.16-.027-.325-.145-.438l-3.262-2.89 4.166-.594c.165-.023.307-.125.38-.272zM16.5 18c-.822 0-1.5.678-1.5 1.5v9c0 .822.678 1.5 1.5 1.5h9c.822 0 1.5-.678 1.5-1.5v-9c0-.822-.678-1.5-1.5-1.5zm0 1h9c.286 0 .5.214.5.5v9c0 .286-.214.5-.5.5h-9c-.286 0-.5-.214-.5-.5v-9c0-.286.214-.5.5-.5zM1.5 3C.678 3 0 3.678 0 4.5v9c0 .822.678 1.5 1.5 1.5h9c.822 0 1.5-.678 1.5-1.5v-9c0-.822-.678-1.5-1.5-1.5zm0 1h9c.286 0 .5.214.5.5v9c0 .286-.214.5-.5.5h-9c-.286 0-.5-.214-.5-.5v-9c0-.286.214-.5.5-.5zm0 14c-.822 0-1.5.678-1.5 1.5v9c0 .822.678 1.5 1.5 1.5h9c.822 0 1.5-.678 1.5-1.5v-9c0-.822-.678-1.5-1.5-1.5zm0 1h9c.286 0 .5.214.5.5v9c0 .286-.214.5-.5.5h-9c-.286 0-.5-.214-.5-.5v-9c0-.286.214-.5.5-.5z"></path>
    </svg>
  ),
  personIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="currentColor"
      viewBox="0 0 16 16"
      data-testid="person-icon"
    >
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
    </svg>
  ),
  dutyIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M832 192h128v768H64V192h128V64h64v128h512V64h64v128z m0 64H128v640h768V256h-64z m-512 384V448H128V384h192V256h64v128h256V256h64v128h192v64H384v448H320v-192H128v-64h192z m304 128c-37.312-43.52-80-81.728-112-92.608l74.688-43.52 32 65.28 10.624-21.76c16-38.144 64-125.248 133.376-163.392v21.76c-5.376 27.264-5.376 49.024 5.312 76.288-37.312 10.88-117.312 108.928-144 157.952z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  arrowRightIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="arrow-right-icon"
    >
      <path
        d="M12.5 18.5L18.1464 12.8536C18.3417 12.6583 18.3417 12.3417 18.1464 12.1464L12.5 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M18.5 12.5L5.5 12.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  questionMarkCircledIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="question-mark-circled-icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  sandCLockIcon: (
    <svg
      version="1.1"
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      height="100%"
      width="100%"
      data-testid="sand-clock-icon"
    >
      <style type="text/css"></style>
      <path
        className="st0"
        d="M22,6H10C8.3,6,7,4.7,7,3v0h18v0C25,4.7,23.7,6,22,6z"
      ></path>
      <path
        className="st0"
        d="M10,26h12c1.7,0,3,1.3,3,3v0H7v0C7,27.3,8.3,26,10,26z"
      ></path>
      <path
        className="st0"
        d="M23,26v-4c0-0.6-0.3-1.2-0.8-1.6l-3.7-2.8c-1.1-0.8-1.1-2.4,0-3.2l3.7-2.8c0.5-0.4,0.8-1,0.8-1.6V6"
      ></path>
      <path
        className="st0"
        d="M9,6v4c0,0.6,0.3,1.2,0.8,1.6l3.7,2.8c1.1,0.8,1.1,2.4,0,3.2l-3.7,2.8C9.3,20.8,9,21.4,9,22v4"
      ></path>
      <polygon className="st0" points="11,26 16,21 21,26 "></polygon>
      <polygon className="st0" points="16,12 13,10 19,10 "></polygon>
    </svg>
  ),
  warningCircledIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="warning-circled-icon"
    >
      <path
        d="M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7H12.75ZM11.25 14C11.25 14.4142 11.5858 14.75 12 14.75C12.4142 14.75 12.75 14.4142 12.75 14H11.25ZM12.75 16.99C12.75 16.5758 12.4142 16.24 12 16.24C11.5858 16.24 11.25 16.5758 11.25 16.99H12.75ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM11.25 7V14H12.75V7H11.25ZM11.25 16.99V17H12.75V16.99H11.25ZM20.25 12C20.25 16.5563 16.5563 20.25 12 20.25V21.75C17.3848 21.75 21.75 17.3848 21.75 12H20.25ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75V2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  signOutIcon: (
    <svg
      fill="currentColor"
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="sign-out-icon"
    >
      <path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 20.050781 28 23.640625 25.988281 25.8125 22.90625 L 24.1875 21.75 C 22.378906 24.320313 19.390625 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 C 19.390625 6 22.375 7.679688 24.1875 10.25 L 25.8125 9.09375 C 23.640625 6.011719 20.050781 4 16 4 Z M 23.34375 11.28125 L 21.90625 12.71875 L 24.1875 15 L 12 15 L 12 17 L 24.1875 17 L 21.90625 19.28125 L 23.34375 20.71875 L 27.34375 16.71875 L 28.03125 16 L 27.34375 15.28125 Z"></path>
    </svg>
  ),
  alertIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M12 2l10 20H2L12 2m0-2c-.758 0-1.45.428-1.79 1.106l-10 20c-.31.62-.276 1.356.09 1.946.363.59 1.007.948 1.7.948h20c.693 0 1.337-.36 1.7-.95.365-.59.4-1.325.09-1.945l-10-20C13.45.428 12.756 0 12 0z"
      ></path>
      <path
        fill="currentColor"
        d="M12 20c-.832 0-1.507-.672-1.507-1.5S11.168 17 12 17s1.507.672 1.507 1.5S12.832 20 12 20zm.985-4.806c-.093.47-.505.806-.985.806s-.892-.337-.985-.806l-.996-5c-.06-.293.017-.598.208-.83.19-.23.476-.364.776-.364h1.99c.302 0 .587.134.777.365.192.23.27.536.21.83l-.995 5z"
      ></path>
    </svg>
  ),
  penIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>pencil_line</title>
      <g
        id="页面-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Editor"
          transform="translate(-960.000000, 0.000000)"
          fillRule="nonzero"
        >
          <g id="pencil_line" transform="translate(960.000000, 0.000000)">
            <path
              d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
              id="MingCute"
              fillRule="nonzero"
            ></path>
            <path
              d="M16.0354,3.01467 C17.16004,1.8899532 18.9556048,1.84496453 20.1340073,2.87970398 L20.278,3.01467 L20.9851,3.72177 C22.109836,4.8464868 22.1548254,6.64204546 21.1200683,7.82042076 L20.9851,7.96441 L9.77281,19.1767 C9.613778,19.33574 9.4215556,19.456444 9.21077064,19.5307224 L9.04943,19.5776 L4.59453,20.6057 C3.91174263,20.7632474 3.2959362,20.1918396 3.37445672,19.5183806 L3.39408,19.4053 L4.42213,14.9503 C4.472706,14.73118 4.57173,14.526972 4.71109704,14.352268 L4.82306,14.227 L16.0354,3.01467 Z M15.3282,6.55026 L6.33867,15.5398 L5.70227,18.2975 L8.45999,17.6611 L17.4495,8.67158 L15.3282,6.55026 Z M18.8638,4.42888 C18.5033385,4.0684 17.9360793,4.04067077 17.5438027,4.34569231 L17.4496,4.42888 L16.7424,5.13605 L18.8637,7.25737 L19.5709,6.5502 C19.9313615,6.18972 19.9590893,5.62248497 19.6540834,5.2301965 L19.5709,5.13599 L18.8638,4.42888 Z"
              id="形状"
              fill="currentColor"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  tickIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  dotsVerticleIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="-6 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="dots-verticle-icon"
    >
      <title>
        navigation / 13 - navigation, dots, more, vertical, option icon
      </title>
      <g
        id="Free-Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          transform="translate(-1051.000000, -750.000000)"
          fill="currentColor"
          id="Group"
        >
          <g transform="translate(1041.000000, 746.000000)" id="Shape">
            <path d="M12,4 C10.8954305,4 10,4.8954305 10,6 C10,7.1045695 10.8954305,8 12,8 C13.1045695,8 14,7.1045695 14,6 C14,4.8954305 13.1045695,4 12,4 Z"></path>
            <path d="M12,10 C10.8954305,10 10,10.8954305 10,12 C10,13.1045695 10.8954305,14 12,14 C13.1045695,14 14,13.1045695 14,12 C14,10.8954305 13.1045695,10 12,10 Z"></path>
            <path d="M12,16 C10.8954305,16 10,16.8954305 10,18 C10,19.1045695 10.8954305,20 12,20 C13.1045695,20 14,19.1045695 14,18 C14,16.8954305 13.1045695,16 12,16 Z"></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  plusIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4V20M4 12L20 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="element_5b1b4ea4"
      ></path>
    </svg>
  ),
  bellIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.44784 7.96942C6.76219 5.14032 9.15349 3 12 3V3C14.8465 3 17.2378 5.14032 17.5522 7.96942L17.804 10.2356C17.8072 10.2645 17.8088 10.279 17.8104 10.2933C17.9394 11.4169 18.3051 12.5005 18.8836 13.4725C18.8909 13.4849 18.8984 13.4973 18.9133 13.5222L19.4914 14.4856C20.0159 15.3599 20.2782 15.797 20.2216 16.1559C20.1839 16.3946 20.061 16.6117 19.8757 16.7668C19.5971 17 19.0873 17 18.0678 17H5.93223C4.91268 17 4.40291 17 4.12434 16.7668C3.93897 16.6117 3.81609 16.3946 3.77841 16.1559C3.72179 15.797 3.98407 15.3599 4.50862 14.4856L5.08665 13.5222C5.10161 13.4973 5.10909 13.4849 5.11644 13.4725C5.69488 12.5005 6.06064 11.4169 6.18959 10.2933C6.19123 10.279 6.19283 10.2645 6.19604 10.2356L6.44784 7.96942Z"
        stroke="currentColor"
        strokeWidth="2"
      ></path>
      <path
        d="M8 17C8 17.5253 8.10346 18.0454 8.30448 18.5307C8.5055 19.016 8.80014 19.457 9.17157 19.8284C9.54301 20.1999 9.98396 20.4945 10.4693 20.6955C10.9546 20.8965 11.4747 21 12 21C12.5253 21 13.0454 20.8965 13.5307 20.6955C14.016 20.4945 14.457 20.1999 14.8284 19.8284C15.1999 19.457 15.4945 19.016 15.6955 18.5307C15.8965 18.0454 16 17.5253 16 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </svg>
  ),
  settingsIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>settings</title>
      <g
        id="页面-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="System" transform="translate(-768.000000, -192.000000)">
          <g id="settings" transform="translate(768.000000, 192.000000)">
            <path
              d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
              id="MingCute"
              fillRule="nonzero"
            ></path>
            <path
              d="M14.4095,2.29252 C15.3922,2.53569 16.3173,2.92399 17.1607,3.43303 C17.5111,3.64448 17.6972,4.04803 17.6307,4.45178 C17.5172,5.14078 17.6885,5.66772 18.0105,5.98974 C18.3325,6.31176 18.8595,6.48308 19.5484,6.36954 C19.9522,6.30301 20.3558,6.48917 20.5672,6.83951 C21.0762,7.68291 21.4645,8.60804 21.7077,9.59069 C21.806,9.98806 21.6522,10.4052 21.3195,10.6437 C20.7517,11.0507 20.5001,11.5446 20.5001,12.0001 C20.5001,12.4556 20.7517,12.9495 21.3195,13.3565 C21.6522,13.5949 21.806,14.0121 21.7077,14.4095 C21.4645,15.3922 21.0762,16.3173 20.5671,17.1608 C20.3557,17.5111 19.9522,17.6973 19.5484,17.6307 C18.8594,17.5172 18.3325,17.6885 18.0105,18.0105 C17.6885,18.3325 17.5172,18.8595 17.6307,19.5484 C17.6972,19.9522 17.5111,20.3557 17.1607,20.5672 C16.3173,21.0762 15.3922,21.4645 14.4095,21.7077 C14.0121,21.806 13.595,21.6522 13.3565,21.3195 C12.9495,20.7517 12.4556,20.5001 12.0001,20.5001 C11.5446,20.5001 11.0507,20.7517 10.6437,21.3195 C10.4052,21.6522 9.98807,21.806 9.5907,21.7077 C8.60802,21.4645 7.68287,21.0762 6.83946,20.5672 C6.48913,20.3557 6.30296,19.9522 6.36949,19.5484 C6.48302,18.8595 6.3117,18.3325 5.98969,18.0105 C5.66767,17.6885 5.14075,17.5172 4.45178,17.6307 C4.04803,17.6973 3.64449,17.5111 3.43305,17.1608 C2.924,16.3173 2.53569,15.3922 2.29252,14.4095 C2.19418,14.0121 2.34796,13.5949 2.68069,13.3565 C3.24849,12.9495 3.5001,12.4556 3.5001,12.0001 C3.5001,11.5446 3.24849,11.0507 2.68068,10.6437 C2.34796,10.4052 2.19418,9.98806 2.29252,9.5907 C2.53568,8.60804 2.92397,7.68291 3.43299,6.83952 C3.64443,6.48918 4.04799,6.30301 4.45175,6.36955 C5.14073,6.48309 5.66767,6.31177 5.98969,5.98975 C6.31172,5.66772 6.48304,5.14078 6.36949,4.45179 C6.30295,4.04803 6.48912,3.64447 6.83945,3.43303 C7.68287,2.92399 8.60802,2.53569 9.5907,2.29252 C9.98806,2.19418 10.4052,2.34797 10.6437,2.68069 C11.0507,3.24849 11.5446,3.50009 12.0001,3.50009 C12.4556,3.50009 12.9495,3.24849 13.3565,2.68069 C13.595,2.34797 14.0121,2.19418 14.4095,2.29252 Z M14.5119,4.40209 C13.8552,5.06102 12.9921,5.50009 12.0001,5.50009 C11.0081,5.50009 10.1449,5.06102 9.48825,4.40209 C9.11378,4.52581 8.75148,4.6765 8.40364,4.85189 C8.40512,5.78202 8.10521,6.70266 7.40391,7.40396 C6.70261,8.10525 5.78198,8.40517 4.85187,8.4037 C4.67649,8.75152 4.52581,9.1138 4.40209,9.48825 C5.06102,10.1449 5.5001,11.0081 5.5001,12.0001 C5.5001,12.9921 5.06102,13.8552 4.40209,14.5119 C4.52582,14.8864 4.67651,15.2487 4.85191,15.5966 C5.78201,15.5951 6.70262,15.895 7.4039,16.5963 C8.10518,17.2976 8.40509,18.2182 8.40364,19.1483 C8.75148,19.3237 9.11378,19.4744 9.48826,19.5981 C10.1449,18.9392 11.0081,18.5001 12.0001,18.5001 C12.9921,18.5001 13.8552,18.9392 14.5119,19.5981 C14.8864,19.4744 15.2487,19.3237 15.5966,19.1483 C15.5951,18.2182 15.895,17.2976 16.5963,16.5963 C17.2976,15.895 18.2182,15.5951 19.1483,15.5966 C19.3237,15.2487 19.4744,14.8864 19.5981,14.5119 C18.9392,13.8552 18.5001,12.9921 18.5001,12.0001 C18.5001,11.0081 18.9392,10.1449 19.5981,9.48825 C19.4744,9.11379 19.3237,8.75152 19.1483,8.40369 C18.2182,8.40516 17.2976,8.10525 16.5963,7.40395 C15.895,6.70265 15.5951,5.78201 15.5966,4.8519 C15.2487,4.6765 14.8864,4.52581 14.5119,4.40209 Z M12.0001,8.00009 C14.2092,8.00009 16.0001,9.79095 16.0001,12.00009 C16.0001,14.2092 14.2092,16.00009 12.0001,16.00009 C9.79096,16.00009 8.0001,14.2092 8.0001,12.00009 C8.0001,9.79095 9.79096,8.00009 12.0001,8.00009 Z M12.0001,10.0001 C10.8955,10.0001 10.0001,10.8955 10.0001,12.0001 C10.0001,13.1047 10.8955,14.0001 12.0001,14.0001 C13.1047,14.0001 14.0001,13.1047 14.0001,12.0001 C14.0001,10.8955 13.1047,10.0001 12.0001,10.0001 Z"
              id="形状"
              fill="currentColor"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  menuIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="100%"
      width="100%"
      stroke="currentColor"
      data-testid="menu-icon"
    >
      <g>
        <path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"></path>
      </g>
    </svg>
  ),
  calenderTodayIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="calender-today-icon"
    >
      <path
        d="M25 6.25C25 4.45507 23.5449 3 21.75 3H6.25C4.45507 3 3 4.45507 3 6.25V21.75C3 23.5449 4.45507 25 6.25 25H12.2483C12.2483 25 12.25 24.5184 12.25 24.25V23.5H6.25C5.2835 23.5 4.5 22.7165 4.5 21.75V9.503H23.5V21.75C23.5 22.7165 22.7165 23.5 21.75 23.5H15.75V24.25C15.75 24.5184 15.75 25 15.75 25H21.75C23.5449 25 25 23.5449 25 21.75V6.25ZM6.25 4.5H21.75C22.7165 4.5 23.5 5.2835 23.5 6.25V8.003H4.5V6.25C4.5 5.2835 5.2835 4.5 6.25 4.5Z"
        fill="currentColor"
      ></path>
      <path
        d="M15.25 13.25C15.25 13.9404 14.6904 14.5 14 14.5C13.3096 14.5 12.75 13.9404 12.75 13.25C12.75 12.5596 13.3096 12 14 12C14.6904 12 15.25 12.5596 15.25 13.25Z"
        fill="currentColor"
      ></path>
      <path
        d="M15.7517 20.3105C16.0613 20.5857 16.5354 20.5579 16.8105 20.2483C17.0857 19.9387 17.0579 19.4646 16.7483 19.1894L14.4983 17.1894C14.2141 16.9368 13.7859 16.9368 13.5017 17.1894L11.2517 19.1894C10.9421 19.4646 10.9142 19.9387 11.1894 20.2483C11.4646 20.5579 11.9387 20.5857 12.2483 20.3105L13.25 19.4201V25.25C13.25 25.6642 13.5858 26 14 26C14.4142 26 14.75 25.6642 14.75 25.25V19.4201L15.7517 20.3105Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  calenderIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
      height="100%"
      width="100%"
      fill="currentColor"
      data-testid="calender-icon"
    >
      <path d="M19.5,4h-3V2.5C16.5,2.223877,16.276123,2,16,2s-0.5,0.223877-0.5,0.5V4h-7V2.5C8.5,2.223877,8.276123,2,8,2S7.5,2.223877,7.5,2.5V4H4.4995117c-1.380127,0.0014648-2.4985352,1.119873-2.5,2.5v13c0.0014648,1.380127,1.119873,2.4985352,2.5,2.5H19.5c1.380188-0.0012817,2.4987183-1.119812,2.5-2.5v-13C21.9987183,5.119812,20.880188,4.0012817,19.5,4z M21,19.5c-0.0009155,0.828064-0.671936,1.4990845-1.5,1.5H4.4995117c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5V11H21V19.5z M21,10H2.9995117V6.5c0.0009155-0.828064,0.671936-1.4990845,1.5-1.5H7.5v1.5c0,0.0001831,0,0.0003662,0,0.0006104C7.5001831,6.7765503,7.723999,7.0001831,8,7c0.0001831,0,0.0003662,0,0.0006104,0C8.2765503,6.9998169,8.5001831,6.776001,8.5,6.5V5h7v1.5c0,0.0001831,0,0.0003662,0,0.0006104C15.5001831,6.7765503,15.723999,7.0001831,16,7c0.0001831,0,0.0003662,0,0.0006104,0C16.2765503,6.9998169,16.5001831,6.776001,16.5,6.5V5h3c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5V10z"></path>
    </svg>
  ),
  xCircleIcon: (
    <svg
      fill="currentColor"
      width="100%"
      height="100%"
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="x-circle-icon"
    >
      <path d="M128,20.00012a108,108,0,1,0,108,108A108.12217,108.12217,0,0,0,128,20.00012Zm0,192a84,84,0,1,1,84-84A84.0953,84.0953,0,0,1,128,212.00012Zm40.48535-107.51465L144.9707,128.00012l23.51465,23.51465a12.0001,12.0001,0,0,1-16.9707,16.9707L128,144.97082l-23.51465,23.51465a12.0001,12.0001,0,0,1-16.9707-16.9707l23.51465-23.51465L87.51465,104.48547a12.0001,12.0001,0,0,1,16.9707-16.9707L128,111.02942l23.51465-23.51465a12.0001,12.0001,0,0,1,16.9707,16.9707Z"></path>
    </svg>
  ),
  tvIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      data-testid="tv-icon"
      fill="currentColor"
    >
      <path d="M20 6h-5.586l2.293-2.293-1.414-1.414L12 5.586 8.707 2.293 7.293 3.707 9.586 6H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM4 19V8h16l.002 11H4z"></path>
    </svg>
  ),
  wifiIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="miter"
      data-testid="wifi-icon"
    >
      <line
        x1="11.99"
        y1="19"
        x2="12"
        y2="19"
        strokeLinecap="round"
        strokeWidth="1.5"
        id="element_a39d8ea4"
      ></line>
      <path d="M6,13a8.49,8.49,0,0,1,12,0" id="element_419a3418"></path>
      <path d="M2.81,9.81a13,13,0,0,1,18.38,0" id="element_feba190a"></path>
      <path d="M9.17,16.17a4,4,0,0,1,5.66,0" id="element_5cea4033"></path>
    </svg>
  ),
  carIcon: (
    <svg
      fill="currentColor"
      width="100%"
      height="100%"
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="car-icon"
    >
      <g opacity="0.2">
        <path d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184Z"></path>
      </g>
      <g opacity="0.2">
        <path d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184Z"></path>
      </g>
      <g opacity="0.2">
        <path d="M224,120,194.11151,52.75089A8,8,0,0,0,186.801,48H69.199a8,8,0,0,0-7.31049,4.75089L32,120Z"></path>
      </g>
      <g>
        <path d="M240,112H229.199L201.42188,49.501A16.01649,16.01649,0,0,0,186.80078,40H69.19922a16.0158,16.0158,0,0,0-14.6211,9.502L26.801,112H16a8,8,0,0,0,0,16h8v80a16.01833,16.01833,0,0,0,16,16H64a16.01833,16.01833,0,0,0,16-16V192h96v16a16.01833,16.01833,0,0,0,16,16h24a16.01833,16.01833,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM69.19922,56H186.80078l24.88892,56H44.3103ZM64,208H40V192H64Zm128,0V192h24v16Zm24-32H40V128H216Z"></path>
        <path d="M64,160H80a8,8,0,0,0,0-16H64a8,8,0,0,0,0,16Z"></path>
        <path d="M176,160h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"></path>
      </g>
    </svg>
  ),
  dBoxIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="d-box-icon"
    >
      <path
        d="M12 21V13M12 21L5.83752 16.5982C5.42695 16.305 5.22166 16.1583 5.11083 15.943C5 15.7276 5 15.4753 5 14.9708V8M12 21L18.1625 16.5982C18.573 16.305 18.7783 16.1583 18.8892 15.943C19 15.7276 19 15.4753 19 14.9708V8M12 13L5 8M12 13L19 8M5 8L10.8375 3.83034C11.3989 3.42938 11.6795 3.2289 12 3.2289C12.3205 3.2289 12.6011 3.42938 13.1625 3.83034L19 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  cartIcon: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM17 17H7.36729C6.86964 17 6.44772 16.6341 6.37735 16.1414L6.07143 14M2 3H4.5L4.78571 5M4.78571 5H5H21L18 14H6.5H6.07143M4.78571 5L6.07143 14M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
};
