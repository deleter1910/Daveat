-- Add explicit UPDATE and DELETE policies to prevent unauthorized modifications
-- These policies deny all UPDATE and DELETE operations except for service role

-- Policy to deny UPDATE operations (only service role can bypass RLS)
CREATE POLICY "Deny updates except service role" 
ON public.analytics_events 
FOR UPDATE 
USING (false)
WITH CHECK (false);

-- Policy to deny DELETE operations (only service role can bypass RLS)
CREATE POLICY "Deny deletes except service role" 
ON public.analytics_events 
FOR DELETE 
USING (false);