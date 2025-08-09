import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    console.log('📩 Incoming contact form data:', { name, email, subject, message });

    if (!name || !email || !subject || !message) {
      console.error('❌ Missing required fields');
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const { data, error } = await supabase.from('contacts').insert([{ name, email, subject, message }]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('✅ Inserted data:', data);

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
