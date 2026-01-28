# ImageBin

A beautiful and minimal image hosting website built with Next.js, Tailwind CSS, shadcn/ui, and Cloudinary.

## Features

- **Drag & Drop Upload**: Simple and intuitive interface for uploading images.
- **Paste Support**: Upload images directly from your clipboard (`Ctrl+V`).
- **Instant Links**: Get a direct Cloudinary URL immediately after upload.
- **QR Codes**: Automatically generates a QR code for the uploaded image URL.
- **Dark Mode**: Toggle between light and dark themes.
- **Privacy Focused**: No registration required. Images are public by default but only accessible via their unique URL.

## Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Storage**: [Cloudinary](https://cloudinary.com/)

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine.
- A Cloudinary account.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/imagebin.git
   cd imagebin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env.local` file in the root directory and add your Cloudinary credentials:
   ```env
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   CLOUDINARY_FOLDER=imagebin
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser.

## License

This project is open source and available under the [MIT License](LICENSE).
