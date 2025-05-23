'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt="ChatFlow"
                width={32}
                height={32}
                className="relative"
                priority
              />
              <span className="text-xl font-semibold">ChatFlow</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/help" passHref>
              <Button variant="ghost" size="sm" className="text-sm font-medium">Help & FAQ</Button>
            </Link>
            <Link href="https://github.com/JavierGoodall99/whatsappp-reciept-cleaner" target="_blank" passHref>
              <Button variant="ghost" size="sm" className="text-sm font-medium">GitHub</Button>
            </Link>
            
            <SignedIn>
              <Link href="/cleaner" passHref>
                <Button variant="ghost" size="sm" className="text-sm font-medium">My Dashboard</Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm" className="text-sm font-medium">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size="sm" className="ml-2 text-sm font-medium">Get Started</Button>
              </SignUpButton>
            </SignedOut>
          </nav>
          <div className="flex md:hidden">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu} aria-label="Toggle menu" className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
            onClick={toggleMobileMenu}
          />
          {/* Menu */}
          <div className="absolute top-full left-0 right-0 md:hidden animate-fade-in bg-background border-t border-gray-100 shadow-lg z-50">
            <div className="container mx-auto px-4 py-3 space-y-1">
              <Link href="/help" passHref className="block">
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm font-medium">Help & FAQ</Button>
              </Link>
              <Link href="https://github.com/JavierGoodall99/whatsappp-reciept-cleaner" target="_blank" passHref className="block">
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm font-medium">GitHub</Button>
              </Link>
              
              <SignedIn>
                <Link href="/cleaner" passHref className="block">
                  <Button variant="ghost" size="sm" className="w-full justify-start text-sm font-medium">My Dashboard</Button>
                </Link>
              </SignedIn>
              
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm" className="w-full justify-start text-sm font-medium">Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button size="sm" className="w-full justify-start text-sm font-medium mt-2">Get Started</Button>
                </SignUpButton>
              </SignedOut>
            </div>
          </div>
        </>
      )}
    </header>
  );
}