-- Quiz Subscribers Table
CREATE TABLE IF NOT EXISTS public.quiz_subscribers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now() NOT NULL,
  first_name text NOT NULL,
  email text NOT NULL,
  quiz_result text NOT NULL,
  answers jsonb NOT NULL DEFAULT '[]'::jsonb,
  source text DEFAULT 'quiz',
  email_sent_at timestamptz,
  CONSTRAINT unique_quiz_email UNIQUE (email)
);

-- Rate Limiting Table for Quiz
CREATE TABLE IF NOT EXISTS public.quiz_rate_limits (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now() NOT NULL,
  ip_address text NOT NULL
);

-- Enable RLS
ALTER TABLE public.quiz_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_rate_limits ENABLE ROW LEVEL SECURITY;

-- Service Role Policies (edge functions use service key)
CREATE POLICY "Service role can manage quiz_subscribers"
  ON public.quiz_subscribers
  FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role can manage quiz_rate_limits"
  ON public.quiz_rate_limits
  FOR ALL
  USING (auth.role() = 'service_role');

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_quiz_email
  ON public.quiz_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_quiz_rate_ip
  ON public.quiz_rate_limits(ip_address, created_at DESC);

-- Auto-cleanup old rate limit records (older than 24 hours)
CREATE OR REPLACE FUNCTION cleanup_quiz_rate_limits()
RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM public.quiz_rate_limits
  WHERE created_at < NOW() - INTERVAL '24 hours';
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trigger_cleanup_quiz_rate_limits
AFTER INSERT ON public.quiz_rate_limits
EXECUTE FUNCTION cleanup_quiz_rate_limits();
