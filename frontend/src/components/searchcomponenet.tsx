import React, { useState } from "react";

const articles = [
    { number: 1, title: "Name and Territory of the Union", content: "Article 1 of the Constitution of India states that India, that is Bharat, shall be a Union of States." },
    { number: 2, title: "Admission or Establishment of New States", content: "Article 2 deals with the admission of new states into the Union or the establishment of new states." },
    { number: 3, title: "Formation of New States and Alteration of Areas, Boundaries or Names of Existing States", content: "Article 3 provides the process for forming new states and altering the boundaries or names of existing states." },
    { number: 4, title: "Laws made under Articles 2 and 3 to provide for the composition of the Council of States", content: "Article 4 provides for laws related to the composition of the Council of States under Articles 2 and 3." },
    { number: 5, title: "Citizenship at the Commencement of the Constitution", content: "Article 5 defines the citizenship of India at the commencement of the Constitution." },
    { number: 6, title: "Rights of Citizenship of Certain Persons who have Migrated to India from Pakistan", content: "Article 6 deals with the rights of citizens who migrated to India from Pakistan." },
    { number: 7, title: "Rights of Citizenship of Certain Persons of Indian Origin residing outside India", content: "Article 7 provides for the citizenship rights of persons of Indian origin residing outside India." },
    { number: 8, title: "Rights of Citizenship of Certain Persons of Indian Origin residing outside India", content: "Article 8 addresses the rights of certain persons of Indian origin who reside outside India." },
    { number: 9, title: "Persons voluntarily acquiring citizenship of a foreign State not to be citizens", content: "Article 9 states that a person who voluntarily acquires the citizenship of a foreign country will not be a citizen of India." },
    { number: 10, title: "Continuance of the rights of citizenship", content: "Article 10 provides for the continuance of the rights of citizenship." },
    { number: 11, title: "Parliament to regulate the right of citizenship by law", content: "Article 11 gives Parliament the power to regulate the right of citizenship by law." },
    { number: 12, title: "Definition", content: "Article 12 defines the term 'State' as used in the Constitution." },
    { number: 13, title: "Laws inconsistent with or in derogation of the fundamental rights", content: "Article 13 deals with laws that are inconsistent with or in derogation of fundamental rights." },
    { number: 14, title: "Equality before Law", content: "Article 14 guarantees that every individual shall be equally protected by the law and prohibits discrimination." },
    { number: 15, title: "Prohibition of Discrimination", content: "Article 15 prohibits discrimination on grounds of religion, race, caste, sex, or place of birth." },
    { number: 16, title: "Equality of Opportunity in Public Employment", content: "Article 16 provides for equality of opportunity in public employment." },
    { number: 17, title: "Abolition of Untouchability", content: "Article 17 abolishes untouchability and forbids its practice in any form." },
    { number: 18, title: "Abolition of Titles", content: "Article 18 abolishes titles and prohibits their conferral." },
    { number: 19, title: "Protection of Certain Rights Regarding Freedom of Speech, etc.", content: "Article 19 guarantees various freedoms including freedom of speech, assembly, and movement." },
    { number: 20, title: "Protection in respect of conviction for offences", content: "Article 20 provides protection against conviction for offences except according to the procedure established by law." },
    { number: 21, title: "Protection of Life and Personal Liberty", content: "Article 21 provides that no person shall be deprived of his life or personal liberty except according to the procedure established by law." },
    { number: 22, title: "Protection against arrest and detention in certain cases", content: "Article 22 protects individuals against arrest and detention in certain cases." },
    { number: 23, title: "Prohibition of Traffic in Human Beings and Forced Labour", content: "Article 23 prohibits human trafficking and forced labour." },
    { number: 24, title: "Prohibition of Employment of Children in Factories, etc.", content: "Article 24 prohibits the employment of children in factories and other hazardous occupations." },
    { number: 25, title: "Freedom of Conscience and Free Profession, Practice and Propagation of Religion", content: "Article 25 guarantees freedom of conscience and the right to practice and propagate religion." },
    { number: 26, title: "Freedom to Manage Religious Affairs", content: "Article 26 guarantees the freedom to manage religious affairs." },
    { number: 27, title: "Freedom from Payment of Taxes for Promotion of any Particular Religion", content: "Article 27 guarantees freedom from paying taxes for the promotion of a particular religion." },
    { number: 28, title: "Freedom from Attending Religious Instruction or Worship in Certain Educational Institutions", content: "Article 28 ensures freedom from attending religious instruction or worship in certain educational institutions." },
    { number: 29, title: "Protection of Interests of Minorities", content: "Article 29 provides protection for the interests of minorities." },
    { number: 30, title: "Right of Minorities to Establish and Administer Educational Institutions", content: "Article 30 provides minorities the right to establish and administer educational institutions." },
    { number: 31, title: "Saving of Certain Laws", content: "Article 31 saves certain laws from being challenged." },
    { number: 32, title: "Remedies for Enforcement of Fundamental Rights", content: "Article 32 provides remedies for the enforcement of fundamental rights." },
    { number: 33, title: "Power of Parliament to Modify the Rights Conferred by this Part in their Application to Forces", content: "Article 33 allows Parliament to modify fundamental rights in their application to the armed forces." },
    { number: 34, title: "Restriction on Rights Conferred by this Part While Martial Law is in Force", content: "Article 34 restricts fundamental rights while martial law is in force." },
    { number: 35, title: "Legislation to Give Effect to the Provisions of this Part", content: "Article 35 provides for legislation to give effect to fundamental rights." },
    { number: 36, title: "Definition", content: "Article 36 defines 'State' as used in the Constitution." },
    { number: 37, title: "Application of the Directive Principles", content: "Article 37 provides that Directive Principles are not justiciable but are fundamental in the governance of the country." },
    { number: 38, title: "State to Secure a Social Order for the Promotion of Welfare of the People", content: "Article 38 provides that the State shall work towards a social order promoting the welfare of the people." },
    { number: 39, title: "Certain Principles of Policy to be Followed by the State", content: "Article 39 provides certain principles of policy to be followed by the State." },
    { number: 40, title: "Organisation of Village Panchayats", content: "Article 40 provides for the organization of village panchayats." },
    { number: 41, title: "Right to Work, to Education and to Public Assistance in Certain Cases", content: "Article 41 provides the right to work, education, and public assistance in certain cases." },
    { number: 42, title: "Provision for Just and Humane Conditions of Work and Maternity Relief", content: "Article 42 provides for humane conditions of work and maternity relief." },
    { number: 43, title: "Living Wage, etc., for Workers", content: "Article 43 ensures a living wage for workers." },
    { number: 44, title: "Uniform Civil Code for the Whole Country", content: "Article 44 provides for a uniform civil code for the whole country." },
    { number: 45, title: "Provision for Free and Compulsory Education for Children", content: "Article 45 provides for free and compulsory education for children." },
    { number: 46, title: "Promotion of Educational and Economic Interests of Scheduled Castes and Scheduled Tribes", content: "Article 46 promotes the educational and economic interests of Scheduled Castes and Scheduled Tribes." },
    { number: 47, title: "Duty of the State to Raise the Level of Nutrition and the Standard of Living", content: "Article 47 mandates the State to raise the level of nutrition and the standard of living." },
    { number: 48, title: "Organisation of Agriculture and Animal Husbandry", content: "Article 48 provides for the organization of agriculture and animal husbandry." },
    { number: 49, title: "Protection of Monuments and Places and Objects of National Importance", content: "Article 49 provides for the protection of monuments and places of national importance." },
    { number: 50, title: "Separation of the Judiciary from the Executive", content: "Article 50 provides for the separation of the judiciary from the executive." },
    { number: 51, title: "Promotion of International Peace and Security", content: "Article 51 provides for the promotion of international peace and security." },
    { number: 52, title: "The Republic", content: "Article 52 defines India as a Republic." },
    { number: 53, title: "Executive Power of the Union", content: "Article 53 deals with the executive power of the Union." },
    { number: 54, title: "President of India", content: "Article 54 provides for the election of the President of India." },
    { number: 55, title: "Manner of Election of the President", content: "Article 55 details the manner of election of the President of India." },
    { number: 56, title: "Term of Office of the President", content: "Article 56 specifies the term of office of the President of India." },
    { number: 57, title: "Eligibility for Re-election", content: "Article 57 provides for eligibility for re-election of the President of India." },
    { number: 58, title: "Qualifications for Election as President", content: "Article 58 specifies the qualifications for election as President of India." },
    { number: 59, title: "Conditions of President's Office", content: "Article 59 outlines the conditions of the President's office." },
    { number: 60, title: "Oath or Affirmation by the President", content: "Article 60 provides for the oath or affirmation by the President of India." },
    { number: 61, title: "Procedure for Impeachment of the President", content: "Article 61 provides the procedure for impeachment of the President of India." },
    { number: 62, title: "Vacancy in the Office of President and the President's Duties During the Vacancy", content: "Article 62 addresses vacancies in the office of the President and the President's duties during such vacancies." },
    { number: 63, title: "The Vice-President of India", content: "Article 63 provides for the office of the Vice-President of India." },
    { number: 64, title: "Powers and Duties of the Vice-President", content: "Article 64 specifies the powers and duties of the Vice-President of India." },
    { number: 65, title: "Powers of the President to Act as Vice-President", content: "Article 65 provides for the powers of the President to act as Vice-President during a vacancy." },
    { number: 66, title: "Election of the Vice-President", content: "Article 66 provides for the election of the Vice-President of India." },
    { number: 67, title: "Term of Office of the Vice-President", content: "Article 67 specifies the term of office of the Vice-President of India." },
    { number: 68, title: "Manner of Election of the President", content: "Article 68 details the manner of election of the President in case of a vacancy." },
    { number: 69, title: "Oath or Affirmation by the Vice-President", content: "Article 69 provides for the oath or affirmation by the Vice-President of India." },
    { number: 70, title: "Duties of the President during the Vacancy of the Office of Vice-President", content: "Article 70 outlines the duties of the President during a vacancy in the office of the Vice-President." },
    { number: 71, title: "Matters relating to the Holding of Office of President and Vice-President", content: "Article 71 addresses matters relating to the holding of office of President and Vice-President." },
    { number: 72, title: "Pardoning Powers of the President", content: "Article 72 provides the President with the power to grant pardons, reprieves, etc." },
    { number: 73, title: "Extent of the Executive Powers of the Union", content: "Article 73 specifies the extent of the executive powers of the Union." },
    { number: 74, title: "Council of Ministers to Aid and Advise the President", content: "Article 74 provides that the President shall act according to the advice of the Council of Ministers." },
    { number: 75, title: "Prime Minister and Other Ministers", content: "Article 75 provides for the appointment of the Prime Minister and other ministers." },
    { number: 76, title: "Attorney-General for India", content: "Article 76 provides for the appointment of the Attorney-General for India." },
    { number: 77, title: "Duties of the Attorney-General", content: "Article 77 specifies the duties of the Attorney-General for India." },
    { number: 78, title: "Special Responsibilities of the Prime Minister", content: "Article 78 outlines the special responsibilities of the Prime Minister." },
    { number: 79, title: "Composition of the Rajya Sabha", content: "Article 79 details the composition of the Rajya Sabha, the Council of States." },
    { number: 80, title: "Representation of States in the Rajya Sabha", content: "Article 80 provides for the representation of states in the Rajya Sabha." },
    { number: 81, title: "Composition of the Lok Sabha", content: "Article 81 details the composition of the Lok Sabha, the House of the People." },
    { number: 82, title: "Readjustment of Representation", content: "Article 82 provides for the readjustment of representation in the Lok Sabha." },
    { number: 83, title: "Duration of Houses of Parliament", content: "Article 83 specifies the duration of the Rajya Sabha and the Lok Sabha." },
    { number: 84, title: "Qualification for Membership of Parliament", content: "Article 84 specifies the qualifications required for membership of Parliament." },
    { number: 85, title: "Sessions of Parliament, prorogation and dissolution", content: "Article 85 details the sessions of Parliament, prorogation, and dissolution." },
    { number: 86, title: "Right of President to Address and Send Messages to the Houses", content: "Article 86 provides the President with the right to address and send messages to the Houses of Parliament." },
    { number: 87, title: "Special Address by the President", content: "Article 87 details the special address by the President to Parliament." },
    { number: 88, title: "Rights of Ministers", content: "Article 88 provides for the rights of ministers to speak in Parliament." },
    { number: 89, title: "Speaker and Deputy Speaker of the House of the People", content: "Article 89 details the roles of the Speaker and Deputy Speaker of the Lok Sabha." },
    { number: 90, title: "Chairman and Deputy Chairman of the Council of States", content: "Article 90 details the roles of the Chairman and Deputy Chairman of the Rajya Sabha." },
    { number: 91, title: "Powers of the Speaker", content: "Article 91 specifies the powers of the Speaker of the Lok Sabha." },
    { number: 92, title: "Powers of the Chairman", content: "Article 92 specifies the powers of the Chairman of the Rajya Sabha." },
    { number: 93, title: "Vacancies in the Offices of Speaker and Deputy Speaker", content: "Article 93 addresses vacancies in the offices of Speaker and Deputy Speaker." },
    { number: 94, title: "Vacancies in the Offices of Chairman and Deputy Chairman", content: "Article 94 addresses vacancies in the offices of Chairman and Deputy Chairman." },
    { number: 95, title: "Powers and Functions of the Speaker", content: "Article 95 provides details on the powers and functions of the Speaker of the Lok Sabha." },
    { number: 96, title: "Powers and Functions of the Chairman", content: "Article 96 provides details on the powers and functions of the Chairman of the Rajya Sabha." },
    { number: 97, title: "Immunities and Privileges of Members of Parliament", content: "Article 97 addresses the immunities and privileges of members of Parliament." },
    { number: 98, title: "Powers of the President of India", content: "Article 98 specifies the powers of the President of India in relation to Parliament." },
    { number: 99, title: "Powers and Duties of the President of India", content: "Article 99 provides for the powers and duties of the President of India concerning Parliament." },
    { number: 100, title: "Conduct of Business of Parliament", content: "Article 100 details the conduct of business in Parliament." },
    { number: 101, title: "Provisions as to the composition of the Rajya Sabha", content: "Article 101 provides for the composition of the Rajya Sabha and the manner of filling vacancies." },
  { number: 102, title: "Disqualification of Members", content: "Article 102 deals with the disqualification of members of Parliament." },
  { number: 103, title: "Decisions on Questions of Disqualification", content: "Article 103 provides for the decisions on questions of disqualification of members of Parliament." },
  { number: 104, title: "Vacancies in the Lok Sabha and Rajya Sabha", content: "Article 104 addresses the vacancies in the Lok Sabha and Rajya Sabha." },
  { number: 105, title: "Powers and Privileges of the Houses and their Members", content: "Article 105 provides the powers and privileges of the Houses of Parliament and their members." },
  { number: 106, title: "Salaries and Allowances of Members", content: "Article 106 provides for the salaries and allowances of members of Parliament." },
  { number: 107, title: "Procedure in Parliament", content: "Article 107 details the procedure in Parliament, including the process for passing bills." },
  { number: 108, title: "Joint Sitting of the Houses", content: "Article 108 provides for a joint sitting of the Houses of Parliament in case of a deadlock." },
  { number: 109, title: "Special Procedure in Regard to Money Bills", content: "Article 109 details the special procedure for money bills." },
  { number: 110, title: "Definition of Money Bills", content: "Article 110 defines what constitutes a money bill." },
  { number: 111, title: "Assent to Bills", content: "Article 111 provides the process for the President's assent to bills." },
  { number: 112, title: "Annual Financial Statement", content: "Article 112 mandates the presentation of the annual financial statement (budget) to Parliament." },
  { number: 113, title: "Appropriation Bills", content: "Article 113 deals with appropriation bills required to give effect to the expenditure proposed in the annual financial statement." },
  { number: 114, title: "Supplementary, Additional or Excess Grants", content: "Article 114 provides for supplementary, additional, or excess grants." },
  { number: 115, title: "Votes on Account", content: "Article 115 deals with votes on account for the expenditure pending the approval of the budget." },
  { number: 116, title: "Withdrawal of Money from the Consolidated Fund", content: "Article 116 specifies the procedure for withdrawing money from the Consolidated Fund of India." },
  { number: 117, title: "Special Procedure in Regard to Money Bills", content: "Article 117 details special procedures for money bills." },
  { number: 118, title: "Procedure in Parliament with respect to Financial Bills", content: "Article 118 outlines the procedure in Parliament concerning financial bills." },
  { number: 119, title: "Power of Parliament to Enact Laws", content: "Article 119 provides the power of Parliament to enact laws." },
  { number: 120, title: "Power of Parliament to Enact Laws for the Union Territories", content: "Article 120 provides the power of Parliament to enact laws for Union Territories." },
  { number: 121, title: "Parliament's Power to Enact Laws in the National Interest", content: "Article 121 allows Parliament to enact laws in the national interest." },
  { number: 122, title: "Parliament's Power to Enact Laws on Other Matters", content: "Article 122 provides Parliament with the power to enact laws on matters outside its legislative powers." },
  { number: 123, title: "Power of Parliament to Enact Laws on Certain Matters", content: "Article 123 details Parliament's power to enact laws on certain matters." },
  { number: 124, title: "Appointment of the Supreme Court", content: "Article 124 provides for the appointment of judges to the Supreme Court." },
  { number: 125, title: "Salaries and Allowances of the Supreme Court Judges", content: "Article 125 deals with the salaries and allowances of Supreme Court judges." },
  { number: 126, title: "Acting Chief Justice", content: "Article 126 provides for the appointment of an acting Chief Justice of the Supreme Court." },
  { number: 127, title: "Appointment of Acting Judges", content: "Article 127 details the appointment of acting judges to the Supreme Court." },
  { number: 128, title: "Additional Judges", content: "Article 128 provides for the appointment of additional judges to the Supreme Court." },
  { number: 129, title: "Supreme Court to be Court of Record", content: "Article 129 establishes the Supreme Court as a court of record." },
  { number: 130, title: "Seat of the Supreme Court", content: "Article 130 specifies the seat of the Supreme Court." },
  { number: 131, title: "Original Jurisdiction of the Supreme Court", content: "Article 131 provides for the original jurisdiction of the Supreme Court in disputes between states and the Union." },
  { number: 132, title: "Appellate Jurisdiction of the Supreme Court", content: "Article 132 details the appellate jurisdiction of the Supreme Court." },
  { number: 133, title: "Appeals to the Supreme Court", content: "Article 133 provides for appeals to the Supreme Court from High Courts." },
  { number: 134, title: "Appeal to the Supreme Court in Criminal Cases", content: "Article 134 provides for appeals to the Supreme Court in criminal cases." },
  { number: 135, title: "Special Jurisdiction of the Supreme Court", content: "Article 135 outlines the special jurisdiction of the Supreme Court." },
  { number: 136, title: "Special Leave to Appeal", content: "Article 136 provides for special leave to appeal to the Supreme Court." },
  { number: 137, title: "Review of Judgments", content: "Article 137 provides for the review of judgments of the Supreme Court." },
  { number: 138, title: "Transfer of Cases", content: "Article 138 provides for the transfer of cases from one High Court to another." },
  { number: 139, title: "Power of the Supreme Court to Transfer Cases", content: "Article 139 provides the Supreme Court with the power to transfer cases." },
  { number: 140, title: "Constitution of Courts", content: "Article 140 provides for the constitution of courts by the Supreme Court." },
  { number: 141, title: "Law declared by the Supreme Court to be binding", content: "Article 141 provides that law declared by the Supreme Court is binding on all courts." },
  { number: 142, title: "Supreme Court's Power to Issue Orders", content: "Article 142 provides the Supreme Court with the power to issue orders and directions." },
  { number: 143, title: "Advisory Jurisdiction of the Supreme Court", content: "Article 143 provides for the advisory jurisdiction of the Supreme Court." },
  { number: 144, title: "Civil and Criminal Procedures", content: "Article 144 provides for the procedures in civil and criminal cases." },
  { number: 145, title: "Rules of the Supreme Court", content: "Article 145 provides for the rules of the Supreme Court." },
  { number: 146, title: "Appointment of High Court Judges", content: "Article 146 deals with the appointment of High Court judges." },
  { number: 147, title: "Salaries and Allowances of High Court Judges", content: "Article 147 provides for the salaries and allowances of High Court judges." },
  { number: 148, title: "Acting Chief Justice of High Courts", content: "Article 148 provides for the appointment of an acting Chief Justice of High Courts." },
  { number: 149, title: "Additional High Court Judges", content: "Article 149 provides for the appointment of additional judges to High Courts." },
  { number: 150, title: "High Courts to be Courts of Record", content: "Article 150 establishes High Courts as courts of record." },
  { number: 151, title: "Seat of High Courts", content: "Article 151 specifies the seat of High Courts." },
  { number: 152, title: "Jurisdiction of High Courts", content: "Article 152 provides for the jurisdiction of High Courts." },
  { number: 153, title: "State High Courts", content: "Article 153 deals with the establishment of State High Courts." },
  { number: 154, title: "Appointment of High Court Judges", content: "Article 154 details the appointment of High Court judges." },
  { number: 155, title: "Powers and Functions of High Courts", content: "Article 155 outlines the powers and functions of High Courts." },
  { number: 156, title: "Administrative Powers of High Courts", content: "Article 156 provides for the administrative powers of High Courts." },
  { number: 157, title: "Judges of High Courts to be Appointed by the President", content: "Article 157 specifies that judges of High Courts are appointed by the President." },
  { number: 158, title: "Salaries and Allowances of High Court Judges", content: "Article 158 provides for the salaries and allowances of High Court judges." },
  { number: 159, title: "Acting Chief Justice of High Courts", content: "Article 159 provides for the appointment of an acting Chief Justice of High Courts." },
  { number: 160, title: "Additional High Court Judges", content: "Article 160 provides for the appointment of additional judges to High Courts." },
  { number: 161, title: "High Courts to be Courts of Record", content: "Article 161 establishes High Courts as courts of record." },
  { number: 162, title: "Seat of High Courts", content: "Article 162 specifies the seat of High Courts." },
  { number: 163, title: "Jurisdiction of High Courts", content: "Article 163 provides for the jurisdiction of High Courts." },
  { number: 164, title: "Appointment of High Court Judges", content: "Article 164 details the appointment of High Court judges." },
  { number: 165, title: "Powers and Functions of High Courts", content: "Article 165 outlines the powers and functions of High Courts." },
  { number: 166, title: "Administrative Powers of High Courts", content: "Article 166 provides for the administrative powers of High Courts." },
  { number: 167, title: "Judges of High Courts to be Appointed by the President", content: "Article 167 specifies that judges of High Courts are appointed by the President." },
  { number: 168, title: "Salaries and Allowances of High Court Judges", content: "Article 168 provides for the salaries and allowances of High Court judges." },
  { number: 169, title: "Acting Chief Justice of High Courts", content: "Article 169 provides for the appointment of an acting Chief Justice of High Courts." },
  { number: 170, title: "Additional High Court Judges", content: "Article 170 provides for the appointment of additional judges to High Courts." },
  { number: 171, title: "High Courts to be Courts of Record", content: "Article 171 establishes High Courts as courts of record." },
  { number: 172, title: "Seat of High Courts", content: "Article 172 specifies the seat of High Courts." },
  { number: 173, title: "Jurisdiction of High Courts", content: "Article 173 provides for the jurisdiction of High Courts." },
  { number: 174, title: "Appointment of High Court Judges", content: "Article 174 details the appointment of High Court judges." },
  { number: 175, title: "Powers and Functions of High Courts", content: "Article 175 outlines the powers and functions of High Courts." },
  { number: 176, title: "Administrative Powers of High Courts", content: "Article 176 provides for the administrative powers of High Courts." },
  { number: 177, title: "Judges of High Courts to be Appointed by the President", content: "Article 177 specifies that judges of High Courts are appointed by the President." },
  { number: 178, title: "Salaries and Allowances of High Court Judges", content: "Article 178 provides for the salaries and allowances of High Court judges." },
  { number: 179, title: "Acting Chief Justice of High Courts", content: "Article 179 provides for the appointment of an acting Chief Justice of High Courts." },
  { number: 180, title: "Additional High Court Judges", content: "Article 180 provides for the appointment of additional judges to High Courts." },
  { number: 181, title: "High Courts to be Courts of Record", content: "Article 181 establishes High Courts as courts of record." },
  { number: 182, title: "Seat of High Courts", content: "Article 182 specifies the seat of High Courts." },
  { number: 183, title: "Jurisdiction of High Courts", content: "Article 183 provides for the jurisdiction of High Courts." },
  { number: 184, title: "Appointment of High Court Judges", content: "Article 184 details the appointment of High Court judges." },
  { number: 185, title: "Powers and Functions of High Courts", content: "Article 185 outlines the powers and functions of High Courts." },
  { number: 186, title: "Administrative Powers of High Courts", content: "Article 186 provides for the administrative powers of High Courts." },
  { number: 187, title: "Judges of High Courts to be Appointed by the President", content: "Article 187 specifies that judges of High Courts are appointed by the President." },
  { number: 188, title: "Salaries and Allowances of High Court Judges", content: "Article 188 provides for the salaries and allowances of High Court judges." },
  { number: 189, title: "Acting Chief Justice of High Courts", content: "Article 189 provides for the appointment of an acting Chief Justice of High Courts." },
  { number: 190, title: "Additional High Court Judges", content: "Article 190 provides for the appointment of additional judges to High Courts." },
  { number: 191, title: "High Courts to be Courts of Record", content: "Article 191 establishes High Courts as courts of record." },
  { number: 192, title: "Seat of High Courts", content: "Article 192 specifies the seat of High Courts." },
  { number: 193, title: "Jurisdiction of High Courts", content: "Article 193 provides for the jurisdiction of High Courts." },
  { number: 194, title: "Appointment of High Court Judges", content: "Article 194 details the appointment of High Court judges." },
  { number: 195, title: "Powers and Functions of High Courts", content: "Article 195 outlines the powers and functions of High Courts." },
  { number: 196, title: "Administrative Powers of High Courts", content: "Article 196 provides for the administrative powers of High Courts." },
  { number: 197, title: "Judges of High Courts to be Appointed by the President", content: "Article 197 specifies that judges of High Courts are appointed by the President." },
  { number: 198, title: "Salaries and Allowances of High Court Judges", content: "Article 198 provides for the salaries and allowances of High Court judges." },
  { number: 199, title: "Acting Chief Justice of High Courts", content: "Article 199 provides for the appointment of an acting Chief Justice of High Courts." },
  { number: 200, title: "Additional High Court Judges", content: "Article 200 provides for the appointment of additional judges to High Courts." },
  { number: 201, title: "Elections to the House of the People and the Legislative Assemblies of States", content: "Article 201 deals with the elections to the House of the People and the Legislative Assemblies of States." },
  { number: 202, title: "State Finances", content: "Article 202 provides for the management of state finances, including the annual financial statement." },
  { number: 203, title: "Appropriation Bills", content: "Article 203 details the procedure for appropriation bills in states." },
  { number: 204, title: "Supplementary, Additional or Excess Grants", content: "Article 204 provides for supplementary, additional or excess grants in states." },
  { number: 205, title: "Votes on Account", content: "Article 205 deals with votes on account for the state budget." },
  { number: 206, title: "Withdrawal of Money from the Consolidated Fund", content: "Article 206 specifies the procedure for withdrawing money from the Consolidated Fund of the State." },
  { number: 207, title: "State Public Service Commission", content: "Article 207 provides for the establishment of the State Public Service Commission." },
  { number: 208, title: "Composition and Functions of the State Public Service Commission", content: "Article 208 details the composition and functions of the State Public Service Commission." },
  { number: 209, title: "Powers and Functions of the State Public Service Commission", content: "Article 209 outlines the powers and functions of the State Public Service Commission." },
  { number: 210, title: "State Finance Commission", content: "Article 210 provides for the establishment of the State Finance Commission." },
  { number: 211, title: "Composition and Functions of the State Finance Commission", content: "Article 211 details the composition and functions of the State Finance Commission." },
  { number: 212, title: "Powers and Functions of the State Finance Commission", content: "Article 212 outlines the powers and functions of the State Finance Commission." },
  { number: 213, title: "The State Legislature", content: "Article 213 provides for the State Legislature, including its composition and powers." },
  { number: 214, title: "Session of the State Legislature", content: "Article 214 specifies the sessions of the State Legislature and the procedures for its conduct." },
  { number: 215, title: "Disqualification of Members", content: "Article 215 deals with the disqualification of members of the State Legislature." },
  { number: 216, title: "Powers and Privileges of the State Legislature", content: "Article 216 provides the powers and privileges of the State Legislature." },
  { number: 217, title: "Vacancies in the State Legislature", content: "Article 217 addresses vacancies in the State Legislature." },
  { number: 218, title: "Elections to the State Legislature", content: "Article 218 deals with the elections to the State Legislature." },
  { number: 219, title: "Powers of the State Legislature", content: "Article 219 outlines the powers of the State Legislature." },
  { number: 220, title: "Jurisdiction of the High Court", content: "Article 220 provides the jurisdiction of the High Court over state matters." },
  { number: 221, title: "Judges of High Court", content: "Article 221 details the judges of High Court and their appointment." },
  { number: 222, title: "Transfer of High Court Judges", content: "Article 222 provides for the transfer of High Court judges." },
  { number: 223, title: "High Court Judges to be Appointed by the President", content: "Article 223 specifies that High Court judges are appointed by the President." },
  { number: 224, title: "Salaries and Allowances of High Court Judges", content: "Article 224 provides for the salaries and allowances of High Court judges." },
  { number: 225, title: "Administrative Powers of High Courts", content: "Article 225 outlines the administrative powers of High Courts." },
  { number: 226, title: "Judicial Powers of High Courts", content: "Article 226 provides the judicial powers of High Courts." },
  { number: 227, title: "Powers of High Courts", content: "Article 227 outlines the powers of High Courts over state matters." },
  { number: 228, title: "High Court's Jurisdiction", content: "Article 228 specifies the jurisdiction of High Courts." },
  { number: 229, title: "High Court's Administrative Powers", content: "Article 229 provides the administrative powers of High Courts." },
  { number: 230, title: "High Court's Powers to Transfer Cases", content: "Article 230 details the High Court's powers to transfer cases." },
  { number: 231, title: "Supreme Court and High Court", content: "Article 231 provides for the relationship between the Supreme Court and High Court." },
  { number: 232, title: "High Court's Powers to Issue Writs", content: "Article 232 allows High Courts to issue writs for the enforcement of fundamental rights." },
  { number: 233, title: "High Court's Powers to Transfer Cases", content: "Article 233 details the powers of High Courts to transfer cases between courts." },
  { number: 234, title: "High Court's Powers to Enforce Fundamental Rights", content: "Article 234 provides High Courts with the power to enforce fundamental rights." },
  { number: 235, title: "Powers of High Court Judges", content: "Article 235 outlines the powers of High Court judges." },
  { number: 236, title: "State Legislature's Powers", content: "Article 236 provides the powers of the State Legislature." },
  { number: 237, title: "Elections to the State Legislature", content: "Article 237 details the elections to the State Legislature." },
  { number: 238, title: "Disqualification of Members", content: "Article 238 deals with the disqualification of members of the State Legislature." },
  { number: 239, title: "Powers and Privileges of the State Legislature", content: "Article 239 provides the powers and privileges of the State Legislature." },
  { number: 240, title: "State Legislature's Composition", content: "Article 240 provides for the composition of the State Legislature." },
  { number: 241, title: "State Legislature's Powers", content: "Article 241 outlines the powers of the State Legislature." },
  { number: 242, title: "Powers of the State Legislature", content: "Article 242 provides for the powers of the State Legislature in relation to local bodies." },
  { number: 243, title: "Elections to Local Bodies", content: "Article 243 deals with elections to local bodies." },
  { number: 244, title: "State's Powers and Functions", content: "Article 244 provides for the powers and functions of the state." },
  { number: 245, title: "State and Central Powers", content: "Article 245 outlines the powers of the state and central government." },
  { number: 246, title: "Distribution of Powers", content: "Article 246 provides for the distribution of powers between the Union and States." },
  { number: 247, title: "Legislative Powers of States", content: "Article 247 details the legislative powers of States." },
  { number: 248, title: "Legislative Powers of Union", content: "Article 248 provides for the legislative powers of the Union." },
  { number: 249, title: "Special Powers of Parliament", content: "Article 249 provides for special powers of Parliament concerning State legislation." },
  { number: 250, title: "Legislative Powers during National Emergency", content: "Article 250 details the legislative powers of Parliament during a national emergency." },
  { number: 251, title: "Legislative Powers of States during Emergency", content: "Article 251 provides for legislative powers of States during emergency conditions." },
  { number: 252, title: "Legislative Powers of States during Emergency", content: "Article 252 outlines the legislative powers of States during an emergency." },
  { number: 253, title: "Legislative Powers of Union", content: "Article 253 provides the legislative powers of the Union concerning treaties and agreements." },
  { number: 254, title: "State Powers during Emergency", content: "Article 254 provides for State powers during an emergency." },
  { number: 255, title: "Legislative Powers in Areas of Concurrent List", content: "Article 255 deals with legislative powers in areas of the concurrent list." },
  { number: 256, title: "State Laws on Concurrent List", content: "Article 256 provides for State laws on matters in the concurrent list." },
  { number: 257, title: "Legislative Powers of Union and States", content: "Article 257 outlines the legislative powers of the Union and States on concurrent matters." },
  { number: 258, title: "Union's Powers to Make Laws", content: "Article 258 provides the Union's powers to make laws on certain matters." },
  { number: 259, title: "State's Powers to Make Laws", content: "Article 259 details the State's powers to make laws." },
  { number: 260, title: "State Legislature's Powers", content: "Article 260 provides for the powers of the State Legislature in relation to certain subjects." },
  { number: 261, title: "State Laws to be Discriminatory", content: "Article 261 prohibits State laws from being discriminatory." },
  { number: 262, title: "Interstate Disputes", content: "Article 262 provides for the resolution of interstate disputes." },
  { number: 263, title: "Interstate Councils", content: "Article 263 provides for the establishment of Interstate Councils." },
  { number: 264, title: "Powers of State Legislatures", content: "Article 264 provides the powers of State Legislatures in relation to certain matters." },
  { number: 265, title: "Powers of State Governments", content: "Article 265 details the powers of State Governments." },
  { number: 266, title: "State Finances", content: "Article 266 provides for state finances and the allocation of funds." },
  { number: 267, title: "Consolidated Fund of State", content: "Article 267 details the Consolidated Fund of the State." },
  { number: 268, title: "State's Reserve Fund", content: "Article 268 provides for the State's Reserve Fund." },
  { number: 269, title: "Taxes on Goods and Services", content: "Article 269 deals with taxes on goods and services." },
  { number: 270, title: "Distribution of Taxes", content: "Article 270 provides for the distribution of taxes between Union and States." },
  { number: 271, title: "Transfer of Resources", content: "Article 271 details the transfer of resources between Union and States." },
  { number: 272, title: "Taxes on Professions", content: "Article 272 deals with taxes on professions." },
  { number: 273, title: "Salaries and Allowances of Government Employees", content: "Article 273 provides for the salaries and allowances of government employees." },
  { number: 274, title: "Powers of States in Relation to Government Employees", content: "Article 274 details the powers of States in relation to government employees." },
  { number: 275, title: "State Finances and Budget", content: "Article 275 provides for state finances and the budget." },
  { number: 276, title: "Allocation of Resources", content: "Article 276 details the allocation of resources." },
  { number: 277, title: "Powers and Functions of State Governments", content: "Article 277 provides the powers and functions of State Governments." },
  { number: 278, title: "State's Revenue Powers", content: "Article 278 details the State's revenue powers." },
  { number: 279, title: "State's Financial Management", content: "Article 279 provides for the State's financial management." },
  { number: 280, title: "State Legislature's Powers", content: "Article 280 outlines the powers of the State Legislature." },
  { number: 281, title: "State Budget", content: "Article 281 details the State Budget." },
  { number: 282, title: "Financial Relations between Union and States", content: "Article 282 provides for financial relations between the Union and States." },
  { number: 283, title: "State's Powers to Levy Taxes", content: "Article 283 outlines the State's powers to levy taxes." },
  { number: 284, title: "State's Financial Management", content: "Article 284 provides for the State's financial management." },
  { number: 285, title: "State's Reserve Fund", content: "Article 285 details the State's Reserve Fund." },
  { number: 286, title: "State's Financial Relations", content: "Article 286 provides for the State's financial relations with the Union." },
  { number: 287, title: "Taxes on Goods and Services", content: "Article 287 deals with taxes on goods and services." },
  { number: 288, title: "State's Financial Management", content: "Article 288 outlines the State's financial management." },
  { number: 289, title: "State's Revenue Powers", content: "Article 289 provides for the State's revenue powers." },
  { number: 290, title: "State's Financial Management", content: "Article 290 details the State's financial management." },
  { number: 291, title: "State's Revenue Powers", content: "Article 291 outlines the State's revenue powers." },
  { number: 292, title: "State's Financial Relations", content: "Article 292 provides for the State's financial relations with the Union." },
  { number: 293, title: "State's Budget", content: "Article 293 deals with the State Budget." },
  { number: 294, title: "State's Reserve Fund", content: "Article 294 provides for the State's Reserve Fund." },
  { number: 295, title: "State's Financial Management", content: "Article 295 outlines the State's financial management." },
  { number: 296, title: "State's Revenue Powers", content: "Article 296 provides for the State's revenue powers." },
  { number: 297, title: "State's Financial Relations", content: "Article 297 deals with the State's financial relations with the Union." },
  { number: 298, title: "State's Budget", content: "Article 298 provides for the State's Budget." },
  { number: 299, title: "State's Financial Management", content: "Article 299 details the State's financial management." },
  { number: 300, title: "State's Revenue Powers", content: "Article 300 provides for the State's revenue powers." },
  { number: 301, title: "State's Financial Management", content: "Article 301 details the State's financial management." },
  { number: 302, title: "State's Revenue Powers", content: "Article 302 provides for the State's revenue powers." },
  { number: 303, title: "State's Financial Relations", content: "Article 303 outlines the State's financial relations with the Union." },
  { number: 304, title: "State's Budget", content: "Article 304 details the State's Budget." },
  { number: 305, title: "State's Financial Management", content: "Article 305 provides for the State's financial management." },
  { number: 306, title: "State's Revenue Powers", content: "Article 306 outlines the State's revenue powers." },
  { number: 307, title: "State's Financial Management", content: "Article 307 details the State's financial management." },
  { number: 308, title: "State's Revenue Powers", content: "Article 308 provides for the State's revenue powers." },
  { number: 309, title: "State's Financial Relations", content: "Article 309 deals with the State's financial relations with the Union." },
  { number: 310, title: "State's Budget", content: "Article 310 outlines the State's Budget." },
  { number: 311, title: "State's Financial Management", content: "Article 311 provides for the State's financial management." },
  { number: 312, title: "State's Revenue Powers", content: "Article 312 details the State's revenue powers." },
  { number: 313, title: "State's Financial Relations", content: "Article 313 provides for the State's financial relations with the Union." },
  { number: 314, title: "State's Budget", content: "Article 314 details the State's Budget." },
  { number: 315, title: "State's Financial Management", content: "Article 315 provides for the State's financial management." },
  { number: 316, title: "State's Revenue Powers", content: "Article 316 details the State's revenue powers." },
  { number: 317, title: "State's Financial Relations", content: "Article 317 provides for the State's financial relations with the Union." },
  { number: 318, title: "State's Budget", content: "Article 318 deals with the State's Budget." },
  { number: 319, title: "State's Financial Management", content: "Article 319 provides for the State's financial management." },
  { number: 320, title: "State's Revenue Powers", content: "Article 320 details the State's revenue powers." },
  { number: 321, title: "State's Financial Relations", content: "Article 321 outlines the State's financial relations with the Union." },
  { number: 322, title: "State's Budget", content: "Article 322 provides for the State's Budget." },
  { number: 323, title: "State's Financial Management", content: "Article 323 details the State's financial management." },
  { number: 324, title: "State's Revenue Powers", content: "Article 324 outlines the State's revenue powers." },
  { number: 325, title: "State's Financial Relations", content: "Article 325 provides for the State's financial relations with the Union." },
  { number: 326, title: "State's Budget", content: "Article 326 deals with the State's Budget." },
  { number: 327, title: "State's Financial Management", content: "Article 327 provides for the State's financial management." },
  { number: 328, title: "State's Revenue Powers", content: "Article 328 details the State's revenue powers." },
  { number: 329, title: "State's Financial Relations", content: "Article 329 provides for the State's financial relations with the Union." },
  { number: 330, title: "State's Budget", content: "Article 330 deals with the State's Budget." },
  { number: 331, title: "State's Financial Management", content: "Article 331 provides for the State's financial management." },
  { number: 332, title: "State's Revenue Powers", content: "Article 332 details the State's revenue powers." },
  { number: 333, title: "State's Financial Relations", content: "Article 333 outlines the State's financial relations with the Union." },
  { number: 334, title: "State's Budget", content: "Article 334 provides for the State's Budget." },
  { number: 335, title: "State's Financial Management", content: "Article 335 details the State's financial management." },
  { number: 336, title: "State's Revenue Powers", content: "Article 336 provides for the State's revenue powers." },
  { number: 337, title: "State's Financial Relations", content: "Article 337 outlines the State's financial relations with the Union." },
  { number: 338, title: "State's Budget", content: "Article 338 provides for the State's Budget." },
  { number: 339, title: "State's Financial Management", content: "Article 339 details the State's financial management." },
  { number: 340, title: "State's Revenue Powers", content: "Article 340 provides for the State's revenue powers." },
  { number: 341, title: "State's Financial Relations", content: "Article 341 outlines the State's financial relations with the Union." },
  { number: 342, title: "State's Budget", content: "Article 342 provides for the State's Budget." },
  { number: 343, title: "State's Financial Management", content: "Article 343 details the State's financial management." },
  { number: 344, title: "State's Revenue Powers", content: "Article 344 provides for the State's revenue powers." },
  { number: 345, title: "State's Financial Relations", content: "Article 345 outlines the State's financial relations with the Union." },
  { number: 346, title: "State's Budget", content: "Article 346 provides for the State's Budget." },
  { number: 347, title: "State's Financial Management", content: "Article 347 details the State's financial management." },
  { number: 348, title: "State's Revenue Powers", content: "Article 348 provides for the State's revenue powers." },
  { number: 349, title: "State's Financial Relations", content: "Article 349 outlines the State's financial relations with the Union." },
  { number: 350, title: "State's Budget", content: "Article 350 provides for the State's Budget." },
  { number: 351, title: "State's Financial Management", content: "Article 351 details the State's financial management." },
  { number: 352, title: "State's Revenue Powers", content: "Article 352 provides for the State's revenue powers." },
  { number: 353, title: "State's Financial Relations", content: "Article 353 outlines the State's financial relations with the Union." },
  { number: 354, title: "State's Budget", content: "Article 354 provides for the State's Budget." },
  { number: 355, title: "State's Financial Management", content: "Article 355 details the State's financial management." },
  { number: 356, title: "State's Revenue Powers", content: "Article 356 provides for the State's revenue powers." },
  { number: 357, title: "State's Financial Relations", content: "Article 357 outlines the State's financial relations with the Union." },
  { number: 358, title: "State's Budget", content: "Article 358 provides for the State's Budget." },
  { number: 359, title: "State's Financial Management", content: "Article 359 details the State's financial management." },
  { number: 360, title: "State's Revenue Powers", content: "Article 360 provides for the State's revenue powers." },
  { number: 361, title: "State's Financial Relations", content: "Article 361 outlines the State's financial relations with the Union." },
  { number: 362, title: "State's Budget", content: "Article 362 provides for the State's Budget." },
  { number: 363, title: "State's Financial Management", content: "Article 363 details the State's financial management." },
  { number: 364, title: "State's Revenue Powers", content: "Article 364 provides for the State's revenue powers." },
  { number: 365, title: "State's Financial Relations", content: "Article 365 outlines the State's financial relations with the Union." },
  { number: 366, title: "State's Budget", content: "Article 366 provides for the State's Budget." },
  { number: 367, title: "State's Financial Management", content: "Article 367 details the State's financial management." },
  { number: 368, title: "State's Revenue Powers", content: "Article 368 provides for the State's revenue powers." },
  { number: 369, title: "State's Financial Relations", content: "Article 369 outlines the State's financial relations with the Union." },
  { number: 370, title: "Temporary Provisions with Respect to the State of Jammu and Kashmir", content: "Article 370 provided special autonomy to the region of Jammu and Kashmir." },
  { number: 371, title: "Special Provisions for the States of Maharashtra and Gujarat", content: "Article 371 provides special provisions for Maharashtra and Gujarat." },
  { number: 372, title: "Special Provisions for the States of Nagaland, Manipur, and Tripura", content: "Article 372 provides special provisions for Nagaland, Manipur, and Tripura." },
  { number: 373, title: "Special Provisions for the States of Assam and Mizoram", content: "Article 373 provides special provisions for Assam and Mizoram." },
  { number: 374, title: "Special Provisions for the State of Arunachal Pradesh", content: "Article 374 provides special provisions for Arunachal Pradesh." },
  { number: 375, title: "Special Provisions for the States of Sikkim and West Bengal", content: "Article 375 provides special provisions for Sikkim and West Bengal." },
  { number: 376, title: "Special Provisions for the States of Goa and Lakshadweep", content: "Article 376 provides special provisions for Goa and Lakshadweep." },
  { number: 377, title: "Special Provisions for the States of Jammu and Kashmir", content: "Article 377 provides special provisions for Jammu and Kashmir." },
  { number: 378, title: "Special Provisions for the States of Punjab and Haryana", content: "Article 378 provides special provisions for Punjab and Haryana." },
  { number: 379, title: "Special Provisions for the States of Rajasthan and Uttar Pradesh", content: "Article 379 provides special provisions for Rajasthan and Uttar Pradesh." },
  { number: 380, title: "Special Provisions for the States of Bihar and Jharkhand", content: "Article 380 provides special provisions for Bihar and Jharkhand." },
  { number: 381, title: "Special Provisions for the States of Madhya Pradesh and Chhattisgarh", content: "Article 381 provides special provisions for Madhya Pradesh and Chhattisgarh." },
  { number: 382, title: "Special Provisions for the States of Andhra Pradesh and Telangana", content: "Article 382 provides special provisions for Andhra Pradesh and Telangana." },
  { number: 383, title: "Special Provisions for the States of Karnataka and Kerala", content: "Article 383 provides special provisions for Karnataka and Kerala." },
  { number: 384, title: "Special Provisions for the States of Tamil Nadu and Puducherry", content: "Article 384 provides special provisions for Tamil Nadu and Puducherry." },
  { number: 385, title: "Special Provisions for the States of Delhi and Chandigarh", content: "Article 385 provides special provisions for Delhi and Chandigarh." },
  { number: 386, title: "Special Provisions for the States of Arunachal Pradesh and Mizoram", content: "Article 386 provides special provisions for Arunachal Pradesh and Mizoram." },
  { number: 387, title: "Special Provisions for the States of Manipur and Nagaland", content: "Article 387 provides special provisions for Manipur and Nagaland." },
  { number: 388, title: "Special Provisions for the States of Tripura and Assam", content: "Article 388 provides special provisions for Tripura and Assam." },
  { number: 389, title: "Special Provisions for the States of Sikkim and West Bengal", content: "Article 389 provides special provisions for Sikkim and West Bengal." },
  { number: 390, title: "Special Provisions for the States of Goa and Lakshadweep", content: "Article 390 provides special provisions for Goa and Lakshadweep." },
  { number: 391, title: "Special Provisions for the States of Jammu and Kashmir", content: "Article 391 provides special provisions for Jammu and Kashmir." },
  { number: 392, title: "Special Provisions for the States of Punjab and Haryana", content: "Article 392 provides special provisions for Punjab and Haryana." },
  { number: 393, title: "Special Provisions for the States of Rajasthan and Uttar Pradesh", content: "Article 393 provides special provisions for Rajasthan and Uttar Pradesh." },
  { number: 394, title: "Special Provisions for the States of Bihar and Jharkhand", content: "Article 394 provides special provisions for Bihar and Jharkhand." },
  { number: 395, title: "Special Provisions for the States of Madhya Pradesh and Chhattisgarh", content: "Article 395 provides special provisions for Madhya Pradesh and Chhattisgarh." },
];
interface Article {
  number: number;
  title: string;
  content: string;
}

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Article[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      setResults([]);
      setIsModalOpen(false); // Close the modal if no search term is provided
      return;
    }

    // Append a space to the search term
    const searchWithSpace = searchTerm.trim() + " ";

    // Filter the articles based on the search term
    const filteredResults = articles.filter(
      (article) =>
        article.number.toString() === searchWithSpace || // Ensuring comparison without extra space
        article.title.toLowerCase().includes(searchWithSpace.toLowerCase()) ||
        article.content.toLowerCase().includes(searchWithSpace.toLowerCase())
    );

    setResults(filteredResults);
    setIsModalOpen(true); // Open the modal when results are available
    setSearchTerm(searchWithSpace); // Update the search term to include the space
  };

  const closeModal = () => {
    setIsModalOpen(false); // Function to close the modal
  };

  return (
    <div className="flex items-center">
      <form onSubmit={handleSearchSubmit} className="flex items-center">
        <input
          type="text"
          className="px-4 py-2 l:w-auto max-w-md border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d42755]"
          placeholder="Search for Articles"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="ml-2 px-3 py-2 bg-[#d42755] text-white rounded-lg shadow-md"
        >
          Search
        </button>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closeModal}
            >
              X {/* Close button */}
            </button>
            <div className="flex flex-col items-center">
              {results.length > 0 ? (
                results.map((article, index) => (
                  <div
                    key={index}
                    className="mb-4 w-full border rounded-lg shadow-sm p-4 text-center"
                  >
                    <h2 className="text-2xl font-bold">
                      Article {article.number}: {article.title}
                    </h2>
                    <p className="mt-2 text-gray-700">{article.content}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No results found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;