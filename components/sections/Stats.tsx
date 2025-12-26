export function Stats() {
  const stats = [
    { value: "3m+", label: "Capital raised by brands we helped out" },
    { value: "289", label: "Brands launched through our creative process" },
    { value: "56", label: "Awards recognizing our branding excellence" },
    { value: "97%", label: "Client satisfaction rate across all delivered work" },
  ]

  return (
    <section className="py-24 container mx-auto px-6 border-y border-border">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-normal">{stat.value}</span>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
