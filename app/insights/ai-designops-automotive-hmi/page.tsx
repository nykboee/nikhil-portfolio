        {/* Reference Architecture */}
        <section className="mt-14">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            A Reference Architecture for AI DesignOps
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            A practical implementation needs more than an LLM connected to a
            design tool. It needs controlled knowledge, specialized agents,
            human oversight and a clear delivery layer.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            {architecture.map((layer, index) => (
              <div
                key={layer.tier}
                className={
                  index !== 0
                    ? 'border-t border-border p-6'
                    : 'p-6'
                }
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  
                  {/* Tier Number */}
                  <div className="flex h-10 w-16 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {layer.tier}
                  </div>

                  {/* Tier Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold">
                      {layer.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-base leading-8 text-muted-foreground">
            The architecture creates a controlled flow from enterprise
            requirements and design knowledge through specialized AI agents,
            human governance and finally into production-ready design and
            documentation outputs.
          </p>
        </section>
