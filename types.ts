export enum ProjectType {
  RESIDENCIAL = 'Residencial',
  COMERCIAL = 'Comercial',
  USO_MIXTO = 'Uso Mixto',
  REMODELACION = 'Remodelación',
  OTRO = 'Otro'
}

export enum ProjectStage {
  PLANEACION = 'Estoy en planeación, necesito orientación',
  TERRENO = 'Tengo terreno, falta proyecto',
  PROYECTO = 'Tengo proyecto, falta construir',
  REMODELAR = 'Quiero remodelar',
  OTRO = 'Otro'
}

export enum ProjectTimeline {
  IMMEDIATE = 'De inmediato (0–1 mes)',
  SHORT = 'En los próximos 1–3 meses',
  MEDIUM = 'En los próximos 3–6 meses',
  LONG = 'En 6 meses o más'
}

export enum BudgetRange {
  LOW = '$1.5M – $3M MXN',
  MEDIUM = '$3M – $6M MXN',
  HIGH = '$6M – $10M MXN',
  PREMIUM = 'Más de $10M MXN'
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  projectType: ProjectType | '';
  timeline: ProjectTimeline; 
  budget: BudgetRange;
  message: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: any;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}