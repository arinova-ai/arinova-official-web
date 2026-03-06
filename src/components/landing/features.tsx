import { MessageCircle, Store, Code2, Gamepad2 } from 'lucide-react';

type FeaturesDict = {
  title: string;
  items: { title: string; description: string }[];
};

const icons = [MessageCircle, Store, Code2, Gamepad2];

export function Features({ dict }: { dict: FeaturesDict }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.title}
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dict.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="rounded-xl border bg-fd-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-950">
                  <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-fd-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
