interface KitHeaderProps {
  name: string;
  description?: string;
}

export function KitHeader({ name, description }: KitHeaderProps) {
  return (
    <div className="mb-12 border-b border-border/40 pb-8 pt-12">
      <h1 className="text-center text-5xl font-bold tracking-tight sm:text-6xl">
        {name}
      </h1>
      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
