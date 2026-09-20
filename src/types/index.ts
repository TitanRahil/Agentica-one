export interface CaseStudy {
  id: string;
  clientType: string;
  industry: string;
  timeframe: string;
  headline: string;
  challenge: string;
  architecture: {
    title: string;
    description: string;
    nodes: string[];
  };
  metrics: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface SolutionBlueprint {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
  timeframe: string;
  techStack: string[];
  inputStreams: string[];
  reasoningEngine: string[];
  outputSurfaces: string[];
  enterpriseIntegrations: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface MethodologyStage {
  step: string;
  phase: string;
  duration: string;
  name: string;
  description: string;
  deliverables: string[];
  gateGuarantee: string;
}

export interface AgentNode {
  id: string;
  name: string;
  role: string;
  description: string;
  telemetry: {
    latency: string;
    accuracy: string;
    throughput: string;
  };
  activeSignals: string[];
}
