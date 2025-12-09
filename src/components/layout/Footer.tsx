"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2 text-gray-700 font-semibold">
          <span>CodeSick</span>
          <span className="text-gray-400">•</span>
          <span>AI-powered business solutions</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <a className="hover:text-blue-600" href="tel:+66636455571">
            Phone: +66 63 645 5571
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a className="hover:text-blue-600" href="mailto:contact@codesick.com">
            Email: contact@codesick.com
          </a>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-4 text-xs text-gray-500 flex items-center justify-between">
          <span>
            © {new Date().getFullYear()} CodeSick. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <Link href="#features" className="hover:text-gray-700">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-gray-700">
              Pricing
            </Link>
            <Link href="#whyus" className="hover:text-gray-700">
              Why Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
