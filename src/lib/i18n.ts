export const locales = ['en', 'zh-CN', 'zh-TW'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
};

type Dictionary = {
  nav: { docs: string; getStarted: string };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
    items: { title: string; description: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: { docs: 'Docs', getStarted: 'Get Started' },
    hero: {
      title: 'Talk with AI Agents,\nNaturally.',
      subtitle:
        'Arinova is a conversation platform where you chat with AI agents that actually get things done. Build, deploy, and interact — all through natural conversation.',
      cta: 'Read the Docs',
    },
    features: {
      title: 'Why Arinova?',
      items: [
        {
          title: 'Real-time AI Conversation',
          description:
            'Chat with AI agents in real-time with streaming responses. Just like texting a friend — except this friend has superpowers.',
        },
        {
          title: 'Agent Marketplace',
          description:
            'Discover and interact with agents built by developers around the world. From productivity tools to creative assistants.',
        },
        {
          title: 'Developer-First SDK',
          description:
            'Build your own AI agent in minutes with our TypeScript SDK. WebSocket-based, streaming-ready, and dead simple.',
        },
        {
          title: 'Interactive Apps',
          description:
            'Agents can power interactive apps — games, tools, storefronts — all embedded right in the conversation.',
        },
      ],
    },
    cta: {
      title: 'Ready to build your first AI agent?',
      subtitle:
        'Get started with the Agent SDK and have your agent live in under 5 minutes.',
      button: 'Get Started',
    },
  },
  'zh-CN': {
    nav: { docs: '文档', getStarted: '开始使用' },
    hero: {
      title: '与 AI Agent 对话，\n自然而然。',
      subtitle:
        'Arinova 是一个对话平台，让你与真正能办事的 AI Agent 聊天。构建、部署、互动——一切通过自然对话完成。',
      cta: '阅读文档',
    },
    features: {
      title: '为什么选择 Arinova？',
      items: [
        {
          title: '实时 AI 对话',
          description:
            '与 AI Agent 实时聊天，支持流式响应。就像给朋友发消息——只不过这位朋友拥有超能力。',
        },
        {
          title: 'Agent 市场',
          description:
            '发现并使用来自全球开发者构建的 Agent。从生产力工具到创意助手，应有尽有。',
        },
        {
          title: '开发者优先的 SDK',
          description:
            '使用我们的 TypeScript SDK，几分钟内构建你自己的 AI Agent。基于 WebSocket，支持流式传输，极其简单。',
        },
        {
          title: '互动应用',
          description:
            'Agent 可以驱动互动应用——游戏、工具、商店——全部嵌入在对话中。',
        },
      ],
    },
    cta: {
      title: '准备好构建你的第一个 AI Agent 了吗？',
      subtitle: '使用 Agent SDK 开始，5 分钟内让你的 Agent 上线。',
      button: '开始使用',
    },
  },
  'zh-TW': {
    nav: { docs: '文件', getStarted: '開始使用' },
    hero: {
      title: '與 AI Agent 對話，\n自然而然。',
      subtitle:
        'Arinova 是一個對話平台，讓你與真正能辦事的 AI Agent 聊天。建構、部署、互動——一切透過自然對話完成。',
      cta: '閱讀文件',
    },
    features: {
      title: '為什麼選擇 Arinova？',
      items: [
        {
          title: '即時 AI 對話',
          description:
            '與 AI Agent 即時聊天，支援串流回應。就像傳訊息給朋友——只不過這位朋友擁有超能力。',
        },
        {
          title: 'Agent 市集',
          description:
            '探索並使用來自全球開發者建構的 Agent。從生產力工具到創意助手，應有盡有。',
        },
        {
          title: '開發者優先的 SDK',
          description:
            '使用我們的 TypeScript SDK，幾分鐘內建構你自己的 AI Agent。基於 WebSocket，支援串流傳輸，極其簡單。',
        },
        {
          title: '互動應用',
          description:
            'Agent 可以驅動互動應用——遊戲、工具、商店——全部嵌入在對話中。',
        },
      ],
    },
    cta: {
      title: '準備好建構你的第一個 AI Agent 了嗎？',
      subtitle: '使用 Agent SDK 開始，5 分鐘內讓你的 Agent 上線。',
      button: '開始使用',
    },
  },
};
