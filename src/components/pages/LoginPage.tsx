import Logo from '@/assets/logo/horizontal-md.svg?react';
import { tm } from '@/utils/tw-merge';
import LabelInput from '../atoms/LabelInput';
import Button from '../atoms/Button';
import LinkButton from '../atoms/LinkButton';

function LoginPage() {
  return (
    <section
      className={tm(
        'layout',
        'px-custom-6 pt-[145px] flex flex-col items-center'
      )}
    >
      <h2 className="sr-only">로그인</h2>
      <Logo className="mb-[100px] flex-0" aria-label="가봄" />
      <form className="flex flex-col justify-between w-full flex-1">
        <fieldset>
          <LabelInput
            label="아이디"
            type="email"
            containerClassName="mb-custom-8"
            placeholder="example@email.com"
          />
          <LabelInput
            label="비밀번호"
            type="password"
            containerClassName=""
            placeholder="8문자 이상, 특수 문자 포함"
          />
        </fieldset>
        <div role="group">
          <Button
            label="로그인"
            color="tertiary"
            isFilled={true}
            customClass="h-[48px] mb-custom-4"
          />
          <LinkButton
            label="회원가입하기"
            pathName="signup"
            customClass="m-auto"
          />
        </div>
      </form>
    </section>
  );
}

export default LoginPage;
