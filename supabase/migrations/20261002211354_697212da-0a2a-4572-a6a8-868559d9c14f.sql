DROP POLICY "Block uploads to testimonials" ON storage.objects;
DROP POLICY "Block updates to testimonials" ON storage.objects;
DROP POLICY "Block deletes from testimonials" ON storage.objects;

CREATE POLICY "Block uploads to testimonials"
ON storage.objects FOR INSERT TO anon, authenticated
WITH CHECK (bucket_id <> 'testimonials'::text AND owner_id = (select auth.uid()::text));

CREATE POLICY "Block updates to testimonials"
ON storage.objects FOR UPDATE TO anon, authenticated
USING (bucket_id <> 'testimonials'::text AND owner_id = (select auth.uid()::text))
WITH CHECK (bucket_id <> 'testimonials'::text AND owner_id = (select auth.uid()::text));

CREATE POLICY "Block deletes from testimonials"
ON storage.objects FOR DELETE TO anon, authenticated
USING (bucket_id <> 'testimonials'::text AND owner_id = (select auth.uid()::text));