import { createClient } from "@supabase/supabase-js";

import dotenv from "dotenv";
dotenv.config();

// Replace these values with your Supabase URL and API key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
