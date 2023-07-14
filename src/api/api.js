
import { createClient } from '@supabase/supabase-js'


const supabase = createClient('https://mbatjouyzuanbuijmtzd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iYXRqb3V5enVhbmJ1aWptdHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwMDY5MjAsImV4cCI6MjAwNDU4MjkyMH0.mAEv0YdJ1gGd8KPSPt50d8iB7C24XR3cZNQiddJ6j2Y')

export default supabase;