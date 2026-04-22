export const PageHeader = ({ eyebrow, script, title, intro }) => {
    return (<section className="pt-36 md:pt-44 pb-16 md:pb-20 bg-cream">
      <div className="container-tight max-w-3xl">
        {script && <p className="font-script text-3xl text-accent">{script}</p>}
        {eyebrow && <p className="eyebrow mt-3">{eyebrow}</p>}
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] mt-4">{title}</h1>
        {intro && <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl">{intro}</p>}
      </div>
    </section>);
};
