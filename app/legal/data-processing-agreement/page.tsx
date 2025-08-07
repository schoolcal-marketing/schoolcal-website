import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Processing Agreement - SchoolCal',
  description: 'Our comprehensive data processing agreement outlining how we handle and protect personal data in compliance with GDPR and other data protection regulations.',
  openGraph: {
    title: 'Data Processing Agreement - SchoolCal',
    description: 'Our comprehensive data processing agreement outlining how we handle and protect personal data in compliance with GDPR and other data protection regulations.',
    type: 'website',
    url: 'https://schoolcal.com/legal/data-processing-agreement',
  },
  alternates: {
    canonical: 'https://schoolcal.com/legal/data-processing-agreement',
  },
}

export default function DataProcessingAgreementPage() {
  return (
    <div className="min-h-screen bg-background-white">
      {/* Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-6">
              Data Processing Agreement
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Section 1 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">1. About this DPA</h2>
                <div className="space-y-4">
                  <p className="body-medium text-text-dark-blue">
                    <strong>a)</strong> This Data Processing Agreement ("DPA") is a legal agreement which forms an integral part of and applies in addition to the existing SchoolCal Service Agreement ("Service Agreement") concluded by and between the Customer (as defined in the Service Agreement) as controller and SchoolCal and the SchoolCal affiliate that is the contracting entity (as defined in the Service Agreement) (collectively referred to as "SchoolCal" in this DPA) as processors in connection with the provision of services, which include various data processing services, to Customer ("Services"). Signature of the Service Agreement shall be deemed to constitute signature and acceptance of this DPA, which is incorporated by reference therein.
                  </p>
                  <p className="body-medium text-text-dark-blue">
                    <strong>b)</strong> This DPA consists of:
                  </p>
                  <ul className="list-disc list-inside ml-6 space-y-2">
                    <li className="body-medium text-text-dark-blue">the main body of the DPA</li>
                    <li className="body-medium text-text-dark-blue">Schedule 1. Description of SchoolCal's Security Measures</li>
                    <li className="body-medium text-text-dark-blue">Schedule 2. Only for Customers established in the United Kingdom (UK), the EU Standard Contractual Clauses for processors 2010 are incorporated in this DPA by reference.</li>
                    <li className="body-medium text-text-dark-blue">Schedule 3. Only for Customers established in the European Economic Area (EEA) or Switzerland, the EU Standard Contractual Clauses for controller to processor (2021) are incorporated in this DPA by reference (together with the 2010 processor SCCs, "SCCs"). If you would like to execute a copy of the SCCs, we invite you to sign and return them to us by email at <a href="mailto:legal@schoolcal.co" className="text-primary hover:text-primary-dark underline">legal@schoolcal.co</a>, indicating, if applicable, the Customer's legal entity and/or account number (mentioned on the applicable SchoolCal Order Form or invoice). See Section 10 for more details about international data transfers.</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">2. Definitions</h2>
                <p className="body-medium text-text-dark-blue">
                  Terms used in this DPA have the same meaning as those used in the Service Agreement, unless otherwise stated. If there are any conflicts or inconsistencies between the Service Agreement and this DPA, this DPA prevails.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">3. Description of Personal Data</h2>
                <p className="body-medium text-text-dark-blue mb-4">
                  When carrying out the Services, SchoolCal may have access to or otherwise receive or process information relating to identified or identifiable individuals ("Personal Data").
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">a) Type of Personal Data processed</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      Depending on how the Customer chooses to use the Services, SchoolCal may process the following types of Personal Data:
                    </p>
                    <p className="body-medium text-text-dark-blue mb-3">
                      First name, Last name; Contact information (e-mail address, home address, phone number); Language; Date of birth; IP address; Location data; Government-issued identification numbers; School-assigned identification numbers; Financial information; Bank account details.
                    </p>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal may also process other kinds of Personal Data if Customer has chosen to collect and input such Personal Data into our Services. The Services do not require other kinds of Personal Data to function properly. SchoolCal disclaims all liability for damages or claims associated with Customer's choice to input non-compulsory Personal Data into the Services.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">b) Data subjects</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      Personal Data about the following categories of individuals is processed:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                      <li className="body-medium text-text-dark-blue">Owner(s) of a business that subscribes to SchoolCal's Services.</li>
                      <li className="body-medium text-text-dark-blue">Employees and other persons authorized by the Customer who have access to and use the Services (End-Users).</li>
                      <li className="body-medium text-text-dark-blue">Individuals whose Personal Data is processed using the Services, including a Customer's customers and suppliers.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">4. Purposes of the processing</h2>
                <p className="body-medium text-text-dark-blue">
                  SchoolCal is a provider of software-as-a-service designed primarily for K-12 schools who are seeking to integrate some of their chosen third-party systems. SchoolCal shall process Personal Data on behalf of the Customer to provide these services to the Customer pursuant to the Service Agreement and any additional purposes as instructed by Customer when using the Services. When SchoolCal acts as processor of the Personal Data, SchoolCal may only process Personal Data on behalf of Customer and solely for the purposes identified in this DPA and the Service Agreement.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">5. Responsibilities regarding data processing</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">a) Controller</h3>
                    <p className="body-medium text-text-dark-blue">
                      Customer is the controller of all the Personal Data that it collects through the Services. Customer shall ensure that it is entitled to process and transfer the Personal Data to SchoolCal so that SchoolCal may lawfully process the Personal Data on Customer's behalf, as contemplated under this DPA.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">b) Processor</h3>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal acts as a processor of the Personal Data collected by the Customer through the use of the Services.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">c) Sub-processors</h3>
                    <p className="body-medium text-text-dark-blue">
                      Customer acknowledges and hereby grants its express written authorization that (i) SchoolCal's affiliates may act as SchoolCal's sub-processors; and (ii) SchoolCal may engage sub-processors as necessary to perform the Services. The list of SchoolCal's Authorized sub-processors can be found on this webpage (<a href="https://www.schoolcal.co/legal/subprocessors" className="text-primary hover:text-primary-dark underline">https://www.schoolcal.co/legal/subprocessors</a>) and Customer acknowledges that these sub-processors are essential to provide the Services. SchoolCal will inform Customer if it adds, replaces or changes its sub-processors by updating the aforementioned list. Customer may object to the changes on legitimate grounds in accordance with the principles of good faith, reasonableness and fairness within 30 calendar days after the change. Customer acknowledges that if it objects to SchoolCal's use of a sub-processor, SchoolCal will not be obligated to provide Customer the Services for which SchoolCal uses that sub-processor.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">6. Data processing</h2>
                <p className="body-medium text-text-dark-blue mb-4">
                  SchoolCal shall ensure that any processing shall be fair, lawful, and consistent with SchoolCal's obligations under this DPA and compliant with applicable data protection law. In particular:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">a) Controller instructions</h3>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal shall process Personal Data only on the documented instructions of Customer. If SchoolCal is required to additionally process Personal Data in compliance with an applicable law or regulation to which SchoolCal is subject, it will inform Customer of such legal requirement prior to such processing, unless prohibited from doing so by an applicable law or regulation.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">b) Ensure appropriate protection</h3>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal shall ensure appropriate protection of Personal Data against accidental or unlawful destruction or accidental loss, alteration, unauthorized disclosure or access, in particular where processing involves a transmission of Personal Data over a network, and against all other unlawful forms of processing.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">c) Security safeguards</h3>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal shall comply with modern security requirements taking into consideration the state of the art, the costs of implementation and the nature, scope, context and purposes of processing.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">d) Disclosure</h3>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal shall not disclose Personal Data to any third party or unauthorized persons, unless Customer has given its prior written consent to such disclosure and subject to the conditions laid down under section 6 of this DPA.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">e) Confidentiality</h3>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal shall hold Personal Data in strict confidentiality and require that employees and any other person under its authority who will be provided access to or will otherwise process Personal Data are held to the same level of confidentiality in accordance with the requirements of the DPA (including during the term of their employment or engagement and thereafter).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">f) Data subject requests</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      SchoolCal shall take appropriate measures to assist the Customer, insofar as this is possible, in fulfilling Customer's obligations as a controller in responding to requests from individual data subjects to exercise their rights under any applicable data protection law or regulation. In addition, SchoolCal shall promptly notify Customer if it receives a request from an individual with respect to Personal Data, including but not limited to information access requests, information rectification requests, requests for blocking, erasure, or portability of Personal Data and shall not respond to any such requests unless expressly authorized to do so by Customer or unless required under an applicable data protection law or a law of the European Union or a Member State to which SchoolCal is subject. Additionally, SchoolCal shall ensure that it has implemented technical and organizational measures to assist Customer in fulfilling its obligation to respond to any such requests from an individual with respect to Personal Data processed.
                    </p>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal shall promptly and properly deal with enquiries and requests from Customer in relation to the processing of Personal Data under this DPA.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">g) Assistance with Customer's compliance</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      Taking into account the nature of the processing and the information available to SchoolCal, SchoolCal shall assist the Customer in ensuring compliance with the obligations regarding security measures and conducting data protection impact assessments, where necessary pursuant to Articles 32-36 of the General Data Protection Regulation (GDPR).
                    </p>
                    <p className="body-medium text-text-dark-blue mb-3">
                      SchoolCal shall assist and support Customer in the event of an investigation by a data protection authority or similar authority, if and to the extent that such investigation relates to the processing of Personal Data under this DPA.
                    </p>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal shall promptly notify Customer if in SchoolCal's view an instruction given by Customer infringes applicable laws and regulations, including data protection laws, or a change in the applicable laws and regulations is likely to have a substantially adverse effect on its ability to comply with its obligations under this DPA. SchoolCal shall be entitled to suspend the implementation of the relevant instruction until it is confirmed or amended by the Customer. SchoolCal may refuse to carry out an instruction that is obviously unlawful.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">h) Disclosure requests</h3>
                    <p className="body-medium text-text-dark-blue">
                      To the extent permitted by applicable law, SchoolCal shall notify Customer of each request SchoolCal receives from a public authority requiring SchoolCal to disclose Personal Data processed in the context of the Service Agreement or to participate in an investigation involving that Personal Data. SchoolCal will make reasonable efforts to narrow the scope of any such request received and will provide only the Personal Data specifically requested.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">i) Data breach</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      SchoolCal shall promptly (and in any event within forty-eight (48) hours) after becoming aware, notify Customer of any facts known to SchoolCal concerning any actual accidental or unauthorized access, disclosure or use, or accidental or unauthorized loss, damage or destruction of Personal Data by any current or former employee, contractor or agent of SchoolCal or by any other person or third party.
                    </p>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal shall cooperate fully with Customer in the event of any accidental or unauthorized access, disclosure or use, or accidental or unauthorized loss, damage or destruction of Personal Data by any current or former employee, contractor or agent of SchoolCal or by any other person or third party, in order to limit the unauthorized disclosure or use, seek the return of any Personal Data, and assist in providing notice to competent regulators and affected individuals if requested by Customer.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">7. Onward processing</h2>
                <p className="body-medium text-text-dark-blue">
                  SchoolCal may only subcontract performance of part of the Services to third parties as subprocessors (including SchoolCal's affiliates outside the EEA, Switzerland and the UK) if SchoolCal ensures that such sub-processors are bound to obligations that are not less onerous that those set out in this DPA.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">8. Retention and deletion</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">a)</h3>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal processes Personal Data for as long as it is reasonably needed to deliver the Services. The retention term can be longer if SchoolCal is required to keep Personal Data longer on the basis of applicable law or to administer its business.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">b)</h3>
                    <p className="body-medium text-text-dark-blue">
                      Upon request by Customer, SchoolCal shall immediately cease to process Personal Data and shall promptly return all such Personal Data, or delete the same, in accordance with such instructions as may be given by Customer at that time, unless it is required to store the Personal Data under an applicable law or regulation to which SchoolCal is subject or unless explicitly agreed otherwise with Customer. The obligations set out in this section shall remain in force notwithstanding termination or expiration of this DPA.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">9. Audit and Compliance</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">a)</h3>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal will make available to the Customer all information necessary to demonstrate compliance with the obligations regarding the processing of Personal Data provided to SchoolCal in its role as a data processor.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">b)</h3>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal shall make the processing systems, facilities and supporting documentation relevant to the processing of Personal Data available for an audit by Customer or a qualified independent assessor selected by Customer and provide all assistance Customer may reasonably require for the audit no more than one time per 12-month period. If the audit demonstrates that SchoolCal has breached any obligation under the DPA, SchoolCal shall immediately cure that breach.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">c)</h3>
                    <p className="body-medium text-text-dark-blue">
                      In case of inspection or audits by a competent governmental authority relating to the processing of Personal Data, SchoolCal shall make available its relevant processing systems, facilities and supporting documentation to the relevant competent public authority for an inspection or audit if this is necessary to comply with applicable laws. In the event of any inspection or audit, each party shall provide all reasonable assistance to the other party in responding to that inspection or audit. If a competent public authority deems the processing of Personal Data under this DPA unlawful, the parties shall take immediate action to ensure future compliance with applicable data protection law. Instead of on-site inspections and controls, SchoolCal may refer the Customer to an equivalent control by independent third parties (such as neutral data protection auditors), compliance with approved rules of conduct (Art. 40 GDPR) or suitable data protection or IT security certifications pursuant to Art. 42 GDPR. This applies in particular if company and business secrets of SchoolCal or Personal Data of third parties would be endangered by the controls.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">d)</h3>
                    <p className="body-medium text-text-dark-blue">
                      Customer will reimburse SchoolCal for any reasonable costs incurred by SchoolCal in connection with any audit or inspection by (or on behalf of) Customer or a competent governmental authority, except where such audit or inspection reveals that SchoolCal has breached any of its obligations under the DPA.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">e)</h3>
                    <p className="body-medium text-text-dark-blue">
                      Except where SchoolCal is otherwise prohibited by law from making such disclosure, SchoolCal shall promptly inform Customer if: (i) it receives an inquiry, a subpoena or a request for inspection or audit from a competent public authority relating to the processing of Personal Data under this DPA, if it concerns the data of the Customer; or (ii) it intends to disclose Personal Data to any competent public authority.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">f)</h3>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal shall ensure that any employee, agent, independent contractor, or any other person engaging in the provision of the Services and who has access to Personal Data of Customer, shall comply with all data protection and privacy laws and regulations (including any and all legislative and/or regulatory amendments or successors thereto), applicable to SchoolCal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">10. Data transfers (only for Customers established in the EEA, Switzerland or the UK)</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">a)</h3>
                    <p className="body-medium text-text-dark-blue">
                      Customer authorizes SchoolCal to commission processing in a third country, including by sub-processors, if the specific requirements of articles 44-49 GDPR are met. Customer shall be deemed to have granted explicit consent for processing in a third country with regard to the processing operations by SchoolCal and the Authorized Sub-processors as listed here.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">b)</h3>
                    <p className="body-medium text-text-dark-blue">
                      If needed, SchoolCal relies on the appropriate enclosed Standard Contractual Clauses ("SCCs"), attached hereto as Schedule 2 and Schedule 3, as an approved transfer mechanism for international transfers of Personal Data. In these SCCs, Customer is the data exporter and SchoolCal is the data importer.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">c)</h3>
                    <p className="body-medium text-text-dark-blue">
                      Signature of the Service Agreement shall be deemed to constitute signature and acceptance of the appropriate SCCs. If Customer would like to additionally execute a separate copy of the appropriate SCCs, Customer may complete the appropriate pre-signed version attached hereto as Schedule 2 or Schedule 3, countersign it, and return it to SchoolCal by email at <a href="mailto:legal@schoolcal.co" className="text-primary hover:text-primary-dark underline">legal@schoolcal.co</a>, indicating, if applicable, the Customer's legal entity and/or account number (mentioned on the applicable SchoolCal Order Form or invoice).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">d)</h3>
                    <p className="body-medium text-text-dark-blue">
                      In the absence of the aforementioned appropriate safeguards, SchoolCal may – to the extent permitted under and in accordance with applicable data protection laws (including GDPR) – rely on a derogation applicable to the specific situation at hand (e.g. the data subjects' explicit consent, the necessity for the performance of an agreement, the necessity for the establishment, exercise or defense of legal claims).
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">11. Data inquiries</h2>
                <p className="body-medium text-text-dark-blue mb-4">
                  Any Customer may, at any time, contact SchoolCal at <a href="mailto:legal@schoolcal.co" className="text-primary hover:text-primary-dark underline">legal@schoolcal.co</a> with all questions and suggestions concerning data protection.
                </p>
                
                <div className="bg-background-cream p-6 rounded-lg">
                  <h3 className="heading-3 text-text-black mb-3">For Customers established in Germany only:</h3>
                  <p className="body-medium text-text-dark-blue mb-3">
                    Customer may contact SchoolCal's Data Protection Officer:
                  </p>
                  <div className="space-y-1">
                    <p className="body-medium text-text-dark-blue"><strong>Aaron Vogelzang</strong></p>
                    <p className="body-medium text-text-dark-blue">PO Box 58</p>
                    <p className="body-medium text-text-dark-blue">Blooming Glen, PA 18911</p>
                    <p className="body-medium text-text-dark-blue">USA</p>
                    <p className="body-medium text-text-dark-blue">Email: <a href="mailto:aaron@schoolcal.co" className="text-primary hover:text-primary-dark underline">aaron@schoolcal.co</a></p>
                    <p className="body-medium text-text-dark-blue">With a copy to: <a href="mailto:legal@schoolcal.co" className="text-primary hover:text-primary-dark underline">legal@schoolcal.co</a></p>
                  </div>
                </div>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">12. General provisions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">a) Amendments</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      Any amendments or supplements to this DPA must be made in writing. The same applies to any waiver of any right or obligation under this DPA. The order of precedence of individual contractual agreements shall remain unaffected thereby. SchoolCal reserves the right to amend this DPA at any time with effect for the future. Amendments will only be made if the following objective reasons exist:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                      <li className="body-medium text-text-dark-blue">if the amendment helps to bring the DPA in line with applicable law, in particular if the applicable legal situation changes;</li>
                      <li className="body-medium text-text-dark-blue">if the amendment enables SchoolCal to comply with mandatory judicial or administrative decisions;</li>
                      <li className="body-medium text-text-dark-blue">if the amendment reflects details of a new or updated SchoolCal Service or of new or updated technical or organizational processes and the existing contractual relationship with Customer is not affected to Customer's detriment;</li>
                      <li className="body-medium text-text-dark-blue">if the amendment is solely to Customer's advantage.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">b) Severability</h3>
                    <p className="body-medium text-text-dark-blue">
                      If any provision of this Agreement is or becomes invalid or impracticable in whole or in part, the validity of the remaining provisions shall not be affected thereby.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">c) Term</h3>
                    <p className="body-medium text-text-dark-blue">
                      This DPA shall be effective for the entire Term (as defined in the Service Agreement) and this DPA terminates on the date on which the Service Agreement has expired or is terminated.
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule 1 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">Schedule 1: Description of SchoolCal's Security Measures</h2>
                <p className="body-medium text-text-dark-blue mb-4">
                  SchoolCal has taken appropriate and sufficient technical and organizational security measures to protect the Personal Data against accidental or unlawful destruction or accidental loss, alteration, unauthorized disclosure or access, in particular where processing involves a transmission of Personal Data over a network, and against all other unlawful forms of processing.
                </p>
                
                <p className="body-medium text-text-dark-blue mb-4">
                  SchoolCal has established and maintains policies and procedures to delineate standards for logical access on the SchoolCal production environments. The policies also identify functional responsibilities for the administration of logical access and security. SchoolCal Information Security policies are reviewed and approved on an annual basis by Leadership and are used to support SchoolCal in meeting the service commitments made to the Customer.
                </p>
                
                <p className="body-medium text-text-dark-blue mb-6">
                  The following description provides an overview of the technical and organizational security measures implemented. Such measures shall include, but are not limited to the following. For more detailed information on the latest state of art measures, please contact us directly.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">Data Protection</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      SchoolCal will process the Personal Data as a Data processor, only for the purpose of providing the Services in accordance with documented instructions from the Customer (provided that such instructions are commensurate with the functionalities of the Services), and as may be agreed to with Customer.
                    </p>
                    <p className="body-medium text-text-dark-blue mb-3">
                      SchoolCal implements and maintains appropriate technical and organizational measures to protect the Personal Data against unauthorized or unlawful processing and against accidental loss, destruction, damage, theft, alteration or disclosure.
                    </p>
                    <p className="body-medium text-text-dark-blue mb-3">
                      SchoolCal ensures that its personnel who access the Personal Data are subject to confidentiality obligations that restrict their ability to disclose the Personal Data.
                    </p>
                    <p className="body-medium text-text-dark-blue mb-3">
                      SchoolCal employs the concepts of least privilege and need-to-know, allowing only the necessary access for users to accomplish their job function. User accounts are created to have minimal access. Access above these least privileges requires appropriate and separate authorization.
                    </p>
                    <p className="body-medium text-text-dark-blue mb-3">
                      SchoolCal enforces Multi-Factor Authentication on all critical applications and infrastructure.
                    </p>
                    <p className="body-medium text-text-dark-blue mb-3">
                      <strong>In-transit:</strong> SchoolCal makes HTTPS encryption available on every one of its login interfaces and on every customer site hosted on the SchoolCal products. SchoolCal's HTTPS implementation uses industry standard algorithms and certificates.
                    </p>
                    <p className="body-medium text-text-dark-blue">
                      <strong>At-rest:</strong> SchoolCal stores user passwords following industry standard practices for security. SchoolCal performs encryption at rest on other sensitive fields specifically identified by SchoolCal.
                    </p>
                  </div>

                  <div>
                    <h3 className="heading-3 text-text-black mb-3">Access Control</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="heading-3 text-text-black mb-3">1. Preventing Unauthorized Product Access</h4>
                        <div className="space-y-3">
                          <p className="body-medium text-text-dark-blue">
                            <strong>Outsourced processing:</strong> SchoolCal hosts its services on third party Hosting infrastructure in form of data centers and Infrastructure-as-a-Service (IaaS). Additionally, SchoolCal maintains contractual relationships with vendors in order to provide the service in accordance with our DPA. SchoolCal relies on contractual agreements, privacy policies, and vendor compliance programs in order to protect data processed or stored by these vendors.
                          </p>
                          <p className="body-medium text-text-dark-blue">
                            <strong>Physical and environmental security:</strong> SchoolCal hosts its product infrastructure with multi-tenant, outsourced infrastructure providers. The physical and environmental security controls of our infrastructure providers are audited for SOC 2 Type II, ISO 27001 and PCI DSS compliance, among other certifications.
                          </p>
                          <p className="body-medium text-text-dark-blue">
                            <strong>Authentication:</strong> SchoolCal implemented a uniform password policy for its customer products. All users who need to interact with the products via any interface must authenticate before accessing non-public customer data.
                          </p>
                          <p className="body-medium text-text-dark-blue">
                            <strong>Authorization:</strong> Customer data is stored in multi-tenant storage systems accessible to Customers via only application user interfaces and application programming interfaces. Customers are not allowed direct access to the underlying application infrastructure. The authorization model of SchoolCal's products is designed to ensure that only the appropriately assigned individuals can access relevant features, views, and customization options. Authorization to data sets is performed through validating the user's permissions against the attributes associated with each data set.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="heading-3 text-text-black mb-3">2. Preventing Unauthorized Product Use</h4>
                        <div className="space-y-3">
                          <p className="body-medium text-text-dark-blue">
                            <strong>Access controls:</strong> Network access control mechanisms are designed to prevent network traffic using unauthorized protocols from reaching the product infrastructure. The technical measures implemented differ between infrastructure providers and include Virtual Private Cloud (VPC) implementations, security group assignment, and traditional firewall rules.
                          </p>
                          <p className="body-medium text-text-dark-blue">
                            <strong>Intrusion detection and prevention:</strong> SchoolCal implemented a Web Application Firewall (WAF) solution to protect certain hosted customer websites and other internet-accessible applications specifically identified by SchoolCal. The WAF is designed to identify and prevent attacks against publicly available services.
                          </p>
                          <p className="body-medium text-text-dark-blue">
                            <strong>Vulnerability scanning:</strong> SchoolCal regularly scans its code, infrastructure and web services for known vulnerabilities and remediates them in a timely manner. SchoolCal subscribes to news feeds for applicable vendor flaws and proactively monitors vendor's websites and other relevant outlets for new patches.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="heading-3 text-text-black mb-3">3. Limitations of Privilege & Authorization Requirements</h4>
                        <div className="space-y-3">
                          <p className="body-medium text-text-dark-blue">
                            <strong>Product access:</strong> SchoolCal's employees have access to the products and to customer data via controlled interfaces. The intent of providing access to employees is to provide effective support, to troubleshoot potential problems, to detect and respond to security incidents and implement data security. Employees are granted access by role or upon submitting an approved request. Log-ins to data storage or processing systems are logged.
                          </p>
                          <p className="body-medium text-text-dark-blue">
                            <strong>Database access:</strong> Customer data is accessible and manageable only by properly authorized staff. Direct database query access is restricted, and application access rights are established and enforced.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="heading-3 text-text-black mb-3">Incident Management Control</h3>
                    <div className="space-y-3">
                      <p className="body-medium text-text-dark-blue">
                        <strong>Detection:</strong> SchoolCal designed its infrastructure to log extensive information about the system behavior, traffic received, system authentication, and other application requests. Internal systems aggregate log data and alert appropriate employees of malicious, unintended, or anomalous activities. SchoolCal personnel are responsive to known incidents.
                      </p>
                      <p className="body-medium text-text-dark-blue">
                        <strong>Response and tracking:</strong> SchoolCal maintains a record of known security incidents that includes descriptions, dates and times of relevant activities, and incident remediation. Suspected and confirmed security incidents are investigated by SchoolCal personnel, and appropriate resolution steps are identified and documented. For any confirmed incidents, SchoolCal will take appropriate steps to minimize product and Customer damage or unauthorized disclosure.
                      </p>
                      <p className="body-medium text-text-dark-blue">
                        <strong>Communication:</strong> If SchoolCal becomes aware of unlawful access to Customer data stored within its products, SchoolCal will: Notify the affected Customers of the incident; Provide a description of the steps SchoolCal is taking to resolve the incident; Provide status updates to the Customer contact, as it deems necessary or is legally required. Notification of incidents, if any, will be delivered to one or more of the Customer's contacts in a form SchoolCal selects, which may include via email or telephone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
