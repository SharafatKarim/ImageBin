export default function PrivacyPage() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose dark:prose-invert">
                <p className="mb-4">
                    Your privacy is important to us. This policy explains how we handle your data.
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">1. Data Collection</h2>
                <p className="mb-4">
                    We collect the images you upload and basic access logs. We do not require account registration or personal information.
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">2. Public Images</h2>
                <p className="mb-4">
                    Uploaded images are stored publicly. Anyone with the URL can access them. They also appear in our public gallery.
                    Do not upload private or sensitive information.
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies</h2>
                <p className="mb-4">
                    We may use essential cookies for site functionality.
                </p>
            </div>
        </div>
    );
}
