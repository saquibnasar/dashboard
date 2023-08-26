import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SocialLink from "../SocialLink";
import Footer from "../Footer";
import ReactPlayer from "react-player/youtube";
import ImgSlider from "../ImgSlider";
import Video from "./Video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function UserProfile(props) {
  // const { userProfileId } = useParams();
  const [data, setData] = useState("");
  const [isCopy, setIsCopy] = useState("Copy");
  const [isShareClicked, setIsShareClicked] = useState(false);
  // useEffect(() => {
  //   fetch(
  //     `https://7drkndiu7g.execute-api.ap-south-1.amazonaws.com/v1/previewprofile/${userProfileId}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [1]);
  window.addEventListener("click", function (e) {
    if (
      document.getElementById("share_link") &&
      document.getElementById("share_link").contains(e.target)
    ) {
      if (!document.getElementById("share_link-container").contains(e.target)) {
        setIsShareClicked(false);
      }
    }
  });
  return (
    <>
      <section className="userProile hero main-container p-relative">
        {/* {isShareClicked ? (
          <div className="share_link" id="share_link">
            <div className="share_link-container" id="share_link-container">
              <div className="share_link-close">
                <p className="sc-hKgILt gRrZhT">Share this flax</p>

                <button
                  className="share_link-close-btn"
                  onClick={() => setIsShareClicked(false)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    data-testid="CloseButton"
                    enableBackground="new 0 0 24 24"
                    className="sc-gKsewC iPWGYb"
                  >
                    <path
                      d="M13.3536 3.35357L13.7072 3.00001L13.0001 2.29291L12.6465 2.64646L13.3536 3.35357ZM2.64652 12.6465L2.29297 13L3.00008 13.7071L3.35363 13.3536L2.64652 12.6465ZM3.35363 2.64646L3.00008 2.29291L2.29297 3.00001L2.64652 3.35357L3.35363 2.64646ZM12.6465 13.3536L13.0001 13.7071L13.7072 13L13.3536 12.6465L12.6465 13.3536ZM12.6465 2.64646L2.64652 12.6465L3.35363 13.3536L13.3536 3.35357L12.6465 2.64646ZM2.64652 3.35357L12.6465 13.3536L13.3536 12.6465L3.35363 2.64646L2.64652 3.35357Z"
                      fill="black"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="share_link-links">
                <a target="_blank" className="" href="/">
                  <div className="d-flex align-items-center gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      data-testid="ShareIcon-facebook"
                      enableBackground="new 0 0 24 24"
                      className="sc-gKsewC fzJjte"
                    >
                      <rect
                        width="24"
                        height="24.0004"
                        rx="4"
                        fill="#1877F2"
                      ></rect>
                      <path
                        d="M18 12.0002C18 8.68611 15.3141 6.00012 12 6.00012C8.68594 6.00012 6 8.68611 6 12.0002C6 14.9956 8.19375 17.4777 11.0625 17.9277V13.7346H9.53906V12.0002H11.0625V10.6783C11.0625 9.17479 11.9578 8.34391 13.3289 8.34391C13.9852 8.34391 14.6719 8.4611 14.6719 8.4611V9.93769H13.9148C13.1695 9.93769 12.9375 10.4006 12.9375 10.8752V12.0002H14.6016L14.3355 13.7346H12.9375V17.9277C15.8062 17.4777 18 14.9956 18 12.0002Z"
                        fill="white"
                      ></path>
                    </svg>
                    <p className="sc-hKgILt gRrZhT">Share on Facebook</p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    enableBackground="new 0 0 24 24"
                    className="sc-gKsewC iPWGYb"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                      fill="black"
                    ></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  data-testid="ShareModal-ShareLink"
                  className="sc-pFZIQ sc-kIeTtH fWbLmv akIsE"
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://linktr.ee/hbo?utm_source=linktree_profile_share&amp;ltsid=aa9b2afa-c835-474f-ace7-04de71c29ac5"
                >
                  <div className="d-flex align-items-center gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      data-testid="ShareIcon-linkedin"
                      enableBackground="new 0 0 24 24"
                      className="sc-gKsewC fzJjte"
                    >
                      <g clipPath="url(#clip0_657_585)">
                        <rect
                          y="0.000488281"
                          width="24"
                          height="24.0004"
                          rx="4"
                          fill="#0A66C2"
                        ></rect>
                        <path
                          d="M8.65574 10.1318H6.19672V18.0008H8.65574V10.1318ZM8.87705 7.42687C8.87835 7.24086 8.84299 7.05642 8.77301 6.88407C8.70302 6.71173 8.59977 6.55486 8.46916 6.42242C8.33855 6.28997 8.18313 6.18456 8.01178 6.11218C7.84043 6.03981 7.6565 6.0019 7.47049 6.00061H7.42623C7.04797 6.00061 6.6852 6.15088 6.41773 6.41835C6.15026 6.68583 6 7.0486 6 7.42687C6 7.80513 6.15026 8.16791 6.41773 8.43538C6.6852 8.70285 7.04797 8.85312 7.42623 8.85312C7.61225 8.8577 7.79734 8.82557 7.97094 8.75859C8.14454 8.69161 8.30324 8.59107 8.43797 8.46273C8.57271 8.33439 8.68083 8.18076 8.75617 8.01062C8.83151 7.84047 8.87258 7.65715 8.87705 7.47113V7.42687ZM18 13.2204C18 10.8548 16.4951 9.93511 15 9.93511C14.5105 9.91059 14.0231 10.0149 13.5864 10.2375C13.1498 10.4601 12.7791 10.7934 12.5115 11.204H12.4426V10.1318H10.1311V18.0008H12.5902V13.8155C12.5546 13.3869 12.6896 12.9615 12.9659 12.6318C13.2421 12.3022 13.6373 12.0948 14.0656 12.0548H14.159C14.941 12.0548 15.5213 12.5466 15.5213 13.786V18.0008H17.9803L18 13.2204Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_657_585">
                          <path
                            d="M0 4.00049C0 1.79135 1.79086 0.000488281 4 0.000488281H20C22.2091 0.000488281 24 1.79135 24 4.00049V20.0009C24 22.2101 22.2091 24.0009 20 24.0009H4C1.79086 24.0009 0 22.2101 0 20.0009V4.00049Z"
                            fill="white"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="sc-hKgILt gRrZhT">Share on LinkedIn</p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    enableBackground="new 0 0 24 24"
                    className="sc-gKsewC iPWGYb"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                      fill="black"
                    ></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  data-testid="ShareModal-ShareLink"
                  className="sc-pFZIQ sc-kIeTtH fWbLmv akIsE"
                  href="https://twitter.com/intent/tweet?text=Check out this Linktree! - https://linktr.ee/hbo?utm_source=linktree_profile_share&amp;ltsid=aa9b2afa-c835-474f-ace7-04de71c29ac5"
                >
                  <div className="d-flex align-items-center gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      data-testid="ShareIcon-twitter"
                      enableBackground="new 0 0 24 24"
                      className="sc-gKsewC fzJjte"
                    >
                      <g clipPath="url(#clip0_657_1097)">
                        <rect
                          y="0.000854492"
                          width="24"
                          height="24.0004"
                          rx="4"
                          fill="#1DA1F2"
                        ></rect>
                        <path
                          d="M18 8.35151C17.5587 8.54635 17.0846 8.67799 16.5863 8.7375C17.0947 8.43419 17.4847 7.95289 17.6686 7.37997C17.193 7.66116 16.6661 7.86548 16.1053 7.975C15.6561 7.49897 15.0166 7.20093 14.3085 7.20093C12.9492 7.20093 11.8467 8.29938 11.8467 9.6548C11.8467 9.84648 11.8689 10.0329 11.9102 10.213C9.8633 10.1103 8.05003 9.13349 6.83555 7.64958C6.62415 8.01292 6.5026 8.43419 6.5026 8.88283C6.5026 9.73379 6.93755 10.4852 7.59764 10.9249C7.19387 10.9118 6.81441 10.8017 6.48252 10.6179V10.6495C6.48252 11.838 7.33075 12.8296 8.4575 13.055C8.25033 13.1108 8.03312 13.1403 7.80904 13.1403C7.65049 13.1403 7.49564 13.1255 7.34555 13.0971C7.65894 14.0713 8.56796 14.7811 9.64556 14.8C8.80261 15.4583 7.74086 15.8506 6.58769 15.8506C6.38897 15.8506 6.1929 15.839 6 15.8164C7.08976 16.513 8.38351 16.9185 9.77345 16.9185C14.3027 16.9185 16.7786 13.1808 16.7786 9.93916C16.7786 9.83384 16.776 9.72747 16.7712 9.62216C17.2522 9.27566 17.6697 8.84439 17.9989 8.35309L18 8.35151Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_657_1097">
                          <path
                            d="M0 4.00085C0 1.79172 1.79086 0.000854492 4 0.000854492H20C22.2091 0.000854492 24 1.79172 24 4.00085V20.0013C24 22.2104 22.2091 24.0013 20 24.0013H4C1.79086 24.0013 0 22.2104 0 20.0013V4.00085Z"
                            fill="white"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="sc-hKgILt gRrZhT">Share on Twitter</p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    enableBackground="new 0 0 24 24"
                    className="sc-gKsewC iPWGYb"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                      fill="black"
                    ></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  data-testid="ShareModal-ShareLink"
                  className="sc-pFZIQ sc-kIeTtH fWbLmv akIsE"
                  href="https://wa.me/?text=Check out this Linktree! - https://linktr.ee/hbo?utm_source=linktree_profile_share&amp;ltsid=aa9b2afa-c835-474f-ace7-04de71c29ac5"
                >
                  <div className="d-flex align-items-center gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      data-testid="ShareIcon-whatsapp"
                      enableBackground="new 0 0 24 24"
                      className="sc-gKsewC fzJjte"
                    >
                      <g clipPath="url(#clip0_657_572)">
                        <rect
                          y="0.0012207"
                          width="24"
                          height="24.0004"
                          rx="4"
                          fill="#00E676"
                        ></rect>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.201 7.74608C15.0805 6.61991 13.5866 6.00122 11.9957 6.00122C8.71989 6.00122 6.05132 8.66984 6.04847 11.9457C6.04847 12.9949 6.32217 14.0156 6.84105 14.9194L6 18.0014L9.15324 17.1746C10.0228 17.6479 11.0007 17.8988 11.9957 17.8988H11.9986C15.2744 17.8988 17.943 15.2302 17.9458 11.9514C17.943 10.3634 17.3243 8.86941 16.201 7.74608ZM11.9957 16.8924C11.1062 16.8924 10.2366 16.6529 9.47826 16.2024L9.29865 16.0941L7.42837 16.5844L7.9273 14.7598L7.81041 14.5716C7.31433 13.7847 7.05488 12.8752 7.05488 11.9429C7.05488 9.22295 9.27299 7.0048 11.9986 7.0048C13.3186 7.0048 14.5588 7.52085 15.4939 8.45315C16.4262 9.38831 16.9394 10.6285 16.9394 11.9486C16.9366 14.6771 14.7185 16.8924 11.9957 16.8924ZM14.7071 13.1917C14.5588 13.1175 13.8289 12.7583 13.6921 12.707C13.5552 12.6585 13.4555 12.6328 13.3585 12.7811C13.2587 12.9294 12.9736 13.2658 12.8881 13.3627C12.8026 13.4625 12.7142 13.4739 12.5659 13.3998C12.4177 13.3257 11.9387 13.1688 11.3713 12.6614C10.9294 12.2679 10.6329 11.7804 10.5445 11.6321C10.459 11.4839 10.536 11.404 10.6101 11.3299C10.6757 11.2643 10.7584 11.156 10.8325 11.0704C10.9066 10.9849 10.9323 10.9222 10.9808 10.8224C11.0292 10.7226 11.0064 10.6371 10.9694 10.563C10.9323 10.4888 10.6358 9.7561 10.5103 9.45959C10.3906 9.16878 10.268 9.20869 10.1768 9.20584C10.0912 9.20014 9.99145 9.20014 9.89166 9.20014C9.79187 9.20014 9.63222 9.2372 9.49537 9.38546C9.35852 9.53371 8.97648 9.89295 8.97648 10.6257C8.97648 11.3584 9.50962 12.0626 9.58375 12.1624C9.65788 12.2622 10.6301 13.7619 12.1212 14.4062C12.4747 14.5602 12.7512 14.6514 12.9679 14.7198C13.3243 14.8339 13.6465 14.8168 13.9031 14.7797C14.1882 14.7369 14.7812 14.4205 14.9066 14.0726C15.0292 13.7248 15.0292 13.4283 14.9922 13.3656C14.9551 13.3028 14.8553 13.2658 14.7071 13.1917Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_657_572">
                          <path
                            d="M0 4.00122C0 1.79208 1.79086 0.0012207 4 0.0012207H20C22.2091 0.0012207 24 1.79208 24 4.00122V20.0016C24 22.2108 22.2091 24.0016 20 24.0016H4C1.79086 24.0016 0 22.2108 0 20.0016V4.00122Z"
                            fill="white"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="sc-hKgILt gRrZhT">Share via WhatsApp</p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    enableBackground="new 0 0 24 24"
                    className="sc-gKsewC iPWGYb"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                      fill="black"
                    ></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  data-testid="ShareModal-ShareLink"
                  className="sc-pFZIQ sc-kIeTtH fWbLmv akIsE"
                  href="https://www.messenger.com/new"
                >
                  <div className="d-flex align-items-center gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      data-testid="ShareIcon-messenger"
                      enableBackground="new 0 0 24 24"
                      className="sc-gKsewC fzJjte"
                    >
                      <g clipPath="url(#clip0_657_559)">
                        <rect
                          y="0.00170898"
                          width="24"
                          height="24.0004"
                          rx="4"
                          fill="#F1F1F1"
                        ></rect>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 6.00171C8.62002 6.00171 6 8.4776 6 11.8218C6 13.5711 6.71688 15.0826 7.88434 16.1267C7.98234 16.2144 8.0415 16.3373 8.04552 16.4688L8.0782 17.5361C8.08864 17.8765 8.44029 18.0981 8.75181 17.9605L9.94273 17.4348C10.0437 17.3903 10.1568 17.382 10.2632 17.4113C10.8104 17.5618 11.3929 17.6419 12 17.6419C15.38 17.6419 18 15.166 18 11.8218C18 8.4776 15.38 6.00171 12 6.00171Z"
                          fill="url(#paint0_radial_657_559)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.39691 13.5238L10.1594 10.7275C10.4398 10.2827 11.0401 10.1719 11.4608 10.4874L12.8626 11.5388C12.9912 11.6353 13.1682 11.6347 13.2962 11.5375L15.1895 10.1007C15.4421 9.90896 15.772 10.2114 15.6029 10.4797L13.8404 13.276C13.56 13.7208 12.9596 13.8316 12.539 13.5161L11.1372 12.4647C11.0086 12.3682 10.8316 12.3688 10.7035 12.466L8.81031 13.9028C8.55762 14.0945 8.22777 13.7921 8.39691 13.5238Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <radialGradient
                          id="paint0_radial_657_559"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(8.3097 17.9377) scale(13.0752 13.0754)"
                        >
                          <stop stopColor="#0099FF"></stop>
                          <stop offset="0.609754" stopColor="#A033FF"></stop>
                          <stop offset="0.934823" stopColor="#FF5280"></stop>
                          <stop offset="1" stopColor="#FF7061"></stop>
                        </radialGradient>
                        <clipPath id="clip0_657_559">
                          <path
                            d="M0 4.00171C0 1.79257 1.79086 0.00170898 4 0.00170898H20C22.2091 0.00170898 24 1.79257 24 4.00171V20.0021C24 22.2113 22.2091 24.0021 20 24.0021H4C1.79086 24.0021 0 22.2113 0 20.0021V4.00171Z"
                            fill="white"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="sc-hKgILt gRrZhT">Share via Messenger</p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    enableBackground="new 0 0 24 24"
                    className="sc-gKsewC iPWGYb"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                      fill="black"
                    ></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  data-testid="ShareModal-ShareLink"
                  className="sc-pFZIQ sc-kIeTtH fWbLmv akIsE"
                  href="mailto:?subject= Check out this Linktree! &amp;body= Check out this Linktree! - https://linktr.ee/hbo?utm_source=linktree_profile_share&amp;ltsid=aa9b2afa-c835-474f-ace7-04de71c29ac5"
                >
                  <div className="d-flex align-items-center gap-3">
                    <svg
                      viewBox="0 0 48 48"
                      data-testid="ShareIcon-email"
                      enableBackground="new 0 0 24 24"
                      className="sc-gKsewC fzJjte"
                    >
                      <rect
                        y="0.000488281"
                        width="48"
                        height="48"
                        rx="8"
                        fill="#60696C"
                      ></rect>
                      <path
                        d="M24.154 26.5681C24.2473 26.6569 24.3712 26.7064 24.5 26.7061C24.6288 26.7064 24.7527 26.6569 24.846 26.5681L26.2624 25.2141L31.454 30.1901C31.5471 30.2793 31.6711 30.3291 31.8 30.3291C32.0042 30.3291 32.1879 30.205 32.264 30.0155C32.3401 29.8261 32.2934 29.6093 32.146 29.4681L26.986 24.5224L32.214 19.5251C32.3432 19.4016 32.3966 19.2187 32.3543 19.0451C32.312 18.8715 32.1803 18.7337 32.0088 18.6836C31.8373 18.6335 31.6522 18.6786 31.523 18.8021L25.9411 24.1376C25.9242 24.1517 25.9083 24.1669 25.8934 24.1832L24.5 25.5151L23.1138 24.1901C23.1093 24.185 23.1047 24.18 23.1 24.1751C23.0849 24.1593 23.0689 24.1447 23.0524 24.1313L17.477 18.8021C17.3478 18.6786 17.1627 18.6335 16.9912 18.6836C16.8197 18.7337 16.688 18.8715 16.6457 19.0451C16.6034 19.2187 16.6568 19.4016 16.786 19.5251L22.0145 24.5229L16.853 29.4701C16.7062 29.6116 16.66 29.8281 16.7363 30.0172C16.8126 30.2063 16.9961 30.3301 17.2 30.3301C17.3296 30.3306 17.4544 30.2808 17.548 30.1911L22.7381 25.2147L24.154 26.5681Z"
                        fill="white"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35 29.3181C34.9978 31.349 33.3519 32.9949 31.321 32.9971H17.679C15.6481 32.9949 14.0022 31.349 14 29.3181V19.6761C14.0022 17.6451 15.6481 15.9993 17.679 15.9971H31.321C33.3519 15.9993 34.9978 17.6451 35 19.6761V29.3181ZM17.679 16.9971C16.2001 16.9987 15.0017 18.1972 15 19.6761V29.3181C15.0017 30.797 16.2001 31.9954 17.679 31.9971H31.321C32.7999 31.9954 33.9983 30.797 34 29.3181V19.6761C33.9983 18.1972 32.7999 16.9987 31.321 16.9971H17.679Z"
                        fill="white"
                      ></path>
                    </svg>

                    <p className="sc-hKgILt gRrZhT">Share via Email</p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    enableBackground="new 0 0 24 24"
                    className="sc-gKsewC iPWGYb"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                      fill="black"
                    ></path>
                  </svg>
                </a>
              </div>

              <div className="px-12">
                <button
                  className="btn-copy mt-4"
                  onClick={() => {
                    navigator.clipboard.writeText("http://192.168.130.83:3000/a");
                    setIsCopy("Copied!");
                    setTimeout(() => {
                      setIsCopy("Copy");
                    }, 900);
                  }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <img className="img-fluid" src="/logo.png" alt="" />
                    <p className="">flax.ai/a</p>
                  </div>
                  <p className={isCopy === "Copied!" ? "Copied" : ""}>
                    {isCopy}
                  </p>
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <button className="btn-dot" onClick={() => setIsShareClicked(true)}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              fill="black"
              stroke="black"
              d="M12.6661 7.33348C12.2979 7.33348 11.9994 7.63195 11.9994 8.00014C11.9994 8.36833 12.2979 8.66681 12.6661 8.66681C13.0343 8.66681 13.3328 8.36833 13.3328 8.00014C13.3328 7.63195 13.0343 7.33348 12.6661 7.33348Z"
            ></path>
            <path
              fill="black"
              stroke="black"
              d="M8.00057 7.33348C7.63238 7.33348 7.3339 7.63195 7.3339 8.00014C7.3339 8.36833 7.63238 8.66681 8.00057 8.66681C8.36876 8.66681 8.66724 8.36833 8.66724 8.00014C8.66724 7.63195 8.36876 7.33348 8.00057 7.33348Z"
            ></path>
            <path
              fill="black"
              stroke="black"
              d="M3.33333 7.33348C2.96514 7.33348 2.66667 7.63195 2.66667 8.00014C2.66667 8.36833 2.96514 8.66681 3.33333 8.66681C3.70152 8.66681 4 8.36833 4 8.00014C4 7.63195 3.70152 7.33348 3.33333 7.33348Z"
            ></path>
          </svg>
        </button> */}
        <div className="logo-only">
          {props.images &&
          (props.images.bannerImage1 ||
            props.images.bannerImage2 ||
            props.images.bannerImage3) ? (
            <ImgSlider sliderImage={props.images} />
          ) : (
            ""
          )}

          {props.arrayImages ? (
            <ImgSlider arrayImages={props.arrayImages} />
          ) : (
            ""
          )}

          {/* <img
              className="img-fluid w-100"
              src={props.bannerImage ? props.bannerImage : "/bguserProfile.png"}
              alt=""
            /> */}
        </div>
        <div className="container">
          <div
            className={
              props.images &&
              !(
                props.images.bannerImage1 ||
                props.images.bannerImage2 ||
                props.images.bannerImage3
              )
                ? "header_content text-center"
                : "header_content text-center mt-5"
            }
          >
            {/* <img
              className="img-fluid"
              src={props.logo ? props.logo : "/qrcode.png"}
              alt=""
            /> */}
            {props.logo ? (
              <img className="img-fluid" src={props.logo} alt="" />
            ) : (
              <span className="logo">
                <FontAwesomeIcon icon={faUser} />
              </span>
            )}

            <h1>
              {props.formData &&
              props.formData.userInfo &&
              props.formData.userInfo.username
                ? props.formData.userInfo.username
                : "user name"}
            </h1>
            <h2>
              {props.formData &&
              props.formData.userInfo &&
              props.formData.userInfo.designation
                ? props.formData.userInfo.designation
                : "Designation"}{" "}
              at company
            </h2>
            <h3>
              Employee ID -{" "}
              {props.formData &&
              props.formData.userInfo &&
              props.formData.userInfo.employeeId
                ? props.formData.userInfo.employeeId
                : "xxxxxxxxx"}
            </h3>
            <span></span>
            <h4 className="">About ComXXXX</h4>
            <h5>
              {props.formData &&
              props.formData.userInfo &&
              props.formData.userInfo.employeeBio
                ? props.formData.userInfo.employeeBio
                : "user bio"}
            </h5>
            <button className="btn">Save My Contact </button>
          </div>

          {props.formData &&
          props.formData.userLink &&
          props.formData.userLink.length ? (
            <SocialLink links={props.formData.userLink} />
          ) : (
            ""
          )}

          {props.formData &&
          props.formData.userPlugin &&
          props.formData.userPlugin.length ? (
            <Video data={props.formData.userPlugin} />
          ) : (
            ""
          )}

          {/* <div className="_username__featuredLink__MeYB7">
            <h3>
              Biggest Reward & Recognition Event (2019) - Investors Clinic
            </h3>
            <div className="BaseEmbeddedLink_baseEmbeddedLinkWrapper__SlpfZ">
              <div className="BaseEmbeddedLink_baseEmbeddedLink__WXu5a">
                <div className="BaseEmbeddedLink_baseEmbeddedLinkContainer__SlSm5 BaseEmbeddedLink_baseEmbeddedLinkContainerEmbed__py5x8">
                  <div className="BaseEmbeddedLink_baseEmbeddedLinkItem__EDHSQ BaseEmbeddedLink_baseEmbeddedLinkItemVisible__63uQ_">
                    <ReactPlayer
                      // url={`https://www.youtube.com/embed/${url}?showinfo=0&amp;modestbranding=1&modestbranding=3&controls=0&rel=1&contore=1`}
                      url="https://www.youtube.com/watch?v=TNQsmPf24go&t=2s"
                      light={true}
                      width="100%"
                      playing={true}
                      className="EmbeddedYouTube_embeddedYouTube__kZebg EmbeddedYouTube_featuredLinkEmbeddedVideo__GERzu reactYoutube"
                      height="100%"
                      controls
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <Footer /> */}
        </div>
      </section>
      {/* {data ? (
        <section className="userProile hero main-container p-relative">
          {isShareClicked ? (
            <div className="share_link" id="share_link">
              <div className="share_link-container" id="share_link-container">
                <div className="share_link-close">
                  <p className="sc-hKgILt gRrZhT">Share this flax</p>

                  <button
                    className="share_link-close-btn"
                    onClick={() => setIsShareClicked(false)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      data-testid="CloseButton"
                      enableBackground="new 0 0 24 24"
                      className="sc-gKsewC iPWGYb"
                    >
                      <path
                        d="M13.3536 3.35357L13.7072 3.00001L13.0001 2.29291L12.6465 2.64646L13.3536 3.35357ZM2.64652 12.6465L2.29297 13L3.00008 13.7071L3.35363 13.3536L2.64652 12.6465ZM3.35363 2.64646L3.00008 2.29291L2.29297 3.00001L2.64652 3.35357L3.35363 2.64646ZM12.6465 13.3536L13.0001 13.7071L13.7072 13L13.3536 12.6465L12.6465 13.3536ZM12.6465 2.64646L2.64652 12.6465L3.35363 13.3536L13.3536 3.35357L12.6465 2.64646ZM2.64652 3.35357L12.6465 13.3536L13.3536 12.6465L3.35363 2.64646L2.64652 3.35357Z"
                        fill="black"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="share_link-links">
                  <a target="_blank" className="" href="/">
                    <div className="d-flex align-items-center gap-3">
                      <svg
                        viewBox="0 0 24 24"
                        data-testid="ShareIcon-facebook"
                        enableBackground="new 0 0 24 24"
                        className="sc-gKsewC fzJjte"
                      >
                        <rect
                          width="24"
                          height="24.0004"
                          rx="4"
                          fill="#1877F2"
                        ></rect>
                        <path
                          d="M18 12.0002C18 8.68611 15.3141 6.00012 12 6.00012C8.68594 6.00012 6 8.68611 6 12.0002C6 14.9956 8.19375 17.4777 11.0625 17.9277V13.7346H9.53906V12.0002H11.0625V10.6783C11.0625 9.17479 11.9578 8.34391 13.3289 8.34391C13.9852 8.34391 14.6719 8.4611 14.6719 8.4611V9.93769H13.9148C13.1695 9.93769 12.9375 10.4006 12.9375 10.8752V12.0002H14.6016L14.3355 13.7346H12.9375V17.9277C15.8062 17.4777 18 14.9956 18 12.0002Z"
                          fill="white"
                        ></path>
                      </svg>
                      <p className="sc-hKgILt gRrZhT">Share on Facebook</p>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      enableBackground="new 0 0 24 24"
                      className="sc-gKsewC iPWGYb"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                        fill="black"
                      ></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    data-testid="ShareModal-ShareLink"
                    className="sc-pFZIQ sc-kIeTtH fWbLmv akIsE"
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://linktr.ee/hbo?utm_source=linktree_profile_share&amp;ltsid=aa9b2afa-c835-474f-ace7-04de71c29ac5"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <svg
                        viewBox="0 0 24 24"
                        data-testid="ShareIcon-linkedin"
                        enableBackground="new 0 0 24 24"
                        className="sc-gKsewC fzJjte"
                      >
                        <g clipPath="url(#clip0_657_585)">
                          <rect
                            y="0.000488281"
                            width="24"
                            height="24.0004"
                            rx="4"
                            fill="#0A66C2"
                          ></rect>
                          <path
                            d="M8.65574 10.1318H6.19672V18.0008H8.65574V10.1318ZM8.87705 7.42687C8.87835 7.24086 8.84299 7.05642 8.77301 6.88407C8.70302 6.71173 8.59977 6.55486 8.46916 6.42242C8.33855 6.28997 8.18313 6.18456 8.01178 6.11218C7.84043 6.03981 7.6565 6.0019 7.47049 6.00061H7.42623C7.04797 6.00061 6.6852 6.15088 6.41773 6.41835C6.15026 6.68583 6 7.0486 6 7.42687C6 7.80513 6.15026 8.16791 6.41773 8.43538C6.6852 8.70285 7.04797 8.85312 7.42623 8.85312C7.61225 8.8577 7.79734 8.82557 7.97094 8.75859C8.14454 8.69161 8.30324 8.59107 8.43797 8.46273C8.57271 8.33439 8.68083 8.18076 8.75617 8.01062C8.83151 7.84047 8.87258 7.65715 8.87705 7.47113V7.42687ZM18 13.2204C18 10.8548 16.4951 9.93511 15 9.93511C14.5105 9.91059 14.0231 10.0149 13.5864 10.2375C13.1498 10.4601 12.7791 10.7934 12.5115 11.204H12.4426V10.1318H10.1311V18.0008H12.5902V13.8155C12.5546 13.3869 12.6896 12.9615 12.9659 12.6318C13.2421 12.3022 13.6373 12.0948 14.0656 12.0548H14.159C14.941 12.0548 15.5213 12.5466 15.5213 13.786V18.0008H17.9803L18 13.2204Z"
                            fill="white"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_657_585">
                            <path
                              d="M0 4.00049C0 1.79135 1.79086 0.000488281 4 0.000488281H20C22.2091 0.000488281 24 1.79135 24 4.00049V20.0009C24 22.2101 22.2091 24.0009 20 24.0009H4C1.79086 24.0009 0 22.2101 0 20.0009V4.00049Z"
                              fill="white"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="sc-hKgILt gRrZhT">Share on LinkedIn</p>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      enableBackground="new 0 0 24 24"
                      className="sc-gKsewC iPWGYb"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                        fill="black"
                      ></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    data-testid="ShareModal-ShareLink"
                    className="sc-pFZIQ sc-kIeTtH fWbLmv akIsE"
                    href="https://twitter.com/intent/tweet?text=Check out this Linktree! - https://linktr.ee/hbo?utm_source=linktree_profile_share&amp;ltsid=aa9b2afa-c835-474f-ace7-04de71c29ac5"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <svg
                        viewBox="0 0 24 24"
                        data-testid="ShareIcon-twitter"
                        enableBackground="new 0 0 24 24"
                        className="sc-gKsewC fzJjte"
                      >
                        <g clipPath="url(#clip0_657_1097)">
                          <rect
                            y="0.000854492"
                            width="24"
                            height="24.0004"
                            rx="4"
                            fill="#1DA1F2"
                          ></rect>
                          <path
                            d="M18 8.35151C17.5587 8.54635 17.0846 8.67799 16.5863 8.7375C17.0947 8.43419 17.4847 7.95289 17.6686 7.37997C17.193 7.66116 16.6661 7.86548 16.1053 7.975C15.6561 7.49897 15.0166 7.20093 14.3085 7.20093C12.9492 7.20093 11.8467 8.29938 11.8467 9.6548C11.8467 9.84648 11.8689 10.0329 11.9102 10.213C9.8633 10.1103 8.05003 9.13349 6.83555 7.64958C6.62415 8.01292 6.5026 8.43419 6.5026 8.88283C6.5026 9.73379 6.93755 10.4852 7.59764 10.9249C7.19387 10.9118 6.81441 10.8017 6.48252 10.6179V10.6495C6.48252 11.838 7.33075 12.8296 8.4575 13.055C8.25033 13.1108 8.03312 13.1403 7.80904 13.1403C7.65049 13.1403 7.49564 13.1255 7.34555 13.0971C7.65894 14.0713 8.56796 14.7811 9.64556 14.8C8.80261 15.4583 7.74086 15.8506 6.58769 15.8506C6.38897 15.8506 6.1929 15.839 6 15.8164C7.08976 16.513 8.38351 16.9185 9.77345 16.9185C14.3027 16.9185 16.7786 13.1808 16.7786 9.93916C16.7786 9.83384 16.776 9.72747 16.7712 9.62216C17.2522 9.27566 17.6697 8.84439 17.9989 8.35309L18 8.35151Z"
                            fill="white"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_657_1097">
                            <path
                              d="M0 4.00085C0 1.79172 1.79086 0.000854492 4 0.000854492H20C22.2091 0.000854492 24 1.79172 24 4.00085V20.0013C24 22.2104 22.2091 24.0013 20 24.0013H4C1.79086 24.0013 0 22.2104 0 20.0013V4.00085Z"
                              fill="white"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>

                      <p className="sc-hKgILt gRrZhT">Share on Twitter</p>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      enableBackground="new 0 0 24 24"
                      className="sc-gKsewC iPWGYb"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                        fill="black"
                      ></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    data-testid="ShareModal-ShareLink"
                    className="sc-pFZIQ sc-kIeTtH fWbLmv akIsE"
                    href="https://wa.me/?text=Check out this Linktree! - https://linktr.ee/hbo?utm_source=linktree_profile_share&amp;ltsid=aa9b2afa-c835-474f-ace7-04de71c29ac5"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <svg
                        viewBox="0 0 24 24"
                        data-testid="ShareIcon-whatsapp"
                        enableBackground="new 0 0 24 24"
                        className="sc-gKsewC fzJjte"
                      >
                        <g clipPath="url(#clip0_657_572)">
                          <rect
                            y="0.0012207"
                            width="24"
                            height="24.0004"
                            rx="4"
                            fill="#00E676"
                          ></rect>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.201 7.74608C15.0805 6.61991 13.5866 6.00122 11.9957 6.00122C8.71989 6.00122 6.05132 8.66984 6.04847 11.9457C6.04847 12.9949 6.32217 14.0156 6.84105 14.9194L6 18.0014L9.15324 17.1746C10.0228 17.6479 11.0007 17.8988 11.9957 17.8988H11.9986C15.2744 17.8988 17.943 15.2302 17.9458 11.9514C17.943 10.3634 17.3243 8.86941 16.201 7.74608ZM11.9957 16.8924C11.1062 16.8924 10.2366 16.6529 9.47826 16.2024L9.29865 16.0941L7.42837 16.5844L7.9273 14.7598L7.81041 14.5716C7.31433 13.7847 7.05488 12.8752 7.05488 11.9429C7.05488 9.22295 9.27299 7.0048 11.9986 7.0048C13.3186 7.0048 14.5588 7.52085 15.4939 8.45315C16.4262 9.38831 16.9394 10.6285 16.9394 11.9486C16.9366 14.6771 14.7185 16.8924 11.9957 16.8924ZM14.7071 13.1917C14.5588 13.1175 13.8289 12.7583 13.6921 12.707C13.5552 12.6585 13.4555 12.6328 13.3585 12.7811C13.2587 12.9294 12.9736 13.2658 12.8881 13.3627C12.8026 13.4625 12.7142 13.4739 12.5659 13.3998C12.4177 13.3257 11.9387 13.1688 11.3713 12.6614C10.9294 12.2679 10.6329 11.7804 10.5445 11.6321C10.459 11.4839 10.536 11.404 10.6101 11.3299C10.6757 11.2643 10.7584 11.156 10.8325 11.0704C10.9066 10.9849 10.9323 10.9222 10.9808 10.8224C11.0292 10.7226 11.0064 10.6371 10.9694 10.563C10.9323 10.4888 10.6358 9.7561 10.5103 9.45959C10.3906 9.16878 10.268 9.20869 10.1768 9.20584C10.0912 9.20014 9.99145 9.20014 9.89166 9.20014C9.79187 9.20014 9.63222 9.2372 9.49537 9.38546C9.35852 9.53371 8.97648 9.89295 8.97648 10.6257C8.97648 11.3584 9.50962 12.0626 9.58375 12.1624C9.65788 12.2622 10.6301 13.7619 12.1212 14.4062C12.4747 14.5602 12.7512 14.6514 12.9679 14.7198C13.3243 14.8339 13.6465 14.8168 13.9031 14.7797C14.1882 14.7369 14.7812 14.4205 14.9066 14.0726C15.0292 13.7248 15.0292 13.4283 14.9922 13.3656C14.9551 13.3028 14.8553 13.2658 14.7071 13.1917Z"
                            fill="white"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_657_572">
                            <path
                              d="M0 4.00122C0 1.79208 1.79086 0.0012207 4 0.0012207H20C22.2091 0.0012207 24 1.79208 24 4.00122V20.0016C24 22.2108 22.2091 24.0016 20 24.0016H4C1.79086 24.0016 0 22.2108 0 20.0016V4.00122Z"
                              fill="white"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>

                      <p className="sc-hKgILt gRrZhT">Share via WhatsApp</p>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      enableBackground="new 0 0 24 24"
                      className="sc-gKsewC iPWGYb"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                        fill="black"
                      ></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    data-testid="ShareModal-ShareLink"
                    className="sc-pFZIQ sc-kIeTtH fWbLmv akIsE"
                    href="https://www.messenger.com/new"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <svg
                        viewBox="0 0 24 24"
                        data-testid="ShareIcon-messenger"
                        enableBackground="new 0 0 24 24"
                        className="sc-gKsewC fzJjte"
                      >
                        <g clipPath="url(#clip0_657_559)">
                          <rect
                            y="0.00170898"
                            width="24"
                            height="24.0004"
                            rx="4"
                            fill="#F1F1F1"
                          ></rect>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 6.00171C8.62002 6.00171 6 8.4776 6 11.8218C6 13.5711 6.71688 15.0826 7.88434 16.1267C7.98234 16.2144 8.0415 16.3373 8.04552 16.4688L8.0782 17.5361C8.08864 17.8765 8.44029 18.0981 8.75181 17.9605L9.94273 17.4348C10.0437 17.3903 10.1568 17.382 10.2632 17.4113C10.8104 17.5618 11.3929 17.6419 12 17.6419C15.38 17.6419 18 15.166 18 11.8218C18 8.4776 15.38 6.00171 12 6.00171Z"
                            fill="url(#paint0_radial_657_559)"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.39691 13.5238L10.1594 10.7275C10.4398 10.2827 11.0401 10.1719 11.4608 10.4874L12.8626 11.5388C12.9912 11.6353 13.1682 11.6347 13.2962 11.5375L15.1895 10.1007C15.4421 9.90896 15.772 10.2114 15.6029 10.4797L13.8404 13.276C13.56 13.7208 12.9596 13.8316 12.539 13.5161L11.1372 12.4647C11.0086 12.3682 10.8316 12.3688 10.7035 12.466L8.81031 13.9028C8.55762 14.0945 8.22777 13.7921 8.39691 13.5238Z"
                            fill="white"
                          ></path>
                        </g>
                        <defs>
                          <radialGradient
                            id="paint0_radial_657_559"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(8.3097 17.9377) scale(13.0752 13.0754)"
                          >
                            <stop stopColor="#0099FF"></stop>
                            <stop offset="0.609754" stopColor="#A033FF"></stop>
                            <stop offset="0.934823" stopColor="#FF5280"></stop>
                            <stop offset="1" stopColor="#FF7061"></stop>
                          </radialGradient>
                          <clipPath id="clip0_657_559">
                            <path
                              d="M0 4.00171C0 1.79257 1.79086 0.00170898 4 0.00170898H20C22.2091 0.00170898 24 1.79257 24 4.00171V20.0021C24 22.2113 22.2091 24.0021 20 24.0021H4C1.79086 24.0021 0 22.2113 0 20.0021V4.00171Z"
                              fill="white"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>

                      <p className="sc-hKgILt gRrZhT">Share via Messenger</p>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      enableBackground="new 0 0 24 24"
                      className="sc-gKsewC iPWGYb"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                        fill="black"
                      ></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    data-testid="ShareModal-ShareLink"
                    className="sc-pFZIQ sc-kIeTtH fWbLmv akIsE"
                    href="mailto:?subject= Check out this Linktree! &amp;body= Check out this Linktree! - https://linktr.ee/hbo?utm_source=linktree_profile_share&amp;ltsid=aa9b2afa-c835-474f-ace7-04de71c29ac5"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <svg
                        viewBox="0 0 48 48"
                        data-testid="ShareIcon-email"
                        enableBackground="new 0 0 24 24"
                        className="sc-gKsewC fzJjte"
                      >
                        <rect
                          y="0.000488281"
                          width="48"
                          height="48"
                          rx="8"
                          fill="#60696C"
                        ></rect>
                        <path
                          d="M24.154 26.5681C24.2473 26.6569 24.3712 26.7064 24.5 26.7061C24.6288 26.7064 24.7527 26.6569 24.846 26.5681L26.2624 25.2141L31.454 30.1901C31.5471 30.2793 31.6711 30.3291 31.8 30.3291C32.0042 30.3291 32.1879 30.205 32.264 30.0155C32.3401 29.8261 32.2934 29.6093 32.146 29.4681L26.986 24.5224L32.214 19.5251C32.3432 19.4016 32.3966 19.2187 32.3543 19.0451C32.312 18.8715 32.1803 18.7337 32.0088 18.6836C31.8373 18.6335 31.6522 18.6786 31.523 18.8021L25.9411 24.1376C25.9242 24.1517 25.9083 24.1669 25.8934 24.1832L24.5 25.5151L23.1138 24.1901C23.1093 24.185 23.1047 24.18 23.1 24.1751C23.0849 24.1593 23.0689 24.1447 23.0524 24.1313L17.477 18.8021C17.3478 18.6786 17.1627 18.6335 16.9912 18.6836C16.8197 18.7337 16.688 18.8715 16.6457 19.0451C16.6034 19.2187 16.6568 19.4016 16.786 19.5251L22.0145 24.5229L16.853 29.4701C16.7062 29.6116 16.66 29.8281 16.7363 30.0172C16.8126 30.2063 16.9961 30.3301 17.2 30.3301C17.3296 30.3306 17.4544 30.2808 17.548 30.1911L22.7381 25.2147L24.154 26.5681Z"
                          fill="white"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M35 29.3181C34.9978 31.349 33.3519 32.9949 31.321 32.9971H17.679C15.6481 32.9949 14.0022 31.349 14 29.3181V19.6761C14.0022 17.6451 15.6481 15.9993 17.679 15.9971H31.321C33.3519 15.9993 34.9978 17.6451 35 19.6761V29.3181ZM17.679 16.9971C16.2001 16.9987 15.0017 18.1972 15 19.6761V29.3181C15.0017 30.797 16.2001 31.9954 17.679 31.9971H31.321C32.7999 31.9954 33.9983 30.797 34 29.3181V19.6761C33.9983 18.1972 32.7999 16.9987 31.321 16.9971H17.679Z"
                          fill="white"
                        ></path>
                      </svg>

                      <p className="sc-hKgILt gRrZhT">Share via Email</p>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      enableBackground="new 0 0 24 24"
                      className="sc-gKsewC iPWGYb"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                        fill="black"
                      ></path>
                    </svg>
                  </a>
                </div>

                <div className="px-12">
                  <button
                    className="btn-copy mt-4"
                    onClick={() => {
                      navigator.clipboard.writeText("http://192.168.130.83:3000/a");
                      setIsCopy("Copied!");
                      setTimeout(() => {
                        setIsCopy("Copy");
                      }, 900);
                    }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 25"
                        height="25"
                      >
                        <path
                          d="M13.5108 5.85343L17.5158 1.73642L19.8404 4.11701L15.6393 8.12199H21.5488V11.4268H15.6113L19.8404 15.5345L17.5158 17.8684L11.7744 12.099L6.03299 17.8684L3.70842 15.5438L7.93745 11.4361H2V8.12199H7.90944L3.70842 4.11701L6.03299 1.73642L10.038 5.85343V0H13.5108V5.85343ZM10.038 16.16H13.5108V24.0019H10.038V16.16Z"
                          fill="#43E660"
                        ></path>
                      </svg>
                      <img className="img-fluid" src="/logo.png" alt="" />
                      <p className="">flax.ai/a</p>
                    </div>
                    <p className={isCopy === "Copied!" ? "Copied" : ""}>
                      {isCopy}
                    </p>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <button className="btn-dot" onClick={() => setIsShareClicked(true)}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path
                fill="black"
                stroke="black"
                d="M12.6661 7.33348C12.2979 7.33348 11.9994 7.63195 11.9994 8.00014C11.9994 8.36833 12.2979 8.66681 12.6661 8.66681C13.0343 8.66681 13.3328 8.36833 13.3328 8.00014C13.3328 7.63195 13.0343 7.33348 12.6661 7.33348Z"
              ></path>
              <path
                fill="black"
                stroke="black"
                d="M8.00057 7.33348C7.63238 7.33348 7.3339 7.63195 7.3339 8.00014C7.3339 8.36833 7.63238 8.66681 8.00057 8.66681C8.36876 8.66681 8.66724 8.36833 8.66724 8.00014C8.66724 7.63195 8.36876 7.33348 8.00057 7.33348Z"
              ></path>
              <path
                fill="black"
                stroke="black"
                d="M3.33333 7.33348C2.96514 7.33348 2.66667 7.63195 2.66667 8.00014C2.66667 8.36833 2.96514 8.66681 3.33333 8.66681C3.70152 8.66681 4 8.36833 4 8.00014C4 7.63195 3.70152 7.33348 3.33333 7.33348Z"
              ></path>
            </svg>
          </button>

          <div className="logo-only">
            {props.images &&
            (props.images.bannerImage1 ||
              props.images.bannerImage2 ||
              props.images.bannerImage3) ? (
              <ImgSlider sliderImage={props.images} />
            ) : (
              ""
            )}
          </div>
          <div className="container">
            <div
              className={
                props.images &&
                (props.images.bannerImage1 ||
                  props.images.bannerImage2 ||
                  props.images.bannerImage3)
                  ? "header_content text-center"
                  : "header_content text-center mt-5"
              }
            >
              <img
                className="img-fluid"
                src={props.logo ? props.logo : "/qrcode.png"}
                alt=""
              />

              <h1>
                {props.formData.userInfo && props.formData.userInfo.username
                  ? props.formData.userInfo.username
                  : "user name"}
              </h1>
              <h2>
                {props.formData.userInfo && props.formData.userInfo.designation
                  ? props.formData.userInfo.designation
                  : "Designation"}{" "}
                at company
              </h2>
              <h3>
                Employee ID -{" "}
                {props.formData.userInfo && props.formData.userInfo.employeeId
                  ? props.formData.userInfo.employeeId
                  : "xxxxxxxxx"}
              </h3>
              <span></span>
              <h4 className="">About ComXXXX</h4>
              <h5>
                {props.formData.userInfo && props.formData.userInfo.employeeBio
                  ? props.formData.userInfo.employeeBio
                  : "user bio"}
              </h5>
              <button className="btn">Save My Contact </button>
            </div>
            <SocialLink links={props.formData.userLink} />
            <div className="_username__featuredLink__MeYB7">
              <h3>
                Biggest Reward & Recognition Event (2019) - Investors Clinic
              </h3>
              <div className="BaseEmbeddedLink_baseEmbeddedLinkWrapper__SlpfZ">
                <div className="BaseEmbeddedLink_baseEmbeddedLink__WXu5a">
                  <div className="BaseEmbeddedLink_baseEmbeddedLinkContainer__SlSm5 BaseEmbeddedLink_baseEmbeddedLinkContainerEmbed__py5x8">
                    <div className="BaseEmbeddedLink_baseEmbeddedLinkItem__EDHSQ BaseEmbeddedLink_baseEmbeddedLinkItemVisible__63uQ_">
                      <ReactPlayer
                        // url={`https://www.youtube.com/embed/${url}?showinfo=0&amp;modestbranding=1&modestbranding=3&controls=0&rel=1&contore=1`}
                        url="https://www.youtube.com/watch?v=TNQsmPf24go&t=2s"
                        light={true}
                        width="100%"
                        playing={true}
                        className="EmbeddedYouTube_embeddedYouTube__kZebg EmbeddedYouTube_featuredLinkEmbeddedVideo__GERzu reactYoutube"
                        height="100%"
                        controls
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </section>
      ) : (
        ""
      )} */}
    </>
  );
}
