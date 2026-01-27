-- Drop the existing RESTRICTIVE policy
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.analytics_events;

-- Create a PERMISSIVE policy instead (standard for anonymous tracking)
CREATE POLICY "Allow anonymous inserts"
ON public.analytics_events
FOR INSERT
TO anon, authenticated
WITH CHECK (true);