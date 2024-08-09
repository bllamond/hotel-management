
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://dqdpqzuezbvuywfwesjw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxZHBxenVlemJ2dXl3Zndlc2p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5NTI4MDEsImV4cCI6MjAzODUyODgwMX0.RSgonG2dz1fGDBoA607QxJtz9wxqQvoCd0xittjPBVQ'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;