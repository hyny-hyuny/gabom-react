import supabase from './supabase';

export async function getUser() {
  try {
    const response = await supabase.auth.getUser();

    if (response.error) throw new Error();

    return response.data.user;
    
  } catch (error) {
    console.error(error);
  }
}
