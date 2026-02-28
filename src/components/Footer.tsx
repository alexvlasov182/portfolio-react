'use client';

export default function Footer() {
  return (
    <footer className="px-6 md:px-20 py-6 text-center text-gray-500 dark:text-gray-400">
      <p>&copy; {new Date().getFullYear()} Oleksandr Vlasov. All rights reserved.</p>
    </footer>
  );
}
