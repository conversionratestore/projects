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
  width: calc(100% - 180px);
  max-width: 1280px;
}
@media (max-width: 768px) {
  #main_block .wrapper {
    width: calc(100% - 32px);
  }
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
  margin-top: 12px;
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
#main_block .form form .inputs1 {
  display: flex;
  flex-direction: column;
}
#main_block .form form .inputs2 {
  display: none;
}
#main_block .form form .inputs2.active {
  display: block;
}
#main_block .form form .inputs2 .time_list {
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-bottom: 12px;
  margin-top: 14px;
  padding: 0;
}
#main_block .form form .inputs2 .time_list li {
  display: flex;
  position: relative;
  padding: 7px 13px;
  border-radius: 3px;
  border: 1px solid #ccc;
  gap: 10px;
  cursor: pointer;
}
#main_block .form form .inputs2 .time_list li .point {
  margin-top: 4px;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  border: 1px solid #d8dae5;
}
#main_block .form form .inputs2 .time_list li.selected {
  border-color: #06f;
}
#main_block .form form .inputs2 .time_list li.selected .point {
  border: 5px solid #06f;
}
#main_block .form form .inputs2 .time_list li p {
  margin: 0;
}
#main_block .form form .inputs2 .time_list li p:first-of-type {
  font-size: 14px;
  line-height: 24px;
  color: #000;
  font-weight: 600;
}
#main_block .form form .inputs2 .time_list li p:last-of-type {
  font-size: 12px;
  line-height: 23px;
  color: #000;
  font-weight: 400;
}
#main_block .form form .inputs2 .time_list li .comment {
  font-size: 12px;
  line-height: 22px;
  color: #161718;
  font-weight: 400;
  opacity: 0.4;
  position: absolute;
  bottom: calc(100% + 4px);
  left: 0;
}
#main_block .form form .inputs2 button {
  width: 100%;
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
  display: flex;
  flex-direction: column;
}
@media (max-width: 768px) {
  #video_block .video_slide .head > .img + p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    flex-direction: row;
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
@media (max-width: 768px) {
  #video_block .video_slide .video {
    height: 60vw;
  }
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
  max-width: 500px;
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
  margin-top: 4px;
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
  width: 100%;
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
.crs_video_popup > .video {
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
  .crs_video_popup > .video {
    max-height: 50vh;
    height: 60vw;
    margin-top: calc(50vh - 30vw - 100px);
  }
}
.crs_video_popup > .video .video {
  width: 100%;
}
.crs_video_popup > .video > div:not(.crs_close) {
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
}/*# sourceMappingURL=style.css.map */`, H = (e, i, r, l = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: i,
      event_type: r,
      event_loc: l
    }), Xn(`Event: ${e} | ${i} | ${r} | ${l}`, "success");
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
        s.addEventListener(i, function(c) {
          var x;
          if (r !== "") {
            let v = (x = c.target) == null ? void 0 : x.closest(r);
            v && (l == null || l.call(v, c));
          } else
            l == null || l.call(s, c);
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
      const l = i.split("-").map((s, c) => c === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[l] = r;
      }), this;
    }
  }
  const z = (e) => new Do(e), Co = async (e) => {
    const i = (r) => new Promise((l, s) => {
      const c = r.split(".").pop();
      if (c === "js") {
        if (Array.from(document.scripts).map((y) => y.src.toLowerCase()).includes(r.toLowerCase()))
          return Xn(`Script ${r} allready downloaded!`, "success"), l("");
        const v = document.createElement("script");
        v.src = r, v.onload = l, v.onerror = s, document.head.appendChild(v);
      } else if (c === "css") {
        if (Array.from(document.styleSheets).map((y) => {
          var O;
          return (O = y.href) == null ? void 0 : O.toLowerCase();
        }).includes(r.toLowerCase()))
          return Xn(`Style ${r} allready downloaded!`, "success"), l("");
        const v = document.createElement("link");
        v.rel = "stylesheet", v.href = r, v.onload = l, v.onerror = s, document.head.appendChild(v);
      }
    });
    for (const r of e)
      Xn(r), await i(r), Xn(`Loaded librari ${r}`);
    Xn("All libraries loaded!", "success");
  }, jo = (e) => {
    let i = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(i), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, vn = (e, i, r, l, s = 1e3, c = 0.5) => {
    let x, v;
    if (x = new IntersectionObserver(
      function(y) {
        y[0].isIntersecting === !0 ? v = setTimeout(() => {
          H(
            i,
            y[0].target.dataset.visible || l || "",
            "view",
            r
          ), x.disconnect();
        }, s) : (Xn("Element is not fully visible", "warn"), clearTimeout(v));
      },
      { threshold: [c] }
    ), typeof e == "string") {
      const y = document.querySelector(e);
      y && x.observe(y);
    } else
      x.observe(e);
  }, Xn = (e, i = "info") => {
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
  ], $o = [
    'Dylan Sigley was a broke college student working in a call center when he discovered a new online business method called "Drop Servicing".',
    "Soon after, he built a successful online business, allowing him to quit his job and earn 6-figures while traveling the world and working only 5 hours a week from his laptop.",
    "This FREE webclass skips the nonsense to show you, step-by-step, how Dylan grew his business so quickly and how hundreds of others have used the same process to successfully start their own businesses.",
    "Dylan has one of the best track records in the industry for helping people around the world build Drop Servicing Businesses, even as complete beginners with no degree.",
    "Normally, it costs between 4K and 24K to work with Dylan, but in this webclass you get his exact methods for FREE! Register now before this is taken offline in the next few days."
  ], Io = [
    "Aspiring entrepreneurs eager to shift from employee to business owner.",
    "People tired of their jobs and wanting to move towards achieving their financial freedom goals.",
    "Anyone ready for actionable insights to take control of their lives and financial goals."
  ], qo = [
    {
      name: "Fabiano Musase",
      title: "Drop Servicing Blueprint Partner Program",
      text: "The level of detail provided in the course is great. I have learned more about business and entrepreneurship from this course than I have in any other. The tools that are provided, the strategies, and even better, the done-for-you templates and portfolio come with practical examples a student can simply copy, paste and implement. It is really up to the hard work, dedication and consistency of the individual to generate great results from this course.",
      date: "Updated Sep 5, 2024",
      link: "https://www.trustpilot.com/reviews/66d751064ea542f0b227b3d5"
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
      name: "Ashaya Gupta",
      title: "Amazing Course with Unparalleled Support!",
      text: "I am extremely satisfied with the Drop Servicing Blueprint course! The content is incredibly in-depth and packed with tons of valuable material that is well-structured and easy to follow. The course itself is worth every penny, but what truly stands out is the exclusive community you gain access to. The experts in the group are very helpful and always willing to answer any questions you may have. Plus, Dylan Sigley himself is super accessible and responsive, which is rare in online courses like this.<br><br>Thanks to the course, I’ve already bagged a couple of sales and am eager to continue expanding my business with the insights and strategies I've learned. The community support combined with the high-quality course material makes this a winning combination. Fully satisfied and highly recommend!",
      date: "Aug 27, 2024",
      link: "https://www.trustpilot.com/reviews/66cdbcb0c3878fd95a2e31a7"
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
  ], Ro = [
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
  ], E = "https://conversionratestore.github.io/projects/dropservicing/optin/img", No = (
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
          <h1>The 4 Steps to Make Money Online in 2024 (with no experience or startup costs)</h1>
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
            <div class="inputs1">
              <label><input type="text" placeholder="Enter your name..." name="name" /></label>
              <label><input type="email" placeholder="Enter email address..." name="email" /></label>
              <button class="cta register">Grab Your FREE Seat Now!</button>
            </div>
            <div class="inputs2"></div>
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
      <p>7 Figure Online Entrepreneur</p>
      <ul>
        ${$o.map((e) => (
      /* HTML */
      `<li><span></span>${e}</li>`
    )).join("")}
      </ul>
      <p>Access Dylan’s formula to learn how to start your online business and achieve financial freedom goals</p>
      <button class="cta pop">Unlock Dylan’s Formula for Free</button>
    </div>
  </section>
`
  ), Wo = (
    /* HTML */
    `
  <section id="video_block">
    <div class="crs_container">
      <h2>Hear From Our Participants</h2>
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
        ${Io.map((e) => (
      /* HTML */
      `<li><img src="${E}/check.svg" alt="check" />${e}</li>`
    )).join("")}
      </ul>
      <p>If any of the above apply to you, you're in the right place!</p>
      <p>Join your Free training to start your business and transform your career.</p>
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
        ${qo.map(
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
        ${Ro.map(
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
        <div class="inputs1">
          <label><input type="text" placeholder="Enter your name..." name="name" /></label>
          <label><input type="email" placeholder="Enter email address..." name="email" /></label>
          <button class="cta register">Grab Your FREE Seat Now!</button>
        </div>
        <div class="inputs2"></div>
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
  ), Uo = (e, i) => {
    const r = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return (
      /* HTML */
      `
    <ul class="time_list">
      ${e.map(({ date: l, schedule: s }, c) => {
        const x = new Date(l).toLocaleString("en-us", { weekday: "long" }), v = new Date(l).toLocaleString("en-us", { month: "long", day: "numeric" }), y = new Date(l).toLocaleString("en-us", { hour: "numeric", minute: "numeric" }), O = new Date(l).getTime() - (/* @__PURE__ */ new Date()).getTime(), D = new Date(l).getTime() + 1e3 * 60 * 15, on = new Date(D).toLocaleString("en-us", { hour: "numeric", minute: "numeric" }), ce = D - (/* @__PURE__ */ new Date()).getTime(), Z = Math.ceil((O < 0 ? ce : O) / (1e3 * 60));
        return (
          /* HTML */
          `
            <li class="${c === 0 ? "selected" : ""}" data-schedule="${s}">
              <span class="point"></span>
              <div>
                <p>${x}, ${v}, ${O < 0 ? on : y}</p>
                <p>${r}</p>
              </div>
              <span class="comment"
                >Starts in ${c === 0 ? Z : Math.ceil(O / (1e3 * 60 * 60))}
                ${c === 0 ? "minutes" : "hours"}</span
              >
            </li>
          `
        );
      }).join("")}
    </ul>
    <button class="cta register_mob">Select a Time to Join</button>
  `
    );
  };
  var Ve = window, In = Ve.requestAnimationFrame || Ve.webkitRequestAnimationFrame || Ve.mozRequestAnimationFrame || Ve.msRequestAnimationFrame || function(e) {
    return setTimeout(e, 16);
  }, vi = window, Ct = vi.cancelAnimationFrame || vi.mozCancelAnimationFrame || function(e) {
    clearTimeout(e);
  };
  function jt() {
    for (var e, i, r, l = arguments[0] || {}, s = 1, c = arguments.length; s < c; s++)
      if ((e = arguments[s]) !== null)
        for (i in e)
          r = e[i], l !== r && r !== void 0 && (l[i] = r);
    return l;
  }
  function kn(e) {
    return ["true", "false"].indexOf(e) >= 0 ? JSON.parse(e) : e;
  }
  function Tn(e, i, r, l) {
    if (l)
      try {
        e.setItem(i, r);
      } catch {
      }
    return r;
  }
  function Xo() {
    var e = window.tnsId;
    return window.tnsId = e ? e + 1 : 1, "tns" + window.tnsId;
  }
  function Ze() {
    var e = document, i = e.body;
    return i || (i = e.createElement("body"), i.fake = !0), i;
  }
  var ye = document.documentElement;
  function Qe(e) {
    var i = "";
    return e.fake && (i = ye.style.overflow, e.style.background = "", e.style.overflow = ye.style.overflow = "hidden", ye.appendChild(e)), i;
  }
  function Ue(e, i) {
    e.fake && (e.remove(), ye.style.overflow = i, ye.offsetHeight);
  }
  function Bo() {
    var e = document, i = Ze(), r = Qe(i), l = e.createElement("div"), s = !1;
    i.appendChild(l);
    try {
      for (var c = "(10px * 10)", x = ["calc" + c, "-moz-calc" + c, "-webkit-calc" + c], v, y = 0; y < 3; y++)
        if (v = x[y], l.style.width = v, l.offsetWidth === 100) {
          s = v.replace(c, "");
          break;
        }
    } catch {
    }
    return i.fake ? Ue(i, r) : l.remove(), s;
  }
  function na() {
    var e = document, i = Ze(), r = Qe(i), l = e.createElement("div"), s = e.createElement("div"), c = "", x = 70, v = 3, y = !1;
    l.className = "tns-t-subp2", s.className = "tns-t-ct";
    for (var O = 0; O < x; O++)
      c += "<div></div>";
    return s.innerHTML = c, l.appendChild(s), i.appendChild(l), y = Math.abs(l.getBoundingClientRect().left - s.children[x - v].getBoundingClientRect().left) < 2, i.fake ? Ue(i, r) : l.remove(), y;
  }
  function ea() {
    if (window.matchMedia || window.msMatchMedia)
      return !0;
    var e = document, i = Ze(), r = Qe(i), l = e.createElement("div"), s = e.createElement("style"), c = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", x;
    return s.type = "text/css", l.className = "tns-mq-test", i.appendChild(s), i.appendChild(l), s.styleSheet ? s.styleSheet.cssText = c : s.appendChild(e.createTextNode(c)), x = window.getComputedStyle ? window.getComputedStyle(l).position : l.currentStyle.position, i.fake ? Ue(i, r) : l.remove(), x === "absolute";
  }
  function ta(e, i) {
    var r = document.createElement("style");
    return e && r.setAttribute("media", e), i && r.setAttribute("nonce", i), document.querySelector("head").appendChild(r), r.sheet ? r.sheet : r.styleSheet;
  }
  function jn(e, i, r, l) {
    "insertRule" in e ? e.insertRule(i + "{" + r + "}", l) : e.addRule(i, r, l);
  }
  function ia(e, i) {
    "deleteRule" in e ? e.deleteRule(i) : e.removeRule(i);
  }
  function Sn(e) {
    var i = "insertRule" in e ? e.cssRules : e.rules;
    return i.length;
  }
  function oa(e, i) {
    return Math.atan2(e, i) * (180 / Math.PI);
  }
  function aa(e, i) {
    var r = !1, l = Math.abs(90 - Math.abs(e));
    return l >= 90 - i ? r = "horizontal" : l <= i && (r = "vertical"), r;
  }
  function qn(e, i, r) {
    for (var l = 0, s = e.length; l < s; l++)
      i.call(r, e[l], l);
  }
  var Ot = "classList" in document.createElement("_"), le = Ot ? function(e, i) {
    return e.classList.contains(i);
  } : function(e, i) {
    return e.className.indexOf(i) >= 0;
  }, F = Ot ? function(e, i) {
    le(e, i) || e.classList.add(i);
  } : function(e, i) {
    le(e, i) || (e.className += " " + i);
  }, sn = Ot ? function(e, i) {
    le(e, i) && e.classList.remove(i);
  } : function(e, i) {
    le(e, i) && (e.className = e.className.replace(i, ""));
  };
  function _e(e, i) {
    return e.hasAttribute(i);
  }
  function Xe(e, i) {
    return e.getAttribute(i);
  }
  function xi(e) {
    return typeof e.item < "u";
  }
  function fn(e, i) {
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
  function un(e, i) {
    e.style.display !== "none" && (e.style.display = "none");
  }
  function hn(e, i) {
    e.style.display === "none" && (e.style.display = "");
  }
  function yi(e) {
    return window.getComputedStyle(e).display !== "none";
  }
  function ke(e) {
    if (typeof e == "string") {
      var i = [e], r = e.charAt(0).toUpperCase() + e.substr(1), l = ["Webkit", "Moz", "ms", "O"];
      l.forEach(function(v) {
        (v !== "ms" || e === "transform") && i.push(v + r);
      }), e = i;
    }
    var s = document.createElement("fakeelement");
    e.length;
    for (var c = 0; c < e.length; c++) {
      var x = e[c];
      if (s.style[x] !== void 0)
        return x;
    }
    return !1;
  }
  function ra(e) {
    if (!e || !window.getComputedStyle)
      return !1;
    var i = document, r = Ze(), l = Qe(r), s = i.createElement("p"), c, x = e.length > 9 ? "-" + e.slice(0, -9).toLowerCase() + "-" : "";
    return x += "transform", r.insertBefore(s, null), s.style[e] = "translate3d(1px,1px,1px)", c = window.getComputedStyle(s).getPropertyValue(x), r.fake ? Ue(r, l) : s.remove(), c !== void 0 && c.length > 0 && c !== "none";
  }
  function _i(e, i) {
    var r = !1;
    return /^Webkit/.test(e) ? r = "webkit" + i + "End" : /^O/.test(e) ? r = "o" + i + "End" : e && (r = i.toLowerCase() + "end"), r;
  }
  var ki = !1;
  try {
    var sa = Object.defineProperty({}, "passive", {
      get: function() {
        ki = !0;
      }
    });
    window.addEventListener("test", null, sa);
  } catch {
  }
  var Ti = ki ? { passive: !0 } : !1;
  function N(e, i, r) {
    for (var l in i) {
      var s = ["touchstart", "touchmove"].indexOf(l) >= 0 && !r ? Ti : !1;
      e.addEventListener(l, i[l], s);
    }
  }
  function V(e, i) {
    for (var r in i) {
      var l = ["touchstart", "touchmove"].indexOf(r) >= 0 ? Ti : !1;
      e.removeEventListener(r, i[r], l);
    }
  }
  function la() {
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
  function ca(e, i, r, l, O, c, x) {
    var v = Math.min(c, 10), y = O.indexOf("%") >= 0 ? "%" : "px", O = O.replace(y, ""), D = Number(e.style[i].replace(r, "").replace(l, "").replace(y, "")), on = (O - D) / c * v;
    setTimeout(ce, v);
    function ce() {
      c -= v, D += on, e.style[i] = r + D + y + l, c > 0 ? setTimeout(ce, v) : x();
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
  var Be = function(e) {
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
    }, s = {}, c = e.useLocalStorage;
    if (c) {
      var x = navigator.userAgent, v = /* @__PURE__ */ new Date();
      try {
        s = r.localStorage, s ? (s.setItem(v, v), c = s.getItem(v) == v, s.removeItem(v)) : c = !1, c || (s = {});
      } catch {
        c = !1;
      }
      c && (s.tnsApp && s.tnsApp !== x && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(n) {
        s.removeItem(n);
      }), localStorage.tnsApp = x);
    }
    var y = s.tC ? kn(s.tC) : Tn(s, "tC", Bo(), c), O = s.tPL ? kn(s.tPL) : Tn(s, "tPL", na(), c), D = s.tMQ ? kn(s.tMQ) : Tn(s, "tMQ", ea(), c), on = s.tTf ? kn(s.tTf) : Tn(s, "tTf", ke("transform"), c), ce = s.t3D ? kn(s.t3D) : Tn(s, "t3D", ra(on), c), Z = s.tTDu ? kn(s.tTDu) : Tn(s, "tTDu", ke("transitionDuration"), c), nt = s.tTDe ? kn(s.tTDe) : Tn(s, "tTDe", ke("transitionDelay"), c), et = s.tADu ? kn(s.tADu) : Tn(s, "tADu", ke("animationDuration"), c), $t = s.tADe ? kn(s.tADe) : Tn(s, "tADe", ke("animationDelay"), c), Bn = s.tTE ? kn(s.tTE) : Tn(s, "tTE", _i(Z, "Transition"), c), Ei = s.tAE ? kn(s.tAE) : Tn(s, "tAE", _i(et, "Animation"), c), Si = r.console && typeof r.console.warn == "function", It = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], Ai = {};
    if (It.forEach(function(n) {
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
    var $ = e.responsive, pe = e.nested, f = e.mode === "carousel";
    if ($) {
      0 in $ && (e = jt(e, $[0]), delete $[0]);
      var qt = {};
      for (var Li in $) {
        var Te = $[Li];
        Te = typeof Te == "number" ? { items: Te } : Te, qt[Li] = Te;
      }
      $ = qt, qt = null;
    }
    function Mi(n) {
      for (var t in n)
        f || (t === "slideBy" && (n[t] = "page"), t === "edgePadding" && (n[t] = !1), t === "autoHeight" && (n[t] = !1)), t === "responsive" && Mi(n[t]);
    }
    if (f || Mi(e), !f) {
      e.axis = "horizontal", e.slideBy = "page", e.edgePadding = !1;
      var Nn = e.animateIn, tt = e.animateOut, Rt = e.animateDelay, An = e.animateNormal;
    }
    var L = e.axis === "horizontal", an = i.createElement("div"), rn = i.createElement("div"), ln, m = e.container, Nt = m.parentNode, zi = m.outerHTML, S = m.children, g = S.length, Ee, it = Pi(), Se = !1;
    $ && no(), f && (m.className += " tns-vpfix");
    var w = e.autoWidth, u = b("fixedWidth"), q = b("edgePadding"), k = b("gutter"), G = Yi(), Q = b("center"), _ = w ? 1 : Math.floor(b("items")), de = b("slideBy"), Ft = e.viewportMax || e.fixedWidthViewportWidth, Fn = b("arrowKeys"), xn = b("speed"), Ae = e.rewind, U = Ae ? !1 : e.loop, cn = b("autoHeight"), Ln = b("controls"), Hn = b("controlsText"), Mn = b("nav"), Pn = b("touch"), Wn = b("mouseDrag"), en = b("autoplay"), Ht = b("autoplayTimeout"), Yn = b("autoplayText"), Gn = b("autoplayHoverPause"), Jn = b("autoplayResetOnVisibility"), M = ta(null, b("nonce")), Le = e.lazyload, da = e.lazyloadSelector, P, fe = [], X = U ? ma() : 0, A = f ? g + X * 2 : g + X, Di = !!((u || w) && !U), ue = u ? ri() : null, Pt = !f || !U, ne = L ? "left" : "top", Kn = "", he = "", Me = /* @__PURE__ */ function() {
      return u ? function() {
        return Q && !U ? g - 1 : Math.ceil(-ue / (u + k));
      } : w ? function() {
        for (var n = 0; n < A; n++)
          if (P[n] >= -ue)
            return n;
      } : function() {
        return Q && f && !U ? g - 1 : U || f ? Math.max(0, A - Math.ceil(_)) : A - 1;
      };
    }(), p = Fi(b("startIndex")), Vn = p;
    Ni();
    var zn = 0, mn = w ? null : Me(), ot = e.preventActionWhenRunning, at = e.swipeAngle, Dn = at ? "?" : !0, Zn = !1, Wt = e.onInit, J = new la(), Qn = " tns-slider tns-" + e.mode, I = m.id || Xo(), pn = b("disable"), ze = !1, rt = e.freezable, wn = rt && !w ? Bt() : !1, De = !1, Ce = {
      click: Un,
      keydown: qa
    }, Yt = {
      click: za,
      keydown: Ra
    }, je = {
      mouseover: Oa,
      mouseout: $a
    }, Oe = { visibilitychange: ja }, $e = { keydown: Ia }, Ie = {
      touchstart: ko,
      touchmove: To,
      touchend: zt,
      touchcancel: zt
    }, qe = {
      mousedown: ko,
      mousemove: To,
      mouseup: zt,
      mouseleave: zt
    }, st = On("controls"), Gt = On("nav"), Re = w ? !0 : e.navAsThumbnails, Jt = On("autoplay"), Ci = On("touch"), ji = On("mouseDrag"), Kt = "tns-slide-active", Oi = "tns-slide-cloned", lt = "tns-complete", ct = {
      load: _a,
      error: ka
    }, Vt, Zt, Ne = e.preventScrollOnTouch === "force";
    if (st)
      var W = e.controlsContainer, $i = e.controlsContainer ? e.controlsContainer.outerHTML : "", C = e.prevButton, j = e.nextButton, fa = e.prevButton ? e.prevButton.outerHTML : "", ua = e.nextButton ? e.nextButton.outerHTML : "", Fe, He;
    if (Gt)
      var B = e.navContainer, Ii = e.navContainer ? e.navContainer.outerHTML : "", gn, yn = w ? g : So(), ee = 0, te = -1, bn = Hi(), me = bn, pt = "tns-nav-active", ge = "Carousel Page ", Qt = " (Current Slide)";
    if (Jt)
      var qi = e.autoplayDirection === "forward" ? 1 : -1, R = e.autoplayButton, Ri = e.autoplayButton ? e.autoplayButton.outerHTML : "", Pe = ["<span class='tns-visually-hidden'>", " animation</span>"], dt, dn, ft, be, ut;
    if (Ci || ji)
      var ie = {}, En = {}, ht, oe = !1, _n, Ut = L ? function(n, t) {
        return n.x - t.x;
      } : function(n, t) {
        return n.y - t.y;
      };
    w || mt(pn || wn), on && (ne = on, Kn = "translate", ce ? (Kn += L ? "3d(" : "3d(0px, ", he = L ? ", 0px, 0px)" : ", 0px)") : (Kn += L ? "X(" : "Y(", he = ")")), f && (m.className = m.className.replace("tns-vpfix", "")), ba(), va(), Ki();
    function mt(n) {
      n && (Ln = Mn = Pn = Wn = Fn = en = Gn = Jn = !1);
    }
    function Ni() {
      for (var n = f ? p - X : p; n < 0; )
        n += g;
      return n % g + 1;
    }
    function Fi(n) {
      return n = n ? Math.max(0, Math.min(U ? g - 1 : g - _, n)) : 0, f ? n + X : n;
    }
    function gt(n) {
      for (n == null && (n = p), f && (n -= X); n < 0; )
        n += g;
      return Math.floor(n % g);
    }
    function Hi() {
      var n = gt(), t;
      return t = Re ? n : u || w ? Math.ceil((n + 1) * yn / g - 1) : Math.floor(n / _), !U && f && p === mn && (t = yn - 1), t;
    }
    function ha() {
      if (w || u && !Ft)
        return g - 1;
      var n = u ? "fixedWidth" : "items", t = [];
      if ((u || e[n] < g) && t.push(e[n]), $)
        for (var o in $) {
          var a = $[o][n];
          a && (u || a < g) && t.push(a);
        }
      return t.length || t.push(0), Math.ceil(u ? Ft / Math.min.apply(null, t) : Math.max.apply(null, t));
    }
    function ma() {
      var n = ha(), t = f ? Math.ceil((n * 5 - g) / 2) : n * 4 - g;
      return t = Math.max(n, t), On("edgePadding") ? t + 1 : t;
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
      var n = q ? q * 2 - k : 0;
      return Wi(Nt) - n;
    }
    function On(n) {
      if (e[n])
        return !0;
      if ($) {
        for (var t in $)
          if ($[t][n])
            return !0;
      }
      return !1;
    }
    function b(n, t) {
      if (t == null && (t = it), n === "items" && u)
        return Math.floor((G + k) / (u + k)) || 1;
      var o = e[n];
      if ($)
        for (var a in $)
          t >= parseInt(a) && n in $[a] && (o = $[a][n]);
      return n === "slideBy" && o === "page" && (o = b("items")), !f && (n === "slideBy" || n === "items") && (o = Math.floor(o)), o;
    }
    function ga(n) {
      return y ? y + "(" + n * 100 + "% / " + A + ")" : n * 100 / A + "%";
    }
    function bt(n, t, o, a, d) {
      var h = "";
      if (n !== void 0) {
        var T = n;
        t && (T -= t), h = L ? "margin: 0 " + T + "px 0 " + n + "px;" : "margin: " + n + "px 0 " + T + "px 0;";
      } else if (t && !o) {
        var K = "-" + t + "px", nn = L ? K + " 0 0" : "0 " + K + " 0";
        h = "margin: 0 " + nn + ";";
      }
      return !f && d && Z && a && (h += ae(a)), h;
    }
    function vt(n, t, o) {
      return n ? (n + t) * A + "px" : y ? y + "(" + A * 100 + "% / " + o + ")" : A * 100 / o + "%";
    }
    function xt(n, t, o) {
      var a;
      if (n)
        a = n + t + "px";
      else {
        f || (o = Math.floor(o));
        var d = f ? A : o;
        a = y ? y + "(100% / " + d + ")" : 100 / d + "%";
      }
      return a = "width:" + a, pe !== "inner" ? a + ";" : a + " !important;";
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
      return Gi(Z, 18) + "transition-duration:" + n / 1e3 + "s;";
    }
    function Ji(n) {
      return Gi(et, 17) + "animation-duration:" + n / 1e3 + "s;";
    }
    function ba() {
      var n = "tns-outer", t = "tns-inner";
      if (On("gutter"), an.className = n, rn.className = t, an.id = I + "-ow", rn.id = I + "-iw", m.id === "" && (m.id = I), Qn += O || w ? " tns-subpixel" : " tns-no-subpixel", Qn += y ? " tns-calc" : " tns-no-calc", w && (Qn += " tns-autowidth"), Qn += " tns-" + e.axis, m.className += Qn, f ? (ln = i.createElement("div"), ln.id = I + "-mw", ln.className = "tns-ovh", an.appendChild(ln), ln.appendChild(rn)) : an.appendChild(rn), cn) {
        var o = ln || rn;
        o.className += " tns-ah";
      }
      if (Nt.insertBefore(an, m), rn.appendChild(m), qn(S, function(Y, xe) {
        F(Y, "tns-item"), Y.id || (Y.id = I + "-item" + xe), !f && An && F(Y, An), fn(Y, {
          "aria-hidden": "true",
          tabindex: "-1"
        });
      }), X) {
        for (var a = i.createDocumentFragment(), d = i.createDocumentFragment(), h = X; h--; ) {
          var T = h % g, K = S[T].cloneNode(!0);
          if (F(K, Oi), Rn(K, "id"), d.insertBefore(K, d.firstChild), f) {
            var nn = S[g - 1 - T].cloneNode(!0);
            F(nn, Oi), Rn(nn, "id"), a.appendChild(nn);
          }
        }
        m.insertBefore(a, m.firstChild), m.appendChild(d), S = m.children;
      }
    }
    function Ki() {
      if (On("autoHeight") || w || !L) {
        var n = m.querySelectorAll("img");
        qn(n, function(t) {
          var o = t.src;
          Le || (o && o.indexOf("data:image") < 0 ? (t.src = "", N(t, ct), F(t, "loading"), t.src = o) : ro(t));
        }), In(function() {
          kt(wi(n), function() {
            Vt = !0;
          });
        }), On("autoHeight") && (n = oi(p, Math.min(p + _ - 1, A - 1))), Le ? Vi() : In(function() {
          kt(wi(n), Vi);
        });
      } else
        f && Ye(), Qi(), Ui();
    }
    function Vi() {
      if (w && g > 1) {
        var n = U ? p : g - 1;
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
      (!L || w) && (po(), w ? (ue = ri(), rt && (wn = Bt()), mn = Me(), mt(pn || wn)) : ci()), f && Ye(), Qi(), Ui();
    }
    function va() {
      if (!f)
        for (var n = p, t = p + Math.min(g, _); n < t; n++) {
          var o = S[n];
          o.style.left = (n - p) * 100 / _ + "%", F(o, Nn), sn(o, An);
        }
      if (L && (O || w ? (jn(M, "#" + I + " > .tns-item", "font-size:" + r.getComputedStyle(S[0]).fontSize + ";", Sn(M)), jn(M, "#" + I, "font-size:0;", Sn(M))) : f && qn(S, function(ui, hi) {
        ui.style.marginLeft = ga(hi);
      })), D) {
        if (Z) {
          var a = ln && e.autoHeight ? ae(e.speed) : "";
          jn(M, "#" + I + "-mw", a, Sn(M));
        }
        a = bt(e.edgePadding, e.gutter, e.fixedWidth, e.speed, e.autoHeight), jn(M, "#" + I + "-iw", a, Sn(M)), f && (a = L && !w ? "width:" + vt(e.fixedWidth, e.gutter, e.items) + ";" : "", Z && (a += ae(xn)), jn(M, "#" + I, a, Sn(M))), a = L && !w ? xt(e.fixedWidth, e.gutter, e.items) : "", e.gutter && (a += wt(e.gutter)), f || (Z && (a += ae(xn)), et && (a += Ji(xn))), a && jn(M, "#" + I + " > .tns-item", a, Sn(M));
      } else {
        Ea(), rn.style.cssText = bt(q, k, u, cn), f && L && !w && (m.style.width = vt(u, k, _));
        var a = L && !w ? xt(u, k, _) : "";
        k && (a += wt(k)), a && jn(M, "#" + I + " > .tns-item", a, Sn(M));
      }
      if ($ && D)
        for (var d in $) {
          d = parseInt(d);
          var h = $[d], a = "", T = "", K = "", nn = "", Y = "", xe = w ? null : b("items", d), Ke = b("fixedWidth", d), se = b("speed", d), di = b("edgePadding", d), fi = b("autoHeight", d), we = b("gutter", d);
          Z && ln && b("autoHeight", d) && "speed" in h && (T = "#" + I + "-mw{" + ae(se) + "}"), ("edgePadding" in h || "gutter" in h) && (K = "#" + I + "-iw{" + bt(di, we, Ke, se, fi) + "}"), f && L && !w && ("fixedWidth" in h || "items" in h || u && "gutter" in h) && (nn = "width:" + vt(Ke, we, xe) + ";"), Z && "speed" in h && (nn += ae(se)), nn && (nn = "#" + I + "{" + nn + "}"), ("fixedWidth" in h || u && "gutter" in h || !f && "items" in h) && (Y += xt(Ke, we, xe)), "gutter" in h && (Y += wt(we)), !f && "speed" in h && (Z && (Y += ae(se)), et && (Y += Ji(se))), Y && (Y = "#" + I + " > .tns-item{" + Y + "}"), a = T + K + nn + Y, a && M.insertRule("@media (min-width: " + d / 16 + "em) {" + a + "}", M.cssRules.length);
        }
    }
    function Qi() {
      if (ai(), an.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + ao() + "</span>  of " + g + "</div>"), Zt = an.querySelector(".tns-liveregion .current"), Jt) {
        var n = en ? "stop" : "start";
        R ? fn(R, { "data-action": n }) : e.autoplayButtonOutput && (an.insertAdjacentHTML(Xt(e.autoplayPosition), '<button type="button" data-action="' + n + '">' + Pe[0] + n + Pe[1] + Yn[0] + "</button>"), R = an.querySelector("[data-action]")), R && N(R, { click: xo }), en && (Mt(), Gn && N(m, je), Jn && N(m, Oe));
      }
      if (Gt) {
        if (B)
          fn(B, { "aria-label": "Carousel Pagination" }), gn = B.children, qn(gn, function(T, K) {
            fn(T, {
              "data-nav": K,
              tabindex: "-1",
              "aria-label": ge + (K + 1),
              "aria-controls": I
            });
          });
        else {
          for (var t = "", o = Re ? "" : 'style="display:none"', a = 0; a < g; a++)
            t += '<button type="button" data-nav="' + a + '" tabindex="-1" aria-controls="' + I + '" ' + o + ' aria-label="' + ge + (a + 1) + '"></button>';
          t = '<div class="tns-nav" aria-label="Carousel Pagination">' + t + "</div>", an.insertAdjacentHTML(Xt(e.navPosition), t), B = an.querySelector(".tns-nav"), gn = B.children;
        }
        if (pi(), Z) {
          var d = Z.substring(0, Z.length - 18).toLowerCase(), h = "transition: all " + xn / 1e3 + "s";
          d && (h = "-" + d + "-" + h), jn(M, "[aria-controls^=" + I + "-item]", h, Sn(M));
        }
        fn(gn[bn], { "aria-label": ge + (bn + 1) + Qt }), Rn(gn[bn], "tabindex"), F(gn[bn], pt), N(B, Yt);
      }
      st && (!W && (!C || !j) && (an.insertAdjacentHTML(Xt(e.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + I + '">' + Hn[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + I + '">' + Hn[1] + "</button></div>"), W = an.querySelector(".tns-controls")), (!C || !j) && (C = W.children[0], j = W.children[1]), e.controlsContainer && fn(W, {
        "aria-label": "Carousel Navigation",
        tabindex: "0"
      }), (e.controlsContainer || e.prevButton && e.nextButton) && fn([C, j], {
        "aria-controls": I,
        tabindex: "-1"
      }), (e.controlsContainer || e.prevButton && e.nextButton) && (fn(C, { "data-controls": "prev" }), fn(j, { "data-controls": "next" })), Fe = uo(C), He = uo(j), mo(), W ? N(W, Ce) : (N(C, Ce), N(j, Ce))), ei();
    }
    function Ui() {
      if (f && Bn) {
        var n = {};
        n[Bn] = Cn, N(m, n);
      }
      Pn && N(m, Ie, e.preventScrollOnTouch), Wn && N(m, qe), Fn && N(i, $e), pe === "inner" ? J.on("outerResized", function() {
        Bi(), J.emit("innerLoaded", tn());
      }) : ($ || u || w || cn || !L) && N(r, { resize: Xi }), cn && (pe === "outer" ? J.on("innerLoaded", _t) : pn || _t()), ti(), pn ? io() : wn && to(), J.on("indexChanged", so), pe === "inner" && J.emit("innerLoaded", tn()), typeof Wt == "function" && Wt(tn()), Se = !0;
    }
    function xa() {
      if (M.disabled = !0, M.ownerNode && M.ownerNode.remove(), V(r, { resize: Xi }), Fn && V(i, $e), W && V(W, Ce), B && V(B, Yt), V(m, je), V(m, Oe), R && V(R, { click: xo }), en && clearInterval(dt), f && Bn) {
        var n = {};
        n[Bn] = Cn, V(m, n);
      }
      Pn && V(m, Ie), Wn && V(m, qe);
      var t = [zi, $i, fa, ua, Ii, Ri];
      It.forEach(function(a, d) {
        var h = a === "container" ? an : e[a];
        if (typeof h == "object" && h) {
          var T = h.previousElementSibling ? h.previousElementSibling : !1, K = h.parentNode;
          h.outerHTML = t[d], e[a] = T ? T.nextElementSibling : K.firstElementChild;
        }
      }), It = Nn = tt = Rt = An = L = an = rn = m = Nt = zi = S = g = Ee = it = w = u = q = k = G = _ = de = Ft = Fn = xn = Ae = U = cn = M = Le = P = fe = X = A = Di = ue = Pt = ne = Kn = he = Me = p = Vn = zn = mn = at = Dn = Zn = Wt = J = Qn = I = pn = ze = rt = wn = De = Ce = Yt = je = Oe = $e = Ie = qe = st = Gt = Re = Jt = Ci = ji = Kt = lt = ct = Vt = Ln = Hn = W = $i = C = j = Fe = He = Mn = B = Ii = gn = yn = ee = te = bn = me = pt = ge = Qt = en = Ht = qi = Yn = Gn = R = Ri = Jn = Pe = dt = dn = ft = be = ut = ie = En = ht = oe = _n = Ut = Pn = Wn = null;
      for (var o in this)
        o !== "rebuild" && (this[o] = null);
      Se = !1;
    }
    function Xi(n) {
      In(function() {
        Bi($n(n));
      });
    }
    function Bi(n) {
      if (Se) {
        pe === "outer" && J.emit("outerResized", tn(n)), it = Pi();
        var t, o = Ee, a = !1;
        $ && (no(), t = o !== Ee, t && J.emit("newBreakpointStart", tn(n)));
        var d, h, T = _, K = pn, nn = wn, Y = Fn, xe = Ln, Ke = Mn, se = Pn, di = Wn, fi = en, we = Gn, ui = Jn, hi = p;
        if (t) {
          var Na = u, Fa = cn, Ha = Hn, Pa = Q, mi = Yn;
          if (!D)
            var Wa = k, Ya = q;
        }
        if (Fn = b("arrowKeys"), Ln = b("controls"), Mn = b("nav"), Pn = b("touch"), Q = b("center"), Wn = b("mouseDrag"), en = b("autoplay"), Gn = b("autoplayHoverPause"), Jn = b("autoplayResetOnVisibility"), t && (pn = b("disable"), u = b("fixedWidth"), xn = b("speed"), cn = b("autoHeight"), Hn = b("controlsText"), Yn = b("autoplayText"), Ht = b("autoplayTimeout"), D || (q = b("edgePadding"), k = b("gutter"))), mt(pn), G = Yi(), (!L || w) && !pn && (po(), L || (ci(), a = !0)), (u || w) && (ue = ri(), mn = Me()), (t || u) && (_ = b("items"), de = b("slideBy"), h = _ !== T, h && (!u && !w && (mn = Me()), ni())), t && pn !== K && (pn ? io() : ya()), rt && (t || u || w) && (wn = Bt(), wn !== nn && (wn ? (si(St(Fi(0))), to()) : (wa(), a = !0))), mt(pn || wn), en || (Gn = Jn = !1), Fn !== Y && (Fn ? N(i, $e) : V(i, $e)), Ln !== xe && (Ln ? W ? hn(W) : (C && hn(C), j && hn(j)) : W ? un(W) : (C && un(C), j && un(j))), Mn !== Ke && (Mn ? (hn(B), pi()) : un(B)), Pn !== se && (Pn ? N(m, Ie, e.preventScrollOnTouch) : V(m, Ie)), Wn !== di && (Wn ? N(m, qe) : V(m, qe)), en !== fi && (en ? (R && hn(R), !dn && !be && Mt()) : (R && un(R), dn && Je())), Gn !== we && (Gn ? N(m, je) : V(m, je)), Jn !== ui && (Jn ? N(i, Oe) : V(i, Oe)), t) {
          if ((u !== Na || Q !== Pa) && (a = !0), cn !== Fa && (cn || (rn.style.height = "")), Ln && Hn !== Ha && (C.innerHTML = Hn[0], j.innerHTML = Hn[1]), R && Yn !== mi) {
            var gi = en ? 1 : 0, bi = R.innerHTML, Ao = bi.length - mi[gi].length;
            bi.substring(Ao) === mi[gi] && (R.innerHTML = bi.substring(0, Ao) + Yn[gi]);
          }
        } else
          Q && (u || w) && (a = !0);
        if ((h || u && !w) && (yn = So(), pi()), d = p !== hi, d ? (J.emit("indexChanged", tn()), a = !0) : h ? d || so() : (u || w) && (ti(), ai(), oo()), h && !f && Sa(), !pn && !wn) {
          if (t && !D && ((q !== Ya || k !== Wa) && (rn.style.cssText = bt(q, k, u, xn, cn)), L)) {
            f && (m.style.width = vt(u, k, _));
            var Ga = xt(u, k, _) + wt(k);
            ia(M, Sn(M) - 1), jn(M, "#" + I + " > .tns-item", Ga, Sn(M));
          }
          cn && _t(), a && (Ye(), Vn = p);
        }
        t && J.emit("newBreakpointEnd", tn(n));
      }
    }
    function Bt() {
      if (!u && !w) {
        var n = Q ? _ - (_ - 1) / 2 : _;
        return g <= n;
      }
      var t = u ? (u + k) * g : P[g], o = q ? G + q * 2 : G + k;
      return Q && (o -= u ? (G - u) / 2 : (G - (P[p + 1] - P[p] - k)) / 2), t <= o;
    }
    function no() {
      Ee = 0;
      for (var n in $)
        n = parseInt(n), it >= n && (Ee = n);
    }
    var ni = /* @__PURE__ */ function() {
      return U ? f ? (
        // loop + carousel
        function() {
          var n = zn, t = mn;
          n += de, t -= de, q ? (n += 1, t -= 1) : u && (G + k) % (u + k) && (t -= 1), X && (p > t ? p -= g : p < n && (p += g));
        }
      ) : (
        // loop + gallery
        function() {
          if (p > mn)
            for (; p >= zn + g; )
              p -= g;
          else if (p < zn)
            for (; p <= mn - g; )
              p += g;
        }
      ) : (
        // non-loop
        function() {
          p = Math.max(zn, Math.min(mn, p));
        }
      );
    }();
    function ei() {
      !en && R && un(R), !Mn && B && un(B), Ln || (W ? un(W) : (C && un(C), j && un(j)));
    }
    function eo() {
      en && R && hn(R), Mn && B && hn(B), Ln && (W ? hn(W) : (C && hn(C), j && hn(j)));
    }
    function to() {
      if (!De) {
        if (q && (rn.style.margin = "0px"), X)
          for (var n = "tns-transparent", t = X; t--; )
            f && F(S[t], n), F(S[A - t - 1], n);
        ei(), De = !0;
      }
    }
    function wa() {
      if (De) {
        if (q && D && (rn.style.margin = ""), X)
          for (var n = "tns-transparent", t = X; t--; )
            f && sn(S[t], n), sn(S[A - t - 1], n);
        eo(), De = !1;
      }
    }
    function io() {
      if (!ze) {
        if (M.disabled = !0, m.className = m.className.replace(Qn.substring(1), ""), Rn(m, ["style"]), U)
          for (var n = X; n--; )
            f && un(S[n]), un(S[A - n - 1]);
        if ((!L || !f) && Rn(rn, ["style"]), !f)
          for (var t = p, o = p + g; t < o; t++) {
            var a = S[t];
            Rn(a, ["style"]), sn(a, Nn), sn(a, An);
          }
        ei(), ze = !0;
      }
    }
    function ya() {
      if (ze) {
        if (M.disabled = !1, m.className += Qn, Ye(), U)
          for (var n = X; n--; )
            f && hn(S[n]), hn(S[A - n - 1]);
        if (!f)
          for (var t = p, o = p + g; t < o; t++) {
            var a = S[t], d = t < p + _ ? Nn : An;
            a.style.left = (t - p) * 100 / _ + "%", F(a, d);
          }
        eo(), ze = !1;
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
      var t = p, o, a, d;
      if (Q || q ? (w || u) && (a = -(parseFloat(n) + q), d = a + G + q * 2) : w && (a = P[p], d = a + G), w)
        P.forEach(function(nn, Y) {
          Y < A && ((Q || q) && nn <= a + 0.5 && (t = Y), d - nn >= 0.5 && (o = Y));
        });
      else {
        if (u) {
          var h = u + k;
          Q || q ? (t = Math.floor(a / h), o = Math.ceil(d / h - 1)) : o = t + Math.ceil(G / h) - 1;
        } else if (Q || q) {
          var T = _ - 1;
          if (Q ? (t -= T / 2, o = p + T / 2) : o = p + T, q) {
            var K = q * _ / G;
            t -= K, o += K;
          }
          t = Math.floor(t), o = Math.ceil(o);
        } else
          o = t + _ - 1;
        t = Math.max(t, 0), o = Math.min(o, A - 1);
      }
      return [t, o];
    }
    function ti() {
      if (Le && !pn) {
        var n = yt();
        n.push(da), oi.apply(null, n).forEach(function(t) {
          if (!le(t, lt)) {
            var o = {};
            o[Bn] = function(d) {
              d.stopPropagation();
            }, N(t, o), N(t, ct), t.src = Xe(t, "data-src");
            var a = Xe(t, "data-srcset");
            a && (t.srcset = a), F(t, "loading");
          }
        });
      }
    }
    function _a(n) {
      ro(ve(n));
    }
    function ka(n) {
      Ta(ve(n));
    }
    function ro(n) {
      F(n, "loaded"), ii(n);
    }
    function Ta(n) {
      F(n, "failed"), ii(n);
    }
    function ii(n) {
      F(n, lt), sn(n, "loading"), V(n, ct);
    }
    function oi(n, t, o) {
      var a = [];
      for (o || (o = "img"); n <= t; )
        qn(S[n].querySelectorAll(o), function(d) {
          a.push(d);
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
        !Le && o.complete && ii(o), le(o, lt) && n.splice(a, 1);
      }), !n.length))
        return t();
      In(function() {
        kt(n, t);
      });
    }
    function so() {
      ti(), ai(), oo(), mo(), Aa();
    }
    function Ea() {
      f && cn && (ln.style[Z] = xn / 1e3 + "s");
    }
    function lo(n, t) {
      for (var o = [], a = n, d = Math.min(n + t, A); a < d; a++)
        o.push(S[a].offsetHeight);
      return Math.max.apply(null, o);
    }
    function co() {
      var n = cn ? lo(p, _) : lo(X, g), t = ln || rn;
      t.style.height !== n && (t.style.height = n + "px");
    }
    function po() {
      P = [0];
      var n = L ? "left" : "top", t = L ? "right" : "bottom", o = S[0].getBoundingClientRect()[n];
      qn(S, function(a, d) {
        d && P.push(a.getBoundingClientRect()[n] - o), d === A - 1 && P.push(a.getBoundingClientRect()[t] - o);
      });
    }
    function ai() {
      var n = yt(), t = n[0], o = n[1];
      qn(S, function(a, d) {
        d >= t && d <= o ? _e(a, "aria-hidden") && (Rn(a, ["aria-hidden", "tabindex"]), F(a, Kt)) : _e(a, "aria-hidden") || (fn(a, {
          "aria-hidden": "true",
          tabindex: "-1"
        }), sn(a, Kt));
      });
    }
    function Sa() {
      for (var n = p + Math.min(g, _), t = A; t--; ) {
        var o = S[t];
        t >= p && t < n ? (F(o, "tns-moving"), o.style.left = (t - p) * 100 / _ + "%", F(o, Nn), sn(o, An)) : o.style.left && (o.style.left = "", F(o, An), sn(o, Nn)), sn(o, tt);
      }
      setTimeout(function() {
        qn(S, function(a) {
          sn(a, "tns-moving");
        });
      }, 300);
    }
    function Aa() {
      if (Mn && (bn = te >= 0 ? te : Hi(), te = -1, bn !== me)) {
        var n = gn[me], t = gn[bn];
        fn(n, {
          tabindex: "-1",
          "aria-label": ge + (me + 1)
        }), sn(n, pt), fn(t, { "aria-label": ge + (bn + 1) + Qt }), Rn(t, "tabindex"), F(t, pt), me = bn;
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
      if (!(!Ln || Ae || U)) {
        var n = Fe ? C.disabled : ho(C), t = He ? j.disabled : ho(j), o = p <= zn, a = !Ae && p >= mn;
        o && !n && Tt(Fe, C, !0), !o && n && Tt(Fe, C, !1), a && !t && Tt(He, j, !0), !a && t && Tt(He, j, !1);
      }
    }
    function Et(n, t) {
      Z && (n.style[Z] = t);
    }
    function La() {
      return u ? (u + k) * A : P[A];
    }
    function We(n) {
      n == null && (n = p);
      var t = q ? k : 0;
      return w ? (G - t - (P[n + 1] - P[n] - k)) / 2 : u ? (G - u) / 2 : (_ - 1) / 2;
    }
    function ri() {
      var n = q ? k : 0, t = G + n - La();
      return Q && !U && (t = u ? -(u + k) * (A - 1) - We() : We(A - 1) - P[A - 1]), t > 0 && (t = 0), t;
    }
    function St(n) {
      n == null && (n = p);
      var t;
      if (L && !w)
        if (u)
          t = -(u + k) * n, Q && (t += We());
        else {
          var o = on ? A : _;
          Q && (n -= We()), t = -n * 100 / o;
        }
      else
        t = -P[n], Q && w && (t += We());
      return Di && (t = Math.max(t, ue)), t += L && !w && !u ? "%" : "px", t;
    }
    function Ye(n) {
      Et(m, "0s"), si(n);
    }
    function si(n) {
      n == null && (n = St()), m.style[ne] = Kn + n + he;
    }
    function go(n, t, o, a) {
      var d = n + _;
      U || (d = Math.min(d, A));
      for (var h = n; h < d; h++) {
        var T = S[h];
        a || (T.style.left = (h - p) * 100 / _ + "%"), Rt && nt && (T.style[nt] = T.style[$t] = Rt * (h - n) / 1e3 + "s"), sn(T, t), F(T, o), a && fe.push(T);
      }
    }
    var Ma = /* @__PURE__ */ function() {
      return f ? function() {
        Et(m, ""), Z || !xn ? (si(), (!xn || !yi(m)) && Cn()) : ca(m, ne, Kn, he, St(), xn, Cn), L || ci();
      } : function() {
        fe = [];
        var n = {};
        n[Bn] = n[Ei] = Cn, V(S[Vn], n), N(S[p], n), go(Vn, Nn, tt, !0), go(p, An, Nn), (!Bn || !Ei || !xn || !yi(m)) && Cn();
      };
    }();
    function li(n, t) {
      Pt && ni(), (p !== Vn || t) && (J.emit("indexChanged", tn()), J.emit("transitionStart", tn()), cn && _t(), dn && n && ["click", "keydown"].indexOf(n.type) >= 0 && Je(), Zn = !0, Ma());
    }
    function bo(n) {
      return n.toLowerCase().replace(/-/g, "");
    }
    function Cn(n) {
      if (f || Zn) {
        if (J.emit("transitionEnd", tn(n)), !f && fe.length > 0)
          for (var t = 0; t < fe.length; t++) {
            var o = fe[t];
            o.style.left = "", $t && nt && (o.style[$t] = "", o.style[nt] = ""), sn(o, tt), F(o, An);
          }
        if (!n || !f && n.target.parentNode === m || n.target === m && bo(n.propertyName) === bo(ne)) {
          if (!Pt) {
            var a = p;
            ni(), p !== a && (J.emit("indexChanged", tn()), Ye());
          }
          pe === "inner" && J.emit("innerLoaded", tn()), Zn = !1, Vn = p;
        }
      }
    }
    function Ge(n, t) {
      if (!wn)
        if (n === "prev")
          Un(t, -1);
        else if (n === "next")
          Un(t, 1);
        else {
          if (Zn) {
            if (ot)
              return;
            Cn();
          }
          var o = gt(), a = 0;
          if (n === "first" ? a = -o : n === "last" ? a = f ? g - _ - o : g - 1 - o : (typeof n != "number" && (n = parseInt(n)), isNaN(n) || (t || (n = Math.max(0, Math.min(g - 1, n))), a = n - o)), !f && a && Math.abs(a) < _) {
            var d = a > 0 ? 1 : -1;
            a += p + a - g >= zn ? g * d : g * 2 * d * -1;
          }
          p += a, f && U && (p < zn && (p += g), p > mn && (p -= g)), gt(p) !== gt(Vn) && li(t);
        }
    }
    function Un(n, t) {
      if (Zn) {
        if (ot)
          return;
        Cn();
      }
      var o;
      if (!t) {
        n = $n(n);
        for (var a = ve(n); a !== W && [C, j].indexOf(a) < 0; )
          a = a.parentNode;
        var d = [C, j].indexOf(a);
        d >= 0 && (o = !0, t = d === 0 ? -1 : 1);
      }
      if (Ae) {
        if (p === zn && t === -1) {
          Ge("last", n);
          return;
        } else if (p === mn && t === 1) {
          Ge("first", n);
          return;
        }
      }
      t && (p += de * t, w && (p = Math.floor(p)), li(o || n && n.type === "keydown" ? n : null));
    }
    function za(n) {
      if (Zn) {
        if (ot)
          return;
        Cn();
      }
      n = $n(n);
      for (var t = ve(n), o; t !== B && !_e(t, "data-nav"); )
        t = t.parentNode;
      if (_e(t, "data-nav")) {
        var o = te = Number(Xe(t, "data-nav")), a = u || w ? o * g / yn : o * _, d = Re ? o : Math.min(Math.ceil(a), g - 1);
        Ge(d, n), bn === o && (dn && Je(), te = -1);
      }
    }
    function At() {
      dt = setInterval(function() {
        Un(null, qi);
      }, Ht), dn = !0;
    }
    function Lt() {
      clearInterval(dt), dn = !1;
    }
    function vo(n, t) {
      fn(R, { "data-action": n }), R.innerHTML = Pe[0] + n + Pe[1] + t;
    }
    function Mt() {
      At(), R && vo("stop", Yn[1]);
    }
    function Je() {
      Lt(), R && vo("start", Yn[0]);
    }
    function Da() {
      en && !dn && (Mt(), be = !1);
    }
    function Ca() {
      dn && (Je(), be = !0);
    }
    function xo() {
      dn ? (Je(), be = !0) : (Mt(), be = !1);
    }
    function ja() {
      i.hidden ? dn && (Lt(), ut = !0) : ut && (At(), ut = !1);
    }
    function Oa() {
      dn && (Lt(), ft = !0);
    }
    function $a() {
      ft && (At(), ft = !1);
    }
    function Ia(n) {
      n = $n(n);
      var t = [l.LEFT, l.RIGHT].indexOf(n.keyCode);
      t >= 0 && Un(n, t === 0 ? -1 : 1);
    }
    function qa(n) {
      n = $n(n);
      var t = [l.LEFT, l.RIGHT].indexOf(n.keyCode);
      t >= 0 && (t === 0 ? C.disabled || Un(n, -1) : j.disabled || Un(n, 1));
    }
    function wo(n) {
      n.focus();
    }
    function Ra(n) {
      n = $n(n);
      var t = i.activeElement;
      if (_e(t, "data-nav")) {
        var o = [l.LEFT, l.RIGHT, l.ENTER, l.SPACE].indexOf(n.keyCode), a = Number(Xe(t, "data-nav"));
        o >= 0 && (o === 0 ? a > 0 && wo(gn[a - 1]) : o === 1 ? a < yn - 1 && wo(gn[a + 1]) : (te = a, Ge(a, n)));
      }
    }
    function $n(n) {
      return n = n || r.event, re(n) ? n.changedTouches[0] : n;
    }
    function ve(n) {
      return n.target || r.event.srcElement;
    }
    function re(n) {
      return n.type.indexOf("touch") >= 0;
    }
    function yo(n) {
      n.preventDefault ? n.preventDefault() : n.returnValue = !1;
    }
    function _o() {
      return aa(oa(En.y - ie.y, En.x - ie.x), at) === e.axis;
    }
    function ko(n) {
      if (Zn) {
        if (ot)
          return;
        Cn();
      }
      en && dn && Lt(), oe = !0, _n && (Ct(_n), _n = null);
      var t = $n(n);
      J.emit(re(n) ? "touchStart" : "dragStart", tn(n)), !re(n) && ["img", "a"].indexOf(fo(ve(n))) >= 0 && yo(n), En.x = ie.x = t.clientX, En.y = ie.y = t.clientY, f && (ht = parseFloat(m.style[ne].replace(Kn, "")), Et(m, "0s"));
    }
    function To(n) {
      if (oe) {
        var t = $n(n);
        En.x = t.clientX, En.y = t.clientY, f ? _n || (_n = In(function() {
          Eo(n);
        })) : (Dn === "?" && (Dn = _o()), Dn && (Ne = !0)), (typeof n.cancelable != "boolean" || n.cancelable) && Ne && n.preventDefault();
      }
    }
    function Eo(n) {
      if (!Dn) {
        oe = !1;
        return;
      }
      if (Ct(_n), oe && (_n = In(function() {
        Eo(n);
      })), Dn === "?" && (Dn = _o()), Dn) {
        !Ne && re(n) && (Ne = !0);
        try {
          n.type && J.emit(re(n) ? "touchMove" : "dragMove", tn(n));
        } catch {
        }
        var t = ht, o = Ut(En, ie);
        if (!L || u || w)
          t += o, t += "px";
        else {
          var a = on ? o * _ * 100 / ((G + k) * A) : o * 100 / (G + k);
          t += a, t += "%";
        }
        m.style[ne] = Kn + t + he;
      }
    }
    function zt(n) {
      if (oe) {
        _n && (Ct(_n), _n = null), f && Et(m, ""), oe = !1;
        var t = $n(n);
        En.x = t.clientX, En.y = t.clientY;
        var o = Ut(En, ie);
        if (Math.abs(o)) {
          if (!re(n)) {
            var a = ve(n);
            N(a, { click: function d(h) {
              yo(h), V(a, { click: d });
            } });
          }
          f ? _n = In(function() {
            if (L && !w) {
              var d = -o * _ / (G + k);
              d = o > 0 ? Math.floor(d) : Math.ceil(d), p += d;
            } else {
              var h = -(ht + o);
              if (h <= 0)
                p = zn;
              else if (h >= P[A - 1])
                p = mn;
              else
                for (var T = 0; T < A && h >= P[T]; )
                  p = T, h > P[T] && o < 0 && (p += 1), T++;
            }
            li(n, o), J.emit(re(n) ? "touchEnd" : "dragEnd", tn(n));
          }) : Dn && Un(n, o > 0 ? -1 : 1);
        }
      }
      e.preventScrollOnTouch === "auto" && (Ne = !1), at && (Dn = "?"), en && !dn && At();
    }
    function ci() {
      var n = ln || rn;
      n.style.height = P[p + _] - P[p] + "px";
    }
    function So() {
      var n = u ? (u + k) * g / G : g / _;
      return Math.min(Math.ceil(n), g);
    }
    function pi() {
      if (!(!Mn || Re) && yn !== ee) {
        var n = ee, t = yn, o = hn;
        for (ee > yn && (n = yn, t = ee, o = un); n < t; )
          o(gn[n]), n++;
        ee = yn;
      }
    }
    function tn(n) {
      return {
        container: m,
        slideItems: S,
        navContainer: B,
        navItems: gn,
        controlsContainer: W,
        hasControls: st,
        prevButton: C,
        nextButton: j,
        items: _,
        slideBy: de,
        cloneCount: X,
        slideCount: g,
        slideCountNew: A,
        index: p,
        indexCached: Vn,
        displayIndex: Ni(),
        navCurrentIndex: bn,
        navCurrentIndexCached: me,
        pages: yn,
        pagesCached: ee,
        sheet: M,
        isOn: Se,
        event: n || {}
      };
    }
    return {
      version: "2.9.4",
      getInfo: tn,
      events: J,
      goTo: Ge,
      play: Da,
      pause: Ca,
      isOn: Se,
      updateSliderHeight: co,
      refresh: Ki,
      destroy: xa,
      rebuild: function() {
        return Be(jt(e, Ai));
      }
    };
  };
  jo("opt_in"), H("exp_optin_loaded", "Loaded", "loaded"), Co([
    "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css",
    "https://fast.wistia.com/assets/external/E-v1.js"
  ]), zo({ name: "Opt in page", dev: "YK" });
  class pa {
    constructor() {
      Mo("body", () => {
        z("body").elements[0].insertAdjacentHTML(
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
      z(".containerWrapper").elements[0].insertAdjacentHTML("afterend", '<div class="crs_landing"></div>');
      const i = z(".crs_landing").elements[0];
      i.insertAdjacentHTML("afterbegin", No), i.insertAdjacentHTML("beforeend", Fo), i.insertAdjacentHTML("beforeend", Ho), i.insertAdjacentHTML("beforeend", Po), i.insertAdjacentHTML("beforeend", Wo), i.insertAdjacentHTML("beforeend", Yo), i.insertAdjacentHTML("beforeend", Go), i.insertAdjacentHTML("beforeend", Jo), i.insertAdjacentHTML("beforeend", Ko), i.insertAdjacentHTML("beforeend", Vo), i.insertAdjacentHTML("beforeend", Zo), i.insertAdjacentHTML("beforeend", Qo);
    }
    setActions() {
      z(".inputs2").on("click", "li", function() {
        if (!this.classList.contains("selected")) {
          this.closest(".inputs2").querySelector(".selected").classList.remove("selected"), this.classList.add("selected");
          const s = this.getAttribute("data-schedule");
          H("exp_optin_popup_cta_time", `Select time ${s}`, "click", "Popup after click on CTA");
        }
      }), z("form").on("submit", async function(s) {
        s.preventDefault();
        const c = this.querySelector('input[name="name"]').value, x = this.querySelector('input[name="email"]').value;
        let v = !0;
        if ((!c || c.trim() === "") && (this.querySelector('input[name="name"]').closest("label").classList.add("error"), v = !1), (!x || x.trim() === "" || !x.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) && (this.querySelector('input[name="email"]').closest("label").classList.add("error"), v = !1), !v)
          return;
        this.closest("#main_block") ? H(
          `exp_optin_fs_button_${this.querySelector(".inputs2").classList.contains("active") ? "step_2" : "step_1"}`,
          "Grab Your FREE Seat Now",
          "click",
          `First screen form ${this.querySelector(".inputs2").classList.contains("active") ? "step 2" : "step 1"}`
        ) : H(
          `exp_optin_popup_cta_button_${this.querySelector(".inputs2").classList.contains("active") ? "step_2" : "step_1"}`,
          "Grab Your FREE Seat Now",
          "click",
          `Popup after click on CTA ${this.querySelector(".inputs2").classList.contains("active") ? "step 2" : "step 1"}`
        );
        const y = (/* @__PURE__ */ new Date()).getTimezoneOffset() / 60, O = `GMT${y > 0 ? "-" : "+"}${Math.abs(y)}`;
        if (this.querySelector(".inputs2").classList.contains("active")) {
          const D = z(".inputs2 .selected").elements[0].getAttribute("data-schedule");
          fetch("https://conversionrate.top/api/dropservicing/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              api_key: "8f4aff29-94fa-4197-a1a2-4a3c03ede2e0",
              webinarId: window.innerWidth > 768 ? 74 : 75,
              name: c,
              email: x,
              schedule: D
            })
          }).then((on) => on.json()).then((on) => {
            window.location.href = on.user.thank_you_url;
          });
        } else
          try {
            const D = await fetch("https://conversionrate.top/api/dropservicing/get-schedules", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                webinarId: window.innerWidth > 768 ? 74 : 75,
                timezone: O
              })
            }).then((on) => on.json());
            console.log(D), console.log(this), this.querySelector(".inputs1").style.display = "none", this.querySelector(".inputs2").innerHTML = Uo(D.webinar.schedules, D.webinar.timezone), this.querySelector(".inputs2").classList.add("active");
          } catch (D) {
            console.log(D);
          }
      }), z("form input").on("input", function() {
        this.closest("label").classList.remove("error");
      }), z('input[name="name"]').on("change", function() {
        !!this.closest("#main_block") ? H("exp_optin_fs_name", "Enter your name", "input", "First screen form") : H("exp_optin_popup_cta_name", "Enter your name", "input", "Popup after click on CTA");
      }), z('input[name="email"]').on("change", function() {
        !!this.closest("#main_block") ? H("exp_optin_fs_email", "Enter email address", "input", "First screen form") : H("exp_optin_popup_cta_email", "Enter email address", "input", "Popup after click on CTA");
      }), z(".question").on("click", function() {
        const s = this.innerText;
        if (this.classList.contains("active")) {
          this.classList.remove("active"), H("exp_optin_faq_close", `Close question. ${s}`, "click", "Frequently asked questions");
          return;
        }
        z(".question.active").removeClass("active"), this.classList.toggle("active"), H("exp_optin_faq_open", `Open question. ${s}`, "click", "Frequently asked questions");
      }), z(".cta.pop").on("click", function() {
        z(".crs_video_popup").elements[0].classList.contains("active") && z(".crs_video_popup .video *:not(.crs_close)").elements.forEach((s) => s.remove()), z(".crs_video_popup").elements[0].classList.remove("active"), z(".crs_popup_form").elements[0].classList.add("active"), this.closest("#last_cta") && H("exp_optin_future_cta", "Join the exclusive training", "click", "Your Future Starts Here"), this.closest("#training_for") && H("exp_optin_who_cta", "Join The FREE Training Now", "click", "Who is the Training for"), this.closest("#host_block") && H("exp_optin_host_cta", "Unlock Dylan’s Formula for Free ", "click", "Your Host: Dylan Sydney"), this.closest("#bonus_block") && H("exp_optin_bonuses_cta", "Grab Your FREE Seat Now", "click", "Exclusive Bonuses"), this.closest(".crs_video_popup") && H("exp_optin_popup_review_cta", "Grab Your FREE Seat Now", "click", "Popup after review"), this.closest("#main_block") && H("exp_optin_fs_button_mobile", "Grab Your FREE Seat Now", "click", "First screen form");
      }), z(".crs_popup_form .close").on("click", function() {
        z(".crs_popup_form").elements[0].classList.remove("active"), z(".crs_popup_form .inputs1").elements[0].style.display = "block", z(".crs_popup_form .inputs2").removeClass("active");
      }), z("#base_review .slide").on("click", function() {
        const s = this.querySelector(".slide>p").textContent, c = this.getAttribute("data-video"), x = z(`.video_slide[data-video="${c}"] .video`).elements[0].cloneNode(!0);
        z(".crs_video_popup .video").elements[0].appendChild(x), z(".crs_video_popup").elements[0].classList.add("active"), H("exp_optin_why_join_review", `Open review. ${s}`, "click", "Why Join This Webinar"), z(".crs_video_popup .wistia_embed").on("click", function() {
          H("exp_optin_popup_review_video", `Play video ${s}`, "click", "Popup after review");
        });
      }), z(".crs_video_popup .crs_close").on("click", function() {
        z(".crs_video_popup .video *:not(.crs_close)").elements.forEach((s) => s.remove()), z(".crs_video_popup").elements[0].classList.remove("active");
      });
      const i = Be({
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
      }), r = Be({
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
        var x, v;
        const c = s.navItems;
        Array.from(c).forEach((y) => y.classList.remove("tns-nav-near")), (x = c[s.index - 1]) == null || x.classList.add("tns-nav-near"), (v = c[s.index + 1]) == null || v.classList.add("tns-nav-near");
      }), r.getInfo().slideItems[0].classList.add("tns-current"), r.getInfo().navItems[1].classList.add("tns-nav-near"), r.events.on("indexChanged", function(s) {
        var y, O;
        const c = s.slideItems, x = s.navItems;
        Array.from(x).forEach((D) => D.classList.remove("tns-nav-near")), Array.from(c).forEach((D) => D.classList.remove("tns-current")), (y = x[s.index - 1]) == null || y.classList.add("tns-nav-near"), (O = x[s.index + 1]) == null || O.classList.add("tns-nav-near"), c[s.index].classList.add("tns-current");
      }), Be({
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
            onReady: function(c) {
              c.bind("play", function() {
                c.container.closest(".video_slide") && H(
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
      vn(".crs_video_popup", "exp_optin_popup_review_view", "Popup after review"), vn(".crs_popup_form", "exp_optin_popup_cta_view", "Popup after click on CTA"), vn("#base_review", "exp_optin_why_join_view", "Why Join This Webinar"), vn("#bonus_block", "exp_optin_bonuses_view", "Exclusive Bonuses"), vn("#host_block", "exp_optin_host_view", "Your Host: Dylan Sydney"), vn("#video_block", "exp_optin_hear_view", "Hear from Our Participants"), vn("#training_for", "exp_optin_who_view", "Who is the Training for"), vn("#trust_pilot", "exp_optin_trustscore_view", "TrustScore"), vn("#faq_block", "exp_optin_faq_view", "Frequently asked questions"), vn("#last_cta", "exp_optin_future_view", "Your Future Starts Here"), vn(".crs_popup_form .inputs2", "exp_optin_popup_cta_time_view_step2", "Popup after click on CTA"), vn("#main_block .inputs2", "exp_optin_main_form_view_step2", "First screen form");
    }
  }
  window.location.href.includes("training") && new pa();
})();
//# sourceMappingURL=index.js.map
