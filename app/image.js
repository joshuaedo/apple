import visionHero from "./images/hero.jpg";

export { visionHero };

import carouselOne from "./images/carousel-images/1.webp";
import carouselTwo from "./images/carousel-images/2.webp";
import carouselThree from "./images/carousel-images/3.webp";
import carouselFour from "./images/carousel-images/4.webp";
import carouselFive from "./images/carousel-images/5.webp";
import carouselSix from "./images/carousel-images/6.webp";
import carouselSeven from "./images/carousel-images/7.webp";
import carouselEight from "./images/carousel-images/8.webp";

export const carouselImages = [
  carouselOne,
  carouselTwo,
  carouselThree,
  carouselFour,
  carouselFive,
  carouselSix,
  carouselSeven,
  carouselEight,
];

function AppleIcon() {
  return (
    <svg
      width="12"
      height="14"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0729 5.52137C12.9799 5.59367 11.3481 6.51287 11.3481 8.55777C11.3481 10.9229 13.424 11.7595 13.486 11.7801C13.4757 11.8317 13.1555 12.9265 12.3912 14.0419C11.7096 15.0231 10.9969 16.0042 9.91251 16.0042C8.82811 16.0042 8.54921 15.3742 7.29951 15.3742C6.08081 15.3742 5.64701 16.0249 4.65551 16.0249C3.66401 16.0249 2.97201 15.116 2.17681 14.0006C1.25761 12.6889 0.514008 10.6543 0.514008 8.72297C0.514008 5.62457 2.52801 3.98237 4.51091 3.98237C5.56441 3.98237 6.44221 4.67437 7.10321 4.67437C7.73321 4.67437 8.71441 3.94107 9.91241 3.94107C10.3669 3.94117 11.9988 3.98257 13.0729 5.52137ZM9.34451 2.62957C9.84021 2.04087 10.1914 1.22497 10.1914 0.409067C10.1914 0.295467 10.1811 0.181867 10.1604 0.0888672C9.35481 0.119867 8.39431 0.625968 7.81591 1.29727C7.36151 1.81367 6.93801 2.62957 6.93801 3.45587C6.93801 3.57977 6.95871 3.70377 6.96901 3.74507C7.02061 3.75537 7.10331 3.76577 7.18591 3.76577C7.90891 3.76567 8.81771 3.28027 9.34451 2.62957Z"
        fill="black"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1987 12.5928L9.69873 9.09284C10.5804 8.01301 11.0136 6.63571 10.9086 5.2456C10.8037 3.85549 10.1687 2.55882 9.13494 1.62357C8.10114 0.688328 6.74754 0.186 5.3539 0.220408C3.96025 0.254816 2.63309 0.823327 1.64671 1.80845C0.660317 2.79357 0.0900984 4.11999 0.053898 5.51359C0.0176976 6.90719 0.518282 8.26143 1.4522 9.29643C2.38611 10.3314 3.68196 10.9681 5.07194 11.0748C6.46192 11.1815 7.83977 10.7501 8.92073 9.86984L12.4207 13.3698C12.5239 13.473 12.6638 13.531 12.8097 13.531C12.9556 13.531 13.0956 13.473 13.1987 13.3698C13.3019 13.2667 13.3599 13.1267 13.3599 12.9808C13.3599 12.8349 13.3019 12.695 13.1987 12.5918V12.5928ZM1.17773 5.66783C1.17793 4.81366 1.4314 3.97872 1.9061 3.2686C2.3808 2.55847 3.0554 2.00505 3.84461 1.67831C4.63382 1.35157 5.5022 1.26618 6.33994 1.43294C7.17767 1.59971 7.94715 2.01113 8.55108 2.61519C9.155 3.21926 9.56624 3.98883 9.73281 4.82661C9.89938 5.66438 9.81379 6.53274 9.48687 7.32188C9.15994 8.11101 8.60637 8.78549 7.89613 9.26002C7.1859 9.73455 6.3509 9.98783 5.49673 9.98783C4.35141 9.98677 3.25332 9.53126 2.44355 8.72131C1.63378 7.91135 1.17852 6.81315 1.17773 5.66783Z"
        fill="black"
      />
    </svg>
  );
}

function ShoppingBagIcon() {
  return (
    <svg
      width="30"
      height="44"
      viewBox="0 0 30 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="p-0 m-0 border-0"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.9688 25.9C20.9688 26.5 20.4688 27 19.8687 27H11.0687C10.4687 27 9.96875 26.5 9.96875 25.9V18C9.96875 17.5 10.4687 17 11.0687 17H19.9688C20.5688 17 21.0688 17.5 21.0688 18.1V25.9H20.9688ZM15.4688 14C16.6687 14 17.5688 14.9 17.7688 16H13.1687C13.3687 14.9 14.2688 14 15.4688 14ZM19.8687 16H18.7688C18.5688 14.3 17.1687 13 15.4688 13C13.7688 13 12.3688 14.3 12.1688 16H11.0687C9.86875 16 8.96875 16.9 8.96875 18.1V26C8.96875 27.1 9.86875 28 11.0687 28H19.9688C21.0688 28 22.0688 27.1 22.0688 25.9V18C21.9688 16.9 21.0687 16 19.8687 16Z"
        fill="black"
      />
    </svg>
  );
}

function LargeAppleIcon() {
  return (
    <svg
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 md:w-12 md:h-12"
    >
      <path
        d="M13.0729 5.52137C12.9799 5.59367 11.3481 6.51287 11.3481 8.55777C11.3481 10.9229 13.424 11.7595 13.486 11.7801C13.4757 11.8317 13.1555 12.9265 12.3912 14.0419C11.7096 15.0231 10.9969 16.0042 9.91251 16.0042C8.82811 16.0042 8.54921 15.3742 7.29951 15.3742C6.08081 15.3742 5.64701 16.0249 4.65551 16.0249C3.66401 16.0249 2.97201 15.116 2.17681 14.0006C1.25761 12.6889 0.514008 10.6543 0.514008 8.72297C0.514008 5.62457 2.52801 3.98237 4.51091 3.98237C5.56441 3.98237 6.44221 4.67437 7.10321 4.67437C7.73321 4.67437 8.71441 3.94107 9.91241 3.94107C10.3669 3.94117 11.9988 3.98257 13.0729 5.52137ZM9.34451 2.62957C9.84021 2.04087 10.1914 1.22497 10.1914 0.409067C10.1914 0.295467 10.1811 0.181867 10.1604 0.0888672C9.35481 0.119867 8.39431 0.625968 7.81591 1.29727C7.36151 1.81367 6.93801 2.62957 6.93801 3.45587C6.93801 3.57977 6.95871 3.70377 6.96901 3.74507C7.02061 3.75537 7.10331 3.76577 7.18591 3.76577C7.90891 3.76567 8.81771 3.28027 9.34451 2.62957Z"
        fill="black"
      />
    </svg>
  );
}

function HamburgerDisabledIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <polyline
        id="globalnav-menutrigger-bread-bottom"
        fill="none"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        points="2 12, 16 12"
        class="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"
      >
        <animate
          id="globalnav-anim-menutrigger-bread-bottom-open"
          attributeName="points"
          keyTimes="0;0.5;1"
          dur="0.24s"
          begin="indefinite"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
          values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
        ></animate>
        <animate
          id="globalnav-anim-menutrigger-bread-bottom-close"
          attributeName="points"
          keyTimes="0;0.5;1"
          dur="0.24s"
          begin="indefinite"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
          values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
        ></animate>
      </polyline>
      <polyline
        id="globalnav-menutrigger-bread-top"
        fill="none"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        points="2 5, 16 5"
        class="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"
      >
        <animate
          id="globalnav-anim-menutrigger-bread-top-open"
          attributeName="points"
          keyTimes="0;0.5;1"
          dur="0.24s"
          begin="indefinite"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
          values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
        ></animate>
        <animate
          id="globalnav-anim-menutrigger-bread-top-close"
          attributeName="points"
          keyTimes="0;0.5;1"
          dur="0.24s"
          begin="indefinite"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
          values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
        ></animate>
      </polyline>
    </svg>
  );
}

export const appleIcons = [
  AppleIcon,
  SearchIcon,
  ShoppingBagIcon,
  LargeAppleIcon,
  HamburgerDisabledIcon,
];
