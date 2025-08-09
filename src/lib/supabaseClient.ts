import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('🔍 Loaded Supabase URL:', supabaseUrl);
console.log('🔍 Loaded Supabase Key:', supabaseKey ? 'Exists' : 'Missing');

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables!');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
