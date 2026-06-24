import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

function TestimonialCard({ quote, author, role, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="break-inside-avoid mb-6"
    >
      <Card className="border-border/50 bg-card">
        <CardContent className="p-6">
          <Quote className="w-8 h-8 text-primary/20 mb-4" />
          <p className="text-foreground leading-relaxed mb-4 italic">"{quote}"</p>
          <div className="border-t border-border pt-4">
            <p className="font-semibold text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default TestimonialCard;