const stats = [
  { value: "5,000+", label: "Happy customers" },
  { value: "98%", label: "Customer satisfaction" },
  { value: "25 Years", label: "Warranty coverage" },
  { value: "$2M+", label: "Savings generated" }
];

export const Stats = () => {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-lg sm:text-xl text-primary-foreground/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
