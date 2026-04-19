  console.log("MAIN JS RUNNING");

window.addEventListener("DOMContentLoaded", async () => {

  const status = document.getElementById("status");
  const dbStatus = document.getElementById("dbStatus");
  const storageStatus = document.getElementById("storageStatus");

  if (!status) return;

  // ==========================
  // SUPABASE INIT
  // ==========================
  status.innerText = "Initializing Supabase...";

  const supabase = window.supabase.createClient(
    CONFIG.supabaseUrl,
    CONFIG.supabaseAnonKey
  );

  status.innerText = "Supabase initialized ✅";

  // ==========================
  // TEST SUPABASE DATABASE
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

  // ==========================
  // TEST CLOUDLFARE R2 STORAGE
  // ==========================
  function testR2() {
    const testUrl = CONFIG.cloudflareR2BaseUrl + "/test-image.jpg";

    fetch(testUrl)
      .then(res => {
        if (res.ok) {
          storageStatus.innerText = "✅ Storage (R2) is reachable";
          storageStatus.className = "mt-2 text-green-600 font-medium";
        } else {
          storageStatus.innerText = "⚠️ Storage URL not accessible";
          storageStatus.className = "mt-2 text-yellow-600 font-medium";
        }
      })
      .catch(() => {
        storageStatus.innerText = "❌ Storage connection failed";
        storageStatus.className = "mt-2 text-red-500 font-medium";
      });
  }

  testR2();

});

