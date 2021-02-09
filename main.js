var dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleDateString();

function randomProb(maxLimit = 40) {
  const randomnum = Math.floor(Math.random() * maxLimit + 1);
  var image = document.getElementById("problem-image").src = "Images/" + randomnum + ".jpg";

  var s1 = "https://www.shaalaa.com/question-bank-solutions/prepare-a-format-of-bill-of-exchange-from-the-following-information-shri-manohar-ramchandra-patil-208-mahatma-gandhi-mumbai-400018-draws-a-four-months-bill-for-rs-12-995-on-shri-ravindra-k-sank-draft-or-format-bills_90582#ref=qp&id=28118" ;
  var s2 = "https://www.shaalaa.com/question-bank-solutions/following-is-the-balance-sheet-of-harsha-and-versha-s-firm-on-31st-march-2016-they-share-profit-and-losses-in-the-ratio-of-3-2-they-decided-to-admit-asha-on-1st-april-2016-partnership-final-accounts_90613#ref=qp&id=28174";
  var s3 = "https://www.shaalaa.com/question-bank-solutions/following-is-the-balance-sheet-of-dhirshree-sonam-and-simaran-who-were-sharing-profit-and-losses-in-the-proportion-of-their-capitals-reconstitution-of-partnership_90638#ref=qp&id=28192" ;
  var s4 =  "https://www.shaalaa.com/question-bank-solutions/pooja-owes-sunil-rs-50-000-sunil-draws-a-bill-for-rs-42-000-on-pooja-for-3-months-period-and-received-the-cheque-for-the-balance-the-bill-is-duly-accepted-and-returned-to-sunil-on-the-same-accounting-treatment-endorsement-bill-honour-dishonour-also-insolvency-acceptor_90646#ref=qp&id=28197";
  var s5 =  "https://www.shaalaa.com/question-bank-solutions/ram-laxman-and-bharat-were-partners-sharing-profit-and-losses-in-the-ratio-of-2-2-1-following-is-the-balance-sheet-as-on-31st-march-2016-balance-sheet-as-on-31st-march-2016-dissolution-of-partnership-firm_90653#ref=qp&id=28225";
  var s6 =  "https://www.shaalaa.com/question-bank-solutions/bandekar-industries-co-ltd-issued-60-000-equity-shares-of-rs-100-each-payable-as-follows-on-application-rs-20-on-allotment-rs-30-on-first-call-share-capital-issue-allotment-equity-shares_90718#ref=qp&id=28357";
  var s7 =  "https://www.shaalaa.com/question-bank-solutions/given-below-is-the-balance-sheet-as-on-1st-april-2015-and-receipts-and-payments-account-for-the-year-ending-31st-march-2016-of-decent-sports-club-kudal-accounts-of-not-for-profit-concerns_90670#ref=qp&id=28262";
  var s8 =  "https://www.shaalaa.com/question-bank-solutions/ashok-and-sangmesh-are-in-partnership-sharing-profit-and-losses-in-the-ratio-of-2-1-from-the-following-trial-balance-and-adjustments-given-below-you-are-required-to-prepare-trading-and-profit-and-partnership-final-accounts_90683#ref=qp&id=28314";
  var s9 =  "https://www.shaalaa.com/question-bank-solutions/prepare-a-format-of-a-bill-of-exchange-from-the-following-information-draft-or-format-bills_90676#ref=qp&id=28273";
  var s10 =  "https://www.shaalaa.com/question-bank-solutions/darshan-and-amar-were-partners-sharing-profit-and-losses-in-the-proportion-of-2-1-their-balance-sheet-is-as-follows-partnership-final-accounts_90689#ref=qp&id=28304";
  var s11 =  "https://www.shaalaa.com/question-bank-solutions/the-balance-sheet-of-samarth-traders-is-as-follows-the-partners-share-profits-and-losses-as-5-2-3-bill-exchange-examples-solutions_90697#ref=qp&id=28331";
  var s12 =  "https://www.shaalaa.com/question-bank-solutions/on-andth-march-2016-ram-drwas-a-bill-on-rohit-for-rs-8000-at-3-months-rohit-accepts-it-and-returns-to-ram-ram-then-sends-the-bill-to-his-bank-for-collection-bill-exchange-examples-solutions_90708#ref=qp&id=28342";
  var s13 =  "https://www.shaalaa.com/question-bank-solutions/following-is-the-balance-sheet-as-on-31-st-march-2016-of-m-s-jay-and-ajay-dissolution-of-partnership-firm_90717#ref=qp&id=28356";
  var s14 =  "https://www.shaalaa.com/question-bank-solutions/manish-and-co-ltd-made-an-issue-of-40000-equity-shares-of-20-each-payable-as-follows-dissolution-of-partnership-firm_90720#ref=qp&id=28359";
  var s15 =  "https://www.shaalaa.com/question-bank-solutions/following-is-the-receipts-and-payments-accounts-and-additional-information-of-jeevan-hospital-kolhapur-accounts-of-not-for-profit-concerns_90722#ref=qp&id=28368";
  var s16 =  "https://www.shaalaa.com/question-bank-solutions/from-the-following-trial-balance-of-m-s-patil-and-desai-you-are-required-to-prepare-trading-and-profit-and-loss-account-for-the-year-ended-31st-march-2016-preparation-final-accounts_90727#ref=qp&id=28378";
  var s17 =  "https://www.shaalaa.com/question-bank-solutions/mr-akash-sane-42-sagar-bandar-road-ratnagiri-draws-a-three-months-bill-on-mrs-magha-kale-vishram-baag-sangli-for-16-500-on-1st-december-2016-which-was-accepted-on-4th-december-draft-or-format-bills_50801#ref=qp&id=23232";
  var s18 =  "https://www.shaalaa.com/question-bank-solutions/the-balance-sheet-meena-heena-who-shared-profits-losses-ratio-2-1-under-admission-partner-adjustment-accumulated-profits-losses_50833#ref=qp&id=23288";
  var s19 =  "https://www.shaalaa.com/question-bank-solutions/ashish-satish-manish-were-partners-business-profits-losses-ratio-3-1-1-respectively-their-balance-sheen-31st-march-2016-was-follows-retirement-or-death-partner-treatment-goodwill_50856#ref=qp&id=23306";
  var s20 =  "https://www.shaalaa.com/question-bank-solutions/sayali-sold-goods-on-credit-to-manali-of-rs-40-000-sayali-draws-a-bill-on-manali-for-4-months-for-the-amount-due-manali-accepted-the-bill-and-returned-it-to-sayali-after-a-month-accounting-treatment-discounting-bill-bank-honour-dishonour-insolvency_50871#ref=qp&id=23326";
  var s21 =  "https://www.shaalaa.com/question-bank-solutions/ashwin-bhavin-pravin-carried-business-they-share-profits-losses-ratio-5-3-2-respectively-their-balance-sheet-31st-march-2016-was-under-dissolution-of-partnership-firm_50877#ref=qp&id=23333";
  var s22 =  "https://www.shaalaa.com/question-bank-solutions/aniket-ltd-issued-40-000-equity-shares-of-100-each-payable-as-follows-on-application-rs-20-on-allotment-rs-30-on-first-call-rs-30-on-second-call-rs-20-dissolution-of-partnership-firm_50891#ref=qp&id=23345";
  var s23 =  "https://www.shaalaa.com/question-bank-solutions/form-following-receipts-payments-account-s-c-college-commerce-ramanand-nagar-year-ending-31st-march-2016-additional-information-prepare-income-expenditure-additional-information-prepaid-expenses-current-previous-year_50898#ref=qp&id=23353";
  var s24 =  "https://www.shaalaa.com/question-bank-solutions/given-below-trial-balance-m-s-shailesh-nilesh-31st-march-2016-you-are-required-prepare-trading-profit-loss-account-year-ended-31st-march-2016-preparation-final-accounts_50910#ref=qp&id=23361";
  var s25 =  "https://www.shaalaa.com/question-bank-solutions/prepare-a-format-of-bill-of-exchange-from-the-following-information-1-drawer-abhilash-patil-mg-road-kokarda-2-drawee-bhargav-mishra-140-civil-lines-nagpur-3-payee-gopal-desh-draft-or-format-bills_90726#ref=qp&id=28373";
  var s26 =  "https://www.shaalaa.com/question-bank-solutions/ganga-yamuna-are-partners-sharing-profits-and-losses-in-3-2-respectively-their-position-on-31-3-2013-balance-sheet-as-on-31032013-retirement-or-death-partner-revaluation-assets-liabilities_90736#ref=qp&id=28387";
  var s27 =  "https://www.shaalaa.com/question-bank-solutions/shanti-samadhan-and-sangarsh-were-sharing-profits-and-losses-in-the-ratio-of-7-5-4-their-balance-sheet-as-on-31st-032013-was-as-follows-balance-sheet-as-on-31st-march-2013-admission-partner-revaluation-assets-liabilities_90739#ref=qp&id=28392";
  var s28 =  "https://www.shaalaa.com/question-bank-solutions/apate-draws-a-bill-on-mapate-for-rs-8000-at-3-months-mapate-accepted-the-same-and-sent-to-apate-apate-sent-the-same-bill-to-his-bank-for-collection-on-due-date-mapate-found-himse-adjustments-interest-capital-drawings-loans_90740#ref=qp&id=28394";
  var s29 =  "https://www.shaalaa.com/question-bank-solutions/umesh-and-prakash-were-partners-sharing-profit-and-losses-in-the-proportion-of-3-5-and-2-5-respectively-they-dissolved-their-partnership-firm-on-31st-march-2013-when-their-financial-preparation-final-accounts_90741#ref=qp&id=28395";
  var s30 =  "https://www.shaalaa.com/question-bank-solutions/mahalaxmi-industries-ltd-kundur-issued-15000-equity-shares-of-rs-100-each-they-were-payable-as-follows-on-application-rs-20-on-allotment-rs-30-on-first-call-rs-preparation-final-accounts_90742#ref=qp&id=28396";
  var s31 =  "https://www.shaalaa.com/question-bank-solutions/following-is-the-balance-sheet-and-receipts-and-payments-account-of-ekveera-hospital-amravati-balance-sheet-as-on-142012-preparation-income-expenditure-account-closing-balance-sheet_90744#ref=qp&id=28399";
  var s32 =  "https://www.shaalaa.com/question-bank-solutions/from-the-following-trial-balance-of-m-s-vishal-and-vaibhav-you-are-required-to-prepare-trading-and-profit-and-loss-account-for-the-year-ended-31st-march-2013-and-balance-sheet-as-preparation-income-expenditure-account-closing-balance-sheet_90745#ref=qp&id=28400";
  var s33 =  "https://www.omtex.co.in/2020/08/hsc-accounts-march-2020-board-paper.html";
  var s34 =  "https://www.omtex.co.in/2020/08/hsc-accounts-march-2020-board-paper.html";
  var s35 =  "https://www.omtex.co.in/2020/08/hsc-accounts-march-2020-board-paper.html";
  var s36 =  "https://www.omtex.co.in/2020/08/hsc-accounts-march-2020-board-paper.html";
  var s37 =  "https://www.omtex.co.in/2020/08/hsc-accounts-march-2020-board-paper.html";
  var s38 =  "https://www.omtex.co.in/2020/08/hsc-accounts-march-2020-board-paper.html";
  var s39 =  "https://www.omtex.co.in/2020/08/hsc-accounts-march-2020-board-paper.html";
  var s40 =  "https://www.omtex.co.in/2020/08/hsc-accounts-march-2020-board-paper.html";
  var solutions = ["placeholder", s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s33, s34, s35, s36, s37, s38, s39, s40]
  document.getElementById("solution-btn").href = solutions[(randomnum)];
}
