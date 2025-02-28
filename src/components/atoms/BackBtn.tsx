import { useNavigate } from 'react-router';
import Back from '../../assets/back.svg?react';

function BackBtn() {
  const navigate = useNavigate();

  const handleBack = () => {
    void navigate(-1);
    console.log('back click');
  };

  return (
    <button
      type="button"
      className="absolute left-4 cursor-pointer"
      onClick={handleBack}
    >
      <span className="sr-only">뒤로 가기</span>
      <Back aria-hidden="true" />
    </button>
  );
}

export default BackBtn;
