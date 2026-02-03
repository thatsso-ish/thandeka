export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    link?: string;
    repo?: string;
    category: string;
    image?: string;
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    period: string;
    description: string;
}

export interface Skill {
    id: string;
    name: string;
    category: 'Tech' | 'Data' | 'AI' | 'Soft';
    icon?: string;
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    date: string;
    badgeUrl?: string; // Placeholder for now
    icon?: string;
    link?: string;
}
