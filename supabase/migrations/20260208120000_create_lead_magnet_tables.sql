-- Lead Magnet Subscribers Table
CREATE TABLE IF NOT EXISTS public.lead_magnet_subscribers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now() NOT NULL,
  first_name text NOT NULL,
  email text NOT NULL,
  source text DEFAULT 'homepage_hero',
  email_sent_at timestamptz,
  CONSTRAINT unique_lead_email UNIQUE (email)
);

-- Rate Limiting Table for Lead Magnet
CREATE TABLE IF NOT EXISTS public.lead_magnet_rate_limits (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now() NOT NULL,
  ip_address text NOT NULL
);

-- Enable RLS
ALTER TABLE public.lead_magnet_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_magnet_rate_limits ENABLE ROW LEVEL SECURITY;

-- Service Role Policies (edge functions use service key)
CREATE POLICY "Service role can manage lead_magnet_subscribers"
  ON public.lead_magnet_subscribers
  FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role can manage lead_magnet_rate_limits"
  ON public.lead_magnet_rate_limits
  FOR ALL
  USING (auth.role() = 'service_role');

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_lead_magnet_email
  ON public.lead_magnet_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_lead_magnet_rate_ip
  ON public.lead_magnet_rate_limits(ip_address, created_at DESC);

-- Auto-cleanup old rate limit records (older than 24 hours)
CREATE OR REPLACE FUNCTION cleanup_lead_magnet_rate_limits()
RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM public.lead_magnet_rate_limits
  WHERE created_at < NOW() - INTERVAL '24 hours';
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trigger_cleanup_lead_magnet_rate_limits
AFTER INSERT ON public.lead_magnet_rate_limits
EXECUTE FUNCTION cleanup_lead_magnet_rate_limits();
