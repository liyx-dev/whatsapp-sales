const supabase = window.supabase.createClient(
  CONFIG.supabaseUrl,
  CONFIG.supabaseAnonKey
);

document.getElementById("status").textContent = "Supabase connected successfully ✅";

console.log("Supabase connected:", supabase);
