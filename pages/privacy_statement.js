import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "Privacy Statement";
const paragraphs = [
  { id: 1, subtitle: "Summary" },
  {
    id: 2,
    text: "This Privacy Statement was last updated on 21 May 2018, in observance of the General Data Protection Regulation (GDPR) from the European Union. Throughout this Agreement, we hope to clarify the following:",
  },
  { id: 3, bullet: "Information We collect from You" },
  { id: 4, bullet: "How Your Information is used" },
  { id: 5, bullet: "Where Your data is stored" },
  { id: 6, bullet: "How long Your information stays in our servers" },
  { id: 7, bullet: "Relevant technologies including cookies" },
  { id: 8, bullet: "How Your data is shared with our partners" },
  { id: 9, bullet: "How You can control Your data" },
  {
    id: 10,
    text: "We tried to exclude any legal or difficult terms as much as possible, so we hope that You are able to understand this Agreement sufficiently. Here are a list of important terms for more clarification:",
  },
  { id: 11, subtitle: "OTHER DEFINITIONS" },
  {
    id: 12,
    bullet:
      "“Agreement” – means the Terms of Use and this corresponding Privacy Statement",
  },
  {
    id: 13,
    bullet:
      "“Software” – interchangeably used to signify Imonggo point-of-sale and its services",
  },
  {
    id: 14,
    bullet:
      "“Data” – is any content or information that You input into Imonggo",
  },
  {
    id: 15,
    bullet:
      "“User” – any individual, representative or entity that uses Imonggo",
  },
  {
    id: 16,
    bullet:
      "“You” – means the User who is using Imonggo. “Your” has a corresponding meaning.",
  },
  {
    id: 17,
    bullet:
      "“We” – represents the people working on Imonggo. “Us” has a corresponding meaning",
  },
  { id: 18, bullet: "“Account” – a single registry on Imonggo" },
  {
    id: 19,
    bullet:
      "“Subscription” – a paid subscription via credit card or any other available methods to pay, to be able to access Imonggo’s premium features or additional branches",
  },
  {
    id: 20,
    bullet:
      "“User Activity” – any User login on the Account that leads to an action in the Software",
  },
  {
    id: 21,
    text: "Questions? Please send us an email at hello@imonggo.com or contact us via live chat.",
  },
  { id: 22, subtitle: "Information We Collect From You" },
  {
    id: 23,
    subtitle: "INFORMATION THAT YOU MANUALLY INPUT SO YOU CAN USE IMONGGO:",
  },
  {
    id: 24,
    text: "Identification: Data needed so You are able to create an Account and log in to Imonggo. These are Your Name, Your preferred account ID and email address. You also have to provide a password but that is encrypted so We do not have any way of knowing Your password. You also have to input the email address(es) and password(s) of any additional user(s) that You would like to use Your Account.",
  },
  {
    id: 25,
    text: "Business Information: Data needed to identify Your business. These are Business Name, Business Address, Branch Name(s), Branch Address(es), Branch Telephone Number(s), Business Tax Identification Number (or any similar tax identication), Business Type, Timezone, Unit of Currency and Tax Rate(s).",
  },
  {
    id: 26,
    text: "Billing Information: Data needed so You can subscribe to a premium Account. These include Your Paypal account, Your credit card number (last four digits), name on credit card, credit card type, credit card expiry month and year and credit card CVC (encrypted).",
  },
  {
    id: 27,
    text: "Inventory Information: Data of the products that You want to sell in Imonggo. These include all necessary product details like product names, stock numbers, costs, retail prices, barcodes, descriptions, on-hand quantity and more.",
  },
  {
    id: 28,
    text: "Customer Information: Data of your customers. These include customer name, gender, birthday, tax identification number, contact information (including email, telephone number and other similar information), address and other information.",
  },
  { id: 29, subtitle: "INFORMATION GENERATED FROM USING IMONGGO:" },
  {
    id: 30,
    text: "Log-in Information: These include the precise time that You log-in, Your IP address, Your precise geolocation, Your IP address, Your browser information, Your operating system, the pages that You visit in Imonggo, the features that You use, and how long you are logged in.",
  },
  {
    id: 31,
    text: "Usage Information: These are Data that You make in Imonggo as a result of Your use of its features and services. These include: Stockroom documents as a result of inventory transactions, stock history, cost history, price history, sales records as a results of sales transactions, historical sales reports, customer purchase history, customer rewards, subscription and payments history and other similar Data.",
  },
  { id: 32, subtitle: "INFORMATION FROM OTHER SOURCES:" },
  {
    id: 33,
    text: "Digital footprint: We integrate with services that monitors and analyzes Your presence in the internet, including: the pages You visited before visiting Imonggo, Your social media accounts, how many times You visit Imonggo, time spent on the site, Your exact geolocation, Your browser information (including, but not limited to, browser type and version), Your device information (including, but not limited to, operating system, version and screen resolution), information on Your internet service provider, and other similar information.",
  },
  {
    id: 34,
    text: "Billing Information: We integrate with services that records Your financial information, including: Your credit card details, Your bank account details, Your payment history and other similar information.",
  },
  {
    id: 35,
    text: "Messaging information: We integrate with messaging services that lets us send our messages to You. These services record the following: your email, telephone number, history of the messages You received from us, history of the messages You sent to us, Your action on the messages (read, bounce, and other similar actions) and other similar information.",
  },
  {
    id: 36,
    text: "Cookies: A cookie is a small data file that is sent to your computer when You first visit a website. As with most website cookies, Our cookies include an identification number that is unique to the computer You are using. This identifier helps us better understand Our userbase and how they are using Our site and services. As You visit Imonggo and create an Imonggo account, We will set and access cookies on Your computer. We use them to recognize You when You visit the site, respond to Your input data and to maintain security of Your account. We may also use the cookies to collect aggregated information about the use of Imonggo to maintain, analyze and improve the service. If you set Your browser so that it refuses cookies, you will not be able to use the Imonggo software.",
  },
  { id: 37, subtitle: "How Your Information Is Used" },
  { id: 38, text: "We may use Your information for the following purposes:" },
  { id: 39, bullet: "To let You log in to our Software" },
  {
    id: 40,
    bullet:
      "To let You view the history of Your products, including cost history, price history and historical inventory",
  },
  { id: 41, bullet: "To let You make inventory and sales transactions" },
  { id: 42, bullet: "To let You view your sales invoices" },
  { id: 43, bullet: "To let You view sales reports" },
  {
    id: 44,
    bullet: "To let You view your users’ log-in history and other information",
  },
  {
    id: 45,
    bullet:
      "To let You view a list of Your customers, their purchase history and their rewards Data",
  },
  { id: 46, bullet: "To let You avail of a premium subscription" },
  {
    id: 47,
    bullet:
      "To let You receive relevant announcements and marketing messages from Imonggo to Your email and other contact channels",
  },
  { id: 48, bullet: "To let You talk to Our customer support agents" },
  {
    id: 49,
    bullet:
      "To let Us monitor Your payments and subscriptions, and investigate any reported issues about them",
  },
  {
    id: 50,
    bullet:
      "To let Us monitor the usage statistics of the Accounts, letting us improve Our services",
  },
  { id: 51, bullet: "To let Us check and fix any issues with Our Software" },
  {
    id: 52,
    bullet:
      "To let Us create backups of Data for when We need to make a recovery of lost or missing information",
  },
  {
    id: 53,
    text: "When needed, We might ask for more information from You but We will inform You exactly the purpose of this additional request.",
  },
  {
    id: 54,
    text: "Imonggo will never sell, rent, or share Your personal information with any third parties for marketing purposes without Your express permission.",
  },
  { id: 55, subtitle: "How Your Information Is Shared" },
  {
    id: 56,
    text: "You information may be used internally with members of the staff of Imonggo and sister companies, for the purposes enumerated above.",
  },
  {
    id: 57,
    text: "Your information may be shared with Our allied partners, so they can provide their own services to You. These include Your sales transactions for credit card processing, Your inventory and sales records for analytics, or Your contact details and general usage information for Our external support channels. We may also share your contact information to Our partners so that they can contact You about their services.",
  },
  {
    id: 58,
    text: "We reserve the right to transfer Your personal information in the event of a transfer of ownership of Imonggo, such as acquisition by or merger with another company. In such an event, Imonggo will notify You before information is transferred and becomes subject to a different privacy statement.",
  },
  {
    id: 59,
    text: "We may share Your information to comply with law enforcement or governmental requests, with due diligence.",
  },
  {
    id: 60,
    text: "We also reserve the right to share composite information of a group of Imonggo users to companies that are in the field of analytics or big data. Your Data will not be identified to You and it will be treated with anonymity in mind.",
  },
  { id: 61, subtitle: "How You Can Control Your Information" },
  {
    id: 62,
    text: "You can log in to Your Imonggo Account at any time to edit Your personal information in the settings section of the Software. You may also delete Your transactional Data by resetting or terminating Your account.",
  },
  {
    id: 63,
    text: "Please read the next section to learn how We handle the deletion of Your Data from our servers.",
  },
  {
    id: 64,
    subtitle: "How Your Information Is Stored and How Long It Is Stored",
  },
  {
    id: 65,
    text: "Your Data is stored on third-party providers that has servers in Hong Kong, the United States, and other locations that follow the highest standards of security. We do our best to keep Your information secure, and We make sure that Your Data is backed up in several servers across continents to prevent data loss. However, We cannot assure that Your Data will be 100% safe from any issues like deletion or inconsistencies due to the unstable nature of the internet.",
  },
  {
    id: 66,
    text: "We try to keep Your Account Data in Our servers as long as possible, so that You can use Our services when You need to. However, We reserve the right to archive Your Data if Your Account becomes inactive or unused for a long period of time that We shall determine. We will give You ample notice before We archive Your Data.",
  },
  {
    id: 67,
    text: "We do not delete Your Data unless You specifically request for us to do so. Once Your Data has been deleted, it shall immediately cease to exist on Our initial server. However, since Your Data exists in several backups across several servers, it might take time for Your Data to be deleted from these backups. Moreover, We keep a log of your general information on Our server so that We can identify You should You choose to use Imonggo again.",
  },
  { id: 68, subtitle: "Other Important Privacy Information" },
  { id: 69, subtitle: "HOW WE CONTACT YOU" },
  {
    id: 70,
    text: "We primarily communicate with You via our live chat service in the Software or via Your email address, so We can send You product updates, bugs and alerts, marketing information, important notices and other similar messages.",
  },
  {
    id: 71,
    text: "You may opt out from this communication at any time by clicking the opt out buttons at the end of the email, or by telling us to do so via chat. However, please do note that by opting out, You will not any more receive important messages, and You may not anymore contact customer support.",
  },
  { id: 72, subtitle: "CHILDREN’S ONLINE PRIVACY PROTECTION ACT" },
  {
    id: 73,
    text: "In compliance with the Children’s Online Privacy Protection Act, Imonggo is only available to users who are at least 13 years old. If you are under 13, please do not use Imonggo.",
  },
  { id: 74, subtitle: "MODIFICATION OF THIS PRIVACY STATEMENT" },
  {
    id: 75,
    text: "Imonggo reserves the right to modify the terms and conditions of this Privacy Statement or its policies relating to the Software at any time, effective upon posting of an updated version of this Agreement on the Software. We always make an effort to inform You of any changes to this Agreement, but You are responsible for regularly reviewing it. Continued use of the Software after any such changes shall constitute Your consent to such changes. If You do not agree with this Privacy Statement, You are free to terminate Your account at any time.",
  },
  { id: 76, subtitle: "CONTACT US" },
  {
    id: 77,
    text: "If You have questions regarding this Privacy Statement or wish to obtain additional information, please send an e-mail thru the facility provided in the Imonggo website.",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
