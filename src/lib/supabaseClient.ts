// This Supabase client will be automatically configured by Dyad
// The environment variables will be injected during the build process
import { createClient } from '@supabase/supabase-js'

// These will be provided by Dyad through environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if environment variables are available
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not found. Make sure Supabase is properly configured.')
}

// Create and export the Supabase client
export const supabase = createClient(
  supabaseUrl || 'https://your-project.supabase.co',
  supabaseAnonKey || 'your-anon-key'
)