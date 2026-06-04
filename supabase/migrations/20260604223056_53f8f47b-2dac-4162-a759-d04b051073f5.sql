-- Public read remains (bucket is public). Restrict writes/updates/deletes to service_role only.
CREATE POLICY "Public can read testimonials"
ON storage.objects FOR SELECT
USING (bucket_id = 'testimonials');

CREATE POLICY "Block uploads to testimonials"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id <> 'testimonials');

CREATE POLICY "Block updates to testimonials"
ON storage.objects FOR UPDATE
TO anon, authenticated
USING (bucket_id <> 'testimonials');

CREATE POLICY "Block deletes from testimonials"
ON storage.objects FOR DELETE
TO anon, authenticated
USING (bucket_id <> 'testimonials');