export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
          <div className="absolute inset-0 rounded-full border-4 border-[#ff4c00] border-t-transparent animate-spin" />
        </div>
        <span className="text-sm font-medium text-gray-600 tracking-wide">Loading...</span>
      </div>
    </div>
  );
}
