const supabase = window.supabase.createClient(
  CONFIG.supabaseUrl,
  CONFIG.supabaseAnonKey
);

console.log("Supabase connected:", supabase);
