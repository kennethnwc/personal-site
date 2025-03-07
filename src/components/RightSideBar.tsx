const sections = ["home", "experience", "projects", "skills"];

export const RightSideBar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="flex gap-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground capitalize"
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
