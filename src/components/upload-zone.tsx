'use client';

import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Loader2, Copy, Check, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { QRCodeSVG } from 'qrcode.react';

export function UploadZone() {
    const [isUploading, setIsUploading] = useState(false);
    const [cloudinaryUrl, setCloudinaryUrl] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    const router = useRouter();

    const handleUpload = async (file: File) => {
        if (file.size > 10 * 1024 * 1024) { // 10MB limit
            toast.error('File size too large. Max 10MB.');
            return;
        }

        setIsUploading(true);
        setCloudinaryUrl(null);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Upload failed');

            const data = await response.json();
            toast.success('Image uploaded successfully!');

            setCloudinaryUrl(data.url);

        } catch (error) {
            console.error(error);
            toast.error('Failed to upload image. Please try again.');
        } finally {
            setIsUploading(false);
        }
    };

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (!file) return;
        await handleUpload(file);
    }, []);

    // Paste handler
    useEffect(() => {
        const handlePaste = (e: ClipboardEvent) => {
            if (e.clipboardData?.files?.length) {
                const file = e.clipboardData.files[0];
                if (file.type.startsWith('image/')) {
                    handleUpload(file);
                }
            }
        };

        window.addEventListener('paste', handlePaste);
        return () => window.removeEventListener('paste', handlePaste);
    }, []);


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'],
        },
        maxFiles: 1,
        disabled: isUploading,
        noClick: false,
        noKeyboard: true
    });

    const copyToClipboard = () => {
        if (!cloudinaryUrl) return;
        navigator.clipboard.writeText(cloudinaryUrl);
        setCopied(true);
        toast.success('URL copied!');
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full max-w-xl mx-auto p-4 space-y-8">
            <div
                {...getRootProps()}
                className={cn(
                    "relative group cursor-pointer overflow-hidden rounded-3xl border-2 border-dashed transition-all duration-300 ease-in-out p-12 text-center",
                    isDragActive ? "border-primary bg-primary/5 scale-[1.02]" : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/30",
                    isUploading && "pointer-events-none opacity-50"
                )}
            >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="relative">
                        <div className={cn(
                            "absolute inset-0 bg-primary/20 rounded-full blur-xl transition-all duration-500",
                            isDragActive ? "scale-150 opacity-100" : "scale-100 opacity-0 group-hover:opacity-50"
                        )} />
                        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-110">
                            {isUploading ? (
                                <Loader2 className="h-10 w-10 text-primary animate-spin" />
                            ) : (
                                <Upload className="h-10 w-10 text-primary" />
                            )}
                        </div>
                    </div>
                    <div className="z-10 space-y-2">
                        <h3 className="text-xl font-bold tracking-tight">
                            {isDragActive ? "Drop it here!" : "Upload an image"}
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                            Drag and drop, or <span className="font-semibold text-foreground">Paste (Ctrl+V)</span> anywhere.
                        </p>
                    </div>
                </div>
            </div>

            {cloudinaryUrl && (
                <div className="animate-in fade-in slide-in-from-top-4 p-6 bg-card rounded-xl border shadow-sm">
                    <div className="flex flex-col gap-8 items-center">
                        <div className="bg-white p-4 rounded-xl shadow-sm border shrink-0">
                            <QRCodeSVG value={cloudinaryUrl} size={150} />
                        </div>
                        <div className="flex-1 w-full space-y-4">
                            <div className="space-y-1">
                                <h4 className="font-medium">Image Uploaded Successfully</h4>
                                <p className="text-sm text-muted-foreground">Here is your direct link.</p>
                            </div>

                            <div className="flex gap-2">
                                <code className="relative flex-1 rounded bg-muted/50 px-[0.8rem] py-[0.6rem] font-mono text-sm border flex items-center overflow-hidden">
                                    <span className="truncate">{cloudinaryUrl}</span>
                                </code>
                                <Button size="icon" variant="outline" onClick={copyToClipboard} className="shrink-0 h-10 w-10">
                                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                </Button>
                                <Button size="icon" variant="ghost" className="shrink-0 h-10 w-10" onClick={() => window.open(cloudinaryUrl, '_blank')}>
                                    <ExternalLink className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
