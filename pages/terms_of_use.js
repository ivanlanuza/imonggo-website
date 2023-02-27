import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "Terms of Use";

const paragraphs = [
  {
    id: 1,
    text: "YOUR COMPLIANCE TO THIS AGREEMENT STARTS ON THE DATE THAT YOU CREATE YOUR ACCOUNT ON IMONGGO.",
  },
  {
    id: 2,
    text: "BY CREATING YOUR ACCOUNT, YOU AGREE TO THE FOLLOWING TERMS AND CONDITIONS AND POLICIES (THE “AGREEMENT”) GOVERNING YOUR USE OF IMONGGO’S ONLINE SERVICE.",
  },
  {
    id: 3,
    text: "IF YOU ACCEPT THIS AGREEMENT ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU REPRESENT THAT YOU ARE AUTHORIZED TO BIND THIS COMPANY TO THESE TERMS AND CONDITIONS, IN WHICH CASE THE TERMS “YOU” OR “YOUR” SHALL REFER TO THIS COMPANY. IF YOU DO NOT HAVE SUCH AUTHORITY, OR IF YOU DO NOT AGREE WITH THESE TERMS AND CONDITIONS, YOU MUST DISCONTINUE YOUR REGISTRATION AND YOU MAY NOT USE IMONGGO.",
  },
  { id: 4, subtitle: "DEFINITIONS" },
  {
    id: 5,
    text: "Imonggo will provide You with use of an Imonggo Sales and Inventory transaction recording, reporting and Point-of-Sale (POS), internet-based application that includes web-browser user interface screens, data input, maintenance, inquiry and storage. Upon registering for, or use of, Imonggo, You agree to abide by this Agreement and all related terms and conditions on the Imonggo website. This will include, but not be limited to, Imonggo’s privacy and security policies.",
  },
  { id: 6, text: "Imonggo is offered in several editions:" },
  {
    id: 7,
    bullet:
      "Free Edition (Free for one store and up to 1000 transactions lines per month.)",
  },
  {
    id: 8,
    bullet:
      "Premium Edition (Subscription fee chargeable as per rates and terms published in the Imonggo website)",
  },
  {
    id: 9,
    text: "Please refer to the Imonggo website for a description of the terms and features of our Free and Premium Edition.",
  },
  { id: 10, subtitle: "Other definitions:" },
  {
    id: 11,
    bullet:
      "“Agreement” – means this Terms of Use and the corresponding Privacy Statement",
  },
  {
    id: 12,
    bullet:
      "“Software” – interchangeably used to signify Imonggo point-of-sale and its services",
  },
  {
    id: 13,
    bullet:
      "“Data” – is any content or information that You input into Imonggo",
  },
  {
    id: 14,
    bullet:
      "“User” – any individual, representative or entity that uses Imonggo",
  },
  {
    id: 15,
    bullet:
      "“You” – means the User who is using Imonggo. “Your” has a corresponding meaning.",
  },
  { id: 16, bullet: "“Account” – a single registry on Imonggo" },
  {
    id: 17,
    bullet:
      "“Subscription” – a paid subscription via credit card or any other available methods to pay, to be able to access Imonggo’s premium features or additional branches",
  },
  {
    id: 18,
    bullet:
      "“User Activity” – any User login on the Account that leads to an action in the Software",
  },
  { id: 19, subtitle: "1. Privacy and Security Policies" },
  {
    id: 20,
    text: "Imonggo’s privacy and security policies may be viewed at http://3.128.202.144/privacy_statement/. Imonggo reserves the right to modify its privacy and security policies within reasonable discretion as the need arises.",
  },
  {
    id: 21,
    text: "As Imonggo is a hosted, internet based online application, Imonggo may need to distribute important notices or announcements regarding its operation, and You agree to accept these messages in Your registered email or in Imonggo itself.",
  },
  {
    id: 22,
    text: "If You register to use Imonggo whether for free or for a Subscription fee, You agree that Imonggo can disclose the fact that You are registered Imonggo customer.",
  },
  { id: 23, subtitle: "2. Imonggo License & Restrictions" },
  {
    id: 24,
    text: "Imonggo hereby extends to You a non-exclusive, non-transferable, worldwide right to use its features and services, solely for Your own internal business purposes, subject to the terms and conditions of this Agreement. All rights not expressly granted to You are reserved by Imonggo and its licensors.",
  },
  {
    id: 25,
    text: "The Imonggo name, the Imonggo logo, and the product names associated with the Software are trademarks that exclusively belong to Imonggo, and no right or license is granted to use them, unless explicit permission has been given.",
  },
  {
    id: 26,
    text: "If You are a direct competitor of Imonggo or employed or contracted by a direct competitor, You may not register to and access it, except with prior written consent. In addition, You may not access Imonggo for purposes of monitoring its availability, performance or functionality, or for any other benchmarking or competitive purposes.",
  },
  {
    id: 27,
    text: "You shall not license, sublicense, sell, resell, transfer, assign, distribute or otherwise commercially exploit or make available to any third party Imonggo or the its content in any way. You shall also not create Internet “links” to Imonggo or “frame” or “mirror” any content on any other server or wireless or Internet-based device. User licenses cannot be shared or used by more than one individual. Accounts may be reassigned from time to time to new Users who are replacing former Users who have terminated employment or otherwise changed job status or function and no longer use Imonggo.",
  },
  {
    id: 28,
    text: "You may use Imonggo only for Your internal business purposes. Imonggo may terminate Your Account immediately and without warning if it is found that You are using Imonggo for the following reasons:",
  },
  {
    id: 29,
    text: "send spam or otherwise duplicative or unsolicited messages in violation of applicable laws;",
  },
  {
    id: 30,
    text: "send or store infringing, obscene, threatening, libelous, or otherwise unlawful or tortuous material, including material harmful to children or that violate third party privacy rights;",
  },
  {
    id: 31,
    text: "send or store material containing software viruses, worms, Trojan horses or other harmful computer code, files, scripts, agents or programs;",
  },
  {
    id: 32,
    text: "interfere with or disrupt the integrity or performance of Imonggo or the data contained therein;",
  },
  {
    id: 33,
    text: "or attempt to gain unauthorized access to Imonggo or its related systems or networks.",
  },
  { id: 34, subtitle: "3. Your Duties and Responsibilities" },
  {
    id: 35,
    text: "You are responsible for all activity occurring under Your Imonggo Account and shall abide by all applicable local, state, national and foreign laws, treaties and regulations in connection with Your use of Imonggo, including those related to data privacy, international communications and the transmission of technical or personal data. You shall immediately inform Imonggo of any change in applicable local, state, national and foreign laws, treaties and regulations that may hinder in Your continued use of the Software. Imonggo can consider developing features or modifications that will support these changes, but Imonggo does not hold any obligation to fulfill them.",
  },
  {
    id: 36,
    text: "You shall advise Imonggo immediately of any unauthorized use of any password or Account or any other known or suspected breach of security and report to Imonggo immediately and use reasonable efforts to immediately stop any duplication or distribution of Data that is known or suspected by You or Your Users. You will also not falsely identify yourself to gain access to or use any Account.",
  },
  { id: 37, subtitle: "4. Account Information and Data" },
  {
    id: 38,
    text: "Imonggo does not own any of the Data that You submit to Imonggo in the course of using the Your Account. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, ownership or right to use of all Data, and Imonggo shall not be responsible or liable for the deletion, correction, destruction, damage, loss or failure to store any Data. For paid Subscription agreements, in the event such agreements are terminated (other than by reason of Your breach), Imonggo will make available to You a file of Your Data within 30 days of termination if You so request at the time of termination.",
  },
  {
    id: 39,
    text: "Imonggo reserves the right to withhold, remove and/or discard  Data without notice for any breach, including, without limitation, Your non-payment. Upon termination for cause, Your right to access or use Your Data immediately ceases, and Imonggo shall have no obligation to maintain or forward any Data. For free Accounts, You are responsible for regularly printing Your own Data (as and when the feature is available).",
  },
  {
    id: 40,
    text: "Please refer to our Privacy Statement for more information on how your Data on Imonggo is handled.",
  },
  { id: 41, subtitle: "5. Intellectual Property Rights" },
  {
    id: 42,
    text: "You acknowledge that Imonggo alone (and its licensors, where applicable) shall own all rights, title and interest, including without limitation all related Intellectual Property Rights, in and to the Imonggo trademark and logo, the Imonggo website and any suggestions, ideas, enhancement requests, feedback, recommendations or other information provided by You or any other party relating to the Software. Accordingly, You agree that You shall not copy, reproduce, alter, modify, or create derivative works of Imonggo. You also agree that You will not use any automated or manual process to monitor or copy any content from Imonggo. In particular, You shall not reverse engineer or access Imonggo in order to build a competitive product or service or to build a product using ideas, features, functions or graphics of Imonggo. Imonggo Intellectual Property Rights include rights to the Software, structure and other parts of Imonggo developed and provided by Imonggo. This agreement is not a sale and does not convey to You any rights of ownership in or related to the Software, Imonggo website or the Intellectual Property Rights owned by Imonggo.",
  },
  { id: 43, subtitle: "6. Third Party Interactions" },
  {
    id: 44,
    text: "During use of Imonggo, You may enter into correspondence with, purchase and sell goods and/or services from, or participate in promotions of advertisers or sponsors showing their goods and/or services through Imonggo. Any such, activity and any terms, conditions, warranties or representations associated with such, shall be solely between You and the applicable third-party. Imonggo and its licensors shall have no liability, obligation or responsibility for any such correspondence, purchase or promotion between You and any such third-party. Imonggo does not endorse any sites on the Internet that are linked through the Software. Imonggo provides these links to You only as a matter of convenience, and in no event shall Imonggo or its licensors be responsible for any content, products, or other materials on or available from such sites. Imonggo provides the Software to You pursuant to the terms and conditions of this Agreement. You recognize, however, that certain third-party providers of ancillary hardware or services may require Your agreement to additional or different license or other terms prior to Your use of or access to such hardware or services.",
  },
  { id: 45, subtitle: "7. Charges, Payments and Refund Policy" },
  {
    id: 46,
    text: "You shall pay all Subscription fees and charges to Your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable. The initial charges will be equal to the current number of branches requested times the Software Subscription license fees currently in effect. Payments must be made monthly in advance unless otherwise mutually agreed upon in writing. All Subscriptions obligations and payments are non-cancelable and nonrefundable. You are responsible for paying for the full Software Subscription fee due, whether or not the Software Subscription is actively used. All pricing terms are confidential, and You agree not to disclose them to any third party.",
  },
  { id: 47, subtitle: "8. Billing and Renewal" },
  {
    id: 48,
    text: "Imonggo charges and collects monthly in advance for use of the Software. Imonggo will automatically renew and bill Your credit card or Paypal account and notify You of the payment immediately. The renewal charge will be equal to the then-current number of total branches registered times the Subscription fee in effect during the prior term, unless Imonggo has given You at least 30 days prior written notice of a fee increase, which shall be effective upon renewal and thereafter. The renewal charges will be applied automatically on the date of renewal, as long as the Subscription is active and not canceled before the renewal date. Any charges from renewal are non-refundable, even if the User does not have any intention of using the Account.",
  },
  {
    id: 49,
    text: "Fees for other services will be charged on an as-quoted basis. Imonggo’s fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and You shall be responsible for payment of all such taxes or duties, excluding only Imonggo’s own income taxes.",
  },
  {
    id: 50,
    text: "You agree to provide Imonggo with complete and accurate billing and contact information. This information includes Your legal company name, street address, e-mail address, and name and telephone number of an authorized billing contact and license administrator. You agree to update this information within 30 days of any change to it. Imonggo reserves the right to terminate Your access to the Software, in addition to any other legal remedies, if the contact information You have provided is false or fraudulent.",
  },
  { id: 51, subtitle: "9. Non-Payment, Suspension and Termination of Account" },
  {
    id: 52,
    text: "Imonggo reserves the right to suspend Your access to the Data in Your Account if You fail to pay Your Subscription fees. To access the Data, You have to pay the current unpaid Subscription rate, plus any unpaid Subscription fees from previous periods.",
  },
  {
    id: 53,
    text: "If You or Imonggo initiates termination of this Agreement, You will be obligated to pay the balance due on Your account computed in accordance with the Charges and Payment of Fees section above. You agree that Imonggo may charge such unpaid fees to Your credit card or otherwise bill You for such unpaid fees.",
  },
  {
    id: 54,
    text: "Imonggo reserves the right to impose a re-registration fee in the event Your Account is suspended and You request access to Your Account Data.",
  },
  {
    id: 55,
    text: "You agree and acknowledge that Imonggo has no obligation to retain Your Account Data and that such Data may be irretrievably deleted if Your Account has no User Activity on that Account for more than 60 days.",
  },
  {
    id: 56,
    text: "Please check the Privacy Statement for more information on how Your Data is stored and maintained on Imonggo.",
  },
  { id: 57, subtitle: "10. Representations & Warranties" },
  {
    id: 58,
    text: "Each party represents and warrants that it has the legal power and authority to enter into this Agreement. Imonggo represents and warrants that it will provide the Software in a manner consistent with general industry standards reasonably applicable to the provision thereof and that the Software will perform substantially in accordance with the online Imonggo help documentation under normal use and circumstances. You represent and warrant that You have not falsely identified Yourself nor provided any false information to gain access to the Software and that Your billing information is correct.",
  },
  { id: 59, subtitle: "11. Indemnification" },
  {
    id: 60,
    text: "You agree to hold harmless and indemnify Imonggo, and its subsidiaries, affiliates, officers, agents, and employees from and against any third party claim arising from or in any way related to Your use of the Software, including any liability or expense arising from all claims, losses, damages (actual and consequential), suits, judgments, litigation costs and attorneys’ fees, of every kind and nature.",
  },
  { id: 61, subtitle: "12. Disclaimer of Warranties" },
  {
    id: 62,
    text: "IMONGGO AND ITS LICENSORS MAKE NO REPRESENTATION, WARRANTY, OR GUARANTY AS TO THE RELIABILITY, TIMELINESS, QUALITY, SUITABILITY, TRUTH, AVAILABILITY, ACCURACY OR COMPLETENESS OF THE SOFTWARE OR ANY CONTENT. IMONGGO AND ITS LICENSORS DO NOT REPRESENT OR WARRANT THAT USE OF THE SOFTWARE WILL BE SECURE, TIMELY, UNINTERRUPTED OR ERROR-FREE OR OPERATE IN COMBINATION WITH ANY OTHER HARDWARE, SERVICE, SYSTEM OR DATA; OR THAT THE SOFTWARE WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS WHETHER OR NOT EXPRESSED, OR THAT ANY STORED DATA WILL BE ACCURATE OR RELIABLE; OR THAT THE QUALITY OF THE SOFTWARE AND SUBSCRIPTION SERVICE PURCHASED OR OBTAINED BY YOU THROUGH IMONGGO WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS; OR THAT ERRORS OR DEFECTS WILL BE CORRECTED; OR THAT THE SOFTWARE OR THE SERVER(S) THAT MAKE IMONGGO AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. THE SOFTWARE AND ALL CONTENT IS PROVIDED TO YOU STRICTLY ON AN “AS IS” BASIS. ALL CONDITIONS, REPRESENTATIONS AND WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT OF THIRD PARTY RIGHTS, INCLUDING INTELLECTUAL PROPERTY RIGHTS, ARE HEREBY DISCLAIMED TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW BY IMONGGO AND ITS LICENSORS.",
  },
  { id: 63, subtitle: "13. Force Majeure" },
  {
    id: 64,
    text: "IMONGGO’S SERVICES MAY BE SUBJECT TO LIMITATIONS, DELAYS, AND OTHER PROBLEMS INHERENT IN THE USE OF THE INTERNET AND ELECTRONIC COMMUNICATIONS, ARISING OUT OF OR CAUSED BY, DIRECTLY OR INDIRECTLY, FORCES BEYOND ITS CONTROL, INCLUDING, WITHOUT LIMITATION, STRIKES, WORK STOPPAGES, ACCIDENTS, ACTS OF WAR OR TERRORISM, CIVIL OR MILITARY DISTURBANCES, NUCLEAR OR NATURAL CATASTROPHES OR ACTS OF GOD, AND INTERRUPTIONS, LOSS OR MALFUNCTIONS OF UTILITIES, COMMUNICATIONS OR COMPUTER (SOFTWARE AND HARDWARE) SERVICES. IMONGGO IS NOT RESPONSIBLE FOR ANY DELAYS, DELIVERY FAILURES, OR OTHER DAMAGE RESULTING FROM SUCH PROBLEMS. YOU ARE RESPONSIBLE FOR PROCURING AND MAINTAINING THE APPROPRIATE INTERNET SERVICES REQUIRED FOR YOUR USE OF THE SOFTWARE.",
  },
  { id: 65, subtitle: "14. Limitation of Liability" },
  {
    id: 66,
    text: "IN NO EVENT SHALL EITHER PARTY’S AGGREGATE LIABILITY EXCEED THE AMOUNTS ACTUALLY PAID BY AND/OR DUE FROM YOU IN THE TWELVE (12) MONTH PERIOD IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO SUCH CLAIM. IN NO EVENT SHALL EITHER PARTY AND/OR ITS LICENSORS BE LIABLE TO ANYONE FOR ANY INDIRECT, PUNITIVE, SPECIAL, EXEMPLARY, INCIDENTAL, CONSEQUENTIAL OR OTHER DAMAGES OF ANY TYPE OR KIND (INCLUDING LOSS OF DATA, REVENUE, PROFITS, USE OR OTHER ECONOMIC ADVANTAGE) ARISING OUT OF, OR IN ANY WAY CONNECTED WITH THIS SOFTWARE, INCLUDING BUT NOT LIMITED TO THE USE OR INABILITY TO USE THE SOFTWARE, OR FOR ANY CONTENT OBTAINED FROM OR THROUGH THE SOFTWARE, ANY INTERRUPTION, INACCURACY, ERROR OR OMISSION, REGARDLESS OF CAUSE IN THE CONTENT, EVEN IF THE PARTY FROM WHICH DAMAGES ARE BEING SOUGHT OR SUCH PARTY’S LICENSORS HAVE BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
  },
  { id: 67, subtitle: "15. Local Laws" },
  {
    id: 68,
    text: "Imonggo and its licensors make no representation that the Software is appropriate or available for use in any location. You are solely responsible for compliance with all applicable laws, including without limitation export and import regulations the countries in which You use the Software.",
  },
  { id: 69, subtitle: "16. Notice" },
  {
    id: 70,
    text: "Imonggo may give notice by means of a general notice on the Software; electronic mail to Your e-mail address on record in Imonggo’s account information, or by written communication sent by first class mail or pre-paid post to Your address on record in Imonggo’s account information. Such notice shall be deemed to have been given upon the expiration of 48 hours after mailing or posting (if sent by first class mail or pre-paid post) or 24 hours after sending (if sent by email). You may give notice to Imonggo via email thru such facility provided on the Imonggo website.",
  },
  { id: 71, subtitle: "17. Modification of Terms" },
  {
    id: 72,
    text: "Imonggo reserves the right to modify the terms and conditions of this Agreement or its policies relating to the Software at any time, effective upon posting of an updated version of this Agreement on the Software. We always make an effort to inform You of any changes to this agreement, but You are responsible for regularly reviewing this Agreement. Continued use of the Software after any such changes shall constitute Your consent to such changes.",
  },
  { id: 73, subtitle: "Questions or Additional Information" },
  {
    id: 74,
    text: "If You have questions regarding this Agreement or wish to obtain additional information, please send an e-mail thru the facility provided in the Imonggo website.",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
