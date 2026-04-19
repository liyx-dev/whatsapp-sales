console.log("MAIN JS RUNNING");

// 1. Update UI immediately
const status = document.getElementById("status");

if (status) {
  status.innerText = "JS is working ✅";
} else {
  console.log("STATUS ELEMENT NOT FOUND");
}

// 2. Check CONFIG
console.log("CONFIG:", CONFIG);

// 3. Check Supabase library
console.log("Supabase library:", window.supabase);

// 4. Create Supabase client
const supabase = window.supabase.createClient(
  CONFIG.supabaseUrl,
  CONFIG.supabaseAnonKey
);

console.log("Supabase client created:", supabase);

// 5. Final UI update
if (status) {
  status.innerText = "Supabase initialized ✅";
}
