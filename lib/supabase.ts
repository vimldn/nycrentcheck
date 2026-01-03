import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://smuzdfrrptvzknxpvhqh.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtdXpkZnJycHR2emtueHB2aHFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc0Mjc4MDAsImV4cCI6MjA4MzAwMzgwMH0.XJ7Q2DJVD3QQ1C6HX40lSpfsQ_fsUTwbZ0MxSJniKn4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Review = {
  id: string
  bbl: string
  rating: number
  title: string | null
  review: string
  pros: string | null
  cons: string | null
  lived_here: boolean
  years_lived: string | null
  author_name: string
  helpful_count: number
  created_at: string
}
