import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import IconComponent from '@/components/IconComponent.jsx';

function SpecialtyCard({ title, description, icon, link, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={link}>
        <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 bg-card group">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <IconComponent name={icon} className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">{description}</p>
            <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all duration-300">
              View details
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export default SpecialtyCard;