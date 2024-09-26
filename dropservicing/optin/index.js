(function() {
  "use strict";
  const Lo = `*,
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
.crs_video_popup .video .video {
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
}/*# sourceMappingURL=style.css.map */`, P = (e, i, r, l = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: i,
      event_type: r,
      event_loc: l
    }), Un(`Event: ${e} | ${i} | ${r} | ${l}`, "success");
  }, Mo = (e, i) => {
    const r = setInterval(() => {
      const l = document.querySelector(e);
      l && (clearInterval(r), i(l));
    }, 100);
  }, zo = ({ name: e, dev: i }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${i})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class Do {
    constructor(i) {
      this.elements = typeof i == "string" ? document.querySelectorAll(i) : i instanceof Element ? [i] : i;
    }
    on(i, r, l) {
      return typeof r == "function" && (l = r, r = ""), this.elements.forEach(function(s) {
        s.addEventListener(i, function(d) {
          var y;
          if (r) {
            let x = (y = d.target) == null ? void 0 : y.closest(r);
            s.contains(x) && (l == null || l.call(x, d));
          } else
            l == null || l.call(s, d);
        });
      }), this;
    }
    addClass(i) {
      return this.elements.forEach(function(r) {
        r.classList.add(i);
      }), this;
    }
    removeClass(i) {
      return this.elements.forEach(function(r) {
        r.classList.remove(i);
      }), this;
    }
    toggleClass(i) {
      return this.elements.forEach(function(r) {
        r.classList.toggle(i);
      }), this;
    }
    each(i) {
      return this.elements.forEach((r, l) => {
        i(r, l);
      }), this;
    }
    style(i, r) {
      const l = i.split("-").map((s, d) => d === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[l] = r;
      }), this;
    }
  }
  const C = (e) => new Do(e), Co = async (e) => {
    const i = (r) => new Promise((l, s) => {
      const d = r.split(".").pop();
      if (d === "js") {
        if (Array.from(document.scripts).map((v) => v.src.toLowerCase()).includes(r.toLowerCase()))
          return Un(`Script ${r} allready downloaded!`, "success"), l("");
        const x = document.createElement("script");
        x.src = r, x.onload = l, x.onerror = s, document.head.appendChild(x);
      } else if (d === "css") {
        if (Array.from(document.styleSheets).map((v) => {
          var K;
          return (K = v.href) == null ? void 0 : K.toLowerCase();
        }).includes(r.toLowerCase()))
          return Un(`Style ${r} allready downloaded!`, "success"), l("");
        const x = document.createElement("link");
        x.rel = "stylesheet", x.href = r, x.onload = l, x.onerror = s, document.head.appendChild(x);
      }
    });
    for (const r of e)
      Un(r), await i(r), Un(`Loaded librari ${r}`);
    Un("All libraries loaded!", "success");
  }, jo = (e) => {
    let i = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(i), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, Tn = (e, i, r, l, s = 1e3, d = 0.5) => {
    let y, x;
    if (y = new IntersectionObserver(
      function(v) {
        v[0].isIntersecting === !0 ? x = setTimeout(() => {
          P(
            i,
            v[0].target.dataset.visible || l || "",
            "view",
            r
          ), y.disconnect();
        }, s) : (Un("Element is not fully visible", "warn"), clearTimeout(x));
      },
      { threshold: [d] }
    ), typeof e == "string") {
      const v = document.querySelector(e);
      v && y.observe(v);
    } else
      y.observe(e);
  }, Un = (e, i = "info") => {
    let r;
    switch (i) {
      case "info":
        r = "color: #3498db;";
        break;
      case "warn":
        r = "color: #f39c12;";
        break;
      case "error":
        r = "color: #e74c3c;";
        break;
      case "success":
        r = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${e}`, `${r} font-size: 16px; font-weight: 600`);
  }, Dt = [
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
  ], Oo = [
    "<b>The Drop Servicing Method:</b> Our new strategy for earning online without significant startup costs.",
    "<b>A Simple 4-Step Process:</b> Start your online business journey with just a laptop and internet connection.",
    "<b>Escape The 9-5 Grind:</b> How to transition from traditional employment to being your own boss.",
    "<b>The 2024 Opportunity:</b> How to capitalize on this emerging trend to achieve your financial freedom goals.",
    "<b>Real Success Stories:</b> Get inspired by participants who left their jobs to build successful businesses, gaining the freedom to live on their own terms."
  ], Io = [
    'Dylan Sigley was a broke college student working in a call center when he discovered a new online business method called "Drop Servicing".',
    "Soon after, he built a ridiculously profitable business from home, allowing him to quit his job and earn 6-figures while traveling the world and working only 5 hours a week.",
    "This FREE webclass skips the nonsense to show you, step-by-step, how Dylan grew his business so quickly and how hundreds of others have replicated his success using the same process. It's the most practical, results-driven training you'll find.",
    "Dylan has one of the best (if not the best) track records in the industry for helping people around the world build Drop Servicing Businesses, even as complete beginners with no skills or degree.",
    "Normally, it costs between $4K and $24K to work with Dylan, but in this webclass you get his exact methods for FREE! Register now before this is taken offline in the next few days."
  ], No = [
    "Aspiring entrepreneurs eager to shift from employee to business owner.",
    "People tired of their jobs and wanting to move towards achieving their financial freedom goals.",
    "Anyone ready for actionable insights to take control of their lives and financial goals."
  ], Ro = [
    {
      name: "Fabiano Musase",
      title: "Drop Servicing Blueprint Partner Program",
      text: "The level of detail provided in the course is great. I have learned more about business and entrepreneurship from this course than I have in any other. The tools that are provided, the strategies, and even better, the done-for-you templates and portfolio come with practical examples a student can simply copy, paste and implement. It is really up to the hard work, dedication and consistency of the individual to generate great results from this course.",
      date: "Updated Sep 5, 2024",
      link: "https://www.trustpilot.com/reviews/66d751064ea542f0b227b3d5"
    },
    {
      name: "Ashaya Gupta",
      title: "Amazing Course with Unparalleled Support!",
      text: "I am extremely satisfied with the Drop Servicing Blueprint course! The content is incredibly in-depth and packed with tons of valuable material that is well-structured and easy to follow. The course itself is worth every penny, but what truly stands out is the exclusive community you gain access to. The experts in the group are very helpful and always willing to answer any questions you may have. Plus, Dylan Sigley himself is super accessible and responsive, which is rare in online courses like this.<br><br>Thanks to the course, I’ve already bagged a couple of sales and am eager to continue expanding my business with the insights and strategies I've learned. The community support combined with the high-quality course material makes this a winning combination. Fully satisfied and highly recommend!",
      date: "Aug 27, 2024",
      link: "https://www.trustpilot.com/reviews/66cdbcb0c3878fd95a2e31a7"
    },
    {
      name: "Carlos Lima",
      title: "Step-by-Step Guide 4 all",
      text: 'My Experience with the Course is that You have all the information you need (Step-by-step) Dylan and His team guide you thru all the points, configurations, and templates of all you need to do to Thrive in the Niche you Pick. For me, it has been an amazing experience, and being someone that has tried several Online courses about different topics and from different, so-called "Gurus", I can clearly state that this one is worth every penny.<br><br>Thank You for purring this course together.',
      date: "Jun 26, 2023",
      link: "https://www.trustpilot.com/reviews/6499351115ff79ccb5de2646"
    },
    {
      name: "Michael Abboud",
      title: "Professional, ordained and classy experience",
      text: "Hi, my name is Michael and my experience learning from Dylan's course has been nothing short of incredible. He truly dives into the specifics on what it is and more importantly how you start a business. Most of the work is done for you, and as long as you're willing to follow the steps in his videos, you're guaranteed to find some form of success with his course. I've had access to the course for 12 days and the advancements I've made have been nothing short of remarkable. Thank you to Dylan and his team for the great experience so far.",
      date: "May 22, 2023",
      link: "https://www.trustpilot.com/reviews/646b52f009485285aab0a91f"
    },
    {
      name: "Maged Rafaat",
      title: "Simply a hidden Gem",
      text: "An amazing course with all the details covered from scratch on how to build a business online.<br><br>Everything need is explained thoroughly with all details and step by step guides from building your website to how to lo get leads to finalizing deals and closing on sales.<br><br>I strongly recommend this course to anyone who is interested in drop shipping as this course has it all.",
      date: "Jun 27, 2023",
      link: "https://www.trustpilot.com/reviews/649afb0dbe90b81ce4f7001e"
    },
    {
      name: "Shawn Gibson",
      title: "Adding rocket fuel to your business launch",
      text: "I have been taking this course for several weeks now and I am blown away by the amount of information and value packed into the lessons. I spent a lot of time scouring youtube for the various topics covered by Dylan and his team and found nothing with as much in depth coverage as what is provided in the Drop Servicing Blueprint. The team is very responsive to any questions I may have and always willing to help! I would recommend this course to anyone ready to jump start their business and cut down months of learning curve.",
      date: "Sep 9, 2022",
      link: "https://www.trustpilot.com/reviews/631b22117f7a8621ee571454"
    },
    {
      name: "Justice Selepe",
      title: "Drop Servicing blueprint",
      text: "Drop Servicing blueprint is the best online business venture. I have learned a lot from the course regarding business management and opportunities. The teacher is supportive and always available to guide and help. I highly recommend the course to everyone who wants to start a new business venture",
      date: "Jul 14, 2022",
      link: "https://www.trustpilot.com/reviews/62d010668000af4a883feeef"
    },
    {
      name: "Karey Nduta",
      title: "Look no further",
      text: "This is my first ever online review because, damn! This course deserves an online review.<br><br>Since 2010, I have started so many online businesses. From E-commerce to affiliate marketing to trading to falling for stupid scams and loosing hundreds of dollars. If it has trended, I have tried it. You see, I know one thing for sure, I was born to be free. Before this course I had freedom of location working remotely for the best silicon valley start up anyone would want to work for but I still craved freedom of time. Not having to report to someone 5 days a week, 9 to 5.<br><br>Just when that ache was becoming unbearable and I had started to fight with my employer for more flexibility, I found Dylan. I am very tech savvy but this course is so plainly spelt out that even the least technical person would understand.<br><br>I just launched my first campaign using the guide in the course and have a few interested clients I am meeting with. This is so surreal. I can't believe am finally running my own business.",
      date: "Oct 7, 2022",
      link: "https://www.trustpilot.com/reviews/6340206f350baeeabe63848e"
    },
    {
      name: "Cleo Zupan",
      title: "The best coaching out there",
      text: "When I first joined I didn't know if this course was good or not, but now that I have been a part of this community I can say that it is amazing. You get a lot of details andthe coach does everything with you and shows you how to do it. It is a great course and I would recommend it to anyone out there.",
      date: "Oct 7, 2022",
      link: "https://www.trustpilot.com/reviews/634028a1350baeeabe638d65"
    },
    {
      name: "Ewa",
      title: "It is worth more than it costs",
      text: "A well-structured course that taught me not only how to build my first online business but also how to gain the trust of customers and build the image of my own brand. T o be hones I was scared at the beginning to pay such an amount of money because I am just a student. But now I know it was the best decision I could have made. The value of the course pays back many times.",
      date: "Mar 15, 2023",
      link: "https://www.trustpilot.com/reviews/641198058c535135419c1a9a"
    },
    {
      name: "Andy Jay",
      title: "Exceeded Expectations",
      text: "The course starts off with a lot of mindset exercises that I felt really got me out of my funk and into a deeper state of motivation. Then, the rest of the course is jam-packed with so many resources, yet done in a way that doesn't make you feel overwhelmed.<br><br>I'm still going through his course, but I have already begun recommending it to my friends and family.<br><br>Also, for everything he offers, I've paid, and I'm not even exaggerating... 10x more for other courses that are not nearly as good. So, if you're looking for a way to break out of the 9-5 rat race, this course is your best shot. Invest in yourself and get to work!",
      date: "Oct 8, 2022",
      link: "https://www.trustpilot.com/reviews/6340ef6bb67840c2ab2b641b"
    },
    {
      name: "Fredrik Ljunggren",
      title: "Amazing course",
      text: "Very easy to follow. You don't have to have any knowledge in how to start a business before entering this course. I did't know much about anything to be honest and I've managed to start an online business and fulfill my dream, thanks to this course.<br><br>You wont regret buying it.",
      date: "May 16, 2023",
      link: "https://www.trustpilot.com/reviews/64638248fe2b0edcd71caf04"
    }
  ], qo = [
    {
      question: "Who is this training for?",
      answer: "This training is for anyone interested in discovering a new business idea and learning how people worldwide are achieving their financial freedom goals."
    },
    {
      question: "What if I have questions during the training?",
      answer: "You will be able to leave any questions you have in the chat and Dylan will answer questions at the end of the training."
    },
    {
      question: "How long is the session?",
      answer: "Dylan's trainings are generally highly practical and detailed so you should dedicate 1-2 hours to watching the training."
    },
    {
      question: "Do I need specific skills to attend?",
      answer: "No special prior skills, degree, or extensive experience is necessary to attend. This training is accessible to practically anyone."
    },
    {
      question: "Will I be able to start this business just by watching the training?",
      answer: "Dylan is going to reveal the 4 steps you need to get started as well as give you a tutorial and template you can use right away."
    }
  ], E = "https://conversionratestore.github.io/projects/dropservicing/optin/img", $o = (
    /* HTML */
    `
  <section id="main_block">
    <div class="wrapper">
      <header>
        <img src="${E}/logo.png" alt="logo" />
      </header>
      <div class="flex">
        <div class="info">
          <div class="tp_label">
            <img src="${E}/trustpilot.svg" alt="stars" />
            <p>
              TrustScore&nbsp;
              <img src="${E}/trustpilot_star.svg" alt="star" />
              <b>4.8/5</b>&nbsp;<span>300+ Reviews</span>
            </p>
          </div>
          <h1>The 4 Steps to Make Money Online in 2024 with no experience or startup costs</h1>
          <p>Discover how to go from overworked employee to successful entrepreneur in a FREE Webinar!</p>
          <button class="cta pop mobile">Grab Your FREE Seat Now!</button>
          <div class="youll_list">
            <p>In this FREE training, you’ll learn: <img src="${E}/arrow.svg" alt="arrow" class="desktop" /></p>
            <ul>
              ${Oo.map(
      (e) => (
        /* HTML */
        `<li>
                      <img src="${E}/check.svg" alt="check" />
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
                <img src="${E}/dollar.svg" alt="dollar" />
                Free
              </span>
              <span>
                <img src="${E}/frame.svg" alt="frame" />
                Live Training
              </span>
              <span>
                <img src="${E}/calendar.svg" alt="calendar" />
                Today
              </span>
            </p>
            <label><input type="text" placeholder="Enter your name..." name="name" /></label>
            <label><input type="email" placeholder="Enter email address..." name="email" /></label>
            <button class="cta register">Grab Your FREE Seat Now!</button>
          </form>
          <div class="bonus">
            <p><img src="${E}/present.png" alt="gift" /> Exclusive bonuses!</p>
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
  ), Fo = (
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
        ${Dt.map(
      ({ name: e, review: i, img: r, videoId: l }) => (
        /* HTML */
        `
              <li>
                <div class="slide" data-video="${l}">
                  <div>
                    <div class="img">
                      <img src="${E}/${r}" alt="${e}" />
                    </div>
                    <p><b>${e}</b><img src="${E}/rating_stars.png" alt="stars" /></p>
                  </div>
                  <p>${i}</p>
                </div>
              </li>
            `
      )
    ).join("")}
      </ul>
    </div>
  </section>
`
  ), Ho = (
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
      <img src="${E}/bonus.png" alt="bonus" />
    </div>
  </section>
`
  ), Po = (
    /* HTML */
    `
  <section id="host_block" class="crs_container">
    <div class="img">
      <img src="${E}/founder.jpg" alt="dylan" class="desktop" />
      <img src="${E}/founder_mob.jpg" alt="dylan" class="mobile" />
      <a href="https://dropservicing.com/homepage"></a>
    </div>
    <div class="info">
      <h2>Your Host: Dylan Sigley</h2>
      <p>7 Figure Drop Servicer</p>
      <ul>
        ${Io.map((e) => (
      /* HTML */
      `<li><span></span>${e}</li>`
    )).join("")}
      </ul>
      <p>Access Dylan’s formula to learn how to start your online business and unlock financial freedom goals</p>
      <button class="cta pop">Unlock Dylan’s Formula for Free</button>
    </div>
  </section>
`
  ), Wo = (
    /* HTML */
    `
  <section id="video_block">
    <div class="crs_container">
      <h2>Hear from Our Participants</h2>
      <p>
        These are past attendees who were happy with the training and have allowed us to share their success stories.
        The experiences and successes on this page are real examples from our participants but are not typical or
        guaranteed. We do not guarantee any earnings, as your results will vary and depend on many factors unique to
        you. All business entails financial risk as well as significant and consistent effort and action
      </p>
    </div>
    <ul>
      ${Dt.map(
      ({ name: e, review: i, img: r, videoId: l }) => (
        /* HTML */
        `
            <li>
              <div class="video_slide" data-video="${l}">
                <div class="head">
                  <div class="img">
                    <img src="${E}/${r}" alt="${e}" />
                  </div>
                  <p><b>${e}</b><img src="${E}/rating_stars.png" alt="stars" /></p>
                  <p>${i}</p>
                </div>
                <div class="video">
                  <div class="wistia_embed wistia_async_${l}" style="width:100%;height:100%;"></div>
                </div>
              </div>
            </li>
          `
      )
    ).join("")}
    </ul>
  </section>
`
  ), Yo = (
    /* HTML */
    `
  <section id="training_for" class="crs_container">
    <div class="photo">
      <img src="${E}/founder2.jpg" alt="dylan" />
      <div class="bottom_info">
        <p>Spaces are limited and filling up fast</p>
        <p>Grab this limited time offer to learn Drop Servicing today</p>
        <div class="link">
          Dylan Sigley, Founder, <a href="https://dropservicing.com/homepage">Dropservicing.com</a>
        </div>
      </div>
    </div>
    <div class="info">
      <h2>Who is the Training for?</h2>
      <p>This free training is designed for:</p>
      <ul>
        ${No.map((e) => (
      /* HTML */
      `<li><img src="${E}/check.svg" alt="check" />${e}</li>`
    )).join("")}
      </ul>
      <p>If any of the above apply to you, you're in the right place!</p>
      <p>Join your Free training to start your business and transform your career</p>
      <button class="cta pop">Join The FREE Training Now</button>
    </div>
  </section>
`
  ), Go = (
    /* HTML */
    `
  <section id="trust_pilot">
    <div class="crs_container">
      <h2>
        TrustScore&nbsp;<img src="${E}/trustpilot_star.svg" alt="" />&nbsp;<b>4.8/5</b>&nbsp;<span class="desktop"
          >300+ Reviews</span
        >
      </h2>
      <p>People just like you joined the training</p>
      <ul>
        ${Ro.map(
      ({ name: e, title: i, text: r, date: l, link: s }) => (
        /* HTML */
        `
              <li>
                <div class="review_slide">
                  <p class="name">${e}<img src="${E}/stars_tp.svg" alt="stars" /></p>
                  <a href="${s}">${i}</a>
                  <p class="text">${r}</p>
                  <p>
                    <span><img src="${E}/check2.svg" alt="check" />Verified User</span>${l}
                  </p>
                </div>
              </li>
            `
      )
    ).join("")}
      </ul>
    </div>
    <div class="points">
      <div class="crs_container">
        <p>3,000+ Members <img src="${E}/members.svg" alt="members" /></p>
        <p>4M+ In Revenue <img src="${E}/revenue.svg" alt="revenue" /></p>
        <p>100+ Countries <img src="${E}/countries.svg" alt="countries" /></p>
        <p>15M+ Views <img src="${E}/views.svg" alt="views" /></p>
      </div>
    </div>
  </section>
`
  ), Jo = (
    /* HTML */
    `
  <section id="faq_block">
    <div class="crs_container">
      <h2>Frequently asked questions</h2>
      <ul>
        ${qo.map(
      ({ question: e, answer: i }) => (
        /* HTML */
        `
              <li>
                <p class="question">${e}<span></span></p>
                <p class="answer">${i}</p>
              </li>
            `
      )
    ).join("")}
      </ul>
    </div>
  </section>
`
  ), Ko = (
    /* HTML */
    `
  <section id="last_cta" class="crs_container">
    <div class="img">
      <img src="${E}/product.jpg" alt="product" />
    </div>
    <div>
      <h2>Your Future Starts Here!</h2>
      <p>Transform your life by learning how to create a successful Drop Servicing business.</p>
      <p>Join us and take the first step toward financial independence.</p>
      <button class="cta pop">Join The Exclusive Training</button>
    </div>
  </section>
`
  ), Vo = (
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
  ), Zo = (
    /* HTML */
    `
  <div class="crs_popup_form">
    <div class="form">
      <div class="close"></div>
      <form>
        <h2>Join our Exclusive Online Training</h2>
        <p class="icons">
          <span>
            <img src="${E}/dollar.svg" alt="dollar" />
            Free
          </span>
          <span>
            <img src="${E}/frame.svg" alt="frame" />
            Live Training
          </span>
          <span>
            <img src="${E}/calendar.svg" alt="calendar" />
            Today
          </span>
        </p>
        <label><input type="text" placeholder="Enter your name..." name="name" /></label>
        <label><input type="email" placeholder="Enter email address..." name="email" /></label>
        <button class="cta register">Grab Your FREE Seat Now!</button>
      </form>
      <div class="bonus">
        <p><img src="${E}/present.png" alt="gift" /> Exclusive bonuses!</p>
        <p>Stay until the end of the training to receive the following:</p>
        <ul>
          <li>Comprehensive 12K Sale Tutorial (+Free Copy/Paste Template)</li>
          <li>A Quick Guide to Drop Servicing (Get Selling FAST and for ZERO)</li>
        </ul>
      </div>
    </div>
  </div>
`
  ), Qo = (
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
          <img src="${E}/trustpilot.svg" alt="trustpilot" />TrustScore&nbsp;<img
            src="${E}/trustpilot_star.svg"
            alt="star"
          /><span>4.8</span>
        </p>
      </div>
      <button class="cta pop">Grab Your FREE Seat Now!</button>
    </div>
  </div>
`
  );
  var Ke = window, In = Ke.requestAnimationFrame || Ke.webkitRequestAnimationFrame || Ke.mozRequestAnimationFrame || Ke.msRequestAnimationFrame || function(e) {
    return setTimeout(e, 16);
  }, vi = window, Ct = vi.cancelAnimationFrame || vi.mozCancelAnimationFrame || function(e) {
    clearTimeout(e);
  };
  function jt() {
    for (var e, i, r, l = arguments[0] || {}, s = 1, d = arguments.length; s < d; s++)
      if ((e = arguments[s]) !== null)
        for (i in e)
          r = e[i], l !== r && r !== void 0 && (l[i] = r);
    return l;
  }
  function yn(e) {
    return ["true", "false"].indexOf(e) >= 0 ? JSON.parse(e) : e;
  }
  function _n(e, i, r, l) {
    if (l)
      try {
        e.setItem(i, r);
      } catch {
      }
    return r;
  }
  function Uo() {
    var e = window.tnsId;
    return window.tnsId = e ? e + 1 : 1, "tns" + window.tnsId;
  }
  function Ve() {
    var e = document, i = e.body;
    return i || (i = e.createElement("body"), i.fake = !0), i;
  }
  var we = document.documentElement;
  function Ze(e) {
    var i = "";
    return e.fake && (i = we.style.overflow, e.style.background = "", e.style.overflow = we.style.overflow = "hidden", we.appendChild(e)), i;
  }
  function Qe(e, i) {
    e.fake && (e.remove(), we.style.overflow = i, we.offsetHeight);
  }
  function Xo() {
    var e = document, i = Ve(), r = Ze(i), l = e.createElement("div"), s = !1;
    i.appendChild(l);
    try {
      for (var d = "(10px * 10)", y = ["calc" + d, "-moz-calc" + d, "-webkit-calc" + d], x, v = 0; v < 3; v++)
        if (x = y[v], l.style.width = x, l.offsetWidth === 100) {
          s = x.replace(d, "");
          break;
        }
    } catch {
    }
    return i.fake ? Qe(i, r) : l.remove(), s;
  }
  function Bo() {
    var e = document, i = Ve(), r = Ze(i), l = e.createElement("div"), s = e.createElement("div"), d = "", y = 70, x = 3, v = !1;
    l.className = "tns-t-subp2", s.className = "tns-t-ct";
    for (var K = 0; K < y; K++)
      d += "<div></div>";
    return s.innerHTML = d, l.appendChild(s), i.appendChild(l), v = Math.abs(l.getBoundingClientRect().left - s.children[y - x].getBoundingClientRect().left) < 2, i.fake ? Qe(i, r) : l.remove(), v;
  }
  function na() {
    if (window.matchMedia || window.msMatchMedia)
      return !0;
    var e = document, i = Ve(), r = Ze(i), l = e.createElement("div"), s = e.createElement("style"), d = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", y;
    return s.type = "text/css", l.className = "tns-mq-test", i.appendChild(s), i.appendChild(l), s.styleSheet ? s.styleSheet.cssText = d : s.appendChild(e.createTextNode(d)), y = window.getComputedStyle ? window.getComputedStyle(l).position : l.currentStyle.position, i.fake ? Qe(i, r) : l.remove(), y === "absolute";
  }
  function ea(e, i) {
    var r = document.createElement("style");
    return e && r.setAttribute("media", e), i && r.setAttribute("nonce", i), document.querySelector("head").appendChild(r), r.sheet ? r.sheet : r.styleSheet;
  }
  function Cn(e, i, r, l) {
    "insertRule" in e ? e.insertRule(i + "{" + r + "}", l) : e.addRule(i, r, l);
  }
  function ta(e, i) {
    "deleteRule" in e ? e.deleteRule(i) : e.removeRule(i);
  }
  function En(e) {
    var i = "insertRule" in e ? e.cssRules : e.rules;
    return i.length;
  }
  function ia(e, i) {
    return Math.atan2(e, i) * (180 / Math.PI);
  }
  function oa(e, i) {
    var r = !1, l = Math.abs(90 - Math.abs(e));
    return l >= 90 - i ? r = "horizontal" : l <= i && (r = "vertical"), r;
  }
  function Nn(e, i, r) {
    for (var l = 0, s = e.length; l < s; l++)
      i.call(r, e[l], l);
  }
  var Ot = "classList" in document.createElement("_"), le = Ot ? function(e, i) {
    return e.classList.contains(i);
  } : function(e, i) {
    return e.className.indexOf(i) >= 0;
  }, q = Ot ? function(e, i) {
    le(e, i) || e.classList.add(i);
  } : function(e, i) {
    le(e, i) || (e.className += " " + i);
  }, an = Ot ? function(e, i) {
    le(e, i) && e.classList.remove(i);
  } : function(e, i) {
    le(e, i) && (e.className = e.className.replace(i, ""));
  };
  function ye(e, i) {
    return e.hasAttribute(i);
  }
  function Ue(e, i) {
    return e.getAttribute(i);
  }
  function xi(e) {
    return typeof e.item < "u";
  }
  function pn(e, i) {
    if (e = xi(e) || e instanceof Array ? e : [e], Object.prototype.toString.call(i) === "[object Object]")
      for (var r = e.length; r--; )
        for (var l in i)
          e[r].setAttribute(l, i[l]);
  }
  function Rn(e, i) {
    e = xi(e) || e instanceof Array ? e : [e], i = i instanceof Array ? i : [i];
    for (var r = i.length, l = e.length; l--; )
      for (var s = r; s--; )
        e[l].removeAttribute(i[s]);
  }
  function wi(e) {
    for (var i = [], r = 0, l = e.length; r < l; r++)
      i.push(e[r]);
    return i;
  }
  function fn(e, i) {
    e.style.display !== "none" && (e.style.display = "none");
  }
  function un(e, i) {
    e.style.display === "none" && (e.style.display = "");
  }
  function yi(e) {
    return window.getComputedStyle(e).display !== "none";
  }
  function _e(e) {
    if (typeof e == "string") {
      var i = [e], r = e.charAt(0).toUpperCase() + e.substr(1), l = ["Webkit", "Moz", "ms", "O"];
      l.forEach(function(x) {
        (x !== "ms" || e === "transform") && i.push(x + r);
      }), e = i;
    }
    var s = document.createElement("fakeelement");
    e.length;
    for (var d = 0; d < e.length; d++) {
      var y = e[d];
      if (s.style[y] !== void 0)
        return y;
    }
    return !1;
  }
  function aa(e) {
    if (!e || !window.getComputedStyle)
      return !1;
    var i = document, r = Ve(), l = Ze(r), s = i.createElement("p"), d, y = e.length > 9 ? "-" + e.slice(0, -9).toLowerCase() + "-" : "";
    return y += "transform", r.insertBefore(s, null), s.style[e] = "translate3d(1px,1px,1px)", d = window.getComputedStyle(s).getPropertyValue(y), r.fake ? Qe(r, l) : s.remove(), d !== void 0 && d.length > 0 && d !== "none";
  }
  function _i(e, i) {
    var r = !1;
    return /^Webkit/.test(e) ? r = "webkit" + i + "End" : /^O/.test(e) ? r = "o" + i + "End" : e && (r = i.toLowerCase() + "end"), r;
  }
  var ki = !1;
  try {
    var ra = Object.defineProperty({}, "passive", {
      get: function() {
        ki = !0;
      }
    });
    window.addEventListener("test", null, ra);
  } catch {
  }
  var Ti = ki ? { passive: !0 } : !1;
  function R(e, i, r) {
    for (var l in i) {
      var s = ["touchstart", "touchmove"].indexOf(l) >= 0 && !r ? Ti : !1;
      e.addEventListener(l, i[l], s);
    }
  }
  function J(e, i) {
    for (var r in i) {
      var l = ["touchstart", "touchmove"].indexOf(r) >= 0 ? Ti : !1;
      e.removeEventListener(r, i[r], l);
    }
  }
  function sa() {
    return {
      topics: {},
      on: function(e, i) {
        this.topics[e] = this.topics[e] || [], this.topics[e].push(i);
      },
      off: function(e, i) {
        if (this.topics[e]) {
          for (var r = 0; r < this.topics[e].length; r++)
            if (this.topics[e][r] === i) {
              this.topics[e].splice(r, 1);
              break;
            }
        }
      },
      emit: function(e, i) {
        i.type = e, this.topics[e] && this.topics[e].forEach(function(r) {
          r(i, e);
        });
      }
    };
  }
  function la(e, i, r, l, K, d, y) {
    var x = Math.min(d, 10), v = K.indexOf("%") >= 0 ? "%" : "px", K = K.replace(v, ""), rn = Number(e.style[i].replace(r, "").replace(l, "").replace(v, "")), Xn = (K - rn) / d * x;
    setTimeout(Be, x);
    function Be() {
      d -= x, rn += Xn, e.style[i] = r + rn + v + l, d > 0 ? setTimeout(Be, x) : y();
    }
  }
  Object.keys || (Object.keys = function(e) {
    var i = [];
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && i.push(r);
    return i;
  }), "remove" in Element.prototype || (Element.prototype.remove = function() {
    this.parentNode && this.parentNode.removeChild(this);
  });
  var Xe = function(e) {
    e = jt({
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
    var i = document, r = window, l = {
      ENTER: 13,
      SPACE: 32,
      LEFT: 37,
      RIGHT: 39
    }, s = {}, d = e.useLocalStorage;
    if (d) {
      var y = navigator.userAgent, x = /* @__PURE__ */ new Date();
      try {
        s = r.localStorage, s ? (s.setItem(x, x), d = s.getItem(x) == x, s.removeItem(x)) : d = !1, d || (s = {});
      } catch {
        d = !1;
      }
      d && (s.tnsApp && s.tnsApp !== y && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(n) {
        s.removeItem(n);
      }), localStorage.tnsApp = y);
    }
    var v = s.tC ? yn(s.tC) : _n(s, "tC", Xo(), d), K = s.tPL ? yn(s.tPL) : _n(s, "tPL", Bo(), d), rn = s.tMQ ? yn(s.tMQ) : _n(s, "tMQ", na(), d), Xn = s.tTf ? yn(s.tTf) : _n(s, "tTf", _e("transform"), d), Be = s.t3D ? yn(s.t3D) : _n(s, "t3D", aa(Xn), d), B = s.tTDu ? yn(s.tTDu) : _n(s, "tTDu", _e("transitionDuration"), d), nt = s.tTDe ? yn(s.tTDe) : _n(s, "tTDe", _e("transitionDelay"), d), et = s.tADu ? yn(s.tADu) : _n(s, "tADu", _e("animationDuration"), d), It = s.tADe ? yn(s.tADe) : _n(s, "tADe", _e("animationDelay"), d), Bn = s.tTE ? yn(s.tTE) : _n(s, "tTE", _i(B, "Transition"), d), Ei = s.tAE ? yn(s.tAE) : _n(s, "tAE", _i(et, "Animation"), d), Si = r.console && typeof r.console.warn == "function", Nt = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], Ai = {};
    if (Nt.forEach(function(n) {
      if (typeof e[n] == "string") {
        var t = e[n], o = i.querySelector(t);
        if (Ai[n] = t, o && o.nodeName)
          e[n] = o;
        else {
          Si && console.warn("Can't find", e[n]);
          return;
        }
      }
    }), e.container.children.length < 1) {
      Si && console.warn("No slides found in", e.container);
      return;
    }
    var j = e.responsive, ce = e.nested, f = e.mode === "carousel";
    if (j) {
      0 in j && (e = jt(e, j[0]), delete j[0]);
      var Rt = {};
      for (var Li in j) {
        var ke = j[Li];
        ke = typeof ke == "number" ? { items: ke } : ke, Rt[Li] = ke;
      }
      j = Rt, Rt = null;
    }
    function Mi(n) {
      for (var t in n)
        f || (t === "slideBy" && (n[t] = "page"), t === "edgePadding" && (n[t] = !1), t === "autoHeight" && (n[t] = !1)), t === "responsive" && Mi(n[t]);
    }
    if (f || Mi(e), !f) {
      e.axis = "horizontal", e.slideBy = "page", e.edgePadding = !1;
      var qn = e.animateIn, tt = e.animateOut, qt = e.animateDelay, Sn = e.animateNormal;
    }
    var L = e.axis === "horizontal", tn = i.createElement("div"), on = i.createElement("div"), sn, m = e.container, $t = m.parentNode, zi = m.outerHTML, S = m.children, g = S.length, Te, it = Pi(), Ee = !1;
    j && no(), f && (m.className += " tns-vpfix");
    var w = e.autoWidth, u = b("fixedWidth"), I = b("edgePadding"), k = b("gutter"), W = Yi(), V = b("center"), _ = w ? 1 : Math.floor(b("items")), de = b("slideBy"), Ft = e.viewportMax || e.fixedWidthViewportWidth, $n = b("arrowKeys"), bn = b("speed"), Se = e.rewind, Z = Se ? !1 : e.loop, ln = b("autoHeight"), An = b("controls"), Fn = b("controlsText"), Ln = b("nav"), Hn = b("touch"), Pn = b("mouseDrag"), nn = b("autoplay"), Ht = b("autoplayTimeout"), Wn = b("autoplayText"), Yn = b("autoplayHoverPause"), Gn = b("autoplayResetOnVisibility"), M = ea(null, b("nonce")), Ae = e.lazyload, da = e.lazyloadSelector, $, pe = [], Q = Z ? ha() : 0, A = f ? g + Q * 2 : g + Q, Di = !!((u || w) && !Z), fe = u ? ri() : null, Pt = !f || !Z, ne = L ? "left" : "top", Jn = "", ue = "", Le = /* @__PURE__ */ function() {
      return u ? function() {
        return V && !Z ? g - 1 : Math.ceil(-fe / (u + k));
      } : w ? function() {
        for (var n = 0; n < A; n++)
          if ($[n] >= -fe)
            return n;
      } : function() {
        return V && f && !Z ? g - 1 : Z || f ? Math.max(0, A - Math.ceil(_)) : A - 1;
      };
    }(), c = Fi(b("startIndex")), Kn = c;
    $i();
    var Mn = 0, hn = w ? null : Le(), ot = e.preventActionWhenRunning, at = e.swipeAngle, zn = at ? "?" : !0, Vn = !1, Wt = e.onInit, Y = new sa(), Zn = " tns-slider tns-" + e.mode, O = m.id || Uo(), cn = b("disable"), Me = !1, rt = e.freezable, vn = rt && !w ? Bt() : !1, ze = !1, De = {
      click: Qn,
      keydown: Na
    }, Yt = {
      click: Ma,
      keydown: Ra
    }, Ce = {
      mouseover: ja,
      mouseout: Oa
    }, je = { visibilitychange: Ca }, Oe = { keydown: Ia }, Ie = {
      touchstart: ko,
      touchmove: To,
      touchend: zt,
      touchcancel: zt
    }, Ne = {
      mousedown: ko,
      mousemove: To,
      mouseup: zt,
      mouseleave: zt
    }, st = jn("controls"), Gt = jn("nav"), Re = w ? !0 : e.navAsThumbnails, Jt = jn("autoplay"), Ci = jn("touch"), ji = jn("mouseDrag"), Kt = "tns-slide-active", Oi = "tns-slide-cloned", lt = "tns-complete", ct = {
      load: ya,
      error: _a
    }, Vt, Zt, qe = e.preventScrollOnTouch === "force";
    if (st)
      var F = e.controlsContainer, Ii = e.controlsContainer ? e.controlsContainer.outerHTML : "", z = e.prevButton, D = e.nextButton, pa = e.prevButton ? e.prevButton.outerHTML : "", fa = e.nextButton ? e.nextButton.outerHTML : "", $e, Fe;
    if (Gt)
      var U = e.navContainer, Ni = e.navContainer ? e.navContainer.outerHTML : "", mn, xn = w ? g : So(), ee = 0, te = -1, gn = Hi(), he = gn, dt = "tns-nav-active", me = "Carousel Page ", Qt = " (Current Slide)";
    if (Jt)
      var Ri = e.autoplayDirection === "forward" ? 1 : -1, N = e.autoplayButton, qi = e.autoplayButton ? e.autoplayButton.outerHTML : "", He = ["<span class='tns-visually-hidden'>", " animation</span>"], pt, dn, ft, ge, ut;
    if (Ci || ji)
      var ie = {}, kn = {}, ht, oe = !1, wn, Ut = L ? function(n, t) {
        return n.x - t.x;
      } : function(n, t) {
        return n.y - t.y;
      };
    w || mt(cn || vn), Xn && (ne = Xn, Jn = "translate", Be ? (Jn += L ? "3d(" : "3d(0px, ", ue = L ? ", 0px, 0px)" : ", 0px)") : (Jn += L ? "X(" : "Y(", ue = ")")), f && (m.className = m.className.replace("tns-vpfix", "")), ga(), ba(), Ki();
    function mt(n) {
      n && (An = Ln = Hn = Pn = $n = nn = Yn = Gn = !1);
    }
    function $i() {
      for (var n = f ? c - Q : c; n < 0; )
        n += g;
      return n % g + 1;
    }
    function Fi(n) {
      return n = n ? Math.max(0, Math.min(Z ? g - 1 : g - _, n)) : 0, f ? n + Q : n;
    }
    function gt(n) {
      for (n == null && (n = c), f && (n -= Q); n < 0; )
        n += g;
      return Math.floor(n % g);
    }
    function Hi() {
      var n = gt(), t;
      return t = Re ? n : u || w ? Math.ceil((n + 1) * xn / g - 1) : Math.floor(n / _), !Z && f && c === hn && (t = xn - 1), t;
    }
    function ua() {
      if (w || u && !Ft)
        return g - 1;
      var n = u ? "fixedWidth" : "items", t = [];
      if ((u || e[n] < g) && t.push(e[n]), j)
        for (var o in j) {
          var a = j[o][n];
          a && (u || a < g) && t.push(a);
        }
      return t.length || t.push(0), Math.ceil(u ? Ft / Math.min.apply(null, t) : Math.max.apply(null, t));
    }
    function ha() {
      var n = ua(), t = f ? Math.ceil((n * 5 - g) / 2) : n * 4 - g;
      return t = Math.max(n, t), jn("edgePadding") ? t + 1 : t;
    }
    function Pi() {
      return r.innerWidth || i.documentElement.clientWidth || i.body.clientWidth;
    }
    function Xt(n) {
      return n === "top" ? "afterbegin" : "beforeend";
    }
    function Wi(n) {
      if (n != null) {
        var t = i.createElement("div"), o, a;
        return n.appendChild(t), o = t.getBoundingClientRect(), a = o.right - o.left, t.remove(), a || Wi(n.parentNode);
      }
    }
    function Yi() {
      var n = I ? I * 2 - k : 0;
      return Wi($t) - n;
    }
    function jn(n) {
      if (e[n])
        return !0;
      if (j) {
        for (var t in j)
          if (j[t][n])
            return !0;
      }
      return !1;
    }
    function b(n, t) {
      if (t == null && (t = it), n === "items" && u)
        return Math.floor((W + k) / (u + k)) || 1;
      var o = e[n];
      if (j)
        for (var a in j)
          t >= parseInt(a) && n in j[a] && (o = j[a][n]);
      return n === "slideBy" && o === "page" && (o = b("items")), !f && (n === "slideBy" || n === "items") && (o = Math.floor(o)), o;
    }
    function ma(n) {
      return v ? v + "(" + n * 100 + "% / " + A + ")" : n * 100 / A + "%";
    }
    function bt(n, t, o, a, p) {
      var h = "";
      if (n !== void 0) {
        var T = n;
        t && (T -= t), h = L ? "margin: 0 " + T + "px 0 " + n + "px;" : "margin: " + n + "px 0 " + T + "px 0;";
      } else if (t && !o) {
        var G = "-" + t + "px", X = L ? G + " 0 0" : "0 " + G + " 0";
        h = "margin: 0 " + X + ";";
      }
      return !f && p && B && a && (h += ae(a)), h;
    }
    function vt(n, t, o) {
      return n ? (n + t) * A + "px" : v ? v + "(" + A * 100 + "% / " + o + ")" : A * 100 / o + "%";
    }
    function xt(n, t, o) {
      var a;
      if (n)
        a = n + t + "px";
      else {
        f || (o = Math.floor(o));
        var p = f ? A : o;
        a = v ? v + "(100% / " + p + ")" : 100 / p + "%";
      }
      return a = "width:" + a, ce !== "inner" ? a + ";" : a + " !important;";
    }
    function wt(n) {
      var t = "";
      if (n !== !1) {
        var o = L ? "padding-" : "margin-", a = L ? "right" : "bottom";
        t = o + a + ": " + n + "px;";
      }
      return t;
    }
    function Gi(n, t) {
      var o = n.substring(0, n.length - t).toLowerCase();
      return o && (o = "-" + o + "-"), o;
    }
    function ae(n) {
      return Gi(B, 18) + "transition-duration:" + n / 1e3 + "s;";
    }
    function Ji(n) {
      return Gi(et, 17) + "animation-duration:" + n / 1e3 + "s;";
    }
    function ga() {
      var n = "tns-outer", t = "tns-inner";
      if (jn("gutter"), tn.className = n, on.className = t, tn.id = O + "-ow", on.id = O + "-iw", m.id === "" && (m.id = O), Zn += K || w ? " tns-subpixel" : " tns-no-subpixel", Zn += v ? " tns-calc" : " tns-no-calc", w && (Zn += " tns-autowidth"), Zn += " tns-" + e.axis, m.className += Zn, f ? (sn = i.createElement("div"), sn.id = O + "-mw", sn.className = "tns-ovh", tn.appendChild(sn), sn.appendChild(on)) : tn.appendChild(on), ln) {
        var o = sn || on;
        o.className += " tns-ah";
      }
      if ($t.insertBefore(tn, m), on.appendChild(m), Nn(S, function(H, ve) {
        q(H, "tns-item"), H.id || (H.id = O + "-item" + ve), !f && Sn && q(H, Sn), pn(H, {
          "aria-hidden": "true",
          tabindex: "-1"
        });
      }), Q) {
        for (var a = i.createDocumentFragment(), p = i.createDocumentFragment(), h = Q; h--; ) {
          var T = h % g, G = S[T].cloneNode(!0);
          if (q(G, Oi), Rn(G, "id"), p.insertBefore(G, p.firstChild), f) {
            var X = S[g - 1 - T].cloneNode(!0);
            q(X, Oi), Rn(X, "id"), a.appendChild(X);
          }
        }
        m.insertBefore(a, m.firstChild), m.appendChild(p), S = m.children;
      }
    }
    function Ki() {
      if (jn("autoHeight") || w || !L) {
        var n = m.querySelectorAll("img");
        Nn(n, function(t) {
          var o = t.src;
          Ae || (o && o.indexOf("data:image") < 0 ? (t.src = "", R(t, ct), q(t, "loading"), t.src = o) : ro(t));
        }), In(function() {
          kt(wi(n), function() {
            Vt = !0;
          });
        }), jn("autoHeight") && (n = oi(c, Math.min(c + _ - 1, A - 1))), Ae ? Vi() : In(function() {
          kt(wi(n), Vi);
        });
      } else
        f && We(), Qi(), Ui();
    }
    function Vi() {
      if (w && g > 1) {
        var n = Z ? c : g - 1;
        (function t() {
          var o = S[n].getBoundingClientRect().left, a = S[n - 1].getBoundingClientRect().right;
          Math.abs(o - a) <= 1 ? Zi() : setTimeout(function() {
            t();
          }, 16);
        })();
      } else
        Zi();
    }
    function Zi() {
      (!L || w) && (po(), w ? (fe = ri(), rt && (vn = Bt()), hn = Le(), mt(cn || vn)) : ci()), f && We(), Qi(), Ui();
    }
    function ba() {
      if (!f)
        for (var n = c, t = c + Math.min(g, _); n < t; n++) {
          var o = S[n];
          o.style.left = (n - c) * 100 / _ + "%", q(o, qn), an(o, Sn);
        }
      if (L && (K || w ? (Cn(M, "#" + O + " > .tns-item", "font-size:" + r.getComputedStyle(S[0]).fontSize + ";", En(M)), Cn(M, "#" + O, "font-size:0;", En(M))) : f && Nn(S, function(ui, hi) {
        ui.style.marginLeft = ma(hi);
      })), rn) {
        if (B) {
          var a = sn && e.autoHeight ? ae(e.speed) : "";
          Cn(M, "#" + O + "-mw", a, En(M));
        }
        a = bt(e.edgePadding, e.gutter, e.fixedWidth, e.speed, e.autoHeight), Cn(M, "#" + O + "-iw", a, En(M)), f && (a = L && !w ? "width:" + vt(e.fixedWidth, e.gutter, e.items) + ";" : "", B && (a += ae(bn)), Cn(M, "#" + O, a, En(M))), a = L && !w ? xt(e.fixedWidth, e.gutter, e.items) : "", e.gutter && (a += wt(e.gutter)), f || (B && (a += ae(bn)), et && (a += Ji(bn))), a && Cn(M, "#" + O + " > .tns-item", a, En(M));
      } else {
        Ta(), on.style.cssText = bt(I, k, u, ln), f && L && !w && (m.style.width = vt(u, k, _));
        var a = L && !w ? xt(u, k, _) : "";
        k && (a += wt(k)), a && Cn(M, "#" + O + " > .tns-item", a, En(M));
      }
      if (j && rn)
        for (var p in j) {
          p = parseInt(p);
          var h = j[p], a = "", T = "", G = "", X = "", H = "", ve = w ? null : b("items", p), Je = b("fixedWidth", p), se = b("speed", p), pi = b("edgePadding", p), fi = b("autoHeight", p), xe = b("gutter", p);
          B && sn && b("autoHeight", p) && "speed" in h && (T = "#" + O + "-mw{" + ae(se) + "}"), ("edgePadding" in h || "gutter" in h) && (G = "#" + O + "-iw{" + bt(pi, xe, Je, se, fi) + "}"), f && L && !w && ("fixedWidth" in h || "items" in h || u && "gutter" in h) && (X = "width:" + vt(Je, xe, ve) + ";"), B && "speed" in h && (X += ae(se)), X && (X = "#" + O + "{" + X + "}"), ("fixedWidth" in h || u && "gutter" in h || !f && "items" in h) && (H += xt(Je, xe, ve)), "gutter" in h && (H += wt(xe)), !f && "speed" in h && (B && (H += ae(se)), et && (H += Ji(se))), H && (H = "#" + O + " > .tns-item{" + H + "}"), a = T + G + X + H, a && M.insertRule("@media (min-width: " + p / 16 + "em) {" + a + "}", M.cssRules.length);
        }
    }
    function Qi() {
      if (ai(), tn.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + ao() + "</span>  of " + g + "</div>"), Zt = tn.querySelector(".tns-liveregion .current"), Jt) {
        var n = nn ? "stop" : "start";
        N ? pn(N, { "data-action": n }) : e.autoplayButtonOutput && (tn.insertAdjacentHTML(Xt(e.autoplayPosition), '<button type="button" data-action="' + n + '">' + He[0] + n + He[1] + Wn[0] + "</button>"), N = tn.querySelector("[data-action]")), N && R(N, { click: xo }), nn && (Mt(), Yn && R(m, Ce), Gn && R(m, je));
      }
      if (Gt) {
        if (U)
          pn(U, { "aria-label": "Carousel Pagination" }), mn = U.children, Nn(mn, function(T, G) {
            pn(T, {
              "data-nav": G,
              tabindex: "-1",
              "aria-label": me + (G + 1),
              "aria-controls": O
            });
          });
        else {
          for (var t = "", o = Re ? "" : 'style="display:none"', a = 0; a < g; a++)
            t += '<button type="button" data-nav="' + a + '" tabindex="-1" aria-controls="' + O + '" ' + o + ' aria-label="' + me + (a + 1) + '"></button>';
          t = '<div class="tns-nav" aria-label="Carousel Pagination">' + t + "</div>", tn.insertAdjacentHTML(Xt(e.navPosition), t), U = tn.querySelector(".tns-nav"), mn = U.children;
        }
        if (di(), B) {
          var p = B.substring(0, B.length - 18).toLowerCase(), h = "transition: all " + bn / 1e3 + "s";
          p && (h = "-" + p + "-" + h), Cn(M, "[aria-controls^=" + O + "-item]", h, En(M));
        }
        pn(mn[gn], { "aria-label": me + (gn + 1) + Qt }), Rn(mn[gn], "tabindex"), q(mn[gn], dt), R(U, Yt);
      }
      st && (!F && (!z || !D) && (tn.insertAdjacentHTML(Xt(e.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + O + '">' + Fn[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + O + '">' + Fn[1] + "</button></div>"), F = tn.querySelector(".tns-controls")), (!z || !D) && (z = F.children[0], D = F.children[1]), e.controlsContainer && pn(F, {
        "aria-label": "Carousel Navigation",
        tabindex: "0"
      }), (e.controlsContainer || e.prevButton && e.nextButton) && pn([z, D], {
        "aria-controls": O,
        tabindex: "-1"
      }), (e.controlsContainer || e.prevButton && e.nextButton) && (pn(z, { "data-controls": "prev" }), pn(D, { "data-controls": "next" })), $e = uo(z), Fe = uo(D), mo(), F ? R(F, De) : (R(z, De), R(D, De))), ei();
    }
    function Ui() {
      if (f && Bn) {
        var n = {};
        n[Bn] = Dn, R(m, n);
      }
      Hn && R(m, Ie, e.preventScrollOnTouch), Pn && R(m, Ne), $n && R(i, Oe), ce === "inner" ? Y.on("outerResized", function() {
        Bi(), Y.emit("innerLoaded", en());
      }) : (j || u || w || ln || !L) && R(r, { resize: Xi }), ln && (ce === "outer" ? Y.on("innerLoaded", _t) : cn || _t()), ti(), cn ? io() : vn && to(), Y.on("indexChanged", so), ce === "inner" && Y.emit("innerLoaded", en()), typeof Wt == "function" && Wt(en()), Ee = !0;
    }
    function va() {
      if (M.disabled = !0, M.ownerNode && M.ownerNode.remove(), J(r, { resize: Xi }), $n && J(i, Oe), F && J(F, De), U && J(U, Yt), J(m, Ce), J(m, je), N && J(N, { click: xo }), nn && clearInterval(pt), f && Bn) {
        var n = {};
        n[Bn] = Dn, J(m, n);
      }
      Hn && J(m, Ie), Pn && J(m, Ne);
      var t = [zi, Ii, pa, fa, Ni, qi];
      Nt.forEach(function(a, p) {
        var h = a === "container" ? tn : e[a];
        if (typeof h == "object" && h) {
          var T = h.previousElementSibling ? h.previousElementSibling : !1, G = h.parentNode;
          h.outerHTML = t[p], e[a] = T ? T.nextElementSibling : G.firstElementChild;
        }
      }), Nt = qn = tt = qt = Sn = L = tn = on = m = $t = zi = S = g = Te = it = w = u = I = k = W = _ = de = Ft = $n = bn = Se = Z = ln = M = Ae = $ = pe = Q = A = Di = fe = Pt = ne = Jn = ue = Le = c = Kn = Mn = hn = at = zn = Vn = Wt = Y = Zn = O = cn = Me = rt = vn = ze = De = Yt = Ce = je = Oe = Ie = Ne = st = Gt = Re = Jt = Ci = ji = Kt = lt = ct = Vt = An = Fn = F = Ii = z = D = $e = Fe = Ln = U = Ni = mn = xn = ee = te = gn = he = dt = me = Qt = nn = Ht = Ri = Wn = Yn = N = qi = Gn = He = pt = dn = ft = ge = ut = ie = kn = ht = oe = wn = Ut = Hn = Pn = null;
      for (var o in this)
        o !== "rebuild" && (this[o] = null);
      Ee = !1;
    }
    function Xi(n) {
      In(function() {
        Bi(On(n));
      });
    }
    function Bi(n) {
      if (Ee) {
        ce === "outer" && Y.emit("outerResized", en(n)), it = Pi();
        var t, o = Te, a = !1;
        j && (no(), t = o !== Te, t && Y.emit("newBreakpointStart", en(n)));
        var p, h, T = _, G = cn, X = vn, H = $n, ve = An, Je = Ln, se = Hn, pi = Pn, fi = nn, xe = Yn, ui = Gn, hi = c;
        if (t) {
          var qa = u, $a = ln, Fa = Fn, Ha = V, mi = Wn;
          if (!rn)
            var Pa = k, Wa = I;
        }
        if ($n = b("arrowKeys"), An = b("controls"), Ln = b("nav"), Hn = b("touch"), V = b("center"), Pn = b("mouseDrag"), nn = b("autoplay"), Yn = b("autoplayHoverPause"), Gn = b("autoplayResetOnVisibility"), t && (cn = b("disable"), u = b("fixedWidth"), bn = b("speed"), ln = b("autoHeight"), Fn = b("controlsText"), Wn = b("autoplayText"), Ht = b("autoplayTimeout"), rn || (I = b("edgePadding"), k = b("gutter"))), mt(cn), W = Yi(), (!L || w) && !cn && (po(), L || (ci(), a = !0)), (u || w) && (fe = ri(), hn = Le()), (t || u) && (_ = b("items"), de = b("slideBy"), h = _ !== T, h && (!u && !w && (hn = Le()), ni())), t && cn !== G && (cn ? io() : wa()), rt && (t || u || w) && (vn = Bt(), vn !== X && (vn ? (si(St(Fi(0))), to()) : (xa(), a = !0))), mt(cn || vn), nn || (Yn = Gn = !1), $n !== H && ($n ? R(i, Oe) : J(i, Oe)), An !== ve && (An ? F ? un(F) : (z && un(z), D && un(D)) : F ? fn(F) : (z && fn(z), D && fn(D))), Ln !== Je && (Ln ? (un(U), di()) : fn(U)), Hn !== se && (Hn ? R(m, Ie, e.preventScrollOnTouch) : J(m, Ie)), Pn !== pi && (Pn ? R(m, Ne) : J(m, Ne)), nn !== fi && (nn ? (N && un(N), !dn && !ge && Mt()) : (N && fn(N), dn && Ge())), Yn !== xe && (Yn ? R(m, Ce) : J(m, Ce)), Gn !== ui && (Gn ? R(i, je) : J(i, je)), t) {
          if ((u !== qa || V !== Ha) && (a = !0), ln !== $a && (ln || (on.style.height = "")), An && Fn !== Fa && (z.innerHTML = Fn[0], D.innerHTML = Fn[1]), N && Wn !== mi) {
            var gi = nn ? 1 : 0, bi = N.innerHTML, Ao = bi.length - mi[gi].length;
            bi.substring(Ao) === mi[gi] && (N.innerHTML = bi.substring(0, Ao) + Wn[gi]);
          }
        } else
          V && (u || w) && (a = !0);
        if ((h || u && !w) && (xn = So(), di()), p = c !== hi, p ? (Y.emit("indexChanged", en()), a = !0) : h ? p || so() : (u || w) && (ti(), ai(), oo()), h && !f && Ea(), !cn && !vn) {
          if (t && !rn && ((I !== Wa || k !== Pa) && (on.style.cssText = bt(I, k, u, bn, ln)), L)) {
            f && (m.style.width = vt(u, k, _));
            var Ya = xt(u, k, _) + wt(k);
            ta(M, En(M) - 1), Cn(M, "#" + O + " > .tns-item", Ya, En(M));
          }
          ln && _t(), a && (We(), Kn = c);
        }
        t && Y.emit("newBreakpointEnd", en(n));
      }
    }
    function Bt() {
      if (!u && !w) {
        var n = V ? _ - (_ - 1) / 2 : _;
        return g <= n;
      }
      var t = u ? (u + k) * g : $[g], o = I ? W + I * 2 : W + k;
      return V && (o -= u ? (W - u) / 2 : (W - ($[c + 1] - $[c] - k)) / 2), t <= o;
    }
    function no() {
      Te = 0;
      for (var n in j)
        n = parseInt(n), it >= n && (Te = n);
    }
    var ni = /* @__PURE__ */ function() {
      return Z ? f ? (
        // loop + carousel
        function() {
          var n = Mn, t = hn;
          n += de, t -= de, I ? (n += 1, t -= 1) : u && (W + k) % (u + k) && (t -= 1), Q && (c > t ? c -= g : c < n && (c += g));
        }
      ) : (
        // loop + gallery
        function() {
          if (c > hn)
            for (; c >= Mn + g; )
              c -= g;
          else if (c < Mn)
            for (; c <= hn - g; )
              c += g;
        }
      ) : (
        // non-loop
        function() {
          c = Math.max(Mn, Math.min(hn, c));
        }
      );
    }();
    function ei() {
      !nn && N && fn(N), !Ln && U && fn(U), An || (F ? fn(F) : (z && fn(z), D && fn(D)));
    }
    function eo() {
      nn && N && un(N), Ln && U && un(U), An && (F ? un(F) : (z && un(z), D && un(D)));
    }
    function to() {
      if (!ze) {
        if (I && (on.style.margin = "0px"), Q)
          for (var n = "tns-transparent", t = Q; t--; )
            f && q(S[t], n), q(S[A - t - 1], n);
        ei(), ze = !0;
      }
    }
    function xa() {
      if (ze) {
        if (I && rn && (on.style.margin = ""), Q)
          for (var n = "tns-transparent", t = Q; t--; )
            f && an(S[t], n), an(S[A - t - 1], n);
        eo(), ze = !1;
      }
    }
    function io() {
      if (!Me) {
        if (M.disabled = !0, m.className = m.className.replace(Zn.substring(1), ""), Rn(m, ["style"]), Z)
          for (var n = Q; n--; )
            f && fn(S[n]), fn(S[A - n - 1]);
        if ((!L || !f) && Rn(on, ["style"]), !f)
          for (var t = c, o = c + g; t < o; t++) {
            var a = S[t];
            Rn(a, ["style"]), an(a, qn), an(a, Sn);
          }
        ei(), Me = !0;
      }
    }
    function wa() {
      if (Me) {
        if (M.disabled = !1, m.className += Zn, We(), Z)
          for (var n = Q; n--; )
            f && un(S[n]), un(S[A - n - 1]);
        if (!f)
          for (var t = c, o = c + g; t < o; t++) {
            var a = S[t], p = t < c + _ ? qn : Sn;
            a.style.left = (t - c) * 100 / _ + "%", q(a, p);
          }
        eo(), Me = !1;
      }
    }
    function oo() {
      var n = ao();
      Zt.innerHTML !== n && (Zt.innerHTML = n);
    }
    function ao() {
      var n = yt(), t = n[0] + 1, o = n[1] + 1;
      return t === o ? t + "" : t + " to " + o;
    }
    function yt(n) {
      n == null && (n = St());
      var t = c, o, a, p;
      if (V || I ? (w || u) && (a = -(parseFloat(n) + I), p = a + W + I * 2) : w && (a = $[c], p = a + W), w)
        $.forEach(function(X, H) {
          H < A && ((V || I) && X <= a + 0.5 && (t = H), p - X >= 0.5 && (o = H));
        });
      else {
        if (u) {
          var h = u + k;
          V || I ? (t = Math.floor(a / h), o = Math.ceil(p / h - 1)) : o = t + Math.ceil(W / h) - 1;
        } else if (V || I) {
          var T = _ - 1;
          if (V ? (t -= T / 2, o = c + T / 2) : o = c + T, I) {
            var G = I * _ / W;
            t -= G, o += G;
          }
          t = Math.floor(t), o = Math.ceil(o);
        } else
          o = t + _ - 1;
        t = Math.max(t, 0), o = Math.min(o, A - 1);
      }
      return [t, o];
    }
    function ti() {
      if (Ae && !cn) {
        var n = yt();
        n.push(da), oi.apply(null, n).forEach(function(t) {
          if (!le(t, lt)) {
            var o = {};
            o[Bn] = function(p) {
              p.stopPropagation();
            }, R(t, o), R(t, ct), t.src = Ue(t, "data-src");
            var a = Ue(t, "data-srcset");
            a && (t.srcset = a), q(t, "loading");
          }
        });
      }
    }
    function ya(n) {
      ro(be(n));
    }
    function _a(n) {
      ka(be(n));
    }
    function ro(n) {
      q(n, "loaded"), ii(n);
    }
    function ka(n) {
      q(n, "failed"), ii(n);
    }
    function ii(n) {
      q(n, lt), an(n, "loading"), J(n, ct);
    }
    function oi(n, t, o) {
      var a = [];
      for (o || (o = "img"); n <= t; )
        Nn(S[n].querySelectorAll(o), function(p) {
          a.push(p);
        }), n++;
      return a;
    }
    function _t() {
      var n = oi.apply(null, yt());
      In(function() {
        kt(n, co);
      });
    }
    function kt(n, t) {
      if (Vt || (n.forEach(function(o, a) {
        !Ae && o.complete && ii(o), le(o, lt) && n.splice(a, 1);
      }), !n.length))
        return t();
      In(function() {
        kt(n, t);
      });
    }
    function so() {
      ti(), ai(), oo(), mo(), Sa();
    }
    function Ta() {
      f && ln && (sn.style[B] = bn / 1e3 + "s");
    }
    function lo(n, t) {
      for (var o = [], a = n, p = Math.min(n + t, A); a < p; a++)
        o.push(S[a].offsetHeight);
      return Math.max.apply(null, o);
    }
    function co() {
      var n = ln ? lo(c, _) : lo(Q, g), t = sn || on;
      t.style.height !== n && (t.style.height = n + "px");
    }
    function po() {
      $ = [0];
      var n = L ? "left" : "top", t = L ? "right" : "bottom", o = S[0].getBoundingClientRect()[n];
      Nn(S, function(a, p) {
        p && $.push(a.getBoundingClientRect()[n] - o), p === A - 1 && $.push(a.getBoundingClientRect()[t] - o);
      });
    }
    function ai() {
      var n = yt(), t = n[0], o = n[1];
      Nn(S, function(a, p) {
        p >= t && p <= o ? ye(a, "aria-hidden") && (Rn(a, ["aria-hidden", "tabindex"]), q(a, Kt)) : ye(a, "aria-hidden") || (pn(a, {
          "aria-hidden": "true",
          tabindex: "-1"
        }), an(a, Kt));
      });
    }
    function Ea() {
      for (var n = c + Math.min(g, _), t = A; t--; ) {
        var o = S[t];
        t >= c && t < n ? (q(o, "tns-moving"), o.style.left = (t - c) * 100 / _ + "%", q(o, qn), an(o, Sn)) : o.style.left && (o.style.left = "", q(o, Sn), an(o, qn)), an(o, tt);
      }
      setTimeout(function() {
        Nn(S, function(a) {
          an(a, "tns-moving");
        });
      }, 300);
    }
    function Sa() {
      if (Ln && (gn = te >= 0 ? te : Hi(), te = -1, gn !== he)) {
        var n = mn[he], t = mn[gn];
        pn(n, {
          tabindex: "-1",
          "aria-label": me + (he + 1)
        }), an(n, dt), pn(t, { "aria-label": me + (gn + 1) + Qt }), Rn(t, "tabindex"), q(t, dt), he = gn;
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
    function Tt(n, t, o) {
      n ? t.disabled = o : t.setAttribute("aria-disabled", o.toString());
    }
    function mo() {
      if (!(!An || Se || Z)) {
        var n = $e ? z.disabled : ho(z), t = Fe ? D.disabled : ho(D), o = c <= Mn, a = !Se && c >= hn;
        o && !n && Tt($e, z, !0), !o && n && Tt($e, z, !1), a && !t && Tt(Fe, D, !0), !a && t && Tt(Fe, D, !1);
      }
    }
    function Et(n, t) {
      B && (n.style[B] = t);
    }
    function Aa() {
      return u ? (u + k) * A : $[A];
    }
    function Pe(n) {
      n == null && (n = c);
      var t = I ? k : 0;
      return w ? (W - t - ($[n + 1] - $[n] - k)) / 2 : u ? (W - u) / 2 : (_ - 1) / 2;
    }
    function ri() {
      var n = I ? k : 0, t = W + n - Aa();
      return V && !Z && (t = u ? -(u + k) * (A - 1) - Pe() : Pe(A - 1) - $[A - 1]), t > 0 && (t = 0), t;
    }
    function St(n) {
      n == null && (n = c);
      var t;
      if (L && !w)
        if (u)
          t = -(u + k) * n, V && (t += Pe());
        else {
          var o = Xn ? A : _;
          V && (n -= Pe()), t = -n * 100 / o;
        }
      else
        t = -$[n], V && w && (t += Pe());
      return Di && (t = Math.max(t, fe)), t += L && !w && !u ? "%" : "px", t;
    }
    function We(n) {
      Et(m, "0s"), si(n);
    }
    function si(n) {
      n == null && (n = St()), m.style[ne] = Jn + n + ue;
    }
    function go(n, t, o, a) {
      var p = n + _;
      Z || (p = Math.min(p, A));
      for (var h = n; h < p; h++) {
        var T = S[h];
        a || (T.style.left = (h - c) * 100 / _ + "%"), qt && nt && (T.style[nt] = T.style[It] = qt * (h - n) / 1e3 + "s"), an(T, t), q(T, o), a && pe.push(T);
      }
    }
    var La = /* @__PURE__ */ function() {
      return f ? function() {
        Et(m, ""), B || !bn ? (si(), (!bn || !yi(m)) && Dn()) : la(m, ne, Jn, ue, St(), bn, Dn), L || ci();
      } : function() {
        pe = [];
        var n = {};
        n[Bn] = n[Ei] = Dn, J(S[Kn], n), R(S[c], n), go(Kn, qn, tt, !0), go(c, Sn, qn), (!Bn || !Ei || !bn || !yi(m)) && Dn();
      };
    }();
    function li(n, t) {
      Pt && ni(), (c !== Kn || t) && (Y.emit("indexChanged", en()), Y.emit("transitionStart", en()), ln && _t(), dn && n && ["click", "keydown"].indexOf(n.type) >= 0 && Ge(), Vn = !0, La());
    }
    function bo(n) {
      return n.toLowerCase().replace(/-/g, "");
    }
    function Dn(n) {
      if (f || Vn) {
        if (Y.emit("transitionEnd", en(n)), !f && pe.length > 0)
          for (var t = 0; t < pe.length; t++) {
            var o = pe[t];
            o.style.left = "", It && nt && (o.style[It] = "", o.style[nt] = ""), an(o, tt), q(o, Sn);
          }
        if (!n || !f && n.target.parentNode === m || n.target === m && bo(n.propertyName) === bo(ne)) {
          if (!Pt) {
            var a = c;
            ni(), c !== a && (Y.emit("indexChanged", en()), We());
          }
          ce === "inner" && Y.emit("innerLoaded", en()), Vn = !1, Kn = c;
        }
      }
    }
    function Ye(n, t) {
      if (!vn)
        if (n === "prev")
          Qn(t, -1);
        else if (n === "next")
          Qn(t, 1);
        else {
          if (Vn) {
            if (ot)
              return;
            Dn();
          }
          var o = gt(), a = 0;
          if (n === "first" ? a = -o : n === "last" ? a = f ? g - _ - o : g - 1 - o : (typeof n != "number" && (n = parseInt(n)), isNaN(n) || (t || (n = Math.max(0, Math.min(g - 1, n))), a = n - o)), !f && a && Math.abs(a) < _) {
            var p = a > 0 ? 1 : -1;
            a += c + a - g >= Mn ? g * p : g * 2 * p * -1;
          }
          c += a, f && Z && (c < Mn && (c += g), c > hn && (c -= g)), gt(c) !== gt(Kn) && li(t);
        }
    }
    function Qn(n, t) {
      if (Vn) {
        if (ot)
          return;
        Dn();
      }
      var o;
      if (!t) {
        n = On(n);
        for (var a = be(n); a !== F && [z, D].indexOf(a) < 0; )
          a = a.parentNode;
        var p = [z, D].indexOf(a);
        p >= 0 && (o = !0, t = p === 0 ? -1 : 1);
      }
      if (Se) {
        if (c === Mn && t === -1) {
          Ye("last", n);
          return;
        } else if (c === hn && t === 1) {
          Ye("first", n);
          return;
        }
      }
      t && (c += de * t, w && (c = Math.floor(c)), li(o || n && n.type === "keydown" ? n : null));
    }
    function Ma(n) {
      if (Vn) {
        if (ot)
          return;
        Dn();
      }
      n = On(n);
      for (var t = be(n), o; t !== U && !ye(t, "data-nav"); )
        t = t.parentNode;
      if (ye(t, "data-nav")) {
        var o = te = Number(Ue(t, "data-nav")), a = u || w ? o * g / xn : o * _, p = Re ? o : Math.min(Math.ceil(a), g - 1);
        Ye(p, n), gn === o && (dn && Ge(), te = -1);
      }
    }
    function At() {
      pt = setInterval(function() {
        Qn(null, Ri);
      }, Ht), dn = !0;
    }
    function Lt() {
      clearInterval(pt), dn = !1;
    }
    function vo(n, t) {
      pn(N, { "data-action": n }), N.innerHTML = He[0] + n + He[1] + t;
    }
    function Mt() {
      At(), N && vo("stop", Wn[1]);
    }
    function Ge() {
      Lt(), N && vo("start", Wn[0]);
    }
    function za() {
      nn && !dn && (Mt(), ge = !1);
    }
    function Da() {
      dn && (Ge(), ge = !0);
    }
    function xo() {
      dn ? (Ge(), ge = !0) : (Mt(), ge = !1);
    }
    function Ca() {
      i.hidden ? dn && (Lt(), ut = !0) : ut && (At(), ut = !1);
    }
    function ja() {
      dn && (Lt(), ft = !0);
    }
    function Oa() {
      ft && (At(), ft = !1);
    }
    function Ia(n) {
      n = On(n);
      var t = [l.LEFT, l.RIGHT].indexOf(n.keyCode);
      t >= 0 && Qn(n, t === 0 ? -1 : 1);
    }
    function Na(n) {
      n = On(n);
      var t = [l.LEFT, l.RIGHT].indexOf(n.keyCode);
      t >= 0 && (t === 0 ? z.disabled || Qn(n, -1) : D.disabled || Qn(n, 1));
    }
    function wo(n) {
      n.focus();
    }
    function Ra(n) {
      n = On(n);
      var t = i.activeElement;
      if (ye(t, "data-nav")) {
        var o = [l.LEFT, l.RIGHT, l.ENTER, l.SPACE].indexOf(n.keyCode), a = Number(Ue(t, "data-nav"));
        o >= 0 && (o === 0 ? a > 0 && wo(mn[a - 1]) : o === 1 ? a < xn - 1 && wo(mn[a + 1]) : (te = a, Ye(a, n)));
      }
    }
    function On(n) {
      return n = n || r.event, re(n) ? n.changedTouches[0] : n;
    }
    function be(n) {
      return n.target || r.event.srcElement;
    }
    function re(n) {
      return n.type.indexOf("touch") >= 0;
    }
    function yo(n) {
      n.preventDefault ? n.preventDefault() : n.returnValue = !1;
    }
    function _o() {
      return oa(ia(kn.y - ie.y, kn.x - ie.x), at) === e.axis;
    }
    function ko(n) {
      if (Vn) {
        if (ot)
          return;
        Dn();
      }
      nn && dn && Lt(), oe = !0, wn && (Ct(wn), wn = null);
      var t = On(n);
      Y.emit(re(n) ? "touchStart" : "dragStart", en(n)), !re(n) && ["img", "a"].indexOf(fo(be(n))) >= 0 && yo(n), kn.x = ie.x = t.clientX, kn.y = ie.y = t.clientY, f && (ht = parseFloat(m.style[ne].replace(Jn, "")), Et(m, "0s"));
    }
    function To(n) {
      if (oe) {
        var t = On(n);
        kn.x = t.clientX, kn.y = t.clientY, f ? wn || (wn = In(function() {
          Eo(n);
        })) : (zn === "?" && (zn = _o()), zn && (qe = !0)), (typeof n.cancelable != "boolean" || n.cancelable) && qe && n.preventDefault();
      }
    }
    function Eo(n) {
      if (!zn) {
        oe = !1;
        return;
      }
      if (Ct(wn), oe && (wn = In(function() {
        Eo(n);
      })), zn === "?" && (zn = _o()), zn) {
        !qe && re(n) && (qe = !0);
        try {
          n.type && Y.emit(re(n) ? "touchMove" : "dragMove", en(n));
        } catch {
        }
        var t = ht, o = Ut(kn, ie);
        if (!L || u || w)
          t += o, t += "px";
        else {
          var a = Xn ? o * _ * 100 / ((W + k) * A) : o * 100 / (W + k);
          t += a, t += "%";
        }
        m.style[ne] = Jn + t + ue;
      }
    }
    function zt(n) {
      if (oe) {
        wn && (Ct(wn), wn = null), f && Et(m, ""), oe = !1;
        var t = On(n);
        kn.x = t.clientX, kn.y = t.clientY;
        var o = Ut(kn, ie);
        if (Math.abs(o)) {
          if (!re(n)) {
            var a = be(n);
            R(a, { click: function p(h) {
              yo(h), J(a, { click: p });
            } });
          }
          f ? wn = In(function() {
            if (L && !w) {
              var p = -o * _ / (W + k);
              p = o > 0 ? Math.floor(p) : Math.ceil(p), c += p;
            } else {
              var h = -(ht + o);
              if (h <= 0)
                c = Mn;
              else if (h >= $[A - 1])
                c = hn;
              else
                for (var T = 0; T < A && h >= $[T]; )
                  c = T, h > $[T] && o < 0 && (c += 1), T++;
            }
            li(n, o), Y.emit(re(n) ? "touchEnd" : "dragEnd", en(n));
          }) : zn && Qn(n, o > 0 ? -1 : 1);
        }
      }
      e.preventScrollOnTouch === "auto" && (qe = !1), at && (zn = "?"), nn && !dn && At();
    }
    function ci() {
      var n = sn || on;
      n.style.height = $[c + _] - $[c] + "px";
    }
    function So() {
      var n = u ? (u + k) * g / W : g / _;
      return Math.min(Math.ceil(n), g);
    }
    function di() {
      if (!(!Ln || Re) && xn !== ee) {
        var n = ee, t = xn, o = un;
        for (ee > xn && (n = xn, t = ee, o = fn); n < t; )
          o(mn[n]), n++;
        ee = xn;
      }
    }
    function en(n) {
      return {
        container: m,
        slideItems: S,
        navContainer: U,
        navItems: mn,
        controlsContainer: F,
        hasControls: st,
        prevButton: z,
        nextButton: D,
        items: _,
        slideBy: de,
        cloneCount: Q,
        slideCount: g,
        slideCountNew: A,
        index: c,
        indexCached: Kn,
        displayIndex: $i(),
        navCurrentIndex: gn,
        navCurrentIndexCached: he,
        pages: xn,
        pagesCached: ee,
        sheet: M,
        isOn: Ee,
        event: n || {}
      };
    }
    return {
      version: "2.9.4",
      getInfo: en,
      events: Y,
      goTo: Ye,
      play: za,
      pause: Da,
      isOn: Ee,
      updateSliderHeight: co,
      refresh: Ki,
      destroy: va,
      rebuild: function() {
        return Xe(jt(e, Ai));
      }
    };
  };
  jo("opt_in"), P("exp_optin_loaded", "Loaded", "loaded"), Co([
    "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css",
    "https://fast.wistia.com/assets/external/E-v1.js"
  ]), zo({ name: "Opt in page", dev: "YK" });
  class ca {
    constructor() {
      Mo("body", () => {
        C("body").elements[0].insertAdjacentHTML(
          "afterbegin",
          /* html */
          `<style>${Lo}</style>`
        ), this.init();
      });
    }
    init() {
      this.addBlocks(), this.setActions(), this.setEvents();
    }
    addBlocks() {
      C(".containerWrapper").elements[0].insertAdjacentHTML("afterend", '<div class="crs_landing"></div>');
      const i = C(".crs_landing").elements[0];
      i.insertAdjacentHTML("afterbegin", $o), i.insertAdjacentHTML("beforeend", Fo), i.insertAdjacentHTML("beforeend", Ho), i.insertAdjacentHTML("beforeend", Po), i.insertAdjacentHTML("beforeend", Wo), i.insertAdjacentHTML("beforeend", Yo), i.insertAdjacentHTML("beforeend", Go), i.insertAdjacentHTML("beforeend", Jo), i.insertAdjacentHTML("beforeend", Ko), i.insertAdjacentHTML("beforeend", Vo), i.insertAdjacentHTML("beforeend", Zo), i.insertAdjacentHTML("beforeend", Qo);
    }
    setActions() {
      C("form").on("submit", async function(s) {
        s.preventDefault();
        const d = this.querySelector('input[name="name"]').value, y = this.querySelector('input[name="email"]').value;
        let x = !0;
        (!d || d.trim() === "") && (this.querySelector('input[name="name"]').closest("label").classList.add("error"), x = !1), (!y || y.trim() === "" || !y.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) && (this.querySelector('input[name="email"]').closest("label").classList.add("error"), x = !1), x && (this.closest("#main_block") ? P("exp_optin_fs_button", "Grab Your FREE Seat Now", "click", "First screen form") : P("exp_optin_popup_cta_button", "Grab Your FREE Seat Now", "click", "Popup after click on CTA"), window.innerWidth <= 768 ? (await fetch("https://conversionrate.top/api/dropservicing/get-schedules", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            webinarId: 75
          })
        }).then((v) => v.json()).then((v) => v.schedule_id), window.location.href = "https://event.webinarjam.com/register/1click/75/n7l3oh11?first_name=" + d + "&email=" + y.replace("@", "%40") + "&schedule_id=1") : (await fetch("https://conversionrate.top/api/dropservicing/get-schedules", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            webinarId: 74
          })
        }).then((v) => v.json()).then((v) => v.schedule_id), fetch("https://conversionrate.top/api/dropservicing/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            api_key: "8f4aff29-94fa-4197-a1a2-4a3c03ede2e0",
            webinarId: 74,
            name: d,
            email: y,
            schedule: 275
          })
        }).then((v) => v.json()).then((v) => {
          window.location.href = v.user.thank_you_url;
        })));
      }), C("form input").on("input", function() {
        this.closest("label").classList.remove("error");
      }), C('input[name="name"]').on("change", function() {
        !!this.closest("#main_block") ? P("exp_optin_fs_name", "Enter your name", "input", "First screen form") : P("exp_optin_popup_cta_name", "Enter your name", "input", "Popup after click on CTA");
      }), C('input[name="email"]').on("change", function() {
        !!this.closest("#main_block") ? P("exp_optin_fs_email", "Enter email address", "input", "First screen form") : P("exp_optin_popup_cta_email", "Enter email address", "input", "Popup after click on CTA");
      }), C(".question").on("click", function() {
        const s = this.innerText;
        if (this.classList.contains("active")) {
          this.classList.remove("active"), P("exp_optin_faq_close", `Close question. ${s}`, "click", "Frequently asked questions");
          return;
        }
        C(".question.active").removeClass("active"), this.classList.toggle("active"), P("exp_optin_faq_open", `Open question. ${s}`, "click", "Frequently asked questions");
      }), C(".cta.pop").on("click", function() {
        C(".crs_video_popup").elements[0].classList.contains("active") && C(".crs_video_popup .video *:not(.crs_close)").elements.forEach((s) => s.remove()), C(".crs_video_popup").elements[0].classList.remove("active"), C(".crs_popup_form").elements[0].classList.add("active"), this.closest("#last_cta") && P("exp_optin_future_cta", "Join the exclusive training", "click", "Your Future Starts Here"), this.closest("#training_for") && P("exp_optin_who_cta", "Join The FREE Training Now", "click", "Who is the Training for"), this.closest("#host_block") && P("exp_optin_host_cta", "Unlock Dylan’s Formula for Free ", "click", "Your Host: Dylan Sydney"), this.closest("#bonus_block") && P("exp_optin_bonuses_cta", "Grab Your FREE Seat Now", "click", "Exclusive Bonuses"), this.closest(".crs_video_popup") && P("exp_optin_popup_review_cta", "Grab Your FREE Seat Now", "click", "Popup after review"), this.closest("#main_block") && P("exp_optin_fs_button_mobile", "Grab Your FREE Seat Now", "click", "First screen form");
      }), C(".crs_popup_form .close").on("click", function() {
        C(".crs_popup_form").elements[0].classList.remove("active");
      }), C("#base_review .slide").on("click", function() {
        const s = this.querySelector(".slide>p").textContent, d = this.getAttribute("data-video"), y = C(`.video_slide[data-video="${d}"] .video`).elements[0].cloneNode(!0);
        C(".crs_video_popup .video").elements[0].appendChild(y), C(".crs_video_popup").elements[0].classList.add("active"), P("exp_optin_why_join_review", `Open review. ${s}`, "click", "Why Join This Webinar"), C(".crs_video_popup .wistia_embed").on("click", function() {
          P("exp_optin_popup_review_video", `Play video ${s}`, "click", "Popup after review");
        });
      }), C(".crs_video_popup .crs_close").on("click", function() {
        C(".crs_video_popup .video *:not(.crs_close)").elements.forEach((s) => s.remove()), C(".crs_video_popup").elements[0].classList.remove("active");
      });
      const i = Xe({
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
      }), r = Xe({
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
        i.getInfo().navItems && i.getInfo().navItems[1].classList.add("tns-nav-near");
      }, 500), i.events.on("indexChanged", function(s) {
        var y, x;
        const d = s.navItems;
        Array.from(d).forEach((v) => v.classList.remove("tns-nav-near")), (y = d[s.index - 1]) == null || y.classList.add("tns-nav-near"), (x = d[s.index + 1]) == null || x.classList.add("tns-nav-near");
      }), r.getInfo().slideItems[0].classList.add("tns-current"), r.getInfo().navItems[1].classList.add("tns-nav-near"), r.events.on("indexChanged", function(s) {
        var v, K;
        const d = s.slideItems, y = s.navItems;
        Array.from(y).forEach((rn) => rn.classList.remove("tns-nav-near")), Array.from(d).forEach((rn) => rn.classList.remove("tns-current")), (v = y[s.index - 1]) == null || v.classList.add("tns-nav-near"), (K = y[s.index + 1]) == null || K.classList.add("tns-nav-near"), d[s.index].classList.add("tns-current");
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
        window.Wistia && (clearInterval(l), window._wq = window._wq || [], Dt.forEach((s) => {
          window._wq.push({
            id: s.videoId,
            onReady: function(d) {
              d.bind("play", function() {
                d.container.closest(".video_slide") && P(
                  "exp_optin_hear_video",
                  `Video ${d.data.media.name}`,
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
      Tn(".crs_video_popup", "exp_optin_popup_review_view", "Popup after review"), Tn(".crs_popup_form", "exp_optin_popup_cta_view", "Popup after click on CTA"), Tn("#base_review", "exp_optin_why_join_view", "Why Join This Webinar"), Tn("#bonus_block", "exp_optin_bonuses_view", "Exclusive Bonuses"), Tn("#host_block", "exp_optin_host_view", "Your Host: Dylan Sydney"), Tn("#video_block", "exp_optin_hear_view", "Hear from Our Participants"), Tn("#training_for", "exp_optin_who_view", "Who is the Training for"), Tn("#trust_pilot", "exp_optin_trustscore_view", "TrustScore"), Tn("#faq_block", "exp_optin_faq_view", "Frequently asked questions"), Tn("#last_cta", "exp_optin_future_view", "Your Future Starts Here");
    }
  }
  window.location.href.includes("training") && new ca();
})();
//# sourceMappingURL=index.js.map
