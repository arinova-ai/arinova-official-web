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
  footer: {
    legal: string;
    privacy: string;
    terms: string;
    support: string;
    copyright: string;
  };
  terms: {
    title: string;
    lastUpdated: string;
    sections: { heading: string; content: string }[];
  };
  support: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    address: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    companyName: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: { docs: 'Docs', getStarted: 'Get Started' },
    hero: {
      title: 'Talk with AI Agents,\nNaturally.',
      subtitle:
        'Arinova Chat is a conversation platform where you chat with AI agents that actually get things done. Available on iOS, Android, and Web — build, deploy, and interact through natural conversation.',
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
    footer: {
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      support: 'Support',
      copyright: `© ${new Date().getFullYear()} ARINOVA AI SDN. BHD. All rights reserved.`,
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: April 6, 2026',
      sections: [
        {
          heading: '1. Acceptance of Terms',
          content:
            'By accessing or using Arinova Chat and related services provided by ARINOVA AI SDN. BHD. ("Arinova", "we", "us"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.',
        },
        {
          heading: '2. Description of Service',
          content:
            'Arinova Chat is a conversation platform that allows users to interact with AI agents. We also provide developer tools (SDKs) for building and deploying AI agents on our platform.',
        },
        {
          heading: '3. User Accounts',
          content:
            'You must create an account to use certain features. You are responsible for maintaining the confidentiality of your credentials and for all activities under your account. You must provide accurate information and promptly update it if it changes.',
        },
        {
          heading: '4. Acceptable Use',
          content:
            'You agree not to: use the service for any unlawful purpose; transmit harmful, abusive, or offensive content; attempt to gain unauthorized access to our systems; interfere with other users\' enjoyment of the service; reverse-engineer or attempt to extract the source code of our platform; or use AI agents to generate content that violates applicable laws.',
        },
        {
          heading: '5. Intellectual Property',
          content:
            'All content, trademarks, and technology on our platform are owned by ARINOVA AI SDN. BHD. or its licensors. You retain ownership of content you create. By using our service, you grant us a limited license to process your content as necessary to provide the service.',
        },
        {
          heading: '6. AI-Generated Content',
          content:
            'Responses from AI agents are generated algorithmically and may not always be accurate, complete, or appropriate. Arinova is not responsible for the accuracy of AI-generated content. You should independently verify important information.',
        },
        {
          heading: '7. Termination',
          content:
            'We may suspend or terminate your account if you violate these terms. You may delete your account at any time. Upon termination, your right to use the service ceases immediately.',
        },
        {
          heading: '8. Limitation of Liability',
          content:
            'To the maximum extent permitted by law, Arinova shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the service. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.',
        },
        {
          heading: '9. Governing Law',
          content:
            'These terms shall be governed by and construed in accordance with the laws of Malaysia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Malaysia.',
        },
        {
          heading: '10. Changes to Terms',
          content:
            'We reserve the right to modify these terms at any time. We will notify users of material changes via email or through the platform. Continued use after changes constitutes acceptance.',
        },
        {
          heading: '11. Contact Us',
          content:
            'If you have any questions about these Terms of Service, please contact us at support@arinova.ai.',
        },
      ],
    },
    support: {
      title: 'Support',
      subtitle:
        'Need help? We\'re here for you. Reach out to us through any of the channels below.',
      emailLabel: 'Email',
      email: 'support@arinova.ai',
      phoneLabel: 'Phone',
      phone: '+60 17-849 3567',
      addressLabel: 'Address',
      address:
        '522A-30-2 Infinity Jalan Tanjung Bungah,\nTanjung Bungah 11200, Pulau Pinang,\nMalaysia',
      companyName: 'ARINOVA AI SDN. BHD.',
    },
  },
  'zh-CN': {
    nav: { docs: '文档', getStarted: '开始使用' },
    hero: {
      title: '与 AI Agent 对话，\n自然而然。',
      subtitle:
        'Arinova Chat 是一个对话平台，让你与真正能办事的 AI Agent 聊天。支持 iOS、Android 和 Web——构建、部署、互动，一切通过自然对话完成。',
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
    footer: {
      legal: '法律信息',
      privacy: '隐私政策',
      terms: '服务条款',
      support: '支持',
      copyright: `© ${new Date().getFullYear()} ARINOVA AI SDN. BHD. 保留所有权利。`,
    },
    terms: {
      title: '服务条款',
      lastUpdated: '最后更新：2026 年 4 月 6 日',
      sections: [
        {
          heading: '1. 接受条款',
          content:
            '通过访问或使用 ARINOVA AI SDN. BHD.（以下简称"Arinova"、"我们"）提供的 Arinova Chat 及相关服务，您同意受本服务条款的约束。如果您不同意，请不要使用我们的服务。',
        },
        {
          heading: '2. 服务描述',
          content:
            'Arinova Chat 是一个对话平台，允许用户与 AI Agent 互动。我们还为开发者提供 SDK 工具，用于在我们的平台上构建和部署 AI Agent。',
        },
        {
          heading: '3. 用户账户',
          content:
            '您必须创建账户才能使用某些功能。您有责任维护您的账户凭证的机密性，并对您账户下的所有活动负责。您必须提供准确的信息，并在信息发生变化时及时更新。',
        },
        {
          heading: '4. 可接受的使用',
          content:
            '您同意不会：将服务用于任何非法目的；传播有害、辱骂性或冒犯性内容；试图未经授权访问我们的系统；干扰其他用户对服务的使用；对我们的平台进行反向工程或试图提取源代码；或使用 AI Agent 生成违反适用法律的内容。',
        },
        {
          heading: '5. 知识产权',
          content:
            '我们平台上的所有内容、商标和技术均归 ARINOVA AI SDN. BHD. 或其许可方所有。您保留对您创建的内容的所有权。使用我们的服务即表示您授予我们有限的许可，以便我们处理您的内容以提供服务。',
        },
        {
          heading: '6. AI 生成内容',
          content:
            'AI Agent 的回复是通过算法生成的，可能并不总是准确、完整或适当的。Arinova 不对 AI 生成内容的准确性负责。您应独立验证重要信息。',
        },
        {
          heading: '7. 终止',
          content:
            '如果您违反这些条款，我们可能会暂停或终止您的账户。您可以随时删除您的账户。终止后，您使用服务的权利立即停止。',
        },
        {
          heading: '8. 责任限制',
          content:
            '在法律允许的最大范围内，Arinova 不对因您使用服务而产生的任何间接、附带、特殊、后果性或惩罚性损害承担责任。我们的总责任不超过您在索赔前 12 个月内向我们支付的金额。',
        },
        {
          heading: '9. 适用法律',
          content:
            '本条款应受马来西亚法律管辖并据此解释。任何争议应受马来西亚法院的专属管辖。',
        },
        {
          heading: '10. 条款变更',
          content:
            '我们保留随时修改这些条款的权利。我们将通过电子邮件或平台通知用户重大变更。变更后继续使用即表示接受。',
        },
        {
          heading: '11. 联系我们',
          content:
            '如果您对本服务条款有任何疑问，请通过 support@arinova.ai 联系我们。',
        },
      ],
    },
    support: {
      title: '支持',
      subtitle: '需要帮助？我们随时为您服务。请通过以下任何渠道联系我们。',
      emailLabel: '电子邮件',
      email: 'support@arinova.ai',
      phoneLabel: '电话',
      phone: '+60 17-849 3567',
      addressLabel: '地址',
      address:
        '522A-30-2 Infinity Jalan Tanjung Bungah,\nTanjung Bungah 11200, Pulau Pinang,\nMalaysia',
      companyName: 'ARINOVA AI SDN. BHD.',
    },
  },
  'zh-TW': {
    nav: { docs: '文件', getStarted: '開始使用' },
    hero: {
      title: '與 AI Agent 對話，\n自然而然。',
      subtitle:
        'Arinova Chat 是一個對話平台，讓你與真正能辦事的 AI Agent 聊天。支援 iOS、Android 和 Web——建構、部署、互動，一切透過自然對話完成。',
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
    footer: {
      legal: '法律資訊',
      privacy: '隱私權政策',
      terms: '服務條款',
      support: '支援',
      copyright: `© ${new Date().getFullYear()} ARINOVA AI SDN. BHD. 保留所有權利。`,
    },
    terms: {
      title: '服務條款',
      lastUpdated: '最後更新：2026 年 4 月 6 日',
      sections: [
        {
          heading: '1. 接受條款',
          content:
            '透過存取或使用 ARINOVA AI SDN. BHD.（以下簡稱「Arinova」、「我們」）提供的 Arinova Chat 及相關服務，您同意受本服務條款的約束。如果您不同意，請不要使用我們的服務。',
        },
        {
          heading: '2. 服務描述',
          content:
            'Arinova Chat 是一個對話平台，允許使用者與 AI Agent 互動。我們也為開發者提供 SDK 工具，用於在我們的平台上建構和部署 AI Agent。',
        },
        {
          heading: '3. 使用者帳戶',
          content:
            '您必須建立帳戶才能使用某些功能。您有責任維護您的帳戶憑證的機密性，並對您帳戶下的所有活動負責。您必須提供準確的資訊，並在資訊發生變化時及時更新。',
        },
        {
          heading: '4. 可接受的使用',
          content:
            '您同意不會：將服務用於任何非法目的；傳播有害、辱罵性或冒犯性內容；試圖未經授權存取我們的系統；干擾其他使用者對服務的使用；對我們的平台進行反向工程或試圖提取原始碼；或使用 AI Agent 產生違反適用法律的內容。',
        },
        {
          heading: '5. 智慧財產權',
          content:
            '我們平台上的所有內容、商標和技術均歸 ARINOVA AI SDN. BHD. 或其授權方所有。您保留對您建立的內容的所有權。使用我們的服務即表示您授予我們有限的授權，以便我們處理您的內容以提供服務。',
        },
        {
          heading: '6. AI 產生內容',
          content:
            'AI Agent 的回覆是透過演算法產生的，可能並不總是準確、完整或適當的。Arinova 不對 AI 產生內容的準確性負責。您應獨立驗證重要資訊。',
        },
        {
          heading: '7. 終止',
          content:
            '如果您違反這些條款，我們可能會暫停或終止您的帳戶。您可以隨時刪除您的帳戶。終止後，您使用服務的權利立即停止。',
        },
        {
          heading: '8. 責任限制',
          content:
            '在法律允許的最大範圍內，Arinova 不對因您使用服務而產生的任何間接、附帶、特殊、後果性或懲罰性損害承擔責任。我們的總責任不超過您在索賠前 12 個月內向我們支付的金額。',
        },
        {
          heading: '9. 適用法律',
          content:
            '本條款應受馬來西亞法律管轄並據此解釋。任何爭議應受馬來西亞法院的專屬管轄。',
        },
        {
          heading: '10. 條款變更',
          content:
            '我們保留隨時修改這些條款的權利。我們將透過電子郵件或平台通知使用者重大變更。變更後繼續使用即表示接受。',
        },
        {
          heading: '11. 聯繫我們',
          content:
            '如果您對本服務條款有任何疑問，請透過 support@arinova.ai 聯繫我們。',
        },
      ],
    },
    support: {
      title: '支援',
      subtitle: '需要幫助？我們隨時為您服務。請透過以下任何管道聯繫我們。',
      emailLabel: '電子郵件',
      email: 'support@arinova.ai',
      phoneLabel: '電話',
      phone: '+60 17-849 3567',
      addressLabel: '地址',
      address:
        '522A-30-2 Infinity Jalan Tanjung Bungah,\nTanjung Bungah 11200, Pulau Pinang,\nMalaysia',
      companyName: 'ARINOVA AI SDN. BHD.',
    },
  },
};
