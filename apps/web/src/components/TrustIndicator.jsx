import React from 'react';
import { motion } from 'framer-motion';

function TrustIndicator({ value, label, icon: Icon, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-bg flex items-center justify-center">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-4xl font-bold text-foreground mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {value}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
}

export default TrustIndicator;