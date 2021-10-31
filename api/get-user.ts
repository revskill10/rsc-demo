import { supabase } from "../src/utils/supabaseClient";

export default async function getUser(req, res) {
  const user = await supabase.auth.user();
  console.log('user', user)
  return res.status(200).json({ user });
}