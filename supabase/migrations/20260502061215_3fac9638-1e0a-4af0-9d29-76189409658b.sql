CREATE TABLE public.callback_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  location TEXT,
  message TEXT,
  handled BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.callback_requests ENABLE ROW LEVEL SECURITY;

-- Anyone can insert (public form)
CREATE POLICY "Anyone can submit a callback request"
ON public.callback_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(name) BETWEEN 1 AND 120
  AND length(email) BETWEEN 3 AND 254
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (phone IS NULL OR length(phone) <= 40)
  AND (location IS NULL OR length(location) <= 120)
  AND (message IS NULL OR length(message) <= 2000)
);

-- Only authenticated users can read (you'll log in via Cloud)
CREATE POLICY "Authenticated users can view callback requests"
ON public.callback_requests
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can update callback requests"
ON public.callback_requests
FOR UPDATE
TO authenticated
USING (true);

CREATE INDEX idx_callback_requests_created_at ON public.callback_requests(created_at DESC);