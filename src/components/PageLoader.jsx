const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="relative w-16 h-16">
      <span className="absolute inset-0 rounded-full border-2 border-saffron/20" />
      <span className="absolute inset-0 rounded-full border-2 border-saffron border-t-transparent animate-spin" />
    </div>
  </div>
);

export default PageLoader;
