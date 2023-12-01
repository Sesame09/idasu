import React, { useState } from "react";
import { icons, facials, steps, blueprints, works } from './images';
import './Virtual.css';
import Modal from "./ImageModal";



function Virtual() {

  const [blueprintModalIndex, setBlueprintModalIndex] = useState(null);
  const [workModalIndex, setWorkModalIndex] = useState(null);

  const openBlueprintModal = (index) => {
    setBlueprintModalIndex(index);
  };

  const closeBlueprintModal = () => {
    setBlueprintModalIndex(null);
  };

  const openWorkModal = (index) => {
    setWorkModalIndex(index);
  };

  const closeWorkModal = () => {
    setWorkModalIndex(null);
  };


  return (
    <>
    <div className="Virtual">


      <div className='page-title'>
      <img src={icons.sparkleTitle} alt='Sparkle' />
        <div>VIRTUAL ILLUST</div>
        <img src={icons.sparkleTitle} alt='Sparkle' />
      </div>

      <div className="box">
        <p>제 특기인 꼼꼼함으로 보다 완성도 있는 버츄얼 모델을 제작해 드립니다.</p>
        <p>입체감 있는 캐릭터를 위해 세세한 파츠 분리를 진행하고 있으며</p>
        <p>매력 있는 디자인과 캐릭터성을 최우선으로 신경 쓰고 있습니다.</p>
      </div>

      

        <div className="subtitle-box">
          <div className="subtitle-line"></div>
          <div className="subtitle">가격 안내</div>
          <div className="subtitle-line"></div>
        </div>

      <div className="price-box">
        <div className="price">
          <h4>Virtual Illust Price</h4>
          <p>2,400,-</p>
          <p>+비대칭 자세 300,-</p>
          <p>+의상 추가 500,-</p>
          <p>+헤어 추가 300,-</p>
        </div>
        <div className="price">
          <h4>Character Design</h4>
          <p>삼면도 400,-</p>
          <p>디자인 400,-</p>
        </div>
      </div>


      <div className="subtitle-box">
        <div className="subtitle-line"></div>
        <div className="subtitle">기본 표정</div>
        <div className="subtitle-line"></div>
      </div>
      <div className="box">
        <div className="facials">

          <div className="facial">
            <img src={facials.blush} alt="홍조"/>
            <p>홍조</p>
          </div>
          <div className="facial">
            <img src={facials.shadow} alt="우울그림자"/>
            <p>우울그림자</p>
          </div>
          <div className="facial">
            <img src={facials.tears} alt="눈물"/>
            <p>눈물</p>
          </div>
        </div>

      <h4>추가 표정</h4>

        <div className="facials2">

          <div className="facial">
            <img src={facials.heart} alt="하트눈"/>
            <p>하트눈</p>
          </div>
          <div className="facial">
            <img src={facials.twinkling} alt="반짝이"/>
            <p>반짝이</p>
          </div>

        </div>

        <div>
          <p>기본 예시 형태와 동일하게 진행되며 다른 느낌의 표정을 원하시면 미리 문의주세요!</p>
          <p>(다른 모양의 반짝이로 해주세요, 흐르는 눈물 추가해주세요 등)</p>

        </div>
          
        
      </div>


      <div className="subtitle-box">
        <div className="subtitle-line"></div>
        <div className="subtitle">공지 사항</div>
        <div className="subtitle-line"></div>
      </div>
      <div className="box">
        <div className="notice-box">
          <h4>꼭 읽어보시고 신청해 주세요. 숙지하지 않아 생기는 문제는 책임지지 않습니다.</h4>
          <p>
            <img className="sparkle-text" src={icons.sparkleText} alt="sparkle"/>
            <span style={{fontWeight: 'bold', color: '#4B709E' }}>리깅 비포함</span> 작업물입니다.
          </p>
          <p>
            <img className="sparkle-text" src={icons.sparkleText} alt="sparkle"/>
            <span style={{fontWeight: 'bold', color: '#4B709E' }}>저작권이 포함</span>된 금액입니다. 굿즈 제작 및 기타 <span style={{fontWeight: 'bold', color: '#4B709E' }}>상업적 이용이 가능</span>합니다.
          </p>
          <p>
            <img className="sparkle-text" src={icons.sparkleText} alt="sparkle"/>
            <span style={{fontWeight: 'bold', color: '#4B709E' }}>작업 기간은  한 달</span>로 잡고 있으나 <span style={{fontWeight: 'bold', color: '#4B709E' }}>난이도에 따라 변동</span>될 수 있습니다.
          </p>
          <p>
            <img className="sparkle-text" src={icons.sparkleText} alt="sparkle"/>
            완성된 작업물은 최소 4000px, 해상도 300dpi의 psd 파일로 전달됩니다.
          </p>
          <p>
            <img className="sparkle-text" src={icons.sparkleText} alt="sparkle"/>
            명시된 금액은 최솟값이며,
            <span style={{fontWeight: 'bold', color: '#4B709E' }}>작업 난이도에 따라 추가금이 발생</span>할 수 있습니다.
          </p>
          <p>
            <img className="sparkle-text" src={icons.sparkleText} alt="sparkle"/>
            모든 작품은 홍보 및 포트폴리오 목적으로 사용되며 비공개 희망 시 추가 비용이 발생할 수 있습니다.
          </p>
        </div>
        <div className="refund-box">
          <h4>해지 및 환불 정책</h4>
          <p>
            <img className="sparkle-text" src={icons.sparkleText} alt="sparkle"/>
            작업 진행 전 취소 시 5%를 제외한 작업금을 환불해 드립니다.
          </p>
          <p>
            <img className="sparkle-text" src={icons.sparkleText} alt="sparkle"/>
            업무량에 따라 취소 금액이 달라지며, 작업자 사정으로 취소 시 100% 환불해 드립니다.
          </p>
        </div>
      </div>

      <div className="subtitle-box">
          <div className="subtitle-line"></div>
          <div className="subtitle">작업 과정</div>
          <div className="subtitle-line"></div>
      </div>
      <div className="box">
        <div className="step-box">
          <img className='step' src={steps.step} alt="작업과정"/>
          <img className='step-mobile' src={steps.stepMobile} alt="작업과정"/>
          <div className="step-p">※ 총 수정은 최대 5번이며 제 실수나 파츠 분리 수정에 한해서는 지원해 드립니다.</div>
        </div>
      </div>


      <div className="subtitle-box">
          <div className="subtitle-line"></div>
          <div className="subtitle">삼면도</div>
          <div className="subtitle-line"></div>
      </div>
      <div className="box">
        <div className="bluePrintImages">
          <div>
            {blueprints.map((image, index) => (
              <div key={index} className="grid-item">
                <img
                  src={image}
                  alt={`blueprint-${index + 1}`}
                  onClick={() => openBlueprintModal(index)} // 클릭 시 blueprintModalIndex 설정
                  className="grid-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="subtitle-box">
          <div className="subtitle-line"></div>
          <div className="subtitle">작업물</div>
          <div className="subtitle-line"></div>
      </div>
      <div className="box">
        <div className="illusts">
          <div className="grid-container">
            {works.map((image, index) => (
              <div key={index} className="grid-item">
                <img
                  src={image}
                  alt={`work-${index + 1}`}
                  onClick={() => openWorkModal(index)} // 클릭 시 workModalIndex 설정
                  className="grid-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>

    {blueprintModalIndex !== null && (
        <Modal
          images={blueprints}
          index={blueprintModalIndex}
          close={closeBlueprintModal}
        />
      )}
      {workModalIndex !== null && (
        <Modal
          images={works}
          index={workModalIndex}
          close={closeWorkModal}
        />
      )}
    </>
  );
};

export default Virtual;