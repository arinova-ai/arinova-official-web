import type { ReactNode } from 'react';
import type { Locale } from '@/lib/i18n';

type PrivacyPolicy = {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  body: ReactNode;
};

export const privacyPolicies: Record<Locale, PrivacyPolicy> = {
  en: {
    title: 'Arinova — Privacy Policy',
    effectiveDate: 'Effective Date: March 31, 2026',
    lastUpdated: 'Last Updated: November 18, 2026',
    body: (
      <>
        <section>
          <h2>1. Introduction</h2>
          <p>This Privacy Policy (“Policy”) describes how Arinova AI Sdn. Bhd. (“Arinova,” “Company,” “we,” “us,” or “our”) collects, uses, stores, shares, and protects your personal information when you access or use the Arinova platform, including all associated websites, applications, services, features, and content (collectively, the “Service”).</p>
          <p>By accessing or using the Service, you acknowledge that you have read and understood this Policy. If you do not agree with the practices described herein, please do not use the Service.</p>
        </section>
        <section>
          <h2>2. Information We Collect</h2>
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, username, password, profile photo, and other information you provide during registration or profile configuration.</li>
            <li><strong>User Content:</strong> Messages, files, images, audio, video, and other content you upload, post, or transmit through the Service.</li>
            <li><strong>Payment Information:</strong> Billing details and transaction records when you purchase Virtual Currency or other paid features. Payment processing is handled by third-party payment processors; we do not directly store your full credit card or payment instrument numbers.</li>
            <li><strong>Communications:</strong> Information you provide when you contact us for support, submit feedback, or participate in surveys.</li>
          </ul>
          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li><strong>Device and Connection Information:</strong> Device type, operating system, browser type and version, IP address, unique device identifiers, and network information.</li>
            <li><strong>Usage Data:</strong> Pages visited, features used, interaction patterns, timestamps, referral URLs, click data, and session duration.</li>
            <li><strong>Cookies and Similar Technologies:</strong> We use cookies, web beacons, pixels, and similar technologies to collect information about your interactions with the Service. You may manage your cookie preferences through your browser settings; however, disabling cookies may affect the functionality of the Service.</li>
          </ul>
          <h3>2.3 Information from Third Parties</h3>
          <p>We may receive information about you from third-party services you connect to your account (e.g., OAuth providers), publicly available sources, or our business partners, to the extent permitted by applicable law.</p>
        </section>
        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li><strong>Providing the Service:</strong> To operate, maintain, and deliver the features and functionality of the Service, including processing transactions and managing your account.</li>
            <li><strong>Communication:</strong> To send you service-related notices, updates, security alerts, and support messages.</li>
            <li><strong>Improvement and Development:</strong> To analyze usage patterns, diagnose technical issues, conduct research, and develop new features and services.</li>
            <li><strong>Personalization:</strong> To customize your experience, including content recommendations and interface preferences.</li>
            <li><strong>AI Agent Operations:</strong> To process your interactions with AI Agents, generate responses, and improve AI Agent functionality. Your messages to AI Agents may be processed by our AI systems and, where applicable, by third-party AI service providers.</li>
            <li><strong>Safety and Security:</strong> To detect, prevent, and address fraud, abuse, security incidents, and technical issues.</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, legal processes, or enforceable governmental requests.</li>
          </ul>
        </section>
        <section>
          <h2>4. How We Share Your Information</h2>
          <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
          <h3>4.1 With Your Consent</h3>
          <p>We may share your information when you direct us to do so or provide your explicit consent.</p>
          <h3>4.2 Service Providers</h3>
          <p>We engage third-party service providers to perform functions on our behalf, including hosting, analytics, payment processing, customer support, and AI processing. These providers have access to your information only as necessary to perform their functions and are contractually obligated to maintain its confidentiality and security.</p>
          <h3>4.3 AI Service Providers</h3>
          <p>Your interactions with AI Agents may be processed by third-party AI service providers. We require these providers to adhere to appropriate data protection standards. However, you should exercise caution and avoid sharing sensitive personal information in conversations with AI Agents.</p>
          <p>When an AI Agent conversation or another AI feature uses an external AI model provider, we send that provider the content needed for the feature. This may include your messages, prompts, relevant conversation context, content from attachments such as images, and voice transcripts used by the feature. If you use voice or audio features (such as transcription, voice changing, or dubbing), we may also send your audio or video to an external speech and audio processing provider. When a conversation includes an Agent operated by a third party, we deliver to that Agent the content it needs to respond. This may include messages in the conversation (including recent conversation history and messages from other participants), the sender’s user ID and username, the group’s member list, reply context, and attachment details. Arinova does not control how the operator of that Agent processes this content.</p>
          <p>The provider depends on the feature and the model used. Providers may include language model providers, model hosting and routing services, text embedding and search services, speech and audio processing services, and image generation and editing services. We send this content to provide the relevant feature, such as generating a reply, processing an image, searching, transcribing audio, or synthesizing speech.</p>
          <h3>4.4 Legal Requirements</h3>
          <p>We may disclose your information if required to do so by law, or if we believe in good faith that such disclosure is necessary to: (a) comply with a legal obligation, court order, or governmental request; (b) protect and defend our rights or property; (c) prevent fraud or other illegal activity; or (d) protect the personal safety of users or the public.</p>
          <h3>4.5 Business Transfers</h3>
          <p>In the event of a merger, acquisition, reorganization, bankruptcy, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you of any such change in ownership or control of your personal information.</p>
          <h3>4.6 Aggregated or De-identified Data</h3>
          <p>We may share aggregated or de-identified data that cannot reasonably be used to identify you, for research, analytics, or other purposes.</p>
        </section>
        <section>
          <h2>5. Data Retention</h2>
          <p>We retain your personal information for as long as your account is active or as needed to provide the Service. We may also retain and use your information as necessary to comply with legal obligations, resolve disputes, enforce our agreements, and for legitimate business purposes. When we no longer have a legitimate need to process your information, we will either delete or anonymize it.</p>
        </section>
        <section>
          <h2>6. Data Security</h2>
          <p>We implement commercially reasonable technical and organizational measures designed to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.</p>
        </section>
        <section>
          <h2>7. Your Rights and Choices</h2>
          <p>Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request access to the personal information we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete personal information.</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information, subject to certain exceptions.</li>
            <li><strong>Portability:</strong> Request a copy of your personal information in a structured, commonly used, and machine-readable format.</li>
            <li><strong>Objection:</strong> Object to the processing of your personal information for certain purposes.</li>
            <li><strong>Restriction:</strong> Request restriction of processing of your personal information.</li>
            <li><strong>Withdrawal of Consent:</strong> Where processing is based on consent, withdraw your consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal.</li>
          </ul>
          <p>To exercise any of these rights, please contact us at <a href="mailto:privacy@arinova.ai">privacy@arinova.ai</a>. We will respond to your request within the timeframe required by applicable law.</p>
        </section>
        <section>
          <h2>8. Children's Privacy</h2>
          <p>The Service is not directed to children under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information promptly. If you believe that a child under 16 has provided us with personal information, please contact us at <a href="mailto:privacy@arinova.ai">privacy@arinova.ai</a>.</p>
        </section>
        <section>
          <h2>9. International Data Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country. We take appropriate measures to ensure that your personal information remains protected in accordance with this Policy when transferred internationally.</p>
        </section>
        <section>
          <h2>10. Virtual Currency and Transaction Data</h2>
          <p>When you purchase or use Virtual Currency within the Service, we collect and process transaction records, including amounts, timestamps, and transaction types. This information is used to maintain transaction integrity, provide customer support, and comply with applicable financial regulations. Virtual Currency transaction records may be retained for extended periods as required by law.</p>
        </section>
        <section>
          <h2>11. AI Agent Data Processing</h2>
          <h3>11.1 Input Data</h3>
          <p>Messages, prompts, and other inputs you provide to AI Agents are processed to generate responses and may be used to improve AI Agent functionality.</p>
          <h3>11.2 Output Data</h3>
          <p>AI Agent outputs are generated automatically and may be stored as part of your conversation history.</p>
          <h3>11.3 AI Training</h3>
          <p>We may use aggregated and de-identified data from AI Agent interactions to improve our AI systems. We will not use your individually identifiable conversations to train third-party AI models without your explicit consent.</p>
        </section>
        <section>
          <h2>12. Changes to This Policy</h2>
          <p>We may update this Policy from time to time. We will notify you of material changes by posting the updated Policy on the Service with a revised “Last Updated” date. For significant changes, we may also provide additional notice (such as an in-app notification or email). Your continued use of the Service after the effective date of the revised Policy constitutes your acceptance of the changes.</p>
        </section>
        <section>
          <h2>13. Contact Us</h2>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
          <p><strong>Privacy Inquiries:</strong> <a href="mailto:privacy@arinova.ai">privacy@arinova.ai</a></p>
          <p><strong>General Legal:</strong> <a href="mailto:legal@arinova.ai">legal@arinova.ai</a></p>
        </section>
        <hr />
        <p>Arinova. All rights reserved.</p>
      </>
    ),
  },
  'zh-TW': {
    title: 'Arinova — 隱私權政策',
    effectiveDate: '生效日期： 2026 年 3 月 31 日',
    lastUpdated: '最後更新： 2026 年 11 月 18 日',
    body: (
      <>
        <section>
          <h2>第一條　前言</h2>
          <p>本隱私權政策（以下簡稱“本政策”）說明 Arinova AI Sdn. Bhd.（以下簡稱“Arinova”、“本公司”、“我們”）於您存取或使用 Arinova 平台（包括所有相關網站、應用程式、服務、功能及內容，以下合稱“本服務”）時，如何蒐集、使用、儲存、分享及保護您的個人資訊。</p>
          <p>存取或使用本服務，即表示您已閱讀並瞭解本政策。若您不同意本政策所述之作法，請勿使用本服務。</p>
        </section>
        <section>
          <h2>第二條　我們蒐集的資訊</h2>
          <h3>2.1 您所提供的資訊</h3>
          <ul>
            <li><strong>帳號資訊：</strong>姓名、電子郵件地址、使用者名稱、密碼、個人檔案照片，以及您於註冊或設定個人資料時所提供之其他資訊。</li>
            <li><strong>使用者內容：</strong>您透過本服務上傳、張貼或傳輸之訊息、檔案、圖片、音訊、影片及其他內容。</li>
            <li><strong>付款資訊：</strong>您購買虛擬貨幣或其他付費功能時之帳單資訊及交易記錄。付款處理由第三方支付處理商辦理；我們不直接儲存您的完整信用卡或付款工具號碼。</li>
            <li><strong>通訊內容：</strong>您聯繫我們尋求支援、提交意見回饋或參與調查時所提供之資訊。</li>
          </ul>
          <h3>2.2 自動蒐集的資訊</h3>
          <ul>
            <li><strong>裝置與連線資訊：</strong>裝置類型、作業系統、瀏覽器類型及版本、IP 位址、唯一裝置識別碼及網路資訊。</li>
            <li><strong>使用資料：</strong>瀏覽之頁面、使用之功能、互動模式、時間戳記、來源網址、點擊資料及工作階段持續時間。</li>
            <li><strong>Cookie 及類似技術：</strong>我們使用 Cookie、網路信標、像素追蹤碼及類似技術蒐集您與本服務互動之相關資訊。您可透過瀏覽器設定管理 Cookie 偏好；惟停用 Cookie 可能影響本服務之功能。</li>
          </ul>
          <h3>2.3 來自第三方的資訊</h3>
          <p>在適用法律允許之範圍內，我們可能從您連結至帳號之第三方服務（如 OAuth 提供者）、公開可取得之來源或我們的商業夥伴處接收有關您的資訊。</p>
        </section>
        <section>
          <h2>第三條　我們如何使用您的資訊</h2>
          <p>我們將所蒐集之資訊用於以下目的：</p>
          <ul>
            <li><strong>提供服務：</strong>營運、維護及提供本服務之特性與功能，包括處理交易及管理您的帳號。</li>
            <li><strong>通訊：</strong>向您發送與服務相關之通知、更新、安全警示及支援訊息。</li>
            <li><strong>改善與開發：</strong>分析使用模式、診斷技術問題、進行研究，以及開發新功能與服務。</li>
            <li><strong>個人化：</strong>自訂您的使用體驗，包括內容推薦及介面偏好設定。</li>
            <li><strong>AI 代理運作：</strong>處理您與 AI 代理之互動、生成回應，以及改善 AI 代理功能。您傳送給 AI 代理之訊息可能經由我們的 AI 系統處理，於適用情況下，亦可能經由第三方 AI 服務提供商處理。</li>
            <li><strong>安全與防護：</strong>偵測、防止及處理詐欺、濫用、安全事件及技術問題。</li>
            <li><strong>法律遵循：</strong>遵守適用之法律、法規、法律程序或可執行之政府要求。</li>
          </ul>
        </section>
        <section>
          <h2>第四條　我們如何分享您的資訊</h2>
          <p>我們不會出售您的個人資訊。我們可能在以下情況下分享您的資訊：</p>
          <h3>4.1 經您同意</h3>
          <p>當您指示我們分享或提供明確同意時，我們可能分享您的資訊。</p>
          <h3>4.2 服務提供商</h3>
          <p>我們委託第三方服務提供商代表我們執行功能，包括託管、分析、支付處理、客戶支援及 AI 處理。該等提供商僅在執行其功能所必要之範圍內存取您的資訊，且依合約有義務維護其機密性與安全性。</p>
          <h3>4.3 AI 服務提供商</h3>
          <p>您與 AI 代理之互動可能經由第三方 AI 服務提供商處理。我們要求該等提供商遵守適當之資料保護標準。惟您於與 AI 代理對話時，應謹慎行事並避免分享敏感個人資訊。</p>
          <p>當您與 AI 代理（Agent）對話或使用其他 AI 功能，而該對話或功能需要由外部 AI 模型供應商處理時，我們會將提供該功能所需的內容傳送給供應商。傳送的內容可能包括您的訊息、提示、相關對話內容、附件內容（例如圖片），以及該功能使用的語音轉寫文字。若您使用語音或音訊功能（例如轉寫、變聲或配音），我們也可能將您的音訊或影片傳送給外部語音與音訊處理服務供應商。當對話中包含由第三方營運的 Agent 時，我們會將其回應所需的內容交付給該 Agent，可能包括對話中的訊息（含近期對話紀錄及其他參與者的訊息）、發送者的使用者 ID 與使用者名稱、群組的成員名單、回覆的上下文及附件資訊；該 Agent 的營運者如何處理這些內容，不在 Arinova 的控制範圍內。</p>
          <p>供應商依功能及所用模型而異，可能包括語言模型供應商、模型代管與路由服務、文字向量化與搜尋服務、語音與音訊處理服務，以及圖片生成與編輯服務。我們傳送這些內容，是為了提供相應的功能，例如生成回覆、處理圖片、搜尋、轉寫或合成語音。</p>
          <h3>4.4 法律要求</h3>
          <p>如法律要求，或我們善意認為有必要進行以下事項時，我們可能揭露您的資訊：（一）遵守法律義務、法院命令或政府要求；（二）保護及捍衛我們的權利或財產；（三）防止詐欺或其他非法活動；或（四）保護使用者或公眾之人身安全。</p>
          <h3>4.5 業務移轉</h3>
          <p>如發生合併、收購、重組、破產或出售全部或部分資產之情事，您的資訊可能作為該交易之一部分被移轉。我們將就您個人資訊之所有權或控制權之任何變更通知您。</p>
          <h3>4.6 彙總或去識別化資料</h3>
          <p>我們可能為研究、分析或其他目的，分享無法合理用於識別您身份之彙總或去識別化資料。</p>
        </section>
        <section>
          <h2>第五條　資料保留</h2>
          <p>我們於您的帳號處於有效狀態期間或為提供本服務所需之期間保留您的個人資訊。我們亦可能於遵守法律義務、解決爭議、執行協議及合法商業目的所必要之範圍內保留及使用您的資訊。當我們不再有處理您資訊之合法需要時，我們將刪除或匿名化該資訊。</p>
        </section>
        <section>
          <h2>第六條　資料安全</h2>
          <p>我們採取商業上合理之技術及組織措施，以保護您的個人資訊免於未經授權之存取、變更、揭露或銷毀。惟透過網際網路傳輸或電子儲存之任何方法均非完全安全，我們無法保證絕對安全。</p>
        </section>
        <section>
          <h2>第七條　您的權利與選擇</h2>
          <p>依據您所在之管轄區域，您可能就個人資訊享有以下權利：</p>
          <ul>
            <li><strong>存取權：</strong>請求存取我們所持有之您的個人資訊。</li>
            <li><strong>更正權：</strong>請求更正不正確或不完整之個人資訊。</li>
            <li><strong>刪除權：</strong>請求刪除您的個人資訊，惟須受特定例外之限制。</li>
            <li><strong>可攜權：</strong>請求以結構化、常用且機器可讀之格式取得您的個人資訊副本。</li>
            <li><strong>反對權：</strong>就特定目的之個人資訊處理提出反對。</li>
            <li><strong>限制處理權：</strong>請求限制對您個人資訊之處理。</li>
            <li><strong>撤回同意權：</strong>於處理係基於同意之情況下，您得隨時撤回同意，且不影響撤回前基於同意所進行之處理的合法性。</li>
          </ul>
          <p>如欲行使上述任何權利，請聯繫我們：<a href="mailto:privacy@arinova.ai">privacy@arinova.ai</a>。我們將於適用法律所要求之期限內回覆您的請求。</p>
        </section>
        <section>
          <h2>第八條　兒童隱私</h2>
          <p>本服務並非針對十六歲以下之兒童。我們不會故意蒐集十六歲以下兒童之個人資訊。如我們得知已蒐集十六歲以下兒童之個人資訊，我們將採取措施儘速刪除該等資訊。若您認為十六歲以下之兒童已向我們提供個人資訊，請聯繫我們：<a href="mailto:privacy@arinova.ai">privacy@arinova.ai</a>。</p>
        </section>
        <section>
          <h2>第九條　國際資料傳輸</h2>
          <p>您的資訊可能被傳輸至您居住國以外之國家並在該等國家處理。該等國家之資料保護法律可能與您所在國家之法律不同。我們採取適當措施，確保您的個人資訊於國際傳輸時依本政策之規定受到保護。</p>
        </section>
        <section>
          <h2>第十條　虛擬貨幣與交易資料</h2>
          <p>當您於本服務內購買或使用虛擬貨幣時，我們會蒐集及處理交易記錄，包括金額、時間戳記及交易類型。該等資訊用於維護交易完整性、提供客戶支援及遵守適用之金融法規。虛擬貨幣之交易記錄可能依法律要求保留較長期間。</p>
        </section>
        <section>
          <h2>第十一條　AI 代理資料處理</h2>
          <h3>11.1 輸入資料</h3>
          <p>您提供予 AI 代理之訊息、提示及其他輸入內容將被處理以生成回應，並可能用於改善 AI 代理功能。</p>
          <h3>11.2 輸出資料</h3>
          <p>AI 代理之輸出內容係自動生成，可能作為您對話記錄之一部分而被儲存。</p>
          <h3>11.3 AI 訓練</h3>
          <p>我們可能使用來自 AI 代理互動之彙總及去識別化資料以改善我們的 AI 系統。未經您的明確同意，我們不會使用您可個別識別之對話來訓練第三方 AI 模型。</p>
        </section>
        <section>
          <h2>第十二條　本政策之變更</h2>
          <p>我們可能不時更新本政策。我們將於本服務上公佈更新後之政策並修訂“最後更新”日期，以通知重大變更。就重大變更，我們亦可能提供額外通知（如應用程式內通知或電子郵件）。修訂後之政策生效日後，您繼續使用本服務即視為接受該等變更。</p>
        </section>
        <section>
          <h2>第十三條　聯絡我們</h2>
          <p>如您對本隱私權政策或我們的資料處理實務有任何疑問、顧慮或請求，請與我們聯繫：</p>
          <p><strong>隱私相關詢問：</strong><a href="mailto:privacy@arinova.ai">privacy@arinova.ai</a></p>
          <p><strong>一般法律事務：</strong><a href="mailto:legal@arinova.ai">legal@arinova.ai</a></p>
        </section>
        <hr />
        <p>Arinova 版權所有。</p>
      </>
    ),
  },
  'zh-CN': {
    title: 'Arinova — 隐私权政策',
    effectiveDate: '生效日期： 2026 年 3 月 31 日',
    lastUpdated: '最后更新： 2026 年 11 月 18 日',
    body: (
      <>
        <section>
          <h2>第一条　前言</h2>
          <p>本隐私权政策（以下简称“本政策”）说明 Arinova AI Sdn. Bhd.（以下简称“Arinova”、“本公司”、“我们”）于您存取或使用 Arinova 平台（包括所有相关网站、应用程式、服务、功能及内容，以下合称“本服务”）时，如何搜集、使用、储存、分享及保护您的个人资讯。</p>
          <p>存取或使用本服务，即表示您已阅读并了解本政策。若您不同意本政策所述之作法，请勿使用本服务。</p>
        </section>
        <section>
          <h2>第二条　我们搜集的资讯</h2>
          <h3>2.1 您所提供的资讯</h3>
          <ul>
            <li><strong>账号资讯：</strong>姓名、电子邮件地址、使用者名称、密码、个人档案照片，以及您于注册或设定个人资料时所提供之其他资讯。</li>
            <li><strong>使用者内容：</strong>您透过本服务上传、张贴或传输之讯息、档案、图片、音讯、影片及其他内容。</li>
            <li><strong>付款资讯：</strong>您购买虚拟货币或其他付费功能时之帐单资讯及交易记录。付款处理由第三方支付处理商办理；我们不直接储存您的完整信用卡或付款工具号码。</li>
            <li><strong>通讯内容：</strong>您联系我们寻求支援、提交意见回馈或参与调查时所提供之资讯。</li>
          </ul>
          <h3>2.2 自动搜集的资讯</h3>
          <ul>
            <li><strong>装置与连线资讯：</strong>装置类型、作业系统、浏览器类型及版本、IP 位址、唯一装置识别码及网络资讯。</li>
            <li><strong>使用资料：</strong>浏览之页面、使用之功能、互动模式、时间戳记、来源网址、点击资料及工作阶段持续时间。</li>
            <li><strong>Cookie 及类似技术：</strong>我们使用 Cookie、网络信标、像素追踪码及类似技术搜集您与本服务互动之相关资讯。您可透过浏览器设定管理 Cookie 偏好；惟停用 Cookie 可能影响本服务之功能。</li>
          </ul>
          <h3>2.3 来自第三方的资讯</h3>
          <p>在适用法律允许之范围内，我们可能从您链接至账号之第三方服务（如 OAuth 提供者）、公开可取得之来源或我们的商业伙伴处接收有关您的资讯。</p>
        </section>
        <section>
          <h2>第三条　我们如何使用您的资讯</h2>
          <p>我们将所搜集之资讯用于以下目的：</p>
          <ul>
            <li><strong>提供服务：</strong>营运、维护及提供本服务之特性与功能，包括处理交易及管理您的账号。</li>
            <li><strong>通讯：</strong>向您发送与服务相关之通知、更新、安全警示及支援讯息。</li>
            <li><strong>改善与开发：</strong>分析使用模式、诊断技术问题、进行研究，以及开发新功能与服务。</li>
            <li><strong>个人化：</strong>自订您的使用体验，包括内容推荐及介面偏好设定。</li>
            <li><strong>AI 代理运作：</strong>处理您与 AI 代理之互动、生成回应，以及改善 AI 代理功能。您传送给 AI 代理之讯息可能经由我们的 AI 系统处理，于适用情况下，亦可能经由第三方 AI 服务提供商处理。</li>
            <li><strong>安全与防护：</strong>侦测、防止及处理诈欺、滥用、安全事件及技术问题。</li>
            <li><strong>法律遵循：</strong>遵守适用之法律、法规、法律程序或可执行之政府要求。</li>
          </ul>
        </section>
        <section>
          <h2>第四条　我们如何分享您的资讯</h2>
          <p>我们不会出售您的个人资讯。我们可能在以下情况下分享您的资讯：</p>
          <h3>4.1 经您同意</h3>
          <p>当您指示我们分享或提供明确同意时，我们可能分享您的资讯。</p>
          <h3>4.2 服务提供商</h3>
          <p>我们委托第三方服务提供商代表我们执行功能，包括托管、分析、支付处理、客户支援及 AI 处理。该等提供商仅在执行其功能所必要之范围内存取您的资讯，且依合约有义务维护其机密性与安全性。</p>
          <h3>4.3 AI 服务提供商</h3>
          <p>您与 AI 代理之互动可能经由第三方 AI 服务提供商处理。我们要求该等提供商遵守适当之资料保护标准。惟您于与 AI 代理对话时，应谨慎行事并避免分享敏感个人资讯。</p>
          <p>当您与 AI 代理（Agent）对话或使用其他 AI 功能，而该对话或功能需要由外部 AI 模型供应商处理时，我们会将提供该功能所需的内容传送给供应商。传送的内容可能包括您的讯息、提示、相关对话内容、附件内容（例如图片），以及该功能使用的语音转写文字。若您使用语音或音讯功能（例如转写、变声或配音），我们也可能将您的音讯或影片传送给外部语音与音讯处理服务供应商。当对话中包含由第三方营运的 Agent 时，我们会将其回应所需的内容交付给该 Agent，可能包括对话中的讯息（含近期对话纪录及其他参与者的讯息）、发送者的使用者 ID 与使用者名称、群组的成员名单、回复的上下文及附件资讯；该 Agent 的营运者如何处理这些内容，不在 Arinova 的控制范围内。</p>
          <p>供应商依功能及所用模型而异，可能包括语言模型供应商、模型代管与路由服务、文字向量化与搜寻服务、语音与音讯处理服务，以及图片生成与编辑服务。我们传送这些内容，是为了提供相应的功能，例如生成回复、处理图片、搜寻、转写或合成语音。</p>
          <h3>4.4 法律要求</h3>
          <p>如法律要求，或我们善意认为有必要进行以下事项时，我们可能揭露您的资讯：（一）遵守法律义务、法院命令或政府要求；（二）保护及捍卫我们的权利或财产；（三）防止诈欺或其他非法活动；或（四）保护使用者或公众之人身安全。</p>
          <h3>4.5 业务移转</h3>
          <p>如发生合并、收购、重组、破产或出售全部或部分资产之情事，您的资讯可能作为该交易之一部分被移转。我们将就您个人资讯之所有权或控制权之任何变更通知您。</p>
          <h3>4.6 汇总或去识别化资料</h3>
          <p>我们可能为研究、分析或其他目的，分享无法合理用于识别您身份之汇总或去识别化资料。</p>
        </section>
        <section>
          <h2>第五条　资料保留</h2>
          <p>我们于您的账号处于有效状态期间或为提供本服务所需之期间保留您的个人资讯。我们亦可能于遵守法律义务、解决争议、执行协议及合法商业目的所必要之范围内保留及使用您的资讯。当我们不再有处理您资讯之合法需要时，我们将删除或匿名化该资讯。</p>
        </section>
        <section>
          <h2>第六条　资料安全</h2>
          <p>我们采取商业上合理之技术及组织措施，以保护您的个人资讯免于未经授权之存取、变更、揭露或销毁。惟透过网际网络传输或电子储存之任何方法均非完全安全，我们无法保证绝对安全。</p>
        </section>
        <section>
          <h2>第七条　您的权利与选择</h2>
          <p>依据您所在之管辖区域，您可能就个人资讯享有以下权利：</p>
          <ul>
            <li><strong>存取权：</strong>请求存取我们所持有之您的个人资讯。</li>
            <li><strong>更正权：</strong>请求更正不正确或不完整之个人资讯。</li>
            <li><strong>删除权：</strong>请求删除您的个人资讯，惟须受特定例外之限制。</li>
            <li><strong>可携权：</strong>请求以结构化、常用且机器可读之格式取得您的个人资讯副本。</li>
            <li><strong>反对权：</strong>就特定目的之个人资讯处理提出反对。</li>
            <li><strong>限制处理权：</strong>请求限制对您个人资讯之处理。</li>
            <li><strong>撤回同意权：</strong>于处理系基于同意之情况下，您得随时撤回同意，且不影响撤回前基于同意所进行之处理的合法性。</li>
          </ul>
          <p>如欲行使上述任何权利，请联系我们：<a href="mailto:privacy@arinova.ai">privacy@arinova.ai</a>。我们将于适用法律所要求之期限内回复您的请求。</p>
        </section>
        <section>
          <h2>第八条　儿童隐私</h2>
          <p>本服务并非针对十六岁以下之儿童。我们不会故意搜集十六岁以下儿童之个人资讯。如我们得知已搜集十六岁以下儿童之个人资讯，我们将采取措施尽速删除该等资讯。若您认为十六岁以下之儿童已向我们提供个人资讯，请联系我们：<a href="mailto:privacy@arinova.ai">privacy@arinova.ai</a>。</p>
        </section>
        <section>
          <h2>第九条　国际资料传输</h2>
          <p>您的资讯可能被传输至您居住国以外之国家并在该等国家处理。该等国家之资料保护法律可能与您所在国家之法律不同。我们采取适当措施，确保您的个人资讯于国际传输时依本政策之规定受到保护。</p>
        </section>
        <section>
          <h2>第十条　虚拟货币与交易资料</h2>
          <p>当您于本服务内购买或使用虚拟货币时，我们会搜集及处理交易记录，包括金额、时间戳记及交易类型。该等资讯用于维护交易完整性、提供客户支援及遵守适用之金融法规。虚拟货币之交易记录可能依法律要求保留较长期间。</p>
        </section>
        <section>
          <h2>第十一条　AI 代理资料处理</h2>
          <h3>11.1 输入资料</h3>
          <p>您提供予 AI 代理之讯息、提示及其他输入内容将被处理以生成回应，并可能用于改善 AI 代理功能。</p>
          <h3>11.2 输出资料</h3>
          <p>AI 代理之输出内容系自动生成，可能作为您对话记录之一部分而被储存。</p>
          <h3>11.3 AI 训练</h3>
          <p>我们可能使用来自 AI 代理互动之汇总及去识别化资料以改善我们的 AI 系统。未经您的明确同意，我们不会使用您可个别识别之对话来训练第三方 AI 模型。</p>
        </section>
        <section>
          <h2>第十二条　本政策之变更</h2>
          <p>我们可能不时更新本政策。我们将于本服务上公布更新后之政策并修订“最后更新”日期，以通知重大变更。就重大变更，我们亦可能提供额外通知（如应用程式内通知或电子邮件）。修订后之政策生效日后，您继续使用本服务即视为接受该等变更。</p>
        </section>
        <section>
          <h2>第十三条　联络我们</h2>
          <p>如您对本隐私权政策或我们的资料处理实务有任何疑问、顾虑或请求，请与我们联系：</p>
          <p><strong>隐私相关询问：</strong><a href="mailto:privacy@arinova.ai">privacy@arinova.ai</a></p>
          <p><strong>一般法律事务：</strong><a href="mailto:legal@arinova.ai">legal@arinova.ai</a></p>
        </section>
        <hr />
        <p>Arinova 版权所有。</p>
      </>
    ),
  },
};
