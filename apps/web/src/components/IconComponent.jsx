import React from 'react';
import { 
  FileText, 
  RefreshCw, 
  Award, 
  Code, 
  Database, 
  ClipboardCheck, 
  TrendingUp,
  Stethoscope,
  Heart,
  Activity,
  Microscope,
  Brain,
  Bone,
  Users,
  Dumbbell,
  Pill
} from 'lucide-react';

const iconMap = {
  'medical-billing': FileText,
  'rcm': RefreshCw,
  'credentialing': Award,
  'medical-coding': Code,
  'clearinghouse': Database,
  'medical-audit': ClipboardCheck,
  'healthcare-seo': TrendingUp,
  'urology': Stethoscope,
  'cardiology': Heart,
  'urgent-care': Activity,
  'laboratory-billing': Microscope,
  'behavioral-health': Brain,
  'orthopedics': Bone,
  'aba-therapy': Users,
  'sports-medicine': Dumbbell,
  'pme': Pill
};

function IconComponent({ name, className = "w-6 h-6" }) {
  const Icon = iconMap[name] || FileText;
  return <Icon className={className} />;
}

export default IconComponent;