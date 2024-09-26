(function() {
  "use strict";
  const Ao = `*,
*::before,
*::after {
  box-sizing: border-box;
}

.mobile {
  display: none;
}
@media (max-width: 768px) {
  .mobile {
    display: block !important;
  }
}

@media (max-width: 768px) {
  .desktop {
    display: none !important;
  }
}

.containerWrapper {
  display: none;
}

h2 {
  font-size: 36px;
  line-height: 50px;
  color: #161718;
  font-weight: 700;
}
@media (max-width: 768px) {
  h2 {
    font-size: 24px;
    line-height: 34px;
  }
}

.tns-nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 53px;
}
@media (max-width: 768px) {
  .tns-nav {
    margin-top: 20px;
  }
}
.tns-nav button {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: #a165f5;
  opacity: 0.24;
  border: none;
  padding: 0;
  margin: 0;
  transition: all 0.3s;
  transform: scale(0.8);
}
.tns-nav button.tns-nav-active {
  background: #a165f5;
  opacity: 1;
  transform: scale(1.2);
}
.tns-nav button.tns-nav-near {
  transform: scale(1);
}

.tns-controls {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  margin: -30px auto 0;
  pointer-events: none;
}
.tns-controls button {
  pointer-events: all;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: url("https://conversionratestore.github.io/projects/dropservicing/optin/img/slider_button.svg") no-repeat center;
  background-size: contain;
  border: none;
  font-size: 0;
  cursor: pointer;
}
.tns-controls button:first-of-type {
  transform: rotate(180deg);
}
.tns-controls button:disabled {
  opacity: 0.5;
  pointer-events: none;
}

section {
  margin: 110px 0;
}
@media (max-width: 768px) {
  section {
    margin: 40px 0;
  }
}

.crs_container {
  width: calc(100% - 32px);
  max-width: 1100px;
  margin: 0 auto;
}

.cta {
  padding: 20px;
  border: none;
  border-radius: 3px;
  background: #17aa1c;
  color: #fff;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  font-weight: 700;
  min-width: 345px;
  transition: all 0.3s;
}
.cta:hover {
  background: #0b9e10;
}
@media (max-width: 768px) {
  .cta {
    min-width: unset;
    width: 100%;
  }
}

#main_block {
  width: 100%;
  background: radial-gradient(39.95% 80.28% at 50% 50%, #080210 40%, #1e032e 100%);
  padding: 0 0 80px;
  margin-top: 0;
}
@media (max-width: 768px) {
  #main_block {
    padding: 20px 0 40px;
  }
}
#main_block .wrapper {
  margin: 0 auto;
  width: calc(100% - 32px);
  max-width: 1280px;
}
#main_block header {
  padding: 16px 0;
}
@media (max-width: 768px) {
  #main_block header {
    padding: 0 0 22px;
  }
}
#main_block header img {
  height: 50px;
  width: auto;
}
#main_block .flex {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
  margin-top: 36px;
}
@media (max-width: 768px) {
  #main_block .flex {
    gap: 0;
    margin-top: 0;
  }
}
#main_block .flex > div:first-of-type {
  width: calc(55% - 30px);
}
@media (max-width: 768px) {
  #main_block .flex > div:first-of-type {
    width: 100%;
  }
}
#main_block .flex > div:last-of-type {
  width: calc(45% - 30px);
  width: 550px;
  max-width: 550px;
  min-width: 400px;
  border-radius: 3px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#main_block .tp_label {
  display: flex;
  gap: 8px;
  color: #fff;
  font-size: 16px;
  line-height: 1;
  align-items: flex-end;
}
#main_block .tp_label > img {
  width: auto;
  height: 20px;
}
#main_block .tp_label p {
  margin: 0;
  display: flex;
  align-items: flex-end;
}
#main_block .tp_label b {
  color: #00b67a;
}
#main_block .tp_label span:last-of-type {
  font-size: 12px;
  line-height: 1;
  width: -moz-max-content;
  width: max-content;
}
#main_block h1 {
  margin: 30px 0;
  color: #fff;
  font-size: 48px;
  line-height: 55px;
  font-weight: 700;
}
@media (max-width: 768px) {
  #main_block h1 {
    margin: 24px 0;
    font-size: 32px;
    line-height: 42px;
  }
}
#main_block h1 + p {
  font-size: 16px;
  line-height: 25px;
  color: #efecfb;
  margin-bottom: 46px;
}
@media (max-width: 768px) {
  #main_block h1 + p {
    margin-bottom: 24px;
  }
}
#main_block h1 + p + button {
  margin-bottom: 32px;
}
#main_block .youll_list {
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.1);
  padding: 24px 40px 30px;
}
@media (max-width: 768px) {
  #main_block .youll_list {
    padding: 24px;
  }
}
#main_block .youll_list > p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  line-height: 28px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 30px;
}
@media (max-width: 768px) {
  #main_block .youll_list > p {
    margin-bottom: 20px;
    font-size: 18px;
  }
}
#main_block .youll_list ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin-bottom: 0;
}
#main_block .youll_list ul li {
  display: flex;
  gap: 12px;
  list-style: none;
}
#main_block .youll_list ul li img {
  width: 17px;
  height: 17px;
  position: relative;
  top: 4px;
}
#main_block .youll_list ul li p {
  margin: 0;
  font-size: 14px;
  line-height: 22px;
  color: #fff;
  font-weight: 300;
}
#main_block .youll_list ul li p b {
  font-weight: 600;
}
#main_block .form {
  padding: 56px 0 0;
  overflow: hidden;
}
#main_block .form form {
  padding: 0 40px 56px;
  display: flex;
  flex-direction: column;
}
#main_block .form form h2 {
  font-size: 24px;
  line-height: 34px;
  color: #000;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
}
#main_block .form form h2 + p {
  display: flex;
  padding-top: 15px;
  border-top: 1px solid #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 32px;
}
#main_block .form form h2 + p span {
  display: flex;
  align-items: center;
  gap: 8px;
}
#main_block .form form h2 + p img {
  width: 24px;
  height: 24px;
}
#main_block .form form label {
  border-radius: 3px;
  border: 1px solid #ccc;
  background: #fff;
  padding: 16px 13px;
  margin-bottom: 20px;
  position: relative;
}
#main_block .form form label.error {
  border-color: red;
}
#main_block .form form label input {
  width: calc(100% - 46px);
  border: none;
  background: none;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  outline: none;
  font-weight: 400;
}
#main_block .form form label input::-moz-placeholder {
  color: #676767;
}
#main_block .form form label input::placeholder {
  color: #676767;
}
#main_block .form form label::before {
  content: "*";
  color: #eb6f2d;
  font-size: 16px;
  position: absolute;
  top: 3px;
  right: 6px;
}
#main_block .form form label::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 13px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: url("https://conversionratestore.github.io/projects/dropservicing/optin/img/user.svg") no-repeat center;
  background-size: contain;
}
#main_block .form form label:last-of-type::after {
  background: url("https://conversionratestore.github.io/projects/dropservicing/optin/img/sms.svg") no-repeat center;
  background-size: contain;
}
#main_block .form form .cta {
  margin-top: 12px;
}
#main_block .form .bonus {
  padding: 54px 40px;
  background: #f2ebfc;
}
#main_block .form .bonus p:first-of-type {
  display: flex;
  gap: 14px;
  font-size: 20px;
  line-height: 28px;
  color: #000;
  font-weight: 700;
  margin-bottom: 16px;
}
#main_block .form .bonus p:first-of-type img {
  width: 28px;
  height: 28px;
}
#main_block .form .bonus p:last-of-type {
  font-size: 14px;
  line-height: 22px;
  color: #161718;
  margin-bottom: 16px;
}
#main_block .form .bonus ul {
  padding: 0 0 0 15px;
}
#main_block .form .bonus ul li {
  font-size: 14px;
  line-height: 22px;
  color: #161718;
}

#base_review {
  overflow: visible;
}
#base_review .crs_container {
  position: relative;
}
#base_review h2 {
  text-align: center;
  margin-bottom: 18px;
}
@media (max-width: 768px) {
  #base_review h2 {
    text-align: left;
    margin-bottom: 16px;
    padding: 0 16px;
  }
}
#base_review h2 + p {
  text-align: center;
  font-size: 18px;
  line-height: 25px;
  color: #161718;
  max-width: 800px;
  margin: 0 auto 60px;
}
@media (max-width: 768px) {
  #base_review h2 + p {
    font-size: 16px;
    text-align: left;
    margin-bottom: 32px;
    padding: 0 16px;
  }
}
#base_review ul {
  padding: 0;
}
#base_review ul .slide {
  padding: 24px;
  border-radius: 3px;
  background: #f5effd;
  cursor: pointer;
  position: relative;
  margin-bottom: 25px;
}
#base_review ul .slide:not(:last-of-type) {
  margin-right: 30px;
}
#base_review ul .slide > div {
  display: flex;
  gap: 14px;
  margin-bottom: 24px;
  align-items: center;
}
#base_review ul .slide > div .img {
  height: 49px;
  width: 49px;
  border-radius: 50%;
  overflow: hidden;
}
#base_review ul .slide > div .img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
#base_review ul .slide > div p {
  font-size: 14px;
  line-height: 24px;
  color: #262626;
  font-weight: 700;
  margin: 0;
}
#base_review ul .slide > div p b {
  display: block;
  margin-bottom: 4px;
}
#base_review ul .slide > div p img {
  margin: 3px 0;
  height: 14px;
  width: 88px;
}
#base_review ul .slide > p {
  font-size: 18px;
  color: #31364e;
  line-height: 26px;
}
#base_review ul .slide::after {
  content: "";
  position: absolute;
  bottom: -25px;
  left: 0;
  width: 25px;
  height: 28px;
  background: #f5effd;
  border-radius: 3px;
  -webkit-clip-path: polygon(0 0, 100% 0, 0 100%);
          clip-path: polygon(0 0, 100% 0, 0 100%);
}
#base_review .tns-controls {
  position: absolute;
  left: -24px;
  width: calc(100% + 48px);
  max-width: unset;
  top: 50%;
  transform: translateY(-20%);
}
#base_review .tns-controls button {
  background: url("https://conversionratestore.github.io/projects/dropservicing/optin/img/slider_button.svg"), #fff no-repeat center center;
  background-size: 110% 110%;
  background-position: 50% 50%;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
}
#base_review .tns-controls button:disabled {
  opacity: 0;
  pointer-events: none;
}

#bonus_block .crs_container {
  padding: 0;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border-radius: 8px;
  background: radial-gradient(39.95% 80.28% at 50% 50%, #080210 40%, #1e032e 100%);
}
@media (max-width: 768px) {
  #bonus_block .crs_container {
    flex-direction: column;
    gap: 0;
    padding: 0 0 40px;
    width: 100%;
    border-radius: 0;
  }
}
#bonus_block .crs_container > div {
  padding: 60px;
}
@media (max-width: 768px) {
  #bonus_block .crs_container > div {
    padding: 0 16px;
  }
}
#bonus_block .crs_container > div h2 {
  color: #fff;
  margin-bottom: 12px;
}
@media (max-width: 768px) {
  #bonus_block .crs_container > div h2 {
    margin-bottom: 24px;
  }
}
#bonus_block .crs_container > div p {
  color: #fff;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 12px;
}
#bonus_block .crs_container > div ul {
  padding-left: 15px;
  margin-bottom: 32px;
}
#bonus_block .crs_container > div ul li {
  font-size: 16px;
  line-height: 26px;
  color: #fff;
}
#bonus_block .crs_container img {
  max-width: 470px;
  height: auto;
}
@media (max-width: 768px) {
  #bonus_block .crs_container img {
    order: -1;
  }
}

#host_block.crs_container {
  display: flex;
  align-items: stretch;
  gap: 50px;
}
@media (max-width: 768px) {
  #host_block.crs_container {
    flex-direction: column;
    gap: 24px;
  }
}
#host_block.crs_container > .img {
  width: calc(35% - 25px);
  height: 100%;
  position: relative;
}
@media (max-width: 768px) {
  #host_block.crs_container > .img {
    width: 100%;
  }
}
#host_block.crs_container > .img img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
#host_block.crs_container > .img a {
  display: block;
  position: absolute;
  height: 16px;
  width: 35%;
  right: 16%;
  bottom: 3%;
}
@media (max-width: 768px) {
  #host_block.crs_container > .img a {
    right: 7%;
    bottom: 7%;
    width: 40%;
  }
}
#host_block.crs_container .info {
  width: calc(65% - 25px);
}
@media (max-width: 768px) {
  #host_block.crs_container .info {
    width: 100%;
  }
}
#host_block.crs_container .info h2 {
  margin-bottom: 8px;
}
#host_block.crs_container .info h2 + p {
  font-size: 20px;
  line-height: 25px;
  font-weight: 600;
  color: #161718;
  margin-bottom: 24px;
}
@media (max-width: 768px) {
  #host_block.crs_container .info h2 + p {
    font-size: 18px;
  }
}
#host_block.crs_container .info ul {
  padding: 0;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
#host_block.crs_container .info ul li {
  font-size: 14px;
  line-height: 24px;
  color: #161718;
  display: flex;
  gap: 12px;
}
#host_block.crs_container .info ul li span {
  display: block;
  height: 8px;
  width: 8px;
  position: relative;
  top: 8px;
  background: #a165f5;
  border-radius: 50%;
  flex-shrink: 0;
}
#host_block.crs_container .info ul + p {
  font-size: 16px;
  font-weight: 700;
  color: #161718;
  margin-bottom: 28px;
}

#video_block h2 {
  text-align: center;
  margin-bottom: 18px;
}
@media (max-width: 768px) {
  #video_block h2 {
    margin-bottom: 12px;
  }
}
#video_block .crs_container > p {
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  color: #161718;
  margin: 0 auto 40px;
  max-width: 1000px;
}
@media (max-width: 768px) {
  #video_block .crs_container > p {
    margin-bottom: 24px;
  }
}
#video_block .video_slide {
  width: 100%;
  border-radius: 3px;
  border: 1px solid #e5e5e5;
  overflow: hidden;
}
@media (max-width: 768px) {
  #video_block .video_slide {
    display: flex;
    flex-direction: column-reverse;
  }
}
#video_block .video_slide .head {
  padding: 20px 40px;
  background: #f2ebfc;
  display: flex;
  align-items: center;
}
@media (max-width: 768px) {
  #video_block .video_slide .head {
    flex-direction: column;
    padding: 16px;
  }
}
#video_block .video_slide .head p {
  margin: 0;
}
#video_block .video_slide .head > .img {
  width: 49px;
  height: 49px;
  margin-right: 14px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
#video_block .video_slide .head > .img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
@media (max-width: 768px) {
  #video_block .video_slide .head > .img {
    display: none;
  }
}
#video_block .video_slide .head > .img + p {
  font-size: 14px;
  line-height: 24px;
  color: #262626;
  font-weight: 700;
  margin-bottom: 4px;
}
@media (max-width: 768px) {
  #video_block .video_slide .head > .img + p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
}
#video_block .video_slide .head > .img + p img {
  height: 14px;
  width: 88px;
  margin: 3px 0;
}
#video_block .video_slide .head p:last-of-type {
  font-size: 18px;
  color: #31364e;
  line-height: 26px;
  margin-left: 80px;
  padding-right: 100px;
}
@media (max-width: 768px) {
  #video_block .video_slide .head p:last-of-type {
    margin-left: 0;
    padding-right: 0;
    font-size: 14px;
    line-height: 24px;
  }
}
#video_block .video_slide .video {
  width: 100%;
  aspect-ratio: 16/9;
  background: #000;
}
#video_block ul {
  padding: 0;
  margin-bottom: 0;
}
#video_block li {
  transition: all 0.3s;
}
#video_block li:not(.tns-current) {
  transform: scale(0.8);
  opacity: 0.4;
}
#video_block .tns-controls {
  width: 300px;
}
@media (max-width: 768px) {
  #video_block .tns-nav {
    margin-top: 20px;
  }
}

#training_for {
  display: flex;
  gap: 50px;
  align-items: center;
  width: 100%;
}
@media (max-width: 768px) {
  #training_for {
    flex-direction: column;
    gap: 40px;
  }
}
#training_for > div {
  width: calc(50% - 25px);
}
@media (max-width: 768px) {
  #training_for > div {
    width: 100%;
  }
}
#training_for .photo img {
  width: 100%;
  height: auto;
}
#training_for .photo .bottom_info {
  padding: 30px;
  background: radial-gradient(39.95% 80.28% at 50% 50%, #080210 40%, #1e032e 100%);
  position: relative;
}
@media (max-width: 768px) {
  #training_for .photo .bottom_info {
    padding: 18px 16px;
  }
}
#training_for .photo .bottom_info p {
  color: #fff;
  font-size: 26px;
  line-height: 34px;
  margin-bottom: 8px;
}
@media (max-width: 768px) {
  #training_for .photo .bottom_info p {
    font-size: 20px;
    line-height: 28px;
  }
}
#training_for .photo .bottom_info p:last-of-type {
  font-size: 16px;
  line-height: 24px;
  color: #efecfb;
  font-weight: 300;
}
@media (max-width: 768px) {
  #training_for .photo .bottom_info p:last-of-type {
    font-size: 14px;
  }
}
#training_for .photo .link {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 10px;
  background: linear-gradient(90deg, #fff 72.69%, rgba(255, 255, 255, 0) 97.19%);
  box-shadow: 0px 10px 34px 0px rgba(0, 0, 0, 0.03);
  color: #31364e;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  padding: 8px 50px 8px 26px;
}
#training_for .photo .link a {
  text-decoration: underline;
  color: #31364e;
}
@media (max-width: 768px) {
  #training_for .info {
    padding: 0 16px;
  }
}
#training_for .info h2 {
  margin-bottom: 8px;
}
#training_for .info p {
  font-size: 16px;
  line-height: 26px;
  color: #161718;
  margin-bottom: 24px;
}
#training_for .info p:last-of-type {
  font-weight: 700;
}
#training_for .info ul {
  padding: 0;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
#training_for .info ul li {
  display: flex;
  gap: 12px;
  font-size: 16px;
  line-height: 26px;
  color: #161718;
  font-weight: 700;
}
#training_for .info ul li img {
  position: relative;
  top: 5px;
  width: 17px;
  height: 17px;
}
#training_for .info ul + p {
  margin-bottom: 8px;
}

#trust_pilot {
  background: radial-gradient(39.95% 80.28% at 50% 50%, #080210 40%, #1e032e 100%);
}
#trust_pilot .crs_container {
  padding: 80px 0;
}
@media (max-width: 768px) {
  #trust_pilot .crs_container {
    padding: 40px 0;
  }
}
#trust_pilot h2 {
  margin-bottom: 9px;
  color: #fff;
  display: flex;
  align-items: flex-end;
  line-height: 1;
}
#trust_pilot h2 b {
  color: #00b67a;
}
#trust_pilot h2 span {
  font-size: 19px;
  line-height: 1;
  font-weight: 300;
  color: #efecfb;
}
#trust_pilot h2 + p {
  font-size: 24px;
  line-height: 28px;
  color: #efecfb;
  margin-bottom: 76px;
  font-weight: 300;
}
@media (max-width: 768px) {
  #trust_pilot h2 + p {
    margin-bottom: 30px;
  }
}
#trust_pilot h2 img {
  height: 38px;
  width: 38px;
}
#trust_pilot ul {
  padding-left: 0;
}
#trust_pilot .review_slide {
  padding: 30px 27px;
  border: 1px solid #e5e5e5;
  background: #fff;
}
@media (max-width: 768px) {
  #trust_pilot .review_slide {
    padding: 30px 16px;
  }
}
#trust_pilot .review_slide .name {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 22px;
  color: #000;
}
#trust_pilot .review_slide .name img {
  width: auto;
  height: 20px;
}
#trust_pilot .review_slide a {
  font-size: 16px;
  line-height: 25px;
  color: #000;
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 8px;
  display: block;
}
#trust_pilot .review_slide .text {
  font-size: 16px;
  line-height: 24px;
  color: #000;
  font-weight: 300;
  margin-bottom: 22px;
}
#trust_pilot .review_slide .text + p {
  font-size: 14px;
  line-height: 20px;
  color: #000;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#trust_pilot .review_slide .text + p span {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 20px;
  background: #dbf5ed;
  color: #2daf6b;
}
#trust_pilot .review_slide .text + p span img {
  width: 16px;
  height: 16px;
}
#trust_pilot .points {
  background: #f2ebfc;
}
#trust_pilot .points .crs_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  flex-wrap: wrap;
}
@media (max-width: 768px) {
  #trust_pilot .points .crs_container {
    justify-content: space-around;
    row-gap: 34px;
    -moz-column-gap: 15px;
         column-gap: 15px;
    padding: 40px 0;
  }
}
#trust_pilot .points .crs_container p {
  margin: 0;
  font-size: 20px;
  line-height: 25px;
  color: #161718;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
}
@media (max-width: 768px) {
  #trust_pilot .points .crs_container p {
    font-size: 16px;
    line-height: 24px;
    flex-direction: column-reverse;
    width: 40%;
  }
}
#trust_pilot .tns-nav button {
  background: rgba(255, 255, 255, 0.3);
  opacity: 1;
}
#trust_pilot .tns-nav button.tns-nav-active {
  background: #a165f5;
}
#trust_pilot .tns-controls {
  width: 300px;
}
#trust_pilot .tns-controls button {
  background: url("https://conversionratestore.github.io/projects/dropservicing/optin/img/slider_button_white.svg") no-repeat center center;
}

#faq_block h2 {
  text-align: center;
  margin-bottom: 64px;
}
@media (max-width: 768px) {
  #faq_block h2 {
    margin-bottom: 32px;
  }
}
#faq_block ul {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0;
}
#faq_block li {
  list-style: none;
  padding-bottom: 24px;
  border-bottom: 1px solid #a165f5;
}
#faq_block li .question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 32px;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  color: #101828;
}
@media (max-width: 768px) {
  #faq_block li .question {
    font-size: 16px;
    line-height: 24px;
  }
}
#faq_block li .question span {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid #a165f5;
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;
}
#faq_block li .question span::before {
  content: "";
  width: 10px;
  height: 2px;
  background: #a165f5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
}
#faq_block li .question span::after {
  content: "";
  width: 2px;
  height: 10px;
  background: #a165f5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  transition: all 0.3s;
}
#faq_block li .answer {
  display: none;
  padding-top: 8px;
  font-size: 16px;
  line-height: 24px;
  color: #667085;
  padding-right: 48px;
  margin-bottom: 0;
}
#faq_block li .question.active span::after {
  height: 0;
}
#faq_block li .question.active + .answer {
  display: block;
}

#last_cta {
  padding: 0;
  display: flex;
  align-items: center;
  gap: 36px;
}
@media (max-width: 768px) {
  #last_cta {
    flex-direction: column;
  }
}
#last_cta > div {
  width: calc(50% - 18px);
}
@media (max-width: 768px) {
  #last_cta > div {
    width: 100%;
  }
}
#last_cta .img img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
#last_cta p {
  margin: 12px 0 0;
  font-size: 16px;
  line-height: 26px;
}
@media (max-width: 768px) {
  #last_cta p {
    font-size: 14px;
    line-height: 24px;
  }
}
#last_cta p:last-of-type {
  font-weight: 700;
  margin-bottom: 28px;
}

footer {
  margin-top: 80px;
  padding: 60px 0;
  background: radial-gradient(39.95% 80.28% at 50% 50%, #080210 40%, #1e032e 100%);
}
@media (max-width: 768px) {
  footer {
    margin-top: 40px;
  }
}
footer .crs_container {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
}
footer .crs_container p {
  font-size: 12px;
  line-height: 22px;
  color: #dcdcdc;
  margin: 0;
}
@media (max-width: 768px) {
  footer .crs_container p {
    text-align: center;
  }
}
footer .crs_container p:nth-child(3) a {
  text-decoration: underline;
  color: #dcdcdc;
}
footer .crs_container p:last-of-type {
  display: flex;
  gap: 10px;
}
footer .crs_container p:last-of-type a {
  position: relative;
  color: #dcdcdc;
}
footer .crs_container p:last-of-type a:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: -5px;
  width: 1px;
  height: 70%;
  background: #dcdcdc;
}

.crs_popup_form {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background: rgba(16, 1, 25, 0.7);
  z-index: 999;
  justify-content: center;
  align-items: center;
  display: none;
  overflow: auto;
  padding: 40px 0;
}
@media (max-width: 768px) {
  .crs_popup_form {
    padding: 0;
  }
}
.crs_popup_form.active {
  display: block;
}
.crs_popup_form .form {
  position: relative;
  margin: 0 auto;
  width: -moz-fit-content;
  width: fit-content;
}
.crs_popup_form .form .close {
  position: absolute;
  top: 22px;
  right: 22px;
  height: 20px;
  width: 20px;
  opacity: 1;
  z-index: 1;
}
.crs_popup_form .form .close::before {
  content: "";
  width: 14px;
  height: 1px;
  background: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}
.crs_popup_form .form .close::after {
  content: "";
  width: 14px;
  height: 1px;
  background: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
}
.crs_popup_form form {
  padding: 46px 40px;
  display: flex;
  flex-direction: column;
  background: #fff;
}
@media (max-width: 768px) {
  .crs_popup_form form {
    padding: 24px 16px;
  }
}
.crs_popup_form form h2 {
  font-size: 24px;
  line-height: 34px;
  color: #000;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
}
@media (max-width: 768px) {
  .crs_popup_form form h2 {
    text-align: left;
    padding-right: 40px;
  }
}
.crs_popup_form form h2 + p {
  font-size: 16px;
  line-height: 26px;
  color: #676767;
  text-align: center;
}
@media (max-width: 768px) {
  .crs_popup_form form h2 + p {
    text-align: left;
  }
}
.crs_popup_form form .icons {
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 32px;
}
@media (max-width: 768px) {
  .crs_popup_form form .icons {
    margin-bottom: 24px;
  }
}
.crs_popup_form form .icons span {
  display: flex;
  align-items: center;
  gap: 8px;
}
.crs_popup_form form .icons img {
  width: 24px;
  height: 24px;
}
.crs_popup_form form label {
  border-radius: 3px;
  border: 1px solid #ccc;
  background: #fff;
  padding: 16px 13px;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
}
.crs_popup_form form label.error {
  border-color: red;
}
.crs_popup_form form label input {
  width: calc(100% - 46px);
  border: none;
  background: none;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  outline: none;
  font-weight: 400;
}
.crs_popup_form form label input::-moz-placeholder {
  color: #676767;
}
.crs_popup_form form label input::placeholder {
  color: #676767;
}
.crs_popup_form form label::before {
  content: "*";
  color: #eb6f2d;
  font-size: 16px;
  position: absolute;
  top: 3px;
  right: 6px;
}
.crs_popup_form form label::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 13px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: url("https://conversionratestore.github.io/projects/dropservicing/optin/img/user.svg") no-repeat center;
  background-size: contain;
}
.crs_popup_form form label:last-of-type::after {
  background: url("https://conversionratestore.github.io/projects/dropservicing/optin/img/sms.svg") no-repeat center;
  background-size: contain;
}
.crs_popup_form form .inputs1 {
  display: flex;
  flex-direction: column;
}
.crs_popup_form form .inputs2 {
  display: none;
}
.crs_popup_form form .inputs2.active {
  display: block;
}
.crs_popup_form form .inputs2 .time_list {
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-bottom: 12px;
  margin-top: 14px;
  padding: 0;
}
.crs_popup_form form .inputs2 .time_list li {
  display: flex;
  position: relative;
  padding: 7px 13px;
  border-radius: 3px;
  border: 1px solid #ccc;
  gap: 10px;
  cursor: pointer;
}
.crs_popup_form form .inputs2 .time_list li .point {
  width: 19px;
  height: 19px;
  border-radius: 50%;
  border: 1px solid #d8dae5;
}
.crs_popup_form form .inputs2 .time_list li.selected {
  border-color: #06f;
}
.crs_popup_form form .inputs2 .time_list li.selected .point {
  border: 5px solid #06f;
}
.crs_popup_form form .inputs2 .time_list li p {
  margin: 0;
}
.crs_popup_form form .inputs2 .time_list li p:first-of-type {
  font-size: 14px;
  line-height: 24px;
  color: #000;
  font-weight: 600;
}
.crs_popup_form form .inputs2 .time_list li p:last-of-type {
  font-size: 12px;
  line-height: 23px;
  color: #000;
  font-weight: 400;
}
.crs_popup_form form .inputs2 .time_list li .comment {
  font-size: 12px;
  line-height: 22px;
  color: #161718;
  font-weight: 400;
  opacity: 0.4;
  position: absolute;
  bottom: calc(100% + 4px);
  left: 0;
}
.crs_popup_form form .cta {
  margin-top: 12px;
}
@media (max-width: 768px) {
  .crs_popup_form form .cta {
    margin-top: 4px;
  }
}
.crs_popup_form .bonus {
  padding: 40px;
  background: #f2ebfc;
}
@media (max-width: 768px) {
  .crs_popup_form .bonus {
    padding: 24px 16px;
  }
}
.crs_popup_form .bonus p:first-of-type {
  display: flex;
  gap: 14px;
  font-size: 20px;
  line-height: 28px;
  color: #000;
  font-weight: 700;
  margin-bottom: 16px;
}
.crs_popup_form .bonus p:first-of-type img {
  width: 28px;
  height: 28px;
}
.crs_popup_form .bonus p:last-of-type {
  font-size: 14px;
  line-height: 22px;
  color: #161718;
  margin-bottom: 16px;
}
.crs_popup_form .bonus ul {
  padding: 0 0 0 15px;
}
.crs_popup_form .bonus ul li {
  font-size: 14px;
  line-height: 22px;
  color: #161718;
}

.crs_video_popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background: rgba(16, 1, 25, 0.7);
  z-index: 999;
  display: none;
  padding-top: 40px;
}
@media (max-width: 768px) {
  .crs_video_popup {
    padding-top: 10px;
  }
}
.crs_video_popup.active {
  display: flex;
}
.crs_video_popup .banner {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px 90px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 768px) {
  .crs_video_popup .banner {
    padding: 16px;
    flex-direction: column;
  }
}
.crs_video_popup .banner > div p:first-of-type {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 8px;
}
.crs_video_popup .banner > div p:last-of-type {
  font-size: 18px;
  line-height: 25px;
  color: #161718;
  display: flex;
  align-items: center;
}
@media (max-width: 768px) {
  .crs_video_popup .banner > div p:last-of-type {
    margin-bottom: 20px;
  }
}
.crs_video_popup .banner > div p:last-of-type span {
  color: #2daf6b;
}
.crs_video_popup .banner > div p:last-of-type img:first-of-type {
  width: auto;
  height: 20px;
  margin-right: 8px;
}
.crs_video_popup .banner > div p:last-of-type img:last-of-type {
  width: 14px;
  height: 14px;
}
.crs_video_popup .banner .cta {
  width: 100%;
  max-width: 470px;
}
.crs_video_popup .video {
  display: flex;
  width: 95%;
  max-width: 1100px;
  height: calc(100vh - 200px);
  max-height: 615px;
  background: #000;
  margin: 0 auto;
  position: relative;
}
@media (max-width: 768px) {
  .crs_video_popup .video {
    max-height: 50vh;
    margin-top: 100px;
  }
}
.crs_video_popup .video .video {
  width: 100%;
}
.crs_video_popup .video > div:not(.crs_close) {
  width: 100%;
}
.crs_video_popup .crs_close {
  position: absolute;
  right: -35px;
  top: -35px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  overflow: hidden;
  -webkit-backdrop-filter: blur(7px);
          backdrop-filter: blur(7px);
  cursor: pointer;
}
@media (max-width: 768px) {
  .crs_video_popup .crs_close {
    right: 10px;
    top: 10px;
    z-index: 1;
  }
}
.crs_video_popup .crs_close::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 20px;
  height: 2px;
  border-radius: 4px;
  background: #fff;
}
.crs_video_popup .crs_close::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 2px;
  height: 20px;
  border-radius: 4px;
  background: #fff;
}/*# sourceMappingURL=style.css.map */`, $ = (e, t, a, l = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: t,
      event_type: a,
      event_loc: l
    }), Xn(`Event: ${e} | ${t} | ${a} | ${l}`, "success");
  }, zo = (e, t) => {
    const a = setInterval(() => {
      const l = document.querySelector(e);
      l && (clearInterval(a), t(l));
    }, 100);
  }, Mo = ({ name: e, dev: t }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class Co {
    constructor(t) {
      this.elements = typeof t == "string" ? document.querySelectorAll(t) : t instanceof Element ? [t] : t;
    }
    on(t, a, l) {
      return typeof a == "function" && (l = a, a = ""), this.elements.forEach(function(s) {
        s.addEventListener(t, function(c) {
          var _;
          if (a !== "") {
            let v = (_ = c.target) == null ? void 0 : _.closest(a);
            v && (l == null || l.call(v, c));
          } else
            l == null || l.call(s, c);
        });
      }), this;
    }
    addClass(t) {
      return this.elements.forEach(function(a) {
        a.classList.add(t);
      }), this;
    }
    removeClass(t) {
      return this.elements.forEach(function(a) {
        a.classList.remove(t);
      }), this;
    }
    toggleClass(t) {
      return this.elements.forEach(function(a) {
        a.classList.toggle(t);
      }), this;
    }
    each(t) {
      return this.elements.forEach((a, l) => {
        t(a, l);
      }), this;
    }
    style(t, a) {
      const l = t.split("-").map((s, c) => c === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[l] = a;
      }), this;
    }
  }
  const z = (e) => new Co(e), Do = async (e) => {
    const t = (a) => new Promise((l, s) => {
      const c = a.split(".").pop();
      if (c === "js") {
        if (Array.from(document.scripts).map((b) => b.src.toLowerCase()).includes(a.toLowerCase()))
          return Xn(`Script ${a} allready downloaded!`, "success"), l("");
        const v = document.createElement("script");
        v.src = a, v.onload = l, v.onerror = s, document.head.appendChild(v);
      } else if (c === "css") {
        if (Array.from(document.styleSheets).map((b) => {
          var Y;
          return (Y = b.href) == null ? void 0 : Y.toLowerCase();
        }).includes(a.toLowerCase()))
          return Xn(`Style ${a} allready downloaded!`, "success"), l("");
        const v = document.createElement("link");
        v.rel = "stylesheet", v.href = a, v.onload = l, v.onerror = s, document.head.appendChild(v);
      }
    });
    for (const a of e)
      Xn(a), await t(a), Xn(`Loaded librari ${a}`);
    Xn("All libraries loaded!", "success");
  }, Oo = (e) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, En = (e, t, a, l, s = 1e3, c = 0.5) => {
    let _, v;
    if (_ = new IntersectionObserver(
      function(b) {
        b[0].isIntersecting === !0 ? v = setTimeout(() => {
          $(
            t,
            b[0].target.dataset.visible || l || "",
            "view",
            a
          ), _.disconnect();
        }, s) : (Xn("Element is not fully visible", "warn"), clearTimeout(v));
      },
      { threshold: [c] }
    ), typeof e == "string") {
      const b = document.querySelector(e);
      b && _.observe(b);
    } else
      _.observe(e);
  }, Xn = (e, t = "info") => {
    let a;
    switch (t) {
      case "info":
        a = "color: #3498db;";
        break;
      case "warn":
        a = "color: #f39c12;";
        break;
      case "error":
        a = "color: #e74c3c;";
        break;
      case "success":
        a = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${e}`, `${a} font-size: 16px; font-weight: 600`);
  }, xt = [
    {
      name: "Lauren",
      review: '"Lauren transitioned from managing physical stores to building her own automated Drop Servicing business."',
      img: "lauren.jpg",
      videoId: "q8xu3220ak"
    },
    {
      name: "Christian",
      review: '"From an unfulfilling job to running his own business, Christian transformed his life in just three months."',
      img: "christian.jpg",
      videoId: "24pvu5oip9"
    },
    {
      name: "Michelle",
      review: '"Michelle went from juggling various online side gigs to creating a steady income that allows her to live abroad."',
      img: "michelle.jpg",
      videoId: "9lsnni5wtx"
    },
    {
      name: "Ed",
      review: '"Ed went from a busy father of two with limited time to running a thriving business on his own term."',
      img: "ed.jpg",
      videoId: "n2ujymsyou"
    },
    {
      name: "Muhammad",
      review: '"Muhammad went from struggling with other business models to building a thriving business without needing sales calls."',
      img: "muhammad.jpg",
      videoId: "q03fyag9sb"
    },
    {
      name: "Aleksa",
      review: '"Aleksa transformed from a struggling student to a financially independent entrepreneur in just one year."',
      img: "aleksa.jpg",
      videoId: "rup4dintys"
    },
    {
      name: "Guy",
      review: '"Guy turned her part-time side hustle into a reliable source of income while working full-time as a nurse."',
      img: "guy.jpg",
      videoId: "9luz6eb8y5"
    }
  ], jo = [
    "<b>The Drop Servicing Method:</b> Our new strategy for earning online without significant startup costs.",
    "<b>A Simple 4-Step Process:</b> Start your online business journey with just a laptop and internet connection.",
    "<b>Escape The 9-5 Grind:</b> How to transition from traditional employment to being your own boss.",
    "<b>The 2024 Opportunity:</b> How to capitalize on this emerging trend to achieve your financial freedom goals.",
    "<b>Real Success Stories:</b> Get inspired by participants who left their jobs to build successful businesses, gaining the freedom to live on their own terms."
  ], Ro = [
    'Dylan Sigley was a broke college student working in a call center when he discovered a new online business method called "Drop Servicing".',
    "Soon after, he built a ridiculously profitable business from home, allowing him to quit his job and earn 6-figures while traveling the world and working only 5 hours a week.",
    "This FREE webclass skips the nonsense to show you, step-by-step, how Dylan grew his business so quickly and how hundreds of others have replicated his success using the same process. It's the most practical, results-driven training you'll find.",
    "Dylan has one of the best (if not the best) track records in the industry for helping people around the world build Drop Servicing Businesses, even as complete beginners with no skills or degree.",
    "Normally, it costs between $4K and $24K to work with Dylan, but in this webclass you get his exact methods for FREE! Register now before this is taken offline in the next few days."
  ], H = "https://conversionratestore.github.io/projects/dropservicing/optin/img", No = (
    /* HTML */
    `
  <section id="main_block">
    <div class="wrapper">
      <header>
        <img src="${H}/logo.png" alt="logo" />
      </header>
      <div class="flex">
        <div class="info">
          <div class="tp_label">
            <img src="${H}/trustpilot.svg" alt="stars" />
            <p>
              TrustScore&nbsp;
              <img src="${H}/trustpilot_star.svg" alt="star" />
              <b>4.8/5</b>&nbsp;<span>300+ Reviews</span>
            </p>
          </div>
          <h1>The 4 Steps to Make Money Online in 2024 with no experience or startup costs</h1>
          <p>Discover how to go from overworked employee to successful entrepreneur in a FREE Webinar!</p>
          <button class="cta pop mobile">Grab Your FREE Seat Now!</button>
          <div class="youll_list">
            <p>In this FREE training, you’ll learn: <img src="${H}/arrow.svg" alt="arrow" class="desktop" /></p>
            <ul>
              ${jo.map(
      (e) => (
        /* HTML */
        `<li>
                      <img src="${H}/check.svg" alt="check" />
                      <p>${e}</p>
                    </li>`
      )
    ).join("")}
            </ul>
          </div>
        </div>
        <div class="form desktop">
          <form>
            <h2>Join our Exclusive Online Training</h2>
            <p>
              <span>
                <img src="${H}/dollar.svg" alt="dollar" />
                Free
              </span>
              <span>
                <img src="${H}/frame.svg" alt="frame" />
                Live Training
              </span>
              <!--<span>
                <img src="${H}/calendar.svg" alt="calendar" />
                Today
              </span>-->
            </p>
            <label><input type="text" placeholder="Enter your name..." name="name" /></label>
            <label><input type="email" placeholder="Enter email address..." name="email" /></label>
            <button class="cta register">Grab Your FREE Seat Now!</button>
          </form>
          <div class="bonus">
            <p><img src="${H}/present.png" alt="gift" /> Exclusive bonuses!</p>
            <p>Stay until the end of the training to receive the following:</p>
            <ul>
              <li>Comprehensive 12K Sale Tutorial (+Free Copy/Paste Template)</li>
              <li>A Quick Guide to Drop Servicing (Get Selling FAST and for ZERO)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
`
  ), qo = (
    /* HTML */
    `
  <section id="base_review">
    <h2>Why Join This Webinar?</h2>
    <p>
      Learn how to start your business within 30 days. See how these success stories transformed their lives and
      achieved their financial freedom goals
    </p>
    <div class="crs_container">
      <ul>
        ${xt.map(
      ({ name: e, review: t, img: a, videoId: l }) => (
        /* HTML */
        `
              <li>
                <div class="slide" data-video="${l}">
                  <div>
                    <div class="img">
                      <img src="${H}/${a}" alt="${e}" />
                    </div>
                    <p><b>${e}</b><img src="${H}/rating_stars.png" alt="stars" /></p>
                  </div>
                  <p>${t}</p>
                </div>
              </li>
            `
      )
    ).join("")}
      </ul>
    </div>
  </section>
`
  ), Fo = (
    /* HTML */
    `
  <section id="bonus_block">
    <div class="crs_container">
      <div>
        <h2>Exclusive Bonuses!</h2>
        <p>Stay until the end of the training to receive the following:</p>
        <ul>
          <li>Comprehensive <b>12K Sale Tutorial</b> (+Free Copy/Paste Template)</li>
          <li>A Quick Guide to Drop Servicing (Get Selling FAST and for ZERO)</li>
        </ul>
        <button class="cta pop">Grab Your FREE Seat Now!</button>
      </div>
      <img src="${H}/bonus.png" alt="bonus" />
    </div>
  </section>
`
  ), $o = (
    /* HTML */
    `
  <section id="host_block" class="crs_container">
    <div class="img">
      <img src="${H}/founder.jpg" alt="dylan" class="desktop" />
      <img src="${H}/founder_mob.jpg" alt="dylan" class="mobile" />
      <a href="https://dropservicing.com/homepage"></a>
    </div>
    <div class="info">
      <h2>Your Host: Dylan Sigley</h2>
      <p>7 Figure Drop Servicer</p>
      <ul>
        ${Ro.map((e) => (
      /* HTML */
      `<li><span></span>${e}</li>`
    )).join("")}
      </ul>
      <p>Access Dylan’s formula to learn how to start your online business and unlock financial freedom goals</p>
      <button class="cta pop">Unlock Dylan’s Formula for Free</button>
    </div>
  </section>
`
  ), Ho = (
    /* HTML */
    `
  <footer>
    <div class="crs_container">
      <p>
        Dylan Sigley Consulting - FZCO does not promise or guarantee your financial success, nor warrant any earning
        claims made for their products. Your results will vary and depend on many factors that are unique to you
        including passion, business acumen, work ethic, and more. All business entails risk as well as consistent effort
        and action. Sales figures stated or implied are personal sales figures or that of our members. Please understand
        these results are not typical. We are using these as examples of what is possible when you commit and take
        consistent action. We do not guarantee any earnings because your results will vary and depend on many factors,
        including but not limited to your background, experience, and work ethic. All business entails financial risk as
        well as massive and consistent effort and action.
      </p>
      <p>
        NOT GOOGLE or META: This site is not a part of the Google website, Google Inc, Meta website, or Meta, Inc.
        Additionally, This site is NOT endorsed by Google or Meta in any way.
      </p>
      <p>
        <a href="https://www.dropservicingblueprint.com/">Dylan Sigley Consulting - FZCO</a> | IFZA Business Park, DDP,
        Dubai Silicon Oasis | +1 (786) 475-8716 | info@dropservicingblueprint.com
      </p>
      <p>
        <a href="https://www.dropservicingblueprint.com/privacy-policy">Privacy Policy </a>
        <a href="https://www.dropservicingblueprint.com/earnings-disclaimer">Earnings Disclaimer</a>
        <a href="https://www.dropservicingblueprint.com/terms-and-conditions">Terms and Conditions</a>
      </p>
    </div>
  </footer>
`
  ), Wo = (
    /* HTML */
    `
  <div class="crs_popup_form">
    <div class="form">
      <div class="close"></div>
      <form>
        <h2>Join our Exclusive Online Training</h2>
        <p class="icons">
          <span>
            <img src="${H}/dollar.svg" alt="dollar" />
            Free
          </span>
          <span>
            <img src="${H}/frame.svg" alt="frame" />
            Live Training
          </span>
          <!--<span>
            <img src="${H}/calendar.svg" alt="calendar" />
            Today
          </span>-->
        </p>
        <div class="inputs1">
          <label><input type="text" placeholder="Enter your name..." name="name" /></label>
          <label><input type="email" placeholder="Enter email address..." name="email" /></label>
          <button class="cta register">Grab Your FREE Seat Now!</button>
        </div>
        <div class="inputs2"></div>
      </form>
      <div class="bonus">
        <p><img src="${H}/present.png" alt="gift" /> Exclusive bonuses!</p>
        <p>Stay until the end of the training to receive the following:</p>
        <ul>
          <li>Comprehensive 12K Sale Tutorial (+Free Copy/Paste Template)</li>
          <li>A Quick Guide to Drop Servicing (Get Selling FAST and for ZERO)</li>
        </ul>
      </div>
    </div>
  </div>
`
  ), Po = (
    /* HTML */
    `
  <div class="crs_video_popup">
    <div class="video">
      <div class="crs_close"></div>
    </div>
    <div class="banner">
      <div>
        <p>Free Training: Learn how to earn online with Drop Servicing</p>
        <p>
          <img src="${H}/trustpilot.svg" alt="trustpilot" />TrustScore&nbsp;<img
            src="${H}/trustpilot_star.svg"
            alt="star"
          /><span>4.8</span>
        </p>
      </div>
      <button class="cta pop">Grab Your FREE Seat Now!</button>
    </div>
  </div>
`
  ), Io = (e, t) => (
    /* HTML */
    `
    <ul class="time_list">
      ${e.map(({ date: a, schedule: l }, s) => {
      const c = new Date(a).toLocaleString("en-us", { weekday: "long" }), _ = new Date(a).toLocaleString("en-us", { month: "long", day: "numeric" }), v = new Date(a).toLocaleString("en-us", { hour: "numeric", minute: "numeric" }), b = new Date(a).getTime() - (/* @__PURE__ */ new Date()).getTime();
      return (
        /* HTML */
        `
            <li class="${s === 0 ? "selected" : ""}" data-schedule="${l}">
              <span class="point"></span>
              <div>
                <p>${c}, ${_}, ${v}</p>
                <p>${t}</p>
              </div>
              <span class="comment"
                >Starts in ${s === 0 ? Math.floor(b / (1e3 * 60)) : Math.ceil(b / (1e3 * 60 * 60))}
                ${s === 0 ? "minutes" : "hours"}</span
              >
            </li>
          `
      );
    }).join("")}
    </ul>
    <button class="cta register_mob">Select a Time to Join</button>
  `
  );
  var Ve = window, Nn = Ve.requestAnimationFrame || Ve.webkitRequestAnimationFrame || Ve.mozRequestAnimationFrame || Ve.msRequestAnimationFrame || function(e) {
    return setTimeout(e, 16);
  }, bt = window, Ci = bt.cancelAnimationFrame || bt.mozCancelAnimationFrame || function(e) {
    clearTimeout(e);
  };
  function Di() {
    for (var e, t, a, l = arguments[0] || {}, s = 1, c = arguments.length; s < c; s++)
      if ((e = arguments[s]) !== null)
        for (t in e)
          a = e[t], l !== a && a !== void 0 && (l[t] = a);
    return l;
  }
  function yn(e) {
    return ["true", "false"].indexOf(e) >= 0 ? JSON.parse(e) : e;
  }
  function kn(e, t, a, l) {
    if (l)
      try {
        e.setItem(t, a);
      } catch {
      }
    return a;
  }
  function Yo() {
    var e = window.tnsId;
    return window.tnsId = e ? e + 1 : 1, "tns" + window.tnsId;
  }
  function Je() {
    var e = document, t = e.body;
    return t || (t = e.createElement("body"), t.fake = !0), t;
  }
  var _e = document.documentElement;
  function Ze(e) {
    var t = "";
    return e.fake && (t = _e.style.overflow, e.style.background = "", e.style.overflow = _e.style.overflow = "hidden", _e.appendChild(e)), t;
  }
  function Qe(e, t) {
    e.fake && (e.remove(), _e.style.overflow = t, _e.offsetHeight);
  }
  function Go() {
    var e = document, t = Je(), a = Ze(t), l = e.createElement("div"), s = !1;
    t.appendChild(l);
    try {
      for (var c = "(10px * 10)", _ = ["calc" + c, "-moz-calc" + c, "-webkit-calc" + c], v, b = 0; b < 3; b++)
        if (v = _[b], l.style.width = v, l.offsetWidth === 100) {
          s = v.replace(c, "");
          break;
        }
    } catch {
    }
    return t.fake ? Qe(t, a) : l.remove(), s;
  }
  function Ko() {
    var e = document, t = Je(), a = Ze(t), l = e.createElement("div"), s = e.createElement("div"), c = "", _ = 70, v = 3, b = !1;
    l.className = "tns-t-subp2", s.className = "tns-t-ct";
    for (var Y = 0; Y < _; Y++)
      c += "<div></div>";
    return s.innerHTML = c, l.appendChild(s), t.appendChild(l), b = Math.abs(l.getBoundingClientRect().left - s.children[_ - v].getBoundingClientRect().left) < 2, t.fake ? Qe(t, a) : l.remove(), b;
  }
  function Vo() {
    if (window.matchMedia || window.msMatchMedia)
      return !0;
    var e = document, t = Je(), a = Ze(t), l = e.createElement("div"), s = e.createElement("style"), c = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", _;
    return s.type = "text/css", l.className = "tns-mq-test", t.appendChild(s), t.appendChild(l), s.styleSheet ? s.styleSheet.cssText = c : s.appendChild(e.createTextNode(c)), _ = window.getComputedStyle ? window.getComputedStyle(l).position : l.currentStyle.position, t.fake ? Qe(t, a) : l.remove(), _ === "absolute";
  }
  function Jo(e, t) {
    var a = document.createElement("style");
    return e && a.setAttribute("media", e), t && a.setAttribute("nonce", t), document.querySelector("head").appendChild(a), a.sheet ? a.sheet : a.styleSheet;
  }
  function On(e, t, a, l) {
    "insertRule" in e ? e.insertRule(t + "{" + a + "}", l) : e.addRule(t, a, l);
  }
  function Zo(e, t) {
    "deleteRule" in e ? e.deleteRule(t) : e.removeRule(t);
  }
  function Sn(e) {
    var t = "insertRule" in e ? e.cssRules : e.rules;
    return t.length;
  }
  function Qo(e, t) {
    return Math.atan2(e, t) * (180 / Math.PI);
  }
  function Uo(e, t) {
    var a = !1, l = Math.abs(90 - Math.abs(e));
    return l >= 90 - t ? a = "horizontal" : l <= t && (a = "vertical"), a;
  }
  function qn(e, t, a) {
    for (var l = 0, s = e.length; l < s; l++)
      t.call(a, e[l], l);
  }
  var Oi = "classList" in document.createElement("_"), le = Oi ? function(e, t) {
    return e.classList.contains(t);
  } : function(e, t) {
    return e.className.indexOf(t) >= 0;
  }, F = Oi ? function(e, t) {
    le(e, t) || e.classList.add(t);
  } : function(e, t) {
    le(e, t) || (e.className += " " + t);
  }, an = Oi ? function(e, t) {
    le(e, t) && e.classList.remove(t);
  } : function(e, t) {
    le(e, t) && (e.className = e.className.replace(t, ""));
  };
  function we(e, t) {
    return e.hasAttribute(t);
  }
  function Ue(e, t) {
    return e.getAttribute(t);
  }
  function vt(e) {
    return typeof e.item < "u";
  }
  function fn(e, t) {
    if (e = vt(e) || e instanceof Array ? e : [e], Object.prototype.toString.call(t) === "[object Object]")
      for (var a = e.length; a--; )
        for (var l in t)
          e[a].setAttribute(l, t[l]);
  }
  function Fn(e, t) {
    e = vt(e) || e instanceof Array ? e : [e], t = t instanceof Array ? t : [t];
    for (var a = t.length, l = e.length; l--; )
      for (var s = a; s--; )
        e[l].removeAttribute(t[s]);
  }
  function _t(e) {
    for (var t = [], a = 0, l = e.length; a < l; a++)
      t.push(e[a]);
    return t;
  }
  function dn(e, t) {
    e.style.display !== "none" && (e.style.display = "none");
  }
  function un(e, t) {
    e.style.display === "none" && (e.style.display = "");
  }
  function wt(e) {
    return window.getComputedStyle(e).display !== "none";
  }
  function ye(e) {
    if (typeof e == "string") {
      var t = [e], a = e.charAt(0).toUpperCase() + e.substr(1), l = ["Webkit", "Moz", "ms", "O"];
      l.forEach(function(v) {
        (v !== "ms" || e === "transform") && t.push(v + a);
      }), e = t;
    }
    var s = document.createElement("fakeelement");
    e.length;
    for (var c = 0; c < e.length; c++) {
      var _ = e[c];
      if (s.style[_] !== void 0)
        return _;
    }
    return !1;
  }
  function Xo(e) {
    if (!e || !window.getComputedStyle)
      return !1;
    var t = document, a = Je(), l = Ze(a), s = t.createElement("p"), c, _ = e.length > 9 ? "-" + e.slice(0, -9).toLowerCase() + "-" : "";
    return _ += "transform", a.insertBefore(s, null), s.style[e] = "translate3d(1px,1px,1px)", c = window.getComputedStyle(s).getPropertyValue(_), a.fake ? Qe(a, l) : s.remove(), c !== void 0 && c.length > 0 && c !== "none";
  }
  function yt(e, t) {
    var a = !1;
    return /^Webkit/.test(e) ? a = "webkit" + t + "End" : /^O/.test(e) ? a = "o" + t + "End" : e && (a = t.toLowerCase() + "end"), a;
  }
  var kt = !1;
  try {
    var Bo = Object.defineProperty({}, "passive", {
      get: function() {
        kt = !0;
      }
    });
    window.addEventListener("test", null, Bo);
  } catch {
  }
  var Tt = kt ? { passive: !0 } : !1;
  function N(e, t, a) {
    for (var l in t) {
      var s = ["touchstart", "touchmove"].indexOf(l) >= 0 && !a ? Tt : !1;
      e.addEventListener(l, t[l], s);
    }
  }
  function J(e, t) {
    for (var a in t) {
      var l = ["touchstart", "touchmove"].indexOf(a) >= 0 ? Tt : !1;
      e.removeEventListener(a, t[a], l);
    }
  }
  function nr() {
    return {
      topics: {},
      on: function(e, t) {
        this.topics[e] = this.topics[e] || [], this.topics[e].push(t);
      },
      off: function(e, t) {
        if (this.topics[e]) {
          for (var a = 0; a < this.topics[e].length; a++)
            if (this.topics[e][a] === t) {
              this.topics[e].splice(a, 1);
              break;
            }
        }
      },
      emit: function(e, t) {
        t.type = e, this.topics[e] && this.topics[e].forEach(function(a) {
          a(t, e);
        });
      }
    };
  }
  function er(e, t, a, l, Y, c, _) {
    var v = Math.min(c, 10), b = Y.indexOf("%") >= 0 ? "%" : "px", Y = Y.replace(b, ""), q = Number(e.style[t].replace(a, "").replace(l, "").replace(b, "")), hn = (Y - q) / c * v;
    setTimeout(Be, v);
    function Be() {
      c -= v, q += hn, e.style[t] = a + q + b + l, c > 0 ? setTimeout(Be, v) : _();
    }
  }
  Object.keys || (Object.keys = function(e) {
    var t = [];
    for (var a in e)
      Object.prototype.hasOwnProperty.call(e, a) && t.push(a);
    return t;
  }), "remove" in Element.prototype || (Element.prototype.remove = function() {
    this.parentNode && this.parentNode.removeChild(this);
  });
  var Xe = function(e) {
    e = Di({
      container: ".slider",
      mode: "carousel",
      axis: "horizontal",
      items: 1,
      gutter: 0,
      edgePadding: 0,
      fixedWidth: !1,
      autoWidth: !1,
      viewportMax: !1,
      slideBy: 1,
      center: !1,
      controls: !0,
      controlsPosition: "top",
      controlsText: ["prev", "next"],
      controlsContainer: !1,
      prevButton: !1,
      nextButton: !1,
      nav: !0,
      navPosition: "top",
      navContainer: !1,
      navAsThumbnails: !1,
      arrowKeys: !1,
      speed: 300,
      autoplay: !1,
      autoplayPosition: "top",
      autoplayTimeout: 5e3,
      autoplayDirection: "forward",
      autoplayText: ["start", "stop"],
      autoplayHoverPause: !1,
      autoplayButton: !1,
      autoplayButtonOutput: !0,
      autoplayResetOnVisibility: !0,
      animateIn: "tns-fadeIn",
      animateOut: "tns-fadeOut",
      animateNormal: "tns-normal",
      animateDelay: !1,
      loop: !0,
      rewind: !1,
      autoHeight: !1,
      responsive: !1,
      lazyload: !1,
      lazyloadSelector: ".tns-lazy-img",
      touch: !0,
      mouseDrag: !1,
      swipeAngle: 15,
      nested: !1,
      preventActionWhenRunning: !1,
      preventScrollOnTouch: !1,
      freezable: !0,
      onInit: !1,
      useLocalStorage: !0,
      nonce: !1
    }, e || {});
    var t = document, a = window, l = {
      ENTER: 13,
      SPACE: 32,
      LEFT: 37,
      RIGHT: 39
    }, s = {}, c = e.useLocalStorage;
    if (c) {
      var _ = navigator.userAgent, v = /* @__PURE__ */ new Date();
      try {
        s = a.localStorage, s ? (s.setItem(v, v), c = s.getItem(v) == v, s.removeItem(v)) : c = !1, c || (s = {});
      } catch {
        c = !1;
      }
      c && (s.tnsApp && s.tnsApp !== _ && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(n) {
        s.removeItem(n);
      }), localStorage.tnsApp = _);
    }
    var b = s.tC ? yn(s.tC) : kn(s, "tC", Go(), c), Y = s.tPL ? yn(s.tPL) : kn(s, "tPL", Ko(), c), q = s.tMQ ? yn(s.tMQ) : kn(s, "tMQ", Vo(), c), hn = s.tTf ? yn(s.tTf) : kn(s, "tTf", ye("transform"), c), Be = s.t3D ? yn(s.t3D) : kn(s, "t3D", Xo(hn), c), nn = s.tTDu ? yn(s.tTDu) : kn(s, "tTDu", ye("transitionDuration"), c), ni = s.tTDe ? yn(s.tTDe) : kn(s, "tTDe", ye("transitionDelay"), c), ei = s.tADu ? yn(s.tADu) : kn(s, "tADu", ye("animationDuration"), c), ji = s.tADe ? yn(s.tADe) : kn(s, "tADe", ye("animationDelay"), c), Bn = s.tTE ? yn(s.tTE) : kn(s, "tTE", yt(nn, "Transition"), c), Et = s.tAE ? yn(s.tAE) : kn(s, "tAE", yt(ei, "Animation"), c), St = a.console && typeof a.console.warn == "function", Ri = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], Lt = {};
    if (Ri.forEach(function(n) {
      if (typeof e[n] == "string") {
        var i = e[n], o = t.querySelector(i);
        if (Lt[n] = i, o && o.nodeName)
          e[n] = o;
        else {
          St && console.warn("Can't find", e[n]);
          return;
        }
      }
    }), e.container.children.length < 1) {
      St && console.warn("No slides found in", e.container);
      return;
    }
    var D = e.responsive, ce = e.nested, d = e.mode === "carousel";
    if (D) {
      0 in D && (e = Di(e, D[0]), delete D[0]);
      var Ni = {};
      for (var At in D) {
        var ke = D[At];
        ke = typeof ke == "number" ? { items: ke } : ke, Ni[At] = ke;
      }
      D = Ni, Ni = null;
    }
    function zt(n) {
      for (var i in n)
        d || (i === "slideBy" && (n[i] = "page"), i === "edgePadding" && (n[i] = !1), i === "autoHeight" && (n[i] = !1)), i === "responsive" && zt(n[i]);
    }
    if (d || zt(e), !d) {
      e.axis = "horizontal", e.slideBy = "page", e.edgePadding = !1;
      var $n = e.animateIn, ii = e.animateOut, qi = e.animateDelay, Ln = e.animateNormal;
    }
    var L = e.axis === "horizontal", on = t.createElement("div"), rn = t.createElement("div"), sn, m = e.container, Fi = m.parentNode, Mt = m.outerHTML, E = m.children, g = E.length, Te, ti = Pt(), Ee = !1;
    D && no(), d && (m.className += " tns-vpfix");
    var w = e.autoWidth, u = x("fixedWidth"), j = x("edgePadding"), k = x("gutter"), G = Yt(), Z = x("center"), y = w ? 1 : Math.floor(x("items")), pe = x("slideBy"), $i = e.viewportMax || e.fixedWidthViewportWidth, Hn = x("arrowKeys"), bn = x("speed"), Se = e.rewind, Q = Se ? !1 : e.loop, ln = x("autoHeight"), An = x("controls"), Wn = x("controlsText"), zn = x("nav"), Pn = x("touch"), In = x("mouseDrag"), en = x("autoplay"), Hi = x("autoplayTimeout"), Yn = x("autoplayText"), Gn = x("autoplayHoverPause"), Kn = x("autoplayResetOnVisibility"), A = Jo(null, x("nonce")), Le = e.lazyload, tr = e.lazyloadSelector, W, fe = [], U = Q ? sr() : 0, S = d ? g + U * 2 : g + U, Ct = !!((u || w) && !Q), de = u ? rt() : null, Wi = !d || !Q, ne = L ? "left" : "top", Vn = "", ue = "", Ae = /* @__PURE__ */ function() {
      return u ? function() {
        return Z && !Q ? g - 1 : Math.ceil(-de / (u + k));
      } : w ? function() {
        for (var n = 0; n < S; n++)
          if (W[n] >= -de)
            return n;
      } : function() {
        return Z && d && !Q ? g - 1 : Q || d ? Math.max(0, S - Math.ceil(y)) : S - 1;
      };
    }(), p = Ht(x("startIndex")), Jn = p;
    $t();
    var Mn = 0, mn = w ? null : Ae(), oi = e.preventActionWhenRunning, ri = e.swipeAngle, Cn = ri ? "?" : !0, Zn = !1, Pi = e.onInit, K = new nr(), Qn = " tns-slider tns-" + e.mode, O = m.id || Yo(), cn = x("disable"), ze = !1, ai = e.freezable, vn = ai && !w ? Xi() : !1, Me = !1, Ce = {
      click: Un,
      keydown: zr
    }, Ii = {
      click: yr,
      keydown: Mr
    }, De = {
      mouseover: Sr,
      mouseout: Lr
    }, Oe = { visibilitychange: Er }, je = { keydown: Ar }, Re = {
      touchstart: ko,
      touchmove: To,
      touchend: Mi,
      touchcancel: Mi
    }, Ne = {
      mousedown: ko,
      mousemove: To,
      mouseup: Mi,
      mouseleave: Mi
    }, si = jn("controls"), Yi = jn("nav"), qe = w ? !0 : e.navAsThumbnails, Gi = jn("autoplay"), Dt = jn("touch"), Ot = jn("mouseDrag"), Ki = "tns-slide-active", jt = "tns-slide-cloned", li = "tns-complete", ci = {
      load: hr,
      error: mr
    }, Vi, Ji, Fe = e.preventScrollOnTouch === "force";
    if (si)
      var P = e.controlsContainer, Rt = e.controlsContainer ? e.controlsContainer.outerHTML : "", M = e.prevButton, C = e.nextButton, or = e.prevButton ? e.prevButton.outerHTML : "", rr = e.nextButton ? e.nextButton.outerHTML : "", $e, He;
    if (Yi)
      var X = e.navContainer, Nt = e.navContainer ? e.navContainer.outerHTML : "", gn, _n = w ? g : So(), ee = 0, ie = -1, xn = Wt(), he = xn, pi = "tns-nav-active", me = "Carousel Page ", Zi = " (Current Slide)";
    if (Gi)
      var qt = e.autoplayDirection === "forward" ? 1 : -1, R = e.autoplayButton, Ft = e.autoplayButton ? e.autoplayButton.outerHTML : "", We = ["<span class='tns-visually-hidden'>", " animation</span>"], fi, pn, di, ge, ui;
    if (Dt || Ot)
      var te = {}, Tn = {}, hi, oe = !1, wn, Qi = L ? function(n, i) {
        return n.x - i.x;
      } : function(n, i) {
        return n.y - i.y;
      };
    w || mi(cn || vn), hn && (ne = hn, Vn = "translate", Be ? (Vn += L ? "3d(" : "3d(0px, ", ue = L ? ", 0px, 0px)" : ", 0px)") : (Vn += L ? "X(" : "Y(", ue = ")")), d && (m.className = m.className.replace("tns-vpfix", "")), cr(), pr(), Vt();
    function mi(n) {
      n && (An = zn = Pn = In = Hn = en = Gn = Kn = !1);
    }
    function $t() {
      for (var n = d ? p - U : p; n < 0; )
        n += g;
      return n % g + 1;
    }
    function Ht(n) {
      return n = n ? Math.max(0, Math.min(Q ? g - 1 : g - y, n)) : 0, d ? n + U : n;
    }
    function gi(n) {
      for (n == null && (n = p), d && (n -= U); n < 0; )
        n += g;
      return Math.floor(n % g);
    }
    function Wt() {
      var n = gi(), i;
      return i = qe ? n : u || w ? Math.ceil((n + 1) * _n / g - 1) : Math.floor(n / y), !Q && d && p === mn && (i = _n - 1), i;
    }
    function ar() {
      if (w || u && !$i)
        return g - 1;
      var n = u ? "fixedWidth" : "items", i = [];
      if ((u || e[n] < g) && i.push(e[n]), D)
        for (var o in D) {
          var r = D[o][n];
          r && (u || r < g) && i.push(r);
        }
      return i.length || i.push(0), Math.ceil(u ? $i / Math.min.apply(null, i) : Math.max.apply(null, i));
    }
    function sr() {
      var n = ar(), i = d ? Math.ceil((n * 5 - g) / 2) : n * 4 - g;
      return i = Math.max(n, i), jn("edgePadding") ? i + 1 : i;
    }
    function Pt() {
      return a.innerWidth || t.documentElement.clientWidth || t.body.clientWidth;
    }
    function Ui(n) {
      return n === "top" ? "afterbegin" : "beforeend";
    }
    function It(n) {
      if (n != null) {
        var i = t.createElement("div"), o, r;
        return n.appendChild(i), o = i.getBoundingClientRect(), r = o.right - o.left, i.remove(), r || It(n.parentNode);
      }
    }
    function Yt() {
      var n = j ? j * 2 - k : 0;
      return It(Fi) - n;
    }
    function jn(n) {
      if (e[n])
        return !0;
      if (D) {
        for (var i in D)
          if (D[i][n])
            return !0;
      }
      return !1;
    }
    function x(n, i) {
      if (i == null && (i = ti), n === "items" && u)
        return Math.floor((G + k) / (u + k)) || 1;
      var o = e[n];
      if (D)
        for (var r in D)
          i >= parseInt(r) && n in D[r] && (o = D[r][n]);
      return n === "slideBy" && o === "page" && (o = x("items")), !d && (n === "slideBy" || n === "items") && (o = Math.floor(o)), o;
    }
    function lr(n) {
      return b ? b + "(" + n * 100 + "% / " + S + ")" : n * 100 / S + "%";
    }
    function xi(n, i, o, r, f) {
      var h = "";
      if (n !== void 0) {
        var T = n;
        i && (T -= i), h = L ? "margin: 0 " + T + "px 0 " + n + "px;" : "margin: " + n + "px 0 " + T + "px 0;";
      } else if (i && !o) {
        var V = "-" + i + "px", B = L ? V + " 0 0" : "0 " + V + " 0";
        h = "margin: 0 " + B + ";";
      }
      return !d && f && nn && r && (h += re(r)), h;
    }
    function bi(n, i, o) {
      return n ? (n + i) * S + "px" : b ? b + "(" + S * 100 + "% / " + o + ")" : S * 100 / o + "%";
    }
    function vi(n, i, o) {
      var r;
      if (n)
        r = n + i + "px";
      else {
        d || (o = Math.floor(o));
        var f = d ? S : o;
        r = b ? b + "(100% / " + f + ")" : 100 / f + "%";
      }
      return r = "width:" + r, ce !== "inner" ? r + ";" : r + " !important;";
    }
    function _i(n) {
      var i = "";
      if (n !== !1) {
        var o = L ? "padding-" : "margin-", r = L ? "right" : "bottom";
        i = o + r + ": " + n + "px;";
      }
      return i;
    }
    function Gt(n, i) {
      var o = n.substring(0, n.length - i).toLowerCase();
      return o && (o = "-" + o + "-"), o;
    }
    function re(n) {
      return Gt(nn, 18) + "transition-duration:" + n / 1e3 + "s;";
    }
    function Kt(n) {
      return Gt(ei, 17) + "animation-duration:" + n / 1e3 + "s;";
    }
    function cr() {
      var n = "tns-outer", i = "tns-inner";
      if (jn("gutter"), on.className = n, rn.className = i, on.id = O + "-ow", rn.id = O + "-iw", m.id === "" && (m.id = O), Qn += Y || w ? " tns-subpixel" : " tns-no-subpixel", Qn += b ? " tns-calc" : " tns-no-calc", w && (Qn += " tns-autowidth"), Qn += " tns-" + e.axis, m.className += Qn, d ? (sn = t.createElement("div"), sn.id = O + "-mw", sn.className = "tns-ovh", on.appendChild(sn), sn.appendChild(rn)) : on.appendChild(rn), ln) {
        var o = sn || rn;
        o.className += " tns-ah";
      }
      if (Fi.insertBefore(on, m), rn.appendChild(m), qn(E, function(I, be) {
        F(I, "tns-item"), I.id || (I.id = O + "-item" + be), !d && Ln && F(I, Ln), fn(I, {
          "aria-hidden": "true",
          tabindex: "-1"
        });
      }), U) {
        for (var r = t.createDocumentFragment(), f = t.createDocumentFragment(), h = U; h--; ) {
          var T = h % g, V = E[T].cloneNode(!0);
          if (F(V, jt), Fn(V, "id"), f.insertBefore(V, f.firstChild), d) {
            var B = E[g - 1 - T].cloneNode(!0);
            F(B, jt), Fn(B, "id"), r.appendChild(B);
          }
        }
        m.insertBefore(r, m.firstChild), m.appendChild(f), E = m.children;
      }
    }
    function Vt() {
      if (jn("autoHeight") || w || !L) {
        var n = m.querySelectorAll("img");
        qn(n, function(i) {
          var o = i.src;
          Le || (o && o.indexOf("data:image") < 0 ? (i.src = "", N(i, ci), F(i, "loading"), i.src = o) : ao(i));
        }), Nn(function() {
          ki(_t(n), function() {
            Vi = !0;
          });
        }), jn("autoHeight") && (n = tt(p, Math.min(p + y - 1, S - 1))), Le ? Jt() : Nn(function() {
          ki(_t(n), Jt);
        });
      } else
        d && Ie(), Qt(), Ut();
    }
    function Jt() {
      if (w && g > 1) {
        var n = Q ? p : g - 1;
        (function i() {
          var o = E[n].getBoundingClientRect().left, r = E[n - 1].getBoundingClientRect().right;
          Math.abs(o - r) <= 1 ? Zt() : setTimeout(function() {
            i();
          }, 16);
        })();
      } else
        Zt();
    }
    function Zt() {
      (!L || w) && (po(), w ? (de = rt(), ai && (vn = Xi()), mn = Ae(), mi(cn || vn)) : lt()), d && Ie(), Qt(), Ut();
    }
    function pr() {
      if (!d)
        for (var n = p, i = p + Math.min(g, y); n < i; n++) {
          var o = E[n];
          o.style.left = (n - p) * 100 / y + "%", F(o, $n), an(o, Ln);
        }
      if (L && (Y || w ? (On(A, "#" + O + " > .tns-item", "font-size:" + a.getComputedStyle(E[0]).fontSize + ";", Sn(A)), On(A, "#" + O, "font-size:0;", Sn(A))) : d && qn(E, function(dt, ut) {
        dt.style.marginLeft = lr(ut);
      })), q) {
        if (nn) {
          var r = sn && e.autoHeight ? re(e.speed) : "";
          On(A, "#" + O + "-mw", r, Sn(A));
        }
        r = xi(e.edgePadding, e.gutter, e.fixedWidth, e.speed, e.autoHeight), On(A, "#" + O + "-iw", r, Sn(A)), d && (r = L && !w ? "width:" + bi(e.fixedWidth, e.gutter, e.items) + ";" : "", nn && (r += re(bn)), On(A, "#" + O, r, Sn(A))), r = L && !w ? vi(e.fixedWidth, e.gutter, e.items) : "", e.gutter && (r += _i(e.gutter)), d || (nn && (r += re(bn)), ei && (r += Kt(bn))), r && On(A, "#" + O + " > .tns-item", r, Sn(A));
      } else {
        xr(), rn.style.cssText = xi(j, k, u, ln), d && L && !w && (m.style.width = bi(u, k, y));
        var r = L && !w ? vi(u, k, y) : "";
        k && (r += _i(k)), r && On(A, "#" + O + " > .tns-item", r, Sn(A));
      }
      if (D && q)
        for (var f in D) {
          f = parseInt(f);
          var h = D[f], r = "", T = "", V = "", B = "", I = "", be = w ? null : x("items", f), Ke = x("fixedWidth", f), se = x("speed", f), pt = x("edgePadding", f), ft = x("autoHeight", f), ve = x("gutter", f);
          nn && sn && x("autoHeight", f) && "speed" in h && (T = "#" + O + "-mw{" + re(se) + "}"), ("edgePadding" in h || "gutter" in h) && (V = "#" + O + "-iw{" + xi(pt, ve, Ke, se, ft) + "}"), d && L && !w && ("fixedWidth" in h || "items" in h || u && "gutter" in h) && (B = "width:" + bi(Ke, ve, be) + ";"), nn && "speed" in h && (B += re(se)), B && (B = "#" + O + "{" + B + "}"), ("fixedWidth" in h || u && "gutter" in h || !d && "items" in h) && (I += vi(Ke, ve, be)), "gutter" in h && (I += _i(ve)), !d && "speed" in h && (nn && (I += re(se)), ei && (I += Kt(se))), I && (I = "#" + O + " > .tns-item{" + I + "}"), r = T + V + B + I, r && A.insertRule("@media (min-width: " + f / 16 + "em) {" + r + "}", A.cssRules.length);
        }
    }
    function Qt() {
      if (ot(), on.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + ro() + "</span>  of " + g + "</div>"), Ji = on.querySelector(".tns-liveregion .current"), Gi) {
        var n = en ? "stop" : "start";
        R ? fn(R, { "data-action": n }) : e.autoplayButtonOutput && (on.insertAdjacentHTML(Ui(e.autoplayPosition), '<button type="button" data-action="' + n + '">' + We[0] + n + We[1] + Yn[0] + "</button>"), R = on.querySelector("[data-action]")), R && N(R, { click: vo }), en && (zi(), Gn && N(m, De), Kn && N(m, Oe));
      }
      if (Yi) {
        if (X)
          fn(X, { "aria-label": "Carousel Pagination" }), gn = X.children, qn(gn, function(T, V) {
            fn(T, {
              "data-nav": V,
              tabindex: "-1",
              "aria-label": me + (V + 1),
              "aria-controls": O
            });
          });
        else {
          for (var i = "", o = qe ? "" : 'style="display:none"', r = 0; r < g; r++)
            i += '<button type="button" data-nav="' + r + '" tabindex="-1" aria-controls="' + O + '" ' + o + ' aria-label="' + me + (r + 1) + '"></button>';
          i = '<div class="tns-nav" aria-label="Carousel Pagination">' + i + "</div>", on.insertAdjacentHTML(Ui(e.navPosition), i), X = on.querySelector(".tns-nav"), gn = X.children;
        }
        if (ct(), nn) {
          var f = nn.substring(0, nn.length - 18).toLowerCase(), h = "transition: all " + bn / 1e3 + "s";
          f && (h = "-" + f + "-" + h), On(A, "[aria-controls^=" + O + "-item]", h, Sn(A));
        }
        fn(gn[xn], { "aria-label": me + (xn + 1) + Zi }), Fn(gn[xn], "tabindex"), F(gn[xn], pi), N(X, Ii);
      }
      si && (!P && (!M || !C) && (on.insertAdjacentHTML(Ui(e.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + O + '">' + Wn[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + O + '">' + Wn[1] + "</button></div>"), P = on.querySelector(".tns-controls")), (!M || !C) && (M = P.children[0], C = P.children[1]), e.controlsContainer && fn(P, {
        "aria-label": "Carousel Navigation",
        tabindex: "0"
      }), (e.controlsContainer || e.prevButton && e.nextButton) && fn([M, C], {
        "aria-controls": O,
        tabindex: "-1"
      }), (e.controlsContainer || e.prevButton && e.nextButton) && (fn(M, { "data-controls": "prev" }), fn(C, { "data-controls": "next" })), $e = uo(M), He = uo(C), mo(), P ? N(P, Ce) : (N(M, Ce), N(C, Ce))), nt();
    }
    function Ut() {
      if (d && Bn) {
        var n = {};
        n[Bn] = Dn, N(m, n);
      }
      Pn && N(m, Re, e.preventScrollOnTouch), In && N(m, Ne), Hn && N(t, je), ce === "inner" ? K.on("outerResized", function() {
        Bt(), K.emit("innerLoaded", tn());
      }) : (D || u || w || ln || !L) && N(a, { resize: Xt }), ln && (ce === "outer" ? K.on("innerLoaded", yi) : cn || yi()), et(), cn ? to() : vn && io(), K.on("indexChanged", so), ce === "inner" && K.emit("innerLoaded", tn()), typeof Pi == "function" && Pi(tn()), Ee = !0;
    }
    function fr() {
      if (A.disabled = !0, A.ownerNode && A.ownerNode.remove(), J(a, { resize: Xt }), Hn && J(t, je), P && J(P, Ce), X && J(X, Ii), J(m, De), J(m, Oe), R && J(R, { click: vo }), en && clearInterval(fi), d && Bn) {
        var n = {};
        n[Bn] = Dn, J(m, n);
      }
      Pn && J(m, Re), In && J(m, Ne);
      var i = [Mt, Rt, or, rr, Nt, Ft];
      Ri.forEach(function(r, f) {
        var h = r === "container" ? on : e[r];
        if (typeof h == "object" && h) {
          var T = h.previousElementSibling ? h.previousElementSibling : !1, V = h.parentNode;
          h.outerHTML = i[f], e[r] = T ? T.nextElementSibling : V.firstElementChild;
        }
      }), Ri = $n = ii = qi = Ln = L = on = rn = m = Fi = Mt = E = g = Te = ti = w = u = j = k = G = y = pe = $i = Hn = bn = Se = Q = ln = A = Le = W = fe = U = S = Ct = de = Wi = ne = Vn = ue = Ae = p = Jn = Mn = mn = ri = Cn = Zn = Pi = K = Qn = O = cn = ze = ai = vn = Me = Ce = Ii = De = Oe = je = Re = Ne = si = Yi = qe = Gi = Dt = Ot = Ki = li = ci = Vi = An = Wn = P = Rt = M = C = $e = He = zn = X = Nt = gn = _n = ee = ie = xn = he = pi = me = Zi = en = Hi = qt = Yn = Gn = R = Ft = Kn = We = fi = pn = di = ge = ui = te = Tn = hi = oe = wn = Qi = Pn = In = null;
      for (var o in this)
        o !== "rebuild" && (this[o] = null);
      Ee = !1;
    }
    function Xt(n) {
      Nn(function() {
        Bt(Rn(n));
      });
    }
    function Bt(n) {
      if (Ee) {
        ce === "outer" && K.emit("outerResized", tn(n)), ti = Pt();
        var i, o = Te, r = !1;
        D && (no(), i = o !== Te, i && K.emit("newBreakpointStart", tn(n)));
        var f, h, T = y, V = cn, B = vn, I = Hn, be = An, Ke = zn, se = Pn, pt = In, ft = en, ve = Gn, dt = Kn, ut = p;
        if (i) {
          var Cr = u, Dr = ln, Or = Wn, jr = Z, ht = Yn;
          if (!q)
            var Rr = k, Nr = j;
        }
        if (Hn = x("arrowKeys"), An = x("controls"), zn = x("nav"), Pn = x("touch"), Z = x("center"), In = x("mouseDrag"), en = x("autoplay"), Gn = x("autoplayHoverPause"), Kn = x("autoplayResetOnVisibility"), i && (cn = x("disable"), u = x("fixedWidth"), bn = x("speed"), ln = x("autoHeight"), Wn = x("controlsText"), Yn = x("autoplayText"), Hi = x("autoplayTimeout"), q || (j = x("edgePadding"), k = x("gutter"))), mi(cn), G = Yt(), (!L || w) && !cn && (po(), L || (lt(), r = !0)), (u || w) && (de = rt(), mn = Ae()), (i || u) && (y = x("items"), pe = x("slideBy"), h = y !== T, h && (!u && !w && (mn = Ae()), Bi())), i && cn !== V && (cn ? to() : ur()), ai && (i || u || w) && (vn = Xi(), vn !== B && (vn ? (at(Si(Ht(0))), io()) : (dr(), r = !0))), mi(cn || vn), en || (Gn = Kn = !1), Hn !== I && (Hn ? N(t, je) : J(t, je)), An !== be && (An ? P ? un(P) : (M && un(M), C && un(C)) : P ? dn(P) : (M && dn(M), C && dn(C))), zn !== Ke && (zn ? (un(X), ct()) : dn(X)), Pn !== se && (Pn ? N(m, Re, e.preventScrollOnTouch) : J(m, Re)), In !== pt && (In ? N(m, Ne) : J(m, Ne)), en !== ft && (en ? (R && un(R), !pn && !ge && zi()) : (R && dn(R), pn && Ge())), Gn !== ve && (Gn ? N(m, De) : J(m, De)), Kn !== dt && (Kn ? N(t, Oe) : J(t, Oe)), i) {
          if ((u !== Cr || Z !== jr) && (r = !0), ln !== Dr && (ln || (rn.style.height = "")), An && Wn !== Or && (M.innerHTML = Wn[0], C.innerHTML = Wn[1]), R && Yn !== ht) {
            var mt = en ? 1 : 0, gt = R.innerHTML, Lo = gt.length - ht[mt].length;
            gt.substring(Lo) === ht[mt] && (R.innerHTML = gt.substring(0, Lo) + Yn[mt]);
          }
        } else
          Z && (u || w) && (r = !0);
        if ((h || u && !w) && (_n = So(), ct()), f = p !== ut, f ? (K.emit("indexChanged", tn()), r = !0) : h ? f || so() : (u || w) && (et(), ot(), oo()), h && !d && br(), !cn && !vn) {
          if (i && !q && ((j !== Nr || k !== Rr) && (rn.style.cssText = xi(j, k, u, bn, ln)), L)) {
            d && (m.style.width = bi(u, k, y));
            var qr = vi(u, k, y) + _i(k);
            Zo(A, Sn(A) - 1), On(A, "#" + O + " > .tns-item", qr, Sn(A));
          }
          ln && yi(), r && (Ie(), Jn = p);
        }
        i && K.emit("newBreakpointEnd", tn(n));
      }
    }
    function Xi() {
      if (!u && !w) {
        var n = Z ? y - (y - 1) / 2 : y;
        return g <= n;
      }
      var i = u ? (u + k) * g : W[g], o = j ? G + j * 2 : G + k;
      return Z && (o -= u ? (G - u) / 2 : (G - (W[p + 1] - W[p] - k)) / 2), i <= o;
    }
    function no() {
      Te = 0;
      for (var n in D)
        n = parseInt(n), ti >= n && (Te = n);
    }
    var Bi = /* @__PURE__ */ function() {
      return Q ? d ? (
        // loop + carousel
        function() {
          var n = Mn, i = mn;
          n += pe, i -= pe, j ? (n += 1, i -= 1) : u && (G + k) % (u + k) && (i -= 1), U && (p > i ? p -= g : p < n && (p += g));
        }
      ) : (
        // loop + gallery
        function() {
          if (p > mn)
            for (; p >= Mn + g; )
              p -= g;
          else if (p < Mn)
            for (; p <= mn - g; )
              p += g;
        }
      ) : (
        // non-loop
        function() {
          p = Math.max(Mn, Math.min(mn, p));
        }
      );
    }();
    function nt() {
      !en && R && dn(R), !zn && X && dn(X), An || (P ? dn(P) : (M && dn(M), C && dn(C)));
    }
    function eo() {
      en && R && un(R), zn && X && un(X), An && (P ? un(P) : (M && un(M), C && un(C)));
    }
    function io() {
      if (!Me) {
        if (j && (rn.style.margin = "0px"), U)
          for (var n = "tns-transparent", i = U; i--; )
            d && F(E[i], n), F(E[S - i - 1], n);
        nt(), Me = !0;
      }
    }
    function dr() {
      if (Me) {
        if (j && q && (rn.style.margin = ""), U)
          for (var n = "tns-transparent", i = U; i--; )
            d && an(E[i], n), an(E[S - i - 1], n);
        eo(), Me = !1;
      }
    }
    function to() {
      if (!ze) {
        if (A.disabled = !0, m.className = m.className.replace(Qn.substring(1), ""), Fn(m, ["style"]), Q)
          for (var n = U; n--; )
            d && dn(E[n]), dn(E[S - n - 1]);
        if ((!L || !d) && Fn(rn, ["style"]), !d)
          for (var i = p, o = p + g; i < o; i++) {
            var r = E[i];
            Fn(r, ["style"]), an(r, $n), an(r, Ln);
          }
        nt(), ze = !0;
      }
    }
    function ur() {
      if (ze) {
        if (A.disabled = !1, m.className += Qn, Ie(), Q)
          for (var n = U; n--; )
            d && un(E[n]), un(E[S - n - 1]);
        if (!d)
          for (var i = p, o = p + g; i < o; i++) {
            var r = E[i], f = i < p + y ? $n : Ln;
            r.style.left = (i - p) * 100 / y + "%", F(r, f);
          }
        eo(), ze = !1;
      }
    }
    function oo() {
      var n = ro();
      Ji.innerHTML !== n && (Ji.innerHTML = n);
    }
    function ro() {
      var n = wi(), i = n[0] + 1, o = n[1] + 1;
      return i === o ? i + "" : i + " to " + o;
    }
    function wi(n) {
      n == null && (n = Si());
      var i = p, o, r, f;
      if (Z || j ? (w || u) && (r = -(parseFloat(n) + j), f = r + G + j * 2) : w && (r = W[p], f = r + G), w)
        W.forEach(function(B, I) {
          I < S && ((Z || j) && B <= r + 0.5 && (i = I), f - B >= 0.5 && (o = I));
        });
      else {
        if (u) {
          var h = u + k;
          Z || j ? (i = Math.floor(r / h), o = Math.ceil(f / h - 1)) : o = i + Math.ceil(G / h) - 1;
        } else if (Z || j) {
          var T = y - 1;
          if (Z ? (i -= T / 2, o = p + T / 2) : o = p + T, j) {
            var V = j * y / G;
            i -= V, o += V;
          }
          i = Math.floor(i), o = Math.ceil(o);
        } else
          o = i + y - 1;
        i = Math.max(i, 0), o = Math.min(o, S - 1);
      }
      return [i, o];
    }
    function et() {
      if (Le && !cn) {
        var n = wi();
        n.push(tr), tt.apply(null, n).forEach(function(i) {
          if (!le(i, li)) {
            var o = {};
            o[Bn] = function(f) {
              f.stopPropagation();
            }, N(i, o), N(i, ci), i.src = Ue(i, "data-src");
            var r = Ue(i, "data-srcset");
            r && (i.srcset = r), F(i, "loading");
          }
        });
      }
    }
    function hr(n) {
      ao(xe(n));
    }
    function mr(n) {
      gr(xe(n));
    }
    function ao(n) {
      F(n, "loaded"), it(n);
    }
    function gr(n) {
      F(n, "failed"), it(n);
    }
    function it(n) {
      F(n, li), an(n, "loading"), J(n, ci);
    }
    function tt(n, i, o) {
      var r = [];
      for (o || (o = "img"); n <= i; )
        qn(E[n].querySelectorAll(o), function(f) {
          r.push(f);
        }), n++;
      return r;
    }
    function yi() {
      var n = tt.apply(null, wi());
      Nn(function() {
        ki(n, co);
      });
    }
    function ki(n, i) {
      if (Vi || (n.forEach(function(o, r) {
        !Le && o.complete && it(o), le(o, li) && n.splice(r, 1);
      }), !n.length))
        return i();
      Nn(function() {
        ki(n, i);
      });
    }
    function so() {
      et(), ot(), oo(), mo(), vr();
    }
    function xr() {
      d && ln && (sn.style[nn] = bn / 1e3 + "s");
    }
    function lo(n, i) {
      for (var o = [], r = n, f = Math.min(n + i, S); r < f; r++)
        o.push(E[r].offsetHeight);
      return Math.max.apply(null, o);
    }
    function co() {
      var n = ln ? lo(p, y) : lo(U, g), i = sn || rn;
      i.style.height !== n && (i.style.height = n + "px");
    }
    function po() {
      W = [0];
      var n = L ? "left" : "top", i = L ? "right" : "bottom", o = E[0].getBoundingClientRect()[n];
      qn(E, function(r, f) {
        f && W.push(r.getBoundingClientRect()[n] - o), f === S - 1 && W.push(r.getBoundingClientRect()[i] - o);
      });
    }
    function ot() {
      var n = wi(), i = n[0], o = n[1];
      qn(E, function(r, f) {
        f >= i && f <= o ? we(r, "aria-hidden") && (Fn(r, ["aria-hidden", "tabindex"]), F(r, Ki)) : we(r, "aria-hidden") || (fn(r, {
          "aria-hidden": "true",
          tabindex: "-1"
        }), an(r, Ki));
      });
    }
    function br() {
      for (var n = p + Math.min(g, y), i = S; i--; ) {
        var o = E[i];
        i >= p && i < n ? (F(o, "tns-moving"), o.style.left = (i - p) * 100 / y + "%", F(o, $n), an(o, Ln)) : o.style.left && (o.style.left = "", F(o, Ln), an(o, $n)), an(o, ii);
      }
      setTimeout(function() {
        qn(E, function(r) {
          an(r, "tns-moving");
        });
      }, 300);
    }
    function vr() {
      if (zn && (xn = ie >= 0 ? ie : Wt(), ie = -1, xn !== he)) {
        var n = gn[he], i = gn[xn];
        fn(n, {
          tabindex: "-1",
          "aria-label": me + (he + 1)
        }), an(n, pi), fn(i, { "aria-label": me + (xn + 1) + Zi }), Fn(i, "tabindex"), F(i, pi), he = xn;
      }
    }
    function fo(n) {
      return n.nodeName.toLowerCase();
    }
    function uo(n) {
      return fo(n) === "button";
    }
    function ho(n) {
      return n.getAttribute("aria-disabled") === "true";
    }
    function Ti(n, i, o) {
      n ? i.disabled = o : i.setAttribute("aria-disabled", o.toString());
    }
    function mo() {
      if (!(!An || Se || Q)) {
        var n = $e ? M.disabled : ho(M), i = He ? C.disabled : ho(C), o = p <= Mn, r = !Se && p >= mn;
        o && !n && Ti($e, M, !0), !o && n && Ti($e, M, !1), r && !i && Ti(He, C, !0), !r && i && Ti(He, C, !1);
      }
    }
    function Ei(n, i) {
      nn && (n.style[nn] = i);
    }
    function _r() {
      return u ? (u + k) * S : W[S];
    }
    function Pe(n) {
      n == null && (n = p);
      var i = j ? k : 0;
      return w ? (G - i - (W[n + 1] - W[n] - k)) / 2 : u ? (G - u) / 2 : (y - 1) / 2;
    }
    function rt() {
      var n = j ? k : 0, i = G + n - _r();
      return Z && !Q && (i = u ? -(u + k) * (S - 1) - Pe() : Pe(S - 1) - W[S - 1]), i > 0 && (i = 0), i;
    }
    function Si(n) {
      n == null && (n = p);
      var i;
      if (L && !w)
        if (u)
          i = -(u + k) * n, Z && (i += Pe());
        else {
          var o = hn ? S : y;
          Z && (n -= Pe()), i = -n * 100 / o;
        }
      else
        i = -W[n], Z && w && (i += Pe());
      return Ct && (i = Math.max(i, de)), i += L && !w && !u ? "%" : "px", i;
    }
    function Ie(n) {
      Ei(m, "0s"), at(n);
    }
    function at(n) {
      n == null && (n = Si()), m.style[ne] = Vn + n + ue;
    }
    function go(n, i, o, r) {
      var f = n + y;
      Q || (f = Math.min(f, S));
      for (var h = n; h < f; h++) {
        var T = E[h];
        r || (T.style.left = (h - p) * 100 / y + "%"), qi && ni && (T.style[ni] = T.style[ji] = qi * (h - n) / 1e3 + "s"), an(T, i), F(T, o), r && fe.push(T);
      }
    }
    var wr = /* @__PURE__ */ function() {
      return d ? function() {
        Ei(m, ""), nn || !bn ? (at(), (!bn || !wt(m)) && Dn()) : er(m, ne, Vn, ue, Si(), bn, Dn), L || lt();
      } : function() {
        fe = [];
        var n = {};
        n[Bn] = n[Et] = Dn, J(E[Jn], n), N(E[p], n), go(Jn, $n, ii, !0), go(p, Ln, $n), (!Bn || !Et || !bn || !wt(m)) && Dn();
      };
    }();
    function st(n, i) {
      Wi && Bi(), (p !== Jn || i) && (K.emit("indexChanged", tn()), K.emit("transitionStart", tn()), ln && yi(), pn && n && ["click", "keydown"].indexOf(n.type) >= 0 && Ge(), Zn = !0, wr());
    }
    function xo(n) {
      return n.toLowerCase().replace(/-/g, "");
    }
    function Dn(n) {
      if (d || Zn) {
        if (K.emit("transitionEnd", tn(n)), !d && fe.length > 0)
          for (var i = 0; i < fe.length; i++) {
            var o = fe[i];
            o.style.left = "", ji && ni && (o.style[ji] = "", o.style[ni] = ""), an(o, ii), F(o, Ln);
          }
        if (!n || !d && n.target.parentNode === m || n.target === m && xo(n.propertyName) === xo(ne)) {
          if (!Wi) {
            var r = p;
            Bi(), p !== r && (K.emit("indexChanged", tn()), Ie());
          }
          ce === "inner" && K.emit("innerLoaded", tn()), Zn = !1, Jn = p;
        }
      }
    }
    function Ye(n, i) {
      if (!vn)
        if (n === "prev")
          Un(i, -1);
        else if (n === "next")
          Un(i, 1);
        else {
          if (Zn) {
            if (oi)
              return;
            Dn();
          }
          var o = gi(), r = 0;
          if (n === "first" ? r = -o : n === "last" ? r = d ? g - y - o : g - 1 - o : (typeof n != "number" && (n = parseInt(n)), isNaN(n) || (i || (n = Math.max(0, Math.min(g - 1, n))), r = n - o)), !d && r && Math.abs(r) < y) {
            var f = r > 0 ? 1 : -1;
            r += p + r - g >= Mn ? g * f : g * 2 * f * -1;
          }
          p += r, d && Q && (p < Mn && (p += g), p > mn && (p -= g)), gi(p) !== gi(Jn) && st(i);
        }
    }
    function Un(n, i) {
      if (Zn) {
        if (oi)
          return;
        Dn();
      }
      var o;
      if (!i) {
        n = Rn(n);
        for (var r = xe(n); r !== P && [M, C].indexOf(r) < 0; )
          r = r.parentNode;
        var f = [M, C].indexOf(r);
        f >= 0 && (o = !0, i = f === 0 ? -1 : 1);
      }
      if (Se) {
        if (p === Mn && i === -1) {
          Ye("last", n);
          return;
        } else if (p === mn && i === 1) {
          Ye("first", n);
          return;
        }
      }
      i && (p += pe * i, w && (p = Math.floor(p)), st(o || n && n.type === "keydown" ? n : null));
    }
    function yr(n) {
      if (Zn) {
        if (oi)
          return;
        Dn();
      }
      n = Rn(n);
      for (var i = xe(n), o; i !== X && !we(i, "data-nav"); )
        i = i.parentNode;
      if (we(i, "data-nav")) {
        var o = ie = Number(Ue(i, "data-nav")), r = u || w ? o * g / _n : o * y, f = qe ? o : Math.min(Math.ceil(r), g - 1);
        Ye(f, n), xn === o && (pn && Ge(), ie = -1);
      }
    }
    function Li() {
      fi = setInterval(function() {
        Un(null, qt);
      }, Hi), pn = !0;
    }
    function Ai() {
      clearInterval(fi), pn = !1;
    }
    function bo(n, i) {
      fn(R, { "data-action": n }), R.innerHTML = We[0] + n + We[1] + i;
    }
    function zi() {
      Li(), R && bo("stop", Yn[1]);
    }
    function Ge() {
      Ai(), R && bo("start", Yn[0]);
    }
    function kr() {
      en && !pn && (zi(), ge = !1);
    }
    function Tr() {
      pn && (Ge(), ge = !0);
    }
    function vo() {
      pn ? (Ge(), ge = !0) : (zi(), ge = !1);
    }
    function Er() {
      t.hidden ? pn && (Ai(), ui = !0) : ui && (Li(), ui = !1);
    }
    function Sr() {
      pn && (Ai(), di = !0);
    }
    function Lr() {
      di && (Li(), di = !1);
    }
    function Ar(n) {
      n = Rn(n);
      var i = [l.LEFT, l.RIGHT].indexOf(n.keyCode);
      i >= 0 && Un(n, i === 0 ? -1 : 1);
    }
    function zr(n) {
      n = Rn(n);
      var i = [l.LEFT, l.RIGHT].indexOf(n.keyCode);
      i >= 0 && (i === 0 ? M.disabled || Un(n, -1) : C.disabled || Un(n, 1));
    }
    function _o(n) {
      n.focus();
    }
    function Mr(n) {
      n = Rn(n);
      var i = t.activeElement;
      if (we(i, "data-nav")) {
        var o = [l.LEFT, l.RIGHT, l.ENTER, l.SPACE].indexOf(n.keyCode), r = Number(Ue(i, "data-nav"));
        o >= 0 && (o === 0 ? r > 0 && _o(gn[r - 1]) : o === 1 ? r < _n - 1 && _o(gn[r + 1]) : (ie = r, Ye(r, n)));
      }
    }
    function Rn(n) {
      return n = n || a.event, ae(n) ? n.changedTouches[0] : n;
    }
    function xe(n) {
      return n.target || a.event.srcElement;
    }
    function ae(n) {
      return n.type.indexOf("touch") >= 0;
    }
    function wo(n) {
      n.preventDefault ? n.preventDefault() : n.returnValue = !1;
    }
    function yo() {
      return Uo(Qo(Tn.y - te.y, Tn.x - te.x), ri) === e.axis;
    }
    function ko(n) {
      if (Zn) {
        if (oi)
          return;
        Dn();
      }
      en && pn && Ai(), oe = !0, wn && (Ci(wn), wn = null);
      var i = Rn(n);
      K.emit(ae(n) ? "touchStart" : "dragStart", tn(n)), !ae(n) && ["img", "a"].indexOf(fo(xe(n))) >= 0 && wo(n), Tn.x = te.x = i.clientX, Tn.y = te.y = i.clientY, d && (hi = parseFloat(m.style[ne].replace(Vn, "")), Ei(m, "0s"));
    }
    function To(n) {
      if (oe) {
        var i = Rn(n);
        Tn.x = i.clientX, Tn.y = i.clientY, d ? wn || (wn = Nn(function() {
          Eo(n);
        })) : (Cn === "?" && (Cn = yo()), Cn && (Fe = !0)), (typeof n.cancelable != "boolean" || n.cancelable) && Fe && n.preventDefault();
      }
    }
    function Eo(n) {
      if (!Cn) {
        oe = !1;
        return;
      }
      if (Ci(wn), oe && (wn = Nn(function() {
        Eo(n);
      })), Cn === "?" && (Cn = yo()), Cn) {
        !Fe && ae(n) && (Fe = !0);
        try {
          n.type && K.emit(ae(n) ? "touchMove" : "dragMove", tn(n));
        } catch {
        }
        var i = hi, o = Qi(Tn, te);
        if (!L || u || w)
          i += o, i += "px";
        else {
          var r = hn ? o * y * 100 / ((G + k) * S) : o * 100 / (G + k);
          i += r, i += "%";
        }
        m.style[ne] = Vn + i + ue;
      }
    }
    function Mi(n) {
      if (oe) {
        wn && (Ci(wn), wn = null), d && Ei(m, ""), oe = !1;
        var i = Rn(n);
        Tn.x = i.clientX, Tn.y = i.clientY;
        var o = Qi(Tn, te);
        if (Math.abs(o)) {
          if (!ae(n)) {
            var r = xe(n);
            N(r, { click: function f(h) {
              wo(h), J(r, { click: f });
            } });
          }
          d ? wn = Nn(function() {
            if (L && !w) {
              var f = -o * y / (G + k);
              f = o > 0 ? Math.floor(f) : Math.ceil(f), p += f;
            } else {
              var h = -(hi + o);
              if (h <= 0)
                p = Mn;
              else if (h >= W[S - 1])
                p = mn;
              else
                for (var T = 0; T < S && h >= W[T]; )
                  p = T, h > W[T] && o < 0 && (p += 1), T++;
            }
            st(n, o), K.emit(ae(n) ? "touchEnd" : "dragEnd", tn(n));
          }) : Cn && Un(n, o > 0 ? -1 : 1);
        }
      }
      e.preventScrollOnTouch === "auto" && (Fe = !1), ri && (Cn = "?"), en && !pn && Li();
    }
    function lt() {
      var n = sn || rn;
      n.style.height = W[p + y] - W[p] + "px";
    }
    function So() {
      var n = u ? (u + k) * g / G : g / y;
      return Math.min(Math.ceil(n), g);
    }
    function ct() {
      if (!(!zn || qe) && _n !== ee) {
        var n = ee, i = _n, o = un;
        for (ee > _n && (n = _n, i = ee, o = dn); n < i; )
          o(gn[n]), n++;
        ee = _n;
      }
    }
    function tn(n) {
      return {
        container: m,
        slideItems: E,
        navContainer: X,
        navItems: gn,
        controlsContainer: P,
        hasControls: si,
        prevButton: M,
        nextButton: C,
        items: y,
        slideBy: pe,
        cloneCount: U,
        slideCount: g,
        slideCountNew: S,
        index: p,
        indexCached: Jn,
        displayIndex: $t(),
        navCurrentIndex: xn,
        navCurrentIndexCached: he,
        pages: _n,
        pagesCached: ee,
        sheet: A,
        isOn: Ee,
        event: n || {}
      };
    }
    return {
      version: "2.9.4",
      getInfo: tn,
      events: K,
      goTo: Ye,
      play: kr,
      pause: Tr,
      isOn: Ee,
      updateSliderHeight: co,
      refresh: Vt,
      destroy: fr,
      rebuild: function() {
        return Xe(Di(e, Lt));
      }
    };
  };
  Oo("opt_in_v2"), $("exp_optin_loaded", "Loaded", "loaded"), Do([
    "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css",
    "https://fast.wistia.com/assets/external/E-v1.js"
  ]), Mo({ name: "Opt in page", dev: "YK" });
  class ir {
    constructor() {
      zo("body", () => {
        z("body").elements[0].insertAdjacentHTML(
          "afterbegin",
          /* html */
          `<style>${Ao}</style>`
        ), this.init();
      });
    }
    init() {
      this.addBlocks(), this.setActions(), this.setEvents();
    }
    addBlocks() {
      z(".containerWrapper").elements[0].insertAdjacentHTML("afterend", '<div class="crs_landing"></div>');
      const t = z(".crs_landing").elements[0];
      t.insertAdjacentHTML("afterbegin", No), t.insertAdjacentHTML("beforeend", qo), t.insertAdjacentHTML("beforeend", Fo), t.insertAdjacentHTML("beforeend", $o), t.insertAdjacentHTML("beforeend", Ho), t.insertAdjacentHTML("beforeend", Wo), t.insertAdjacentHTML("beforeend", Po);
    }
    setActions() {
      z(".inputs2").on("click", "li", function() {
        if (!this.classList.contains("selected")) {
          this.closest(".inputs2").querySelector(".selected").classList.remove("selected"), this.classList.add("selected");
          const s = this.getAttribute("data-schedule");
          $("exp_optin_popup_cta_time", `Select time ${s}`, "click", "Popup after click on CTA");
        }
      }), z("form").on("submit", async function(s) {
        s.preventDefault();
        const c = this.querySelector('input[name="name"]').value, _ = this.querySelector('input[name="email"]').value;
        let v = !0;
        if ((!c || c.trim() === "") && (this.querySelector('input[name="name"]').closest("label").classList.add("error"), v = !1), (!_ || _.trim() === "" || !_.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) && (this.querySelector('input[name="email"]').closest("label").classList.add("error"), v = !1), !!v)
          if (this.closest("#main_block") ? $("exp_optin_fs_button", "Grab Your FREE Seat Now", "click", "First screen form") : $("exp_optin_popup_cta_button", "Grab Your FREE Seat Now", "click", "Popup after click on CTA"), window.innerWidth <= 768) {
            const b = (/* @__PURE__ */ new Date()).getTimezoneOffset() / 60, Y = `GMT${b > 0 ? "-" : "+"}${Math.abs(b)}`;
            if (console.log(this.querySelector("button").textContent), this.querySelector(".inputs2").classList.contains("active")) {
              const q = z(".inputs2 .selected").elements[0].getAttribute("data-schedule");
              fetch("https://conversionrate.top/api/dropservicing/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                },
                body: JSON.stringify({
                  api_key: "8f4aff29-94fa-4197-a1a2-4a3c03ede2e0",
                  webinarId: 75,
                  name: c,
                  email: _,
                  schedule: q
                })
              }).then((hn) => hn.json()).then((hn) => {
                window.location.href = hn.user.thank_you_url;
              });
            } else
              try {
                const q = await fetch("https://conversionrate.top/api/dropservicing/get-schedules", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    webinarId: 75,
                    timezone: Y
                  })
                }).then((hn) => hn.json());
                console.log(q), z(".crs_popup_form .inputs1").elements[0].style.display = "none", z(".crs_popup_form .inputs2").elements[0].innerHTML = Io(
                  q.webinar.schedules,
                  q.webinar.timezone
                ), z(".crs_popup_form .inputs2").addClass("active");
              } catch (q) {
                console.log(q);
              }
          } else
            await fetch("https://conversionrate.top/api/dropservicing/get-schedules", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                webinarId: 74
              })
            }).then((b) => b.json()).then((b) => b.schedule_id), fetch("https://conversionrate.top/api/dropservicing/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: JSON.stringify({
                api_key: "8f4aff29-94fa-4197-a1a2-4a3c03ede2e0",
                webinarId: 74,
                name: c,
                email: _,
                schedule: 275
              })
            }).then((b) => b.json()).then((b) => {
              window.location.href = b.user.thank_you_url;
            });
      }), z("form input").on("input", function() {
        this.closest("label").classList.remove("error");
      }), z('input[name="name"]').on("change", function() {
        !!this.closest("#main_block") ? $("exp_optin_fs_name", "Enter your name", "input", "First screen form") : $("exp_optin_popup_cta_name", "Enter your name", "input", "Popup after click on CTA");
      }), z('input[name="email"]').on("change", function() {
        !!this.closest("#main_block") ? $("exp_optin_fs_email", "Enter email address", "input", "First screen form") : $("exp_optin_popup_cta_email", "Enter email address", "input", "Popup after click on CTA");
      }), z(".question").on("click", function() {
        const s = this.innerText;
        if (this.classList.contains("active")) {
          this.classList.remove("active"), $("exp_optin_faq_close", `Close question. ${s}`, "click", "Frequently asked questions");
          return;
        }
        z(".question.active").removeClass("active"), this.classList.toggle("active"), $("exp_optin_faq_open", `Open question. ${s}`, "click", "Frequently asked questions");
      }), z(".cta.pop").on("click", function() {
        z(".crs_video_popup").elements[0].classList.contains("active") && z(".crs_video_popup .video *:not(.crs_close)").elements.forEach((s) => s.remove()), z(".crs_video_popup").elements[0].classList.remove("active"), z(".crs_popup_form").elements[0].classList.add("active"), this.closest("#last_cta") && $("exp_optin_future_cta", "Join the exclusive training", "click", "Your Future Starts Here"), this.closest("#training_for") && $("exp_optin_who_cta", "Join The FREE Training Now", "click", "Who is the Training for"), this.closest("#host_block") && $("exp_optin_host_cta", "Unlock Dylan’s Formula for Free ", "click", "Your Host: Dylan Sydney"), this.closest("#bonus_block") && $("exp_optin_bonuses_cta", "Grab Your FREE Seat Now", "click", "Exclusive Bonuses"), this.closest(".crs_video_popup") && $("exp_optin_popup_review_cta", "Grab Your FREE Seat Now", "click", "Popup after review"), this.closest("#main_block") && $("exp_optin_fs_button_mobile", "Grab Your FREE Seat Now", "click", "First screen form");
      }), z(".crs_popup_form .close").on("click", function() {
        z(".crs_popup_form").elements[0].classList.remove("active"), z(".crs_popup_form .inputs1").elements[0].style.display = "block", z(".crs_popup_form .inputs2").removeClass("active");
      }), z("#base_review .slide").on("click", function() {
        const s = this.querySelector(".slide>p").textContent, c = this.getAttribute("data-video");
        z(".crs_video_popup").elements[0].classList.add("active"), $("exp_optin_why_join_review", `Open review. ${s}`, "click", "Why Join This Webinar"), z(
          ".crs_video_popup .video"
        ).elements[0].innerHTML = /* html */
        `<div class="crs_close"></div><div class="wistia_embed wistia_async_${c}"></div>`, z(".crs_video_popup .crs_close").on("click", function() {
          z(".crs_video_popup").elements[0].classList.remove("active");
        }), window._wq.push({
          id: c,
          onReady: function(_) {
            _.bind("play", function() {
              $("exp_optin_why_join_video", `Play video ${s}`, "click", "Why Join This Webinar");
            });
          }
        });
      });
      const t = Xe({
        container: "#base_review ul",
        slideBy: 1,
        loop: !1,
        navPosition: "bottom",
        //@ts-ignore
        controlsPosition: "bottom",
        mouseDrag: !1,
        gutter: 30,
        responsive: {
          0: {
            items: 1,
            controls: !1,
            autoHeight: !0
          },
          768: {
            items: 3,
            controls: !0,
            nav: !1
          }
        }
      }), a = Xe({
        container: "#video_block ul",
        items: 1,
        slideBy: 1,
        //@ts-ignore
        controlsPosition: "bottom",
        loop: !1,
        navPosition: "bottom",
        gutter: 0,
        center: !0,
        responsive: {
          0: {
            edgePadding: 16,
            controls: !1
          },
          768: {
            edgePadding: 200,
            controls: !0
          }
        }
      });
      setTimeout(() => {
        t.getInfo().navItems && t.getInfo().navItems[1].classList.add("tns-nav-near");
      }, 500), t.events.on("indexChanged", function(s) {
        var _, v;
        const c = s.navItems;
        Array.from(c).forEach((b) => b.classList.remove("tns-nav-near")), (_ = c[s.index - 1]) == null || _.classList.add("tns-nav-near"), (v = c[s.index + 1]) == null || v.classList.add("tns-nav-near");
      }), a.getInfo().slideItems[0].classList.add("tns-current"), a.getInfo().navItems[1].classList.add("tns-nav-near"), a.events.on("indexChanged", function(s) {
        var b, Y;
        const c = s.slideItems, _ = s.navItems;
        Array.from(_).forEach((q) => q.classList.remove("tns-nav-near")), Array.from(c).forEach((q) => q.classList.remove("tns-current")), (b = _[s.index - 1]) == null || b.classList.add("tns-nav-near"), (Y = _[s.index + 1]) == null || Y.classList.add("tns-nav-near"), c[s.index].classList.add("tns-current");
      }), Xe({
        container: "#trust_pilot ul",
        items: 3,
        slideBy: 1,
        controls: !0,
        //@ts-ignore
        controlsPosition: "bottom",
        loop: !1,
        navPosition: "bottom",
        mouseDrag: !0,
        gutter: 20,
        autoHeight: !0,
        responsive: {
          0: {
            items: 1,
            controls: !1
          },
          768: {
            items: 3,
            controls: !0
          }
        }
      });
      const l = setInterval(() => {
        window.Wistia && (clearInterval(l), window._wq = window._wq || [], xt.forEach((s) => {
          window._wq.push({
            id: s.videoId,
            onReady: function(c) {
              c.bind("play", function() {
                c.container.closest(".video_slide") && $(
                  "exp_optin_hear_video",
                  `Video ${c.data.media.name}`,
                  "click",
                  "Hear from Our Participants"
                );
              });
            }
          });
        }));
      }, 500);
    }
    setEvents() {
      En(".crs_video_popup", "exp_optin_popup_review_view", "Popup after review"), En(".crs_popup_form", "exp_optin_popup_cta_view", "Popup after click on CTA"), En("#base_review", "exp_optin_why_join_view", "Why Join This Webinar"), En("#bonus_block", "exp_optin_bonuses_view", "Exclusive Bonuses"), En("#host_block", "exp_optin_host_view", "Your Host: Dylan Sydney"), En("#video_block", "exp_optin_hear_view", "Hear from Our Participants"), En("#training_for", "exp_optin_who_view", "Who is the Training for"), En("#trust_pilot", "exp_optin_trustscore_view", "TrustScore"), En("#faq_block", "exp_optin_faq_view", "Frequently asked questions"), En("#last_cta", "exp_optin_future_view", "Your Future Starts Here");
    }
  }
  window.location.href.includes("training") && new ir();
})();
//# sourceMappingURL=index.js.map

