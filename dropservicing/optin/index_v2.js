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
}/*# sourceMappingURL=style.css.map */`, H = (e, t, a, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: t,
      event_type: a,
      event_loc: s
    }), Xn(`Event: ${e} | ${t} | ${a} | ${s}`, "success");
  }, zo = (e, t) => {
    const a = setInterval(() => {
      const s = document.querySelector(e);
      s && (clearInterval(a), t(s));
    }, 100);
  }, Mo = ({ name: e, dev: t }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class Do {
    constructor(t) {
      this.elements = typeof t == "string" ? document.querySelectorAll(t) : t instanceof Element ? [t] : t;
    }
    on(t, a, s) {
      return typeof a == "function" && (s = a, a = ""), this.elements.forEach(function(l) {
        l.addEventListener(t, function(p) {
          var _;
          if (a !== "") {
            let b = (_ = p.target) == null ? void 0 : _.closest(a);
            b && (s == null || s.call(b, p));
          } else
            s == null || s.call(l, p);
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
      return this.elements.forEach((a, s) => {
        t(a, s);
      }), this;
    }
    style(t, a) {
      const s = t.split("-").map((l, p) => p === 0 ? l : l.charAt(0).toUpperCase() + l.slice(1)).join("");
      return this.elements.forEach(function(l) {
        l.style[s] = a;
      }), this;
    }
  }
  const z = (e) => new Do(e), Co = async (e) => {
    const t = (a) => new Promise((s, l) => {
      const p = a.split(".").pop();
      if (p === "js") {
        if (Array.from(document.scripts).map((y) => y.src.toLowerCase()).includes(a.toLowerCase()))
          return Xn(`Script ${a} allready downloaded!`, "success"), s("");
        const b = document.createElement("script");
        b.src = a, b.onload = s, b.onerror = l, document.head.appendChild(b);
      } else if (p === "css") {
        if (Array.from(document.styleSheets).map((y) => {
          var F;
          return (F = y.href) == null ? void 0 : F.toLowerCase();
        }).includes(a.toLowerCase()))
          return Xn(`Style ${a} allready downloaded!`, "success"), s("");
        const b = document.createElement("link");
        b.rel = "stylesheet", b.href = a, b.onload = s, b.onerror = l, document.head.appendChild(b);
      }
    });
    for (const a of e)
      Xn(a), await t(a), Xn(`Loaded librari ${a}`);
    Xn("All libraries loaded!", "success");
  }, Oo = (e) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, bn = (e, t, a, s, l = 1e3, p = 0.5) => {
    let _, b;
    if (_ = new IntersectionObserver(
      function(y) {
        y[0].isIntersecting === !0 ? b = setTimeout(() => {
          H(
            t,
            y[0].target.dataset.visible || s || "",
            "view",
            a
          ), _.disconnect();
        }, l) : (Xn("Element is not fully visible", "warn"), clearTimeout(b));
      },
      { threshold: [p] }
    ), typeof e == "string") {
      const y = document.querySelector(e);
      y && _.observe(y);
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
  }, gt = [
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
  ], Ro = [
    "<b>The Drop Servicing Method:</b> Our new strategy for earning online without significant startup costs.",
    "<b>A Simple 4-Step Process:</b> Start your online business journey with just a laptop and internet connection.",
    "<b>Escape The 9-5 Grind:</b> How to transition from traditional employment to being your own boss.",
    "<b>The 2024 Opportunity:</b> How to capitalize on this emerging trend to achieve your financial freedom goals.",
    "<b>Real Success Stories:</b> Get inspired by participants who left their jobs to build successful businesses, gaining the freedom to live on their own terms."
  ], No = [
    'Dylan Sigley was a broke college student working in a call center when he discovered a new online business method called "Drop Servicing".',
    "Soon after, he built a successful online business, allowing him to quit his job and earn 6-figures while traveling the world and working only 5 hours a week from his laptop.",
    "This FREE webclass skips the nonsense to show you, step-by-step, how Dylan grew his business so quickly and how hundreds of others have used the same process to successfully start their own businesses.",
    "Dylan has one of the best track records in the industry for helping people around the world build Drop Servicing Businesses, even as complete beginners with no degree.",
    "Normally, it costs between 4K and 24K to work with Dylan, but in this webclass you get his exact methods for FREE! Register now before this is taken offline in the next few days."
  ], W = "https://conversionratestore.github.io/projects/dropservicing/optin/img", jo = (
    /* HTML */
    `
  <section id="main_block">
    <div class="wrapper">
      <header>
        <img src="${W}/logo.png" alt="logo" />
      </header>
      <div class="flex">
        <div class="info">
          <div class="tp_label">
            <img src="${W}/trustpilot.svg" alt="stars" />
            <p>
              TrustScore&nbsp;
              <img src="${W}/trustpilot_star.svg" alt="star" />
              <b>4.8/5</b>&nbsp;<span>300+ Reviews</span>
            </p>
          </div>
          <h1>The 4 Steps to Make Money Online in 2024 (with no experience or startup costs)</h1>
          <p>Discover how to go from overworked employee to successful entrepreneur in a FREE Webinar!</p>
          <button class="cta pop mobile">Grab Your FREE Seat Now!</button>
          <div class="youll_list">
            <p>In this FREE training, you’ll learn: <img src="${W}/arrow.svg" alt="arrow" class="desktop" /></p>
            <ul>
              ${Ro.map(
      (e) => (
        /* HTML */
        `<li>
                      <img src="${W}/check.svg" alt="check" />
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
                <img src="${W}/dollar.svg" alt="dollar" />
                Free
              </span>
              <span>
                <img src="${W}/frame.svg" alt="frame" />
                Live Training
              </span>

              <!--<span>
                <img src="${W}/calendar.svg" alt="calendar" />
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
            <p><img src="${W}/present.png" alt="gift" /> Exclusive bonuses!</p>
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
        ${gt.map(
      ({ name: e, review: t, img: a, videoId: s }) => (
        /* HTML */
        `
              <li>
                <div class="slide" data-video="${s}">
                  <div>
                    <div class="img">
                      <img src="${W}/${a}" alt="${e}" />
                    </div>
                    <p><b>${e}</b><img src="${W}/rating_stars.png" alt="stars" /></p>
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
      <img src="${W}/bonus.png" alt="bonus" />
    </div>
  </section>
`
  ), $o = (
    /* HTML */
    `
  <section id="host_block" class="crs_container">
    <div class="img">
      <img src="${W}/founder.jpg" alt="dylan" class="desktop" />
      <img src="${W}/founder_mob.jpg" alt="dylan" class="mobile" />
      <a href="https://dropservicing.com/homepage"></a>
    </div>
    <div class="info">
      <h2>Your Host: Dylan Sigley</h2>
      <p>7 Figure Online Entrepreneur</p>
      <ul>
        ${No.map((e) => (
      /* HTML */
      `<li><span></span>${e}</li>`
    )).join("")}
      </ul>
      <p>Access Dylan’s formula to learn how to start your online business and achieve financial freedom goals</p>
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
            <img src="${W}/dollar.svg" alt="dollar" />
            Free
          </span>
          <span>
            <img src="${W}/frame.svg" alt="frame" />
            Live Training
          </span>
          <!--<span>
            <img src="${W}/calendar.svg" alt="calendar" />
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
        <p><img src="${W}/present.png" alt="gift" /> Exclusive bonuses!</p>
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
          <img src="${W}/trustpilot.svg" alt="trustpilot" />TrustScore&nbsp;<img
            src="${W}/trustpilot_star.svg"
            alt="star"
          /><span>4.8</span>
        </p>
      </div>
      <button class="cta pop">Grab Your FREE Seat Now!</button>
    </div>
  </div>
`
  ), Yo = (e, t) => {
    const a = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return (
      /* HTML */
      `
    <ul class="time_list">
      ${e.map(({ date: s, schedule: l }, p) => {
        const _ = new Date(s).toLocaleString("en-us", { weekday: "long" }), b = new Date(s).toLocaleString("en-us", { month: "long", day: "numeric" }), y = new Date(s).toLocaleString("en-us", { hour: "numeric", minute: "numeric" }), F = new Date(s).getTime() - (/* @__PURE__ */ new Date()).getTime(), $ = new Date(s).getTime() + 1e3 * 60 * 15, on = new Date($).toLocaleString("en-us", { hour: "numeric", minute: "numeric" }), ce = $ - (/* @__PURE__ */ new Date()).getTime(), J = Math.ceil((F < 0 ? ce : F) / (1e3 * 60));
        return (
          /* HTML */
          `
            <li class="${p === 0 ? "selected" : ""}" data-schedule="${l}">
              <span class="point"></span>
              <div>
                <p>${_}, ${b}, ${F < 0 ? on : y}</p>
                <p>${a}</p>
              </div>
              <span class="comment"
                >Starts in ${p === 0 ? J : Math.ceil(F / (1e3 * 60 * 60))}
                ${p === 0 ? "minutes" : "hours"}</span
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
  var Ze = window, jn = Ze.requestAnimationFrame || Ze.webkitRequestAnimationFrame || Ze.mozRequestAnimationFrame || Ze.msRequestAnimationFrame || function(e) {
    return setTimeout(e, 16);
  }, xt = window, Mi = xt.cancelAnimationFrame || xt.mozCancelAnimationFrame || function(e) {
    clearTimeout(e);
  };
  function Di() {
    for (var e, t, a, s = arguments[0] || {}, l = 1, p = arguments.length; l < p; l++)
      if ((e = arguments[l]) !== null)
        for (t in e)
          a = e[t], s !== a && a !== void 0 && (s[t] = a);
    return s;
  }
  function kn(e) {
    return ["true", "false"].indexOf(e) >= 0 ? JSON.parse(e) : e;
  }
  function Tn(e, t, a, s) {
    if (s)
      try {
        e.setItem(t, a);
      } catch {
      }
    return a;
  }
  function Go() {
    var e = window.tnsId;
    return window.tnsId = e ? e + 1 : 1, "tns" + window.tnsId;
  }
  function Je() {
    var e = document, t = e.body;
    return t || (t = e.createElement("body"), t.fake = !0), t;
  }
  var we = document.documentElement;
  function Qe(e) {
    var t = "";
    return e.fake && (t = we.style.overflow, e.style.background = "", e.style.overflow = we.style.overflow = "hidden", we.appendChild(e)), t;
  }
  function Ue(e, t) {
    e.fake && (e.remove(), we.style.overflow = t, we.offsetHeight);
  }
  function Io() {
    var e = document, t = Je(), a = Qe(t), s = e.createElement("div"), l = !1;
    t.appendChild(s);
    try {
      for (var p = "(10px * 10)", _ = ["calc" + p, "-moz-calc" + p, "-webkit-calc" + p], b, y = 0; y < 3; y++)
        if (b = _[y], s.style.width = b, s.offsetWidth === 100) {
          l = b.replace(p, "");
          break;
        }
    } catch {
    }
    return t.fake ? Ue(t, a) : s.remove(), l;
  }
  function Ko() {
    var e = document, t = Je(), a = Qe(t), s = e.createElement("div"), l = e.createElement("div"), p = "", _ = 70, b = 3, y = !1;
    s.className = "tns-t-subp2", l.className = "tns-t-ct";
    for (var F = 0; F < _; F++)
      p += "<div></div>";
    return l.innerHTML = p, s.appendChild(l), t.appendChild(s), y = Math.abs(s.getBoundingClientRect().left - l.children[_ - b].getBoundingClientRect().left) < 2, t.fake ? Ue(t, a) : s.remove(), y;
  }
  function Vo() {
    if (window.matchMedia || window.msMatchMedia)
      return !0;
    var e = document, t = Je(), a = Qe(t), s = e.createElement("div"), l = e.createElement("style"), p = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", _;
    return l.type = "text/css", s.className = "tns-mq-test", t.appendChild(l), t.appendChild(s), l.styleSheet ? l.styleSheet.cssText = p : l.appendChild(e.createTextNode(p)), _ = window.getComputedStyle ? window.getComputedStyle(s).position : s.currentStyle.position, t.fake ? Ue(t, a) : s.remove(), _ === "absolute";
  }
  function Zo(e, t) {
    var a = document.createElement("style");
    return e && a.setAttribute("media", e), t && a.setAttribute("nonce", t), document.querySelector("head").appendChild(a), a.sheet ? a.sheet : a.styleSheet;
  }
  function On(e, t, a, s) {
    "insertRule" in e ? e.insertRule(t + "{" + a + "}", s) : e.addRule(t, a, s);
  }
  function Jo(e, t) {
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
    var a = !1, s = Math.abs(90 - Math.abs(e));
    return s >= 90 - t ? a = "horizontal" : s <= t && (a = "vertical"), a;
  }
  function qn(e, t, a) {
    for (var s = 0, l = e.length; s < l; s++)
      t.call(a, e[s], s);
  }
  var Ci = "classList" in document.createElement("_"), le = Ci ? function(e, t) {
    return e.classList.contains(t);
  } : function(e, t) {
    return e.className.indexOf(t) >= 0;
  }, q = Ci ? function(e, t) {
    le(e, t) || e.classList.add(t);
  } : function(e, t) {
    le(e, t) || (e.className += " " + t);
  }, sn = Ci ? function(e, t) {
    le(e, t) && e.classList.remove(t);
  } : function(e, t) {
    le(e, t) && (e.className = e.className.replace(t, ""));
  };
  function ye(e, t) {
    return e.hasAttribute(t);
  }
  function Xe(e, t) {
    return e.getAttribute(t);
  }
  function bt(e) {
    return typeof e.item < "u";
  }
  function dn(e, t) {
    if (e = bt(e) || e instanceof Array ? e : [e], Object.prototype.toString.call(t) === "[object Object]")
      for (var a = e.length; a--; )
        for (var s in t)
          e[a].setAttribute(s, t[s]);
  }
  function Fn(e, t) {
    e = bt(e) || e instanceof Array ? e : [e], t = t instanceof Array ? t : [t];
    for (var a = t.length, s = e.length; s--; )
      for (var l = a; l--; )
        e[s].removeAttribute(t[l]);
  }
  function vt(e) {
    for (var t = [], a = 0, s = e.length; a < s; a++)
      t.push(e[a]);
    return t;
  }
  function un(e, t) {
    e.style.display !== "none" && (e.style.display = "none");
  }
  function hn(e, t) {
    e.style.display === "none" && (e.style.display = "");
  }
  function _t(e) {
    return window.getComputedStyle(e).display !== "none";
  }
  function ke(e) {
    if (typeof e == "string") {
      var t = [e], a = e.charAt(0).toUpperCase() + e.substr(1), s = ["Webkit", "Moz", "ms", "O"];
      s.forEach(function(b) {
        (b !== "ms" || e === "transform") && t.push(b + a);
      }), e = t;
    }
    var l = document.createElement("fakeelement");
    e.length;
    for (var p = 0; p < e.length; p++) {
      var _ = e[p];
      if (l.style[_] !== void 0)
        return _;
    }
    return !1;
  }
  function Xo(e) {
    if (!e || !window.getComputedStyle)
      return !1;
    var t = document, a = Je(), s = Qe(a), l = t.createElement("p"), p, _ = e.length > 9 ? "-" + e.slice(0, -9).toLowerCase() + "-" : "";
    return _ += "transform", a.insertBefore(l, null), l.style[e] = "translate3d(1px,1px,1px)", p = window.getComputedStyle(l).getPropertyValue(_), a.fake ? Ue(a, s) : l.remove(), p !== void 0 && p.length > 0 && p !== "none";
  }
  function wt(e, t) {
    var a = !1;
    return /^Webkit/.test(e) ? a = "webkit" + t + "End" : /^O/.test(e) ? a = "o" + t + "End" : e && (a = t.toLowerCase() + "end"), a;
  }
  var yt = !1;
  try {
    var Bo = Object.defineProperty({}, "passive", {
      get: function() {
        yt = !0;
      }
    });
    window.addEventListener("test", null, Bo);
  } catch {
  }
  var kt = yt ? { passive: !0 } : !1;
  function j(e, t, a) {
    for (var s in t) {
      var l = ["touchstart", "touchmove"].indexOf(s) >= 0 && !a ? kt : !1;
      e.addEventListener(s, t[s], l);
    }
  }
  function Z(e, t) {
    for (var a in t) {
      var s = ["touchstart", "touchmove"].indexOf(a) >= 0 ? kt : !1;
      e.removeEventListener(a, t[a], s);
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
  function er(e, t, a, s, F, p, _) {
    var b = Math.min(p, 10), y = F.indexOf("%") >= 0 ? "%" : "px", F = F.replace(y, ""), $ = Number(e.style[t].replace(a, "").replace(s, "").replace(y, "")), on = (F - $) / p * b;
    setTimeout(ce, b);
    function ce() {
      p -= b, $ += on, e.style[t] = a + $ + y + s, p > 0 ? setTimeout(ce, b) : _();
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
  var Tt = function(e) {
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
    var t = document, a = window, s = {
      ENTER: 13,
      SPACE: 32,
      LEFT: 37,
      RIGHT: 39
    }, l = {}, p = e.useLocalStorage;
    if (p) {
      var _ = navigator.userAgent, b = /* @__PURE__ */ new Date();
      try {
        l = a.localStorage, l ? (l.setItem(b, b), p = l.getItem(b) == b, l.removeItem(b)) : p = !1, p || (l = {});
      } catch {
        p = !1;
      }
      p && (l.tnsApp && l.tnsApp !== _ && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(n) {
        l.removeItem(n);
      }), localStorage.tnsApp = _);
    }
    var y = l.tC ? kn(l.tC) : Tn(l, "tC", Io(), p), F = l.tPL ? kn(l.tPL) : Tn(l, "tPL", Ko(), p), $ = l.tMQ ? kn(l.tMQ) : Tn(l, "tMQ", Vo(), p), on = l.tTf ? kn(l.tTf) : Tn(l, "tTf", ke("transform"), p), ce = l.t3D ? kn(l.t3D) : Tn(l, "t3D", Xo(on), p), J = l.tTDu ? kn(l.tTDu) : Tn(l, "tTDu", ke("transitionDuration"), p), Be = l.tTDe ? kn(l.tTDe) : Tn(l, "tTDe", ke("transitionDelay"), p), ni = l.tADu ? kn(l.tADu) : Tn(l, "tADu", ke("animationDuration"), p), Oi = l.tADe ? kn(l.tADe) : Tn(l, "tADe", ke("animationDelay"), p), Bn = l.tTE ? kn(l.tTE) : Tn(l, "tTE", wt(J, "Transition"), p), Et = l.tAE ? kn(l.tAE) : Tn(l, "tAE", wt(ni, "Animation"), p), St = a.console && typeof a.console.warn == "function", Ri = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], Lt = {};
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
    var C = e.responsive, pe = e.nested, d = e.mode === "carousel";
    if (C) {
      0 in C && (e = Di(e, C[0]), delete C[0]);
      var Ni = {};
      for (var At in C) {
        var Te = C[At];
        Te = typeof Te == "number" ? { items: Te } : Te, Ni[At] = Te;
      }
      C = Ni, Ni = null;
    }
    function zt(n) {
      for (var i in n)
        d || (i === "slideBy" && (n[i] = "page"), i === "edgePadding" && (n[i] = !1), i === "autoHeight" && (n[i] = !1)), i === "responsive" && zt(n[i]);
    }
    if (d || zt(e), !d) {
      e.axis = "horizontal", e.slideBy = "page", e.edgePadding = !1;
      var $n = e.animateIn, ei = e.animateOut, ji = e.animateDelay, Ln = e.animateNormal;
    }
    var L = e.axis === "horizontal", rn = t.createElement("div"), an = t.createElement("div"), ln, m = e.container, qi = m.parentNode, Mt = m.outerHTML, E = m.children, g = E.length, Ee, ii = Pt(), Se = !1;
    C && no(), d && (m.className += " tns-vpfix");
    var v = e.autoWidth, u = x("fixedWidth"), R = x("edgePadding"), k = x("gutter"), I = Gt(), Q = x("center"), w = v ? 1 : Math.floor(x("items")), fe = x("slideBy"), Fi = e.viewportMax || e.fixedWidthViewportWidth, Hn = x("arrowKeys"), vn = x("speed"), Le = e.rewind, U = Le ? !1 : e.loop, cn = x("autoHeight"), An = x("controls"), Wn = x("controlsText"), zn = x("nav"), Pn = x("touch"), Yn = x("mouseDrag"), en = x("autoplay"), $i = x("autoplayTimeout"), Gn = x("autoplayText"), In = x("autoplayHoverPause"), Kn = x("autoplayResetOnVisibility"), A = Zo(null, x("nonce")), Ae = e.lazyload, tr = e.lazyloadSelector, P, de = [], X = U ? sr() : 0, S = d ? g + X * 2 : g + X, Dt = !!((u || v) && !U), ue = u ? ot() : null, Hi = !d || !U, ne = L ? "left" : "top", Vn = "", he = "", ze = /* @__PURE__ */ function() {
      return u ? function() {
        return Q && !U ? g - 1 : Math.ceil(-ue / (u + k));
      } : v ? function() {
        for (var n = 0; n < S; n++)
          if (P[n] >= -ue)
            return n;
      } : function() {
        return Q && d && !U ? g - 1 : U || d ? Math.max(0, S - Math.ceil(w)) : S - 1;
      };
    }(), c = Ht(x("startIndex")), Zn = c;
    $t();
    var Mn = 0, mn = v ? null : ze(), ti = e.preventActionWhenRunning, oi = e.swipeAngle, Dn = oi ? "?" : !0, Jn = !1, Wi = e.onInit, K = new nr(), Qn = " tns-slider tns-" + e.mode, O = m.id || Go(), pn = x("disable"), Me = !1, ri = e.freezable, _n = ri && !v ? Ui() : !1, De = !1, Ce = {
      click: Un,
      keydown: zr
    }, Pi = {
      click: yr,
      keydown: Mr
    }, Oe = {
      mouseover: Sr,
      mouseout: Lr
    }, Re = { visibilitychange: Er }, Ne = { keydown: Ar }, je = {
      touchstart: ko,
      touchmove: To,
      touchend: zi,
      touchcancel: zi
    }, qe = {
      mousedown: ko,
      mousemove: To,
      mouseup: zi,
      mouseleave: zi
    }, ai = Rn("controls"), Yi = Rn("nav"), Fe = v ? !0 : e.navAsThumbnails, Gi = Rn("autoplay"), Ct = Rn("touch"), Ot = Rn("mouseDrag"), Ii = "tns-slide-active", Rt = "tns-slide-cloned", si = "tns-complete", li = {
      load: hr,
      error: mr
    }, Ki, Vi, $e = e.preventScrollOnTouch === "force";
    if (ai)
      var Y = e.controlsContainer, Nt = e.controlsContainer ? e.controlsContainer.outerHTML : "", M = e.prevButton, D = e.nextButton, or = e.prevButton ? e.prevButton.outerHTML : "", rr = e.nextButton ? e.nextButton.outerHTML : "", He, We;
    if (Yi)
      var B = e.navContainer, jt = e.navContainer ? e.navContainer.outerHTML : "", gn, wn = v ? g : So(), ee = 0, ie = -1, xn = Wt(), me = xn, ci = "tns-nav-active", ge = "Carousel Page ", Zi = " (Current Slide)";
    if (Gi)
      var qt = e.autoplayDirection === "forward" ? 1 : -1, N = e.autoplayButton, Ft = e.autoplayButton ? e.autoplayButton.outerHTML : "", Pe = ["<span class='tns-visually-hidden'>", " animation</span>"], pi, fn, fi, xe, di;
    if (Ct || Ot)
      var te = {}, En = {}, ui, oe = !1, yn, Ji = L ? function(n, i) {
        return n.x - i.x;
      } : function(n, i) {
        return n.y - i.y;
      };
    v || hi(pn || _n), on && (ne = on, Vn = "translate", ce ? (Vn += L ? "3d(" : "3d(0px, ", he = L ? ", 0px, 0px)" : ", 0px)") : (Vn += L ? "X(" : "Y(", he = ")")), d && (m.className = m.className.replace("tns-vpfix", "")), cr(), pr(), Vt();
    function hi(n) {
      n && (An = zn = Pn = Yn = Hn = en = In = Kn = !1);
    }
    function $t() {
      for (var n = d ? c - X : c; n < 0; )
        n += g;
      return n % g + 1;
    }
    function Ht(n) {
      return n = n ? Math.max(0, Math.min(U ? g - 1 : g - w, n)) : 0, d ? n + X : n;
    }
    function mi(n) {
      for (n == null && (n = c), d && (n -= X); n < 0; )
        n += g;
      return Math.floor(n % g);
    }
    function Wt() {
      var n = mi(), i;
      return i = Fe ? n : u || v ? Math.ceil((n + 1) * wn / g - 1) : Math.floor(n / w), !U && d && c === mn && (i = wn - 1), i;
    }
    function ar() {
      if (v || u && !Fi)
        return g - 1;
      var n = u ? "fixedWidth" : "items", i = [];
      if ((u || e[n] < g) && i.push(e[n]), C)
        for (var o in C) {
          var r = C[o][n];
          r && (u || r < g) && i.push(r);
        }
      return i.length || i.push(0), Math.ceil(u ? Fi / Math.min.apply(null, i) : Math.max.apply(null, i));
    }
    function sr() {
      var n = ar(), i = d ? Math.ceil((n * 5 - g) / 2) : n * 4 - g;
      return i = Math.max(n, i), Rn("edgePadding") ? i + 1 : i;
    }
    function Pt() {
      return a.innerWidth || t.documentElement.clientWidth || t.body.clientWidth;
    }
    function Qi(n) {
      return n === "top" ? "afterbegin" : "beforeend";
    }
    function Yt(n) {
      if (n != null) {
        var i = t.createElement("div"), o, r;
        return n.appendChild(i), o = i.getBoundingClientRect(), r = o.right - o.left, i.remove(), r || Yt(n.parentNode);
      }
    }
    function Gt() {
      var n = R ? R * 2 - k : 0;
      return Yt(qi) - n;
    }
    function Rn(n) {
      if (e[n])
        return !0;
      if (C) {
        for (var i in C)
          if (C[i][n])
            return !0;
      }
      return !1;
    }
    function x(n, i) {
      if (i == null && (i = ii), n === "items" && u)
        return Math.floor((I + k) / (u + k)) || 1;
      var o = e[n];
      if (C)
        for (var r in C)
          i >= parseInt(r) && n in C[r] && (o = C[r][n]);
      return n === "slideBy" && o === "page" && (o = x("items")), !d && (n === "slideBy" || n === "items") && (o = Math.floor(o)), o;
    }
    function lr(n) {
      return y ? y + "(" + n * 100 + "% / " + S + ")" : n * 100 / S + "%";
    }
    function gi(n, i, o, r, f) {
      var h = "";
      if (n !== void 0) {
        var T = n;
        i && (T -= i), h = L ? "margin: 0 " + T + "px 0 " + n + "px;" : "margin: " + n + "px 0 " + T + "px 0;";
      } else if (i && !o) {
        var V = "-" + i + "px", nn = L ? V + " 0 0" : "0 " + V + " 0";
        h = "margin: 0 " + nn + ";";
      }
      return !d && f && J && r && (h += re(r)), h;
    }
    function xi(n, i, o) {
      return n ? (n + i) * S + "px" : y ? y + "(" + S * 100 + "% / " + o + ")" : S * 100 / o + "%";
    }
    function bi(n, i, o) {
      var r;
      if (n)
        r = n + i + "px";
      else {
        d || (o = Math.floor(o));
        var f = d ? S : o;
        r = y ? y + "(100% / " + f + ")" : 100 / f + "%";
      }
      return r = "width:" + r, pe !== "inner" ? r + ";" : r + " !important;";
    }
    function vi(n) {
      var i = "";
      if (n !== !1) {
        var o = L ? "padding-" : "margin-", r = L ? "right" : "bottom";
        i = o + r + ": " + n + "px;";
      }
      return i;
    }
    function It(n, i) {
      var o = n.substring(0, n.length - i).toLowerCase();
      return o && (o = "-" + o + "-"), o;
    }
    function re(n) {
      return It(J, 18) + "transition-duration:" + n / 1e3 + "s;";
    }
    function Kt(n) {
      return It(ni, 17) + "animation-duration:" + n / 1e3 + "s;";
    }
    function cr() {
      var n = "tns-outer", i = "tns-inner";
      if (Rn("gutter"), rn.className = n, an.className = i, rn.id = O + "-ow", an.id = O + "-iw", m.id === "" && (m.id = O), Qn += F || v ? " tns-subpixel" : " tns-no-subpixel", Qn += y ? " tns-calc" : " tns-no-calc", v && (Qn += " tns-autowidth"), Qn += " tns-" + e.axis, m.className += Qn, d ? (ln = t.createElement("div"), ln.id = O + "-mw", ln.className = "tns-ovh", rn.appendChild(ln), ln.appendChild(an)) : rn.appendChild(an), cn) {
        var o = ln || an;
        o.className += " tns-ah";
      }
      if (qi.insertBefore(rn, m), an.appendChild(m), qn(E, function(G, ve) {
        q(G, "tns-item"), G.id || (G.id = O + "-item" + ve), !d && Ln && q(G, Ln), dn(G, {
          "aria-hidden": "true",
          tabindex: "-1"
        });
      }), X) {
        for (var r = t.createDocumentFragment(), f = t.createDocumentFragment(), h = X; h--; ) {
          var T = h % g, V = E[T].cloneNode(!0);
          if (q(V, Rt), Fn(V, "id"), f.insertBefore(V, f.firstChild), d) {
            var nn = E[g - 1 - T].cloneNode(!0);
            q(nn, Rt), Fn(nn, "id"), r.appendChild(nn);
          }
        }
        m.insertBefore(r, m.firstChild), m.appendChild(f), E = m.children;
      }
    }
    function Vt() {
      if (Rn("autoHeight") || v || !L) {
        var n = m.querySelectorAll("img");
        qn(n, function(i) {
          var o = i.src;
          Ae || (o && o.indexOf("data:image") < 0 ? (i.src = "", j(i, li), q(i, "loading"), i.src = o) : ao(i));
        }), jn(function() {
          yi(vt(n), function() {
            Ki = !0;
          });
        }), Rn("autoHeight") && (n = it(c, Math.min(c + w - 1, S - 1))), Ae ? Zt() : jn(function() {
          yi(vt(n), Zt);
        });
      } else
        d && Ge(), Qt(), Ut();
    }
    function Zt() {
      if (v && g > 1) {
        var n = U ? c : g - 1;
        (function i() {
          var o = E[n].getBoundingClientRect().left, r = E[n - 1].getBoundingClientRect().right;
          Math.abs(o - r) <= 1 ? Jt() : setTimeout(function() {
            i();
          }, 16);
        })();
      } else
        Jt();
    }
    function Jt() {
      (!L || v) && (po(), v ? (ue = ot(), ri && (_n = Ui()), mn = ze(), hi(pn || _n)) : st()), d && Ge(), Qt(), Ut();
    }
    function pr() {
      if (!d)
        for (var n = c, i = c + Math.min(g, w); n < i; n++) {
          var o = E[n];
          o.style.left = (n - c) * 100 / w + "%", q(o, $n), sn(o, Ln);
        }
      if (L && (F || v ? (On(A, "#" + O + " > .tns-item", "font-size:" + a.getComputedStyle(E[0]).fontSize + ";", Sn(A)), On(A, "#" + O, "font-size:0;", Sn(A))) : d && qn(E, function(ft, dt) {
        ft.style.marginLeft = lr(dt);
      })), $) {
        if (J) {
          var r = ln && e.autoHeight ? re(e.speed) : "";
          On(A, "#" + O + "-mw", r, Sn(A));
        }
        r = gi(e.edgePadding, e.gutter, e.fixedWidth, e.speed, e.autoHeight), On(A, "#" + O + "-iw", r, Sn(A)), d && (r = L && !v ? "width:" + xi(e.fixedWidth, e.gutter, e.items) + ";" : "", J && (r += re(vn)), On(A, "#" + O, r, Sn(A))), r = L && !v ? bi(e.fixedWidth, e.gutter, e.items) : "", e.gutter && (r += vi(e.gutter)), d || (J && (r += re(vn)), ni && (r += Kt(vn))), r && On(A, "#" + O + " > .tns-item", r, Sn(A));
      } else {
        xr(), an.style.cssText = gi(R, k, u, cn), d && L && !v && (m.style.width = xi(u, k, w));
        var r = L && !v ? bi(u, k, w) : "";
        k && (r += vi(k)), r && On(A, "#" + O + " > .tns-item", r, Sn(A));
      }
      if (C && $)
        for (var f in C) {
          f = parseInt(f);
          var h = C[f], r = "", T = "", V = "", nn = "", G = "", ve = v ? null : x("items", f), Ve = x("fixedWidth", f), se = x("speed", f), ct = x("edgePadding", f), pt = x("autoHeight", f), _e = x("gutter", f);
          J && ln && x("autoHeight", f) && "speed" in h && (T = "#" + O + "-mw{" + re(se) + "}"), ("edgePadding" in h || "gutter" in h) && (V = "#" + O + "-iw{" + gi(ct, _e, Ve, se, pt) + "}"), d && L && !v && ("fixedWidth" in h || "items" in h || u && "gutter" in h) && (nn = "width:" + xi(Ve, _e, ve) + ";"), J && "speed" in h && (nn += re(se)), nn && (nn = "#" + O + "{" + nn + "}"), ("fixedWidth" in h || u && "gutter" in h || !d && "items" in h) && (G += bi(Ve, _e, ve)), "gutter" in h && (G += vi(_e)), !d && "speed" in h && (J && (G += re(se)), ni && (G += Kt(se))), G && (G = "#" + O + " > .tns-item{" + G + "}"), r = T + V + nn + G, r && A.insertRule("@media (min-width: " + f / 16 + "em) {" + r + "}", A.cssRules.length);
        }
    }
    function Qt() {
      if (tt(), rn.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + ro() + "</span>  of " + g + "</div>"), Vi = rn.querySelector(".tns-liveregion .current"), Gi) {
        var n = en ? "stop" : "start";
        N ? dn(N, { "data-action": n }) : e.autoplayButtonOutput && (rn.insertAdjacentHTML(Qi(e.autoplayPosition), '<button type="button" data-action="' + n + '">' + Pe[0] + n + Pe[1] + Gn[0] + "</button>"), N = rn.querySelector("[data-action]")), N && j(N, { click: vo }), en && (Ai(), In && j(m, Oe), Kn && j(m, Re));
      }
      if (Yi) {
        if (B)
          dn(B, { "aria-label": "Carousel Pagination" }), gn = B.children, qn(gn, function(T, V) {
            dn(T, {
              "data-nav": V,
              tabindex: "-1",
              "aria-label": ge + (V + 1),
              "aria-controls": O
            });
          });
        else {
          for (var i = "", o = Fe ? "" : 'style="display:none"', r = 0; r < g; r++)
            i += '<button type="button" data-nav="' + r + '" tabindex="-1" aria-controls="' + O + '" ' + o + ' aria-label="' + ge + (r + 1) + '"></button>';
          i = '<div class="tns-nav" aria-label="Carousel Pagination">' + i + "</div>", rn.insertAdjacentHTML(Qi(e.navPosition), i), B = rn.querySelector(".tns-nav"), gn = B.children;
        }
        if (lt(), J) {
          var f = J.substring(0, J.length - 18).toLowerCase(), h = "transition: all " + vn / 1e3 + "s";
          f && (h = "-" + f + "-" + h), On(A, "[aria-controls^=" + O + "-item]", h, Sn(A));
        }
        dn(gn[xn], { "aria-label": ge + (xn + 1) + Zi }), Fn(gn[xn], "tabindex"), q(gn[xn], ci), j(B, Pi);
      }
      ai && (!Y && (!M || !D) && (rn.insertAdjacentHTML(Qi(e.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + O + '">' + Wn[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + O + '">' + Wn[1] + "</button></div>"), Y = rn.querySelector(".tns-controls")), (!M || !D) && (M = Y.children[0], D = Y.children[1]), e.controlsContainer && dn(Y, {
        "aria-label": "Carousel Navigation",
        tabindex: "0"
      }), (e.controlsContainer || e.prevButton && e.nextButton) && dn([M, D], {
        "aria-controls": O,
        tabindex: "-1"
      }), (e.controlsContainer || e.prevButton && e.nextButton) && (dn(M, { "data-controls": "prev" }), dn(D, { "data-controls": "next" })), He = uo(M), We = uo(D), mo(), Y ? j(Y, Ce) : (j(M, Ce), j(D, Ce))), Bi();
    }
    function Ut() {
      if (d && Bn) {
        var n = {};
        n[Bn] = Cn, j(m, n);
      }
      Pn && j(m, je, e.preventScrollOnTouch), Yn && j(m, qe), Hn && j(t, Ne), pe === "inner" ? K.on("outerResized", function() {
        Bt(), K.emit("innerLoaded", tn());
      }) : (C || u || v || cn || !L) && j(a, { resize: Xt }), cn && (pe === "outer" ? K.on("innerLoaded", wi) : pn || wi()), nt(), pn ? to() : _n && io(), K.on("indexChanged", so), pe === "inner" && K.emit("innerLoaded", tn()), typeof Wi == "function" && Wi(tn()), Se = !0;
    }
    function fr() {
      if (A.disabled = !0, A.ownerNode && A.ownerNode.remove(), Z(a, { resize: Xt }), Hn && Z(t, Ne), Y && Z(Y, Ce), B && Z(B, Pi), Z(m, Oe), Z(m, Re), N && Z(N, { click: vo }), en && clearInterval(pi), d && Bn) {
        var n = {};
        n[Bn] = Cn, Z(m, n);
      }
      Pn && Z(m, je), Yn && Z(m, qe);
      var i = [Mt, Nt, or, rr, jt, Ft];
      Ri.forEach(function(r, f) {
        var h = r === "container" ? rn : e[r];
        if (typeof h == "object" && h) {
          var T = h.previousElementSibling ? h.previousElementSibling : !1, V = h.parentNode;
          h.outerHTML = i[f], e[r] = T ? T.nextElementSibling : V.firstElementChild;
        }
      }), Ri = $n = ei = ji = Ln = L = rn = an = m = qi = Mt = E = g = Ee = ii = v = u = R = k = I = w = fe = Fi = Hn = vn = Le = U = cn = A = Ae = P = de = X = S = Dt = ue = Hi = ne = Vn = he = ze = c = Zn = Mn = mn = oi = Dn = Jn = Wi = K = Qn = O = pn = Me = ri = _n = De = Ce = Pi = Oe = Re = Ne = je = qe = ai = Yi = Fe = Gi = Ct = Ot = Ii = si = li = Ki = An = Wn = Y = Nt = M = D = He = We = zn = B = jt = gn = wn = ee = ie = xn = me = ci = ge = Zi = en = $i = qt = Gn = In = N = Ft = Kn = Pe = pi = fn = fi = xe = di = te = En = ui = oe = yn = Ji = Pn = Yn = null;
      for (var o in this)
        o !== "rebuild" && (this[o] = null);
      Se = !1;
    }
    function Xt(n) {
      jn(function() {
        Bt(Nn(n));
      });
    }
    function Bt(n) {
      if (Se) {
        pe === "outer" && K.emit("outerResized", tn(n)), ii = Pt();
        var i, o = Ee, r = !1;
        C && (no(), i = o !== Ee, i && K.emit("newBreakpointStart", tn(n)));
        var f, h, T = w, V = pn, nn = _n, G = Hn, ve = An, Ve = zn, se = Pn, ct = Yn, pt = en, _e = In, ft = Kn, dt = c;
        if (i) {
          var Dr = u, Cr = cn, Or = Wn, Rr = Q, ut = Gn;
          if (!$)
            var Nr = k, jr = R;
        }
        if (Hn = x("arrowKeys"), An = x("controls"), zn = x("nav"), Pn = x("touch"), Q = x("center"), Yn = x("mouseDrag"), en = x("autoplay"), In = x("autoplayHoverPause"), Kn = x("autoplayResetOnVisibility"), i && (pn = x("disable"), u = x("fixedWidth"), vn = x("speed"), cn = x("autoHeight"), Wn = x("controlsText"), Gn = x("autoplayText"), $i = x("autoplayTimeout"), $ || (R = x("edgePadding"), k = x("gutter"))), hi(pn), I = Gt(), (!L || v) && !pn && (po(), L || (st(), r = !0)), (u || v) && (ue = ot(), mn = ze()), (i || u) && (w = x("items"), fe = x("slideBy"), h = w !== T, h && (!u && !v && (mn = ze()), Xi())), i && pn !== V && (pn ? to() : ur()), ri && (i || u || v) && (_n = Ui(), _n !== nn && (_n ? (rt(Ei(Ht(0))), io()) : (dr(), r = !0))), hi(pn || _n), en || (In = Kn = !1), Hn !== G && (Hn ? j(t, Ne) : Z(t, Ne)), An !== ve && (An ? Y ? hn(Y) : (M && hn(M), D && hn(D)) : Y ? un(Y) : (M && un(M), D && un(D))), zn !== Ve && (zn ? (hn(B), lt()) : un(B)), Pn !== se && (Pn ? j(m, je, e.preventScrollOnTouch) : Z(m, je)), Yn !== ct && (Yn ? j(m, qe) : Z(m, qe)), en !== pt && (en ? (N && hn(N), !fn && !xe && Ai()) : (N && un(N), fn && Ke())), In !== _e && (In ? j(m, Oe) : Z(m, Oe)), Kn !== ft && (Kn ? j(t, Re) : Z(t, Re)), i) {
          if ((u !== Dr || Q !== Rr) && (r = !0), cn !== Cr && (cn || (an.style.height = "")), An && Wn !== Or && (M.innerHTML = Wn[0], D.innerHTML = Wn[1]), N && Gn !== ut) {
            var ht = en ? 1 : 0, mt = N.innerHTML, Lo = mt.length - ut[ht].length;
            mt.substring(Lo) === ut[ht] && (N.innerHTML = mt.substring(0, Lo) + Gn[ht]);
          }
        } else
          Q && (u || v) && (r = !0);
        if ((h || u && !v) && (wn = So(), lt()), f = c !== dt, f ? (K.emit("indexChanged", tn()), r = !0) : h ? f || so() : (u || v) && (nt(), tt(), oo()), h && !d && br(), !pn && !_n) {
          if (i && !$ && ((R !== jr || k !== Nr) && (an.style.cssText = gi(R, k, u, vn, cn)), L)) {
            d && (m.style.width = xi(u, k, w));
            var qr = bi(u, k, w) + vi(k);
            Jo(A, Sn(A) - 1), On(A, "#" + O + " > .tns-item", qr, Sn(A));
          }
          cn && wi(), r && (Ge(), Zn = c);
        }
        i && K.emit("newBreakpointEnd", tn(n));
      }
    }
    function Ui() {
      if (!u && !v) {
        var n = Q ? w - (w - 1) / 2 : w;
        return g <= n;
      }
      var i = u ? (u + k) * g : P[g], o = R ? I + R * 2 : I + k;
      return Q && (o -= u ? (I - u) / 2 : (I - (P[c + 1] - P[c] - k)) / 2), i <= o;
    }
    function no() {
      Ee = 0;
      for (var n in C)
        n = parseInt(n), ii >= n && (Ee = n);
    }
    var Xi = /* @__PURE__ */ function() {
      return U ? d ? (
        // loop + carousel
        function() {
          var n = Mn, i = mn;
          n += fe, i -= fe, R ? (n += 1, i -= 1) : u && (I + k) % (u + k) && (i -= 1), X && (c > i ? c -= g : c < n && (c += g));
        }
      ) : (
        // loop + gallery
        function() {
          if (c > mn)
            for (; c >= Mn + g; )
              c -= g;
          else if (c < Mn)
            for (; c <= mn - g; )
              c += g;
        }
      ) : (
        // non-loop
        function() {
          c = Math.max(Mn, Math.min(mn, c));
        }
      );
    }();
    function Bi() {
      !en && N && un(N), !zn && B && un(B), An || (Y ? un(Y) : (M && un(M), D && un(D)));
    }
    function eo() {
      en && N && hn(N), zn && B && hn(B), An && (Y ? hn(Y) : (M && hn(M), D && hn(D)));
    }
    function io() {
      if (!De) {
        if (R && (an.style.margin = "0px"), X)
          for (var n = "tns-transparent", i = X; i--; )
            d && q(E[i], n), q(E[S - i - 1], n);
        Bi(), De = !0;
      }
    }
    function dr() {
      if (De) {
        if (R && $ && (an.style.margin = ""), X)
          for (var n = "tns-transparent", i = X; i--; )
            d && sn(E[i], n), sn(E[S - i - 1], n);
        eo(), De = !1;
      }
    }
    function to() {
      if (!Me) {
        if (A.disabled = !0, m.className = m.className.replace(Qn.substring(1), ""), Fn(m, ["style"]), U)
          for (var n = X; n--; )
            d && un(E[n]), un(E[S - n - 1]);
        if ((!L || !d) && Fn(an, ["style"]), !d)
          for (var i = c, o = c + g; i < o; i++) {
            var r = E[i];
            Fn(r, ["style"]), sn(r, $n), sn(r, Ln);
          }
        Bi(), Me = !0;
      }
    }
    function ur() {
      if (Me) {
        if (A.disabled = !1, m.className += Qn, Ge(), U)
          for (var n = X; n--; )
            d && hn(E[n]), hn(E[S - n - 1]);
        if (!d)
          for (var i = c, o = c + g; i < o; i++) {
            var r = E[i], f = i < c + w ? $n : Ln;
            r.style.left = (i - c) * 100 / w + "%", q(r, f);
          }
        eo(), Me = !1;
      }
    }
    function oo() {
      var n = ro();
      Vi.innerHTML !== n && (Vi.innerHTML = n);
    }
    function ro() {
      var n = _i(), i = n[0] + 1, o = n[1] + 1;
      return i === o ? i + "" : i + " to " + o;
    }
    function _i(n) {
      n == null && (n = Ei());
      var i = c, o, r, f;
      if (Q || R ? (v || u) && (r = -(parseFloat(n) + R), f = r + I + R * 2) : v && (r = P[c], f = r + I), v)
        P.forEach(function(nn, G) {
          G < S && ((Q || R) && nn <= r + 0.5 && (i = G), f - nn >= 0.5 && (o = G));
        });
      else {
        if (u) {
          var h = u + k;
          Q || R ? (i = Math.floor(r / h), o = Math.ceil(f / h - 1)) : o = i + Math.ceil(I / h) - 1;
        } else if (Q || R) {
          var T = w - 1;
          if (Q ? (i -= T / 2, o = c + T / 2) : o = c + T, R) {
            var V = R * w / I;
            i -= V, o += V;
          }
          i = Math.floor(i), o = Math.ceil(o);
        } else
          o = i + w - 1;
        i = Math.max(i, 0), o = Math.min(o, S - 1);
      }
      return [i, o];
    }
    function nt() {
      if (Ae && !pn) {
        var n = _i();
        n.push(tr), it.apply(null, n).forEach(function(i) {
          if (!le(i, si)) {
            var o = {};
            o[Bn] = function(f) {
              f.stopPropagation();
            }, j(i, o), j(i, li), i.src = Xe(i, "data-src");
            var r = Xe(i, "data-srcset");
            r && (i.srcset = r), q(i, "loading");
          }
        });
      }
    }
    function hr(n) {
      ao(be(n));
    }
    function mr(n) {
      gr(be(n));
    }
    function ao(n) {
      q(n, "loaded"), et(n);
    }
    function gr(n) {
      q(n, "failed"), et(n);
    }
    function et(n) {
      q(n, si), sn(n, "loading"), Z(n, li);
    }
    function it(n, i, o) {
      var r = [];
      for (o || (o = "img"); n <= i; )
        qn(E[n].querySelectorAll(o), function(f) {
          r.push(f);
        }), n++;
      return r;
    }
    function wi() {
      var n = it.apply(null, _i());
      jn(function() {
        yi(n, co);
      });
    }
    function yi(n, i) {
      if (Ki || (n.forEach(function(o, r) {
        !Ae && o.complete && et(o), le(o, si) && n.splice(r, 1);
      }), !n.length))
        return i();
      jn(function() {
        yi(n, i);
      });
    }
    function so() {
      nt(), tt(), oo(), mo(), vr();
    }
    function xr() {
      d && cn && (ln.style[J] = vn / 1e3 + "s");
    }
    function lo(n, i) {
      for (var o = [], r = n, f = Math.min(n + i, S); r < f; r++)
        o.push(E[r].offsetHeight);
      return Math.max.apply(null, o);
    }
    function co() {
      var n = cn ? lo(c, w) : lo(X, g), i = ln || an;
      i.style.height !== n && (i.style.height = n + "px");
    }
    function po() {
      P = [0];
      var n = L ? "left" : "top", i = L ? "right" : "bottom", o = E[0].getBoundingClientRect()[n];
      qn(E, function(r, f) {
        f && P.push(r.getBoundingClientRect()[n] - o), f === S - 1 && P.push(r.getBoundingClientRect()[i] - o);
      });
    }
    function tt() {
      var n = _i(), i = n[0], o = n[1];
      qn(E, function(r, f) {
        f >= i && f <= o ? ye(r, "aria-hidden") && (Fn(r, ["aria-hidden", "tabindex"]), q(r, Ii)) : ye(r, "aria-hidden") || (dn(r, {
          "aria-hidden": "true",
          tabindex: "-1"
        }), sn(r, Ii));
      });
    }
    function br() {
      for (var n = c + Math.min(g, w), i = S; i--; ) {
        var o = E[i];
        i >= c && i < n ? (q(o, "tns-moving"), o.style.left = (i - c) * 100 / w + "%", q(o, $n), sn(o, Ln)) : o.style.left && (o.style.left = "", q(o, Ln), sn(o, $n)), sn(o, ei);
      }
      setTimeout(function() {
        qn(E, function(r) {
          sn(r, "tns-moving");
        });
      }, 300);
    }
    function vr() {
      if (zn && (xn = ie >= 0 ? ie : Wt(), ie = -1, xn !== me)) {
        var n = gn[me], i = gn[xn];
        dn(n, {
          tabindex: "-1",
          "aria-label": ge + (me + 1)
        }), sn(n, ci), dn(i, { "aria-label": ge + (xn + 1) + Zi }), Fn(i, "tabindex"), q(i, ci), me = xn;
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
    function ki(n, i, o) {
      n ? i.disabled = o : i.setAttribute("aria-disabled", o.toString());
    }
    function mo() {
      if (!(!An || Le || U)) {
        var n = He ? M.disabled : ho(M), i = We ? D.disabled : ho(D), o = c <= Mn, r = !Le && c >= mn;
        o && !n && ki(He, M, !0), !o && n && ki(He, M, !1), r && !i && ki(We, D, !0), !r && i && ki(We, D, !1);
      }
    }
    function Ti(n, i) {
      J && (n.style[J] = i);
    }
    function _r() {
      return u ? (u + k) * S : P[S];
    }
    function Ye(n) {
      n == null && (n = c);
      var i = R ? k : 0;
      return v ? (I - i - (P[n + 1] - P[n] - k)) / 2 : u ? (I - u) / 2 : (w - 1) / 2;
    }
    function ot() {
      var n = R ? k : 0, i = I + n - _r();
      return Q && !U && (i = u ? -(u + k) * (S - 1) - Ye() : Ye(S - 1) - P[S - 1]), i > 0 && (i = 0), i;
    }
    function Ei(n) {
      n == null && (n = c);
      var i;
      if (L && !v)
        if (u)
          i = -(u + k) * n, Q && (i += Ye());
        else {
          var o = on ? S : w;
          Q && (n -= Ye()), i = -n * 100 / o;
        }
      else
        i = -P[n], Q && v && (i += Ye());
      return Dt && (i = Math.max(i, ue)), i += L && !v && !u ? "%" : "px", i;
    }
    function Ge(n) {
      Ti(m, "0s"), rt(n);
    }
    function rt(n) {
      n == null && (n = Ei()), m.style[ne] = Vn + n + he;
    }
    function go(n, i, o, r) {
      var f = n + w;
      U || (f = Math.min(f, S));
      for (var h = n; h < f; h++) {
        var T = E[h];
        r || (T.style.left = (h - c) * 100 / w + "%"), ji && Be && (T.style[Be] = T.style[Oi] = ji * (h - n) / 1e3 + "s"), sn(T, i), q(T, o), r && de.push(T);
      }
    }
    var wr = /* @__PURE__ */ function() {
      return d ? function() {
        Ti(m, ""), J || !vn ? (rt(), (!vn || !_t(m)) && Cn()) : er(m, ne, Vn, he, Ei(), vn, Cn), L || st();
      } : function() {
        de = [];
        var n = {};
        n[Bn] = n[Et] = Cn, Z(E[Zn], n), j(E[c], n), go(Zn, $n, ei, !0), go(c, Ln, $n), (!Bn || !Et || !vn || !_t(m)) && Cn();
      };
    }();
    function at(n, i) {
      Hi && Xi(), (c !== Zn || i) && (K.emit("indexChanged", tn()), K.emit("transitionStart", tn()), cn && wi(), fn && n && ["click", "keydown"].indexOf(n.type) >= 0 && Ke(), Jn = !0, wr());
    }
    function xo(n) {
      return n.toLowerCase().replace(/-/g, "");
    }
    function Cn(n) {
      if (d || Jn) {
        if (K.emit("transitionEnd", tn(n)), !d && de.length > 0)
          for (var i = 0; i < de.length; i++) {
            var o = de[i];
            o.style.left = "", Oi && Be && (o.style[Oi] = "", o.style[Be] = ""), sn(o, ei), q(o, Ln);
          }
        if (!n || !d && n.target.parentNode === m || n.target === m && xo(n.propertyName) === xo(ne)) {
          if (!Hi) {
            var r = c;
            Xi(), c !== r && (K.emit("indexChanged", tn()), Ge());
          }
          pe === "inner" && K.emit("innerLoaded", tn()), Jn = !1, Zn = c;
        }
      }
    }
    function Ie(n, i) {
      if (!_n)
        if (n === "prev")
          Un(i, -1);
        else if (n === "next")
          Un(i, 1);
        else {
          if (Jn) {
            if (ti)
              return;
            Cn();
          }
          var o = mi(), r = 0;
          if (n === "first" ? r = -o : n === "last" ? r = d ? g - w - o : g - 1 - o : (typeof n != "number" && (n = parseInt(n)), isNaN(n) || (i || (n = Math.max(0, Math.min(g - 1, n))), r = n - o)), !d && r && Math.abs(r) < w) {
            var f = r > 0 ? 1 : -1;
            r += c + r - g >= Mn ? g * f : g * 2 * f * -1;
          }
          c += r, d && U && (c < Mn && (c += g), c > mn && (c -= g)), mi(c) !== mi(Zn) && at(i);
        }
    }
    function Un(n, i) {
      if (Jn) {
        if (ti)
          return;
        Cn();
      }
      var o;
      if (!i) {
        n = Nn(n);
        for (var r = be(n); r !== Y && [M, D].indexOf(r) < 0; )
          r = r.parentNode;
        var f = [M, D].indexOf(r);
        f >= 0 && (o = !0, i = f === 0 ? -1 : 1);
      }
      if (Le) {
        if (c === Mn && i === -1) {
          Ie("last", n);
          return;
        } else if (c === mn && i === 1) {
          Ie("first", n);
          return;
        }
      }
      i && (c += fe * i, v && (c = Math.floor(c)), at(o || n && n.type === "keydown" ? n : null));
    }
    function yr(n) {
      if (Jn) {
        if (ti)
          return;
        Cn();
      }
      n = Nn(n);
      for (var i = be(n), o; i !== B && !ye(i, "data-nav"); )
        i = i.parentNode;
      if (ye(i, "data-nav")) {
        var o = ie = Number(Xe(i, "data-nav")), r = u || v ? o * g / wn : o * w, f = Fe ? o : Math.min(Math.ceil(r), g - 1);
        Ie(f, n), xn === o && (fn && Ke(), ie = -1);
      }
    }
    function Si() {
      pi = setInterval(function() {
        Un(null, qt);
      }, $i), fn = !0;
    }
    function Li() {
      clearInterval(pi), fn = !1;
    }
    function bo(n, i) {
      dn(N, { "data-action": n }), N.innerHTML = Pe[0] + n + Pe[1] + i;
    }
    function Ai() {
      Si(), N && bo("stop", Gn[1]);
    }
    function Ke() {
      Li(), N && bo("start", Gn[0]);
    }
    function kr() {
      en && !fn && (Ai(), xe = !1);
    }
    function Tr() {
      fn && (Ke(), xe = !0);
    }
    function vo() {
      fn ? (Ke(), xe = !0) : (Ai(), xe = !1);
    }
    function Er() {
      t.hidden ? fn && (Li(), di = !0) : di && (Si(), di = !1);
    }
    function Sr() {
      fn && (Li(), fi = !0);
    }
    function Lr() {
      fi && (Si(), fi = !1);
    }
    function Ar(n) {
      n = Nn(n);
      var i = [s.LEFT, s.RIGHT].indexOf(n.keyCode);
      i >= 0 && Un(n, i === 0 ? -1 : 1);
    }
    function zr(n) {
      n = Nn(n);
      var i = [s.LEFT, s.RIGHT].indexOf(n.keyCode);
      i >= 0 && (i === 0 ? M.disabled || Un(n, -1) : D.disabled || Un(n, 1));
    }
    function _o(n) {
      n.focus();
    }
    function Mr(n) {
      n = Nn(n);
      var i = t.activeElement;
      if (ye(i, "data-nav")) {
        var o = [s.LEFT, s.RIGHT, s.ENTER, s.SPACE].indexOf(n.keyCode), r = Number(Xe(i, "data-nav"));
        o >= 0 && (o === 0 ? r > 0 && _o(gn[r - 1]) : o === 1 ? r < wn - 1 && _o(gn[r + 1]) : (ie = r, Ie(r, n)));
      }
    }
    function Nn(n) {
      return n = n || a.event, ae(n) ? n.changedTouches[0] : n;
    }
    function be(n) {
      return n.target || a.event.srcElement;
    }
    function ae(n) {
      return n.type.indexOf("touch") >= 0;
    }
    function wo(n) {
      n.preventDefault ? n.preventDefault() : n.returnValue = !1;
    }
    function yo() {
      return Uo(Qo(En.y - te.y, En.x - te.x), oi) === e.axis;
    }
    function ko(n) {
      if (Jn) {
        if (ti)
          return;
        Cn();
      }
      en && fn && Li(), oe = !0, yn && (Mi(yn), yn = null);
      var i = Nn(n);
      K.emit(ae(n) ? "touchStart" : "dragStart", tn(n)), !ae(n) && ["img", "a"].indexOf(fo(be(n))) >= 0 && wo(n), En.x = te.x = i.clientX, En.y = te.y = i.clientY, d && (ui = parseFloat(m.style[ne].replace(Vn, "")), Ti(m, "0s"));
    }
    function To(n) {
      if (oe) {
        var i = Nn(n);
        En.x = i.clientX, En.y = i.clientY, d ? yn || (yn = jn(function() {
          Eo(n);
        })) : (Dn === "?" && (Dn = yo()), Dn && ($e = !0)), (typeof n.cancelable != "boolean" || n.cancelable) && $e && n.preventDefault();
      }
    }
    function Eo(n) {
      if (!Dn) {
        oe = !1;
        return;
      }
      if (Mi(yn), oe && (yn = jn(function() {
        Eo(n);
      })), Dn === "?" && (Dn = yo()), Dn) {
        !$e && ae(n) && ($e = !0);
        try {
          n.type && K.emit(ae(n) ? "touchMove" : "dragMove", tn(n));
        } catch {
        }
        var i = ui, o = Ji(En, te);
        if (!L || u || v)
          i += o, i += "px";
        else {
          var r = on ? o * w * 100 / ((I + k) * S) : o * 100 / (I + k);
          i += r, i += "%";
        }
        m.style[ne] = Vn + i + he;
      }
    }
    function zi(n) {
      if (oe) {
        yn && (Mi(yn), yn = null), d && Ti(m, ""), oe = !1;
        var i = Nn(n);
        En.x = i.clientX, En.y = i.clientY;
        var o = Ji(En, te);
        if (Math.abs(o)) {
          if (!ae(n)) {
            var r = be(n);
            j(r, { click: function f(h) {
              wo(h), Z(r, { click: f });
            } });
          }
          d ? yn = jn(function() {
            if (L && !v) {
              var f = -o * w / (I + k);
              f = o > 0 ? Math.floor(f) : Math.ceil(f), c += f;
            } else {
              var h = -(ui + o);
              if (h <= 0)
                c = Mn;
              else if (h >= P[S - 1])
                c = mn;
              else
                for (var T = 0; T < S && h >= P[T]; )
                  c = T, h > P[T] && o < 0 && (c += 1), T++;
            }
            at(n, o), K.emit(ae(n) ? "touchEnd" : "dragEnd", tn(n));
          }) : Dn && Un(n, o > 0 ? -1 : 1);
        }
      }
      e.preventScrollOnTouch === "auto" && ($e = !1), oi && (Dn = "?"), en && !fn && Si();
    }
    function st() {
      var n = ln || an;
      n.style.height = P[c + w] - P[c] + "px";
    }
    function So() {
      var n = u ? (u + k) * g / I : g / w;
      return Math.min(Math.ceil(n), g);
    }
    function lt() {
      if (!(!zn || Fe) && wn !== ee) {
        var n = ee, i = wn, o = hn;
        for (ee > wn && (n = wn, i = ee, o = un); n < i; )
          o(gn[n]), n++;
        ee = wn;
      }
    }
    function tn(n) {
      return {
        container: m,
        slideItems: E,
        navContainer: B,
        navItems: gn,
        controlsContainer: Y,
        hasControls: ai,
        prevButton: M,
        nextButton: D,
        items: w,
        slideBy: fe,
        cloneCount: X,
        slideCount: g,
        slideCountNew: S,
        index: c,
        indexCached: Zn,
        displayIndex: $t(),
        navCurrentIndex: xn,
        navCurrentIndexCached: me,
        pages: wn,
        pagesCached: ee,
        sheet: A,
        isOn: Se,
        event: n || {}
      };
    }
    return {
      version: "2.9.4",
      getInfo: tn,
      events: K,
      goTo: Ie,
      play: kr,
      pause: Tr,
      isOn: Se,
      updateSliderHeight: co,
      refresh: Vt,
      destroy: fr,
      rebuild: function() {
        return Tt(Di(e, Lt));
      }
    };
  };
  Oo("opt_in_v2"), H("exp_optin_loaded", "Loaded", "loaded"), Co([
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
      t.insertAdjacentHTML("afterbegin", jo), t.insertAdjacentHTML("beforeend", qo), t.insertAdjacentHTML("beforeend", Fo), t.insertAdjacentHTML("beforeend", $o), t.insertAdjacentHTML("beforeend", Ho), t.insertAdjacentHTML("beforeend", Wo), t.insertAdjacentHTML("beforeend", Po), window.location.href.includes("dropservicing.net") && (z("#main_block h1").elements[0].innerHTML = "The 4 Steps to Start Your Online Business in 2024 and Achieve Financial Freedom Goals");
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
        const l = window.location.href.includes("dropservicingblueprint") ? 1 : 2, p = this.querySelector('input[name="name"]').value, _ = this.querySelector('input[name="email"]').value;
        let b = !0;
        if ((!p || p.trim() === "") && (this.querySelector('input[name="name"]').closest("label").classList.add("error"), b = !1), (!_ || _.trim() === "" || !_.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) && (this.querySelector('input[name="email"]').closest("label").classList.add("error"), b = !1), !b)
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
        const y = (/* @__PURE__ */ new Date()).getTimezoneOffset() / 60, F = `GMT${y > 0 ? "-" : "+"}${Math.abs(y)}`;
        if (this.querySelector(".inputs2").classList.contains("active")) {
          const $ = z(".inputs2 .selected").elements[0].getAttribute("data-schedule");
          fetch("https://conversionrate.top/api/dropservicing/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              api_key: "8f4aff29-94fa-4197-a1a2-4a3c03ede2e0",
              webinarId: window.innerWidth > 768 ? l === 1 ? 74 : 73 : l === 1 ? 75 : 72,
              name: p,
              email: _,
              schedule: $
            })
          }).then((on) => on.json()).then((on) => {
            window.location.href = on.user.thank_you_url;
          });
        } else
          try {
            const $ = await fetch("https://conversionrate.top/api/dropservicing/get-schedules", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                webinarId: window.innerWidth > 768 ? l === 1 ? 74 : 73 : l === 1 ? 75 : 72,
                timezone: F
              })
            }).then((on) => on.json());
            console.log($), console.log(this), this.querySelector(".inputs1").style.display = "none", this.querySelector(".inputs2").innerHTML = Yo($.webinar.schedules, $.webinar.timezone), this.querySelector(".inputs2").classList.add("active");
          } catch ($) {
            console.log($);
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
        const s = this.querySelector(".slide>p").textContent, l = this.getAttribute("data-video");
        z(".crs_video_popup").elements[0].classList.add("active"), H("exp_optin_why_join_review", `Open review. ${s}`, "click", "Why Join This Webinar"), z(
          ".crs_video_popup .video"
        ).elements[0].innerHTML = /* html */
        `<div class="crs_close"></div><div class="wistia_embed wistia_async_${l}"></div>`, z(".crs_video_popup .crs_close").on("click", function() {
          z(".crs_video_popup").elements[0].classList.remove("active");
        }), window._wq.push({
          id: l,
          onReady: function(p) {
            p.bind("play", function() {
              H("exp_optin_popup_review_video", `Play video ${s}`, "click", "Popup after review");
            });
          }
        });
      }), Tt({
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
      }).events.on("indexChanged", function(s) {
        var p, _;
        const l = s.navItems;
        Array.from(l).forEach((b) => b.classList.remove("tns-nav-near")), (p = l[s.index - 1]) == null || p.classList.add("tns-nav-near"), (_ = l[s.index + 1]) == null || _.classList.add("tns-nav-near");
      });
      const a = setInterval(() => {
        window.Wistia && (clearInterval(a), window._wq = window._wq || [], gt.forEach((s) => {
          window._wq.push({
            id: s.videoId,
            onReady: function(l) {
              l.bind("play", function() {
                l.container.closest(".video_slide") && H(
                  "exp_optin_hear_video",
                  `Video ${l.data.media.name}`,
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
      bn(".crs_video_popup", "exp_optin_popup_review_view", "Popup after review"), bn(".crs_popup_form", "exp_optin_popup_cta_view", "Popup after click on CTA"), bn("#base_review", "exp_optin_why_join_view", "Why Join This Webinar"), bn("#bonus_block", "exp_optin_bonuses_view", "Exclusive Bonuses"), bn("#host_block", "exp_optin_host_view", "Your Host: Dylan Sydney"), bn("#video_block", "exp_optin_hear_view", "Hear from Our Participants"), bn("#training_for", "exp_optin_who_view", "Who is the Training for"), bn("#trust_pilot", "exp_optin_trustscore_view", "TrustScore"), bn("#faq_block", "exp_optin_faq_view", "Frequently asked questions"), bn("#last_cta", "exp_optin_future_view", "Your Future Starts Here"), bn(".crs_popup_form .inputs2", "exp_optin_popup_cta_time_view_step2", "Popup after click on CTA"), bn("#main_block .inputs2", "exp_optin_main_form_view_step2", "First screen form");
    }
  }
  window.location.href.includes("training") && new ir();
})();
//# sourceMappingURL=index.js.map
