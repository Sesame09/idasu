import { Component } from "react";
import { icons } from './images';
import './ImageModal.css'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        index: this.props.index
    };
  }

  imageChange = (index) => {
    this.setState({
        index: index
    });
  }

  render() {
    const currentImage = this.props.images[this.state.index];
    const length = this.props.images.length;

    return (
        // 배경을 클릭하면 모달이 닫히도록 설정
        <div className="image-background" onClick={() => this.props.close(null)}>
            <div className="image-modal" onClick={(e) => e.stopPropagation()}>
                <div className="image-viewer">
                    <img src={icons.xGray} className='close' alt='닫기' onClick={() => this.props.close(null)} />
                    <img className='nav-button previous' src={icons.previousGray} alt="이전" onClick={() => this.imageChange((this.state.index + length - 1) % length)} />
                    <img className='thumbnail' src={currentImage} alt="이미지 썸네일" />
                    <img className='nav-button next' src={icons.nextGray} alt="다음" onClick={() => this.imageChange((this.state.index + 1) % length)} />
                </div>
            </div>
        </div>
    );
  }
}

export default Modal;
