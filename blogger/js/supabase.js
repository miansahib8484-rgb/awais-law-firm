// Supabase Configuration

const SUPABASE_URL = "https://xjtfejxqghqhharucvaj.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqdGZlanhxZ2hxaGhhcnVjdmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzMzMzNDAsImV4cCI6MjEwMDkwOTM0MH0.7biA5N-I13qeEt_2Wf7DKd1x-zoSk-wEjIg5v0wDEEA";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
console.log("supabase.js loaded");
