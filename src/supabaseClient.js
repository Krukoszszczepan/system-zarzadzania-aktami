import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qeaelibdbessixxogrqv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlYWVsaWJkYmVzc2l4eG9ncnF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0MDEwOTQsImV4cCI6MjA1MDk3NzA5NH0.5kcx9vraMUm9pBc7ZBPVJZ0dmfJCgZTWYrj0i4IBftI'
export const supabase = createClient(supabaseUrl, supabaseKey)
