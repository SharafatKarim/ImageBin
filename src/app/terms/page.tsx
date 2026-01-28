export default function TermsPage() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
            <div className="prose dark:prose-invert">
                <p className="mb-4">
                    Welcome to ImageBin. By using our website, you agree to these terms.
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">1. Usage</h2>
                <p className="mb-4">
                    ImageBin is a free service for hosting images. You may not upload content that is illegal, offensive, or violates copyright laws.
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">2. Content</h2>
                <p className="mb-4">
                    You retain ownership of the images you upload. However, by uploading, you grant us permission to host and display them.
                    Please note that uploaded images are public by default and can be viewed by anyone with the link or via our browse page.
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">3. Liability</h2>
                <p className="mb-4">
                    We are not responsible for any data loss or damages resulting from the use of this service. Use at your own risk.
                </p>
            </div>
        </div>
    );
}
