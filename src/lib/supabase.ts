import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://hciqvcspehfitlgclhud.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjaXF2Y3NwZWhmaXRsZ2NsaHVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NTM4MTgsImV4cCI6MjA5MDAyOTgxOH0._yECMfOkyIMB2Fz85Fa5YIjMAkhdJnsTUG_d2QtjeV4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
