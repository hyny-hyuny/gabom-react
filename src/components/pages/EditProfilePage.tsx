import Button from '../atoms/Button';
import ImageField from '../atoms/ImageField';
import IconPencil from '../../assets/pencil.svg?react';
import LabelInput from '../atoms/LabelInput';
import BirthInput from '../molecules/BirthInput';
import { ChangeEvent, useState } from 'react';
import supabase from '@/lib/supabase';
import { uploadFileAndGetUrl } from '@/lib/storage';

function EditProfilePage() {
  const userInfo = {
    id: 'hlrjgifdfnuibjk',
    name: '조수현',
    email: 'soo@gmail.com',
    birth: '19960622',
    profileImg: '',
  };

  const [name, setName] = useState<string>(userInfo.name);
  const [email, setEmail] = useState<string>(userInfo.email);
  const [birth, setBirth] = useState<string>(userInfo.birth);
  const [profileImg, setProfileImg] = useState<string>(userInfo.profileImg);

  const saveNewData = async () => {
    await supabase
      .from('user')
      .update({ name, email, birth, profile_img: profileImg })
      .eq('id', userInfo.id);
  };

  const handleClickSave = () => {
    console.log(name, email, birth);
    void saveNewData();
  };

  const handleEditProfileImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const resultUrl = await uploadFileAndGetUrl(file);

    if (!resultUrl) {
      console.error();
      return;
    }

    setProfileImg(resultUrl);
  };

  return (
    <section className="flex flex-col gap-6 items-center p-4">
      <div className="relative">
        <ImageField
          width={'4rem'}
          height={'4rem'}
          alt={'프로필 사진'}
          src={profileImg}
          className="border-2 border-primary relative"
        />
        <label
          htmlFor="edit-profile-img"
          className="flex absolute bottom-1 right-1 self-baseline bg-white text-blue-500 p-1 min-w-8 min-h-8 rounded-xs items-center justify-center"
        >
          <span className="sr-only">프로필 이미지 업로더</span>
          <input
            type="file"
            className="hidden"
            id={'edit-profile-img'}
            onChange={handleEditProfileImg}
            value={''}
          />
          <IconPencil className="min-w-5 min-h-5" width={20} height={20} />
        </label>
      </div>
      <LabelInput
        type="text"
        label={'닉네임'}
        value={name}
        onChange={(e) => setName(e.target.value)}
        containerClassName="w-full"
        placeholder="hi"
      />
      <LabelInput
        type="email"
        label={'이메일'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        containerClassName="w-full"
        placeholder="hi"
      />
      <BirthInput birth="19960622" setBirth={setBirth} />
      <Button label="저장 하기" onClick={handleClickSave} color="primary" />
    </section>
  );
}

export default EditProfilePage;
