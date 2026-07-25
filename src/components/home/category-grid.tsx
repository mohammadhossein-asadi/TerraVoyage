"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Waves, Mountain, Building2, Palmtree, Landmark, TreePine, Crown, Compass,
} from "lucide-react";
import { DESTINATION_CATEGORIES } from "@/lib/constants";
import { destinations } from "@/data/destinations";

const iconMap: Record<string, React.ElementType> = {
  Waves, Mountain, Building2, Palmtree, Landmark, TreePine, Crown, Compass,
};

export function CategoryGrid() {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Explore by Category</h2>
          <p className="mt-3 text-foreground/60">Find your perfect type of adventure</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {DESTINATION_CATEGORIES.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Compass;
            const count = destinations.filter((d) => d.categories.includes(cat.id as any)).length;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/destinations?category=${cat.id}`}
                  className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                    style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">{cat.label}</div>
                    <div className="text-xs text-foreground/40 mt-0.5">{count} places</div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
