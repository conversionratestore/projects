(function() {
  "use strict";
  const Eo = `.mobile {
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
  padding: 0 100px 80px;
  margin-top: 0;
}
@media (max-width: 768px) {
  #main_block {
    padding: 40px 16px;
  }
}
#main_block .wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
}
#main_block header {
  padding: 36px 0;
}
@media (max-width: 768px) {
  #main_block header {
    padding: 0 0 32px;
  }
}
#main_block .flex {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
}
@media (max-width: 768px) {
  #main_block .flex {
    gap: 0;
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
  line-height: 25px;
  align-items: center;
}
#main_block .tp_label > img {
  width: auto;
  height: 20px;
}
#main_block .tp_label p {
  margin: 0;
  display: flex;
  align-items: center;
}
#main_block .tp_label b {
  color: #00b67a;
}
#main_block .tp_label span:last-of-type {
  font-size: 12px;
  line-height: 15px;
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
  margin-bottom: 42px;
}
@media (max-width: 768px) {
  #main_block .youll_list > p {
    margin-bottom: 24px;
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
  padding: 13px;
  margin-bottom: 20px;
  position: relative;
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
  margin-top: 32px;
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
}
#base_review ul .slide:not(:last-of-type) {
  margin-right: 30px;
}
#base_review ul .slide > div {
  display: flex;
  gap: 14px;
  margin-bottom: 24px;
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
}
#base_review ul .slide > div p b {
  display: block;
  margin-bottom: 4px;
}
#base_review ul .slide > div p img {
  height: 20px;
  width: auto;
}
#base_review ul .slide > p {
  font-size: 18px;
  color: #31364e;
  line-height: 26px;
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
  padding: 40px 60px;
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
  margin-bottom: 40px;
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
#video_block .video_slide .head > img {
  width: 49px;
  height: 49px;
  margin-right: 14px;
}
@media (max-width: 768px) {
  #video_block .video_slide .head > img {
    display: none;
  }
}
#video_block .video_slide .head > img + p {
  font-size: 14px;
  line-height: 24px;
  color: #262626;
  font-weight: 700;
  margin-bottom: 4px;
}
@media (max-width: 768px) {
  #video_block .video_slide .head > img + p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
}
#video_block .video_slide .head > img + p img {
  height: 21px;
  width: auto;
}
#video_block .video_slide .head p:last-of-type {
  font-size: 18px;
  color: #31364e;
  line-height: 26px;
  margin-left: 80px;
}
@media (max-width: 768px) {
  #video_block .video_slide .head p:last-of-type {
    margin-left: 0;
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
}
#trust_pilot h2 b {
  color: #00b67a;
}
#trust_pilot h2 span {
  font-size: 24px;
  line-height: 28px;
  font-weight: 300;
  color: #efecfb;
}
#trust_pilot h2 + p {
  font-size: 16px;
  line-height: 25px;
  color: #efecfb;
  margin-bottom: 60px;
}
@media (max-width: 768px) {
  #trust_pilot h2 + p {
    margin-bottom: 30px;
  }
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
  height: 10px;
  width: 10px;
  opacity: 1;
}
.crs_popup_form .form .close::before {
  content: "";
  width: 20px;
  height: 2px;
  background: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}
.crs_popup_form .form .close::after {
  content: "";
  width: 20px;
  height: 2px;
  background: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
}
.crs_popup_form form {
  padding: 56px 40px;
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
  padding: 13px;
  margin-bottom: 20px;
  position: relative;
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
.crs_popup_form .bonus {
  padding: 54px 40px;
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
}/*# sourceMappingURL=style.css.map */`, So = (e, i) => {
    const r = setInterval(() => {
      const l = document.querySelector(e);
      l && (clearInterval(r), i(l));
    }, 100);
  }, Ao = ({ name: e, dev: i }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${i})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class Mo {
    constructor(i) {
      this.elements = typeof i == "string" ? document.querySelectorAll(i) : i instanceof Element ? [i] : i;
    }
    on(i, r, l) {
      return typeof r == "function" && (l = r, r = ""), this.elements.forEach(function(s) {
        s.addEventListener(i, function(f) {
          var S;
          if (r) {
            let x = (S = f.target) == null ? void 0 : S.closest(r);
            s.contains(x) && (l == null || l.call(x, f));
          } else
            l == null || l.call(s, f);
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
      const l = i.split("-").map((s, f) => f === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[l] = r;
      }), this;
    }
  }
  const G = (e) => new Mo(e), Lo = async (e) => {
    const i = (r) => new Promise((l, s) => {
      const f = r.split(".").pop();
      if (f === "js") {
        if (Array.from(document.scripts).map((L) => L.src.toLowerCase()).includes(r.toLowerCase()))
          return console.log(`Script ${r} allready downloaded!`), l("");
        const x = document.createElement("script");
        x.src = r, x.onload = l, x.onerror = s, document.head.appendChild(x);
      } else if (f === "css") {
        if (Array.from(document.styleSheets).map((L) => {
          var K;
          return (K = L.href) == null ? void 0 : K.toLowerCase();
        }).includes(r.toLowerCase()))
          return console.log(`Style ${r} allready downloaded!`), l("");
        const x = document.createElement("link");
        x.rel = "stylesheet", x.href = r, x.onload = l, x.onerror = s, document.head.appendChild(x);
      }
    });
    for (const r of e)
      console.log(r), await i(r), console.log(`Loaded librari ${r}`);
    console.log("All libraries loaded!");
  }, Mt = [
    {
      name: "Christian",
      review: "From an unfulfilling job to running his own business, Christian transformed his life in just three months.",
      img: "christian.jpg",
      videoId: "24pvu5oip9"
    },
    {
      name: "Ed",
      review: "Ed went from a busy father of two with limited time to running a thriving business on his own term.",
      img: "ed.jpg",
      videoId: "n2ujymsyou"
    },
    {
      name: "Lauren",
      review: "Lauren transitioned from managing physical stores to building her own automated Drop Servicing business.",
      img: "lauren.jpg",
      videoId: "q8xu3220ak"
    },
    {
      name: "Aleksa",
      review: "Aleksa transformed from a struggling student to a financially independent entrepreneur in just one year.",
      img: "aleksa.jpg",
      videoId: "rup4dintys"
    },
    {
      name: "Michelle",
      review: "Michelle went from juggling various online side gigs to creating a steady income that allows her to live abroad.",
      img: "michelle.jpg",
      videoId: "9lsnni5wtx"
    },
    {
      name: "Guy",
      review: "Guy turned her part-time side hustle into a reliable source of income while working full-time as a nurse.",
      img: "guy.jpg",
      videoId: "9luz6eb8y5"
    },
    {
      name: "Muhammad",
      review: "Muhammad went from struggling with other business models to building a thriving business without needing sales calls.",
      img: "muhammad.jpg",
      videoId: "q03fyag9sb"
    }
  ], zo = [
    "<b>The Drop Servicing Method:</b> Our new strategy for earning online without significant startup costs.",
    "<b>A Simple 4-Step Process:</b> Start your online business journey with just a laptop and internet connection.",
    "<b>Escape The 9-5 Grind:</b> How to transition from traditional employment to being your own boss.",
    "<b>The 2024 Opportunity:</b> How to capitalize on this emerging trend to achieve your financial freedom goals.",
    "<b>Real Success Stories:</b> Get inspired by participants who left their jobs to build successful businesses, gaining the freedom to live on their own terms."
  ], Do = [
    'Dylan Sigley was a broke college student working in a call center when he discovered a new online business method called "Drop Servicing".',
    "Soon after, he built a ridiculously profitable business from home, allowing him to quit his job and earn 6-figures while traveling the world and working only 5 hours a week.",
    "This FREE webclass skips the nonsense to show you, step-by-step, how Dylan grew his business so quickly and how hundreds of others have replicated his success using the same process. It's the most practical, results-driven training you'll find.",
    "Dylan has one of the best (if not the best) track records in the industry for helping people around the world build Drop Servicing Businesses, even as complete beginners with no skills or degree.",
    "Normally, it costs between $4K and $24K to work with Dylan, but in this webclass you get his exact methods for FREE! Register now before this is taken offline in the next few days."
  ], Co = [
    "Aspiring entrepreneurs eager to shift from employee to business owner.",
    "People tired of their jobs and wanting to move towards achieving their financial freedom goals.",
    "Anyone ready for actionable insights to take control of their lives and financial goals."
  ], jo = [
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
      text: "I am extremely satisfied with the Drop Servicing Blueprint course! The content is incredibly in-depth and packed with tons of valuable material that is well-structured and easy to follow. The course itself is worth every penny, but what truly stands out is the exclusive community you gain access to. The experts in the group are very helpful and always willing to answer any questions you may have. Plus, Dylan Sigley himself is super accessible and responsive, which is rare in online courses like this. Thanks to the course, I’ve already bagged a couple of sales and am eager to continue expanding my business with the insights and strategies I've learned. The community support combined with the high-quality course material makes this a winning combination. Fully satisfied and highly recommend!",
      date: "Aug 27, 2024",
      link: "https://www.trustpilot.com/reviews/66cdbcb0c3878fd95a2e31a7"
    },
    {
      name: "Carlos Lima",
      title: "Step-by-Step Guide 4 all",
      text: 'My Experience with the Course is that You have all the information you need (Step-by-step) Dylan and His team guide you thru all the points, configurations, and templates of all you need to do to Thrive in the Niche you Pick. For me, it has been an amazing experience, and being someone that has tried several Online courses about different topics and from different, so-called "Gurus", I can clearly state that this one is worth every penny. Thank You for purring this course together.',
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
      text: "An amazing course with all the details covered from scratch on how to build a business online.<br>Everything need is explained thoroughly with all details and step by step guides from building your website to how to lo get leads to finalizing deals and closing on sales.<br>I strongly recommend this course to anyone who is interested in drop shipping as this course has it all.",
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
      text: "This is my first ever online review because, damn! This course deserves an online review.<br>Since 2010, I have started so many online businesses. From E-commerce to affiliate marketing to trading to falling for stupid scams and loosing hundreds of dollars. If it has trended, I have tried it. You see, I know one thing for sure, I was born to be free. Before this course I had freedom of location working remotely for the best silicon valley start up anyone would want to work for but I still craved freedom of time. Not having to report to someone 5 days a week, 9 to 5.<br>Just when that ache was becoming unbearable and I had started to fight with my employer for more flexibility, I found Dylan. I am very tech savvy but this course is so plainly spelt out that even the least technical person would understand.<br>I just launched my first campaign using the guide in the course and have a few interested clients I am meeting with. This is so surreal. I can't believe am finally running my own business.",
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
      text: "The course starts off with a lot of mindset exercises that I felt really got me out of my funk and into a deeper state of motivation. Then, the rest of the course is jam-packed with so many resources, yet done in a way that doesn't make you feel overwhelmed.<br>I'm still going through his course, but I have already begun recommending it to my friends and family.<br>Also, for everything he offers, I've paid, and I'm not even exaggerating... 10x more for other courses that are not nearly as good. So, if you're looking for a way to break out of the 9-5 rat race, this course is your best shot. Invest in yourself and get to work!",
      date: "Oct 8, 2022",
      link: "https://www.trustpilot.com/reviews/6340ef6bb67840c2ab2b641b"
    },
    {
      name: "Fredrik Ljunggren",
      title: "Amazing course",
      text: "Very easy to follow. You don't have to have any knowledge in how to start a business before entering this course. I did't know much about anything to be honest and I've managed to start an online business and fulfill my dream, thanks to this course.<br>You wont regret buying it.",
      date: "May 16, 2023",
      link: "https://www.trustpilot.com/reviews/64638248fe2b0edcd71caf04"
    }
  ], Io = [
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
  ], k = "https://conversionratestore.github.io/projects/dropservicing/optin/img", Oo = (
    /* HTML */
    `
  <section id="main_block">
    <div class="wrapper">
      <header>
        <img src="${k}/logo.svg" alt="logo" />
      </header>
      <div class="flex">
        <div class="info">
          <div class="tp_label">
            <img src="${k}/trustpilot.svg" alt="stars" />
            <p>
              TrustScore&nbsp;
              <img src="${k}/trustpilot_star.svg" alt="star" />
              <b>4.8/5</b>&nbsp;<span>300+ Reviews</span>
            </p>
          </div>
          <h1>The 4 steps to start your online business in 2024 and unlock financial freedom goals</h1>
          <p>Discover how to go from overworked employee to successful entrepreneur in a FREE Webinar!</p>
          <button class="cta pop mobile">Grab Your FREE Seat Now!</button>
          <div class="youll_list">
            <p>In this FREE training, you’ll learn: <img src="${k}/arrow.svg" alt="arrow" class="desktop" /></p>
            <ul>
              ${zo.map(
      (e) => (
        /* HTML */
        `<li>
                      <img src="${k}/check.svg" alt="check" />
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
                <img src="${k}/dollar.svg" alt="dollar" />
                Free
              </span>
              <span>
                <img src="${k}/frame.svg" alt="frame" />
                Live Training
              </span>
              <span>
                <img src="${k}/calendar.svg" alt="calendar" />
                Today
              </span>
            </p>
            <label><input type="text" placeholder="First Name" /></label>
            <label><input type="email" placeholder="Email Address" /></label>
            <button class="cta">Grab Your FREE Seat Now!</button>
          </form>
          <div class="bonus">
            <p><img src="${k}/present.png" alt="gift" /> Exclusive bonuses!</p>
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
  ), Ro = (
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
        ${Mt.map(
      ({ name: e, review: i, img: r, videoId: l }) => (
        /* HTML */
        `
              <li>
                <div class="slide" data-video="${l}">
                  <div>
                    <div class="img">
                      <img src="${k}/${r}" alt="${e}" />
                    </div>
                    <p><b>${e}</b><img src="${k}/rating_stars.png" alt="stars" /></p>
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
  ), No = (
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
      <img src="${k}/bonus.png" alt="bonus" />
    </div>
  </section>
`
  ), $o = (
    /* HTML */
    `
  <section id="host_block" class="crs_container">
    <div class="img">
      <img src="${k}/founder.jpg" alt="dylan" class="desktop" />
      <img src="${k}/founder_mob.jpg" alt="dylan" class="mobile" />
    </div>
    <div class="info">
      <h2>Your Host: Dylan Sigley</h2>
      <p>7 Figure Drop Servicer</p>
      <ul>
        ${Do.map((e) => (
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
      ${Mt.map(
      ({ name: e, review: i, img: r, videoId: l }) => (
        /* HTML */
        `
            <li>
              <div class="video_slide" data-video="${l}">
                <div class="head">
                  <img src="${k}/${r}" alt="${e}" />
                  <p><b>${e}</b><img src="${k}/rating_stars.png" alt="stars" /></p>
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
  ), qo = (
    /* HTML */
    `
  <section id="training_for" class="crs_container">
    <div class="photo">
      <img src="${k}/founder2.jpg" alt="dylan" />
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
        ${Co.map((e) => (
      /* HTML */
      `<li><img src="${k}/check.svg" alt="check" />${e}</li>`
    )).join("")}
      </ul>
      <p>If any of the above apply to you, you're in the right place!</p>
      <p>Join your Free training to start your business and transform your career</p>
      <button class="cta pop">Join The FREE Training Now</button>
    </div>
  </section>
`
  ), Fo = (
    /* HTML */
    `
  <section id="trust_pilot">
    <div class="crs_container">
      <h2>
        TrustScore&nbsp;<img src="${k}/trustpilot_star.svg" alt="" />&nbsp;<b>4.8/5</b>&nbsp;<span class="desktop"
          >300+ Reviews</span
        >
      </h2>
      <p>People just like you joined the training</p>
      <ul>
        ${jo.map(
      ({ name: e, title: i, text: r, date: l, link: s }) => (
        /* HTML */
        `
              <li>
                <div class="review_slide">
                  <p class="name">${e}<img src="${k}/stars_tp.svg" alt="stars" /></p>
                  <a href="${s}">${i}</a>
                  <p class="text">${r}</p>
                  <p>
                    <span><img src="${k}/check2.svg" alt="check" />Verified User</span>${l}
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
        <p>3,000+ Members <img src="${k}/members.svg" alt="members" /></p>
        <p>4M+ In Revenue <img src="${k}/revenue.svg" alt="revenue" /></p>
        <p>100+ Countries <img src="${k}/countries.svg" alt="countries" /></p>
        <p>15M+ Views <img src="${k}/views.svg" alt="views" /></p>
      </div>
    </div>
  </section>
`
  ), Wo = (
    /* HTML */
    `
  <section id="faq_block">
    <div class="crs_container">
      <h2>Frequently asked questions</h2>
      <ul>
        ${Io.map(
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
  ), Po = (
    /* HTML */
    `
  <section id="last_cta" class="crs_container">
    <div class="img">
      <img src="${k}/product.jpg" alt="product" />
    </div>
    <div>
      <h2>Your Future Starts Here!</h2>
      <p>Transform your life by learning how to create a successful Drop Servicing business.</p>
      <p>Join us and take the first step toward financial independence.</p>
      <button class="cta pop">Join the exclusive training</button>
    </div>
  </section>
`
  ), Yo = (
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
  ), Go = (
    /* HTML */
    `
  <div class="crs_popup_form">
    <div class="form">
      <div class="close"></div>
      <form>
        <h2>Join our Exclusive Online Training</h2>
        <p>We'll email you the link for the training</p>
        <p class="icons">
          <span>
            <img src="${k}/dollar.svg" alt="dollar" />
            Free
          </span>
          <span>
            <img src="${k}/frame.svg" alt="frame" />
            Live Training
          </span>
          <span>
            <img src="${k}/calendar.svg" alt="calendar" />
            Today
          </span>
        </p>
        <label><input type="text" placeholder="First Name" /></label>
        <label><input type="email" placeholder="Email Address" /></label>
        <button class="cta pop">Grab Your FREE Seat Now!</button>
      </form>
      <div class="bonus">
        <p><img src="${k}/present.png" alt="gift" /> Exclusive bonuses!</p>
        <p>Stay until the end of the training to receive the following:</p>
        <ul>
          <li>Comprehensive 12K Sale Tutorial (+Free Copy/Paste Template)</li>
          <li>A Quick Guide to Drop Servicing (Get Selling FAST and for ZERO)</li>
        </ul>
      </div>
    </div>
  </div>
`
  ), Ko = (
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
          <img src="${k}/trustpilot.svg" alt="trustpilot" />TrustScore&nbsp;<img
            src="${k}/trustpilot_star.svg"
            alt="star"
          /><span>4.8</span>
        </p>
      </div>
      <button class="cta pop">Grab Your FREE Seat Now!</button>
    </div>
  </div>
`
  );
  var Ye = window, jn = Ye.requestAnimationFrame || Ye.webkitRequestAnimationFrame || Ye.mozRequestAnimationFrame || Ye.msRequestAnimationFrame || function(e) {
    return setTimeout(e, 16);
  }, gi = window, Lt = gi.cancelAnimationFrame || gi.mozCancelAnimationFrame || function(e) {
    clearTimeout(e);
  };
  function zt() {
    for (var e, i, r, l = arguments[0] || {}, s = 1, f = arguments.length; s < f; s++)
      if ((e = arguments[s]) !== null)
        for (i in e)
          r = e[i], l !== r && r !== void 0 && (l[i] = r);
    return l;
  }
  function wn(e) {
    return ["true", "false"].indexOf(e) >= 0 ? JSON.parse(e) : e;
  }
  function yn(e, i, r, l) {
    if (l)
      try {
        e.setItem(i, r);
      } catch {
      }
    return r;
  }
  function Vo() {
    var e = window.tnsId;
    return window.tnsId = e ? e + 1 : 1, "tns" + window.tnsId;
  }
  function Ge() {
    var e = document, i = e.body;
    return i || (i = e.createElement("body"), i.fake = !0), i;
  }
  var be = document.documentElement;
  function Ke(e) {
    var i = "";
    return e.fake && (i = be.style.overflow, e.style.background = "", e.style.overflow = be.style.overflow = "hidden", be.appendChild(e)), i;
  }
  function Ve(e, i) {
    e.fake && (e.remove(), be.style.overflow = i, be.offsetHeight);
  }
  function Jo() {
    var e = document, i = Ge(), r = Ke(i), l = e.createElement("div"), s = !1;
    i.appendChild(l);
    try {
      for (var f = "(10px * 10)", S = ["calc" + f, "-moz-calc" + f, "-webkit-calc" + f], x, L = 0; L < 3; L++)
        if (x = S[L], l.style.width = x, l.offsetWidth === 100) {
          s = x.replace(f, "");
          break;
        }
    } catch {
    }
    return i.fake ? Ve(i, r) : l.remove(), s;
  }
  function Zo() {
    var e = document, i = Ge(), r = Ke(i), l = e.createElement("div"), s = e.createElement("div"), f = "", S = 70, x = 3, L = !1;
    l.className = "tns-t-subp2", s.className = "tns-t-ct";
    for (var K = 0; K < S; K++)
      f += "<div></div>";
    return s.innerHTML = f, l.appendChild(s), i.appendChild(l), L = Math.abs(l.getBoundingClientRect().left - s.children[S - x].getBoundingClientRect().left) < 2, i.fake ? Ve(i, r) : l.remove(), L;
  }
  function Qo() {
    if (window.matchMedia || window.msMatchMedia)
      return !0;
    var e = document, i = Ge(), r = Ke(i), l = e.createElement("div"), s = e.createElement("style"), f = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", S;
    return s.type = "text/css", l.className = "tns-mq-test", i.appendChild(s), i.appendChild(l), s.styleSheet ? s.styleSheet.cssText = f : s.appendChild(e.createTextNode(f)), S = window.getComputedStyle ? window.getComputedStyle(l).position : l.currentStyle.position, i.fake ? Ve(i, r) : l.remove(), S === "absolute";
  }
  function Uo(e, i) {
    var r = document.createElement("style");
    return e && r.setAttribute("media", e), i && r.setAttribute("nonce", i), document.querySelector("head").appendChild(r), r.sheet ? r.sheet : r.styleSheet;
  }
  function zn(e, i, r, l) {
    "insertRule" in e ? e.insertRule(i + "{" + r + "}", l) : e.addRule(i, r, l);
  }
  function Xo(e, i) {
    "deleteRule" in e ? e.deleteRule(i) : e.removeRule(i);
  }
  function kn(e) {
    var i = "insertRule" in e ? e.cssRules : e.rules;
    return i.length;
  }
  function Bo(e, i) {
    return Math.atan2(e, i) * (180 / Math.PI);
  }
  function na(e, i) {
    var r = !1, l = Math.abs(90 - Math.abs(e));
    return l >= 90 - i ? r = "horizontal" : l <= i && (r = "vertical"), r;
  }
  function In(e, i, r) {
    for (var l = 0, s = e.length; l < s; l++)
      i.call(r, e[l], l);
  }
  var Dt = "classList" in document.createElement("_"), ae = Dt ? function(e, i) {
    return e.classList.contains(i);
  } : function(e, i) {
    return e.className.indexOf(i) >= 0;
  }, N = Dt ? function(e, i) {
    ae(e, i) || e.classList.add(i);
  } : function(e, i) {
    ae(e, i) || (e.className += " " + i);
  }, on = Dt ? function(e, i) {
    ae(e, i) && e.classList.remove(i);
  } : function(e, i) {
    ae(e, i) && (e.className = e.className.replace(i, ""));
  };
  function ve(e, i) {
    return e.hasAttribute(i);
  }
  function Je(e, i) {
    return e.getAttribute(i);
  }
  function mi(e) {
    return typeof e.item < "u";
  }
  function dn(e, i) {
    if (e = mi(e) || e instanceof Array ? e : [e], Object.prototype.toString.call(i) === "[object Object]")
      for (var r = e.length; r--; )
        for (var l in i)
          e[r].setAttribute(l, i[l]);
  }
  function On(e, i) {
    e = mi(e) || e instanceof Array ? e : [e], i = i instanceof Array ? i : [i];
    for (var r = i.length, l = e.length; l--; )
      for (var s = r; s--; )
        e[l].removeAttribute(i[s]);
  }
  function bi(e) {
    for (var i = [], r = 0, l = e.length; r < l; r++)
      i.push(e[r]);
    return i;
  }
  function fn(e, i) {
    e.style.display !== "none" && (e.style.display = "none");
  }
  function pn(e, i) {
    e.style.display === "none" && (e.style.display = "");
  }
  function vi(e) {
    return window.getComputedStyle(e).display !== "none";
  }
  function xe(e) {
    if (typeof e == "string") {
      var i = [e], r = e.charAt(0).toUpperCase() + e.substr(1), l = ["Webkit", "Moz", "ms", "O"];
      l.forEach(function(x) {
        (x !== "ms" || e === "transform") && i.push(x + r);
      }), e = i;
    }
    var s = document.createElement("fakeelement");
    e.length;
    for (var f = 0; f < e.length; f++) {
      var S = e[f];
      if (s.style[S] !== void 0)
        return S;
    }
    return !1;
  }
  function ea(e) {
    if (!e || !window.getComputedStyle)
      return !1;
    var i = document, r = Ge(), l = Ke(r), s = i.createElement("p"), f, S = e.length > 9 ? "-" + e.slice(0, -9).toLowerCase() + "-" : "";
    return S += "transform", r.insertBefore(s, null), s.style[e] = "translate3d(1px,1px,1px)", f = window.getComputedStyle(s).getPropertyValue(S), r.fake ? Ve(r, l) : s.remove(), f !== void 0 && f.length > 0 && f !== "none";
  }
  function xi(e, i) {
    var r = !1;
    return /^Webkit/.test(e) ? r = "webkit" + i + "End" : /^O/.test(e) ? r = "o" + i + "End" : e && (r = i.toLowerCase() + "end"), r;
  }
  var wi = !1;
  try {
    var ta = Object.defineProperty({}, "passive", {
      get: function() {
        wi = !0;
      }
    });
    window.addEventListener("test", null, ta);
  } catch {
  }
  var yi = wi ? { passive: !0 } : !1;
  function R(e, i, r) {
    for (var l in i) {
      var s = ["touchstart", "touchmove"].indexOf(l) >= 0 && !r ? yi : !1;
      e.addEventListener(l, i[l], s);
    }
  }
  function Y(e, i) {
    for (var r in i) {
      var l = ["touchstart", "touchmove"].indexOf(r) >= 0 ? yi : !1;
      e.removeEventListener(r, i[r], l);
    }
  }
  function ia() {
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
  function oa(e, i, r, l, K, f, S) {
    var x = Math.min(f, 10), L = K.indexOf("%") >= 0 ? "%" : "px", K = K.replace(L, ""), an = Number(e.style[i].replace(r, "").replace(l, "").replace(L, "")), Zn = (K - an) / f * x;
    setTimeout(Qe, x);
    function Qe() {
      f -= x, an += Zn, e.style[i] = r + an + L + l, f > 0 ? setTimeout(Qe, x) : S();
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
  var Ze = function(e) {
    e = zt({
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
    }, s = {}, f = e.useLocalStorage;
    if (f) {
      var S = navigator.userAgent, x = /* @__PURE__ */ new Date();
      try {
        s = r.localStorage, s ? (s.setItem(x, x), f = s.getItem(x) == x, s.removeItem(x)) : f = !1, f || (s = {});
      } catch {
        f = !1;
      }
      f && (s.tnsApp && s.tnsApp !== S && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(n) {
        s.removeItem(n);
      }), localStorage.tnsApp = S);
    }
    var L = s.tC ? wn(s.tC) : yn(s, "tC", Jo(), f), K = s.tPL ? wn(s.tPL) : yn(s, "tPL", Zo(), f), an = s.tMQ ? wn(s.tMQ) : yn(s, "tMQ", Qo(), f), Zn = s.tTf ? wn(s.tTf) : yn(s, "tTf", xe("transform"), f), Qe = s.t3D ? wn(s.t3D) : yn(s, "t3D", ea(Zn), f), X = s.tTDu ? wn(s.tTDu) : yn(s, "tTDu", xe("transitionDuration"), f), Ue = s.tTDe ? wn(s.tTDe) : yn(s, "tTDe", xe("transitionDelay"), f), Xe = s.tADu ? wn(s.tADu) : yn(s, "tADu", xe("animationDuration"), f), Ct = s.tADe ? wn(s.tADe) : yn(s, "tADe", xe("animationDelay"), f), Qn = s.tTE ? wn(s.tTE) : yn(s, "tTE", xi(X, "Transition"), f), _i = s.tAE ? wn(s.tAE) : yn(s, "tAE", xi(Xe, "Animation"), f), ki = r.console && typeof r.console.warn == "function", jt = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], Ti = {};
    if (jt.forEach(function(n) {
      if (typeof e[n] == "string") {
        var t = e[n], o = i.querySelector(t);
        if (Ti[n] = t, o && o.nodeName)
          e[n] = o;
        else {
          ki && console.warn("Can't find", e[n]);
          return;
        }
      }
    }), e.container.children.length < 1) {
      ki && console.warn("No slides found in", e.container);
      return;
    }
    var C = e.responsive, re = e.nested, p = e.mode === "carousel";
    if (C) {
      0 in C && (e = zt(e, C[0]), delete C[0]);
      var It = {};
      for (var Ei in C) {
        var we = C[Ei];
        we = typeof we == "number" ? { items: we } : we, It[Ei] = we;
      }
      C = It, It = null;
    }
    function Si(n) {
      for (var t in n)
        p || (t === "slideBy" && (n[t] = "page"), t === "edgePadding" && (n[t] = !1), t === "autoHeight" && (n[t] = !1)), t === "responsive" && Si(n[t]);
    }
    if (p || Si(e), !p) {
      e.axis = "horizontal", e.slideBy = "page", e.edgePadding = !1;
      var Rn = e.animateIn, Be = e.animateOut, Ot = e.animateDelay, Tn = e.animateNormal;
    }
    var A = e.axis === "horizontal", en = i.createElement("div"), tn = i.createElement("div"), rn, g = e.container, Rt = g.parentNode, Ai = g.outerHTML, T = g.children, m = T.length, ye, nt = Hi(), _e = !1;
    C && Ui(), p && (g.className += " tns-vpfix");
    var v = e.autoWidth, u = b("fixedWidth"), I = b("edgePadding"), y = b("gutter"), F = Fi(), V = b("center"), w = v ? 1 : Math.floor(b("items")), se = b("slideBy"), Nt = e.viewportMax || e.fixedWidthViewportWidth, Nn = b("arrowKeys"), mn = b("speed"), ke = e.rewind, J = ke ? !1 : e.loop, sn = b("autoHeight"), En = b("controls"), $n = b("controlsText"), Sn = b("nav"), Hn = b("touch"), qn = b("mouseDrag"), B = b("autoplay"), $t = b("autoplayTimeout"), Fn = b("autoplayText"), Wn = b("autoplayHoverPause"), Pn = b("autoplayResetOnVisibility"), M = Uo(null, b("nonce")), Te = e.lazyload, ra = e.lazyloadSelector, $, le = [], Z = J ? da() : 0, E = p ? m + Z * 2 : m + Z, Mi = !!((u || v) && !J), ce = u ? ii() : null, Ht = !p || !J, Un = A ? "left" : "top", Yn = "", de = "", Ee = /* @__PURE__ */ function() {
      return u ? function() {
        return V && !J ? m - 1 : Math.ceil(-ce / (u + y));
      } : v ? function() {
        for (var n = 0; n < E; n++)
          if ($[n] >= -ce)
            return n;
      } : function() {
        return V && p && !J ? m - 1 : J || p ? Math.max(0, E - Math.ceil(w)) : E - 1;
      };
    }(), c = Ni(b("startIndex")), Gn = c;
    Ri();
    var An = 0, un = v ? null : Ee(), et = e.preventActionWhenRunning, tt = e.swipeAngle, Mn = tt ? "?" : !0, Kn = !1, qt = e.onInit, W = new ia(), Vn = " tns-slider tns-" + e.mode, j = g.id || Vo(), ln = b("disable"), Se = !1, it = e.freezable, bn = it && !v ? Qt() : !1, Ae = !1, Me = {
      click: Jn,
      keydown: Ca
    }, Ft = {
      click: Ea,
      keydown: ja
    }, Le = {
      mouseover: La,
      mouseout: za
    }, ze = { visibilitychange: Ma }, De = { keydown: Da }, Ce = {
      touchstart: wo,
      touchmove: yo,
      touchend: At,
      touchcancel: At
    }, je = {
      mousedown: wo,
      mousemove: yo,
      mouseup: At,
      mouseleave: At
    }, ot = Dn("controls"), Wt = Dn("nav"), Ie = v ? !0 : e.navAsThumbnails, Pt = Dn("autoplay"), Li = Dn("touch"), zi = Dn("mouseDrag"), Yt = "tns-slide-active", Di = "tns-slide-cloned", at = "tns-complete", rt = {
      load: ba,
      error: va
    }, Gt, Kt, Oe = e.preventScrollOnTouch === "force";
    if (ot)
      var H = e.controlsContainer, Ci = e.controlsContainer ? e.controlsContainer.outerHTML : "", z = e.prevButton, D = e.nextButton, sa = e.prevButton ? e.prevButton.outerHTML : "", la = e.nextButton ? e.nextButton.outerHTML : "", Re, Ne;
    if (Wt)
      var Q = e.navContainer, ji = e.navContainer ? e.navContainer.outerHTML : "", hn, vn = v ? m : ko(), Xn = 0, Bn = -1, gn = $i(), fe = gn, st = "tns-nav-active", pe = "Carousel Page ", Vt = " (Current Slide)";
    if (Pt)
      var Ii = e.autoplayDirection === "forward" ? 1 : -1, O = e.autoplayButton, Oi = e.autoplayButton ? e.autoplayButton.outerHTML : "", $e = ["<span class='tns-visually-hidden'>", " animation</span>"], lt, cn, ct, ue, dt;
    if (Li || zi)
      var ne = {}, _n = {}, ft, ee = !1, xn, Jt = A ? function(n, t) {
        return n.x - t.x;
      } : function(n, t) {
        return n.y - t.y;
      };
    v || pt(ln || bn), Zn && (Un = Zn, Yn = "translate", Qe ? (Yn += A ? "3d(" : "3d(0px, ", de = A ? ", 0px, 0px)" : ", 0px)") : (Yn += A ? "X(" : "Y(", de = ")")), p && (g.className = g.className.replace("tns-vpfix", "")), pa(), ua(), Yi();
    function pt(n) {
      n && (En = Sn = Hn = qn = Nn = B = Wn = Pn = !1);
    }
    function Ri() {
      for (var n = p ? c - Z : c; n < 0; )
        n += m;
      return n % m + 1;
    }
    function Ni(n) {
      return n = n ? Math.max(0, Math.min(J ? m - 1 : m - w, n)) : 0, p ? n + Z : n;
    }
    function ut(n) {
      for (n == null && (n = c), p && (n -= Z); n < 0; )
        n += m;
      return Math.floor(n % m);
    }
    function $i() {
      var n = ut(), t;
      return t = Ie ? n : u || v ? Math.ceil((n + 1) * vn / m - 1) : Math.floor(n / w), !J && p && c === un && (t = vn - 1), t;
    }
    function ca() {
      if (v || u && !Nt)
        return m - 1;
      var n = u ? "fixedWidth" : "items", t = [];
      if ((u || e[n] < m) && t.push(e[n]), C)
        for (var o in C) {
          var a = C[o][n];
          a && (u || a < m) && t.push(a);
        }
      return t.length || t.push(0), Math.ceil(u ? Nt / Math.min.apply(null, t) : Math.max.apply(null, t));
    }
    function da() {
      var n = ca(), t = p ? Math.ceil((n * 5 - m) / 2) : n * 4 - m;
      return t = Math.max(n, t), Dn("edgePadding") ? t + 1 : t;
    }
    function Hi() {
      return r.innerWidth || i.documentElement.clientWidth || i.body.clientWidth;
    }
    function Zt(n) {
      return n === "top" ? "afterbegin" : "beforeend";
    }
    function qi(n) {
      if (n != null) {
        var t = i.createElement("div"), o, a;
        return n.appendChild(t), o = t.getBoundingClientRect(), a = o.right - o.left, t.remove(), a || qi(n.parentNode);
      }
    }
    function Fi() {
      var n = I ? I * 2 - y : 0;
      return qi(Rt) - n;
    }
    function Dn(n) {
      if (e[n])
        return !0;
      if (C) {
        for (var t in C)
          if (C[t][n])
            return !0;
      }
      return !1;
    }
    function b(n, t) {
      if (t == null && (t = nt), n === "items" && u)
        return Math.floor((F + y) / (u + y)) || 1;
      var o = e[n];
      if (C)
        for (var a in C)
          t >= parseInt(a) && n in C[a] && (o = C[a][n]);
      return n === "slideBy" && o === "page" && (o = b("items")), !p && (n === "slideBy" || n === "items") && (o = Math.floor(o)), o;
    }
    function fa(n) {
      return L ? L + "(" + n * 100 + "% / " + E + ")" : n * 100 / E + "%";
    }
    function ht(n, t, o, a, d) {
      var h = "";
      if (n !== void 0) {
        var _ = n;
        t && (_ -= t), h = A ? "margin: 0 " + _ + "px 0 " + n + "px;" : "margin: " + n + "px 0 " + _ + "px 0;";
      } else if (t && !o) {
        var P = "-" + t + "px", U = A ? P + " 0 0" : "0 " + P + " 0";
        h = "margin: 0 " + U + ";";
      }
      return !p && d && X && a && (h += te(a)), h;
    }
    function gt(n, t, o) {
      return n ? (n + t) * E + "px" : L ? L + "(" + E * 100 + "% / " + o + ")" : E * 100 / o + "%";
    }
    function mt(n, t, o) {
      var a;
      if (n)
        a = n + t + "px";
      else {
        p || (o = Math.floor(o));
        var d = p ? E : o;
        a = L ? L + "(100% / " + d + ")" : 100 / d + "%";
      }
      return a = "width:" + a, re !== "inner" ? a + ";" : a + " !important;";
    }
    function bt(n) {
      var t = "";
      if (n !== !1) {
        var o = A ? "padding-" : "margin-", a = A ? "right" : "bottom";
        t = o + a + ": " + n + "px;";
      }
      return t;
    }
    function Wi(n, t) {
      var o = n.substring(0, n.length - t).toLowerCase();
      return o && (o = "-" + o + "-"), o;
    }
    function te(n) {
      return Wi(X, 18) + "transition-duration:" + n / 1e3 + "s;";
    }
    function Pi(n) {
      return Wi(Xe, 17) + "animation-duration:" + n / 1e3 + "s;";
    }
    function pa() {
      var n = "tns-outer", t = "tns-inner";
      if (Dn("gutter"), en.className = n, tn.className = t, en.id = j + "-ow", tn.id = j + "-iw", g.id === "" && (g.id = j), Vn += K || v ? " tns-subpixel" : " tns-no-subpixel", Vn += L ? " tns-calc" : " tns-no-calc", v && (Vn += " tns-autowidth"), Vn += " tns-" + e.axis, g.className += Vn, p ? (rn = i.createElement("div"), rn.id = j + "-mw", rn.className = "tns-ovh", en.appendChild(rn), rn.appendChild(tn)) : en.appendChild(tn), sn) {
        var o = rn || tn;
        o.className += " tns-ah";
      }
      if (Rt.insertBefore(en, g), tn.appendChild(g), In(T, function(q, ge) {
        N(q, "tns-item"), q.id || (q.id = j + "-item" + ge), !p && Tn && N(q, Tn), dn(q, {
          "aria-hidden": "true",
          tabindex: "-1"
        });
      }), Z) {
        for (var a = i.createDocumentFragment(), d = i.createDocumentFragment(), h = Z; h--; ) {
          var _ = h % m, P = T[_].cloneNode(!0);
          if (N(P, Di), On(P, "id"), d.insertBefore(P, d.firstChild), p) {
            var U = T[m - 1 - _].cloneNode(!0);
            N(U, Di), On(U, "id"), a.appendChild(U);
          }
        }
        g.insertBefore(a, g.firstChild), g.appendChild(d), T = g.children;
      }
    }
    function Yi() {
      if (Dn("autoHeight") || v || !A) {
        var n = g.querySelectorAll("img");
        In(n, function(t) {
          var o = t.src;
          Te || (o && o.indexOf("data:image") < 0 ? (t.src = "", R(t, rt), N(t, "loading"), t.src = o) : io(t));
        }), jn(function() {
          wt(bi(n), function() {
            Gt = !0;
          });
        }), Dn("autoHeight") && (n = ei(c, Math.min(c + w - 1, E - 1))), Te ? Gi() : jn(function() {
          wt(bi(n), Gi);
        });
      } else
        p && qe(), Vi(), Ji();
    }
    function Gi() {
      if (v && m > 1) {
        var n = J ? c : m - 1;
        (function t() {
          var o = T[n].getBoundingClientRect().left, a = T[n - 1].getBoundingClientRect().right;
          Math.abs(o - a) <= 1 ? Ki() : setTimeout(function() {
            t();
          }, 16);
        })();
      } else
        Ki();
    }
    function Ki() {
      (!A || v) && (so(), v ? (ce = ii(), it && (bn = Qt()), un = Ee(), pt(ln || bn)) : ri()), p && qe(), Vi(), Ji();
    }
    function ua() {
      if (!p)
        for (var n = c, t = c + Math.min(m, w); n < t; n++) {
          var o = T[n];
          o.style.left = (n - c) * 100 / w + "%", N(o, Rn), on(o, Tn);
        }
      if (A && (K || v ? (zn(M, "#" + j + " > .tns-item", "font-size:" + r.getComputedStyle(T[0]).fontSize + ";", kn(M)), zn(M, "#" + j, "font-size:0;", kn(M))) : p && In(T, function(di, fi) {
        di.style.marginLeft = fa(fi);
      })), an) {
        if (X) {
          var a = rn && e.autoHeight ? te(e.speed) : "";
          zn(M, "#" + j + "-mw", a, kn(M));
        }
        a = ht(e.edgePadding, e.gutter, e.fixedWidth, e.speed, e.autoHeight), zn(M, "#" + j + "-iw", a, kn(M)), p && (a = A && !v ? "width:" + gt(e.fixedWidth, e.gutter, e.items) + ";" : "", X && (a += te(mn)), zn(M, "#" + j, a, kn(M))), a = A && !v ? mt(e.fixedWidth, e.gutter, e.items) : "", e.gutter && (a += bt(e.gutter)), p || (X && (a += te(mn)), Xe && (a += Pi(mn))), a && zn(M, "#" + j + " > .tns-item", a, kn(M));
      } else {
        wa(), tn.style.cssText = ht(I, y, u, sn), p && A && !v && (g.style.width = gt(u, y, w));
        var a = A && !v ? mt(u, y, w) : "";
        y && (a += bt(y)), a && zn(M, "#" + j + " > .tns-item", a, kn(M));
      }
      if (C && an)
        for (var d in C) {
          d = parseInt(d);
          var h = C[d], a = "", _ = "", P = "", U = "", q = "", ge = v ? null : b("items", d), Pe = b("fixedWidth", d), oe = b("speed", d), li = b("edgePadding", d), ci = b("autoHeight", d), me = b("gutter", d);
          X && rn && b("autoHeight", d) && "speed" in h && (_ = "#" + j + "-mw{" + te(oe) + "}"), ("edgePadding" in h || "gutter" in h) && (P = "#" + j + "-iw{" + ht(li, me, Pe, oe, ci) + "}"), p && A && !v && ("fixedWidth" in h || "items" in h || u && "gutter" in h) && (U = "width:" + gt(Pe, me, ge) + ";"), X && "speed" in h && (U += te(oe)), U && (U = "#" + j + "{" + U + "}"), ("fixedWidth" in h || u && "gutter" in h || !p && "items" in h) && (q += mt(Pe, me, ge)), "gutter" in h && (q += bt(me)), !p && "speed" in h && (X && (q += te(oe)), Xe && (q += Pi(oe))), q && (q = "#" + j + " > .tns-item{" + q + "}"), a = _ + P + U + q, a && M.insertRule("@media (min-width: " + d / 16 + "em) {" + a + "}", M.cssRules.length);
        }
    }
    function Vi() {
      if (ti(), en.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + to() + "</span>  of " + m + "</div>"), Kt = en.querySelector(".tns-liveregion .current"), Pt) {
        var n = B ? "stop" : "start";
        O ? dn(O, { "data-action": n }) : e.autoplayButtonOutput && (en.insertAdjacentHTML(Zt(e.autoplayPosition), '<button type="button" data-action="' + n + '">' + $e[0] + n + $e[1] + Fn[0] + "</button>"), O = en.querySelector("[data-action]")), O && R(O, { click: mo }), B && (St(), Wn && R(g, Le), Pn && R(g, ze));
      }
      if (Wt) {
        if (Q)
          dn(Q, { "aria-label": "Carousel Pagination" }), hn = Q.children, In(hn, function(_, P) {
            dn(_, {
              "data-nav": P,
              tabindex: "-1",
              "aria-label": pe + (P + 1),
              "aria-controls": j
            });
          });
        else {
          for (var t = "", o = Ie ? "" : 'style="display:none"', a = 0; a < m; a++)
            t += '<button type="button" data-nav="' + a + '" tabindex="-1" aria-controls="' + j + '" ' + o + ' aria-label="' + pe + (a + 1) + '"></button>';
          t = '<div class="tns-nav" aria-label="Carousel Pagination">' + t + "</div>", en.insertAdjacentHTML(Zt(e.navPosition), t), Q = en.querySelector(".tns-nav"), hn = Q.children;
        }
        if (si(), X) {
          var d = X.substring(0, X.length - 18).toLowerCase(), h = "transition: all " + mn / 1e3 + "s";
          d && (h = "-" + d + "-" + h), zn(M, "[aria-controls^=" + j + "-item]", h, kn(M));
        }
        dn(hn[gn], { "aria-label": pe + (gn + 1) + Vt }), On(hn[gn], "tabindex"), N(hn[gn], st), R(Q, Ft);
      }
      ot && (!H && (!z || !D) && (en.insertAdjacentHTML(Zt(e.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + j + '">' + $n[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + j + '">' + $n[1] + "</button></div>"), H = en.querySelector(".tns-controls")), (!z || !D) && (z = H.children[0], D = H.children[1]), e.controlsContainer && dn(H, {
        "aria-label": "Carousel Navigation",
        tabindex: "0"
      }), (e.controlsContainer || e.prevButton && e.nextButton) && dn([z, D], {
        "aria-controls": j,
        tabindex: "-1"
      }), (e.controlsContainer || e.prevButton && e.nextButton) && (dn(z, { "data-controls": "prev" }), dn(D, { "data-controls": "next" })), Re = co(z), Ne = co(D), po(), H ? R(H, Me) : (R(z, Me), R(D, Me))), Xt();
    }
    function Ji() {
      if (p && Qn) {
        var n = {};
        n[Qn] = Ln, R(g, n);
      }
      Hn && R(g, Ce, e.preventScrollOnTouch), qn && R(g, je), Nn && R(i, De), re === "inner" ? W.on("outerResized", function() {
        Qi(), W.emit("innerLoaded", nn());
      }) : (C || u || v || sn || !A) && R(r, { resize: Zi }), sn && (re === "outer" ? W.on("innerLoaded", xt) : ln || xt()), Bt(), ln ? no() : bn && Bi(), W.on("indexChanged", oo), re === "inner" && W.emit("innerLoaded", nn()), typeof qt == "function" && qt(nn()), _e = !0;
    }
    function ha() {
      if (M.disabled = !0, M.ownerNode && M.ownerNode.remove(), Y(r, { resize: Zi }), Nn && Y(i, De), H && Y(H, Me), Q && Y(Q, Ft), Y(g, Le), Y(g, ze), O && Y(O, { click: mo }), B && clearInterval(lt), p && Qn) {
        var n = {};
        n[Qn] = Ln, Y(g, n);
      }
      Hn && Y(g, Ce), qn && Y(g, je);
      var t = [Ai, Ci, sa, la, ji, Oi];
      jt.forEach(function(a, d) {
        var h = a === "container" ? en : e[a];
        if (typeof h == "object" && h) {
          var _ = h.previousElementSibling ? h.previousElementSibling : !1, P = h.parentNode;
          h.outerHTML = t[d], e[a] = _ ? _.nextElementSibling : P.firstElementChild;
        }
      }), jt = Rn = Be = Ot = Tn = A = en = tn = g = Rt = Ai = T = m = ye = nt = v = u = I = y = F = w = se = Nt = Nn = mn = ke = J = sn = M = Te = $ = le = Z = E = Mi = ce = Ht = Un = Yn = de = Ee = c = Gn = An = un = tt = Mn = Kn = qt = W = Vn = j = ln = Se = it = bn = Ae = Me = Ft = Le = ze = De = Ce = je = ot = Wt = Ie = Pt = Li = zi = Yt = at = rt = Gt = En = $n = H = Ci = z = D = Re = Ne = Sn = Q = ji = hn = vn = Xn = Bn = gn = fe = st = pe = Vt = B = $t = Ii = Fn = Wn = O = Oi = Pn = $e = lt = cn = ct = ue = dt = ne = _n = ft = ee = xn = Jt = Hn = qn = null;
      for (var o in this)
        o !== "rebuild" && (this[o] = null);
      _e = !1;
    }
    function Zi(n) {
      jn(function() {
        Qi(Cn(n));
      });
    }
    function Qi(n) {
      if (_e) {
        re === "outer" && W.emit("outerResized", nn(n)), nt = Hi();
        var t, o = ye, a = !1;
        C && (Ui(), t = o !== ye, t && W.emit("newBreakpointStart", nn(n)));
        var d, h, _ = w, P = ln, U = bn, q = Nn, ge = En, Pe = Sn, oe = Hn, li = qn, ci = B, me = Wn, di = Pn, fi = c;
        if (t) {
          var Ia = u, Oa = sn, Ra = $n, Na = V, pi = Fn;
          if (!an)
            var $a = y, Ha = I;
        }
        if (Nn = b("arrowKeys"), En = b("controls"), Sn = b("nav"), Hn = b("touch"), V = b("center"), qn = b("mouseDrag"), B = b("autoplay"), Wn = b("autoplayHoverPause"), Pn = b("autoplayResetOnVisibility"), t && (ln = b("disable"), u = b("fixedWidth"), mn = b("speed"), sn = b("autoHeight"), $n = b("controlsText"), Fn = b("autoplayText"), $t = b("autoplayTimeout"), an || (I = b("edgePadding"), y = b("gutter"))), pt(ln), F = Fi(), (!A || v) && !ln && (so(), A || (ri(), a = !0)), (u || v) && (ce = ii(), un = Ee()), (t || u) && (w = b("items"), se = b("slideBy"), h = w !== _, h && (!u && !v && (un = Ee()), Ut())), t && ln !== P && (ln ? no() : ma()), it && (t || u || v) && (bn = Qt(), bn !== U && (bn ? (oi(kt(Ni(0))), Bi()) : (ga(), a = !0))), pt(ln || bn), B || (Wn = Pn = !1), Nn !== q && (Nn ? R(i, De) : Y(i, De)), En !== ge && (En ? H ? pn(H) : (z && pn(z), D && pn(D)) : H ? fn(H) : (z && fn(z), D && fn(D))), Sn !== Pe && (Sn ? (pn(Q), si()) : fn(Q)), Hn !== oe && (Hn ? R(g, Ce, e.preventScrollOnTouch) : Y(g, Ce)), qn !== li && (qn ? R(g, je) : Y(g, je)), B !== ci && (B ? (O && pn(O), !cn && !ue && St()) : (O && fn(O), cn && We())), Wn !== me && (Wn ? R(g, Le) : Y(g, Le)), Pn !== di && (Pn ? R(i, ze) : Y(i, ze)), t) {
          if ((u !== Ia || V !== Na) && (a = !0), sn !== Oa && (sn || (tn.style.height = "")), En && $n !== Ra && (z.innerHTML = $n[0], D.innerHTML = $n[1]), O && Fn !== pi) {
            var ui = B ? 1 : 0, hi = O.innerHTML, To = hi.length - pi[ui].length;
            hi.substring(To) === pi[ui] && (O.innerHTML = hi.substring(0, To) + Fn[ui]);
          }
        } else
          V && (u || v) && (a = !0);
        if ((h || u && !v) && (vn = ko(), si()), d = c !== fi, d ? (W.emit("indexChanged", nn()), a = !0) : h ? d || oo() : (u || v) && (Bt(), ti(), eo()), h && !p && ya(), !ln && !bn) {
          if (t && !an && ((I !== Ha || y !== $a) && (tn.style.cssText = ht(I, y, u, mn, sn)), A)) {
            p && (g.style.width = gt(u, y, w));
            var qa = mt(u, y, w) + bt(y);
            Xo(M, kn(M) - 1), zn(M, "#" + j + " > .tns-item", qa, kn(M));
          }
          sn && xt(), a && (qe(), Gn = c);
        }
        t && W.emit("newBreakpointEnd", nn(n));
      }
    }
    function Qt() {
      if (!u && !v) {
        var n = V ? w - (w - 1) / 2 : w;
        return m <= n;
      }
      var t = u ? (u + y) * m : $[m], o = I ? F + I * 2 : F + y;
      return V && (o -= u ? (F - u) / 2 : (F - ($[c + 1] - $[c] - y)) / 2), t <= o;
    }
    function Ui() {
      ye = 0;
      for (var n in C)
        n = parseInt(n), nt >= n && (ye = n);
    }
    var Ut = /* @__PURE__ */ function() {
      return J ? p ? (
        // loop + carousel
        function() {
          var n = An, t = un;
          n += se, t -= se, I ? (n += 1, t -= 1) : u && (F + y) % (u + y) && (t -= 1), Z && (c > t ? c -= m : c < n && (c += m));
        }
      ) : (
        // loop + gallery
        function() {
          if (c > un)
            for (; c >= An + m; )
              c -= m;
          else if (c < An)
            for (; c <= un - m; )
              c += m;
        }
      ) : (
        // non-loop
        function() {
          c = Math.max(An, Math.min(un, c));
        }
      );
    }();
    function Xt() {
      !B && O && fn(O), !Sn && Q && fn(Q), En || (H ? fn(H) : (z && fn(z), D && fn(D)));
    }
    function Xi() {
      B && O && pn(O), Sn && Q && pn(Q), En && (H ? pn(H) : (z && pn(z), D && pn(D)));
    }
    function Bi() {
      if (!Ae) {
        if (I && (tn.style.margin = "0px"), Z)
          for (var n = "tns-transparent", t = Z; t--; )
            p && N(T[t], n), N(T[E - t - 1], n);
        Xt(), Ae = !0;
      }
    }
    function ga() {
      if (Ae) {
        if (I && an && (tn.style.margin = ""), Z)
          for (var n = "tns-transparent", t = Z; t--; )
            p && on(T[t], n), on(T[E - t - 1], n);
        Xi(), Ae = !1;
      }
    }
    function no() {
      if (!Se) {
        if (M.disabled = !0, g.className = g.className.replace(Vn.substring(1), ""), On(g, ["style"]), J)
          for (var n = Z; n--; )
            p && fn(T[n]), fn(T[E - n - 1]);
        if ((!A || !p) && On(tn, ["style"]), !p)
          for (var t = c, o = c + m; t < o; t++) {
            var a = T[t];
            On(a, ["style"]), on(a, Rn), on(a, Tn);
          }
        Xt(), Se = !0;
      }
    }
    function ma() {
      if (Se) {
        if (M.disabled = !1, g.className += Vn, qe(), J)
          for (var n = Z; n--; )
            p && pn(T[n]), pn(T[E - n - 1]);
        if (!p)
          for (var t = c, o = c + m; t < o; t++) {
            var a = T[t], d = t < c + w ? Rn : Tn;
            a.style.left = (t - c) * 100 / w + "%", N(a, d);
          }
        Xi(), Se = !1;
      }
    }
    function eo() {
      var n = to();
      Kt.innerHTML !== n && (Kt.innerHTML = n);
    }
    function to() {
      var n = vt(), t = n[0] + 1, o = n[1] + 1;
      return t === o ? t + "" : t + " to " + o;
    }
    function vt(n) {
      n == null && (n = kt());
      var t = c, o, a, d;
      if (V || I ? (v || u) && (a = -(parseFloat(n) + I), d = a + F + I * 2) : v && (a = $[c], d = a + F), v)
        $.forEach(function(U, q) {
          q < E && ((V || I) && U <= a + 0.5 && (t = q), d - U >= 0.5 && (o = q));
        });
      else {
        if (u) {
          var h = u + y;
          V || I ? (t = Math.floor(a / h), o = Math.ceil(d / h - 1)) : o = t + Math.ceil(F / h) - 1;
        } else if (V || I) {
          var _ = w - 1;
          if (V ? (t -= _ / 2, o = c + _ / 2) : o = c + _, I) {
            var P = I * w / F;
            t -= P, o += P;
          }
          t = Math.floor(t), o = Math.ceil(o);
        } else
          o = t + w - 1;
        t = Math.max(t, 0), o = Math.min(o, E - 1);
      }
      return [t, o];
    }
    function Bt() {
      if (Te && !ln) {
        var n = vt();
        n.push(ra), ei.apply(null, n).forEach(function(t) {
          if (!ae(t, at)) {
            var o = {};
            o[Qn] = function(d) {
              d.stopPropagation();
            }, R(t, o), R(t, rt), t.src = Je(t, "data-src");
            var a = Je(t, "data-srcset");
            a && (t.srcset = a), N(t, "loading");
          }
        });
      }
    }
    function ba(n) {
      io(he(n));
    }
    function va(n) {
      xa(he(n));
    }
    function io(n) {
      N(n, "loaded"), ni(n);
    }
    function xa(n) {
      N(n, "failed"), ni(n);
    }
    function ni(n) {
      N(n, at), on(n, "loading"), Y(n, rt);
    }
    function ei(n, t, o) {
      var a = [];
      for (o || (o = "img"); n <= t; )
        In(T[n].querySelectorAll(o), function(d) {
          a.push(d);
        }), n++;
      return a;
    }
    function xt() {
      var n = ei.apply(null, vt());
      jn(function() {
        wt(n, ro);
      });
    }
    function wt(n, t) {
      if (Gt || (n.forEach(function(o, a) {
        !Te && o.complete && ni(o), ae(o, at) && n.splice(a, 1);
      }), !n.length))
        return t();
      jn(function() {
        wt(n, t);
      });
    }
    function oo() {
      Bt(), ti(), eo(), po(), _a();
    }
    function wa() {
      p && sn && (rn.style[X] = mn / 1e3 + "s");
    }
    function ao(n, t) {
      for (var o = [], a = n, d = Math.min(n + t, E); a < d; a++)
        o.push(T[a].offsetHeight);
      return Math.max.apply(null, o);
    }
    function ro() {
      var n = sn ? ao(c, w) : ao(Z, m), t = rn || tn;
      t.style.height !== n && (t.style.height = n + "px");
    }
    function so() {
      $ = [0];
      var n = A ? "left" : "top", t = A ? "right" : "bottom", o = T[0].getBoundingClientRect()[n];
      In(T, function(a, d) {
        d && $.push(a.getBoundingClientRect()[n] - o), d === E - 1 && $.push(a.getBoundingClientRect()[t] - o);
      });
    }
    function ti() {
      var n = vt(), t = n[0], o = n[1];
      In(T, function(a, d) {
        d >= t && d <= o ? ve(a, "aria-hidden") && (On(a, ["aria-hidden", "tabindex"]), N(a, Yt)) : ve(a, "aria-hidden") || (dn(a, {
          "aria-hidden": "true",
          tabindex: "-1"
        }), on(a, Yt));
      });
    }
    function ya() {
      for (var n = c + Math.min(m, w), t = E; t--; ) {
        var o = T[t];
        t >= c && t < n ? (N(o, "tns-moving"), o.style.left = (t - c) * 100 / w + "%", N(o, Rn), on(o, Tn)) : o.style.left && (o.style.left = "", N(o, Tn), on(o, Rn)), on(o, Be);
      }
      setTimeout(function() {
        In(T, function(a) {
          on(a, "tns-moving");
        });
      }, 300);
    }
    function _a() {
      if (Sn && (gn = Bn >= 0 ? Bn : $i(), Bn = -1, gn !== fe)) {
        var n = hn[fe], t = hn[gn];
        dn(n, {
          tabindex: "-1",
          "aria-label": pe + (fe + 1)
        }), on(n, st), dn(t, { "aria-label": pe + (gn + 1) + Vt }), On(t, "tabindex"), N(t, st), fe = gn;
      }
    }
    function lo(n) {
      return n.nodeName.toLowerCase();
    }
    function co(n) {
      return lo(n) === "button";
    }
    function fo(n) {
      return n.getAttribute("aria-disabled") === "true";
    }
    function yt(n, t, o) {
      n ? t.disabled = o : t.setAttribute("aria-disabled", o.toString());
    }
    function po() {
      if (!(!En || ke || J)) {
        var n = Re ? z.disabled : fo(z), t = Ne ? D.disabled : fo(D), o = c <= An, a = !ke && c >= un;
        o && !n && yt(Re, z, !0), !o && n && yt(Re, z, !1), a && !t && yt(Ne, D, !0), !a && t && yt(Ne, D, !1);
      }
    }
    function _t(n, t) {
      X && (n.style[X] = t);
    }
    function ka() {
      return u ? (u + y) * E : $[E];
    }
    function He(n) {
      n == null && (n = c);
      var t = I ? y : 0;
      return v ? (F - t - ($[n + 1] - $[n] - y)) / 2 : u ? (F - u) / 2 : (w - 1) / 2;
    }
    function ii() {
      var n = I ? y : 0, t = F + n - ka();
      return V && !J && (t = u ? -(u + y) * (E - 1) - He() : He(E - 1) - $[E - 1]), t > 0 && (t = 0), t;
    }
    function kt(n) {
      n == null && (n = c);
      var t;
      if (A && !v)
        if (u)
          t = -(u + y) * n, V && (t += He());
        else {
          var o = Zn ? E : w;
          V && (n -= He()), t = -n * 100 / o;
        }
      else
        t = -$[n], V && v && (t += He());
      return Mi && (t = Math.max(t, ce)), t += A && !v && !u ? "%" : "px", t;
    }
    function qe(n) {
      _t(g, "0s"), oi(n);
    }
    function oi(n) {
      n == null && (n = kt()), g.style[Un] = Yn + n + de;
    }
    function uo(n, t, o, a) {
      var d = n + w;
      J || (d = Math.min(d, E));
      for (var h = n; h < d; h++) {
        var _ = T[h];
        a || (_.style.left = (h - c) * 100 / w + "%"), Ot && Ue && (_.style[Ue] = _.style[Ct] = Ot * (h - n) / 1e3 + "s"), on(_, t), N(_, o), a && le.push(_);
      }
    }
    var Ta = /* @__PURE__ */ function() {
      return p ? function() {
        _t(g, ""), X || !mn ? (oi(), (!mn || !vi(g)) && Ln()) : oa(g, Un, Yn, de, kt(), mn, Ln), A || ri();
      } : function() {
        le = [];
        var n = {};
        n[Qn] = n[_i] = Ln, Y(T[Gn], n), R(T[c], n), uo(Gn, Rn, Be, !0), uo(c, Tn, Rn), (!Qn || !_i || !mn || !vi(g)) && Ln();
      };
    }();
    function ai(n, t) {
      Ht && Ut(), (c !== Gn || t) && (W.emit("indexChanged", nn()), W.emit("transitionStart", nn()), sn && xt(), cn && n && ["click", "keydown"].indexOf(n.type) >= 0 && We(), Kn = !0, Ta());
    }
    function ho(n) {
      return n.toLowerCase().replace(/-/g, "");
    }
    function Ln(n) {
      if (p || Kn) {
        if (W.emit("transitionEnd", nn(n)), !p && le.length > 0)
          for (var t = 0; t < le.length; t++) {
            var o = le[t];
            o.style.left = "", Ct && Ue && (o.style[Ct] = "", o.style[Ue] = ""), on(o, Be), N(o, Tn);
          }
        if (!n || !p && n.target.parentNode === g || n.target === g && ho(n.propertyName) === ho(Un)) {
          if (!Ht) {
            var a = c;
            Ut(), c !== a && (W.emit("indexChanged", nn()), qe());
          }
          re === "inner" && W.emit("innerLoaded", nn()), Kn = !1, Gn = c;
        }
      }
    }
    function Fe(n, t) {
      if (!bn)
        if (n === "prev")
          Jn(t, -1);
        else if (n === "next")
          Jn(t, 1);
        else {
          if (Kn) {
            if (et)
              return;
            Ln();
          }
          var o = ut(), a = 0;
          if (n === "first" ? a = -o : n === "last" ? a = p ? m - w - o : m - 1 - o : (typeof n != "number" && (n = parseInt(n)), isNaN(n) || (t || (n = Math.max(0, Math.min(m - 1, n))), a = n - o)), !p && a && Math.abs(a) < w) {
            var d = a > 0 ? 1 : -1;
            a += c + a - m >= An ? m * d : m * 2 * d * -1;
          }
          c += a, p && J && (c < An && (c += m), c > un && (c -= m)), ut(c) !== ut(Gn) && ai(t);
        }
    }
    function Jn(n, t) {
      if (Kn) {
        if (et)
          return;
        Ln();
      }
      var o;
      if (!t) {
        n = Cn(n);
        for (var a = he(n); a !== H && [z, D].indexOf(a) < 0; )
          a = a.parentNode;
        var d = [z, D].indexOf(a);
        d >= 0 && (o = !0, t = d === 0 ? -1 : 1);
      }
      if (ke) {
        if (c === An && t === -1) {
          Fe("last", n);
          return;
        } else if (c === un && t === 1) {
          Fe("first", n);
          return;
        }
      }
      t && (c += se * t, v && (c = Math.floor(c)), ai(o || n && n.type === "keydown" ? n : null));
    }
    function Ea(n) {
      if (Kn) {
        if (et)
          return;
        Ln();
      }
      n = Cn(n);
      for (var t = he(n), o; t !== Q && !ve(t, "data-nav"); )
        t = t.parentNode;
      if (ve(t, "data-nav")) {
        var o = Bn = Number(Je(t, "data-nav")), a = u || v ? o * m / vn : o * w, d = Ie ? o : Math.min(Math.ceil(a), m - 1);
        Fe(d, n), gn === o && (cn && We(), Bn = -1);
      }
    }
    function Tt() {
      lt = setInterval(function() {
        Jn(null, Ii);
      }, $t), cn = !0;
    }
    function Et() {
      clearInterval(lt), cn = !1;
    }
    function go(n, t) {
      dn(O, { "data-action": n }), O.innerHTML = $e[0] + n + $e[1] + t;
    }
    function St() {
      Tt(), O && go("stop", Fn[1]);
    }
    function We() {
      Et(), O && go("start", Fn[0]);
    }
    function Sa() {
      B && !cn && (St(), ue = !1);
    }
    function Aa() {
      cn && (We(), ue = !0);
    }
    function mo() {
      cn ? (We(), ue = !0) : (St(), ue = !1);
    }
    function Ma() {
      i.hidden ? cn && (Et(), dt = !0) : dt && (Tt(), dt = !1);
    }
    function La() {
      cn && (Et(), ct = !0);
    }
    function za() {
      ct && (Tt(), ct = !1);
    }
    function Da(n) {
      n = Cn(n);
      var t = [l.LEFT, l.RIGHT].indexOf(n.keyCode);
      t >= 0 && Jn(n, t === 0 ? -1 : 1);
    }
    function Ca(n) {
      n = Cn(n);
      var t = [l.LEFT, l.RIGHT].indexOf(n.keyCode);
      t >= 0 && (t === 0 ? z.disabled || Jn(n, -1) : D.disabled || Jn(n, 1));
    }
    function bo(n) {
      n.focus();
    }
    function ja(n) {
      n = Cn(n);
      var t = i.activeElement;
      if (ve(t, "data-nav")) {
        var o = [l.LEFT, l.RIGHT, l.ENTER, l.SPACE].indexOf(n.keyCode), a = Number(Je(t, "data-nav"));
        o >= 0 && (o === 0 ? a > 0 && bo(hn[a - 1]) : o === 1 ? a < vn - 1 && bo(hn[a + 1]) : (Bn = a, Fe(a, n)));
      }
    }
    function Cn(n) {
      return n = n || r.event, ie(n) ? n.changedTouches[0] : n;
    }
    function he(n) {
      return n.target || r.event.srcElement;
    }
    function ie(n) {
      return n.type.indexOf("touch") >= 0;
    }
    function vo(n) {
      n.preventDefault ? n.preventDefault() : n.returnValue = !1;
    }
    function xo() {
      return na(Bo(_n.y - ne.y, _n.x - ne.x), tt) === e.axis;
    }
    function wo(n) {
      if (Kn) {
        if (et)
          return;
        Ln();
      }
      B && cn && Et(), ee = !0, xn && (Lt(xn), xn = null);
      var t = Cn(n);
      W.emit(ie(n) ? "touchStart" : "dragStart", nn(n)), !ie(n) && ["img", "a"].indexOf(lo(he(n))) >= 0 && vo(n), _n.x = ne.x = t.clientX, _n.y = ne.y = t.clientY, p && (ft = parseFloat(g.style[Un].replace(Yn, "")), _t(g, "0s"));
    }
    function yo(n) {
      if (ee) {
        var t = Cn(n);
        _n.x = t.clientX, _n.y = t.clientY, p ? xn || (xn = jn(function() {
          _o(n);
        })) : (Mn === "?" && (Mn = xo()), Mn && (Oe = !0)), (typeof n.cancelable != "boolean" || n.cancelable) && Oe && n.preventDefault();
      }
    }
    function _o(n) {
      if (!Mn) {
        ee = !1;
        return;
      }
      if (Lt(xn), ee && (xn = jn(function() {
        _o(n);
      })), Mn === "?" && (Mn = xo()), Mn) {
        !Oe && ie(n) && (Oe = !0);
        try {
          n.type && W.emit(ie(n) ? "touchMove" : "dragMove", nn(n));
        } catch {
        }
        var t = ft, o = Jt(_n, ne);
        if (!A || u || v)
          t += o, t += "px";
        else {
          var a = Zn ? o * w * 100 / ((F + y) * E) : o * 100 / (F + y);
          t += a, t += "%";
        }
        g.style[Un] = Yn + t + de;
      }
    }
    function At(n) {
      if (ee) {
        xn && (Lt(xn), xn = null), p && _t(g, ""), ee = !1;
        var t = Cn(n);
        _n.x = t.clientX, _n.y = t.clientY;
        var o = Jt(_n, ne);
        if (Math.abs(o)) {
          if (!ie(n)) {
            var a = he(n);
            R(a, { click: function d(h) {
              vo(h), Y(a, { click: d });
            } });
          }
          p ? xn = jn(function() {
            if (A && !v) {
              var d = -o * w / (F + y);
              d = o > 0 ? Math.floor(d) : Math.ceil(d), c += d;
            } else {
              var h = -(ft + o);
              if (h <= 0)
                c = An;
              else if (h >= $[E - 1])
                c = un;
              else
                for (var _ = 0; _ < E && h >= $[_]; )
                  c = _, h > $[_] && o < 0 && (c += 1), _++;
            }
            ai(n, o), W.emit(ie(n) ? "touchEnd" : "dragEnd", nn(n));
          }) : Mn && Jn(n, o > 0 ? -1 : 1);
        }
      }
      e.preventScrollOnTouch === "auto" && (Oe = !1), tt && (Mn = "?"), B && !cn && Tt();
    }
    function ri() {
      var n = rn || tn;
      n.style.height = $[c + w] - $[c] + "px";
    }
    function ko() {
      var n = u ? (u + y) * m / F : m / w;
      return Math.min(Math.ceil(n), m);
    }
    function si() {
      if (!(!Sn || Ie) && vn !== Xn) {
        var n = Xn, t = vn, o = pn;
        for (Xn > vn && (n = vn, t = Xn, o = fn); n < t; )
          o(hn[n]), n++;
        Xn = vn;
      }
    }
    function nn(n) {
      return {
        container: g,
        slideItems: T,
        navContainer: Q,
        navItems: hn,
        controlsContainer: H,
        hasControls: ot,
        prevButton: z,
        nextButton: D,
        items: w,
        slideBy: se,
        cloneCount: Z,
        slideCount: m,
        slideCountNew: E,
        index: c,
        indexCached: Gn,
        displayIndex: Ri(),
        navCurrentIndex: gn,
        navCurrentIndexCached: fe,
        pages: vn,
        pagesCached: Xn,
        sheet: M,
        isOn: _e,
        event: n || {}
      };
    }
    return {
      version: "2.9.4",
      getInfo: nn,
      events: W,
      goTo: Fe,
      play: Sa,
      pause: Aa,
      isOn: _e,
      updateSliderHeight: ro,
      refresh: Yi,
      destroy: ha,
      rebuild: function() {
        return Ze(zt(e, Ti));
      }
    };
  };
  Lo([
    "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css",
    "https://fast.wistia.com/assets/external/E-v1.js"
  ]), Ao({ name: "Opt in page", dev: "YK" });
  class aa {
    constructor() {
      So("body", () => {
        G("body").elements[0].insertAdjacentHTML(
          "afterbegin",
          /* html */
          `<style>${Eo}</style>`
        ), this.init();
      });
    }
    init() {
      this.addBlocks(), this.setActions();
    }
    addBlocks() {
      G(".containerWrapper").elements[0].insertAdjacentHTML("afterend", '<div class="crs_landing"></div>');
      const i = G(".crs_landing").elements[0];
      i.insertAdjacentHTML("afterbegin", Oo), i.insertAdjacentHTML("beforeend", Ro), i.insertAdjacentHTML("beforeend", No), i.insertAdjacentHTML("beforeend", $o), i.insertAdjacentHTML("beforeend", Ho), i.insertAdjacentHTML("beforeend", qo), i.insertAdjacentHTML("beforeend", Fo), i.insertAdjacentHTML("beforeend", Wo), i.insertAdjacentHTML("beforeend", Po), i.insertAdjacentHTML("beforeend", Yo), i.insertAdjacentHTML("beforeend", Go), i.insertAdjacentHTML("beforeend", Ko);
    }
    setActions() {
      G(".question").on("click", function() {
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          return;
        }
        G(".question.active").removeClass("active"), this.classList.toggle("active");
      }), G(".cta.pop").on("click", function() {
        G(".crs_video_popup").elements[0].classList.remove("active"), G(".crs_popup_form").elements[0].classList.add("active");
      }), G(".crs_popup_form .close").on("click", function() {
        G(".crs_popup_form").elements[0].classList.remove("active");
      }), G("#base_review .slide").on("click", function() {
        const s = this.getAttribute("data-video"), f = G(`.video_slide[data-video="${s}"] .video`).elements[0].cloneNode(!0);
        G(".crs_video_popup .video").elements[0].appendChild(f), G(".crs_video_popup").elements[0].classList.add("active");
      }), G(".crs_video_popup .crs_close").on("click", function() {
        G(".crs_video_popup .video *:not(.crs_close)").elements.forEach((s) => s.remove()), G(".crs_video_popup").elements[0].classList.remove("active");
      });
      const i = Ze({
        container: "#base_review ul",
        slideBy: 1,
        loop: !1,
        navPosition: "bottom",
        //@ts-ignore
        controlsPosition: "bottom",
        mouseDrag: !0,
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
      }), r = Ze({
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
        var S, x;
        const f = s.navItems;
        Array.from(f).forEach((L) => L.classList.remove("tns-nav-near")), (S = f[s.index - 1]) == null || S.classList.add("tns-nav-near"), (x = f[s.index + 1]) == null || x.classList.add("tns-nav-near");
      }), r.getInfo().slideItems[0].classList.add("tns-current"), r.getInfo().navItems[1].classList.add("tns-nav-near"), r.events.on("indexChanged", function(s) {
        var L, K;
        const f = s.slideItems, S = s.navItems;
        Array.from(S).forEach((an) => an.classList.remove("tns-nav-near")), Array.from(f).forEach((an) => an.classList.remove("tns-current")), (L = S[s.index - 1]) == null || L.classList.add("tns-nav-near"), (K = S[s.index + 1]) == null || K.classList.add("tns-nav-near"), f[s.index].classList.add("tns-current");
      }), Ze({
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
        window.Wistia && (clearInterval(l), window._wq = window._wq || [], Mt.forEach((s) => {
          window._wq.push({
            id: s.videoId,
            onReady: function(f) {
              console.log("I got a handle to the video!" + s.videoId);
            }
          });
        }));
      }, 500);
    }
  }
  new aa();
})();
//# sourceMappingURL=index.js.map

