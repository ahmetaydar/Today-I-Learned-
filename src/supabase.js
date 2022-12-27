import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ghubskschxacdvmsowyg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdodWJza3NjaHhhY2R2bXNvd3lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0NTE4MTQsImV4cCI6MTk4NzAyNzgxNH0.bGDC-VD91RJiUsuQkbBQF1HIEpMAMdLbHd1gAC8r3Gc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
