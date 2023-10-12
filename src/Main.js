import React from "react";
import './Main.css';
import { icons, main } from './images';



function Main() {
  return (
    <>
    <div>

      <div>
        <img className="main-img" src={main.mainImg} alt='MainImg'/>
        <img className="mobile-main-img" src={main.mobileMainImg} alt="MainImg"/>
      </div>


      <div className="intro-box">
        <div className="IDASU">IDASU</div>
        <div className="intro">안녕하세요. 일러스트레이터 이다수입니다.<br/>버츄얼 모델, 게임 원화, 일러스트 전반을 작업합니다.</div>
      </div>

      <div className="link-icons-helper">
      <div className="link-icons">
          <a href="mailto:idasu1143@gmail.com" target="_blank" rel="noreferrer noopener">
            <img src={icons.mailIcon} alt='mail' className="link-icon"/>
          </a>
          <a href="https://twitter.com/2dasu_" target="_blank" rel="noreferrer noopener">
            <img src={icons.twitterIcon} alt='twitter' className="link-icon"/>
          </a>
          <a href="https://www.pixiv.net/users/5238342" target="_blank" rel="noreferrer noopener">
            <img src={icons.pixivIcon} alt='pixiv' className="link-icon"/>
          </a>
      </div>
      </div>


      <div className="gray-bar"></div>

      <div className="content">

          <div className="content-box">

            <div className="content-title">
              <div className="line"></div>
              <div className="title">NOTICE</div>
            </div>
            <div className="blank"></div>
            <div className="contents">
              <p className="bold">문의 시 아래 내용을 포함해 주시기 바랍니다.</p>
              <p><img className="sparkle-text" src={icons.sparkleText} alt="sparkle"/>의뢰자님 정보</p>
              <p><img className="sparkle-text" src={icons.sparkleText} alt="sparkle"/>의뢰 내용 (버츄얼 일러스트 신청 시 상세한 캐릭터 설명 부탁드립니다.)</p>
              <p><img className="sparkle-text" src={icons.sparkleText} alt="sparkle"/>마감일</p>
              <p><img className="sparkle-text" src={icons.sparkleText} alt="sparkle"/>예산</p>
              <p><img className="sparkle-text" src={icons.sparkleText} alt="sparkle"/>작업 공개일</p>
              <p className="content-mail"><img className="mail-icon" src={icons.mailIconSmall} alt="mail"/>idasu1143@gmail.com</p>
            </div>
            
          </div>


          <div className="content-box">

            <div className="content-title">
              <div className="line"></div>
              <div className="title">WORK</div>
            </div>
            <div className="blank"></div>
            <div className="contents">
              <p>웹소설〈 대한민국 슈퍼 리치 〉 표지 작업</p>
              <p>웹소설〈 주식 재벌 박태준 〉 표지 작업</p>
              <p>웹소설〈 무한자원 개미군단 〉 표지 작업</p>
              <p>비공개 웹소설 표지 작업 다수</p>
              <p>비공개 게임 일러스트 작업 다수</p>
              <p>버츄얼 모델 일러스트 작업 다수</p>
            </div>
          </div>


          <div className="content-box">

            <div className="content-title">
              <div className="line"></div>
              <div className="title">AWARD</div>
            </div>
            <div className="blank"></div>
            <div className="contents">
              <p>승리의 여신 니케 스킨 공모전 1위</p>
              <p>PUBG 배틀 그라운드 스킨 공모전 2위</p>
              <p>마피아42 스킨 공모전 우수상</p>
              <p>今三国志 일러스트 공모전 입상</p>
              <p>PUBG 배틀 그라운드 일러스트 공모전 인기상</p>
              <p>그 외 공모전 수상 다수</p>
            </div>
          </div>
      
      </div>


    </div>
    </>
  );
};

export default Main;