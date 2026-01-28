import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Use environment variable for folder, fallback to 'imagebin'
        const folder = process.env.CLOUDINARY_FOLDER || 'imagebin';

        // Upload to Cloudinary
        const result: any = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                {
                    folder: folder,
                    resource_type: 'image',
                },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(buffer);
        });

        return NextResponse.json({
            public_id: result.public_id,
            url: result.secure_url,
            width: result.width,
            height: result.height,
            format: result.format,
        });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
