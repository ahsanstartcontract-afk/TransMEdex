import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import IconComponent from '@/components/IconComponent.jsx';

function ServiceCard({ title, description, icon, link, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={link}>
        <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 group">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <IconComponent name={icon} className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">{description}</p>
            <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
              Learn more
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export default ServiceCard;