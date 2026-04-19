console.log("MAIN JS RUNNING");

window.addEventListener("DOMContentLoaded", async () => {

  const status = document.getElementById("status");
  const dbStatus = document.getElementById("dbStatus");

  if (!status) return;

  status.innerText = "Initializing Supabase...";

  const supabase = window.supabase.createClient(
    CONFIG.supabaseUrl,
    CONFIG.supabaseAnonKey
  );

  status.innerText = "Supabase initialized ✅";

  // ==========================
  // TEST DATABASE (UI VERSION)
  // ==========================
  async function testSupabase() {

    const { data, error } = await supabase
      .from("products")
      .select("*");

    if (error) {
      dbStatus.innerText = "❌ Database error: " + error.message;
      dbStatus.className = "mt-2 text-red-500 font-medium";
      return;
    }

    if (!data || data.length === 0) {
      dbStatus.innerText = "⚠️ Products table exists but is EMPTY";
      dbStatus.className = "mt-2 text-yellow-600 font-medium";
      return;
    }

    dbStatus.innerText = `✅ Products loaded: ${data.length}`;
    dbStatus.className = "mt-2 text-green-600 font-medium";
  }

  testSupabase();

});
