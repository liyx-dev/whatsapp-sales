console.log("MAIN JS RUNNING");

window.addEventListener("DOMContentLoaded", () => {

  const status = document.getElementById("status");

  if (!status) {
    console.log("STATUS ELEMENT NOT FOUND");
    return;
  }

  status.innerText = "JS is working ✅";

  console.log("CONFIG:", CONFIG);
  console.log("Supabase library:", window.supabase);

  const supabase = window.supabase.createClient(
    CONFIG.supabaseUrl,
    CONFIG.supabaseAnonKey
  );

  console.log("Supabase client created:", supabase);

  status.innerText = "Supabase initialized ✅";

});
