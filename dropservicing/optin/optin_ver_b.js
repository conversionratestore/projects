(function() {
  "use strict";
  const N1 = `.fullContainer {
  display: none;
}

body::-webkit-scrollbar {
  width: 5px;
}
body::-webkit-scrollbar-track {
  border-radius: 0;
}
body::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background: gray;
}

.crs_v2 *,
.crs_v2 *::before,
.crs_v2 *::after {
  box-sizing: border-box;
}
.crs_v2 .mobile {
  display: none;
}
@media (max-width: 768px) {
  .crs_v2 .mobile {
    display: block !important;
  }
}
@media (max-width: 768px) {
  .crs_v2 .desktop {
    display: none !important;
  }
}
.crs_v2 .containerWrapper {
  display: none;
}
.crs_v2 h2 {
  font-size: 36px;
  line-height: 50px;
  color: #161718;
  font-weight: 700;
}
@media (max-width: 768px) {
  .crs_v2 h2 {
    font-size: 24px;
    line-height: 34px;
  }
}
.crs_v2 h3 {
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  line-height: 50px;
}
.crs_v2 .tns-nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 53px;
}
@media (max-width: 768px) {
  .crs_v2 .tns-nav {
    margin-top: 20px;
  }
}
.crs_v2 .tns-nav button {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: #2c50d3;
  opacity: 0.24;
  border: none;
  padding: 0;
  margin: 0;
  transition: all 0.3s;
  transform: scale(0.8);
}
.crs_v2 .tns-nav button.tns-nav-active {
  background: #2c50d3;
  opacity: 1;
  transform: scale(1.2);
}
.crs_v2 .tns-nav button.tns-nav-near {
  transform: scale(1);
}
.crs_v2 .tns-controls {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  margin: -30px auto 0;
  pointer-events: none;
}
.crs_v2 .tns-controls button {
  pointer-events: all;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: url("https://conversionratestore.github.io/projects/dropservicing/optin/img/slider_button_blue.svg") no-repeat center;
  background-size: contain;
  border: none;
  font-size: 0;
  cursor: pointer;
}
.crs_v2 .tns-controls button:first-of-type {
  transform: rotate(180deg);
}
.crs_v2 .tns-controls button:disabled {
  opacity: 0.5;
  pointer-events: none;
}
.crs_v2 section {
  margin: 110px 0;
}
@media (max-width: 768px) {
  .crs_v2 section {
    margin: 40px 0;
  }
}
.crs_v2 .crs_container {
  width: calc(100% - 32px);
  max-width: 1100px;
  margin: 0 auto;
}
.crs_v2 .cta {
  padding: 21px;
  border: none;
  border-radius: 3px;
  background: #17aa1c;
  color: #fff;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  font-weight: 700;
  min-width: 348px;
  transition: all 0.3s;
}
.crs_v2 .cta:hover {
  background: #0b9e10;
}
@media (max-width: 768px) {
  .crs_v2 .cta {
    min-width: unset;
    width: 100%;
  }
}
.crs_v2 .tp_label {
  display: flex;
  gap: 12px;
  color: #fff;
  font-size: 16px;
  line-height: 25px;
  align-items: center;
}
.crs_v2 .tp_label > img {
  width: auto;
  height: 20px;
}
.crs_v2 .tp_label p {
  margin: 0;
  display: flex;
  align-items: center;
}
.crs_v2 .tp_label b {
  color: #00b67a;
}
.crs_v2 .tp_label span:last-of-type {
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;
  width: -moz-max-content;
  width: max-content;
}
.crs_v2 .crs_stories {
  width: 303px;
  padding: 30px 34px;
  border-radius: 0px 10px 10px 0px;
  background: #00042e;
  flex-shrink: 0;
}
@media (max-width: 1020px) {
  .crs_v2 .crs_stories {
    display: none;
  }
}
.crs_v2 .crs_stories > p {
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
}
.crs_v2 .crs_stories .crs_stories_nav {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  gap: 14px;
}
.crs_v2 .crs_stories .crs_stories_nav span {
  width: 28px;
  height: 28px;
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  transition: all;
}
.crs_v2 .crs_stories .crs_stories_nav span.active {
  border-color: #fff;
}
.crs_v2 .crs_stories .crs_stories_nav span img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.crs_v2 .crs_stories .crs_stories_content {
  display: flex;
  width: 100%;
  overflow: auto;
  gap: 15px;
}
.crs_v2 .crs_stories .crs_stories_content::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.crs_v2 .crs_stories .crs_story {
  width: 100%;
  padding: 16px 18px;
  background: #fff;
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0px 2px 2px 0px rgba(28, 5, 77, 0.05), 0px 12px 8px 0px rgba(0, 0, 0, 0.02);
}
.crs_v2 .crs_stories .crs_story .crs_story_head {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
}
.crs_v2 .crs_stories .crs_story .crs_story_head span {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
.crs_v2 .crs_stories .crs_story .crs_story_head span img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.crs_v2 .crs_stories .crs_story .crs_story_head p {
  margin: 0;
}
.crs_v2 .crs_stories .crs_story .crs_story_head p b {
  font-size: 14px;
  line-height: 24px;
}
.crs_v2 .crs_stories .crs_story .crs_story_head p span {
  font-size: 12px;
  line-height: 18px;
}
.crs_v2 .crs_stories .crs_story .crs_story_head p span img {
  width: 10px;
}
.crs_v2 .crs_stories .crs_story .crs_story_head + img {
  margin-bottom: 6px;
  height: 21px;
  width: auto;
}
.crs_v2 .crs_stories .crs_story > p {
  font-size: 14px;
  line-height: 21px;
  margin: 0;
}
.crs_v2 #main_block {
  position: relative;
  width: 100%;
  padding: 0 0 80px;
  margin-top: 0;
  margin: 0;
  background: #00042e;
}
.crs_v2 #main_block .img_bgr {
  position: absolute;
  right: 0;
  top: 0;
  max-width: 651px;
  max-height: 708px;
  width: 100%;
  height: 100%;
  z-index: 0;
}
@media (max-width: 1280px) {
  .crs_v2 #main_block .img_bgr {
    max-width: 580px;
  }
}
@media (max-width: 1180px) {
  .crs_v2 #main_block .img_bgr {
    max-width: 541px;
    max-height: 577px;
  }
}
@media (max-width: 1015px) {
  .crs_v2 #main_block .img_bgr {
    max-width: 487px;
  }
}
@media (max-width: 1020px) {
  .crs_v2 #main_block .img_bgr {
    display: none;
  }
}
@media (max-width: 768px) {
  .crs_v2 #main_block .img_bgr {
    display: none;
  }
}
.crs_v2 #main_block .img_bgr img {
  width: 100%;
  height: 100%;
}
@media (max-width: 768px) {
  .crs_v2 #main_block {
    padding: 20px 0 0;
    background: linear-gradient(0deg, #00042e 0%, #00042e 100%), #161718;
  }
}
.crs_v2 #main_block .wrapper {
  position: relative;
  margin: 0 auto;
  width: calc(100% - 180px);
  max-width: 100%;
  z-index: 1;
}
@media (max-width: 768px) {
  .crs_v2 #main_block .wrapper {
    width: calc(100% - 32px);
  }
}
.crs_v2 #main_block header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}
@media (max-width: 768px) {
  .crs_v2 #main_block header {
    padding: 0 0 22px;
  }
}
.crs_v2 #main_block header img {
  height: 80px;
  width: auto;
}
@media (max-width: 768px) {
  .crs_v2 #main_block header img {
    height: 49px;
  }
}
.crs_v2 #main_block .hero_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 300px;
  padding-top: 100px;
  padding-right: 550px;
}
@media (max-width: 1299px) {
  .crs_v2 #main_block .hero_wrapper {
    padding-bottom: 200px;
  }
}
@media (max-width: 1280px) {
  .crs_v2 #main_block .hero_wrapper {
    padding-right: 500px;
  }
}
@media (max-width: 1180px) {
  .crs_v2 #main_block .hero_wrapper {
    padding-right: 460px;
  }
}
@media (max-width: 1020px) {
  .crs_v2 #main_block .hero_wrapper {
    padding-right: 0;
    padding-top: 50px;
  }
}
@media (max-width: 768px) {
  .crs_v2 #main_block .hero_wrapper {
    padding: 0;
  }
}
.crs_v2 #main_block .hero_wrapper .hero_img_wrapper {
  position: relative;
  width: 100%;
  margin: 24px 0;
}
.crs_v2 #main_block .hero_wrapper .hero_img_wrapper .hero_img {
  width: 100%;
}
.crs_v2 #main_block .hero_wrapper .cta {
  width: 100%;
  max-width: 348px;
}
@media (max-width: 768px) {
  .crs_v2 #main_block .hero_wrapper .cta {
    max-width: 100%;
  }
}
.crs_v2 #main_block h1 {
  margin: 34px 0 30px;
  color: #fff;
  font-size: 48px;
  line-height: 55px;
  font-weight: 700;
  max-width: 677px;
}
@media (max-width: 1120px) {
  .crs_v2 #main_block h1 {
    font-size: 44px;
  }
}
@media (max-width: 1020px) {
  .crs_v2 #main_block h1 {
    font-size: 48px;
    max-width: 100%;
  }
}
@media (max-width: 768px) {
  .crs_v2 #main_block h1 {
    margin: 24px 0;
    font-size: 32px;
    line-height: 42px;
  }
}
.crs_v2 #main_block h1 + p {
  font-size: 16px;
  line-height: 25px;
  color: #efecfb;
  margin-bottom: 46px;
}
@media (max-width: 768px) {
  .crs_v2 #main_block h1 + p {
    margin-bottom: 24px;
  }
}
.crs_v2 #main_block h1 + p + button {
  margin-bottom: 32px;
}
.crs_v2 #main_block .youll_list {
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.1);
  padding: 24px 40px 30px;
}
@media (max-width: 768px) {
  .crs_v2 #main_block .youll_list {
    padding: 24px;
  }
}
.crs_v2 #main_block .youll_list > p {
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
  .crs_v2 #main_block .youll_list > p {
    margin-bottom: 20px;
    font-size: 18px;
  }
}
.crs_v2 #main_block .youll_list ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin-bottom: 0;
}
.crs_v2 #main_block .youll_list ul li {
  display: flex;
  gap: 12px;
  list-style: none;
}
.crs_v2 #main_block .youll_list ul li img {
  width: 17px;
  height: 17px;
  position: relative;
  top: 4px;
}
.crs_v2 #main_block .youll_list ul li p {
  margin: 0;
  font-size: 14px;
  line-height: 22px;
  color: #fff;
  font-weight: 300;
}
.crs_v2 #main_block .youll_list ul li p b {
  font-weight: 600;
}
.crs_v2 #main_block .stats_block {
  margin-top: 34px;
}
@media (max-width: 1180px) {
  .crs_v2 #main_block .stats_block {
    width: -moz-max-content;
    width: max-content;
  }
}
@media (max-width: 768px) {
  .crs_v2 #main_block .stats_block {
    width: auto;
    margin: 0;
    overflow: auto;
  }
}
.crs_v2 #main_block .stats_block .stats {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}
@media (max-width: 768px) {
  .crs_v2 #main_block .stats_block .stats {
    width: 600px;
    padding-bottom: 5px;
  }
}
.crs_v2 #main_block .stats_block .stats .stat_item {
  display: flex;
  gap: 17px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
@media (max-width: 768px) {
  .crs_v2 #main_block .stats_block .stats .stat_item {
    width: -moz-max-content;
    width: max-content;
    flex-wrap: unset;
    flex-direction: row-reverse;
    gap: 13px;
  }
}
.crs_v2 #main_block .stats_block .stats .stat_item:not(:last-child) {
  position: relative;
  padding-right: 39px;
  margin-right: 39px;
}
@media (max-width: 768px) {
  .crs_v2 #main_block .stats_block .stats .stat_item:not(:last-child) {
    padding: 0;
    margin-right: 34px;
  }
}
.crs_v2 #main_block .stats_block .stats .stat_item:not(:last-child)::after {
  position: absolute;
  content: "";
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: url("https://conversionratestore.github.io/projects/dropservicing/optin/img/stats_line.svg") no-repeat center;
  width: 1px;
  height: 100%;
  z-index: 1;
}
@media (max-width: 768px) {
  .crs_v2 #main_block .stats_block .stats .stat_item:not(:last-child)::after {
    display: none;
  }
}
.crs_v2 #main_block .stats_block .stats .stat_item svg {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}
.crs_v2 #main_block .stats_block .stats .stat_item p {
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 31px;
  margin: 0;
}
@media (max-width: 768px) {
  .crs_v2 #main_block .stats_block .stats .stat_item p {
    font-size: 18px;
  }
}
.crs_v2 #main_block .founder_name {
  position: absolute;
  right: 0;
  bottom: 0;
  width: -moz-max-content;
  width: max-content;
  padding: 10px 20px;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  border-radius: 10px 0px 0px 0px;
  background: rgba(0, 4, 46, 0.4);
  -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
  z-index: 111;
}
.crs_v2 #main_block .founder_name a {
  color: inherit;
  text-decoration: none;
}
@media (max-width: 768px) {
  .crs_v2 #main_block .founder_name {
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 20px 0px 0px 0px;
    background: rgba(0, 4, 46, 0.6);
    box-shadow: 0px 10px 34px 0px rgba(0, 0, 0, 0.03);
    -webkit-backdrop-filter: blur(7px);
            backdrop-filter: blur(7px);
  }
}
.crs_v2 #main_block .video_wrapper {
  position: relative;
  border-radius: 20px;
}
@media (max-width: 768px) {
  .crs_v2 #main_block .video_wrapper {
    width: 100%;
    border-radius: 0;
  }
  .crs_v2 #main_block .video_wrapper .video {
    width: 100%;
  }
  .crs_v2 #main_block .video_wrapper .video > div {
    width: 100% !important;
    height: 159px !important;
  }
}
.crs_v2 #main_block .crs_stories {
  position: absolute;
  padding: 24px;
  z-index: 2;
  top: 29px;
  left: 44%;
  width: 403px;
  border-radius: 0;
  background: rgba(255, 255, 255, 0.8);
  filter: drop-shadow(0px 14px 24px rgba(0, 0, 0, 0.05));
  -webkit-backdrop-filter: blur(17px);
          backdrop-filter: blur(17px);
}
@media (min-width: 1700px) {
  .crs_v2 #main_block .crs_stories {
    left: 55%;
  }
}
.crs_v2 #main_block .crs_stories::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  filter: drop-shadow(0px 14px 24px rgba(0, 0, 0, 0.05));
  bottom: -20px;
  right: 104px;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 20px solid rgba(255, 255, 255, 0.8);
}
.crs_v2 #main_block .crs_stories > p {
  display: none;
}
.crs_v2 #main_block .crs_stories .crs_stories_nav {
  width: -moz-max-content;
  width: max-content;
  justify-content: flex-start;
  align-items: center;
  gap: 0;
}
.crs_v2 #main_block .crs_stories .crs_stories_nav span {
  border-radius: 35px;
  width: 33px;
  height: 33px;
}
.crs_v2 #main_block .crs_stories .crs_stories_nav span:not(:first-of-type) {
  margin-left: -7px;
}
.crs_v2 #main_block .crs_stories .crs_stories_nav span img {
  border-radius: 35px;
  border: 2px solid #eeefff;
}
.crs_v2 #main_block .crs_stories .crs_stories_nav span.active {
  width: 40px;
  height: 40px;
  z-index: 1;
  border: 6px solid #17aa1c;
}
.crs_v2 #main_block .crs_stories .crs_stories_content {
  align-items: flex-start;
}
.crs_v2 #main_block .crs_stories .crs_stories_content .crs_story {
  width: 100%;
  padding: 0;
  background: none;
  border-radius: 0;
  flex-shrink: 0;
  box-shadow: unset;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
}
.crs_v2 #main_block .crs_stories .crs_stories_content .crs_story .crs_story_head {
  margin: 0;
  gap: 0;
}
.crs_v2 #main_block .crs_stories .crs_stories_content .crs_story .crs_story_head + img {
  max-width: 88px;
  height: 16px;
  margin: 0 0 5px 10px;
}
.crs_v2 #main_block .crs_stories .crs_stories_content .crs_story .crs_story_head span {
  display: none;
}
.crs_v2 #main_block .crs_stories .crs_stories_content .crs_story .crs_story_head p {
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: #161718;
}
.crs_v2 #main_block .crs_stories .crs_stories_content .crs_story > p {
  line-height: 26px;
  margin-top: 5px;
  color: #161718;
  font-size: 16px;
}
.crs_v2 #blokers {
  position: relative;
  margin: -200px 0 -40px;
  z-index: 1;
}
@media (max-width: 768px) {
  .crs_v2 #blokers {
    overflow: hidden;
    margin: 0;
    padding: 36px 0 40px;
    background: linear-gradient(0deg, #00042e 0%, #00042e 100%), #161718;
  }
  .crs_v2 #blokers::after {
    position: absolute;
    content: "";
    width: 100%;
    max-width: 1126px;
    height: 795px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #0013db;
    opacity: 0.5;
    filter: blur(232px);
    z-index: -1;
  }
}
.crs_v2 #blokers .blokers {
  position: relative;
  margin: 0 0 0 auto;
  width: calc(100% - 90px);
  max-width: 100%;
}
@media (max-width: 768px) {
  .crs_v2 #blokers .blokers {
    margin: 0 auto;
    width: calc(100% - 32px);
  }
  .crs_v2 #blokers .blokers .show_more_block {
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: -moz-max-content;
    width: max-content;
    gap: 14px;
    color: #fff;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-decoration: underline;
    margin: 32px auto 0;
  }
  .crs_v2 #blokers .blokers .show_more_block.is_open svg {
    transform: rotate(180deg);
  }
}
.crs_v2 #blokers .blokers h3 {
  font-weight: 700;
  line-height: 38px;
  margin-bottom: 48px;
  text-align: left;
  padding-right: 160px;
}
@media (max-width: 768px) {
  .crs_v2 #blokers .blokers h3 {
    padding: 0;
    margin-bottom: 32px;
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 29px;
  }
}
.crs_v2 #blokers .blokers .tns-controls {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 108px;
  margin: 0;
  pointer-events: none;
  top: 0;
  right: 45px;
}
.crs_v2 #blokers .blokers .tns-controls button {
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 40px;
  background: #fff;
  box-shadow: 0px 12px 14px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}
.crs_v2 #blokers .blokers .tns-controls button::before {
  content: "";
  position: absolute;
  width: 8px;
  height: 15px;
  background: url("https://conversionratestore.github.io/projects/dropservicing/optin/img/arrow_svg_slider.svg") no-repeat center;
  background-size: contain;
}
.crs_v2 #blokers .blokers .blokers_list {
  padding: 0;
  margin: 0;
  list-style: none;
}
@media (max-width: 768px) {
  .crs_v2 #blokers .blokers .blokers_list {
    max-height: 1000px;
    overflow: hidden;
    transition: max-height 0.3s ease;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
  }
  .crs_v2 #blokers .blokers .blokers_list.is_open {
    max-height: 1550px;
  }
}
@media (max-width: 391px) {
  .crs_v2 #blokers .blokers .blokers_list {
    max-height: 1024px;
  }
}
@media (max-width: 361px) {
  .crs_v2 #blokers .blokers .blokers_list {
    max-height: 1050px;
  }
}
@media (max-width: 768px) {
  .crs_v2 #blokers .blokers .blokers_list li {
    width: 100%;
  }
}
.crs_v2 #blokers .blokers .blokers_list li .blokers_item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0px 14px 34px 0px rgba(0, 0, 0, 0.05);
  -webkit-backdrop-filter: blur(67px);
          backdrop-filter: blur(67px);
  border-radius: 0;
  padding: 18px;
  margin-bottom: 40px;
  cursor: pointer;
}
@media (max-width: 1290px) {
  .crs_v2 #blokers .blokers .blokers_list li .blokers_item {
    padding: 18px;
  }
}
@media (max-width: 768px) {
  .crs_v2 #blokers .blokers .blokers_list li .blokers_item {
    margin: 0;
    padding: 18px;
  }
}
.crs_v2 #blokers .blokers .blokers_list li .blokers_item > div > svg {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  margin: 0 0 14px;
}
@media (max-width: 768px) {
  .crs_v2 #blokers .blokers .blokers_list li .blokers_item > div > svg {
    width: 50px;
    height: 50px;
  }
}
.crs_v2 #blokers .blokers .blokers_list li .blokers_item > div p {
  color: #161718;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  margin: 0 0 12px;
}
@media (max-width: 768px) {
  .crs_v2 #blokers .blokers .blokers_list li .blokers_item > div p {
    line-height: 26px;
    font-size: 18px;
  }
}
.crs_v2 #blokers .blokers .blokers_list li .blokers_item .btn_see_details {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 11px;
  width: -moz-max-content;
  width: max-content;
  margin: 0 0 0 auto;
  color: #161718;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-decoration: underline;
  cursor: pointer;
}
.crs_v2 #blokers .blokers .blokers_list li .blokers_item .btn_see_details .arrow_btn_icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 36px;
  border-radius: 40px;
  background: #17aa1c;
}
.crs_v2 #base_review {
  overflow: visible;
}
.crs_v2 #base_review .crs_container {
  position: relative;
}
.crs_v2 #base_review h2 {
  text-align: center;
  margin-bottom: 18px;
}
@media (max-width: 768px) {
  .crs_v2 #base_review h2 {
    text-align: left;
    margin-bottom: 16px;
    padding: 0 16px;
  }
}
.crs_v2 #base_review h2 + p {
  text-align: center;
  font-size: 18px;
  line-height: 25px;
  color: #161718;
  max-width: 800px;
  margin: 0 auto 60px;
}
@media (max-width: 768px) {
  .crs_v2 #base_review h2 + p {
    font-size: 16px;
    text-align: left;
    margin-bottom: 32px;
    padding: 0 16px;
    line-height: 24px;
  }
}
.crs_v2 #base_review ul {
  padding: 0;
}
.crs_v2 #base_review ul.ver_b {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  list-style: none;
  gap: 24px;
}
.crs_v2 #base_review ul.ver_b li {
  width: calc((100% - 24px) / 2);
}
.crs_v2 #base_review ul.ver_b .slide {
  padding: 30px;
  border-radius: 0;
  margin: 0;
  height: 100%;
}
.crs_v2 #base_review ul.ver_b .slide::before {
  position: absolute;
  content: "";
  background: url("https://conversionratestore.github.io/projects/dropservicing/optin/img/quote_icon.svg") no-repeat center;
  background-size: contain;
  top: 30px;
  right: 30px;
  width: 42px;
  height: 34px;
}
.crs_v2 #base_review ul.ver_b .slide > div {
  margin-bottom: 20px;
  gap: 18px;
}
.crs_v2 #base_review ul.ver_b .slide > div .img {
  width: 60px;
  height: 60px;
}
.crs_v2 #base_review ul .slide {
  padding: 20px;
  background: #eeefff;
  cursor: pointer;
  position: relative;
}
.crs_v2 #base_review ul .slide:not(:last-of-type) {
  margin-right: 30px;
  padding: 20px;
}
.crs_v2 #base_review ul .slide > div {
  display: flex;
  gap: 14px;
  margin-bottom: 24px;
  align-items: center;
}
@media (max-width: 768px) {
  .crs_v2 #base_review ul .slide > div {
    margin-bottom: 20px;
    gap: 18px;
  }
}
.crs_v2 #base_review ul .slide > div .img {
  height: 49px;
  width: 49px;
  border-radius: 50%;
  overflow: hidden;
}
@media (max-width: 768px) {
  .crs_v2 #base_review ul .slide > div .img {
    height: 50px;
    width: 50px;
  }
}
.crs_v2 #base_review ul .slide > div .img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.crs_v2 #base_review ul .slide > div p {
  font-size: 14px;
  line-height: 24px;
  color: #161718;
  font-weight: 700;
  margin: 0;
}
.crs_v2 #base_review ul .slide > div p b {
  display: block;
  margin-bottom: 4px;
}
.crs_v2 #base_review ul .slide > div p img {
  margin: 0;
}
.crs_v2 #base_review ul .slide > p {
  font-size: 18px;
  color: #31364e;
  line-height: 26px;
  margin: 0;
}
.crs_v2 #base_review ul .slide::before {
  position: absolute;
  content: "";
  background: url("https://conversionratestore.github.io/projects/dropservicing/optin/img/quote_icon.svg") no-repeat center;
  background-size: contain;
  top: 20px;
  right: 20px;
  width: 42px;
  height: 34px;
}
.crs_v2 #base_review .tns-controls {
  position: absolute;
  left: -24px;
  width: calc(100% + 48px);
  max-width: unset;
  top: 50%;
  transform: translateY(-20%);
}
.crs_v2 #base_review .tns-controls button {
  background: url("https://conversionratestore.github.io/projects/dropservicing/optin/img/slider_button_blue.svg"), #fff no-repeat center center;
  background-size: 110% 110%;
  background-position: 50% 50%;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
}
.crs_v2 #base_review .tns-controls button:disabled {
  opacity: 0;
  pointer-events: none;
}
.crs_v2 #base_review .tns-nav {
  margin-top: 24px;
}
.crs_v2 #bonus_block .crs_container {
  padding: 0;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  background: #00042e;
}
@media (max-width: 768px) {
  .crs_v2 #bonus_block .crs_container {
    flex-direction: column;
    gap: 0;
    padding: 0 0 40px;
    width: 100%;
    border-radius: 0;
  }
}
.crs_v2 #bonus_block .crs_container > div {
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
@media (max-width: 768px) {
  .crs_v2 #bonus_block .crs_container > div {
    padding: 0 16px;
  }
}
.crs_v2 #bonus_block .crs_container > div h2 {
  color: #fff;
  margin-bottom: 12px;
}
@media (max-width: 768px) {
  .crs_v2 #bonus_block .crs_container > div h2 {
    margin-bottom: 24px;
    line-height: 32px;
  }
}
.crs_v2 #bonus_block .crs_container > div p {
  color: #fff;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 12px;
}
.crs_v2 #bonus_block .crs_container > div ul {
  padding-left: 15px;
  margin-bottom: 32px;
}
@media (max-width: 768px) {
  .crs_v2 #bonus_block .crs_container > div ul {
    margin-bottom: 24px;
  }
}
.crs_v2 #bonus_block .crs_container > div ul li {
  font-size: 16px;
  line-height: 26px;
  color: #fff;
}
.crs_v2 #bonus_block .crs_container img {
  max-width: 470px;
  height: auto;
  -o-object-fit: contain;
     object-fit: contain;
}
@media (max-width: 768px) {
  .crs_v2 #bonus_block .crs_container img {
    order: -1;
  }
}
.crs_v2 #host_block.crs_container {
  display: flex;
  align-items: stretch;
  gap: 50px;
}
@media (max-width: 768px) {
  .crs_v2 #host_block.crs_container {
    flex-direction: column;
    gap: 24px;
  }
}
.crs_v2 #host_block.crs_container > .img {
  width: 37%;
  height: 100%;
  position: relative;
}
@media (max-width: 768px) {
  .crs_v2 #host_block.crs_container > .img {
    width: 100%;
  }
}
.crs_v2 #host_block.crs_container > .img img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
.crs_v2 #host_block.crs_container > .img a {
  display: block;
  position: absolute;
  height: 16px;
  width: 35%;
  right: 16%;
  bottom: 3%;
}
@media (max-width: 768px) {
  .crs_v2 #host_block.crs_container > .img a {
    right: 7%;
    bottom: 7%;
    width: 40%;
  }
}
.crs_v2 #host_block.crs_container .info {
  width: calc(65% - 25px);
}
@media (max-width: 768px) {
  .crs_v2 #host_block.crs_container .info {
    width: 100%;
  }
}
.crs_v2 #host_block.crs_container .info h2 {
  margin-bottom: 8px;
}
.crs_v2 #host_block.crs_container .info h2 + p {
  font-size: 20px;
  line-height: 25px;
  font-weight: 600;
  color: #161718;
  margin-bottom: 24px;
}
@media (max-width: 768px) {
  .crs_v2 #host_block.crs_container .info h2 + p {
    font-size: 18px;
    line-height: 26px;
  }
}
.crs_v2 #host_block.crs_container .info ul {
  padding: 0;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 658px;
}
@media (max-width: 768px) {
  .crs_v2 #host_block.crs_container .info ul {
    gap: 16px;
    margin-bottom: 22px;
  }
}
.crs_v2 #host_block.crs_container .info ul li {
  font-size: 14px;
  line-height: 22px;
  color: #161718;
  display: flex;
  gap: 12px;
}
.crs_v2 #host_block.crs_container .info ul li span {
  display: block;
  height: 8px;
  width: 8px;
  position: relative;
  top: 8px;
  background: #2c50d3;
  border-radius: 50%;
  flex-shrink: 0;
}
.crs_v2 #host_block.crs_container .info ul + p {
  font-size: 16px;
  font-weight: 700;
  color: #161718;
  margin-bottom: 28px;
  line-height: 24px;
  max-width: 660px;
}
@media (max-width: 768px) {
  .crs_v2 #video_block {
    display: none;
  }
}
.crs_v2 #video_block h2 {
  text-align: center;
  margin-bottom: 18px;
}
@media (max-width: 768px) {
  .crs_v2 #video_block h2 {
    margin-bottom: 12px;
  }
}
.crs_v2 #video_block .crs_container > p {
  text-align: center;
  font-size: 14px;
  line-height: 23px;
  color: #161718;
  margin: 0 auto 40px;
  max-width: 1000px;
}
@media (max-width: 768px) {
  .crs_v2 #video_block .crs_container > p {
    margin-bottom: 24px;
  }
}
.crs_v2 #video_block .video_slide {
  width: 100%;
  border-radius: 3px;
  background: #eeefff;
  overflow: hidden;
}
@media (max-width: 768px) {
  .crs_v2 #video_block .video_slide {
    display: flex;
    flex-direction: column-reverse;
  }
}
.crs_v2 #video_block .video_slide .head {
  padding: 20px 40px;
  background: #eeefff;
  display: flex;
  align-items: center;
}
@media (max-width: 768px) {
  .crs_v2 #video_block .video_slide .head {
    flex-direction: column;
    padding: 16px;
  }
}
.crs_v2 #video_block .video_slide .head p {
  margin: 0;
}
.crs_v2 #video_block .video_slide .head > .img {
  width: 49px;
  height: 49px;
  margin-right: 14px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
.crs_v2 #video_block .video_slide .head > .img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
@media (max-width: 768px) {
  .crs_v2 #video_block .video_slide .head > .img {
    display: none;
  }
}
.crs_v2 #video_block .video_slide .head > .img + p {
  font-size: 14px;
  line-height: 24px;
  color: #161718;
  font-weight: 700;
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
}
@media (max-width: 768px) {
  .crs_v2 #video_block .video_slide .head > .img + p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    flex-direction: row;
  }
}
.crs_v2 #video_block .video_slide .head > .img + p img {
  margin: 4px 0 0;
}
.crs_v2 #video_block .video_slide .head p:last-of-type {
  font-size: 18px;
  color: #31364e;
  line-height: 26px;
  margin-left: 80px;
  padding-right: 100px;
}
@media (max-width: 768px) {
  .crs_v2 #video_block .video_slide .head p:last-of-type {
    margin-left: 0;
    padding-right: 0;
    font-size: 14px;
    line-height: 24px;
  }
}
.crs_v2 #video_block .video_slide .video {
  width: 100%;
  aspect-ratio: 16/9;
  background: #000;
}
@media (max-width: 768px) {
  .crs_v2 #video_block .video_slide .video {
    height: 60vw;
  }
}
.crs_v2 #video_block ul {
  padding: 0;
  margin-bottom: 0;
}
.crs_v2 #video_block li {
  transition: all 0.3s;
}
.crs_v2 #video_block li:not(.tns-current) {
  transform: scale(0.8);
  opacity: 0.4;
}
.crs_v2 #video_block .tns-controls {
  width: 300px;
}
@media (max-width: 768px) {
  .crs_v2 #video_block .tns-nav {
    margin-top: 20px;
  }
}
.crs_v2 #training_for {
  display: flex;
  gap: 50px;
  align-items: center;
  width: 100%;
}
@media (max-width: 768px) {
  .crs_v2 #training_for {
    flex-direction: column;
    gap: 40px;
  }
}
.crs_v2 #training_for > div {
  width: calc(50% - 25px);
}
@media (max-width: 768px) {
  .crs_v2 #training_for > div {
    width: 100%;
  }
}
.crs_v2 #training_for .photo img {
  width: 100%;
  height: auto;
}
.crs_v2 #training_for .photo .bottom_info {
  padding: 30px;
  background: radial-gradient(39.95% 80.28% at 50% 50%, #080210 40%, #1e032e 100%);
  position: relative;
}
@media (max-width: 768px) {
  .crs_v2 #training_for .photo .bottom_info {
    padding: 18px 16px;
  }
}
.crs_v2 #training_for .photo .bottom_info p {
  color: #fff;
  font-size: 26px;
  line-height: 34px;
  margin-bottom: 8px;
}
@media (max-width: 768px) {
  .crs_v2 #training_for .photo .bottom_info p {
    font-size: 20px;
    line-height: 28px;
  }
}
.crs_v2 #training_for .photo .bottom_info p:last-of-type {
  font-size: 16px;
  line-height: 25px;
  color: #efecfb;
  font-weight: 300;
}
@media (max-width: 768px) {
  .crs_v2 #training_for .photo .bottom_info p:last-of-type {
    font-size: 14px;
  }
}
.crs_v2 #training_for .photo .link {
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
.crs_v2 #training_for .photo .link a {
  text-decoration: underline;
  color: #31364e;
}
@media (max-width: 768px) {
  .crs_v2 #training_for .info {
    padding: 0 16px;
  }
}
.crs_v2 #training_for .info h2 {
  margin-bottom: 8px;
}
.crs_v2 #training_for .info p {
  font-size: 16px;
  line-height: 26px;
  color: #161718;
  margin-bottom: 24px;
}
.crs_v2 #training_for .info p:last-of-type {
  font-weight: 700;
}
.crs_v2 #training_for .info ul {
  padding: 0;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.crs_v2 #training_for .info ul li {
  display: flex;
  gap: 12px;
  font-size: 16px;
  line-height: 26px;
  color: #161718;
  font-weight: 700;
}
.crs_v2 #training_for .info ul li svg {
  position: relative;
  top: 5px;
  width: 17px;
  height: 17px;
  flex-shrink: 0;
}
.crs_v2 #training_for .info ul + p {
  margin-bottom: 8px;
}
.crs_v2 #trust_pilot {
  background: radial-gradient(39.95% 80.28% at 50% 50%, #080210 40%, #1e032e 100%);
}
.crs_v2 #trust_pilot .crs_container {
  padding: 80px 0;
}
@media (max-width: 768px) {
  .crs_v2 #trust_pilot .crs_container {
    padding: 40px 0;
  }
}
.crs_v2 #trust_pilot h2 {
  margin-bottom: 15px;
  color: #fff;
  display: flex;
  align-items: flex-end;
  line-height: 1;
}
.crs_v2 #trust_pilot h2 b {
  color: #00b67a;
}
.crs_v2 #trust_pilot h2 span {
  font-size: 19px;
  line-height: 26px;
  font-weight: 700;
  color: #efecfb;
}
.crs_v2 #trust_pilot h2 + p {
  font-size: 24px;
  line-height: 28px;
  color: #efecfb;
  margin-bottom: 76px;
  font-weight: 300;
}
@media (max-width: 768px) {
  .crs_v2 #trust_pilot h2 + p {
    margin-bottom: 30px;
  }
}
.crs_v2 #trust_pilot h2 img {
  height: 38px;
  width: 38px;
}
.crs_v2 #trust_pilot ul {
  padding-left: 0;
}
.crs_v2 #trust_pilot .review_slide {
  padding: 30px 27px;
  border: 1px solid #e5e5e5;
  background: #fff;
}
@media (max-width: 768px) {
  .crs_v2 #trust_pilot .review_slide {
    padding: 30px 16px;
  }
}
.crs_v2 #trust_pilot .review_slide .name {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 22px;
  color: #000;
}
.crs_v2 #trust_pilot .review_slide .name img {
  width: auto;
  height: 20px;
}
.crs_v2 #trust_pilot .review_slide a {
  font-size: 16px;
  line-height: 25px;
  color: #000;
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 8px;
  display: block;
}
.crs_v2 #trust_pilot .review_slide .text {
  font-size: 16px;
  line-height: 24px;
  color: #000;
  font-weight: 300;
  margin-bottom: 22px;
}
.crs_v2 #trust_pilot .review_slide .text + p {
  font-size: 14px;
  line-height: 20px;
  color: #000;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.crs_v2 #trust_pilot .review_slide .text + p span {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 20px;
  background: #dbf5ed;
  color: #2daf6b;
}
.crs_v2 #trust_pilot .review_slide .text + p span img {
  width: 16px;
  height: 16px;
}
.crs_v2 #trust_pilot .points {
  background: #eeefff;
}
.crs_v2 #trust_pilot .points .crs_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 32px;
  flex-wrap: wrap;
}
@media (max-width: 768px) {
  .crs_v2 #trust_pilot .points .crs_container {
    justify-content: space-around;
    row-gap: 34px;
    -moz-column-gap: 15px;
         column-gap: 15px;
    padding: 40px 0;
  }
}
.crs_v2 #trust_pilot .points .crs_container p {
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
  .crs_v2 #trust_pilot .points .crs_container p {
    font-size: 16px;
    line-height: 24px;
    flex-direction: column-reverse;
    width: 40%;
  }
}
.crs_v2 #trust_pilot .points .crs_container svg {
  width: 45px;
  height: 45px;
  flex-shrink: 0;
}
.crs_v2 #trust_pilot .tns-nav button {
  background: rgba(255, 255, 255, 0.3);
  opacity: 1;
}
.crs_v2 #trust_pilot .tns-nav button.tns-nav-active {
  background: #a165f5;
}
.crs_v2 #trust_pilot .tns-controls {
  width: 300px;
}
.crs_v2 #trust_pilot .tns-controls button {
  background: url("https://conversionratestore.github.io/projects/dropservicing/optin/img/slider_button_white.svg") no-repeat center center;
}
.crs_v2 #faq_block h2 {
  text-align: center;
  margin-bottom: 64px;
  color: #101828;
}
@media (max-width: 768px) {
  .crs_v2 #faq_block h2 {
    margin-bottom: 32px;
  }
}
.crs_v2 #faq_block ul {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0;
  margin: 0;
}
.crs_v2 #faq_block li {
  list-style: none;
  padding-bottom: 24px;
  border-bottom: 1px solid hsla(235, 100%, 9%, 0.1);
}
.crs_v2 #faq_block li .question {
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
  .crs_v2 #faq_block li .question {
    font-size: 16px;
    line-height: 24px;
  }
}
.crs_v2 #faq_block li .question span {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid #2c50d3;
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;
}
.crs_v2 #faq_block li .question span::before {
  content: "";
  width: 10px;
  height: 2px;
  background: #2c50d3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
}
.crs_v2 #faq_block li .question span::after {
  content: "";
  width: 2px;
  height: 10px;
  background: #2c50d3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  transition: all 0.3s;
}
.crs_v2 #faq_block li .answer {
  display: none;
  padding-top: 8px;
  font-size: 16px;
  line-height: 24px;
  color: #667085;
  padding-right: 48px;
  margin-bottom: 0;
}
.crs_v2 #faq_block li .question.active span::after {
  height: 0;
}
.crs_v2 #faq_block li .question.active + .answer {
  display: block;
}
.crs_v2 #last_cta {
  padding: 0;
  display: flex;
  align-items: center;
  gap: 36px;
}
@media (max-width: 768px) {
  .crs_v2 #last_cta {
    flex-direction: column;
  }
}
.crs_v2 #last_cta > div {
  width: calc(50% - 18px);
}
@media (max-width: 768px) {
  .crs_v2 #last_cta > div {
    width: 100%;
  }
}
.crs_v2 #last_cta .img img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
.crs_v2 #last_cta p {
  margin: 12px 0 0;
  font-size: 16px;
  line-height: 26px;
}
@media (max-width: 768px) {
  .crs_v2 #last_cta p {
    font-size: 14px;
    line-height: 24px;
  }
}
.crs_v2 #last_cta p:last-of-type {
  font-weight: 700;
  margin-bottom: 28px;
}
.crs_v2 footer {
  margin-top: 80px;
  padding: 100px 0;
  background: #00042e;
}
@media (max-width: 768px) {
  .crs_v2 footer {
    margin-top: 40px;
    padding: 40px 0;
    background: linear-gradient(0deg, #00042e 0%, #00042e 100%), lightgray -17.002px -7.582px/109.068% 101.948% no-repeat;
  }
}
.crs_v2 footer .crs_container {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
}
.crs_v2 footer .crs_container p {
  font-size: 12px;
  line-height: 22px;
  color: #dcdcdc;
  margin: 0;
}
@media (max-width: 768px) {
  .crs_v2 footer .crs_container p {
    text-align: center;
  }
}
.crs_v2 footer .crs_container p:nth-child(2) a {
  text-decoration: underline;
  color: #dcdcdc;
}
.crs_v2 footer .crs_container p:last-of-type {
  display: flex;
  gap: 10px;
}
.crs_v2 footer .crs_container p:last-of-type a {
  position: relative;
  color: #dcdcdc;
}
.crs_v2 footer .crs_container p:last-of-type a:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: -5px;
  width: 1px;
  height: 70%;
  background: #dcdcdc;
}
.crs_v2 .crs_popup_form {
  position: fixed;
  opacity: 0;
  pointer-events: none;
  top: 0;
  right: 0;
  width: 100%;
  height: 100dvh;
  z-index: 999;
  justify-content: center;
  align-items: center;
  padding: 0;
  transition: all 0.8s ease 0s;
}
@media (max-width: 768px) {
  .crs_v2 .crs_popup_form {
    padding: 0;
  }
}
.crs_v2 .crs_popup_form.active {
  opacity: 1;
  pointer-events: unset;
}
.crs_v2 .crs_popup_form.active .form {
  transform: translateX(0);
  transition: all 0.8s ease 0s;
}
.crs_v2 .crs_popup_form .form {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 550px;
  width: 100%;
  height: 100%;
  transition: all 0.8s ease 0s;
  transform: translateX(100%);
  background: #fff;
  overflow: auto;
}
.crs_v2 .crs_popup_form .form::-webkit-scrollbar {
  width: 7px;
}
.crs_v2 .crs_popup_form .form::-webkit-scrollbar-track {
  border-radius: 0;
  background: white;
}
.crs_v2 .crs_popup_form .form::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background: rgba(217, 217, 217, 0.7);
}
.crs_v2 .crs_popup_form .form .close {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40px;
  right: 40px;
  height: 16px;
  width: 16px;
  opacity: 1;
  z-index: 1;
}
@media (max-width: 768px) {
  .crs_v2 .crs_popup_form .form .close {
    top: 24px;
    right: 16px;
  }
}
.crs_v2 .crs_popup_form .form .close svg {
  width: 100%;
  height: 100%;
}
.crs_v2 .crs_popup_form form {
  padding: 60px 40px 24px;
  display: flex;
  flex-direction: column;
  background: #fff;
}
@media (max-width: 768px) {
  .crs_v2 .crs_popup_form form {
    padding: 24px 16px;
  }
}
.crs_v2 .crs_popup_form form h2 {
  font-size: 21px;
  line-height: 34px;
  color: #000;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: left;
}
@media (max-width: 768px) {
  .crs_v2 .crs_popup_form form h2 {
    text-align: left;
    padding-right: 40px;
  }
}
.crs_v2 .crs_popup_form form .inputs1_title {
  color: #161718;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  margin: 0 0 20px;
}
.crs_v2 .crs_popup_form form .inputs2_title {
  color: #161718;
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  margin: 0 0 10px;
}
.crs_v2 .crs_popup_form form label {
  border-radius: 3px;
  border: 1px solid #ccc;
  background: #fff;
  padding: 17px 13px;
  margin-bottom: 0;
  position: relative;
  width: 100%;
}
.crs_v2 .crs_popup_form form label.error {
  border-color: red;
}
.crs_v2 .crs_popup_form form label.name_label {
  margin-top: 24px;
}
.crs_v2 .crs_popup_form form label.name_label.is_hidden {
  display: none;
}
.crs_v2 .crs_popup_form form label input {
  width: calc(100% - 46px);
  border: none;
  background: none;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  outline: none;
  font-weight: 400;
}
.crs_v2 .crs_popup_form form label input::-moz-placeholder {
  color: #676767;
}
.crs_v2 .crs_popup_form form label input::placeholder {
  color: #676767;
}
.crs_v2 .crs_popup_form form label::before {
  content: "*";
  color: #eb6f2d;
  font-size: 16px;
  position: absolute;
  top: 3px;
  right: 6px;
}
.crs_v2 .crs_popup_form form label::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 13px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: url("https://conversionratestore.github.io/projects/dropservicing/optin/img/sms.svg") no-repeat center;
  background-size: contain;
}
.crs_v2 .crs_popup_form form label:last-of-type::after {
  background: url("https://conversionratestore.github.io/projects/dropservicing/optin/img/user.svg") no-repeat center;
  background-size: contain;
}
.crs_v2 .crs_popup_form form .inputs1 {
  display: flex;
  flex-direction: column;
}
.crs_v2 .crs_popup_form form .inputs2 {
  display: none;
}
.crs_v2 .crs_popup_form form .inputs2.active {
  display: block;
}
.crs_v2 .crs_popup_form form .inputs2 .time_list {
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-bottom: 0;
  margin-top: 36px;
  padding: 0;
}
.crs_v2 .crs_popup_form form .inputs2 .time_list li {
  display: flex;
  position: relative;
  padding: 8px 13px;
  border-radius: 3px;
  border: 1px solid #ccc;
  gap: 11px;
  cursor: pointer;
}
.crs_v2 .crs_popup_form form .inputs2 .time_list li .point {
  margin-top: 4px;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  border: 1px solid #d8dae5;
}
.crs_v2 .crs_popup_form form .inputs2 .time_list li.selected {
  border-color: #2c50d3;
}
.crs_v2 .crs_popup_form form .inputs2 .time_list li.selected .point {
  border: 5px solid #2c50d3;
}
.crs_v2 .crs_popup_form form .inputs2 .time_list li p {
  margin: 0;
}
.crs_v2 .crs_popup_form form .inputs2 .time_list li p:first-of-type {
  font-size: 14px;
  line-height: 24px;
  color: #161718;
  font-weight: 600;
}
.crs_v2 .crs_popup_form form .inputs2 .time_list li p:last-of-type {
  font-size: 12px;
  line-height: 22px;
  color: #161718;
  font-weight: 400;
}
.crs_v2 .crs_popup_form form .inputs2 .time_list li .comment {
  font-size: 12px;
  line-height: 22px;
  color: #161718;
  font-weight: 400;
  opacity: 0.4;
  position: absolute;
  bottom: calc(100% + 4px);
  left: 0;
}
.crs_v2 .crs_popup_form form .cta {
  margin-top: 24px;
  width: 100%;
}
.crs_v2 .crs_popup_form .tp_label {
  color: #161718;
  margin-top: 24px;
}
.crs_v2 .crs_popup_form .bonus {
  padding: 24px 38px;
  background: #eeefff;
}
@media (max-width: 768px) {
  .crs_v2 .crs_popup_form .bonus {
    padding: 24px 16px;
    margin: 0;
  }
}
.crs_v2 .crs_popup_form .bonus p:first-of-type {
  display: flex;
  gap: 14px;
  font-size: 20px;
  line-height: 28px;
  color: #000;
  font-weight: 700;
  margin-bottom: 16px;
}
.crs_v2 .crs_popup_form .bonus p:first-of-type img {
  width: 28px;
  height: 28px;
}
.crs_v2 .crs_popup_form .bonus p:last-of-type {
  font-size: 14px;
  line-height: 22px;
  color: #161718;
  margin-bottom: 16px;
}
.crs_v2 .crs_popup_form .bonus ul {
  padding: 0 0 0 15px;
}
.crs_v2 .crs_popup_form .bonus ul li {
  font-size: 14px;
  line-height: 22px;
  color: #161718;
}
.crs_v2 .seats_left_txt {
  color: #161718;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  margin: 0;
}
.crs_v2 .progress_bar_container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 9px;
  border-radius: 30px;
  background: #eeefff;
  margin: 12px 0;
}
.crs_v2 .progress_bar_container .progress_bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 284px;
  height: 100%;
  border-radius: 30px;
  background: repeating-linear-gradient(-35deg, #2c50d3, #2c50d3 15px, #5673dc 15px, #5673dc 30px);
  background: linear-gradient(-35deg, #2c50d3 15px, #5673dc 15px, #5673dc 30px, #2c50d3 30px, #2c50d3 45px);
  background-size: 60px 18px;
  animation: move 2s linear infinite;
}
@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 30px 0;
  }
}
.crs_v2 .trusted_block {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6px;
  background: #eeefff;
  padding: 12px 10px;
  margin: 0;
}
.crs_v2 .trusted_block > img {
  max-width: 102px;
  width: 100%;
  margin: 0 auto;
}
.crs_v2 .trusted_block p {
  color: #161718;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 0;
}
.crs_v2 .trusted_block p span {
  color: #2c50d3;
  font-weight: 700;
}
.crs_v2 .info_block {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 15px 0 24px;
  padding: 0;
}
.crs_v2 .info_block .info_item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
}
.crs_v2 .info_block .info_item .info_icon {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #2c50d3;
}
.crs_v2 .info_block .info_item p {
  color: #161718;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  margin: 0;
}
.crs_v2 .safe_and_secure_block {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  margin: 8px 0 0;
}
.crs_v2 .safe_and_secure_block .safe_and_secure_icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 20px;
  background: #eff2fd;
  flex-shrink: 0;
}
.crs_v2 .safe_and_secure_block p {
  color: #505051;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.01px;
  margin: 0;
}
.crs_v2 .crs_video_popup {
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
  .crs_v2 .crs_video_popup {
    padding-top: 10px;
  }
}
.crs_v2 .crs_video_popup.active {
  display: flex;
}
.crs_v2 .crs_video_popup .banner {
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
  .crs_v2 .crs_video_popup .banner {
    padding: 16px;
    flex-direction: column;
  }
}
.crs_v2 .crs_video_popup .banner > div p:first-of-type {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 8px;
}
.crs_v2 .crs_video_popup .banner > div p:last-of-type {
  font-size: 18px;
  line-height: 25px;
  color: #161718;
  display: flex;
  align-items: center;
}
@media (max-width: 768px) {
  .crs_v2 .crs_video_popup .banner > div p:last-of-type {
    margin-bottom: 20px;
  }
}
.crs_v2 .crs_video_popup .banner > div p:last-of-type span {
  color: #2daf6b;
}
.crs_v2 .crs_video_popup .banner > div p:last-of-type img:first-of-type {
  width: auto;
  height: 20px;
  margin-right: 8px;
}
.crs_v2 .crs_video_popup .banner > div p:last-of-type img:last-of-type {
  width: 14px;
  height: 14px;
}
.crs_v2 .crs_video_popup .banner .cta {
  width: 100%;
  max-width: 470px;
}
.crs_v2 .crs_video_popup > .video {
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
  .crs_v2 .crs_video_popup > .video {
    max-height: 50vh;
    height: 60vw;
    margin-top: calc(50vh - 30vw - 100px);
  }
}
.crs_v2 .crs_video_popup > .video .video {
  width: 100%;
}
.crs_v2 .crs_video_popup > .video > div:not(.crs_close) {
  width: 100%;
}
.crs_v2 .crs_video_popup .crs_close {
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
  .crs_v2 .crs_video_popup .crs_close {
    right: 10px;
    top: 10px;
    z-index: 1;
  }
}
.crs_v2 .crs_video_popup .crs_close::before {
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
.crs_v2 .crs_video_popup .crs_close::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 2px;
  height: 20px;
  border-radius: 4px;
  background: #fff;
}
.crs_v2 .crs_blockers_popup {
  position: fixed;
  opacity: 0;
  pointer-events: none;
  top: 0;
  right: 0;
  width: 100%;
  height: 100dvh;
  z-index: 1000000000000;
  transition: all 0.8s ease 0s;
  overflow: hidden;
}
.crs_v2 .crs_blockers_popup.active {
  opacity: 1;
  pointer-events: unset;
}
.crs_v2 .crs_blockers_popup.active > .crs_blockers_popup_container {
  transform: translateX(0);
  transition: all 0.8s ease 0s;
}
.crs_v2 .crs_blockers_popup.active .sticky_btn_wrapper {
  transform: translateX(0);
  transition: all 0.8s ease 0s;
  opacity: 0;
  animation: showButton 0s 0.5s forwards;
}
@keyframes showButton {
  to {
    opacity: 1;
  }
}
.crs_v2 .crs_blockers_popup .close {
  position: absolute;
  opacity: 1;
  top: 40px;
  right: 40px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  z-index: 1;
}
@media (max-width: 768px) {
  .crs_v2 .crs_blockers_popup .close {
    left: 16px;
    right: unset;
    top: 30px;
  }
}
.crs_v2 .crs_blockers_popup .close svg {
  width: 100%;
  height: 100%;
}
.crs_v2 .crs_blockers_popup > .crs_blockers_popup_container {
  position: absolute;
  top: 0;
  right: 0;
  overflow-y: auto;
  max-width: 805px;
  width: 100%;
  height: 100%;
  padding: 60px 40px;
  background: linear-gradient(0deg, #fff 0%, #fff 100%), #00042e;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.35);
  -webkit-backdrop-filter: blur(55px);
          backdrop-filter: blur(55px);
  transition: all 0.8s ease 0s;
  transform: translateX(100%);
}
@media (max-width: 768px) {
  .crs_v2 .crs_blockers_popup > .crs_blockers_popup_container {
    padding: 86px 16px 110px 16px;
    background: #fff;
    -webkit-backdrop-filter: blur(55px);
            backdrop-filter: blur(55px);
    box-shadow: none;
  }
}
.crs_v2 .crs_blockers_popup > .crs_blockers_popup_container::-webkit-scrollbar {
  width: 7px;
}
.crs_v2 .crs_blockers_popup > .crs_blockers_popup_container::-webkit-scrollbar-track {
  border-radius: 0;
  background: white;
}
.crs_v2 .crs_blockers_popup > .crs_blockers_popup_container::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background: rgba(217, 217, 217, 0.7);
}
.crs_v2 .crs_blockers_popup .crs_blockers_content {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}
@media (max-width: 768px) {
  .crs_v2 .crs_blockers_popup .crs_blockers_content {
    flex-direction: column;
    gap: 30px;
  }
}
.crs_v2 .crs_blockers_popup .crs_blockers_content > div:not(.close) {
  width: 50%;
}
@media (max-width: 768px) {
  .crs_v2 .crs_blockers_popup .crs_blockers_content > div:not(.close) {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .crs_v2 .crs_blockers_popup .crs_blockers_content > h3 {
    color: #161718;
    font-size: 26px;
    font-weight: 800;
    line-height: 34px;
    margin: 0;
  }
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .video_wrapper {
  height: 100%;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .video_wrapper .review_wrapper {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 11px;
  padding: 20px 20px 80px 20px;
  border-radius: 20px;
  background: #eeefff;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .video_wrapper .review_wrapper .review_header {
  display: flex;
  gap: 14px;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .video_wrapper .review_wrapper .review_header .img_wrapper {
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .video_wrapper .review_wrapper .review_header .img_wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .video_wrapper .review_wrapper .review_header .review_info p {
  color: #161718;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .video_wrapper .review_wrapper .review_header .review_info img {
  max-width: 88px;
  height: 21px;
  -o-object-fit: contain;
     object-fit: contain;
  margin-top: 4px;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .video_wrapper .review_wrapper > p {
  color: #31364e;
  font-size: 13px;
  font-weight: 400;
  line-height: 23px;
  margin: 0;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .video_wrapper .video {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: -60px;
  height: 100%;
  width: 100%;
  aspect-ratio: 5/10;
  border-radius: 20px;
  background: #000;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .video_wrapper .video .wistia_embed {
  border-radius: 20px;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .video_wrapper .video .wistia_embed > div {
  border-radius: 20px !important;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .video_wrapper .video .wistia_embed > div .w-css-reset .w-css-reset-tree.w-bpb-wrapper button {
  display: none !important;
}
@media (max-width: 768px) {
  .crs_v2 .crs_blockers_popup .crs_blockers_content .video_wrapper .video {
    aspect-ratio: unset;
    height: 519px;
  }
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .video_wrapper .video video {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  -o-object-fit: cover;
     object-fit: cover;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .video_wrapper .video img {
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 20px;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .info_wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  height: auto;
}
@media (max-width: 768px) {
  .crs_v2 .crs_blockers_popup .crs_blockers_content .info_wrapper {
    gap: 30px;
  }
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .info_wrapper .title_wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .info_wrapper .title_wrapper svg {
  width: 80px;
  height: 80px;
}
@media (max-width: 768px) {
  .crs_v2 .crs_blockers_popup .crs_blockers_content .info_wrapper .title_wrapper svg {
    display: none;
  }
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .info_wrapper .title_wrapper > h3 {
  color: #161718;
  font-size: 26px;
  font-weight: 800;
  line-height: 34px;
  letter-spacing: normal;
  margin: 0;
  max-width: 314px;
}
@media (max-width: 768px) {
  .crs_v2 .crs_blockers_popup .crs_blockers_content .info_wrapper .title_wrapper > h3 {
    display: none;
  }
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .info_wrapper .title_wrapper .txt_container {
  position: relative;
  height: 100%;
  overflow: auto;
  padding-right: 15px;
}
@media (max-width: 768px) {
  .crs_v2 .crs_blockers_popup .crs_blockers_content .info_wrapper .title_wrapper .txt_container {
    height: 100%;
    max-height: 100%;
  }
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .info_wrapper .title_wrapper .txt_container::-webkit-scrollbar {
  width: 7px;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .info_wrapper .title_wrapper .txt_container::-webkit-scrollbar-track {
  border-radius: 0;
  background: none;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .info_wrapper .title_wrapper .txt_container::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background: rgba(217, 217, 217, 0.7);
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .info_wrapper .title_wrapper .txt_container > p {
  color: #161718;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: normal;
  margin: 0;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .info_wrapper .title_wrapper .txt_container > p + p {
  margin-top: 15px;
}
.crs_v2 .crs_blockers_popup .crs_blockers_content .cta {
  width: 100%;
  max-width: 100%;
}
@media (max-width: 768px) {
  .crs_v2 .crs_blockers_popup .sticky_btn_wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
    background: white;
    transition: all 0.8s ease 0s;
    transform: translateX(100%);
  }
}
.crs_v2 .crs_exit_popup {
  position: fixed;
  opacity: 0;
  pointer-events: none;
  top: 0;
  right: 0;
  width: 100%;
  height: 100dvh;
  z-index: 1000000000000;
  transition: all 0.8s ease 0s;
  background: rgba(169, 181, 198, 0.2);
  -webkit-backdrop-filter: blur(7px);
          backdrop-filter: blur(7px);
}
@media (max-width: 768px) {
  .crs_v2 .crs_exit_popup {
    background: rgba(0, 4, 46, 0.3);
    -webkit-backdrop-filter: none;
            backdrop-filter: none;
    overflow: auto;
  }
}
.crs_v2 .crs_exit_popup.active {
  opacity: 1;
  pointer-events: unset;
}
.crs_v2 .crs_exit_popup .close {
  position: absolute;
  z-index: 2;
  cursor: pointer;
  right: -15px;
  top: -13px;
  opacity: 1;
}
.crs_v2 .crs_exit_popup .crs_exit_content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 911px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: all 0.8s ease 0s;
}
@media (max-width: 768px) {
  .crs_v2 .crs_exit_popup .crs_exit_content {
    max-width: 343px;
    padding: 0 0 30px;
    margin-top: 50px;
  }
}
.crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info {
  border-radius: 10px 0 0 10px;
  background: #fff;
  padding: 30px 34px;
}
@media (max-width: 768px) {
  .crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info {
    padding: 30px 16px;
    border-radius: 10px;
  }
}
.crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info > h2 {
  color: #2f2f2f;
  font-size: 30px;
  font-weight: 800;
  line-height: 40px;
  text-transform: uppercase;
  margin: 0 0 8px;
}
.crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info .progress_bar_container {
  margin: 12px 0 8px;
}
.crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info > p {
  color: #161718;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
}
.crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info .crs_list_block {
  border-radius: 3px;
  background: #eeefff;
  padding: 14px 16px 18px 16px;
  margin: 22px 0;
}
.crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info .crs_list_block > h3 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  color: #2f2f2f;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  margin: 0;
}
.crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info .crs_list_block > h3 img {
  width: 38px;
  flex-shrink: 0;
}
.crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info .crs_list_block ul {
  list-style: none;
  padding: 14px 0 0;
  margin: 14px 0 0;
  border-top: 1px solid #ccc;
}
.crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info .crs_list_block ul li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}
@media (max-width: 768px) {
  .crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info .crs_list_block ul li {
    align-items: flex-start;
  }
}
@media (max-width: 768px) {
  .crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info .crs_list_block ul li svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
}
.crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info .crs_list_block ul li p {
  color: #2f2f2f;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin: 0;
}
.crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info .crs_list_block ul li + li {
  margin-top: 14px;
}
.crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info .cta {
  max-width: 100%;
  width: 100%;
}
@media (max-width: 768px) {
  .crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info .cta {
    font-size: 18px;
    padding: 22px 10px;
  }
}
.crs_v2 .crs_exit_popup .crs_exit_content .crs_main_info .no_btn {
  width: -moz-max-content;
  width: max-content;
  color: rgba(22, 23, 24, 0.5);
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  margin: 25px auto 0;
  cursor: pointer;
}/*# sourceMappingURL=style.css.map */`, Z1 = (e, i) => {
    const r = setInterval(() => {
      const c = document.querySelector(e);
      c && (clearInterval(r), i(c));
    }, 100);
  }, A = (e, i, r, c = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: i,
      event_type: r,
      event_loc: c
    }), console.dir(`Event: ${e} | ${i} | ${r} | ${c}`);
  }, O1 = ({ name: e, dev: i }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${i})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, jt = (e) => document.querySelectorAll(e), q1 = (e, i = "variant_1") => {
    let r = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(r), window.clarity("set", e, i), console.log("set", e, i));
    }, 1e3);
  };
  function Dt(e) {
    return new Promise((i) => {
      if (document.querySelector(e))
        return i(document.querySelector(e));
      const r = new MutationObserver(() => {
        document.querySelector(e) && (i(document.querySelector(e)), r.disconnect());
      });
      r.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(e) {
    e = e === void 0 ? {} : e;
    let i, r, c, l, a = (e == null ? void 0 : e.delay) || 50;
    function p() {
      i = null, l = 0;
    }
    return p(), function() {
      return r = window.scrollY, i != null && (l = r - i), i = r, clearTimeout(c), c = setTimeout(p, a), l;
    };
  })();
  const R1 = (e, i = 100) => {
    const c = e.getBoundingClientRect().top + window.scrollY - i;
    window.scrollTo({
      top: c,
      behavior: "smooth"
    });
  }, F1 = (e, i, r, c = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: i,
      event_type: r,
      event_loc: c
    }), yi(`Event: ${e} | ${i} | ${r} | ${c}`, "success");
  };
  class W1 {
    constructor(i) {
      this.elements = typeof i == "string" ? document.querySelectorAll(i) : i instanceof Element ? [i] : i;
    }
    on(i, r, c) {
      return typeof r == "function" && (c = r, r = ""), this.elements.forEach(function(l) {
        l.addEventListener(i, function(a) {
          var p;
          if (r !== "") {
            let _ = (p = a.target) == null ? void 0 : p.closest(r);
            _ && (c == null || c.call(_, a));
          } else
            c == null || c.call(l, a);
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
      return this.elements.forEach((r, c) => {
        i(r, c);
      }), this;
    }
    style(i, r) {
      const c = i.split("-").map((l, a) => a === 0 ? l : l.charAt(0).toUpperCase() + l.slice(1)).join("");
      return this.elements.forEach(function(l) {
        l.style[c] = r;
      }), this;
    }
  }
  const f = (e) => new W1(e), hn = (e, i, r, c, l = 1e3, a = 0.5) => {
    let p, _;
    if (p = new IntersectionObserver(
      function(h) {
        h[0].isIntersecting === !0 ? _ = setTimeout(() => {
          F1(
            i,
            h[0].target.dataset.visible || c || "",
            "view",
            r
          ), p.disconnect();
        }, l) : (yi("Element is not fully visible", "warn"), clearTimeout(_));
      },
      { threshold: [a] }
    ), typeof e == "string") {
      const h = document.querySelector(e);
      h && p.observe(h);
    } else
      p.observe(e);
  }, yi = (e, i = "info") => {
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
  }, wn = "https://conversionratestore.github.io/projects/dropservicing/optin/img/", k = {
    blockersIcon1: `
  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
  <path d="M34.7797 70.098C32.276 70.3984 30.7738 70.6989 30.7738 71.0994C30.7738 71.9006 38.1847 72.6017 47.1979 72.6017C56.3113 72.6017 63.6221 71.9006 63.6221 71.0994C63.6221 70.3984 58.9151 69.8977 52.3054 69.6974C59.4159 66.4927 65.4247 60.584 68.329 53.2732C71.734 44.8609 71.1331 34.9463 66.5263 27.1348C63.1213 21.3263 57.5131 16.8197 51.0035 14.6164C47.4984 13.1142 43.5926 12.2129 39.4866 12.2129C23.463 12.2129 10.3438 25.3322 10.3438 41.3557C10.3438 55.8771 20.9594 67.8947 34.7797 70.098ZM39.4866 13.7151C54.709 13.7151 67.1272 26.1334 67.1272 41.3557C67.1272 56.5781 54.709 68.9964 39.4866 68.9964C24.2642 68.9964 11.846 56.5781 11.846 41.3557C11.846 26.1334 24.2642 13.7151 39.4866 13.7151Z" fill="#161718"/>
  <path d="M39.4865 66.2923C53.2066 66.2923 64.4231 55.0758 64.4231 41.3556C64.4231 27.6354 53.2066 16.4189 39.4865 16.4189C25.7663 16.4189 14.5498 27.6354 14.5498 41.3556C14.5498 55.0758 25.7663 66.2923 39.4865 66.2923ZM20.3583 27.8357L22.3613 29.8387C22.6617 30.1391 23.1625 30.1391 23.4629 29.8387C23.7633 29.5382 23.7633 29.0375 23.4629 28.7371L21.3598 26.634C25.0653 22.0272 30.4732 18.9226 36.6823 18.1214V20.0242C36.6823 20.4248 36.9828 20.8254 37.4835 20.8254C37.9843 20.8254 38.2847 20.525 38.2847 20.0242V17.9212C44.2935 17.6207 49.9018 19.5235 54.3082 23.0287L53.2066 24.1303C52.9062 24.4307 52.9062 24.9315 53.2066 25.2319C53.5071 25.5323 54.0078 25.5323 54.3082 25.2319L55.51 24.0301C59.8163 28.036 62.7206 33.6443 63.1212 39.8534H61.4187C61.0181 39.8534 60.6175 40.1538 60.6175 40.6546C60.6175 41.1553 60.918 41.4557 61.4187 41.4557H63.2213C63.2213 47.765 60.6175 53.5736 56.5115 57.7797C56.4113 57.279 56.211 57.279 54.9091 55.9771C54.6087 55.6766 54.1079 55.6766 53.8075 55.9771C53.5071 56.2775 53.5071 56.7783 53.8075 57.0787C55.2096 58.3806 55.2096 58.5809 55.6102 58.6811C51.9047 62.0861 46.9975 64.3895 41.6897 64.8902C41.7898 64.5897 41.6897 65.2908 41.6897 62.4867C41.6897 62.0861 41.3893 61.6855 40.8885 61.6855C40.3878 61.6855 40.0873 61.9859 40.0873 62.4867V64.9903C33.9784 65.0905 28.3701 62.9874 23.9636 59.0817L25.2656 57.6796C25.566 57.3792 25.566 56.8784 25.2656 56.578C24.9651 56.2775 24.4644 56.2775 24.1639 56.578L22.7619 57.98C19.457 54.6752 17.2538 50.3688 16.3525 45.6619H18.3554C18.756 45.6619 19.1566 45.3615 19.1566 44.8608C19.1566 44.36 18.8561 44.0596 18.3554 44.0596H16.2523C15.5513 38.1509 17.1536 32.4425 20.3583 27.8357Z" fill="#161718"/>
  <path d="M36.2816 26.0331L37.8839 24.4307L38.0842 38.3512C37.0828 38.7518 36.1814 39.6531 35.9811 40.7547C35.6807 42.2569 36.582 43.8593 38.0842 44.4602C39.7867 45.1612 41.99 44.2599 42.691 42.3571L52.5054 41.9565C52.1049 42.4572 51.8044 42.958 51.4038 43.2584C51.1034 43.5588 51.1034 44.0596 51.4038 44.36C51.7043 44.6605 52.205 44.6605 52.5054 44.36C53.2065 43.5588 54.2079 42.1568 54.909 41.4557C55.2094 41.1553 55.2094 40.6546 54.8088 40.3541C53.9075 39.553 52.8059 38.8519 51.7043 38.4513C51.3037 38.251 50.9031 38.4513 50.7028 38.8519C50.5025 39.2525 50.7028 39.6531 51.1034 39.8534C51.6041 40.0537 52.0047 40.254 52.4053 40.5544L42.691 40.955C42.3906 39.553 41.289 38.8519 39.8869 38.7518C39.7867 38.5515 39.5864 38.4513 39.4863 38.3512C39.3862 34.846 39.286 27.8357 39.286 24.4307C39.987 24.9315 40.5879 25.4322 41.1888 26.0331C41.4892 26.3335 41.99 26.3335 42.2904 26.0331C42.5909 25.7326 42.5909 25.2319 42.2904 24.9315C41.2889 23.93 40.0872 23.0287 38.8854 22.2275C38.585 22.0272 38.1844 22.0272 37.8839 22.3276L35.0798 25.1318C34.7794 25.4322 34.7794 25.9329 35.0798 26.2334C35.4804 26.3335 35.9811 26.3335 36.2816 26.0331ZM41.3891 40.8549C41.8898 42.0566 40.2875 43.5588 38.7853 42.958C37.9841 42.6575 37.4834 41.7562 37.5835 40.955C37.6837 40.4543 38.0842 39.9535 38.585 39.7532C38.6851 39.9535 38.9856 40.0537 39.1859 40.0537C40.0872 39.9535 41.0887 40.1538 41.3891 40.8549Z" fill="#161718"/>
  <path d="M53.5074 13.4144C53.908 13.4144 54.3086 13.114 54.3086 12.7134C54.4088 11.3114 54.8093 10.0094 55.5104 8.80767C55.7107 8.40709 55.6105 8.0065 55.2099 7.8062C54.8093 7.60591 54.4088 7.70605 54.2085 8.10664C53.4073 9.5087 52.9065 11.0109 52.8064 12.6133C52.8064 13.114 53.1068 13.4144 53.5074 13.4144Z" fill="#161718"/>
  <path d="M57.2128 15.6175C57.6133 15.8178 58.0139 15.7177 58.2142 15.4172C59.1155 14.0152 60.117 12.8134 61.4189 11.7118C61.7194 11.4113 61.8195 11.0108 61.5191 10.6102C61.2186 10.3097 60.8181 10.2096 60.4175 10.51C59.0154 11.7118 57.9138 13.0137 56.9123 14.5159C56.8122 14.9165 56.9123 15.4172 57.2128 15.6175Z" fill="#161718"/>
  <path d="M60.4174 18.5219C60.6177 18.8223 61.1185 19.0226 61.4189 18.7222L65.2245 16.3186C65.5249 16.1184 65.7252 15.6176 65.4248 15.3172C65.2245 15.0167 64.7238 14.8164 64.4233 15.1169L60.6177 17.5204C60.3173 17.6206 60.2171 18.1213 60.4174 18.5219Z" fill="#161718"/>
</svg>
  `,
    blockersIcon2: `
  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
  <path d="M51.7931 53.7437C51.4438 54.0629 51.4192 54.6042 51.7384 54.9547C53.0375 56.3788 53.6022 58.4357 53.2116 60.3218C53.1021 60.8517 53.5046 61.3531 54.052 61.3531C54.4493 61.3531 54.8065 61.0752 54.8902 60.6701C55.3902 58.2549 54.6681 55.6221 53.004 53.7984C52.6859 53.4491 52.1446 53.4234 51.7931 53.7437Z" fill="#161718"/>
  <path d="M30.0094 60.2221C30.0853 59.7545 29.7673 59.3148 29.3007 59.2389C28.8286 59.1585 28.3923 59.48 28.3175 59.9476C28.0619 61.5235 28.2873 63.1898 28.9525 64.6396C29.0965 64.9543 29.4068 65.1396 29.7315 65.1396C30.3492 65.1396 30.7733 64.4982 30.5106 63.9253C29.986 62.7813 29.8085 61.4654 30.0094 60.2221Z" fill="#161718"/>
  <path d="M31.2948 44.2914C30.4459 44.9697 29.7076 45.7895 28.8559 46.4941C26.978 48.0476 25.1669 49.7444 23.8831 51.8373C20.2262 57.7988 21.1016 66.5843 28.0103 73.1026C29.1122 74.1422 30.3821 75.328 31.8051 75.8873C33.8832 76.7041 36.1969 77.1858 38.7654 77.211C42.3133 77.8517 45.6166 77.6295 48.4883 76.7815C58.4714 73.8267 64.1974 59.9787 55.9735 49.8704C54.332 46.7297 49.9508 44.9329 48.4886 41.5791C47.7208 39.8183 47.8636 37.8479 48.0184 35.9556C48.7236 35.4172 49.3053 34.5569 49.3053 33.1933C49.3053 31.1967 44.579 30.8813 42.4245 30.8412L42.4888 27.8063C43.6826 27.4428 44.8902 28.4001 45.9425 28.8873C47.8476 29.7692 50.323 29.7094 52.2972 28.31C55.6438 26.6956 57.3937 23.5238 58.5262 19.9801C58.7369 19.3832 58.4445 18.9215 58.0028 18.7837C57.8272 18.7288 58.0474 18.7635 56.0296 18.7535C53.1522 18.7318 52.5228 18.9553 49.9258 19.498C48.2405 19.8462 46.3287 20.2424 45.1077 21.6765C43.95 23.065 44.237 24.0155 42.5499 24.9254C42.5845 23.2974 42.6426 20.5581 42.6401 20.6754C43.2536 20.2465 43.1014 19.9324 44.6568 17.1397C45.9922 14.7335 47.3543 12.1311 46.659 9.31828C45.8854 6.19596 43.0367 4.50829 40.5084 3.0973C39.3863 2.47075 38.6371 2.66798 38.005 3.47341C35.1568 7.13301 35.1836 12.6319 38.0653 16.2625C38.6793 17.039 39.4861 17.7959 40.0474 18.5437C40.0474 18.5437 40.0474 18.5448 40.0486 18.5448C40.2854 18.8606 40.5779 19.711 40.9344 20.2337L40.8845 22.5868C39.3745 21.0923 38.9543 19.6747 37.6256 18.6419C34.976 16.5884 30.4213 17.7335 28.5921 18.3194C26.447 18.9913 24.7874 20.2725 23.918 21.9277C23.6618 22.4163 23.9263 23.0096 24.4492 23.152C25.7511 23.5107 26.9681 24.0003 28.1285 24.5337C29.8666 25.573 31.0383 26.4877 32.5851 27.0914C37.0603 28.8377 38.1107 25.5713 40.8209 25.5863L40.709 30.8589C38.8318 30.9316 35.9155 31.2243 34.8532 32.2916C34.8534 32.287 34.8551 32.2833 34.8553 32.2787C34.7749 32.4693 33.3532 33.4849 34.5282 35.0642C35.707 40.0694 35.1528 41.2093 31.2948 44.2914ZM48.0028 75.1375C42.7249 76.691 36.4046 75.7379 31.899 72.7067C24.7797 67.9267 23.5901 57.5538 28.5285 50.7078C29.8477 48.8841 31.582 47.6118 33.4191 46.2647C38.1182 42.8168 38.1132 42.3443 37.9119 35.5751C39.3162 36.2962 43.6644 36.07 45.0657 35.8898C45.1377 37.3726 45.1689 37.2987 45.2494 38.6152C45.4692 42.2407 45.8969 43.7257 50.697 47.3239C51.4894 47.9176 52.2394 48.4801 52.8733 49.0627C62.7185 58.1275 57.5649 72.3067 48.0028 75.1375ZM55.5155 49.3299C55.2039 48.9745 54.8754 48.6282 54.5324 48.2899C54.8957 48.6138 55.2268 48.9596 55.5155 49.3299ZM47.1468 33.1933C46.3471 33.4773 44.7155 33.7887 42.3611 33.8283L42.388 32.5576C44.7279 32.599 46.3502 32.9094 47.1468 33.1933ZM46.4191 22.7803C47.4329 21.5901 49.4987 21.3723 51.1803 20.9812C53.7833 20.3864 54.973 20.4591 56.5463 20.4701C55.4038 23.5795 53.4363 26.5294 50.197 27.2736C48.4192 27.6918 47.3365 26.7594 44.9703 26.1092C46.1434 25.6912 48.0309 25.8383 49.4079 25.4143L51.9369 24.6364C52.389 24.498 52.6434 24.0181 52.5039 23.5649C52.3655 23.114 51.8945 22.8585 51.4325 22.998C48.7322 23.7198 49.3734 23.8547 46.9983 24.0527C46.5174 24.0928 46.0343 24.1444 45.5599 24.2195C45.9141 23.5719 46.1305 23.1275 46.4191 22.7803ZM39.409 15.1977C37.1616 12.3662 36.8856 7.76179 39.4079 4.46337C39.6892 4.57706 41.8364 5.74359 43.0084 6.75913C46.5583 9.82919 45.02 12.9405 42.8988 16.78C42.4719 14.9564 41.9702 13.9541 41.7662 12.6966C41.9002 12.3981 41.8187 12.3172 41.8432 10.3942C41.8432 9.38872 40.3953 9.20825 40.1535 10.191C39.4871 12.9156 40.7329 14.842 41.2677 17.3303C40.6134 16.501 39.9544 15.8854 39.409 15.1977ZM29.1099 19.9533C31.6468 19.1419 34.9392 18.7268 36.5742 19.9968C37.2622 20.5302 37.7133 21.3616 38.3942 22.3018C36.873 22.1778 35.6136 22.4044 34.6791 22.0437L32.1501 21.0716C31.7115 20.9009 31.2126 21.1219 31.043 21.5649C30.8733 22.0069 31.0943 22.5024 31.5363 22.6721L34.0642 23.6442C35.4698 24.1849 36.9546 23.8472 38.5367 24.0445C37.5307 24.4137 36.8429 24.9711 36.1144 25.1844C34.7617 25.5828 32.6568 24.8875 31.2707 24.1721C29.6758 23.3339 27.9515 22.4846 26.0441 21.8473C26.7729 21.0181 27.8421 20.3506 29.1099 19.9533ZM40.6726 32.5771L40.6464 33.8071C38.6886 33.7219 37.3122 33.4466 36.5988 33.1933C37.3154 32.9379 38.7006 32.6609 40.6726 32.5771Z" fill="#161718"/>
  <path d="M45.0531 58.131C44.2297 57.8594 43.3948 57.6844 42.5692 57.5248C42.5718 56.0169 42.5945 54.5149 42.6125 53.0106C43.943 53.3021 45.1397 54.2247 45.7607 55.4613C45.9716 55.8843 46.4861 56.0584 46.9103 55.843C47.3344 55.631 47.5051 55.1165 47.2919 54.6935C46.4346 52.9841 44.7133 51.5985 42.6291 51.2694C42.6396 50.6137 42.6346 49.9523 42.648 49.2984C42.6713 48.1993 40.9589 48.076 40.9337 49.2627C40.9202 49.9221 40.9252 50.589 40.9146 51.2502C38.5312 51.5516 36.76 53.0969 36.2428 54.5015C35.9694 55.2459 35.9973 56.0428 36.3176 56.6868C37.1007 58.2577 39.0821 58.5938 40.8432 58.9334C40.8459 60.7287 40.8835 62.5157 40.9079 64.307C39.8611 64.1213 38.4002 63.5966 38.0152 62.6053C37.8422 62.1645 37.3478 61.9502 36.9047 62.1176C35.5027 62.6642 36.9785 65.5201 40.9288 66.0486C40.9425 66.8322 40.9393 67.622 40.9571 68.4033C40.9683 68.8698 41.35 69.2403 41.8143 69.2403H41.8344C42.3076 69.2292 42.6826 68.8363 42.6714 68.3631C42.6539 67.5999 42.6573 66.8283 42.6437 66.0628C46.2132 65.6739 48.096 62.846 47.6156 60.8564C47.3433 59.7292 46.1937 58.506 45.0531 58.131ZM37.8522 55.9223C37.5567 55.3342 38.0405 54.6154 38.5152 54.1633C39.1696 53.542 40.0146 53.1335 40.8981 52.9777C40.8812 54.3813 40.8613 55.7829 40.8578 57.1898C39.8908 56.9953 38.2588 56.7392 37.8522 55.9223ZM45.3567 62.929C44.7252 63.648 43.7938 64.1865 42.6231 64.3512C42.5998 62.6575 42.5658 60.9676 42.562 59.2699C43.2299 59.4043 43.8845 59.5502 44.5174 59.7582C45.0922 59.9479 45.8154 60.7046 45.9482 61.2582C46.0665 61.747 45.8455 62.3709 45.3567 62.929Z" fill="#161718"/>
</svg>
  `,
    blockersIcon3: `
  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
  <path d="M43.2422 69.7666C47.262 74.3871 53.8859 76.5727 59.8661 75.2519C65.8462 73.9311 70.9333 69.1588 72.6331 63.2752C74.3328 57.3914 72.5743 50.6416 68.2198 46.3351C64.8995 43.0517 60.2558 41.3916 55.7505 41.3916C41.4383 41.3916 33.8592 58.9815 43.2422 69.7666ZM55.7505 43.0354C63.8338 43.0354 70.4091 49.6108 70.4091 57.693C70.4091 65.7762 63.8338 72.3516 55.7505 72.3516C47.6683 72.3516 41.093 65.7762 41.093 57.693C41.093 49.6108 47.6683 43.0354 55.7505 43.0354Z" fill="#161718"/>
  <path d="M58.0221 59.6368C58.5476 60.0746 59.0174 60.8751 58.8098 61.5985C58.6546 62.1358 57.9804 62.932 57.3661 63.3023C55.6309 64.3434 52.8919 63.3301 52.6893 62.1936C52.609 61.7462 52.1777 61.4519 51.7357 61.529C51.2884 61.6092 50.9909 62.0362 51.0711 62.4825C51.3653 64.1279 53.2632 65.1797 55.1069 65.3491V67.3423C55.1069 67.7961 55.475 68.1642 55.9288 68.1642C56.3826 68.1642 56.7507 67.7961 56.7507 67.3423V65.2703C57.2272 65.1742 57.7184 65.0074 58.2126 64.7107C59.0613 64.2002 60.0812 63.1236 60.3894 62.0523C60.7479 60.8055 60.2192 59.3276 59.0731 58.3729C56.7644 56.4563 52.5317 57.0377 51.7421 55.0499C51.2418 53.797 52.7134 51.1396 55.0833 50.7659C56.4382 50.5422 57.8766 51.2111 58.4898 52.3359C58.706 52.7351 59.2068 52.8849 59.6039 52.6645C60.0031 52.4483 60.1497 51.9485 59.9324 51.5504C59.1521 50.1164 57.5946 49.2059 55.917 49.1038V47.3937C55.917 46.9399 55.5489 46.5718 55.0951 46.5718C54.6413 46.5718 54.2732 46.9399 54.2732 47.3937V49.2679C51.1448 50.1191 49.3748 53.5474 50.215 55.6578C51.437 58.7311 56.0203 57.9732 58.0221 59.6368Z" fill="#161718"/>
  <path d="M28.9753 28.1309V32.3206C28.7276 32.3198 28.48 32.3313 28.2326 32.3198C27.6488 32.2476 27.1454 32.9471 27.4728 33.5387C27.9303 34.3653 28.675 35.4523 29.1005 36.2228C29.3734 36.7167 30.0626 36.8001 30.4415 36.3619C31.3853 35.2711 31.5184 34.4877 32.1431 33.4028C32.4895 32.7979 31.9644 32.0641 31.3148 32.1796C31.0848 32.2121 30.851 32.2214 30.6192 32.2439V28.1222C32.2755 27.5115 32.9654 25.4844 31.9329 24.0176L36.7468 19.2037C36.8975 19.3855 37.0587 19.5594 37.2009 19.747C37.3917 20.0005 37.706 20.1089 37.9704 20.0648C38.8234 19.9443 38.7153 18.9502 39.6335 16.5738C39.8385 16.0387 39.448 15.4656 38.8779 15.4565C37.3161 15.4706 36.7368 15.8385 35.5175 16.0559C34.8421 16.1774 34.6054 17.0218 35.113 17.476C35.2945 17.6395 35.4599 17.8202 35.6341 17.9919L30.5625 23.0635C28.8945 22.6079 26.7639 23.6946 27.1439 26.0473C27.2995 27.0112 28.0598 27.8154 28.9753 28.1309Z" fill="#161718"/>
  <path d="M12.2247 31.2344C12.9043 35.1574 15.4613 39.1681 18.5577 41.6707C26.007 47.6912 38.1317 46.2021 44.7204 38.7176C50.0136 32.7046 51.4725 22.929 45.7372 15.4799C42.4653 10.5613 36.8772 7.31006 30.5396 7.31006C17.618 7.31006 10.2272 19.7038 12.2247 31.2344ZM27.6372 9.22459V11.0772C27.6372 11.5309 28.0054 11.8991 28.4592 11.8991C28.9129 11.8991 29.2811 11.5309 29.2811 11.0772C29.2554 8.8238 29.3185 9.33663 29.2442 9.01951C38.811 8.27499 46.7348 15.6668 47.1076 24.8818H45.6745C45.2207 24.8818 44.8526 25.2499 44.8526 25.7037C44.8526 26.1574 45.2207 26.5256 45.6745 26.5256H47.0926C46.5911 35.1413 39.5062 42.0092 30.7976 42.144V40.9445C30.7976 40.4907 30.4294 40.1226 29.9756 40.1226C29.5219 40.1226 29.1537 40.4907 29.1537 40.9445V42.0868C20.5681 41.3721 13.8987 34.1312 13.9407 25.5153H17.5848C18.0386 25.5153 18.4067 25.1472 18.4067 24.6934C18.4067 24.2396 18.0386 23.8715 17.5848 23.8715H14.024C14.773 16.4716 20.4065 10.5073 27.6372 9.22459Z" fill="#161718"/>
  <path d="M62.7267 36.3467L67.1189 42.2832C67.2698 42.4865 67.5063 42.6096 67.7599 42.616H67.7792C68.474 42.616 68.2346 42.3667 72.99 36.701C73.3978 36.2026 73.1219 35.4219 72.3425 35.36C71.1881 35.3795 69.9395 35.3138 68.7033 35.2421C67.6636 26.1341 60.1803 19.3986 51.3312 19.0308C50.8817 18.9837 50.4943 19.3636 50.4761 19.8174C50.4568 20.2712 50.8089 20.6543 51.2627 20.6725C59.1205 20.9991 65.9497 26.8909 67.0334 35.1514C65.8025 35.0806 64.5621 35.0185 63.3764 35.0357C62.7076 35.045 62.3283 35.8093 62.7267 36.3467Z" fill="#161718"/>
  <path d="M18.6496 50.0369L15.0741 43.7408C14.8064 43.2672 14.1655 43.1889 13.7888 43.5546L8.46876 48.6766C7.98779 49.1413 8.23493 49.9586 8.89149 50.0765C10.0937 50.2973 11.3772 50.4467 12.647 50.5868C13.3044 60.2333 20.9634 67.0277 29.6578 67.508C30.0847 67.5385 30.4971 67.2023 30.5236 66.7321C30.5482 66.2794 30.2014 65.892 29.7477 65.8663C22.2489 65.4529 15.0744 59.6795 14.3128 50.777C15.4984 50.9091 16.6894 51.0506 17.787 51.2505C18.4558 51.3813 18.9986 50.6518 18.6496 50.0369Z" fill="#161718"/>
  <path d="M7.15566 12.6546C6.94376 13.056 7.09679 13.5536 7.49812 13.7655L10.3192 15.2595C10.4423 15.3237 10.5739 15.3548 10.7034 15.3548C10.9988 15.3548 11.2834 15.1964 11.4311 14.9181C11.643 14.5168 11.49 14.0191 11.0897 13.8062L8.26653 12.3122C7.8652 12.1013 7.36863 12.2533 7.15566 12.6546Z" fill="#161718"/>
  <path d="M10.9384 7.75213C10.6281 7.42037 10.109 7.40431 9.77728 7.71467C9.44551 8.02503 9.42946 8.54515 9.73982 8.87585L12.5577 11.881C12.7193 12.0544 12.9376 12.141 13.157 12.141C13.3582 12.141 13.5605 12.0672 13.7188 11.9184C14.0506 11.6081 14.0667 11.088 13.7563 10.7573L10.9384 7.75213Z" fill="#161718"/>
  <path d="M17.2898 9.51147C17.3369 9.51147 17.3861 9.50719 17.4343 9.49863C17.8806 9.41943 18.1791 8.99349 18.0999 8.54615L17.5359 5.35265C17.4567 4.90638 17.0222 4.60993 16.5835 4.68698C16.1361 4.76618 15.8386 5.19212 15.9178 5.63947L16.4818 8.83296C16.5524 9.23108 16.8992 9.51147 17.2898 9.51147Z" fill="#161718"/>
</svg>
  `,
    blockersIcon4: `
  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
  <path d="M15.7917 35.9599C15.8063 36.0719 15.8063 36.0719 15.8229 36.125C15.8103 36.1404 15.7992 36.2297 15.7771 36.2682C15.7675 36.2701 15.7594 36.2833 15.7519 36.3324C15.7439 36.385 15.7331 36.3988 15.7219 36.4044C15.6848 36.4023 15.6538 36.5377 15.6203 36.594C15.5965 36.5961 15.5728 36.6113 15.5488 36.6029C15.4923 36.5893 15.4386 36.7153 15.3834 36.7018C15.3458 36.7025 15.3077 36.7228 15.2703 36.7305C15.2482 36.7377 15.2317 36.8127 15.2093 36.8029C15.1891 36.798 15.1778 36.8097 15.1615 36.8401C15.1309 36.8188 15.1019 36.8876 15.0727 36.9265C14.9883 36.9485 14.9885 36.9417 14.9024 36.9941C14.4387 37.0417 13.9442 37.0561 13.4735 37.0593C13.2112 37.0657 12.9368 37.1517 12.6677 37.0293C12.2677 36.9386 11.8493 36.886 11.4475 36.8498C11.4219 36.8879 11.4024 36.802 11.3831 36.7701C11.3623 36.7629 11.3415 36.7641 11.3208 36.7418C11.2333 36.7319 11.1528 36.6946 11.0837 36.6249C11.0458 36.5911 11.0048 36.645 10.9685 36.6597C10.9607 36.6641 10.9528 36.6609 10.9472 36.6149C10.9363 36.5569 10.9136 36.5589 10.8752 36.5479C10.7515 36.6095 10.6864 36.2898 10.776 36.2308C10.7578 36.1893 10.777 36.1252 10.7781 36.0762C10.761 36.0273 10.7477 35.9877 10.7627 35.9561C10.9149 35.6975 11.0947 35.4729 11.2965 35.2564C11.4432 35.1205 11.7192 35.1269 11.8775 35.0858C12.2938 34.9692 12.7487 35.0193 13.1434 34.8969C13.7031 34.8476 14.3011 34.5919 14.8562 34.8023C15.4235 34.7818 15.7327 35.4761 15.7917 35.9599ZM39.1303 8.91766C39.2051 9.32502 39.1611 9.79638 39.2144 10.2245C39.1882 10.3633 39.1919 10.5212 39.2888 10.6375C39.3011 10.6599 39.2746 10.6858 39.3016 10.7089C39.3538 10.7393 39.3975 10.7655 39.3931 10.7967C39.4323 10.8098 39.4239 10.8237 39.425 10.8373C39.4152 10.8577 39.4901 10.8749 39.4975 10.8948C39.5298 10.9693 39.5082 11.0351 39.5885 11.0921C39.6143 11.1135 39.6331 11.1354 39.625 11.157C39.5874 11.2633 39.8231 11.2652 39.8235 11.3201C39.8834 11.3593 40.0493 11.3906 40.1027 11.4151C40.5965 11.3546 41.4379 11.1293 41.4256 10.505C41.6359 9.98406 41.3803 9.4191 41.3311 8.89334C41.2091 8.52486 41.2586 8.09318 41.1421 7.70214C41.1295 7.67398 41.1576 7.6455 41.1154 7.6175C41.1101 7.61398 41.1091 7.61014 41.1159 7.60678C41.1079 7.4807 41.0829 7.2703 40.9717 7.15574C40.7535 6.96438 40.5298 6.79654 40.272 6.6535C40.2418 6.64406 40.2011 6.6519 40.1519 6.66806C40.1029 6.66646 40.0389 6.64902 39.9973 6.66614C39.94 6.58102 39.6203 6.64246 39.6802 6.75942C39.6687 6.79542 39.6706 6.81958 39.6131 6.82726C39.5672 6.83254 39.564 6.8399 39.5683 6.84726C39.6567 6.93414 39.5722 6.97542 39.5319 7.04854C39.4763 7.11238 39.5039 7.21094 39.4338 7.24966C39.3661 7.26486 39.3643 7.28118 39.3784 7.29798C39.3754 7.46118 39.3282 7.64598 39.3133 7.81542C39.3091 8.18966 39.104 8.54022 39.1303 8.91766ZM18.3234 15.5684C18.3373 15.6119 18.3648 15.6082 18.3333 15.6631C18.309 15.7026 18.3138 15.7106 18.3232 15.7129C18.3632 15.7261 18.4349 15.7159 18.445 15.7679C18.4597 15.9025 18.5498 15.9905 18.6115 16.0932C18.5642 16.2399 18.6203 16.1596 18.6645 16.2519C19.1495 16.6565 19.4752 17.2079 19.9477 17.6173C20.1979 17.7201 20.3535 17.9409 20.5819 18.0917C20.984 18.3076 21.2696 18.7183 21.7026 18.8399C21.7621 18.822 21.8168 18.8092 21.8415 18.8357C21.8784 18.8154 21.8858 18.8324 21.8991 18.8418C21.9107 18.8642 21.9755 18.8202 21.9978 18.8293C22.0352 18.8503 22.0808 18.8613 22.1139 18.8877C22.1531 18.9375 22.2799 18.8785 22.3199 18.9292C22.3352 18.9529 22.3655 18.9578 22.3874 18.9733C22.4477 18.9505 22.5687 18.8738 22.5957 18.8993C22.609 18.9028 22.6269 18.8999 22.6674 18.865C22.705 18.8325 22.7205 18.8282 22.7299 18.8335C22.772 18.8207 22.8365 18.7565 22.8605 18.7556C22.9384 18.5677 23.1434 18.3157 23.1477 18.0813C23.1925 17.7569 23.2191 17.3954 22.9781 17.1445C22.5575 16.5735 21.9128 16.2649 21.3237 15.8997C20.8698 15.6991 20.4851 15.2908 20.0141 15.1012C19.8087 14.9156 19.4787 14.8034 19.1752 14.8975C18.9682 14.9583 18.7346 14.925 18.5536 15.0583C18.5538 15.1327 18.4493 15.1797 18.4291 15.2445C18.2992 15.2311 18.1719 15.5348 18.3234 15.5684ZM57.3599 18.1687C57.3671 18.2305 57.4709 18.3879 57.4863 18.4373C57.8963 18.757 58.6608 19.1586 59.1029 18.6916C59.6426 18.4492 59.8829 17.8476 60.2423 17.4185C60.4338 17.054 60.7895 16.7689 61.0002 16.3932C61.0829 16.2521 61.2813 16.0633 61.2888 15.8636C61.2778 15.5679 61.2455 15.2834 61.1699 14.993C61.1554 14.9641 61.121 14.9418 61.0739 14.9189C61.0405 14.8831 61.0082 14.8247 60.9661 14.8082C60.9909 14.701 60.7125 14.5255 60.672 14.6538C60.6363 14.6735 60.6218 14.6913 60.5738 14.6572C60.5373 14.6287 60.5295 14.6319 60.5271 14.6404C60.5242 14.7677 60.4347 14.7389 60.3506 14.7652C60.2635 14.7735 60.2109 14.8666 60.1307 14.8463C60.0715 14.8098 60.0581 14.8209 60.0554 14.8434C59.9303 14.9641 59.7597 15.0681 59.6221 15.1845C59.3397 15.4615 58.9309 15.5801 58.6679 15.8804C58.4098 16.245 58.0349 16.5567 57.7493 16.918C57.6272 17.0036 57.5122 17.122 57.4928 17.2796C57.4851 17.3049 57.4463 17.3058 57.4483 17.342C57.4551 17.3901 57.4834 17.4591 57.4467 17.4657C57.4613 17.4941 57.453 17.5189 57.4394 17.5255C57.4183 17.5327 57.4567 17.6005 57.4477 17.6197C57.4157 17.6973 57.3501 17.7319 57.3643 17.8317C57.3666 17.866 57.3634 17.8957 57.3416 17.9061C57.2355 17.9562 57.3995 18.1265 57.3599 18.1687ZM27.8495 43.9289C27.9626 46.5565 30.9167 48.4652 33.3471 47.4493C33.785 50.3506 37.8699 51.4362 39.6282 49.0769C41.5618 52.2991 46.7467 51.5223 47.5933 47.8445C50.6903 48.7274 53.7667 45.5316 52.7587 42.4738C55.8784 41.7426 56.9877 37.4129 54.5429 35.3167C57.0239 33.1111 55.7861 28.8085 52.5154 28.2583C53.6624 25.1482 50.1919 21.8813 47.1712 23.3069C46.6442 20.0506 41.6738 19.2746 40.6037 22.4364C40.6794 22.3631 40.7498 22.2137 40.8378 22.1785C40.8685 22.3066 40.7722 22.4805 40.9495 22.2903C40.8583 22.4794 40.733 22.6973 40.733 22.9105C41.3357 22.289 41.9296 21.5066 42.8515 21.3844C43.4727 21.4261 44.1973 21.3701 44.7303 21.7793C46.1074 22.8468 45.5619 23.6684 45.8493 24.9626C46.7947 26.2431 47.7143 23.6956 49.9461 25.0653C51.0503 25.7809 51.2674 27.4641 50.3672 28.4253C49.8043 29.1041 50.4309 30.2095 51.3119 30.0613C52.8421 29.7317 54.3275 31.3021 53.8525 32.8077C53.6157 34.11 52.3275 33.9877 51.7989 34.8852C51.5607 35.4399 51.8171 36.0828 52.3717 36.321C53.5055 36.6874 54.1583 38.0421 53.6562 39.1402C53.2936 40.0239 52.2842 40.5721 51.3475 40.3877C50.297 40.1498 49.4803 41.5141 50.2157 42.3265C50.5491 42.722 50.7434 43.2242 50.7451 43.7458C50.7351 44.8426 49.7778 45.7793 48.6757 45.7527C47.7735 45.8652 47.2835 44.8953 46.4133 44.9788C44.7416 45.2429 45.9447 47.1869 44.9623 48.081C44.0464 49.2903 41.9959 48.9745 41.4368 47.577C41.437 45.1364 41.4235 42.2801 41.4264 39.8649C41.992 39.8905 42.5351 40.0817 43.0991 40.0898C43.4007 39.9978 43.7173 40.1089 44.0295 40.0285C44.489 39.9825 45.0643 40.1335 45.3927 39.7997C45.6311 40.4946 46.1471 41.2373 46.9912 41.1228C47.1608 41.0871 47.3328 41.1589 47.4589 41.0135C47.4328 40.9348 47.5399 40.8767 47.5443 40.8053C47.6779 40.8063 47.6917 40.6018 47.6699 40.5114C47.6392 40.4548 47.5275 40.4629 47.5739 40.3685C47.6376 40.2639 47.4651 40.35 47.4608 40.265C47.4623 40.2076 47.4367 40.1826 47.4291 40.1393C47.4173 40.0514 47.3235 39.9889 47.3528 39.9079C47.3963 39.853 47.3882 39.8393 47.3659 39.8335C47.2675 39.6975 47.2235 39.5076 47.1896 39.3378C47.1071 39.025 47.2499 38.7257 47.3909 38.4564C47.4479 38.3428 47.4327 38.1866 47.5272 38.1069C47.7239 37.8716 47.9464 37.6401 48.2517 37.5449C48.3847 37.5337 48.5242 37.5124 48.6307 37.4157C48.6546 37.4033 48.6784 37.43 48.7019 37.4042C48.7339 37.3546 48.7659 37.3109 48.7981 37.3193C48.8159 37.282 48.8299 37.2921 48.8445 37.2925C48.8752 37.2985 48.9016 37.2082 48.9469 37.2285C49.0256 37.2132 49.0776 37.2484 49.1573 37.193C49.2213 37.1503 49.2592 37.2012 49.3207 37.2025C49.3754 37.1641 49.4679 37.0553 49.508 37.0778C49.5231 37.0789 49.5408 37.0727 49.5739 37.0301C49.6197 36.9647 49.6218 37.0063 49.6579 36.9781C49.7026 36.9173 49.7253 36.9121 49.7567 36.8921C49.9376 36.3332 49.8424 36.0605 49.4491 35.6244C48.932 35.1257 48.0675 35.2585 47.4275 35.406C46.3575 35.7393 45.5495 36.7781 45.3184 37.8413C44.5146 37.5954 43.6469 37.7921 42.8551 37.9394C42.3791 37.9943 41.8442 38.0073 41.4055 38.1151C41.3696 35.4401 41.1301 32.7812 41.1039 30.1044C41.0183 27.674 41.0171 25.2569 40.5298 22.8759C39.5501 25.3697 39.6845 28.1375 39.3795 30.7834C38.8106 30.7569 38.2608 30.6261 37.7021 30.5429C37.264 30.5874 36.837 30.5791 36.3899 30.6117C36.0762 30.6525 35.7392 30.5434 35.4559 30.7049C35.4287 30.7173 35.3973 30.6905 35.3696 30.7177C35.3184 30.8063 35.2829 30.793 35.2429 30.8365C35.0045 30.1417 34.4885 29.3989 33.6445 29.5135C33.4749 29.5492 33.3029 29.4773 33.1768 29.6228C33.2031 29.7015 33.0959 29.7596 33.0914 29.8309C32.9578 29.83 32.944 30.0345 32.9658 30.1249C32.9965 30.1815 33.1082 30.1733 33.0618 30.2677C32.9981 30.3724 33.1706 30.2863 33.1751 30.3713C33.1735 30.4287 33.1992 30.4537 33.2067 30.497C33.2186 30.5849 33.3125 30.6474 33.2831 30.7284C33.2395 30.7833 33.2477 30.797 33.2699 30.8028C33.3683 30.9388 33.4123 31.1287 33.4463 31.2985C33.5288 31.6113 33.3859 31.9106 33.245 32.1799C33.188 32.2935 33.2032 32.4497 33.1087 32.5293C32.912 32.7649 32.6895 32.9962 32.3842 33.0914C32.2511 33.1026 32.1117 33.1239 32.005 33.2205C31.9811 33.233 31.9573 33.2063 31.9338 33.2321C31.9018 33.2817 31.8698 33.3253 31.8376 33.317C31.8199 33.3543 31.8058 33.3442 31.7912 33.3439C31.7605 33.3378 31.7341 33.4282 31.6888 33.4079C31.6101 33.4233 31.5581 33.3881 31.4786 33.4434C31.4146 33.4861 31.3767 33.4353 31.3152 33.434C31.2605 33.4724 31.168 33.581 31.1279 33.5585C31.113 33.5573 31.0951 33.5636 31.0621 33.6061C31.0163 33.6716 31.0143 33.63 30.9781 33.6581C30.9335 33.7189 30.9107 33.7244 30.8794 33.7442C30.6984 34.3031 30.7936 34.5757 31.1869 35.0119C31.704 35.5106 32.5685 35.3778 33.2085 35.2303C34.2786 34.8972 35.0866 33.8581 35.3176 32.7949C36.1215 33.0409 36.9891 32.8442 37.781 32.6969C38.2875 32.6453 38.8291 32.6154 39.3023 32.5122C39.2005 35.7879 39.2128 39.0914 39.1511 42.3705C39.1456 43.545 39.1234 45.6253 39.1231 46.7775C39.1431 47.1601 39.0555 48.0217 39.2639 48.3705C39.0259 48.6305 38.7379 48.9652 38.3725 49.0026C38.2167 48.9761 38.0783 49.1114 37.929 49.1442C37.0043 49.4852 35.9106 48.9455 35.3619 48.1871C35.2847 48.042 35.153 47.9045 35.1363 47.7385C35.1427 47.4743 34.9704 47.2445 34.9781 46.9786C34.9311 46.502 35.1719 45.9943 34.8239 45.5741C34.4362 45.058 33.713 45.1055 33.2826 45.5402C31.2405 46.9601 28.6535 44.3418 30.2287 42.3623C30.9807 41.6908 30.3765 40.3413 29.3595 40.5007C28.1199 40.7385 26.8591 39.7637 26.8528 38.4911C26.8173 37.5722 27.4138 36.7156 28.2675 36.3898C29.4343 35.7833 28.9613 34.3317 27.8187 34.0341C26.6048 33.3658 26.5031 31.4961 27.5823 30.6513C28.2933 29.8429 29.3627 30.461 30.1656 29.9753C30.6661 29.6026 30.7701 28.8949 30.3976 28.3943C29.1207 27.0609 30.2467 24.6716 32.0952 24.8417C32.9355 24.7868 33.472 25.6548 34.2946 25.5359C34.9296 25.4145 35.276 24.7385 35.0647 24.1401C34.7234 22.305 36.7026 20.8009 38.3863 21.6217C38.7269 21.7914 39.1051 21.8311 39.372 22.1581C39.4935 22.334 39.6979 22.3418 39.7891 22.5343C39.8875 22.6823 40.0171 22.7255 40.1147 22.9111C40.252 21.8351 39.8903 21.194 39.012 20.5605C36.9283 19.0457 33.7378 20.2693 33.1104 22.7729C30.0224 21.7333 26.7447 24.918 27.6763 28.0388C24.5455 28.8628 23.5451 33.1895 25.9275 35.3442C23.5928 37.5452 24.8587 41.846 28.0098 42.4338C27.864 42.9185 27.8069 43.4279 27.8495 43.9289ZM62.2042 34.8556C62.3965 39.9842 60.8466 45.257 57.5189 49.2045C54.7179 52.5812 51.2167 55.3311 48.6733 58.9193C48.8096 59.0905 48.8749 59.322 48.8634 59.5519C48.8664 59.8604 48.8752 62.0925 48.8767 62.3317C48.9018 63.286 48.9581 64.2423 48.9463 65.1975C48.8615 67.0962 47.0317 68.4908 45.1855 68.3217C45.9645 70.0097 45.713 72.206 43.9314 73.1247C43.0736 73.5991 42.057 73.3919 41.1311 73.5381C40.0133 73.5418 38.8858 73.6769 37.7634 73.6813C35.1767 73.5322 34.024 70.5834 35.0667 68.4276C32.1491 68.2668 31.2583 65.7972 31.8005 63.2439C32.0507 62.1572 32.1271 60.9988 32.5314 59.9623C32.588 59.9068 32.664 59.9132 32.7021 59.8023C32.7832 59.7468 32.8114 59.7453 32.8426 59.6316C33.3082 61.3074 33.4 63.0765 33.5831 64.8041C33.5816 65.5396 34.2824 66.1029 34.9858 66.1377C38.4765 66.0914 42.0143 66.0687 45.5075 66.0948C46.9533 66.133 46.7642 64.7972 46.7498 63.7665C46.7597 62.8565 46.8211 61.4324 46.8351 60.5249C42.2149 60.4033 37.5507 60.3581 32.9882 59.777C33.0711 59.7189 33.2373 59.7349 33.3453 59.7105C33.3117 59.6988 33.1845 59.6893 33.2557 59.6492C33.2557 59.6327 33.2557 59.6162 33.2555 59.5991C33.1738 59.5588 33.1023 59.5777 33.0197 59.5492C32.9823 59.5221 33.0181 59.5183 33.0395 59.5122C35.6003 59.0986 38.2495 58.7455 40.8586 58.7373C43.2752 58.6956 45.8152 58.4746 48.2355 58.6079C52.9546 50.769 59.9386 47.3993 60.3832 36.8945C60.8893 24.5957 50.2162 14.5905 37.9527 16.1892C26.7091 17.486 18.749 28.6546 20.9019 39.7093C21.816 45.1314 25.0613 48.8535 28.5515 52.8413C30.2805 54.9034 32.1299 56.901 32.7595 59.5841C29.1498 54.7733 23.9435 51.2949 20.8717 46.0465C16.3867 38.0121 17.9442 27.3301 24.3288 20.7538C29.396 15.1978 37.4503 12.7853 44.7791 14.2599C54.4127 16.1231 61.8799 25.0863 62.2042 34.8556ZM44.1291 68.3573C41.6935 68.4329 38.9581 68.4485 36.5264 68.4266C36.6375 68.8503 36.6106 69.3935 36.816 69.8442C36.84 70.4265 37.0642 71.0985 37.656 71.3242C38.008 71.47 38.4338 71.3508 38.8239 71.3802C39.6519 71.406 40.4861 71.3597 41.3136 71.342C42.4055 71.4029 43.6381 71.7391 43.8797 70.2821C43.8775 70.1188 43.9059 69.9052 43.8967 69.7445C43.8563 69.6607 43.9387 69.5961 43.9763 69.5213C43.9967 69.1311 44.0731 68.7434 44.1291 68.3573ZM48.4632 58.5009C48.417 58.5287 48.3727 58.5831 48.3287 58.6447C48.3643 58.661 48.3989 58.6796 48.432 58.7004C48.4615 58.6367 48.4544 58.57 48.4632 58.5009ZM48.5679 58.6234C48.5339 58.6578 48.5058 58.6925 48.4779 58.7309C48.4858 58.7365 48.4935 58.7423 48.5011 58.7481C48.5232 58.7065 48.5448 58.665 48.5679 58.6234ZM23.2757 53.6511C23.2682 53.5884 23.165 53.4325 23.1495 53.3825C22.7394 53.0628 21.9749 52.6612 21.5328 53.1282C20.9931 53.3705 20.7528 53.9722 20.3935 54.4013C20.2021 54.7658 19.8463 55.0509 19.6355 55.4266C19.5528 55.5676 19.3544 55.7565 19.3469 55.9562C19.3579 56.2519 19.3903 56.5364 19.4658 56.8268C19.4802 56.8557 19.5147 56.878 19.5616 56.9009C19.5951 56.9367 19.6274 56.9951 19.6695 57.0116C19.6447 57.1188 19.9231 57.2945 19.9635 57.166C19.9992 57.1463 20.0138 57.1285 20.0618 57.1626C20.0983 57.1911 20.1061 57.1879 20.1085 57.1793C20.1114 57.0519 20.2008 57.0807 20.285 57.0545C20.3722 57.0461 20.4247 56.953 20.5048 56.9732C20.564 57.0097 20.5775 56.9988 20.5802 56.9762C20.7053 56.8554 20.8759 56.7516 21.0135 56.6351C21.2959 56.3581 21.7047 56.2396 21.9677 55.9393C22.2258 55.5746 22.6007 55.2629 22.8863 54.9017C23.0083 54.8161 23.1234 54.6977 23.1427 54.5401C23.1506 54.5148 23.1893 54.5138 23.1872 54.4777C23.1805 54.4295 23.1522 54.3605 23.1888 54.354C23.1744 54.3255 23.1826 54.3007 23.1962 54.2941C23.2173 54.2869 23.1789 54.2191 23.1879 54.1999C23.2199 54.1223 23.2855 54.0877 23.2712 53.9879C23.269 53.9537 23.2722 53.9239 23.2939 53.9135C23.4 53.8634 23.236 53.6933 23.2757 53.6511ZM70.265 35.4889C70.2461 35.4122 70.209 35.2087 70.1053 35.2722C70.0866 35.2772 70.0655 35.2541 70.0463 35.2485C70.0317 35.258 70.0234 35.1349 70.0055 35.1604C69.9682 35.1754 69.9211 35.229 69.8823 35.1954C69.8082 35.125 69.7208 35.0882 69.6287 35.0785C69.6064 35.0562 69.5842 35.0573 69.5621 35.0501C69.5331 35.0175 69.5279 34.9325 69.493 34.9705C69.1075 34.9301 68.696 34.9045 68.3139 34.8109C68.0915 34.7793 67.8791 34.69 67.6517 34.7226C67.5459 34.7453 67.4303 34.7823 67.3261 34.7612C66.8218 34.7644 66.2954 34.7786 65.7976 34.8261C65.7157 34.8756 65.6952 34.8737 65.6155 34.8938C65.5826 34.9457 65.5499 34.99 65.5155 34.9853C65.5005 35.0245 65.4848 35.0162 65.4693 35.0172C65.4474 35.0073 65.4258 35.0823 65.404 35.0897C65.3637 35.0973 65.3234 35.1177 65.2829 35.1183C65.2239 35.1049 65.1663 35.2308 65.1059 35.2172C65.0803 35.2087 65.0549 35.2241 65.0295 35.2261C64.9995 35.282 64.9555 35.4183 64.9208 35.4157C64.9088 35.4213 64.8975 35.4351 64.8888 35.4877C64.8808 35.5367 64.872 35.55 64.8618 35.5519C64.8387 35.5893 64.8296 35.6789 64.8127 35.6951C64.8784 36.2349 65.1874 37.0476 65.8472 37.018C66.4429 37.2284 67.0792 36.9727 67.6794 36.9234C68.1336 36.7901 68.6691 36.8602 69.1298 36.7076C69.3955 36.7213 69.7098 36.5927 69.872 36.3317C69.9882 36.1532 70.1811 36.0289 70.2328 35.8125C70.1877 35.7549 70.2359 35.6524 70.2115 35.5895C70.2371 35.5465 70.2515 35.5586 70.265 35.4889ZM61.3322 56.726C61.3152 56.6876 61.2991 56.6716 61.3375 56.6266C61.3693 56.593 61.3667 56.5847 61.3584 56.5813C61.3245 56.5636 61.2543 56.5626 61.257 56.5127C61.2743 56.3866 61.2103 56.2897 61.1755 56.1845C61.1824 56.1421 61.2464 56.0853 61.1954 56.0831C61.1659 56.0778 61.1733 56.0469 61.1624 56.0284C60.7997 55.5793 60.6227 55.0196 60.2735 54.5689C60.0631 54.438 59.9683 54.21 59.788 54.0354C59.4687 53.7994 59.3144 53.3666 58.9522 53.2119C58.9312 53.1405 58.7933 53.217 58.7855 53.1618C58.7549 53.1725 58.7317 53.1626 58.7259 53.1477C58.7203 53.1253 58.6491 53.157 58.6306 53.1457C58.6002 53.1209 58.5602 53.1041 58.5352 53.0746C58.5099 53.0226 58.3778 53.0601 58.3517 53.0069C58.3427 52.9826 58.3155 52.9737 58.2986 52.9562C58.2373 52.9693 58.1053 53.0237 58.0863 52.9964C58.0747 52.9911 58.0571 52.9914 58.0112 53.0185C57.9685 53.0436 57.953 53.0455 57.9453 53.0393C57.9016 53.0461 57.8279 53.0962 57.805 53.094C57.4408 53.4769 56.98 54.2069 57.408 54.6957C57.605 55.2673 58.1887 55.5754 58.5891 55.9858C58.9399 56.2201 59.1946 56.6095 59.5543 56.8637C59.6951 56.9666 59.8519 57.178 60.0618 57.2135C60.3594 57.2353 60.6487 57.2343 60.9479 57.1903C60.9784 57.1789 61.0035 57.1466 61.0307 57.1018C61.0698 57.0721 61.1312 57.046 61.1515 57.0053C61.2562 57.0402 61.4586 56.7812 61.3322 56.726Z" fill="#161718"/>
</svg>
  `,
    blockersIcon5: `
  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8594 58.9833C10.6251 58.0763 9.62497 67.0412 10.0981 73.136C10.0195 73.0182 9.93153 72.6044 9.89985 72.4462C9.89409 72.5627 9.86961 72.6459 9.82049 72.5096C9.78881 72.4857 9.76497 72.462 9.73329 72.4382C6.30113 63.8795 12.209 53.4416 23.4579 58.0318C21.1272 48.3073 28.1411 40.2161 37.6741 45.9246C36.9187 40.2571 38.1894 33.8318 45.2222 34.1028C45.2302 34.087 45.2461 34.0632 45.2539 34.0473C44.3635 33.6694 43.2704 33.2356 42.5344 32.7548C42.549 32.6078 42.2902 32.7043 42.241 32.5012C42.1862 32.2753 42.188 32.3457 42.3362 32.2713C42.4792 32.0372 42.2037 32.0235 42.5978 31.9145C43.6517 31.4084 44.5784 31.7964 45.6662 32.0177C46.5698 32.3779 48.5224 32.3155 48.1479 33.754C47.2478 35.1142 46.1467 38.1748 43.9378 37.4568L43.8664 37.2902C43.9034 37.2532 43.7901 37.1857 43.8189 37.1236C43.8898 36.9707 43.6752 36.8913 43.8586 36.7272C43.9232 36.6692 43.8837 36.5171 43.9696 36.402C44.129 36.1884 44.0544 36.1027 44.0885 36.0611C44.1526 35.9828 44.0877 35.9644 44.1123 35.958C44.2046 35.5547 44.408 35.1929 44.6277 34.9353C34.7142 37.6718 43.8304 51.7544 38.5542 49.4846C35.0853 46.3148 28.8194 44.5513 26.2805 49.6828C24.8163 52.8011 25.1541 56.0904 25.9395 59.3476C26.1691 60.2755 25.2165 61.0712 24.3379 60.6718C22.5758 59.8712 20.8526 59.1564 18.8594 58.9833ZM74.3998 9.23068C75.0347 8.07484 73.2895 8.07276 72.6397 8.5806C59.0917 21.9704 56.4334 21.8187 42.9307 8.53196C35.9018 5.95116 52.2965 21.4228 52.3744 23.2086C52.0771 29.5694 51.5763 40.1102 51.2798 46.4638C51.4398 47.9286 50.5198 49.707 51.8111 50.7769V50.7848C51.8559 50.7569 53.7171 50.8244 53.7456 50.7531C54.748 50.1907 54.8251 47.1795 55.1175 46.2177C55.6757 42.7123 57.067 37.0014 57.8131 33.4684L57.496 35.3396C57.5038 35.3 57.5118 35.2683 57.5198 35.2286L57.504 35.5696L57.607 35.1494C56.7131 39.9793 56.6149 45.983 55.5139 50.7689L59.6845 50.7451C58.5727 45.2862 58.7166 39.2107 57.8133 33.6825C58.3888 36.8169 59.3387 40.0144 59.9144 43.1177C60.3056 45.1736 60.7726 47.1662 61.0877 49.2387C61.1571 49.8164 61.3853 50.3798 61.8647 50.7451C63.1837 50.7609 64.4035 51.0636 64.4651 49.3971C63.885 40.7366 63.537 31.8846 63.1571 23.2166C64.2344 20.475 73.2216 11.8328 74.3998 9.23068ZM63.1095 72.4065C60.3127 72.3331 55.5747 72.9142 52.7704 73.0329C52.8171 72.9492 52.9615 72.9203 52.7943 72.8744L53.2699 72.7713C52.4629 72.3491 51.7773 72.6912 50.9547 72.4304L50.2173 72.4779C51.2944 66.4233 51.2919 59.3726 51.4066 53.1635C55.0093 53.1524 60.8411 53.0425 64.3859 53.0049C64.5223 58.7224 64.4982 66.6428 64.6 72.3827L63.1095 72.4065ZM48.917 72.3907L49.8605 72.4699C49.3938 67.8302 49.2917 63.3163 49.0677 58.6819C44.8226 59.2252 40.4104 59.3348 36.1043 59.3161C36.1066 63.4619 36.2086 67.9462 36.1282 72.0734C40.4202 72.2219 44.6112 72.118 48.917 72.3907ZM33.2024 72.264L33.9874 72.4305C33.935 69.8798 33.859 67.0446 33.8446 64.5017C29.5957 65.4123 24.9557 65.2036 20.6354 65.3342C20.671 67.464 20.764 69.9014 20.7781 72.0339C24.609 71.9798 29.4138 71.9153 33.2024 72.264ZM76.8896 8.41404C76.5936 5.58108 72.6946 5.2238 70.9589 6.92348C68.3277 9.33452 65.2438 12.1419 62.5702 14.543C63.5798 11.0214 60.6838 7.62732 57.6623 8.6678C57.6847 8.7158 57.8291 8.67692 57.7416 8.81852C57.7043 8.85228 57.6826 8.86012 57.7495 8.90572C57.6898 8.91772 57.5354 8.9454 57.5037 8.99292C57.76 9.36972 58.2299 9.171 58.4869 9.42892C61.4022 10.475 61.8126 15.0041 58.4629 15.9542C53.7658 17.2214 52.8099 10.4305 57.0202 9.10412C57.1888 9.05484 57.1469 8.94796 57.2738 8.9374C57.3909 8.92764 57.2373 8.9454 57.5037 8.77884C56.9138 8.38796 57.5291 8.25948 56.029 8.16828C53.3578 8.21596 51.6538 11.0692 51.9298 13.5916C51.9219 13.5916 51.9139 13.5836 51.9139 13.5758C50.0946 12.0364 47.6613 9.7982 45.8723 8.27148L44.4134 6.96316C43.0525 5.7662 40.2656 5.76268 39.2915 7.423C38.3507 9.02636 39.5499 10.8475 40.576 12.0692L50.3997 23.4865C50.5239 30.4792 48.8866 43.5835 49.8368 50.8326C48.5798 51.1179 49.147 53.4241 49.036 54.2976C49.0598 55.4673 49.0251 56.626 49.0598 57.794C45.8437 56.9779 42.1174 57.0425 38.7366 56.9537C32.0662 56.7876 33.9478 56.7136 33.8208 63.7168C29.9942 63.4564 25.9731 63.3374 22.0704 63.3046C21.1142 63.4016 18.5331 62.6811 18.5342 64.3352C18.5 65.9206 18.4182 67.32 18.447 68.9259C18.7627 70.3078 17.6538 74.5753 19.7472 74.4046C24.2621 74.3628 29.8766 74.4539 34.3203 73.9369C34.5843 74.355 37.5005 74.0833 37.9278 74.151C41.5395 73.9988 45.3048 74.166 48.8933 73.7625L50.1619 73.5881C52.5699 73.8638 55.3112 73.839 57.837 74.0004C59.8912 74.1654 63.3517 74.203 65.4487 74.2144C66.0085 74.2216 66.4555 73.7849 66.4555 73.2075C66.4799 67.4006 66.6877 59.2188 66.6776 53.4491C66.5778 52.8187 66.8979 51.2961 66.1226 50.9436C67.0567 42.6814 65.5112 32.0868 65.5597 23.5976C66.1317 22.9534 73.9815 13.7136 74.7887 12.767C75.7634 11.6264 77.0643 10.0761 76.8896 8.41404Z" fill="#161718"/>
</svg>
  `,
    blockersIcon6: `
  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9075 41.396L28.1199 39.4446C28.5391 39.2083 28.8324 39.6728 29.0425 39.9069L33.1105 44.4773C33.8862 45.6728 35.6991 45.9867 36.6873 44.811C40.3353 40.9473 43.8454 36.88 47.2924 32.8373C48.2807 31.6523 49.2852 30.5963 50.2239 29.4481C50.8561 28.4016 50.9548 28.6745 51.3545 28.4467C51.5513 28.3371 51.7983 28.4717 51.8697 28.4552C52.0006 28.4294 52.1735 28.5065 52.3335 28.6093C50.8043 26.3155 48.7569 29.464 47.4567 30.4065C43.5644 33.8646 38.7956 39.2633 35.0567 43.1421L30.4324 37.9982C29.3886 36.8389 27.6017 36.7603 26.4467 37.8185C24.7995 39.2969 22.2793 41.0822 24.2129 43.4845C26.3286 45.8369 28.515 48.3013 30.6686 50.6139C31.7831 51.5456 33.2611 54.3315 34.9873 54.1744C36.6113 54.5179 40.9135 48.4741 41.9939 47.6441C44.3863 44.9925 47.7011 41.3005 50.1169 38.6315C51.9211 36.6208 53.2227 34.9569 54.8807 32.8886C56.2638 31.1195 54.0831 29.6445 52.8009 28.8832C52.8566 28.9859 53.0081 29.0886 53.0355 29.1913C52.8553 29.1896 52.7268 29.0397 52.9036 29.2854C52.7516 29.1624 52.3441 28.8227 52.1915 28.7633C52.5462 29.6845 54.3177 30.619 54.3287 31.3907C54.3175 31.9982 53.9857 32.3013 53.4871 32.8201C52.7569 33.4961 51.7683 34.5355 51.0556 35.2765C46.3183 40.0984 40.1743 46.8361 35.4828 51.735C35.2767 51.9549 35.0487 52.2918 34.7305 51.9918C34.4215 51.6771 31.7382 48.4835 31.4979 48.2688C30.8363 47.4377 28.4955 45.008 27.8588 44.2203C27.5751 43.731 25.3211 41.9477 25.9075 41.396ZM39.4355 18.3558C39.8257 18.4585 39.8239 18.4585 40.2639 18.5013C35.5615 19.0845 30.3369 20.8089 26.783 24.1416C22.3249 28.2501 19.6771 34.2782 19.8332 40.3689C21.0195 63.7537 52.9595 67.6131 60.0132 45.4357C63.7478 32.0451 53.9121 19.471 40.2638 18.7153C40.4783 18.6597 41.3131 18.6453 41.5732 18.6555C41.539 18.647 41.5124 18.6384 41.4782 18.6299C41.1111 18.5776 41.5611 18.5726 41.6356 18.5016C41.5147 18.4371 41.0943 18.4273 41.0622 18.4075C46.9188 18.0742 53.0455 20.7705 57.0235 25.1432C68.4471 37.6595 61.5388 58.4563 44.9758 61.9201C33.655 64.6204 21.3025 57.2617 18.3414 45.9921C15.1719 35.2253 21.1999 22.6518 31.9951 19.1693C34.3833 18.4169 36.9715 17.836 39.4355 18.3558ZM70.591 42.6969C69.7473 46.7465 65.426 48.4945 65.2059 52.8221C65.7071 58.7728 60.9881 64.7669 54.7758 64.8213C50.0835 64.6413 49.0331 67.0693 45.6311 69.2979C41.4246 71.7117 36.1918 71.0569 32.6867 67.7742C30.9545 65.8896 28.4463 64.8665 25.8867 64.9757C18.2692 64.6981 14.9068 58.5104 14.8516 51.5638C14.4332 49.5352 13.0115 48.1373 11.6859 46.6513C7.36123 40.8197 9.51499 35.0136 14.1787 30.2102C16.2587 26.7925 14.6399 24.5725 16.9316 20.6925C18.794 17.5568 22.5054 15.4253 26.1537 16.1136C22.1875 16.4544 18.4969 19.3021 17.4297 23.1574C16.8902 25.2593 17.3159 26.0195 16.8836 28.1729C16.0747 32.8494 12.0175 33.9832 11.5841 38.7859C10.7716 45.5699 17.8439 46.9221 17.4295 53.8921C17.4219 58.6717 21.2931 62.6563 26.146 62.6563C29.1991 62.6563 31.7155 63.6365 33.9748 65.7974C37.0793 69.1198 42.7417 69.3649 46.082 66.2253C47.3985 64.9246 48.7987 63.8789 50.5411 63.2469C53.5718 62.1461 54.7471 63.1585 57.6843 61.9289C61.2945 60.4529 63.2521 56.7483 63.0692 52.9593C63.3076 48.4249 65.9729 47.1032 68.039 43.7075C69.886 40.1083 68.8743 35.6926 65.8801 33.0261C64.0423 31.0448 63.1339 28.3016 63.1927 25.6483C63.1268 20.7941 59.2308 16.8624 54.3438 16.8585C52.5118 16.8571 51.3276 16.5768 49.7049 15.8657C47.1724 14.756 46.9094 13.2413 44.4343 11.9201C42.4086 10.8389 40.1641 10.6093 37.9323 11.0899C33.4019 12.3208 31.7431 17.1304 26.1537 16.3278C26.6927 16.2499 27.4691 16.2158 28.0401 16.0797C27.9967 16.0797 27.6094 16.1208 27.7071 16.0712C27.8065 16.0509 27.9846 15.9813 28.0889 15.9171C27.9833 15.8989 26.7364 16.0264 27.5052 15.8744C29.7275 15.4345 31.3644 14.635 32.9443 12.9987C36.5375 8.78462 43.4614 8.37982 47.5198 12.2456C51.6134 16.6477 55.5476 13.8275 60.0259 16.7302C64.1983 19.2958 65.0487 23.1915 65.2609 27.7456C65.6719 30.3457 67.654 31.8861 69.1651 33.8905C70.9031 36.4139 71.398 39.7363 70.591 42.6969Z" fill="#161718"/>
</svg>
  `,
    arrowBtnIcon: `
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
  <path d="M20.5404 8.86092C20.9309 8.47039 20.9309 7.83723 20.5404 7.4467L14.1764 1.08274C13.7859 0.692216 13.1527 0.692216 12.7622 1.08274C12.3717 1.47327 12.3717 2.10643 12.7622 2.49695L18.419 8.15381L12.7622 13.8107C12.3717 14.2012 12.3717 14.8344 12.7622 15.2249C13.1527 15.6154 13.7859 15.6154 14.1764 15.2249L20.5404 8.86092ZM0.833252 9.15381H19.8333V7.15381H0.833252V9.15381Z" fill="white"/>
</svg> 
  `,
    statsIcon1: `
  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
  <g opacity="0.3">
    <path d="M18.9692 16.7296C18.7931 15.5334 18.1941 14.4399 17.2809 13.6475C16.3676 12.8551 15.2006 12.4163 13.9915 12.4106H12.8646C11.6555 12.4163 10.4885 12.8551 9.57523 13.6475C8.66197 14.4399 8.06298 15.5334 7.88694 16.7296L7.34681 20.5063C7.32955 20.6283 7.34095 20.7528 7.38011 20.8697C7.41926 20.9866 7.48509 21.0928 7.57239 21.1798C7.78421 21.3917 9.0837 22.4719 13.4291 22.4719C17.7745 22.4719 19.0708 21.3959 19.2858 21.1798C19.3731 21.0928 19.439 20.9866 19.4781 20.8697C19.5173 20.7528 19.5287 20.6283 19.5114 20.5063L18.9692 16.7296Z" fill="white"/>
    <path d="M8.72592 12.9933C7.70235 13.9369 7.03637 15.2052 6.84076 16.5836L6.4489 19.2948C3.30342 19.2736 2.35025 18.1298 2.19139 17.8968C2.12998 17.8122 2.08616 17.7161 2.06251 17.6142C2.03886 17.5124 2.03587 17.4068 2.05371 17.3037L2.2867 15.9905C2.4081 15.3041 2.6932 14.6572 3.11784 14.1045C3.54248 13.5518 4.09414 13.1096 4.72603 12.8155C5.35793 12.5214 6.05143 12.384 6.74773 12.4149C7.44403 12.4459 8.12261 12.6443 8.72592 12.9933Z" fill="white"/>
    <path d="M24.8004 17.3037C24.8182 17.4068 24.8152 17.5124 24.7916 17.6142C24.7679 17.7161 24.7241 17.8122 24.6627 17.8968C24.5038 18.1298 23.5507 19.2736 20.4052 19.2948L20.0133 16.5836C19.8177 15.2052 19.1517 13.9369 18.1282 12.9933C18.7315 12.6443 19.4101 12.4459 20.1064 12.4149C20.8027 12.384 21.4962 12.5214 22.1281 12.8155C22.76 13.1096 23.3116 13.5518 23.7363 14.1045C24.1609 14.6572 24.446 15.3041 24.5674 15.9905L24.8004 17.3037Z" fill="white"/>
    <path d="M8.90436 10.6632C8.63776 11.0412 8.28385 11.3494 7.87268 11.5614C7.4615 11.7735 7.00523 11.8831 6.5426 11.8811C6.08112 11.8811 5.62623 11.7714 5.21544 11.5611C4.80465 11.3509 4.44972 11.046 4.17988 10.6716C3.91004 10.2972 3.73303 9.86406 3.66344 9.40785C3.59384 8.95165 3.63365 8.48543 3.77959 8.04762C3.92552 7.60982 4.1734 7.21296 4.50281 6.88975C4.83221 6.56654 5.2337 6.32623 5.6742 6.18863C6.11469 6.05103 6.58158 6.02008 7.03639 6.09832C7.4912 6.17656 7.9209 6.36176 8.29009 6.63865C8.1839 7.05391 8.13053 7.48092 8.13123 7.90955C8.13204 8.88088 8.39946 9.83336 8.90436 10.6632Z" fill="white"/>
    <path d="M23.2227 8.96863C23.223 9.35118 23.1479 9.73003 23.0016 10.0835C22.8553 10.437 22.6408 10.7582 22.3703 11.0287C22.0998 11.2992 21.7786 11.5137 21.4251 11.66C21.0716 11.8062 20.6928 11.8814 20.3102 11.8811C19.8476 11.8831 19.3913 11.7735 18.9802 11.5614C18.569 11.3494 18.2151 11.0412 17.9485 10.6632C18.4534 9.83336 18.7208 8.88088 18.7216 7.90955C18.7223 7.48092 18.6689 7.05392 18.5628 6.63865C18.9955 6.31412 19.51 6.1165 20.0487 6.06792C20.5874 6.01935 21.129 6.12174 21.6127 6.36363C22.0965 6.60552 22.5034 6.97735 22.7877 7.43745C23.0721 7.89755 23.2227 8.42775 23.2227 8.96863Z" fill="white"/>
    <path d="M13.4279 11.8811C15.6213 11.8811 17.3994 10.103 17.3994 7.90955C17.3994 5.71612 15.6213 3.93799 13.4279 3.93799C11.2344 3.93799 9.4563 5.71612 9.4563 7.90955C9.4563 10.103 11.2344 11.8811 13.4279 11.8811Z" fill="white"/>
  </g>
</svg>
  `,
    statsIcon2: `
  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
  <g opacity="0.3" clip-path="url(#clip0_570_905)">
    <path d="M3.01843 23.7959V5.7915H0.900269V24.855C0.900269 25.1359 1.01185 25.4052 1.21047 25.6039C1.40908 25.8025 1.67846 25.9141 1.95935 25.9141H26.3182V23.7959H3.01843Z" fill="white"/>
    <path d="M10.432 15.3232C10.432 15.0424 10.3204 14.773 10.1218 14.5744C9.92319 14.3757 9.65381 14.2642 9.37292 14.2642H6.19568C5.91479 14.2642 5.64541 14.3757 5.44679 14.5744C5.24818 14.773 5.1366 15.0424 5.1366 15.3232V22.7368H10.432V15.3232Z" fill="white"/>
    <path d="M17.8458 11.0869C17.8458 10.806 17.7342 10.5366 17.5356 10.338C17.337 10.1394 17.0676 10.0278 16.7867 10.0278H13.6095C13.3286 10.0278 13.0592 10.1394 12.8606 10.338C12.662 10.5366 12.5504 10.806 12.5504 11.0869V22.7368H17.8458V11.0869Z" fill="white"/>
    <path d="M25.2599 6.85059C25.2599 6.5697 25.1483 6.30032 24.9497 6.1017C24.7511 5.90309 24.4817 5.7915 24.2008 5.7915H21.0236C20.7427 5.7915 20.4733 5.90309 20.2747 6.1017C20.0761 6.30032 19.9645 6.5697 19.9645 6.85059V22.7368H25.2599V6.85059Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_570_905">
      <rect width="25.418" height="25.418" fill="white" transform="translate(0.900024 0.496094)"/>
    </clipPath>
  </defs>
</svg>
  `,
    statsIcon3: `
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <g opacity="0.3" clip-path="url(#clip0_570_913)">
    <path d="M25.1455 7.14899C25.0121 6.036 23.9632 4.96875 22.8658 4.82577C16.1738 3.99427 9.40673 3.99427 2.71689 4.82577C1.61854 4.96844 0.56966 6.036 0.436238 7.14899C-0.0362004 11.228 -0.0362004 15.1831 0.436238 19.2612C0.56966 20.3742 1.61854 21.4425 2.71689 21.5845C9.40673 22.416 16.174 22.416 22.8658 21.5845C23.9632 21.4427 25.0121 20.3742 25.1455 19.2612C25.618 15.1835 25.618 11.228 25.1455 7.14899ZM10.6726 17.4422V8.96931L17.0272 13.2059L10.6726 17.4422Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_570_913">
      <rect width="25.418" height="25.418" fill="white" transform="translate(0.0820312 0.496094)"/>
    </clipPath>
  </defs>
</svg>
  `,
    closeIconPopup: `
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
  <path d="M17.5 1L1.50024 16.9998" stroke="#161718" stroke-width="2" stroke-linecap="round"/>
  <path d="M17.5 17L1.50025 1.00024" stroke="#161718" stroke-width="2" stroke-linecap="round"/>
</svg>
  `,
    infoBlockIcon1: `
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <g clip-path="url(#clip0_570_1064)">
    <path d="M24.008 0.0787548C19.323 -0.00524519 13.98 2.44375 10.598 6.24275C7.36601 6.30375 4.21901 7.62876 1.90201 9.94576C1.76701 10.0788 1.71901 10.2778 1.77801 10.4578C1.83801 10.6388 1.99401 10.7698 2.18201 10.7968L6.03601 11.3488L5.56001 11.8818C5.38301 12.0798 5.39201 12.3808 5.58001 12.5688L12.007 18.9958C12.104 19.0928 12.232 19.1418 12.361 19.1418C12.48 19.1418 12.599 19.0998 12.694 19.0148L13.227 18.5388L13.779 22.3928C13.806 22.5808 13.954 22.7188 14.133 22.7788C14.179 22.7938 14.227 22.8008 14.276 22.8008C14.418 22.8008 14.563 22.7388 14.663 22.6398C16.948 20.3548 18.273 17.2078 18.334 13.9758C22.137 10.5868 24.606 5.24575 24.497 0.566755C24.49 0.300755 24.275 0.0857548 24.008 0.0787548ZM19.4 8.71076C18.913 9.19776 18.273 9.44176 17.632 9.44176C16.991 9.44176 16.351 9.19776 15.864 8.71076C14.89 7.73576 14.89 6.14975 15.864 5.17475C16.839 4.19975 18.425 4.19975 19.4 5.17475C20.375 6.14975 20.375 7.73676 19.4 8.71076Z" fill="white"/>
    <path d="M3.22406 16.9805C2.15406 18.0505 0.685057 22.8845 0.521057 23.4315C0.468057 23.6075 0.517057 23.7985 0.646057 23.9285C0.742057 24.0245 0.869057 24.0755 1.00006 24.0755C1.04806 24.0755 1.09606 24.0685 1.14406 24.0545C1.69106 23.8905 6.52506 22.4215 7.59506 21.3515C8.80006 20.1465 8.80006 18.1855 7.59506 16.9805C6.38906 15.7755 4.42906 15.7765 3.22406 16.9805Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_570_1064">
      <rect width="24" height="24" fill="white" transform="translate(0.5 0.0756836)"/>
    </clipPath>
  </defs>
</svg>
  `,
    infoBlockIcon2: `
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.25 3.07568C21.25 2.10968 20.467 1.32568 19.5 1.32568H5.5C4.533 1.32568 3.75 2.10968 3.75 3.07568V21.0757C3.75 22.0417 4.533 22.8257 5.5 22.8257H19.5C20.467 22.8257 21.25 22.0417 21.25 21.0757V3.07568ZM6.953 18.1387L8.078 19.3387C8.229 19.5007 8.445 19.5867 8.666 19.5747C8.887 19.5627 9.092 19.4527 9.225 19.2757L11.1 16.7757C11.348 16.4447 11.281 15.9737 10.95 15.7257C10.619 15.4777 10.148 15.5447 9.9 15.8757L8.561 17.6607L8.047 17.1127C7.764 16.8107 7.289 16.7957 6.987 17.0787C6.685 17.3617 6.67 17.8367 6.953 18.1387ZM13.5 18.3257H17.5C17.914 18.3257 18.25 17.9897 18.25 17.5757C18.25 17.1617 17.914 16.8257 17.5 16.8257H13.5C13.086 16.8257 12.75 17.1617 12.75 17.5757C12.75 17.9897 13.086 18.3257 13.5 18.3257ZM6.953 12.6387L8.078 13.8387C8.229 14.0007 8.445 14.0867 8.666 14.0747C8.887 14.0627 9.092 13.9527 9.225 13.7757L11.1 11.2757C11.348 10.9447 11.281 10.4737 10.95 10.2257C10.619 9.97768 10.148 10.0447 9.9 10.3757L8.561 12.1607L8.047 11.6127C7.764 11.3107 7.289 11.2957 6.987 11.5787C6.685 11.8617 6.67 12.3367 6.953 12.6387ZM13.5 12.8257H17.5C17.914 12.8257 18.25 12.4897 18.25 12.0757C18.25 11.6617 17.914 11.3257 17.5 11.3257H13.5C13.086 11.3257 12.75 11.6617 12.75 12.0757C12.75 12.4897 13.086 12.8257 13.5 12.8257ZM6.953 7.13868L8.078 8.33868C8.229 8.50068 8.445 8.58668 8.666 8.57468C8.887 8.56268 9.092 8.45268 9.225 8.27568L11.1 5.77568C11.348 5.44468 11.281 4.97368 10.95 4.72568C10.619 4.47768 10.148 4.54468 9.9 4.87568L8.561 6.66068L8.047 6.11268C7.764 5.81068 7.289 5.79568 6.987 6.07868C6.685 6.36168 6.67 6.83668 6.953 7.13868ZM13.5 7.32568H17.5C17.914 7.32568 18.25 6.98968 18.25 6.57568C18.25 6.16168 17.914 5.82568 17.5 5.82568H13.5C13.086 5.82568 12.75 6.16168 12.75 6.57568C12.75 6.98968 13.086 7.32568 13.5 7.32568Z" fill="white"/>
</svg>
  `,
    safeAndSecureIcon: `
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  <g clip-path="url(#clip0_533_4126)">
    <path d="M13.3346 2.51071C13.3346 2.32813 13.2209 2.16363 13.0488 2.10063L7.65297 0.103297C7.55497 0.0671302 7.44705 0.0671302 7.34905 0.103297L1.9538 2.10063C1.78172 2.16363 1.66797 2.32755 1.66797 2.51071V7.17796C1.66797 12.488 7.33214 14.0461 7.3893 14.0613C7.42605 14.0706 7.46397 14.0759 7.5013 14.0759C7.53864 14.0759 7.57655 14.0706 7.6133 14.0613C7.67047 14.0461 13.3346 12.4875 13.3346 7.17796V2.51071ZM10.4308 7.38446L7.81922 10.1471C7.73639 10.2346 7.62147 10.2842 7.5013 10.2842C7.38114 10.2842 7.26622 10.2346 7.18339 10.1477L4.5718 7.38505C3.81464 6.58471 3.81464 5.28213 4.5718 4.48121C5.31905 3.6908 6.63564 3.69021 7.38405 4.48121L7.5013 4.60546L7.61855 4.48121C8.36639 3.69021 9.68297 3.6908 10.4308 4.48121C11.188 5.28155 11.188 6.58413 10.4308 7.38446Z" fill="#4A567A"/>
  </g>
  <defs>
    <clipPath id="clip0_533_4126">
      <rect width="14" height="14" fill="white" transform="translate(0.5 0.0756836)"/>
    </clipPath>
  </defs>
</svg>
  `,
    checkSvgExitPopup: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15 8L9 15L5 11" stroke="#2F2F2F" stroke-width="2"/>
</svg>
`,
    closeSvgExitPopup: `
<svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
  <g filter="url(#filter0_d_533_8340)">
    <circle cx="19.5" cy="15" r="15" fill="#222222"/>
    <circle cx="19.5" cy="15" r="13.8" stroke="white" stroke-width="2.4"/>
  </g>
  <path d="M15.5002 19L23.5 11M23.4998 19L15.5 11" stroke="white" stroke-width="2.4" stroke-linecap="round"/>
  <defs>
    <filter id="filter0_d_533_8340" x="0.5" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_533_8340"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_533_8340" result="shape"/>
    </filter>
  </defs>
</svg>
`,
    showMoreIcon: `
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5714 2.52547L8.2074 8.88943C7.81688 9.27995 7.18371 9.27995 6.79319 8.88943L0.429229 2.52546C0.0387039 2.13494 0.0387039 1.50178 0.429229 1.11125C0.819754 0.720728 1.45292 0.720728 1.84344 1.11125L7.5003 6.76811L13.1572 1.11125C13.5477 0.720728 14.1808 0.720728 14.5714 1.11125C14.9619 1.50178 14.9619 2.13494 14.5714 2.52547Z" fill="white"/>
</svg>
`,
    membersIcon: `
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="46" viewBox="0 0 45 46" fill="none">
  <path d="M32.3118 29.3836C32.0001 27.2658 30.9397 25.3298 29.3228 23.927C27.706 22.5241 25.6399 21.7472 23.4993 21.7373H21.5043C19.3637 21.7472 17.2976 22.5241 15.6807 23.927C14.0639 25.3298 13.0034 27.2658 12.6918 29.3836L11.7355 36.0698C11.705 36.2859 11.7252 36.5062 11.7945 36.7132C11.8638 36.9202 11.9803 37.1082 12.1349 37.2623C12.5099 37.6373 14.8105 39.5498 22.5036 39.5498C30.1968 39.5498 32.4918 37.6448 32.8724 37.2623C33.0269 37.1082 33.1435 36.9202 33.2128 36.7132C33.2821 36.5062 33.3023 36.2859 33.2718 36.0698L32.3118 29.3836Z" fill="#2C50D3"/>
  <path d="M14.1746 22.7688C12.3625 24.4393 11.1834 26.6848 10.8371 29.125L10.1434 33.925C4.5746 33.8875 2.8871 31.8625 2.60585 31.45C2.49714 31.3002 2.41955 31.1301 2.37769 30.9497C2.33582 30.7694 2.33052 30.5825 2.3621 30.4L2.7746 28.075C2.98952 26.8599 3.49427 25.7146 4.24605 24.7361C4.99784 23.7576 5.97449 22.9748 7.09319 22.4541C8.2119 21.9334 9.43967 21.6901 10.6724 21.7449C11.9051 21.7997 13.1065 22.1509 14.1746 22.7688Z" fill="#2C50D3"/>
  <path d="M42.6377 30.4C42.6693 30.5825 42.664 30.7694 42.6221 30.9497C42.5802 31.1301 42.5027 31.3002 42.3939 31.45C42.1127 31.8625 40.4252 33.8875 34.8564 33.925L34.1627 29.125C33.8164 26.6848 32.6373 24.4393 30.8252 22.7688C31.8933 22.1509 33.0946 21.7997 34.3274 21.7449C35.5601 21.6901 36.7879 21.9334 37.9066 22.4541C39.0253 22.9748 40.002 23.7576 40.7537 24.7361C41.5055 25.7146 42.0103 26.8599 42.2252 28.075L42.6377 30.4Z" fill="#2C50D3"/>
  <path d="M14.4938 18.6436C14.0218 19.3129 13.3952 19.8585 12.6673 20.2339C11.9393 20.6093 11.1315 20.8034 10.3125 20.7998C9.49548 20.7998 8.69016 20.6057 7.9629 20.2334C7.23563 19.8611 6.60725 19.3213 6.12953 18.6585C5.65181 17.9957 5.33844 17.2288 5.21522 16.4212C5.09201 15.6135 5.16249 14.7881 5.42085 14.013C5.67922 13.2379 6.11807 12.5353 6.70124 11.9631C7.28442 11.3909 7.99522 10.9655 8.77507 10.7218C9.55493 10.4782 10.3815 10.4234 11.1867 10.562C11.9919 10.7005 12.7526 11.0283 13.4063 11.5186C13.2183 12.2537 13.1238 13.0097 13.125 13.7686C13.1264 15.4882 13.5999 17.1745 14.4938 18.6436Z" fill="#2C50D3"/>
  <path d="M39.8434 15.6436C39.8439 16.3208 39.7108 16.9915 39.4519 17.6174C39.1929 18.2432 38.8131 18.8118 38.3342 19.2907C37.8553 19.7696 37.2867 20.1494 36.6609 20.4083C36.0351 20.6673 35.3644 20.8003 34.6871 20.7998C33.8681 20.8034 33.0603 20.6093 32.3323 20.2339C31.6044 19.8585 30.9778 19.3129 30.5059 18.6436C31.3997 17.1745 31.8732 15.4882 31.8746 13.7686C31.8759 13.0097 31.7814 12.2537 31.5934 11.5186C32.3594 10.944 33.2703 10.5941 34.224 10.5081C35.1778 10.4221 36.1366 10.6034 36.9931 11.0317C37.8495 11.4599 38.5699 12.1182 39.0733 12.9328C39.5767 13.7473 39.8434 14.686 39.8434 15.6436Z" fill="#2C50D3"/>
  <path d="M22.5 20.7998C26.3833 20.7998 29.5312 17.6518 29.5312 13.7686C29.5312 9.8853 26.3833 6.7373 22.5 6.7373C18.6167 6.7373 15.4688 9.8853 15.4688 13.7686C15.4688 17.6518 18.6167 20.7998 22.5 20.7998Z" fill="#2C50D3"/>
</svg>
`,
    revenueIcon: `
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
  <g clip-path="url(#clip0_533_2715)">
    <path d="M3.9165 41.8936V10.0186H0.166504V43.7686C0.166504 44.2658 0.364048 44.7428 0.715679 45.0944C1.06731 45.446 1.54422 45.6436 2.0415 45.6436H45.1665V41.8936H3.9165Z" fill="#2C50D3"/>
    <path d="M17.0415 26.8936C17.0415 26.3963 16.844 25.9194 16.4923 25.5677C16.1407 25.2161 15.6638 25.0186 15.1665 25.0186H9.5415C9.04422 25.0186 8.56731 25.2161 8.21568 25.5677C7.86405 25.9194 7.6665 26.3963 7.6665 26.8936V40.0186H17.0415V26.8936Z" fill="#2C50D3"/>
    <path d="M30.1665 19.3936C30.1665 18.8963 29.969 18.4194 29.6173 18.0677C29.2657 17.7161 28.7888 17.5186 28.2915 17.5186H22.6665C22.1692 17.5186 21.6923 17.7161 21.3407 18.0677C20.989 18.4194 20.7915 18.8963 20.7915 19.3936V40.0186H30.1665V19.3936Z" fill="#2C50D3"/>
    <path d="M43.2915 11.8936C43.2915 11.3963 43.094 10.9194 42.7423 10.5677C42.3907 10.2161 41.9138 10.0186 41.4165 10.0186H35.7915C35.2942 10.0186 34.8173 10.2161 34.4657 10.5677C34.114 10.9194 33.9165 11.3963 33.9165 11.8936V40.0186H43.2915V11.8936Z" fill="#2C50D3"/>
  </g>
  <defs>
    <clipPath id="clip0_533_2715">
      <rect width="45" height="45" fill="white" transform="translate(0.166504 0.643555)"/>
    </clipPath>
  </defs>
</svg>
`,
    countriesIcon: `
  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
  <path d="M22.8335 2.51855C18.7543 2.51855 14.7666 3.72819 11.3749 5.99449C7.98311 8.2608 5.33955 11.482 3.77849 15.2507C2.21743 19.0194 1.80899 23.1664 2.60481 27.1673C3.40063 31.1681 5.36497 34.8432 8.24943 37.7276C11.1339 40.6121 14.8089 42.5764 18.8098 43.3722C22.8106 44.1681 26.9576 43.7596 30.7264 42.1986C34.4951 40.6375 37.7163 37.994 39.9826 34.6022C42.2489 31.2104 43.4585 27.2228 43.4585 23.1436C43.4585 17.6735 41.2855 12.4274 37.4176 8.55948C33.5496 4.69154 28.3036 2.51855 22.8335 2.51855ZM14.4494 6.39043L15.5679 7.16668C15.8152 7.33903 16.0157 7.5704 16.151 7.8398L16.4323 8.4023C16.5814 8.70125 16.811 8.9527 17.0952 9.1284C17.3794 9.30411 17.7069 9.39712 18.041 9.39699H20.0407C20.5178 9.39699 20.9754 9.58654 21.3128 9.92393C21.6502 10.2613 21.8398 10.7189 21.8398 11.1961V11.2317C21.84 11.5658 21.747 11.8934 21.5713 12.1776C21.3956 12.4618 21.1441 12.6913 20.8451 12.8404L16.0479 15.2404C15.9807 15.2732 15.9159 15.3105 15.8538 15.352L13.3985 16.9889C13.1379 17.1629 12.927 17.4016 12.7863 17.6817L12.4216 18.4148C12.2956 18.664 12.2299 18.9394 12.2299 19.2187C12.2299 19.498 12.2956 19.7734 12.4216 20.0226C12.5902 20.3606 12.6483 20.7431 12.5875 21.116C12.5268 21.4888 12.3504 21.8331 12.0832 22.1001L12.0298 22.1545C11.7461 22.4382 11.3757 22.6189 10.9775 22.6678C10.5793 22.7167 10.1762 22.6311 9.83225 22.4245L6.69444 20.5401C6.32637 20.3189 6.04942 19.9734 5.91351 19.5661L5.14194 17.2504C5.10632 17.2504 5.08101 17.2392 5.04819 17.2382C6.62175 12.52 10.0028 8.61871 14.4494 6.39043ZM24.7844 29.8214C24.7846 29.9517 24.7637 30.0812 24.7226 30.2048L23.8929 32.6929C23.8337 32.8717 23.7335 33.0341 23.6004 33.1673L22.1004 34.6673C21.9306 34.8367 21.8151 35.0527 21.7685 35.2879L20.9744 39.2554C20.9377 39.4361 20.8603 39.606 20.748 39.7522C20.6358 39.8984 20.4917 40.0171 20.3266 40.0992L19.676 40.4254C19.4479 40.5387 19.19 40.5776 18.9386 40.5367C18.6872 40.4959 18.455 40.3773 18.2744 40.1976L17.0688 38.992C16.9767 38.8994 16.8998 38.7927 16.841 38.6761L16.0751 37.1442C15.9914 36.9754 15.9478 36.7897 15.9476 36.6014V32.7332C15.9471 32.5078 15.8842 32.2868 15.7657 32.095C15.6472 31.9032 15.4778 31.748 15.2763 31.6467L14.2713 31.1451C14.0817 31.051 13.92 30.9088 13.8026 30.7326L12.221 28.3598C12.0878 28.1606 12.0167 27.9263 12.0166 27.6867V26.8429C12.0172 26.6176 12.0803 26.3969 12.1988 26.2052C12.3173 26.0136 12.4866 25.8585 12.6879 25.7573L13.6188 25.2886C13.854 25.1715 14.0446 24.9809 14.1616 24.7457L14.6304 23.8148C14.7314 23.6139 14.886 23.4449 15.0771 23.3264C15.2682 23.208 15.4884 23.1447 15.7132 23.1436H17.4063C17.5658 23.1434 17.7237 23.1747 17.8711 23.2357C18.0184 23.2967 18.1523 23.3861 18.2651 23.4989L18.536 23.7698C18.7639 23.9974 19.0727 24.1254 19.3948 24.1261H19.646C19.9684 24.1273 20.2772 24.2562 20.5048 24.4847C20.7323 24.7131 20.8601 25.0224 20.8601 25.3448C20.8606 25.57 20.9235 25.7907 21.0418 25.9823C21.1601 26.174 21.3292 26.3291 21.5304 26.4304L24.1179 27.7232C24.3192 27.8247 24.4884 27.9799 24.6067 28.1717C24.725 28.3635 24.7879 28.5844 24.7882 28.8098L24.7844 29.8214ZM29.7251 12.0004C29.8087 11.7979 29.9314 11.6138 30.086 11.4586L31.7651 9.78043C31.8916 9.65401 32.0375 9.54862 32.1973 9.46824L33.9598 8.58699C34.1137 8.51355 34.2782 8.46452 34.4473 8.44168C36.4718 10.0378 38.1465 12.0332 39.3673 14.3039H38.5385C38.0966 14.3039 37.6728 14.1286 37.3601 13.8164L37.1576 13.6139C36.8449 13.3014 36.4211 13.1258 35.9791 13.1254H34.706C34.4457 13.1247 34.1888 13.1851 33.956 13.3017L32.3041 14.1286C32.0713 14.2448 31.8144 14.3048 31.5541 14.3039H31.2569C30.983 14.3037 30.7134 14.236 30.4719 14.1068C30.2304 13.9776 30.0244 13.7909 29.8722 13.5632C29.72 13.3354 29.6263 13.0737 29.5993 12.8012C29.5724 12.5286 29.613 12.2536 29.7176 12.0004H29.7251ZM36.7929 35.6301L36.671 35.3311C36.6045 35.1306 36.5707 34.9207 36.5707 34.7095V32.5448C36.5706 32.2399 36.4997 31.9392 36.3635 31.6664L34.8129 28.567C34.6767 28.2942 34.6058 27.9935 34.6057 27.6886V27.4017C34.6056 27.067 34.5201 26.7379 34.3571 26.4456C34.1941 26.1532 33.9592 25.9074 33.6745 25.7314C33.3898 25.5554 33.0649 25.455 32.7306 25.4399C32.3962 25.4247 32.0636 25.4953 31.7641 25.6448L31.0919 25.9814C30.8194 26.1174 30.519 26.1883 30.2144 26.1886H30.1291C29.7168 26.1878 29.3151 26.0577 28.9808 25.8165C28.6464 25.5753 28.3961 25.2352 28.2654 24.8442L27.8323 23.5439C27.7654 23.3435 27.7312 23.1336 27.731 22.9223V21.3464C27.731 21.023 27.8108 20.7047 27.9634 20.4196C28.116 20.1345 28.3366 19.8916 28.6057 19.7123L30.3944 18.5198C30.5817 18.3949 30.7891 18.3032 31.0076 18.2489L34.0507 17.4876C34.4135 17.397 34.7946 17.4117 35.1494 17.5298L37.2494 18.2301C37.4502 18.297 37.6604 18.3311 37.8719 18.3314H40.9366C41.7503 21.3311 41.7972 24.4872 41.0732 27.5098C40.3492 30.5324 38.8773 33.3246 36.7929 35.6301Z" fill="#2C50D3"/>
</svg>
  `,
    viewsIcon: `
  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
  <g clip-path="url(#clip0_533_2726)">
    <path d="M44.8726 12.4222C44.6364 10.4517 42.7795 8.56227 40.8366 8.30914C28.9891 6.83706 17.0087 6.83706 5.16497 8.30914C3.22046 8.56172 1.36351 10.4517 1.1273 12.4222C0.290899 19.6437 0.290899 26.6458 1.1273 33.8657C1.36351 35.8361 3.22046 37.7274 5.16497 37.9787C17.0087 39.4508 28.9895 39.4508 40.8366 37.9787C42.7795 37.7278 44.6364 35.8361 44.8726 33.8657C45.7092 26.6465 45.7092 19.6437 44.8726 12.4222ZM19.2497 30.6453V15.6449L30.4999 23.1454L19.2497 30.6453Z" fill="#2C50D3"/>
  </g>
  <defs>
    <clipPath id="clip0_533_2726">
      <rect width="45" height="45" fill="white" transform="translate(0.5 0.643555)"/>
    </clipPath>
  </defs>
</svg>
  `,
    checkBlueIcon: `
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
  <rect x="17.5" y="17" width="17" height="17" rx="8.5" transform="rotate(180 17.5 17)" fill="#2C50D3"/>
  <path d="M12.4004 5.09961L7.30039 11.8996L4.75039 9.63294" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  `
  }, V1 = [
    {
      icon: k.statsIcon1,
      text: "3,000+ Members"
    },
    {
      icon: k.statsIcon2,
      text: "4M+ In Revenue"
    },
    {
      icon: k.statsIcon3,
      text: "15M+ Views"
    }
  ], ki = [
    {
      id: 1,
      icon: k.blockersIcon1,
      text: "I feel stuck in the 9-to-5 grind with no time, freedom, or flexibility to enjoy my life.",
      button: `See details <span class="arrow_btn_icon">${k.arrowBtnIcon}</span>`,
      popupContent: {
        icon: k.blockersIcon1,
        title: "I feel stuck in the 9-to-5 grind with no time, freedom, or flexibility to enjoy my life.",
        text: "<p>Feeling stuck in a 9-to-5 grind can drain your time, freedom, and flexibility. This free training introduces a business model built for a lifestyle of freedom: Drop Servicing.</p> <p>Everything you need can be used on a laptop and internet connection. Using the most powerful tools in modern history, you’ll learn how to create an income stream that lets you work from anywhere and on your schedule.</p> <p>The training provides step-by-step guidance, done-for-you templates, and proven strategies, so you can escape the daily grind and design a life you love without taking big risks like giving up your current job.</p>",
        button: "Yes! Get Access Now!",
        video: "z0avn3iqzy",
        review: {
          reviewerPhoto: `${wn}barend_img.webp`,
          reviewerName: "Barend",
          reviewText: "“Barend went from working two stressful restaurant jobs to living his dream of travelling the world”",
          stars: `${wn}rating_stars_new.png`
        }
      }
    },
    {
      id: 2,
      icon: k.blockersIcon2,
      text: "I don’t know how to achieve financial freedom or build recurring, reliable income streams.",
      button: `See details <span class="arrow_btn_icon">${k.arrowBtnIcon}</span>`,
      popupContent: {
        icon: k.blockersIcon2,
        title: "I don’t know how to achieve financial freedom or build recurring, reliable income streams.",
        text: "<p>Financial freedom starts with the right strategy, and this free training delivers just that.</p> <p>You’ll learn a proven 4-step system to build a Drop Servicing business—an online model where you connect clients with services and earn recurring income.</p> <p>It’s affordable, beginner-friendly, and requires no inventory, startup costs or technical skills.</p> <p>We break everything into clear, actionable steps, showing you how to generate consistent income monthly.</p> <p>Whether you want to earn extra on the side or replace your job entirely, this training provides the tools to achieve it.</p>",
        button: "Yes! Get Access Now!",
        video: "w3aqhrq7ih",
        review: {
          reviewerPhoto: `${wn}aleksa_img.webp`,
          reviewerName: "Aleksa",
          reviewText: "“Aleksa followed the 4 simple steps and achieved financial freedom within a few months”",
          stars: `${wn}rating_stars_new.png`
        }
      }
    },
    {
      id: 3,
      icon: k.blockersIcon3,
      text: "I’m struggling to boost my income fast without sacrificing all my free time or taking big risks.",
      button: `See details <span class="arrow_btn_icon">${k.arrowBtnIcon}</span>`,
      popupContent: {
        icon: k.blockersIcon3,
        title: "I’m struggling to boost my income fast without sacrificing all my free time or taking big risks.",
        text: "<p>This free training is perfect for anyone wanting to increase their income in a flexible way.</p> <p>You’ll discover how to build a Drop Servicing business that fits your schedule and learn strategies to land your first high-value client quickly using low-risk methods and time-saving automation.</p> <p>With done-for-you templates and a beginner-friendly process, you’ll gain the tools to grow at your own pace and create a scalable recurring income stream—whether as a side hustle or a full-time business.</p>",
        button: "Yes! Get Access Now!",
        video: "kfls9if7xo",
        review: {
          reviewerPhoto: `${wn}ed_img.webp`,
          reviewerName: "Ed",
          reviewText: "“Ed used our strategies to boost his income fast and earned 6 figures within his first year”",
          stars: `${wn}rating_stars_new.png`
        }
      }
    },
    {
      id: 4,
      icon: k.blockersIcon4,
      text: "I lack the skills or clarity to start an online business; it feels overwhelming and impossible to begin.",
      button: `See details <span class="arrow_btn_icon">${k.arrowBtnIcon}</span>`,
      popupContent: {
        icon: k.blockersIcon4,
        title: "I lack the skills or clarity to start an online business; it feels overwhelming and impossible to begin.",
        text: "<p>Starting an online business is overwhelming to say the least. But it doesn’t have to be.</p> <p>This free training breaks everything down into a simple, step-by-step process designed for beginners.</p> <p>You don’t need prior experience or technical skills—just follow our checklist, use the provided done-for-you templates, and you’ll be on your way to building your own path to financial freedom.</p> <p>You’ll also see real-life success stories of people who started from scratch that will motivate you and prove it’s possible.</p> <p>By the end of the training, you’ll have the clarity, tools, and confidence to get started with Drop Servicing stress-free.</p>",
        button: "Yes! Get Access Now!",
        video: "gcdkkjxaye",
        review: {
          reviewerPhoto: `${wn}lauren_img.webp`,
          reviewerName: "Lauren",
          reviewText: "“Lauren gained complete clarity and confidence on what to do to achieve her goals and now makes 7 figures per year”",
          stars: `${wn}rating_stars_new.png`
        }
      }
    },
    {
      id: 5,
      icon: k.blockersIcon5,
      text: "I feel overwhelmed by options and need a simple, beginner-friendly path to success.",
      button: `See details <span class="arrow_btn_icon">${k.arrowBtnIcon}</span>`,
      popupContent: {
        icon: k.blockersIcon5,
        title: "I feel overwhelmed by options and need a simple, beginner-friendly path to success.",
        text: "<p>Overwhelmed by options? This free training makes starting an online business simple and beginner-friendly.</p> <p>Drop Servicing eliminates the need for technical skills, upfront investments, or complicated setups. Using just a laptop and an internet connection you’ll build a simple little laptop business that funds your freedom.</p> <p>Our free training provides done-for-you templates, automation tools, and real-life examples, ensuring your success. By the end, you’ll have the confidence and knowledge to begin immediately, knowing this proven model has helped countless other beginners succeed.</p>",
        button: "Yes! Get Access Now!",
        video: "szyss7l2s2",
        review: {
          reviewerPhoto: `${wn}jordan_img.webp`,
          reviewerName: "Jordan",
          reviewText: "“After trying everything Jordan discovered our simple method and got his first sale within a few weeks”",
          stars: `${wn}rating_stars_new.png`
        }
      }
    },
    {
      id: 6,
      icon: k.blockersIcon6,
      text: "I’m skeptical of online business promises and need a proven, trustworthy system.",
      button: `See details <span class="arrow_btn_icon">${k.arrowBtnIcon}</span>`,
      popupContent: {
        icon: k.blockersIcon6,
        title: "I’m skeptical of online business promises and need a proven, trustworthy system.",
        text: "<p>Skeptical about online business promises? This free training is built on transparency and proven results.</p> <p>We show you a clear, step-by-step system to build a Drop Servicing business, supported by real-life case studies and success stories.</p> <p>No hype—just actionable strategies that thousands have used to achieve financial freedom goals. You’ll see how this beginner-friendly model works and why it’s trusted by so many.</p> <p>With no fluff and no gimmicks, this training provides the tools and guidance you need to start confidently and see real results.</p>",
        button: "Yes! Get Access Now!",
        video: "31humpsf2v",
        review: {
          reviewerPhoto: `${wn}michelle_img.webp`,
          reviewerName: "Michelle",
          reviewText: "“Feeling unsure about all the online business promises, Michelle took a leap of faith with us—and it paid off with total freedom.”",
          stars: `${wn}rating_stars_new.png`
        }
      }
    }
  ], Ht = [
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
    }
    // {
    //   name: 'Guy',
    //   review:
    //     '"Guy turned her part-time side hustle into a reliable source of income while working full-time as a nurse."',
    //   img: 'guy.jpg',
    //   videoId: '9luz6eb8y5'
    // }
  ], B1 = [
    'Dylan Sigley was a broke college student working in a call center when he discovered a new online business method called "Drop Servicing".',
    "Soon after, he built a ridiculously profitable business from home, allowing him to quit his job and earn 6-figures while traveling the world and working only 5 hours a week.",
    "This FREE webclass skips the nonsense to show you, step-by-step, how Dylan grew his business so quickly and how hundreds of others have replicated his success using the same process. It's the most practical, results-driven training you'll find.",
    "Dylan has one of the best (if not the best) track records in the industry for helping people around the world build Drop Servicing Businesses, even as complete beginners with no skills or degree.",
    "Normally, it costs between $4K and $24K to work with Dylan, but in this webclass you get his exact methods for FREE! Register now before this is taken offline in the next few days."
  ], Y1 = [
    "Aspiring entrepreneurs eager to shift from employee to business owner.",
    "People tired of their jobs and wanting to move towards achieving their financial freedom goals.",
    "Anyone ready for actionable insights to take control of their lives and financial goals."
  ], G1 = [
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
  ], J1 = [
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
  ], Li = [
    {
      name: "Barend K.",
      text: '"Barend was working two stressful restaurant jobs and used this strategy to earn $69,650 in one sale, followed by $77,000 in the next."'
    },
    {
      name: "Derik J.",
      text: '"Derik left a stressful day job, now lands high-ticket sales like $23,400, and has clients paying him $162,000 yearly."'
    },
    {
      name: "Lauren G.",
      text: '"Lauren made $8,700 in 6 weeks, reached $100,000 in 6 months, and bought her first house."'
    },
    {
      name: "Stephen H.",
      text: '"Stephen lost his job, used this system to quickly earn $10,000 per month, and now travels the world in freedom."'
    }
  ], P = "https://conversionratestore.github.io/projects/dropservicing/optin/img", K1 = (
    /* HTML */
    `
  <div class="stats_block">
    <ul class="stats">
      ${V1.map(
      ({ text: e, icon: i }) => (
        /* HTML */
        `
            <li class="stat_item">
              <p>${e}</p>
              ${i}
            </li>
          `
      )
    ).join("")}
    </ul>
  </div>
`
  ), Ti = (
    /* HTML */
    `
  <span class="founder_name"
    >Dylan Sigley, Founder, <a href="https://dropservicing.com/homepage">Dropservicing.com</a></span
  >
`
  ), Mi = (
    /* HTML */
    `
  <div class="crs_stories">
    <p>Our Success Stories</p>
    <div class="crs_stories_block">
      <div class="crs_stories_nav">
        ${Li.map(
      (e, i) => `<span class="${i === 0 ? "active" : ""}">
                <img src="https://conversionratestore.github.io/projects/dropservicing/popups/img/avatar_${i}.jpg" alt="avatar" />
              </span>`
    ).join("")}
      </div>
      <div class="crs_stories_content">
        ${Li.map(
      (e, i) => (
        /* HTML */
        `<div class="crs_story ${i === 0 ? "active" : ""}">
                <div class="crs_story_head">
                  <span>
                    <img
                      src="https://conversionratestore.github.io/projects/dropservicing/popups/img/avatar_${i}.jpg"
                      alt="avatar"
                    />
                  </span>
                  <p>
                    <b>${e.name}</b><br />
                    <span>Verified Customer <img src="${P}/check_exit_img.png" alt="icon" /> </span>
                  </p>
                </div>
                <img src="${P}/rating_stars.png" alt="stars" />
                <p>${e.text}</p>
              </div>`
      )
    ).join("")}
      </div>
    </div>
  </div>
`
  ), U1 = (
    /* HTML */
    `
  <div class="blokers">
    <h3>What’s stopping you from achieving your financial and lifestyle goals?</h3>
    <ul class="blokers_list">
      ${ki.map(
      ({ id: e, icon: i, text: r, button: c }) => (
        /* HTML */
        `
            <li>
              <div data-id="${e}" class="blokers_item" data-seedetails>
                <div>
                  ${i}
                  <p>${r}</p>
                </div>
                <div class="btn_see_details">${c}</div>
              </div>
            </li>
          `
      )
    ).join("")}
    </ul>
    <div class="show_more_block mobile"><span>Show more options</span> ${k.showMoreIcon}</div>
  </div>
`
  ), Si = (
    /* HTML */
    `
  <div class="tp_label">
    <img src="${P}/trustpilot.svg" alt="stars" />
    <p>
      TrustScore&nbsp;
      <img src="${P}/trustpilot_star.svg" alt="star" />
      <b>4.8/5</b>&nbsp;<span>300+ Reviews</span>
    </p>
  </div>
`
  ), Ei = (
    /* HTML */
    `
  <p class="seats_left_txt">
    The event is almost full:
    <b><span class="seats_left_value"></span> seats left</b>
  </p>
`
  ), $i = (
    /* HTML */
    `
  <div class="progress_bar_container">
    <div class="progress_bar"></div>
  </div>
`
  ), X1 = (
    /* HTML */
    `
  <div class="trusted_block">
    <img src="${P}/trusted_img.png" alt="img people" />
    <p>The <b>#1</b> free online business training.<br />Trusted by <span>4M+ people.</span></p>
  </div>
`
  ), Q1 = (
    /* HTML */
    `
  <ul class="info_block">
    <li class="info_item">
      <span class="info_icon">${k.infoBlockIcon1}</span>
      <p>
        Discover <b>‘Drop Servicing’</b>—a new method to build a simple online business and achieve financial freedom.
      </p>
    </li>
    <li class="info_item">
      <span class="info_icon">${k.infoBlockIcon2}</span>
      <p>
        Learn a 4-step process to land your <b>first sale in 30 days</b> using just a laptop and an internet connection.
      </p>
    </li>
  </ul>
`
  ), no = (
    /* HTML */
    `
  <div class="safe_and_secure_block">
    <span class="safe_and_secure_icon"> ${k.safeAndSecureIcon} </span>
    <p>Your data is safe and secure. No ads or spam</p>
  </div>
`
  ), eo = (
    /* HTML */
    `
  <section id="main_block" class="ver_b">
    <div class="img_bgr">
      <img src="${P}/hero_img.webp" alt="img" />
      ${Ti}
    </div>
    <div class="wrapper">
      <header>
        <img src="${P}/logo.png" alt="logo" />
      </header>
      <div class="hero_wrapper">
        <div class="info">
          ${Si}
          <h1>The 4 steps to start your online business in 2024 and unlock financial freedom goals</h1>
          <button class="cta pop">Yes! Get Access Now!</button>
          <div class="mobile hero_img_wrapper">
            <img src="${P}/hero_img_mob.webp" alt="img" class="hero_img" />
            ${Ti}
          </div>
          ${K1}
        </div>
      </div>
      ${Mi}
    </div>
  </section>
  <section id="blokers">${U1}</section>
`
  ), to = (
    /* HTML */
    `
  <section id="base_review">
    <h2>Why Join This Webinar?</h2>
    <p>
      Learn how to start your Drop Servicing business within 30 days. See how these success stories transformed their
      lives and achieved their financial freedom goals
    </p>
    <div class="crs_container">
      <ul class="${window.innerWidth >= 768 ? "ver_b" : ""}">
        ${Ht.map(
      ({ name: e, review: i, img: r, videoId: c }) => (
        /* HTML */
        `
              <li>
                <div class="slide" data-video="${c}">
                  <div>
                    <div class="img">
                      <img src="${P}/${r}" alt="${e}" />
                    </div>
                    <p><b>${e}</b><img src="${P}/rating_stars_new.png" alt="stars" /></p>
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
  ), io = (
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
      <img src="${P}/bonus.png" alt="bonus" />
    </div>
  </section>
`
  ), oo = (
    /* HTML */
    `
  <section id="host_block" class="crs_container">
    <div class="img">
      <img src="${P}/founder.jpg" alt="dylan" class="desktop" />
      <img src="${P}/founder_mob.jpg" alt="dylan" class="mobile" />
      <a href="https://dropservicing.com/homepage"></a>
    </div>
    <div class="info">
      <h2>Your Host: Dylan Sigley</h2>
      <p>7 Figure Online Entrepreneur</p>
      <ul>
        ${B1.map((e) => (
      /* HTML */
      `<li><span></span>${e}</li>`
    )).join("")}
      </ul>
      <p>
        Access Dylan’s formula to learn how to start your Drop Servicing business and unlock financial freedom goals
      </p>
      <button class="cta pop">Unlock Dylan’s Formula for Free</button>
    </div>
  </section>
`
  ), so = (
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
      ${Ht.map(
      ({ name: e, review: i, img: r, videoId: c }) => (
        /* HTML */
        `
            <li>
              <div class="video_slide" data-video="${c}">
                <div class="head">
                  <div class="img">
                    <img src="${P}/${r}" alt="${e}" />
                  </div>
                  <p><b>${e}</b><img src="${P}/rating_stars_new.png" alt="stars" /></p>
                  <p>${i}</p>
                </div>
                <div class="video">
                  <div class="wistia_embed wistia_async_${c}" style="width:100%;height:100%;"></div>
                </div>
              </div>
            </li>
          `
      )
    ).join("")}
    </ul>
  </section>
`
  ), ro = (
    /* HTML */
    `
  <section id="training_for" class="crs_container">
    <div class="photo">
      <img src="${P}/founder2.jpg" alt="dylan" />
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
        ${Y1.map((e) => (
      /* HTML */
      `<li>${k.checkBlueIcon}${e}</li>`
    )).join("")}
      </ul>
      <p>If any of the above apply to you, you're in the right place!</p>
      <p>Join your Free training to start your business and transform your career</p>
      <button class="cta pop">Join The FREE Training Now</button>
    </div>
  </section>
`
  ), ao = (
    /* HTML */
    `
  <section id="trust_pilot">
    <div class="crs_container">
      <h2>
        TrustScore&nbsp;<img src="${P}/trustpilot_star.svg" alt="" />&nbsp;<b>4.8/5</b>&nbsp;<span class="desktop"
          >300+ Reviews</span
        >
      </h2>
      <p>People just like you joined the training</p>
      <ul>
        ${G1.map(
      ({ name: e, title: i, text: r, date: c, link: l }) => (
        /* HTML */
        `
              <li>
                <div class="review_slide">
                  <p class="name">${e}<img src="${P}/stars_tp.svg" alt="stars" /></p>
                  <a href="${l}">${i}</a>
                  <p class="text">${r}</p>
                  <p>
                    <span><img src="${P}/check2.svg" alt="check" />Verified User</span>${c}
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
        <p>3,000+ Members ${k.membersIcon}</p>
        <p>4M+ In Revenue ${k.revenueIcon}</p>
        <p>100+ Countries ${k.countriesIcon}</p>
        <p>15M+ Views ${k.viewsIcon}</p>
      </div>
    </div>
  </section>
`
  ), co = (
    /* HTML */
    `
  <section id="faq_block">
    <div class="crs_container">
      <h2>Frequently asked questions</h2>
      <ul>
        ${J1.map(
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
  ), lo = (
    /* HTML */
    `
  <section id="last_cta" class="crs_container">
    <div class="img">
      <img src="${P}/product.jpg" alt="product" />
    </div>
    <div>
      <h2>Your Future Starts Here!</h2>
      <p>Transform your life by learning how to create a successful Drop Servicing business.</p>
      <p>Join us and take the first step toward financial independence.</p>
      <button class="cta pop">Join The Exclusive Training</button>
    </div>
  </section>
`
  ), po = (
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
        Additionally, This site is NOT endorsed by Google or Meta in any way.<br class="mobile" /><br
          class="mobile"
        /><a href="https://www.dropservicingblueprint.com/">Dylan Sigley Consulting - FZCO</a>
      </p>
      <p>| IFZA Business Park, DDP, Dubai Silicon Oasis | +1 (786) 475-8716 | info@dropservicingblueprint.com</p>
      <p>
        <a href="https://www.dropservicingblueprint.com/privacy-policy">Privacy Policy </a>
        <a href="https://www.dropservicingblueprint.com/earnings-disclaimer">Earnings Disclaimer</a>
        <a href="https://www.dropservicingblueprint.com/terms-and-conditions">Terms and Conditions</a>
      </p>
    </div>
  </footer>
`
  ), fo = (
    /* HTML */
    `
  <div class="crs_popup_form" data-closeform>
    <div class="form">
      <div class="close" data-closeform>${k.closeIconPopup}</div>
      <form class="crs_form">
        <div class="inputs1">
          <h2>Access Your Exclusive Online Training</h2>
          ${Ei} ${$i} ${X1} ${Q1}
          <h3 class="inputs1_title">
            Enter your email <br class="mobile" />
            to get a link for the live training
          </h3>
          <label><input type="email" placeholder="Enter email address..." name="email" /></label>
          ${no}
          <label class="name_label is_hidden"><input type="text" placeholder="Enter your name..." name="name" /></label>
          <button class="cta register">GET FREE TRAINING</button>
        </div>
        <div class="inputs2"></div>
        ${Si}
      </form>
      <div class="bonus">
        <p><img src="${P}/present.png" alt="gift" /> Exclusive bonuses!</p>
        <p>Stay until the end of the training to receive the following:</p>
        <ul>
          <li>Comprehensive 12K Sale Tutorial (+Free Copy/Paste Template)</li>
          <li>A Quick Guide to Drop Servicing (Get Selling FAST and for ZERO)</li>
        </ul>
      </div>
    </div>
  </div>
`
  ), uo = (
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
          <img src="${P}/trustpilot.svg" alt="trustpilot" />TrustScore&nbsp;<img
            src="${P}/trustpilot_star.svg"
            alt="star"
          /><span>4.8</span>
        </p>
      </div>
      <button class="cta pop">Grab Your FREE Seat Now!</button>
    </div>
  </div>
`
  ), ho = (e, i) => {
    const r = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return (
      /* HTML */
      `
    <h3 class="inputs2_title">Select a time to join</h3>
    <ul class="time_list">
      ${e.map(({ date: c, schedule: l }, a) => {
        const p = new Date(c).toLocaleString("en-us", { weekday: "long" }), _ = new Date(c).toLocaleString("en-us", { month: "long", day: "numeric" }), h = new Date(c).toLocaleString("en-us", { hour: "numeric", minute: "numeric" }), S = new Date(c).getTime() - (/* @__PURE__ */ new Date()).getTime(), I = new Date(c).getTime() + 1e3 * 60 * 15, X = new Date(I).toLocaleString("en-us", { hour: "numeric", minute: "numeric" }), F = I - (/* @__PURE__ */ new Date()).getTime(), j = Math.ceil((S < 0 ? F : S) / (1e3 * 60));
        return (
          /* HTML */
          `
            <li class="${a === 0 ? "selected" : ""}" data-schedule="${l}">
              <span class="point"></span>
              <div>
                <p>${p}, ${_}, ${S < 0 ? X : h}</p>
                <p>${r}</p>
              </div>
              <span class="comment"
                >Starts in ${a === 0 ? j : Math.ceil(S / (1e3 * 60 * 60))}
                ${a === 0 ? "minutes" : "hours"}</span
              >
            </li>
          `
        );
      }).join("")}
    </ul>
    <button class="cta register_mob">Select a Time</button>
  `
    );
  }, _o = (
    /* HTML */
    `
  <div class="crs_blockers_popup" data-closeblokers>
    <div class="crs_blockers_popup_container">
      <div class="close" data-closeblokers>${k.closeIconPopup}</div>
      <div class="crs_blockers_content"></div>
    </div>
  </div>
`
  ), go = (e, i, r, c, l, a, p, _, h) => (
    /* HTML */
    `
    <h3 class="mobile">${a}</h3>
    <div class="video_wrapper">
      <div class="review_wrapper">
        <div class="review_header">
          <div class="img_wrapper">
            <img src="${e}" alt="${i}" />
          </div>
          <div class="review_info">
            <p>${i}</p>
            <img src="${c}" alt="stars" />
          </div>
        </div>
        <p>${r}</p>
      </div>
      <div class="video">
        <div class="wistia_embed wistia_async_${h} wistia_embed_initialized" style="width:100%;height:100%;"></div>
      </div>
    </div>
    <div class="info_wrapper">
      <div class="title_wrapper">
        ${l}
        <h3>${a}</h3>
        <div class="txt_container_abs">
          <div class="txt_container">${p}</div>
        </div>
      </div>
      ${window.innerWidth >= 768 ? `<button class="cta pop">${_}</button>` : ""}
    </div>
  `
  ), mo = (
    /* HTML */
    `
  <div class="crs_exit_popup" data-closeexit>
    <div class="crs_exit_content">
      <div class="close" data-closeexit>${k.closeSvgExitPopup}</div>
      <div class="crs_main_info">
        <h2>Wait! Don't Miss Out on This Opportunity!</h2>
        ${Ei} ${$i}
        <p>This free training is only available for a short time—don’t miss your last chance!</p>
        <div class="crs_list_block">
          <h3>
            <img src="${P}/check_exit_img.png" alt="icon" />
            You’re just one step away from...
          </h3>
          <ul>
            <li>
              ${k.checkSvgExitPopup}
              <p>Discovering the proven Drop Servicing formula to start your online business</p>
            </li>
            <li>
              ${k.checkSvgExitPopup}
              <p>Unlocking financial freedom with practical, results-driven strategies</p>
            </li>
            <li>
              ${k.checkSvgExitPopup}
              <p>Accessing a simple 4-step process + exclusive bonuses</p>
            </li>
          </ul>
        </div>
        <button class="cta pop">Yes, I want free training & bonuses</button>
        <div class="no_btn">No, I'll miss out</div>
      </div>
      ${Mi}
    </div>
  </div>
`
  );
  var nt = window, On = nt.requestAnimationFrame || nt.webkitRequestAnimationFrame || nt.mozRequestAnimationFrame || nt.msRequestAnimationFrame || function(e) {
    return setTimeout(e, 16);
  }, Ii = window, Pt = Ii.cancelAnimationFrame || Ii.mozCancelAnimationFrame || function(e) {
    clearTimeout(e);
  };
  function Nt() {
    for (var e, i, r, c = arguments[0] || {}, l = 1, a = arguments.length; l < a; l++)
      if ((e = arguments[l]) !== null)
        for (i in e)
          r = e[i], c !== r && r !== void 0 && (c[i] = r);
    return c;
  }
  function Mn(e) {
    return ["true", "false"].indexOf(e) >= 0 ? JSON.parse(e) : e;
  }
  function Sn(e, i, r, c) {
    if (c)
      try {
        e.setItem(i, r);
      } catch {
      }
    return r;
  }
  function vo() {
    var e = window.tnsId;
    return window.tnsId = e ? e + 1 : 1, "tns" + window.tnsId;
  }
  function et() {
    var e = document, i = e.body;
    return i || (i = e.createElement("body"), i.fake = !0), i;
  }
  var ke = document.documentElement;
  function tt(e) {
    var i = "";
    return e.fake && (i = ke.style.overflow, e.style.background = "", e.style.overflow = ke.style.overflow = "hidden", ke.appendChild(e)), i;
  }
  function it(e, i) {
    e.fake && (e.remove(), ke.style.overflow = i, ke.offsetHeight);
  }
  function bo() {
    var e = document, i = et(), r = tt(i), c = e.createElement("div"), l = !1;
    i.appendChild(c);
    try {
      for (var a = "(10px * 10)", p = ["calc" + a, "-moz-calc" + a, "-webkit-calc" + a], _, h = 0; h < 3; h++)
        if (_ = p[h], c.style.width = _, c.offsetWidth === 100) {
          l = _.replace(a, "");
          break;
        }
    } catch {
    }
    return i.fake ? it(i, r) : c.remove(), l;
  }
  function xo() {
    var e = document, i = et(), r = tt(i), c = e.createElement("div"), l = e.createElement("div"), a = "", p = 70, _ = 3, h = !1;
    c.className = "tns-t-subp2", l.className = "tns-t-ct";
    for (var S = 0; S < p; S++)
      a += "<div></div>";
    return l.innerHTML = a, c.appendChild(l), i.appendChild(c), h = Math.abs(c.getBoundingClientRect().left - l.children[p - _].getBoundingClientRect().left) < 2, i.fake ? it(i, r) : c.remove(), h;
  }
  function wo() {
    if (window.matchMedia || window.msMatchMedia)
      return !0;
    var e = document, i = et(), r = tt(i), c = e.createElement("div"), l = e.createElement("style"), a = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", p;
    return l.type = "text/css", c.className = "tns-mq-test", i.appendChild(l), i.appendChild(c), l.styleSheet ? l.styleSheet.cssText = a : l.appendChild(e.createTextNode(a)), p = window.getComputedStyle ? window.getComputedStyle(c).position : c.currentStyle.position, i.fake ? it(i, r) : c.remove(), p === "absolute";
  }
  function Co(e, i) {
    var r = document.createElement("style");
    return e && r.setAttribute("media", e), i && r.setAttribute("nonce", i), document.querySelector("head").appendChild(r), r.sheet ? r.sheet : r.styleSheet;
  }
  function Pn(e, i, r, c) {
    "insertRule" in e ? e.insertRule(i + "{" + r + "}", c) : e.addRule(i, r, c);
  }
  function yo(e, i) {
    "deleteRule" in e ? e.deleteRule(i) : e.removeRule(i);
  }
  function $n(e) {
    var i = "insertRule" in e ? e.cssRules : e.rules;
    return i.length;
  }
  function ko(e, i) {
    return Math.atan2(e, i) * (180 / Math.PI);
  }
  function Lo(e, i) {
    var r = !1, c = Math.abs(90 - Math.abs(e));
    return c >= 90 - i ? r = "horizontal" : c <= i && (r = "vertical"), r;
  }
  function qn(e, i, r) {
    for (var c = 0, l = e.length; c < l; c++)
      i.call(r, e[c], c);
  }
  var Zt = "classList" in document.createElement("_"), pe = Zt ? function(e, i) {
    return e.classList.contains(i);
  } : function(e, i) {
    return e.className.indexOf(i) >= 0;
  }, W = Zt ? function(e, i) {
    pe(e, i) || e.classList.add(i);
  } : function(e, i) {
    pe(e, i) || (e.className += " " + i);
  }, ln = Zt ? function(e, i) {
    pe(e, i) && e.classList.remove(i);
  } : function(e, i) {
    pe(e, i) && (e.className = e.className.replace(i, ""));
  };
  function Le(e, i) {
    return e.hasAttribute(i);
  }
  function ot(e, i) {
    return e.getAttribute(i);
  }
  function zi(e) {
    return typeof e.item < "u";
  }
  function _n(e, i) {
    if (e = zi(e) || e instanceof Array ? e : [e], Object.prototype.toString.call(i) === "[object Object]")
      for (var r = e.length; r--; )
        for (var c in i)
          e[r].setAttribute(c, i[c]);
  }
  function Rn(e, i) {
    e = zi(e) || e instanceof Array ? e : [e], i = i instanceof Array ? i : [i];
    for (var r = i.length, c = e.length; c--; )
      for (var l = r; l--; )
        e[c].removeAttribute(i[l]);
  }
  function Ai(e) {
    for (var i = [], r = 0, c = e.length; r < c; r++)
      i.push(e[r]);
    return i;
  }
  function gn(e, i) {
    e.style.display !== "none" && (e.style.display = "none");
  }
  function mn(e, i) {
    e.style.display === "none" && (e.style.display = "");
  }
  function ji(e) {
    return window.getComputedStyle(e).display !== "none";
  }
  function Te(e) {
    if (typeof e == "string") {
      var i = [e], r = e.charAt(0).toUpperCase() + e.substr(1), c = ["Webkit", "Moz", "ms", "O"];
      c.forEach(function(_) {
        (_ !== "ms" || e === "transform") && i.push(_ + r);
      }), e = i;
    }
    var l = document.createElement("fakeelement");
    e.length;
    for (var a = 0; a < e.length; a++) {
      var p = e[a];
      if (l.style[p] !== void 0)
        return p;
    }
    return !1;
  }
  function To(e) {
    if (!e || !window.getComputedStyle)
      return !1;
    var i = document, r = et(), c = tt(r), l = i.createElement("p"), a, p = e.length > 9 ? "-" + e.slice(0, -9).toLowerCase() + "-" : "";
    return p += "transform", r.insertBefore(l, null), l.style[e] = "translate3d(1px,1px,1px)", a = window.getComputedStyle(l).getPropertyValue(p), r.fake ? it(r, c) : l.remove(), a !== void 0 && a.length > 0 && a !== "none";
  }
  function Di(e, i) {
    var r = !1;
    return /^Webkit/.test(e) ? r = "webkit" + i + "End" : /^O/.test(e) ? r = "o" + i + "End" : e && (r = i.toLowerCase() + "end"), r;
  }
  var Hi = !1;
  try {
    var Mo = Object.defineProperty({}, "passive", {
      get: function() {
        Hi = !0;
      }
    });
    window.addEventListener("test", null, Mo);
  } catch {
  }
  var Pi = Hi ? { passive: !0 } : !1;
  function R(e, i, r) {
    for (var c in i) {
      var l = ["touchstart", "touchmove"].indexOf(c) >= 0 && !r ? Pi : !1;
      e.addEventListener(c, i[c], l);
    }
  }
  function U(e, i) {
    for (var r in i) {
      var c = ["touchstart", "touchmove"].indexOf(r) >= 0 ? Pi : !1;
      e.removeEventListener(r, i[r], c);
    }
  }
  function So() {
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
  function Eo(e, i, r, c, S, a, p) {
    var _ = Math.min(a, 10), h = S.indexOf("%") >= 0 ? "%" : "px", S = S.replace(h, ""), I = Number(e.style[i].replace(r, "").replace(c, "").replace(h, "")), X = (S - I) / a * _;
    setTimeout(F, _);
    function F() {
      a -= _, I += X, e.style[i] = r + I + h + c, a > 0 ? setTimeout(F, _) : p();
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
  var Me = function(e) {
    e = Nt({
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
    var i = document, r = window, c = {
      ENTER: 13,
      SPACE: 32,
      LEFT: 37,
      RIGHT: 39
    }, l = {}, a = e.useLocalStorage;
    if (a) {
      var p = navigator.userAgent, _ = /* @__PURE__ */ new Date();
      try {
        l = r.localStorage, l ? (l.setItem(_, _), a = l.getItem(_) == _, l.removeItem(_)) : a = !1, a || (l = {});
      } catch {
        a = !1;
      }
      a && (l.tnsApp && l.tnsApp !== p && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(n) {
        l.removeItem(n);
      }), localStorage.tnsApp = p);
    }
    var h = l.tC ? Mn(l.tC) : Sn(l, "tC", bo(), a), S = l.tPL ? Mn(l.tPL) : Sn(l, "tPL", xo(), a), I = l.tMQ ? Mn(l.tMQ) : Sn(l, "tMQ", wo(), a), X = l.tTf ? Mn(l.tTf) : Sn(l, "tTf", Te("transform"), a), F = l.t3D ? Mn(l.t3D) : Sn(l, "t3D", To(X), a), j = l.tTDu ? Mn(l.tTDu) : Sn(l, "tTDu", Te("transitionDuration"), a), de = l.tTDe ? Mn(l.tTDe) : Sn(l, "tTDe", Te("transitionDelay"), a), fe = l.tADu ? Mn(l.tADu) : Sn(l, "tADu", Te("animationDuration"), a), Se = l.tADe ? Mn(l.tADe) : Sn(l, "tADe", Te("animationDelay"), a), Cn = l.tTE ? Mn(l.tTE) : Sn(l, "tTE", Di(j, "Transition"), a), Ee = l.tAE ? Mn(l.tAE) : Sn(l, "tAE", Di(fe, "Animation"), a), Ot = r.console && typeof r.console.warn == "function", qt = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], Ni = {};
    if (qt.forEach(function(n) {
      if (typeof e[n] == "string") {
        var t = e[n], o = i.querySelector(t);
        if (Ni[n] = t, o && o.nodeName)
          e[n] = o;
        else {
          Ot && console.warn("Can't find", e[n]);
          return;
        }
      }
    }), e.container.children.length < 1) {
      Ot && console.warn("No slides found in", e.container);
      return;
    }
    var N = e.responsive, ue = e.nested, g = e.mode === "carousel";
    if (N) {
      0 in N && (e = Nt(e, N[0]), delete N[0]);
      var Rt = {};
      for (var Zi in N) {
        var $e = N[Zi];
        $e = typeof $e == "number" ? { items: $e } : $e, Rt[Zi] = $e;
      }
      N = Rt, Rt = null;
    }
    function Oi(n) {
      for (var t in n)
        g || (t === "slideBy" && (n[t] = "page"), t === "edgePadding" && (n[t] = !1), t === "autoHeight" && (n[t] = !1)), t === "responsive" && Oi(n[t]);
    }
    if (g || Oi(e), !g) {
      e.axis = "horizontal", e.slideBy = "page", e.edgePadding = !1;
      var Fn = e.animateIn, st = e.animateOut, Ft = e.animateDelay, In = e.animateNormal;
    }
    var $ = e.axis === "horizontal", an = i.createElement("div"), cn = i.createElement("div"), pn, b = e.container, Wt = b.parentNode, qi = b.outerHTML, M = b.children, x = M.length, Ie, rt = Qi(), ze = !1;
    N && d1(), g && (b.className += " tns-vpfix");
    var C = e.autoWidth, m = w("fixedWidth"), O = w("edgePadding"), L = w("gutter"), G = e1(), Q = w("center"), y = C ? 1 : Math.floor(w("items")), he = w("slideBy"), Vt = e.viewportMax || e.fixedWidthViewportWidth, Wn = w("arrowKeys"), yn = w("speed"), Ae = e.rewind, nn = Ae ? !1 : e.loop, dn = w("autoHeight"), zn = w("controls"), Vn = w("controlsText"), An = w("nav"), Bn = w("touch"), Yn = w("mouseDrag"), sn = w("autoplay"), Bt = w("autoplayTimeout"), Gn = w("autoplayText"), Jn = w("autoplayHoverPause"), Kn = w("autoplayResetOnVisibility"), z = Co(null, w("nonce")), je = e.lazyload, Io = e.lazyloadSelector, V, _e = [], en = nn ? Do() : 0, E = g ? x + en * 2 : x + en, Ri = !!((m || C) && !nn), ge = m ? di() : null, Yt = !g || !nn, te = $ ? "left" : "top", Un = "", me = "", De = /* @__PURE__ */ function() {
      return m ? function() {
        return Q && !nn ? x - 1 : Math.ceil(-ge / (m + L));
      } : C ? function() {
        for (var n = 0; n < E; n++)
          if (V[n] >= -ge)
            return n;
      } : function() {
        return Q && g && !nn ? x - 1 : nn || g ? Math.max(0, E - Math.ceil(y)) : E - 1;
      };
    }(), d = Ui(w("startIndex")), Xn = d;
    Ki();
    var jn = 0, vn = C ? null : De(), at = e.preventActionWhenRunning, ct = e.swipeAngle, Dn = ct ? "?" : !0, Qn = !1, Gt = e.onInit, J = new So(), ne = " tns-slider tns-" + e.mode, Z = b.id || vo(), fn = w("disable"), He = !1, lt = e.freezable, kn = lt && !C ? oi() : !1, Pe = !1, Ne = {
      click: ee,
      keydown: is
    }, Jt = {
      click: Ko,
      keydown: os
    }, Ze = {
      mouseover: ns,
      mouseout: es
    }, Oe = { visibilitychange: Qo }, qe = { keydown: ts }, Re = {
      touchstart: A1,
      touchmove: j1,
      touchend: At,
      touchcancel: At
    }, Fe = {
      mousedown: A1,
      mousemove: j1,
      mouseup: At,
      mouseleave: At
    }, pt = Nn("controls"), Kt = Nn("nav"), We = C ? !0 : e.navAsThumbnails, Ut = Nn("autoplay"), Fi = Nn("touch"), Wi = Nn("mouseDrag"), Xt = "tns-slide-active", Vi = "tns-slide-cloned", dt = "tns-complete", ft = {
      load: Ro,
      error: Fo
    }, Qt, ni, Ve = e.preventScrollOnTouch === "force";
    if (pt)
      var B = e.controlsContainer, Bi = e.controlsContainer ? e.controlsContainer.outerHTML : "", D = e.prevButton, H = e.nextButton, zo = e.prevButton ? e.prevButton.outerHTML : "", Ao = e.nextButton ? e.nextButton.outerHTML : "", Be, Ye;
    if (Kt)
      var tn = e.navContainer, Yi = e.navContainer ? e.navContainer.outerHTML : "", bn, Ln = C ? x : H1(), ie = 0, oe = -1, xn = Xi(), ve = xn, ut = "tns-nav-active", be = "Carousel Page ", ei = " (Current Slide)";
    if (Ut)
      var Gi = e.autoplayDirection === "forward" ? 1 : -1, q = e.autoplayButton, Ji = e.autoplayButton ? e.autoplayButton.outerHTML : "", Ge = ["<span class='tns-visually-hidden'>", " animation</span>"], ht, un, _t, xe, gt;
    if (Fi || Wi)
      var se = {}, En = {}, mt, re = !1, Tn, ti = $ ? function(n, t) {
        return n.x - t.x;
      } : function(n, t) {
        return n.y - t.y;
      };
    C || vt(fn || kn), X && (te = X, Un = "translate", F ? (Un += $ ? "3d(" : "3d(0px, ", me = $ ? ", 0px, 0px)" : ", 0px)") : (Un += $ ? "X(" : "Y(", me = ")")), g && (b.className = b.className.replace("tns-vpfix", "")), Po(), No(), o1();
    function vt(n) {
      n && (zn = An = Bn = Yn = Wn = sn = Jn = Kn = !1);
    }
    function Ki() {
      for (var n = g ? d - en : d; n < 0; )
        n += x;
      return n % x + 1;
    }
    function Ui(n) {
      return n = n ? Math.max(0, Math.min(nn ? x - 1 : x - y, n)) : 0, g ? n + en : n;
    }
    function bt(n) {
      for (n == null && (n = d), g && (n -= en); n < 0; )
        n += x;
      return Math.floor(n % x);
    }
    function Xi() {
      var n = bt(), t;
      return t = We ? n : m || C ? Math.ceil((n + 1) * Ln / x - 1) : Math.floor(n / y), !nn && g && d === vn && (t = Ln - 1), t;
    }
    function jo() {
      if (C || m && !Vt)
        return x - 1;
      var n = m ? "fixedWidth" : "items", t = [];
      if ((m || e[n] < x) && t.push(e[n]), N)
        for (var o in N) {
          var s = N[o][n];
          s && (m || s < x) && t.push(s);
        }
      return t.length || t.push(0), Math.ceil(m ? Vt / Math.min.apply(null, t) : Math.max.apply(null, t));
    }
    function Do() {
      var n = jo(), t = g ? Math.ceil((n * 5 - x) / 2) : n * 4 - x;
      return t = Math.max(n, t), Nn("edgePadding") ? t + 1 : t;
    }
    function Qi() {
      return r.innerWidth || i.documentElement.clientWidth || i.body.clientWidth;
    }
    function ii(n) {
      return n === "top" ? "afterbegin" : "beforeend";
    }
    function n1(n) {
      if (n != null) {
        var t = i.createElement("div"), o, s;
        return n.appendChild(t), o = t.getBoundingClientRect(), s = o.right - o.left, t.remove(), s || n1(n.parentNode);
      }
    }
    function e1() {
      var n = O ? O * 2 - L : 0;
      return n1(Wt) - n;
    }
    function Nn(n) {
      if (e[n])
        return !0;
      if (N) {
        for (var t in N)
          if (N[t][n])
            return !0;
      }
      return !1;
    }
    function w(n, t) {
      if (t == null && (t = rt), n === "items" && m)
        return Math.floor((G + L) / (m + L)) || 1;
      var o = e[n];
      if (N)
        for (var s in N)
          t >= parseInt(s) && n in N[s] && (o = N[s][n]);
      return n === "slideBy" && o === "page" && (o = w("items")), !g && (n === "slideBy" || n === "items") && (o = Math.floor(o)), o;
    }
    function Ho(n) {
      return h ? h + "(" + n * 100 + "% / " + E + ")" : n * 100 / E + "%";
    }
    function xt(n, t, o, s, u) {
      var v = "";
      if (n !== void 0) {
        var T = n;
        t && (T -= t), v = $ ? "margin: 0 " + T + "px 0 " + n + "px;" : "margin: " + n + "px 0 " + T + "px 0;";
      } else if (t && !o) {
        var K = "-" + t + "px", on = $ ? K + " 0 0" : "0 " + K + " 0";
        v = "margin: 0 " + on + ";";
      }
      return !g && u && j && s && (v += ae(s)), v;
    }
    function wt(n, t, o) {
      return n ? (n + t) * E + "px" : h ? h + "(" + E * 100 + "% / " + o + ")" : E * 100 / o + "%";
    }
    function Ct(n, t, o) {
      var s;
      if (n)
        s = n + t + "px";
      else {
        g || (o = Math.floor(o));
        var u = g ? E : o;
        s = h ? h + "(100% / " + u + ")" : 100 / u + "%";
      }
      return s = "width:" + s, ue !== "inner" ? s + ";" : s + " !important;";
    }
    function yt(n) {
      var t = "";
      if (n !== !1) {
        var o = $ ? "padding-" : "margin-", s = $ ? "right" : "bottom";
        t = o + s + ": " + n + "px;";
      }
      return t;
    }
    function t1(n, t) {
      var o = n.substring(0, n.length - t).toLowerCase();
      return o && (o = "-" + o + "-"), o;
    }
    function ae(n) {
      return t1(j, 18) + "transition-duration:" + n / 1e3 + "s;";
    }
    function i1(n) {
      return t1(fe, 17) + "animation-duration:" + n / 1e3 + "s;";
    }
    function Po() {
      var n = "tns-outer", t = "tns-inner";
      if (Nn("gutter"), an.className = n, cn.className = t, an.id = Z + "-ow", cn.id = Z + "-iw", b.id === "" && (b.id = Z), ne += S || C ? " tns-subpixel" : " tns-no-subpixel", ne += h ? " tns-calc" : " tns-no-calc", C && (ne += " tns-autowidth"), ne += " tns-" + e.axis, b.className += ne, g ? (pn = i.createElement("div"), pn.id = Z + "-mw", pn.className = "tns-ovh", an.appendChild(pn), pn.appendChild(cn)) : an.appendChild(cn), dn) {
        var o = pn || cn;
        o.className += " tns-ah";
      }
      if (Wt.insertBefore(an, b), cn.appendChild(b), qn(M, function(Y, Ce) {
        W(Y, "tns-item"), Y.id || (Y.id = Z + "-item" + Ce), !g && In && W(Y, In), _n(Y, {
          "aria-hidden": "true",
          tabindex: "-1"
        });
      }), en) {
        for (var s = i.createDocumentFragment(), u = i.createDocumentFragment(), v = en; v--; ) {
          var T = v % x, K = M[T].cloneNode(!0);
          if (W(K, Vi), Rn(K, "id"), u.insertBefore(K, u.firstChild), g) {
            var on = M[x - 1 - T].cloneNode(!0);
            W(on, Vi), Rn(on, "id"), s.appendChild(on);
          }
        }
        b.insertBefore(s, b.firstChild), b.appendChild(u), M = b.children;
      }
    }
    function o1() {
      if (Nn("autoHeight") || C || !$) {
        var n = b.querySelectorAll("img");
        qn(n, function(t) {
          var o = t.src;
          je || (o && o.indexOf("data:image") < 0 ? (t.src = "", R(t, ft), W(t, "loading"), t.src = o) : m1(t));
        }), On(function() {
          Tt(Ai(n), function() {
            Qt = !0;
          });
        }), Nn("autoHeight") && (n = li(d, Math.min(d + y - 1, E - 1))), je ? s1() : On(function() {
          Tt(Ai(n), s1);
        });
      } else
        g && Ke(), a1(), c1();
    }
    function s1() {
      if (C && x > 1) {
        var n = nn ? d : x - 1;
        (function t() {
          var o = M[n].getBoundingClientRect().left, s = M[n - 1].getBoundingClientRect().right;
          Math.abs(o - s) <= 1 ? r1() : setTimeout(function() {
            t();
          }, 16);
        })();
      } else
        r1();
    }
    function r1() {
      (!$ || C) && (w1(), C ? (ge = di(), lt && (kn = oi()), vn = De(), vt(fn || kn)) : hi()), g && Ke(), a1(), c1();
    }
    function No() {
      if (!g)
        for (var n = d, t = d + Math.min(x, y); n < t; n++) {
          var o = M[n];
          o.style.left = (n - d) * 100 / y + "%", W(o, Fn), ln(o, In);
        }
      if ($ && (S || C ? (Pn(z, "#" + Z + " > .tns-item", "font-size:" + r.getComputedStyle(M[0]).fontSize + ";", $n(z)), Pn(z, "#" + Z, "font-size:0;", $n(z))) : g && qn(M, function(vi, bi) {
        vi.style.marginLeft = Ho(bi);
      })), I) {
        if (j) {
          var s = pn && e.autoHeight ? ae(e.speed) : "";
          Pn(z, "#" + Z + "-mw", s, $n(z));
        }
        s = xt(e.edgePadding, e.gutter, e.fixedWidth, e.speed, e.autoHeight), Pn(z, "#" + Z + "-iw", s, $n(z)), g && (s = $ && !C ? "width:" + wt(e.fixedWidth, e.gutter, e.items) + ";" : "", j && (s += ae(yn)), Pn(z, "#" + Z, s, $n(z))), s = $ && !C ? Ct(e.fixedWidth, e.gutter, e.items) : "", e.gutter && (s += yt(e.gutter)), g || (j && (s += ae(yn)), fe && (s += i1(yn))), s && Pn(z, "#" + Z + " > .tns-item", s, $n(z));
      } else {
        Vo(), cn.style.cssText = xt(O, L, m, dn), g && $ && !C && (b.style.width = wt(m, L, y));
        var s = $ && !C ? Ct(m, L, y) : "";
        L && (s += yt(L)), s && Pn(z, "#" + Z + " > .tns-item", s, $n(z));
      }
      if (N && I)
        for (var u in N) {
          u = parseInt(u);
          var v = N[u], s = "", T = "", K = "", on = "", Y = "", Ce = C ? null : w("items", u), Qe = w("fixedWidth", u), le = w("speed", u), gi = w("edgePadding", u), mi = w("autoHeight", u), ye = w("gutter", u);
          j && pn && w("autoHeight", u) && "speed" in v && (T = "#" + Z + "-mw{" + ae(le) + "}"), ("edgePadding" in v || "gutter" in v) && (K = "#" + Z + "-iw{" + xt(gi, ye, Qe, le, mi) + "}"), g && $ && !C && ("fixedWidth" in v || "items" in v || m && "gutter" in v) && (on = "width:" + wt(Qe, ye, Ce) + ";"), j && "speed" in v && (on += ae(le)), on && (on = "#" + Z + "{" + on + "}"), ("fixedWidth" in v || m && "gutter" in v || !g && "items" in v) && (Y += Ct(Qe, ye, Ce)), "gutter" in v && (Y += yt(ye)), !g && "speed" in v && (j && (Y += ae(le)), fe && (Y += i1(le))), Y && (Y = "#" + Z + " > .tns-item{" + Y + "}"), s = T + K + on + Y, s && z.insertRule("@media (min-width: " + u / 16 + "em) {" + s + "}", z.cssRules.length);
        }
    }
    function a1() {
      if (pi(), an.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + g1() + "</span>  of " + x + "</div>"), ni = an.querySelector(".tns-liveregion .current"), Ut) {
        var n = sn ? "stop" : "start";
        q ? _n(q, { "data-action": n }) : e.autoplayButtonOutput && (an.insertAdjacentHTML(ii(e.autoplayPosition), '<button type="button" data-action="' + n + '">' + Ge[0] + n + Ge[1] + Gn[0] + "</button>"), q = an.querySelector("[data-action]")), q && R(q, { click: E1 }), sn && (zt(), Jn && R(b, Ze), Kn && R(b, Oe));
      }
      if (Kt) {
        if (tn)
          _n(tn, { "aria-label": "Carousel Pagination" }), bn = tn.children, qn(bn, function(T, K) {
            _n(T, {
              "data-nav": K,
              tabindex: "-1",
              "aria-label": be + (K + 1),
              "aria-controls": Z
            });
          });
        else {
          for (var t = "", o = We ? "" : 'style="display:none"', s = 0; s < x; s++)
            t += '<button type="button" data-nav="' + s + '" tabindex="-1" aria-controls="' + Z + '" ' + o + ' aria-label="' + be + (s + 1) + '"></button>';
          t = '<div class="tns-nav" aria-label="Carousel Pagination">' + t + "</div>", an.insertAdjacentHTML(ii(e.navPosition), t), tn = an.querySelector(".tns-nav"), bn = tn.children;
        }
        if (_i(), j) {
          var u = j.substring(0, j.length - 18).toLowerCase(), v = "transition: all " + yn / 1e3 + "s";
          u && (v = "-" + u + "-" + v), Pn(z, "[aria-controls^=" + Z + "-item]", v, $n(z));
        }
        _n(bn[xn], { "aria-label": be + (xn + 1) + ei }), Rn(bn[xn], "tabindex"), W(bn[xn], ut), R(tn, Jt);
      }
      pt && (!B && (!D || !H) && (an.insertAdjacentHTML(ii(e.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + Z + '">' + Vn[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + Z + '">' + Vn[1] + "</button></div>"), B = an.querySelector(".tns-controls")), (!D || !H) && (D = B.children[0], H = B.children[1]), e.controlsContainer && _n(B, {
        "aria-label": "Carousel Navigation",
        tabindex: "0"
      }), (e.controlsContainer || e.prevButton && e.nextButton) && _n([D, H], {
        "aria-controls": Z,
        tabindex: "-1"
      }), (e.controlsContainer || e.prevButton && e.nextButton) && (_n(D, { "data-controls": "prev" }), _n(H, { "data-controls": "next" })), Be = y1(D), Ye = y1(H), L1(), B ? R(B, Ne) : (R(D, Ne), R(H, Ne))), ri();
    }
    function c1() {
      if (g && Cn) {
        var n = {};
        n[Cn] = Hn, R(b, n);
      }
      Bn && R(b, Re, e.preventScrollOnTouch), Yn && R(b, Fe), Wn && R(i, qe), ue === "inner" ? J.on("outerResized", function() {
        p1(), J.emit("innerLoaded", rn());
      }) : (N || m || C || dn || !$) && R(r, { resize: l1 }), dn && (ue === "outer" ? J.on("innerLoaded", Lt) : fn || Lt()), ai(), fn ? h1() : kn && u1(), J.on("indexChanged", v1), ue === "inner" && J.emit("innerLoaded", rn()), typeof Gt == "function" && Gt(rn()), ze = !0;
    }
    function Zo() {
      if (z.disabled = !0, z.ownerNode && z.ownerNode.remove(), U(r, { resize: l1 }), Wn && U(i, qe), B && U(B, Ne), tn && U(tn, Jt), U(b, Ze), U(b, Oe), q && U(q, { click: E1 }), sn && clearInterval(ht), g && Cn) {
        var n = {};
        n[Cn] = Hn, U(b, n);
      }
      Bn && U(b, Re), Yn && U(b, Fe);
      var t = [qi, Bi, zo, Ao, Yi, Ji];
      qt.forEach(function(s, u) {
        var v = s === "container" ? an : e[s];
        if (typeof v == "object" && v) {
          var T = v.previousElementSibling ? v.previousElementSibling : !1, K = v.parentNode;
          v.outerHTML = t[u], e[s] = T ? T.nextElementSibling : K.firstElementChild;
        }
      }), qt = Fn = st = Ft = In = $ = an = cn = b = Wt = qi = M = x = Ie = rt = C = m = O = L = G = y = he = Vt = Wn = yn = Ae = nn = dn = z = je = V = _e = en = E = Ri = ge = Yt = te = Un = me = De = d = Xn = jn = vn = ct = Dn = Qn = Gt = J = ne = Z = fn = He = lt = kn = Pe = Ne = Jt = Ze = Oe = qe = Re = Fe = pt = Kt = We = Ut = Fi = Wi = Xt = dt = ft = Qt = zn = Vn = B = Bi = D = H = Be = Ye = An = tn = Yi = bn = Ln = ie = oe = xn = ve = ut = be = ei = sn = Bt = Gi = Gn = Jn = q = Ji = Kn = Ge = ht = un = _t = xe = gt = se = En = mt = re = Tn = ti = Bn = Yn = null;
      for (var o in this)
        o !== "rebuild" && (this[o] = null);
      ze = !1;
    }
    function l1(n) {
      On(function() {
        p1(Zn(n));
      });
    }
    function p1(n) {
      if (ze) {
        ue === "outer" && J.emit("outerResized", rn(n)), rt = Qi();
        var t, o = Ie, s = !1;
        N && (d1(), t = o !== Ie, t && J.emit("newBreakpointStart", rn(n)));
        var u, v, T = y, K = fn, on = kn, Y = Wn, Ce = zn, Qe = An, le = Bn, gi = Yn, mi = sn, ye = Jn, vi = Kn, bi = d;
        if (t) {
          var ss = m, rs = dn, as = Vn, cs = Q, xi = Gn;
          if (!I)
            var ls = L, ps = O;
        }
        if (Wn = w("arrowKeys"), zn = w("controls"), An = w("nav"), Bn = w("touch"), Q = w("center"), Yn = w("mouseDrag"), sn = w("autoplay"), Jn = w("autoplayHoverPause"), Kn = w("autoplayResetOnVisibility"), t && (fn = w("disable"), m = w("fixedWidth"), yn = w("speed"), dn = w("autoHeight"), Vn = w("controlsText"), Gn = w("autoplayText"), Bt = w("autoplayTimeout"), I || (O = w("edgePadding"), L = w("gutter"))), vt(fn), G = e1(), (!$ || C) && !fn && (w1(), $ || (hi(), s = !0)), (m || C) && (ge = di(), vn = De()), (t || m) && (y = w("items"), he = w("slideBy"), v = y !== T, v && (!m && !C && (vn = De()), si())), t && fn !== K && (fn ? h1() : qo()), lt && (t || m || C) && (kn = oi(), kn !== on && (kn ? (fi(Et(Ui(0))), u1()) : (Oo(), s = !0))), vt(fn || kn), sn || (Jn = Kn = !1), Wn !== Y && (Wn ? R(i, qe) : U(i, qe)), zn !== Ce && (zn ? B ? mn(B) : (D && mn(D), H && mn(H)) : B ? gn(B) : (D && gn(D), H && gn(H))), An !== Qe && (An ? (mn(tn), _i()) : gn(tn)), Bn !== le && (Bn ? R(b, Re, e.preventScrollOnTouch) : U(b, Re)), Yn !== gi && (Yn ? R(b, Fe) : U(b, Fe)), sn !== mi && (sn ? (q && mn(q), !un && !xe && zt()) : (q && gn(q), un && Xe())), Jn !== ye && (Jn ? R(b, Ze) : U(b, Ze)), Kn !== vi && (Kn ? R(i, Oe) : U(i, Oe)), t) {
          if ((m !== ss || Q !== cs) && (s = !0), dn !== rs && (dn || (cn.style.height = "")), zn && Vn !== as && (D.innerHTML = Vn[0], H.innerHTML = Vn[1]), q && Gn !== xi) {
            var wi = sn ? 1 : 0, Ci = q.innerHTML, P1 = Ci.length - xi[wi].length;
            Ci.substring(P1) === xi[wi] && (q.innerHTML = Ci.substring(0, P1) + Gn[wi]);
          }
        } else
          Q && (m || C) && (s = !0);
        if ((v || m && !C) && (Ln = H1(), _i()), u = d !== bi, u ? (J.emit("indexChanged", rn()), s = !0) : v ? u || v1() : (m || C) && (ai(), pi(), _1()), v && !g && Bo(), !fn && !kn) {
          if (t && !I && ((O !== ps || L !== ls) && (cn.style.cssText = xt(O, L, m, yn, dn)), $)) {
            g && (b.style.width = wt(m, L, y));
            var ds = Ct(m, L, y) + yt(L);
            yo(z, $n(z) - 1), Pn(z, "#" + Z + " > .tns-item", ds, $n(z));
          }
          dn && Lt(), s && (Ke(), Xn = d);
        }
        t && J.emit("newBreakpointEnd", rn(n));
      }
    }
    function oi() {
      if (!m && !C) {
        var n = Q ? y - (y - 1) / 2 : y;
        return x <= n;
      }
      var t = m ? (m + L) * x : V[x], o = O ? G + O * 2 : G + L;
      return Q && (o -= m ? (G - m) / 2 : (G - (V[d + 1] - V[d] - L)) / 2), t <= o;
    }
    function d1() {
      Ie = 0;
      for (var n in N)
        n = parseInt(n), rt >= n && (Ie = n);
    }
    var si = /* @__PURE__ */ function() {
      return nn ? g ? (
        // loop + carousel
        function() {
          var n = jn, t = vn;
          n += he, t -= he, O ? (n += 1, t -= 1) : m && (G + L) % (m + L) && (t -= 1), en && (d > t ? d -= x : d < n && (d += x));
        }
      ) : (
        // loop + gallery
        function() {
          if (d > vn)
            for (; d >= jn + x; )
              d -= x;
          else if (d < jn)
            for (; d <= vn - x; )
              d += x;
        }
      ) : (
        // non-loop
        function() {
          d = Math.max(jn, Math.min(vn, d));
        }
      );
    }();
    function ri() {
      !sn && q && gn(q), !An && tn && gn(tn), zn || (B ? gn(B) : (D && gn(D), H && gn(H)));
    }
    function f1() {
      sn && q && mn(q), An && tn && mn(tn), zn && (B ? mn(B) : (D && mn(D), H && mn(H)));
    }
    function u1() {
      if (!Pe) {
        if (O && (cn.style.margin = "0px"), en)
          for (var n = "tns-transparent", t = en; t--; )
            g && W(M[t], n), W(M[E - t - 1], n);
        ri(), Pe = !0;
      }
    }
    function Oo() {
      if (Pe) {
        if (O && I && (cn.style.margin = ""), en)
          for (var n = "tns-transparent", t = en; t--; )
            g && ln(M[t], n), ln(M[E - t - 1], n);
        f1(), Pe = !1;
      }
    }
    function h1() {
      if (!He) {
        if (z.disabled = !0, b.className = b.className.replace(ne.substring(1), ""), Rn(b, ["style"]), nn)
          for (var n = en; n--; )
            g && gn(M[n]), gn(M[E - n - 1]);
        if ((!$ || !g) && Rn(cn, ["style"]), !g)
          for (var t = d, o = d + x; t < o; t++) {
            var s = M[t];
            Rn(s, ["style"]), ln(s, Fn), ln(s, In);
          }
        ri(), He = !0;
      }
    }
    function qo() {
      if (He) {
        if (z.disabled = !1, b.className += ne, Ke(), nn)
          for (var n = en; n--; )
            g && mn(M[n]), mn(M[E - n - 1]);
        if (!g)
          for (var t = d, o = d + x; t < o; t++) {
            var s = M[t], u = t < d + y ? Fn : In;
            s.style.left = (t - d) * 100 / y + "%", W(s, u);
          }
        f1(), He = !1;
      }
    }
    function _1() {
      var n = g1();
      ni.innerHTML !== n && (ni.innerHTML = n);
    }
    function g1() {
      var n = kt(), t = n[0] + 1, o = n[1] + 1;
      return t === o ? t + "" : t + " to " + o;
    }
    function kt(n) {
      n == null && (n = Et());
      var t = d, o, s, u;
      if (Q || O ? (C || m) && (s = -(parseFloat(n) + O), u = s + G + O * 2) : C && (s = V[d], u = s + G), C)
        V.forEach(function(on, Y) {
          Y < E && ((Q || O) && on <= s + 0.5 && (t = Y), u - on >= 0.5 && (o = Y));
        });
      else {
        if (m) {
          var v = m + L;
          Q || O ? (t = Math.floor(s / v), o = Math.ceil(u / v - 1)) : o = t + Math.ceil(G / v) - 1;
        } else if (Q || O) {
          var T = y - 1;
          if (Q ? (t -= T / 2, o = d + T / 2) : o = d + T, O) {
            var K = O * y / G;
            t -= K, o += K;
          }
          t = Math.floor(t), o = Math.ceil(o);
        } else
          o = t + y - 1;
        t = Math.max(t, 0), o = Math.min(o, E - 1);
      }
      return [t, o];
    }
    function ai() {
      if (je && !fn) {
        var n = kt();
        n.push(Io), li.apply(null, n).forEach(function(t) {
          if (!pe(t, dt)) {
            var o = {};
            o[Cn] = function(u) {
              u.stopPropagation();
            }, R(t, o), R(t, ft), t.src = ot(t, "data-src");
            var s = ot(t, "data-srcset");
            s && (t.srcset = s), W(t, "loading");
          }
        });
      }
    }
    function Ro(n) {
      m1(we(n));
    }
    function Fo(n) {
      Wo(we(n));
    }
    function m1(n) {
      W(n, "loaded"), ci(n);
    }
    function Wo(n) {
      W(n, "failed"), ci(n);
    }
    function ci(n) {
      W(n, dt), ln(n, "loading"), U(n, ft);
    }
    function li(n, t, o) {
      var s = [];
      for (o || (o = "img"); n <= t; )
        qn(M[n].querySelectorAll(o), function(u) {
          s.push(u);
        }), n++;
      return s;
    }
    function Lt() {
      var n = li.apply(null, kt());
      On(function() {
        Tt(n, x1);
      });
    }
    function Tt(n, t) {
      if (Qt || (n.forEach(function(o, s) {
        !je && o.complete && ci(o), pe(o, dt) && n.splice(s, 1);
      }), !n.length))
        return t();
      On(function() {
        Tt(n, t);
      });
    }
    function v1() {
      ai(), pi(), _1(), L1(), Yo();
    }
    function Vo() {
      g && dn && (pn.style[j] = yn / 1e3 + "s");
    }
    function b1(n, t) {
      for (var o = [], s = n, u = Math.min(n + t, E); s < u; s++)
        o.push(M[s].offsetHeight);
      return Math.max.apply(null, o);
    }
    function x1() {
      var n = dn ? b1(d, y) : b1(en, x), t = pn || cn;
      t.style.height !== n && (t.style.height = n + "px");
    }
    function w1() {
      V = [0];
      var n = $ ? "left" : "top", t = $ ? "right" : "bottom", o = M[0].getBoundingClientRect()[n];
      qn(M, function(s, u) {
        u && V.push(s.getBoundingClientRect()[n] - o), u === E - 1 && V.push(s.getBoundingClientRect()[t] - o);
      });
    }
    function pi() {
      var n = kt(), t = n[0], o = n[1];
      qn(M, function(s, u) {
        u >= t && u <= o ? Le(s, "aria-hidden") && (Rn(s, ["aria-hidden", "tabindex"]), W(s, Xt)) : Le(s, "aria-hidden") || (_n(s, {
          "aria-hidden": "true",
          tabindex: "-1"
        }), ln(s, Xt));
      });
    }
    function Bo() {
      for (var n = d + Math.min(x, y), t = E; t--; ) {
        var o = M[t];
        t >= d && t < n ? (W(o, "tns-moving"), o.style.left = (t - d) * 100 / y + "%", W(o, Fn), ln(o, In)) : o.style.left && (o.style.left = "", W(o, In), ln(o, Fn)), ln(o, st);
      }
      setTimeout(function() {
        qn(M, function(s) {
          ln(s, "tns-moving");
        });
      }, 300);
    }
    function Yo() {
      if (An && (xn = oe >= 0 ? oe : Xi(), oe = -1, xn !== ve)) {
        var n = bn[ve], t = bn[xn];
        _n(n, {
          tabindex: "-1",
          "aria-label": be + (ve + 1)
        }), ln(n, ut), _n(t, { "aria-label": be + (xn + 1) + ei }), Rn(t, "tabindex"), W(t, ut), ve = xn;
      }
    }
    function C1(n) {
      return n.nodeName.toLowerCase();
    }
    function y1(n) {
      return C1(n) === "button";
    }
    function k1(n) {
      return n.getAttribute("aria-disabled") === "true";
    }
    function Mt(n, t, o) {
      n ? t.disabled = o : t.setAttribute("aria-disabled", o.toString());
    }
    function L1() {
      if (!(!zn || Ae || nn)) {
        var n = Be ? D.disabled : k1(D), t = Ye ? H.disabled : k1(H), o = d <= jn, s = !Ae && d >= vn;
        o && !n && Mt(Be, D, !0), !o && n && Mt(Be, D, !1), s && !t && Mt(Ye, H, !0), !s && t && Mt(Ye, H, !1);
      }
    }
    function St(n, t) {
      j && (n.style[j] = t);
    }
    function Go() {
      return m ? (m + L) * E : V[E];
    }
    function Je(n) {
      n == null && (n = d);
      var t = O ? L : 0;
      return C ? (G - t - (V[n + 1] - V[n] - L)) / 2 : m ? (G - m) / 2 : (y - 1) / 2;
    }
    function di() {
      var n = O ? L : 0, t = G + n - Go();
      return Q && !nn && (t = m ? -(m + L) * (E - 1) - Je() : Je(E - 1) - V[E - 1]), t > 0 && (t = 0), t;
    }
    function Et(n) {
      n == null && (n = d);
      var t;
      if ($ && !C)
        if (m)
          t = -(m + L) * n, Q && (t += Je());
        else {
          var o = X ? E : y;
          Q && (n -= Je()), t = -n * 100 / o;
        }
      else
        t = -V[n], Q && C && (t += Je());
      return Ri && (t = Math.max(t, ge)), t += $ && !C && !m ? "%" : "px", t;
    }
    function Ke(n) {
      St(b, "0s"), fi(n);
    }
    function fi(n) {
      n == null && (n = Et()), b.style[te] = Un + n + me;
    }
    function T1(n, t, o, s) {
      var u = n + y;
      nn || (u = Math.min(u, E));
      for (var v = n; v < u; v++) {
        var T = M[v];
        s || (T.style.left = (v - d) * 100 / y + "%"), Ft && de && (T.style[de] = T.style[Se] = Ft * (v - n) / 1e3 + "s"), ln(T, t), W(T, o), s && _e.push(T);
      }
    }
    var Jo = /* @__PURE__ */ function() {
      return g ? function() {
        St(b, ""), j || !yn ? (fi(), (!yn || !ji(b)) && Hn()) : Eo(b, te, Un, me, Et(), yn, Hn), $ || hi();
      } : function() {
        _e = [];
        var n = {};
        n[Cn] = n[Ee] = Hn, U(M[Xn], n), R(M[d], n), T1(Xn, Fn, st, !0), T1(d, In, Fn), (!Cn || !Ee || !yn || !ji(b)) && Hn();
      };
    }();
    function ui(n, t) {
      Yt && si(), (d !== Xn || t) && (J.emit("indexChanged", rn()), J.emit("transitionStart", rn()), dn && Lt(), un && n && ["click", "keydown"].indexOf(n.type) >= 0 && Xe(), Qn = !0, Jo());
    }
    function M1(n) {
      return n.toLowerCase().replace(/-/g, "");
    }
    function Hn(n) {
      if (g || Qn) {
        if (J.emit("transitionEnd", rn(n)), !g && _e.length > 0)
          for (var t = 0; t < _e.length; t++) {
            var o = _e[t];
            o.style.left = "", Se && de && (o.style[Se] = "", o.style[de] = ""), ln(o, st), W(o, In);
          }
        if (!n || !g && n.target.parentNode === b || n.target === b && M1(n.propertyName) === M1(te)) {
          if (!Yt) {
            var s = d;
            si(), d !== s && (J.emit("indexChanged", rn()), Ke());
          }
          ue === "inner" && J.emit("innerLoaded", rn()), Qn = !1, Xn = d;
        }
      }
    }
    function Ue(n, t) {
      if (!kn)
        if (n === "prev")
          ee(t, -1);
        else if (n === "next")
          ee(t, 1);
        else {
          if (Qn) {
            if (at)
              return;
            Hn();
          }
          var o = bt(), s = 0;
          if (n === "first" ? s = -o : n === "last" ? s = g ? x - y - o : x - 1 - o : (typeof n != "number" && (n = parseInt(n)), isNaN(n) || (t || (n = Math.max(0, Math.min(x - 1, n))), s = n - o)), !g && s && Math.abs(s) < y) {
            var u = s > 0 ? 1 : -1;
            s += d + s - x >= jn ? x * u : x * 2 * u * -1;
          }
          d += s, g && nn && (d < jn && (d += x), d > vn && (d -= x)), bt(d) !== bt(Xn) && ui(t);
        }
    }
    function ee(n, t) {
      if (Qn) {
        if (at)
          return;
        Hn();
      }
      var o;
      if (!t) {
        n = Zn(n);
        for (var s = we(n); s !== B && [D, H].indexOf(s) < 0; )
          s = s.parentNode;
        var u = [D, H].indexOf(s);
        u >= 0 && (o = !0, t = u === 0 ? -1 : 1);
      }
      if (Ae) {
        if (d === jn && t === -1) {
          Ue("last", n);
          return;
        } else if (d === vn && t === 1) {
          Ue("first", n);
          return;
        }
      }
      t && (d += he * t, C && (d = Math.floor(d)), ui(o || n && n.type === "keydown" ? n : null));
    }
    function Ko(n) {
      if (Qn) {
        if (at)
          return;
        Hn();
      }
      n = Zn(n);
      for (var t = we(n), o; t !== tn && !Le(t, "data-nav"); )
        t = t.parentNode;
      if (Le(t, "data-nav")) {
        var o = oe = Number(ot(t, "data-nav")), s = m || C ? o * x / Ln : o * y, u = We ? o : Math.min(Math.ceil(s), x - 1);
        Ue(u, n), xn === o && (un && Xe(), oe = -1);
      }
    }
    function $t() {
      ht = setInterval(function() {
        ee(null, Gi);
      }, Bt), un = !0;
    }
    function It() {
      clearInterval(ht), un = !1;
    }
    function S1(n, t) {
      _n(q, { "data-action": n }), q.innerHTML = Ge[0] + n + Ge[1] + t;
    }
    function zt() {
      $t(), q && S1("stop", Gn[1]);
    }
    function Xe() {
      It(), q && S1("start", Gn[0]);
    }
    function Uo() {
      sn && !un && (zt(), xe = !1);
    }
    function Xo() {
      un && (Xe(), xe = !0);
    }
    function E1() {
      un ? (Xe(), xe = !0) : (zt(), xe = !1);
    }
    function Qo() {
      i.hidden ? un && (It(), gt = !0) : gt && ($t(), gt = !1);
    }
    function ns() {
      un && (It(), _t = !0);
    }
    function es() {
      _t && ($t(), _t = !1);
    }
    function ts(n) {
      n = Zn(n);
      var t = [c.LEFT, c.RIGHT].indexOf(n.keyCode);
      t >= 0 && ee(n, t === 0 ? -1 : 1);
    }
    function is(n) {
      n = Zn(n);
      var t = [c.LEFT, c.RIGHT].indexOf(n.keyCode);
      t >= 0 && (t === 0 ? D.disabled || ee(n, -1) : H.disabled || ee(n, 1));
    }
    function $1(n) {
      n.focus();
    }
    function os(n) {
      n = Zn(n);
      var t = i.activeElement;
      if (Le(t, "data-nav")) {
        var o = [c.LEFT, c.RIGHT, c.ENTER, c.SPACE].indexOf(n.keyCode), s = Number(ot(t, "data-nav"));
        o >= 0 && (o === 0 ? s > 0 && $1(bn[s - 1]) : o === 1 ? s < Ln - 1 && $1(bn[s + 1]) : (oe = s, Ue(s, n)));
      }
    }
    function Zn(n) {
      return n = n || r.event, ce(n) ? n.changedTouches[0] : n;
    }
    function we(n) {
      return n.target || r.event.srcElement;
    }
    function ce(n) {
      return n.type.indexOf("touch") >= 0;
    }
    function I1(n) {
      n.preventDefault ? n.preventDefault() : n.returnValue = !1;
    }
    function z1() {
      return Lo(ko(En.y - se.y, En.x - se.x), ct) === e.axis;
    }
    function A1(n) {
      if (Qn) {
        if (at)
          return;
        Hn();
      }
      sn && un && It(), re = !0, Tn && (Pt(Tn), Tn = null);
      var t = Zn(n);
      J.emit(ce(n) ? "touchStart" : "dragStart", rn(n)), !ce(n) && ["img", "a"].indexOf(C1(we(n))) >= 0 && I1(n), En.x = se.x = t.clientX, En.y = se.y = t.clientY, g && (mt = parseFloat(b.style[te].replace(Un, "")), St(b, "0s"));
    }
    function j1(n) {
      if (re) {
        var t = Zn(n);
        En.x = t.clientX, En.y = t.clientY, g ? Tn || (Tn = On(function() {
          D1(n);
        })) : (Dn === "?" && (Dn = z1()), Dn && (Ve = !0)), (typeof n.cancelable != "boolean" || n.cancelable) && Ve && n.preventDefault();
      }
    }
    function D1(n) {
      if (!Dn) {
        re = !1;
        return;
      }
      if (Pt(Tn), re && (Tn = On(function() {
        D1(n);
      })), Dn === "?" && (Dn = z1()), Dn) {
        !Ve && ce(n) && (Ve = !0);
        try {
          n.type && J.emit(ce(n) ? "touchMove" : "dragMove", rn(n));
        } catch {
        }
        var t = mt, o = ti(En, se);
        if (!$ || m || C)
          t += o, t += "px";
        else {
          var s = X ? o * y * 100 / ((G + L) * E) : o * 100 / (G + L);
          t += s, t += "%";
        }
        b.style[te] = Un + t + me;
      }
    }
    function At(n) {
      if (re) {
        Tn && (Pt(Tn), Tn = null), g && St(b, ""), re = !1;
        var t = Zn(n);
        En.x = t.clientX, En.y = t.clientY;
        var o = ti(En, se);
        if (Math.abs(o)) {
          if (!ce(n)) {
            var s = we(n);
            R(s, { click: function u(v) {
              I1(v), U(s, { click: u });
            } });
          }
          g ? Tn = On(function() {
            if ($ && !C) {
              var u = -o * y / (G + L);
              u = o > 0 ? Math.floor(u) : Math.ceil(u), d += u;
            } else {
              var v = -(mt + o);
              if (v <= 0)
                d = jn;
              else if (v >= V[E - 1])
                d = vn;
              else
                for (var T = 0; T < E && v >= V[T]; )
                  d = T, v > V[T] && o < 0 && (d += 1), T++;
            }
            ui(n, o), J.emit(ce(n) ? "touchEnd" : "dragEnd", rn(n));
          }) : Dn && ee(n, o > 0 ? -1 : 1);
        }
      }
      e.preventScrollOnTouch === "auto" && (Ve = !1), ct && (Dn = "?"), sn && !un && $t();
    }
    function hi() {
      var n = pn || cn;
      n.style.height = V[d + y] - V[d] + "px";
    }
    function H1() {
      var n = m ? (m + L) * x / G : x / y;
      return Math.min(Math.ceil(n), x);
    }
    function _i() {
      if (!(!An || We) && Ln !== ie) {
        var n = ie, t = Ln, o = mn;
        for (ie > Ln && (n = Ln, t = ie, o = gn); n < t; )
          o(bn[n]), n++;
        ie = Ln;
      }
    }
    function rn(n) {
      return {
        container: b,
        slideItems: M,
        navContainer: tn,
        navItems: bn,
        controlsContainer: B,
        hasControls: pt,
        prevButton: D,
        nextButton: H,
        items: y,
        slideBy: he,
        cloneCount: en,
        slideCount: x,
        slideCountNew: E,
        index: d,
        indexCached: Xn,
        displayIndex: Ki(),
        navCurrentIndex: xn,
        navCurrentIndexCached: ve,
        pages: Ln,
        pagesCached: ie,
        sheet: z,
        isOn: ze,
        event: n || {}
      };
    }
    return {
      version: "2.9.4",
      getInfo: rn,
      events: J,
      goTo: Ue,
      play: Uo,
      pause: Xo,
      isOn: ze,
      updateSliderHeight: x1,
      refresh: o1,
      destroy: Zo,
      rebuild: function() {
        return Me(Nt(e, Ni));
      }
    };
  };
  O1({ name: "Opt in page V2", dev: "SKH" });
  class $o {
    constructor() {
      this.device = window.innerWidth < 768 ? "mobile" : "desktop", Z1("body", () => {
        f("head").elements[0].insertAdjacentHTML(
          "afterbegin",
          'link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"'
        ), f("body").elements[0].insertAdjacentHTML(
          "afterbegin",
          /* html */
          `<style class="crs_style_v2">${N1}</style>`
        ), this.init();
      });
    }
    init() {
      q1("exp_opt_in_v2", "variant_1"), this.getRandomNumberForSeatsLeft() || this.generateAndStoreRandomNumberForSeatsLeft(), this.addBlocks(), this.setActions(), this.setEvents(), this.setInnerTxtRandomNumberForSeatsLeft(), this.setSliderStories("#main_block"), this.setSliderStories(".crs_exit_popup"), this.intentPopupTriggers();
    }
    getRandomNumberForSeatsLeft() {
      return sessionStorage.getItem("randomNumber");
    }
    generateAndStoreRandomNumberForSeatsLeft() {
      const i = Math.floor(Math.random() * 5) + 3;
      sessionStorage.setItem("randomNumber", i.toString());
    }
    setInnerTxtRandomNumberForSeatsLeft() {
      Dt(".seats_left_value").then((i) => {
        const r = this.getRandomNumberForSeatsLeft();
        let c = jt(".seats_left_value");
        r && c && c.forEach((l) => {
          l.textContent = r;
        });
      });
    }
    addBlocks() {
      const i = f(".crs_landing").elements[0];
      i && i.nextElementSibling && i.nextElementSibling.tagName.toLowerCase() === "style" && i.nextElementSibling.remove(), i.innerHTML = "", console.log("ROOT", i), i.classList.add("crs_v2"), i.insertAdjacentHTML("afterbegin", eo), i.insertAdjacentHTML("beforeend", to), i.insertAdjacentHTML("beforeend", io), i.insertAdjacentHTML("beforeend", oo), i.insertAdjacentHTML("beforeend", so), this.device === "desktop" && (i.insertAdjacentHTML("beforeend", ro), i.insertAdjacentHTML("beforeend", ao), i.insertAdjacentHTML("beforeend", co), i.insertAdjacentHTML("beforeend", lo)), i.insertAdjacentHTML("beforeend", po), i.insertAdjacentHTML("beforeend", fo), i.insertAdjacentHTML("beforeend", _o), i.insertAdjacentHTML("beforeend", mo), i.insertAdjacentHTML("beforeend", uo), window.location.href.includes("dropservicing.net") && (f("#main_block h1").elements[0].innerHTML = "The 4 steps to start your online business in 2024 and achieve financial freedom goals");
    }
    setActions() {
      function i() {
        jt(".txt_container").forEach((p) => {
          p.addEventListener("scroll", () => r(p));
        });
      }
      function r(a) {
        const p = a.scrollTop, _ = a.scrollHeight, h = a.clientHeight;
        p + h < _ ? (console.log("remove scrolling-up", a), a.classList.remove("scrolling-up")) : (console.log("add scrolling-up", a), a.classList.add("scrolling-up"));
      }
      function c() {
        f(".crs_blockers_popup").elements[0].classList.remove("active"), setTimeout(() => {
          var a, p;
          f(".crs_blockers_content").elements[0].innerHTML = "", (p = (a = f(".sticky_btn_wrapper")) == null ? void 0 : a.elements[0]) == null || p.remove();
        }, 300);
      }
      if (this.device === "desktop" && f("#blokers .blokers_list").elements[0]) {
        const a = Me({
          container: "#blokers .blokers_list",
          slideBy: 1,
          items: 1,
          loop: !1,
          mouseDrag: !0,
          gutter: 24,
          autoHeight: !0,
          controls: !0,
          nav: !1,
          responsive: {
            0: {
              items: 2.2
            },
            1100: {
              items: 2.2
            },
            1290: {
              items: 3.25
            }
          }
        });
        let p = a.getInfo().index;
        a.events.on("indexChanged", function(_) {
          const h = _.index;
          h > p ? A(
            "exp_opt_in_v2__slider__right",
            "Change slides. Right",
            "click",
            "What’s stopping you from achieving your financial and lifestyle goals?"
          ) : h < p && A(
            "exp_opt_in_v2__slider__left",
            "Change slides. Left",
            "click",
            "What’s stopping you from achieving your financial and lifestyle goals?"
          ), p = h;
        });
      }
      if (f("[data-seedetails]").on("click", function(a) {
        const p = a.currentTarget;
        if (!p)
          return;
        f("body").elements[0].style.overflow = "hidden", f(".crs_blockers_popup").elements[0].classList.add("active");
        const _ = p.getAttribute("data-id"), h = f(".crs_blockers_popup").elements[0], S = f(".crs_blockers_content").elements[0], I = ki.find((F) => F.id === parseInt(_ || "")), X = I == null ? void 0 : I.popupContent.title;
        if (A(
          "exp_opt_in_v2__slider__open",
          `See details. ${X}`,
          "click",
          "What’s stopping you from achieving your financial and lifestyle goals?"
        ), window.innerWidth < 768 && (console.log("MOB"), h.insertAdjacentHTML(
          "beforeend",
          '<div class="sticky_btn_wrapper"><button class="cta pop">Yes! Get Access Now!</button></div>'
        )), I) {
          const { icon: F, title: j, text: de, button: fe, video: Se, review: Cn } = (I == null ? void 0 : I.popupContent) || {};
          S.insertAdjacentHTML(
            "beforeend",
            go(
              Cn.reviewerPhoto,
              Cn.reviewerName,
              Cn.reviewText,
              Cn.stars,
              F,
              j,
              de,
              fe,
              Se
            )
          ), Dt(".crs_blockers_content .info_wrapper").then((Ee) => {
            A("exp_opt_in_v2__popup_det__view", "Popup", "view", `Popup. ${X}`);
          }), f(".crs_blockers_popup .cta").on("click", function(Ee) {
            Ee.currentTarget && (A("exp_opt_in_v2__popup_det__cta", "Yes! Get Access Now!", "click", `Popup. ${X}`), c(), setTimeout(() => {
              f(".crs_popup_form").elements[0].classList.add("active"), hn(
                ".crs_popup_form.active .inputs1",
                "exp_opt_in_v2__p_form__1__view",
                "Popup. Access Your Exclusive Online Training. Step 1",
                "Popup"
              );
            }, 800));
          }), i();
        }
      }), f("[data-closeblokers]").on("click", function(a) {
        a.target.closest(".crs_blockers_content") || (c(), f("body").elements[0].style.overflow = "auto");
      }), f(".show_more_block").on("click", function(a) {
        const p = a.currentTarget;
        if (!p)
          return;
        p.classList.toggle("is_open");
        const _ = p.previousElementSibling, h = p.querySelector("span");
        _ && _.classList.toggle("is_open"), h && !p.classList.contains("is_open") ? (h.textContent = "Show more options", R1(jt(".blokers_item")[3], 24)) : h && (h.textContent = "Show less options");
      }), f("[data-closeexit]").on("click", function(a) {
        !a.target.closest(".crs_main_info") && !a.target.closest(".crs_stories") && (f("body").elements[0].style.overflow = "auto", f(".crs_exit_popup").elements[0].classList.remove("active"));
      }), f(".crs_exit_popup .cta").on("click", function(a) {
        A("exp_opt_in_v2__p_exit__yes", "Yes, I want free training & bonuses", "click", "Popup. Exit-intent"), f(".crs_exit_popup").elements[0].classList.remove("active"), hn(
          ".crs_popup_form.active .inputs1",
          "exp_opt_in_v2__p_form__1__view",
          "Popup. Access Your Exclusive Online Training. Step 1",
          "Popup"
        ), setTimeout(() => {
          f(".crs_popup_form").elements[0].classList.add("active");
        }, 800);
      }), f(".no_btn").on("click", function(a) {
        A("exp_opt_in_v2__p_exit__no", "No, I'll miss out", "click", "Popup. Exit-intent"), f("body").elements[0].style.overflow = "auto", f(".crs_exit_popup").elements[0].classList.remove("active");
      }), f(".inputs2").on("click", "li", function() {
        if (!this.classList.contains("selected")) {
          this.closest(".inputs2").querySelector(".selected").classList.remove("selected"), this.classList.add("selected");
          const a = this.getAttribute("data-schedule");
          A(
            "exp_opt_in_v2__p_form__2__time",
            `Input. Time. ${a}`,
            "click",
            "Popup. Access Your Exclusive Online Training. Step 2"
          );
        }
      }), f("form").on("submit", async function(a) {
        a.preventDefault();
        const p = window.location.href.includes("dropservicingblueprint") ? 1 : 2, _ = this.querySelector('input[name="name"]').value, h = this.querySelector('input[name="email"]').value;
        let S = !0;
        if ((!_ || _.trim() === "") && (this.querySelector('input[name="name"]').closest("label").classList.add("error"), S = !1), (!h || h.trim() === "" || !h.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) && (this.querySelector('input[name="email"]').closest("label").classList.add("error"), S = !1), !S)
          return;
        this.closest("#main_block") ? A(
          `exp_optin_fs_button_${this.querySelector(".inputs2").classList.contains("active") ? "step_2" : "step_1"}`,
          "Grab Your FREE Seat Now",
          "click",
          `First screen form ${this.querySelector(".inputs2").classList.contains("active") ? "step 2" : "step 1"}`
        ) : A(
          `exp_opt_in_v2__p_form__${this.querySelector(".inputs2").classList.contains("active") ? "2__select" : "1__get"}`,
          `${this.querySelector(".inputs2").classList.contains("active") ? "Select a Time" : "Get free training"}`,
          "click",
          `${this.querySelector(".inputs2").classList.contains("active") ? "Popup. Access Your Exclusive Online Training. Step 2" : "Popup. Access Your Exclusive Online Training. Step 1"}`
        );
        const I = (/* @__PURE__ */ new Date()).getTimezoneOffset() / 60, X = `GMT${I > 0 ? "-" : "+"}${Math.abs(I)}`;
        if (this.querySelector(".inputs2").classList.contains("active")) {
          const F = f(".inputs2 .selected").elements[0].getAttribute("data-schedule");
          fetch("https://conversionrate.top/api/dropservicing/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              webinarId: window.innerWidth > 768 ? p === 1 ? 74 : 73 : p === 1 ? 75 : 72,
              name: _,
              email: h,
              schedule: F
            })
          }).then((j) => j.json()).then((j) => {
            window.location.href = j.user.thank_you_url;
          });
        } else
          try {
            const F = await fetch("https://conversionrate.top/api/dropservicing/get-schedules", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                webinarId: window.innerWidth > 768 ? p === 1 ? 74 : 73 : p === 1 ? 75 : 72,
                timezone: X
              })
            }).then((j) => j.json());
            console.log(F), console.log(this), this.querySelector(".inputs1").style.display = "none", this.querySelector(".inputs2").innerHTML = ho(F.webinar.schedules, F.webinar.timezone), this.querySelector(".inputs2").classList.add("active"), A(
              "exp_opt_in_v2__p_form__2__view",
              "Popup",
              "view",
              "Popup. Access Your Exclusive Online Training. Step 2"
            );
          } catch (F) {
            console.log(F);
          }
      }), f("form input").on("input", function() {
        this.closest("label").classList.remove("error");
      }), f('input[name="name"]').on("change", function() {
        !!this.closest("#main_block") ? A("exp_optin_fs_name", "Enter your name", "input", "First screen form") : A(
          "exp_opt_in_v2__p_form__1__name",
          "Input. Enter your name",
          "click",
          "Popup. Access Your Exclusive Online Training. Step 1"
        );
      }), f('input[name="email"]').on("change", function() {
        !!this.closest("#main_block") ? A("exp_optin_fs_email", "Enter email address", "input", "First screen form") : A(
          "exp_opt_in_v2__p_form__1__email",
          "Input. Enter email address",
          "click",
          "Popup. Access Your Exclusive Online Training. Step 1"
        );
      }), f('input[name="email"]').on("focus", function() {
        f(".name_label").elements[0].classList.contains("is_hidden") && f(".name_label").elements[0].classList.remove("is_hidden");
      }), f(".question").on("click", function() {
        const a = this.innerText;
        if (this.classList.contains("active")) {
          this.classList.remove("active"), A("exp_optin_faq_close", `Close question. ${a}`, "click", "Frequently asked questions");
          return;
        }
        f(".question.active").removeClass("active"), this.classList.toggle("active"), A("exp_optin_faq_open", `Open question. ${a}`, "click", "Frequently asked questions");
      }), f(".cta.pop").on("click", function() {
        var a, p, _, h;
        f("body").elements[0].style.overflow = "hidden", console.log(".cta.pop"), (p = (a = f(".crs_video_popup")) == null ? void 0 : a.elements[0]) != null && p.classList.contains("active") && f(".crs_video_popup .video *:not(.crs_close)").elements.forEach((S) => S.remove()), (h = (_ = f(".crs_video_popup")) == null ? void 0 : _.elements[0]) == null || h.classList.remove("active"), f(".crs_popup_form").elements[0].classList.add("active"), this.closest("#last_cta") && A("exp_optin_future_cta", "Join the exclusive training", "click", "Your Future Starts Here"), this.closest("#training_for") && A("exp_optin_who_cta", "Join The FREE Training Now", "click", "Who is the Training for"), this.closest("#host_block") && A("exp_optin_host_cta", "Unlock Dylan’s Formula for Free ", "click", "Your Host: Dylan Sydney"), this.closest("#bonus_block") && A("exp_optin_bonuses_cta", "Grab Your FREE Seat Now", "click", "Exclusive Bonuses"), this.closest(".crs_video_popup") && A("exp_optin_popup_review_cta", "Grab Your FREE Seat Now", "click", "Popup after review"), this.closest("#main_block") && A("exp_opt_in_v2__fs__cta", "Yes! Get Access Now!", "click", "First screen"), hn(
          ".crs_popup_form.active",
          "exp_opt_in_v2__p_form__1__view",
          "Popup. Access Your Exclusive Online Training. Step 1",
          "Popup"
        );
      }), f("[data-closeform]").on("click", function(a) {
        !a.target.closest(".bonus") && !a.target.closest(".crs_form") && (f("body").elements[0].style.overflow = "auto", f(".crs_popup_form").elements[0].classList.remove("active"), f(".crs_popup_form .inputs1").elements[0].style.display = "block", f(".crs_popup_form .inputs2").removeClass("active"), sessionStorage.getItem("intentPopupTriggers") || setTimeout(() => {
          sessionStorage.setItem("intentPopupTriggers", "true"), f(".crs_exit_popup").elements[0].classList.add("active"), f("body").elements[0].style.overflow = "hidden", A("exp_opt_in_v2__p_exit__view", "Popup", "view", "Popup. Exit-intent");
        }, 400));
      }), f("#base_review .slide").on("click", function() {
        var h, S;
        const a = this.querySelector(".slide>p").textContent, p = this.getAttribute("data-video"), _ = f(`.video_slide[data-video="${p}"] .video`).elements[0].cloneNode(!0);
        console.log(_, p, "videoBlock"), f(".crs_video_popup .video").elements[0].appendChild(_), (S = (h = f(".crs_video_popup")) == null ? void 0 : h.elements[0]) == null || S.classList.add("active"), A("exp_optin_why_join_review", `Open review. ${a}`, "click", "Why Join This Webinar"), f(".crs_video_popup .wistia_embed").on("click", function() {
          A("exp_optin_popup_review_video", `Play video ${a}`, "click", "Popup after review");
        });
      }), f(".crs_video_popup .crs_close").on("click", function() {
        f(".crs_video_popup .video *:not(.crs_close)").elements.forEach((a) => a.remove()), f(".crs_video_popup").elements[0].classList.remove("active");
      }), this.device === "mobile" && f("#base_review ul").elements[0]) {
        const a = Me({
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
              items: 1.25,
              gutter: 16,
              controls: !1,
              autoHeight: !0
            },
            768: {
              items: 3,
              controls: !0,
              nav: !1
            }
          }
        });
        setTimeout(() => {
          a.getInfo().navItems && a.getInfo().navItems[1].classList.add("tns-nav-near");
        }, 500), a.events.on("indexChanged", function(p) {
          var h, S;
          const _ = p.navItems;
          Array.from(_).forEach((I) => I.classList.remove("tns-nav-near")), (h = _[p.index - 1]) == null || h.classList.add("tns-nav-near"), (S = _[p.index + 1]) == null || S.classList.add("tns-nav-near");
        });
      }
      if (this.device === "desktop") {
        const a = Me({
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
        a.getInfo().slideItems[0].classList.add("tns-current"), a.getInfo().navItems[1].classList.add("tns-nav-near"), a.events.on("indexChanged", function(p) {
          var I, X;
          const _ = p.slideItems, h = p.navItems;
          Array.from(h).forEach((F) => F.classList.remove("tns-nav-near")), Array.from(_).forEach((F) => F.classList.remove("tns-current")), (I = h[p.index - 1]) == null || I.classList.add("tns-nav-near"), (X = h[p.index + 1]) == null || X.classList.add("tns-nav-near"), _[p.index].classList.add("tns-current");
        }), Me({
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
      }
      const l = setInterval(() => {
        window.Wistia && (clearInterval(l), window._wq = window._wq || [], Ht.forEach((a) => {
          window._wq.push({
            id: a.videoId,
            onReady: function(p) {
              p.bind("play", function() {
                p.container.closest(".video_slide") && A(
                  "exp_optin_hear_video",
                  `Video ${p.data.media.name}`,
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
      hn(".crs_video_popup", "exp_optin_popup_review_view", "Popup after review"), hn("#base_review", "exp_optin_why_join_view", "Why Join This Webinar"), hn("#bonus_block", "exp_optin_bonuses_view", "Exclusive Bonuses"), hn("#host_block", "exp_optin_host_view", "Your Host: Dylan Sydney"), hn("#video_block", "exp_optin_hear_view", "Hear from Our Participants"), hn("#training_for", "exp_optin_who_view", "Who is the Training for"), hn("#trust_pilot", "exp_optin_trustscore_view", "TrustScore"), hn("#faq_block", "exp_optin_faq_view", "Frequently asked questions"), hn("#last_cta", "exp_optin_future_view", "Your Future Starts Here"), hn("#main_block .inputs2", "exp_optin_main_form_view_step2", "First screen form");
    }
    setSliderStories(i) {
      f(`${i} .crs_stories_nav span`).on("click", function(r) {
        if (this.classList.contains("active"))
          return;
        f(`${i} .crs_stories_nav span`).removeClass("active"), this.classList.add("active");
        const c = Array.from(this.parentElement.children).indexOf(this), l = f(`${i} .crs_stories_content .crs_story`).elements[c].getBoundingClientRect().left, p = f(`${i} .crs_stories_content`).elements[0].getBoundingClientRect().left - l, _ = f(`${i} .crs_stories_content`).elements[0].scrollLeft;
        f(`${i} .crs_stories_content`).elements[0].scrollTo({
          left: _ - p,
          behavior: "smooth"
        });
      });
    }
    intentPopupTriggers() {
      sessionStorage.getItem("intentPopupTriggers") || this.device === "desktop" && document.addEventListener("mouseout", (i) => {
        !i.relatedTarget && !sessionStorage.getItem("intentPopupTriggers") && !f(".crs_popup_form.active").elements[0] && (console.log("mouseout"), this.showExitPopup());
      });
    }
    showExitPopup() {
      sessionStorage.setItem("intentPopupTriggers", "true"), f("body").elements[0].style.overflow = "hidden", f(".crs_exit_popup").elements[0].classList.add("active"), A("exp_opt_in_v2__p_exit__view", "Popup", "view", "Popup. Exit-intent");
    }
  }
  Dt(".crs_landing").then((e) => {
    new $o();
  });
})();
//# sourceMappingURL=index.js.map
