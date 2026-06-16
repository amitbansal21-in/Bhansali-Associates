export interface ProcessStep {
  id: string;
  stepNumber: string; // e.g. "01", "02"
  title: string;
  description: string;
  iconName: "discovery" | "review" | "planning" | "execution" | "support";
}

export const PROCESS_CONFIG = {
  sectionLabel: "OUR PROCESS",
  sectionTitle: "A Disciplined Advisory Process Built Around Clarity & Compliance",
  supportingText: "Every engagement follows a structured methodology designed to reduce uncertainty, improve decision-making and strengthen long-term compliance."
};

export const PROCESS_STEPS_DATA: ProcessStep[] = [
  {
    id: "process-step-1",
    stepNumber: "01",
    title: "Discovery & Understanding",
    description: "We begin by analyzing your business structure, operational challenges, and growth objectives to align our advisory strategy.",
    iconName: "discovery"
  },
  {
    id: "process-step-2",
    stepNumber: "02",
    title: "Financial & Compliance Review",
    description: "Our team conducts a thorough audit of your current tax logs, internal financial controls, and statutory filing history.",
    iconName: "review"
  },
  {
    id: "process-step-3",
    stepNumber: "03",
    title: "Strategic Planning",
    description: "We build a structured plan covering tax optimization, compliance schedules, and working capital solutions tailored for your business.",
    iconName: "planning"
  },
  {
    id: "process-step-4",
    stepNumber: "04",
    title: "Implementation & Execution",
    description: "We deploy the strategy, managing company registrations, GST reconciliations, and direct tax assessments with meticulous precision.",
    iconName: "execution"
  },
  {
    id: "process-step-5",
    stepNumber: "05",
    title: "Continuous Advisory & Support",
    description: "We provide ongoing financial monitoring, virtual CFO reporting, and proactive regulatory compliance tracking to secure peace of mind.",
    iconName: "support"
  }
];
