export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Linata Deshmukh
        </p>
        <p className="text-gray-600 text-sm">
          Data Analyst · Data Engineer · Boston, MA
        </p>
      </div>
    </footer>
  );
}
