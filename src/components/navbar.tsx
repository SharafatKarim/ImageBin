import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Image as ImageIcon } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between mx-auto md:px-0 px-2">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                            <ImageIcon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="hidden leading-7 font-bold sm:inline-block">
                            ImageBin
                        </span>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-4 text-sm font-medium text-muted-foreground">
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                    </div>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}
