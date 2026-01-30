-- Add explicit deny-all RLS policies for contact_rate_limits table
-- This table is accessed ONLY via service role from edge functions

-- Add table comment for documentation
COMMENT ON TABLE public.contact_rate_limits IS 'Rate limiting table - accessed via service role only from edge functions. All client-side access is explicitly denied.';

-- Explicit deny policy for SELECT (blocks anon/authenticated users from reading IP addresses)
CREATE POLICY "Deny all client reads"
ON public.contact_rate_limits
FOR SELECT
USING (false);

-- Explicit deny policy for INSERT (only service role can insert)
CREATE POLICY "Deny all client inserts"
ON public.contact_rate_limits
FOR INSERT
WITH CHECK (false);

-- Explicit deny policy for UPDATE (only service role can update)
CREATE POLICY "Deny all client updates"
ON public.contact_rate_limits
FOR UPDATE
USING (false)
WITH CHECK (false);

-- Explicit deny policy for DELETE (only service role can delete)
CREATE POLICY "Deny all client deletes"
ON public.contact_rate_limits
FOR DELETE
USING (false);