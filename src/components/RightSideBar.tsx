const sections = ["home", "experience", "projects", "skills"];

export const RightSideBar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/30 backdrop-blur-xl">
      <div className="container flex h-16 items-center">
        <div className="flex gap-8">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:text-glow before:absolute before:-bottom-1 before:left-0 before:h-px before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full capitalize"
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
