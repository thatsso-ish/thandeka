import type { Project, Experience, Skill, Certification } from '../types';

export const experience: Experience[] = [
    {
        id: '1',
        company: 'CAPACITI',
        role: 'AI Trainee',
        period: '2025 - Current',
        description: 'Specialising in End-to-End AI Solutions, Bias Auditing, and Chatbot Development using Microsoft Power Platform and Python.'
    },
    {
        id: '2',
        company: 'NetCampus',
        role: 'IT & Data Trainee',
        period: '2024 - 2025',
        description: 'Gained foundational skills in Data Analytics, Software Development, and Cloud Computing.'
    },
    {
        id: '3',
        company: 'IT Investhood',
        role: 'Software Developer (WIL)',
        period: '2023 (6 months)',
        description: 'Assisted with application development, testing and debugging'
    }
];

export const projects: Project[] = [
    {
        id: '1',
        title: 'Interactive Educational AI Chatbot',
        description: 'An AI-powered assistant designed to help students with personalized learning and query resolution.',
        tech: ['Python', 'NLP', 'React'],
        category: 'AI',
        image: '/chatbot.png',
        repo: 'https://github.com/ThandekaMbokazi/chatbot002',
        link: 'https://chatbot002.lovable.app/'
    },
    {
        id: '2',
        title: 'Agricultural AI Prototype',
        description: 'A model to assist farmers in crop disease detection and yield prediction using computer vision.',
        tech: ['Python', 'TensorFlow', 'Data Analytics'],
        category: 'AI',
        image: '/agriculture.png',
        repo: 'https://github.com/ThandekaMbokazi/Aiagriculturesolutionprototype',
        link: 'https://nova-coin-33465230.figma.site/'
    },
    {
        id: '3',
        title: 'Specialized Content Generation Tool',
        description: 'A generative AI tool for creating tailored marketing and educational content.',
        tech: ['Generative AI', 'TypeScript', 'API Integration'],
        category: 'GenAI',
        image: '/legalease.png',
        repo: 'https://github.com/ThandekaMbokazi/LegalEase1',
        link: 'https://legal-ease1-pi.vercel.app/'
    },
    {
        id: '4',
        title: 'AI Resume Builder',
        description: 'Automates resume creation by analyzing user inputs and formatting them for ATS compliance.',
        tech: ['React', 'Node.js', 'OpenAI API'],
        category: 'Web App',
        image: '',
        repo: 'https://github.com/ThandekaMbokazi/Ai-Resume-Builder',
        link: ''
    }
];

export const skills: Skill[] = [
    { id: '1', name: 'TypeScript', category: 'Tech', icon: '<img width="48" height="48" src="https://img.icons8.com/fluency/48/typescript--v1.png" alt="typescript--v1"/>' },
    { id: '2', name: 'Python', category: 'Tech', icon: '<img width="48" height="48" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>' },
    { id: '3', name: 'Power BI', category: 'Data', icon: '<img width="48" height="48" src="https://img.icons8.com/color/48/power-bi.png" alt="power-bi"/>' },
    { id: '4', name: 'Microsoft Power Automate', category: 'Tech', icon: '<img width="48" height="48" src="https://img.icons8.com/fluency/48/microsoft-power-automate-2020.png" alt="microsoft-power-automate-2020"/>' },
    { id: '5', name: 'Microsoft Power Apps', category: 'Tech', icon: '<img width="48" height="48" src="https://img.icons8.com/fluency/48/microsoft-power-apps-2020.png" alt="microsoft-power-apps-2020"/>' },
    { id: '6', name: 'Generative AI', category: 'AI', icon: '<img width="48" height="48" src="https://img.icons8.com/fluency/48/claude-ai.png" alt="claude-ai"/>' },
    { id: '7', name: 'React', category: 'Tech', icon: '<img width="48" height="48" src="https://img.icons8.com/officel/40/react.png" alt="react"/>' },
    { id: '8', name: 'Data Analytics', category: 'Data', icon: '<img width="48" height="48" src="https://img.icons8.com/external-smashingstocks-thin-outline-color-smashing-stocks/67/external-Data-Analytics-data-analytics-smashingstocks-thin-outline-color-smashing-stocks-40.png" alt="external-Data-Analytics-data-analytics-smashingstocks-thin-outline-color-smashing-stocks-40"/>' },
    { id: '9', name: 'SQL', category: 'Data', icon: '<img width="48" height="48" src="https://img.icons8.com/fluency/48/sql.png" alt="sql"/>' },
];

export const certifications: Certification[] = [
    {
        id: '1',
        name: 'AI For Everyone',
        issuer: 'Coursera',
        date: '2025',
        icon: '<img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo.png" alt="external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo"/>',
        link: 'https://coursera.org/share/6a1ab83c9fba4a5bc4e7f878b02a8b56'
    },
    {
        id: '2',
        name: 'Introduction to Artificial Intelligence (AI)',
        issuer: 'Coursera',
        date: '2025',
        icon: '<img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo.png" alt="external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo"/>',
        link: 'https://coursera.org/share/77dff40263df35cba01661783ee6e70f'
    },
    {
        id: '3',
        name: 'AI Essentials',
        issuer: 'Coursera',
        date: '2025',
        icon: '<img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo.png" alt="external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo"/>',
        link: 'https://coursera.org/share/0688eb9d087784f3c04b4207dcdaf55f'
    },
    {
        id: '4',
        name: 'Introduction to Generative AI',
        issuer: 'Coursera',
        date: '2025',
        icon: '<img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo.png" alt="external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo"/>',
        link: 'https://coursera.org/share/27420d109f7874c96c67f345f7ce84a7'
    },
    {
        id: '5',
        name: 'Building AI Powered Chatsbots Without Programming',
        issuer: 'Coursera',
        date: '2026',
        icon: '<img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo.png" alt="external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo"/>',
        link: 'https://coursera.org/share/821041261ffff6f7f6123c061542e5f9'
    },
    {
        id: '6',
        name: 'Generative AI with Large Language Models',
        issuer: 'Coursera',
        date: '2025',
        icon: '<img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo.png" alt="external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo"/>',
        link: 'https://coursera.org/share/a229cc4ea430a376c76ac6af00524556'
    },
    {
        id: '7',
        name: 'Introduction to Responsible AI',
        issuer: 'Coursera',
        date: '2026',
        icon: '<img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo.png" alt="external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo"/>',
        link: 'https://coursera.org/share/742e26019e827d2340dd657de06df764'
    },
    {
        id: '8',
        name: 'Responsible AI',
        issuer: 'Coursera',
        date: '2026',
        icon: '<img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo.png" alt="external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo"/>',
        link: 'https://coursera.org/share/330fe2786ec3a193142eae8477c7c182'
    },
    {
        id: '9',
        name: 'Trustworthy AI:Managing Bias, Ethics, and Accountability',
        issuer: 'Coursera',
        date: '2026',
        icon: '<img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo.png" alt="external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo"/>',
        link: 'https://coursera.org/share/cec722a4bde1cc38cbfdcc6bf7227479'
    },
    {
        id: '10',
        name: 'Artificial Intelligence on Microsoft Azure',
        issuer: 'Coursera',
        date: '2026',
        icon: '<img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo.png" alt="external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo"/>',
        link: 'https://coursera.org/share/262822f8580a0d5c7055264be7e5cd5b'
    },
    {
        id: '11',
        name: 'AI Foundations: Prompt Engineering with ChatGPT',
        issuer: 'Coursera',
        date: '2025',
        icon: '<img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo.png" alt="external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo"/>',
        link: 'https://coursera.org/share/9ec23057360a213e18304c188781c55a'
    },
    {
        id: '12',
        name: 'AI Foundations: Prompt Engineering with ChatGPT',
        issuer: 'Coursera',
        date: '2025',
        icon: '<img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo.png" alt="external-coursera-an-online-learning-platform-offers-massive-open-courses-logo-shadow-tal-revivo"/>',
        link: 'https://coursera.org/share/9ec23057360a213e18304c188781c55a'
    }
];
