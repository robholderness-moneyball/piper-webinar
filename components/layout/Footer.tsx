import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#041E42] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="/logo-white.svg"
            alt="Vintory"
            width={120}
            height={34}
            className="h-8 w-auto"
          />
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Vintory, Inc. All rights
            reserved.
          </p>
          <a
            href="https://vintory.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/40 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
