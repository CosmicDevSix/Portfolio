import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const BUCKET = "portfolio-images";

const IMAGES = ["project-1.png", "project-2.png", "project-3.png"];

async function main() {
  console.log("Creating storage bucket...");
  const { error: bucketError } = await supabase.storage.createBucket(BUCKET, {
    public: true,
    allowedMimeTypes: ["image/png", "image/jpeg", "image/webp", "image/svg+xml"],
    fileSizeLimit: 5 * 1024 * 1024,
  });

  if (bucketError) {
    if (bucketError.message?.includes("already exists")) {
      console.log(`Bucket "${BUCKET}" already exists, continuing...`);
    } else {
      console.error("Failed to create bucket:", bucketError.message);
      console.log("You may need to create the bucket manually in the Supabase dashboard:");
      console.log(`  1. Go to ${supabaseUrl} → Storage`);
      console.log(`  2. Create a new bucket called "${BUCKET}"`);
      console.log("  3. Set it to Public");
      console.log("  4. Re-run this script");
      process.exit(1);
    }
  } else {
    console.log(`Bucket "${BUCKET}" created successfully`);
  }

  for (const imageName of IMAGES) {
    const filePath = resolve(__dirname, "..", "public", imageName);
    console.log(`Uploading ${imageName}...`);

    try {
      const fileBuffer = readFileSync(filePath);
      const { error: uploadError } = await supabase.storage
        .from(BUCKET)
        .upload(imageName, fileBuffer, {
          contentType: "image/png",
          upsert: true,
        });

      if (uploadError) {
        console.error(`  Failed to upload ${imageName}:`, uploadError.message);
      } else {
        const publicUrl = `${supabaseUrl}/storage/v1/object/public/${BUCKET}/${imageName}`;
        console.log(`  Uploaded: ${publicUrl}`);
      }
    } catch (err) {
      console.error(`  Error reading ${imageName}:`, err.message);
    }
  }

  console.log("\nDone! Your images are now served from Supabase Storage.");
}

main();
