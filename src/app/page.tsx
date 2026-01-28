import { UploadZone } from '@/components/upload-zone';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 py-20">
      <div className="w-full max-w-4xl space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Share Images Simply
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A beautiful, minimal way to host and share your images.
            Drag, drop, and get a link instantly.
          </p>
        </div>
        <UploadZone />
      </div>
    </div>
  );
}
