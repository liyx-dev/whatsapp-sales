console.log("MAIN JS RUNNING");

// UI update
document.getElementById("status").innerText = "Testing Supabase connection...";

// Check CONFIG
console.log("CONFIG:", CONFIG);

// Check Supabase library
console.log("Supabase library:", window.supabase);

// Create Supabase client
const supabase = window.supabase.createClient(
  CONFIG.supabaseUrl,
  CONFIG.supabaseAnonKey
);

console.log("Supabase client created:", supabase);

// Final UI update
document.getElementById("status").innerText = "Supabase client created ✅";
