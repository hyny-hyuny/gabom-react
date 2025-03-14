import supabase from './supabase';
import { v4 } from 'uuid';

export async function uploadFile(img: File) {
  try {
    const id = v4();
    const path = `profile_${id}.png`;

    const { data, error } = await supabase.storage
      .from('profile')
      .upload(path, img);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error(error);
  }
}

export function getFileUrl(path: string) {
  const { data } = supabase.storage.from('profile').getPublicUrl(path);

  return data.publicUrl;
}

export async function uploadFileAndGetUrl(img: File) {
  try {
    const result = await uploadFile(img);

    if (!result) throw new Error
    const url = getFileUrl(result.path);

    return url;
  } catch (error) {
    console.error(error);
  }
}
