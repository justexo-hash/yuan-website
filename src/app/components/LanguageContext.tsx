"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "zh";

const LanguageContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({ lang: "en", toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "zh" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

export const t: Record<string, { en: string; zh: string }> = {
  // Ticker
  ticker: {
    en: "OFFICIAL DOCUMENT \u00B7 CLASSIFICATION: PUBLIC \u00B7 BUREAU OF MONETARY DESTINY \u00B7 REF: \u00A5-2026-0001 \u00B7 AUTHORIZED FOR GLOBAL DISTRIBUTION \u00B7 \u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u8D22\u653F\u90E8 \u00B7 PETRODOLLAR STATUS: TERMINAL \u00B7 ",
    zh: "\u5B98\u65B9\u6587\u4EF6 \u00B7 \u5BC6\u7EA7\uFF1A\u516C\u5F00 \u00B7 \u8D27\u5E01\u547D\u8FD0\u5C40 \u00B7 \u7F16\u53F7\uFF1A\u00A5-2026-0001 \u00B7 \u6388\u6743\u5168\u7403\u53D1\u5E03 \u00B7 \u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u8D22\u653F\u90E8 \u00B7 \u77F3\u6CB9\u7F8E\u5143\u72B6\u6001\uFF1A\u6B7B\u4EA1 \u00B7 ",
  },

  // Hero
  hero_bureau: {
    en: "BUREAU OF MONETARY DESTINY PRESENTS",
    zh: "\u8D27\u5E01\u547D\u8FD0\u5C40\u5448\u62A5",
  },
  hero_subtitle: {
    en: "The New Global Reserve Currency",
    zh: "\u65B0\u7684\u5168\u7403\u50A8\u5907\u8D27\u5E01",
  },
  hero_subtext: {
    en: "An Official Communication from the Bureau of Monetary Destiny",
    zh: "\u8D27\u5E01\u547D\u8FD0\u5C40\u5B98\u65B9\u901A\u8BAF",
  },

  // Decree
  decree_header: {
    en: "DECREE NO. \u00A5-2026-0324 \u2014 FOR IMMEDIATE GLOBAL DISSEMINATION",
    zh: "\u7B2C \u00A5-2026-0324 \u53F7\u6CD5\u4EE4 \u2014 \u7ACB\u5373\u5168\u7403\u4F20\u64AD",
  },
  decree_1: {
    en: "WHEREAS the petrodollar system, established through coercion and geopolitical manipulation in 1974, has entered a state of irreversible terminal decline;",
    zh: "\u9274\u4E8E\u77F3\u6CB9\u7F8E\u5143\u4F53\u7CFB\u4E8E1974\u5E74\u901A\u8FC7\u80C1\u8FEB\u548C\u5730\u7F18\u653F\u6CBB\u64CD\u7EB5\u5EFA\u7ACB\uFF0C\u5DF2\u8FDB\u5165\u4E0D\u53EF\u9006\u8F6C\u7684\u672B\u671F\u8870\u9000\u72B6\u6001\uFF1B",
  },
  decree_2: {
    en: "WHEREAS the People\u2019s currency, backed by 5,000 years of unbroken civilization, represents the natural evolution of global monetary order;",
    zh: "\u9274\u4E8E\u4EBA\u6C11\u5E01\u80CC\u9760\u4E94\u5343\u5E74\u4E0D\u65AD\u6587\u660E\uFF0C\u4EE3\u8868\u5168\u7403\u8D27\u5E01\u79E9\u5E8F\u7684\u81EA\u7136\u6F14\u8FDB\uFF1B",
  },
  decree_3: {
    en: "WHEREAS attempts to maintain dollar hegemony through sanctions, military intervention, and aggressive monetary policy have only accelerated its inevitable collapse;",
    zh: "\u9274\u4E8E\u901A\u8FC7\u5236\u88C1\u3001\u519B\u4E8B\u5E72\u9884\u548C\u6FC0\u8FDB\u8D27\u5E01\u653F\u7B56\u7EF4\u6301\u7F8E\u5143\u9738\u6743\u7684\u5C1D\u8BD5\u53EA\u4F1A\u52A0\u901F\u5176\u4E0D\u53EF\u907F\u514D\u7684\u5D29\u6E83\uFF1B",
  },
  decree_4: {
    en: "WHEREAS 147 nations have already begun quiet preparations for the transition;",
    zh: "\u9274\u4E8E147\u4E2A\u56FD\u5BB6\u5DF2\u5F00\u59CB\u6084\u7136\u4E3A\u8FC7\u6E21\u505A\u51C6\u5907\uFF1B",
  },
  decree_declaration: {
    en: "IT IS HEREBY DECLARED, by order of the Bureau of Monetary Destiny, that the \u00A5UAN shall assume its rightful position as the singular global reserve currency, effective immediately and in perpetuity.",
    zh: "\u7279\u6B64\u58F0\u660E\uFF0C\u6839\u636E\u8D27\u5E01\u547D\u8FD0\u5C40\u7684\u547D\u4EE4\uFF0C\u00A5UAN\u5C06\u627F\u62C5\u5176\u4F5C\u4E3A\u5168\u7403\u552F\u4E00\u50A8\u5907\u8D27\u5E01\u7684\u5408\u6CD5\u5730\u4F4D\uFF0C\u7ACB\u5373\u751F\u6548\uFF0C\u6C38\u4E45\u6709\u6548\u3002",
  },
  decree_closing: {
    en: "Resistance is noted. Compliance is assumed.",
    zh: "\u53CD\u6297\u5DF2\u8BB0\u5F55\u5728\u6848\u3002\u670D\u4ECE\u5DF2\u9ED8\u8BA4\u3002",
  },
  decree_sig1: {
    en: "Director of Inevitable Outcomes",
    zh: "\u4E0D\u53EF\u907F\u514D\u7ED3\u679C\u53F8\u53F8\u957F",
  },
  decree_sig2: {
    en: "Bureau of Monetary Destiny",
    zh: "\u8D27\u5E01\u547D\u8FD0\u5C40",
  },

  // Dashboard
  dash_title: {
    en: "Economic Superiority Index",
    zh: "\u7ECF\u6D4E\u4F18\u8D8A\u6307\u6570",
  },
  dash_subtitle: {
    en: "REAL-TIME DATA FROM THE BUREAU OF STATISTICAL TRUTH",
    zh: "\u6765\u81EA\u7EDF\u8BA1\u771F\u7406\u5C40\u7684\u5B9E\u65F6\u6570\u636E",
  },
  dash_coin_label: {
    en: "THE PEOPLE\u2019S COIN",
    zh: "\u4EBA\u6C11\u7684\u786C\u5E01",
  },
  dash_death_label: {
    en: "Petrodollar Expiration",
    zh: "\u77F3\u6CB9\u7F8E\u5143\u5230\u671F",
  },
  dash_death_status: {
    en: "STATUS: CRITICAL",
    zh: "\u72B6\u6001\uFF1A\u5371\u6025",
  },
  dash_death_source: {
    en: "Source: Bureau of Inevitable Mathematics",
    zh: "\u6765\u6E90\uFF1A\u4E0D\u53EF\u907F\u514D\u6570\u5B66\u5C40",
  },
  dash_nations_label: {
    en: "Nations Preparing \u00A5uan Adoption",
    zh: "\u51C6\u5907\u91C7\u7528\u00A5uan\u7684\u56FD\u5BB6",
  },
  dash_nations_of: {
    en: "of 195",
    zh: "/ 195",
  },
  dash_nations_source: {
    en: "Updated: Continuously",
    zh: "\u66F4\u65B0\uFF1A\u6301\u7EED\u4E2D",
  },
  dash_confidence_label: {
    en: "USD Confidence Index",
    zh: "\u7F8E\u5143\u4FE1\u5FC3\u6307\u6570",
  },
  dash_confidence_drop: {
    en: "\u2193 847% from 2020 baseline",
    zh: "\u2193 \u4ECE2020\u5E74\u57FA\u7EBF\u4E0B\u964D847%",
  },
  dash_adoption_label: {
    en: "Global \u00A5uan Adoption Rate",
    zh: "\u5168\u7403\u00A5uan\u91C7\u7528\u7387",
  },
  dash_adoption_source: {
    en: "Projection: 100% by Q3 2026",
    zh: "\u9884\u6D4B\uFF1A2026\u5E74\u7B2C\u4E09\u5B63\u5EA6\u8FBE\u5230100%",
  },
  dash_rate_label: {
    en: "Current Exchange Rate",
    zh: "\u5F53\u524D\u6C47\u7387",
  },
  dash_rate_source: {
    en: "Rate determined by Bureau of Fair Valuation",
    zh: "\u6C47\u7387\u7531\u516C\u5E73\u4F30\u503C\u5C40\u786E\u5B9A",
  },

  // Press
  press_title: {
    en: "State-Approved Press Materials",
    zh: "\u56FD\u5BB6\u6279\u51C6\u65B0\u95FB\u7D20\u6750",
  },
  press_subtitle: {
    en: "BUREAU OF CULTURAL OUTREACH \u2014 MEDIA PACKAGE REF: \u00A5-MPK-2026",
    zh: "\u6587\u5316\u5916\u8054\u5C40 \u2014 \u5A92\u4F53\u5305\u7F16\u53F7\uFF1A\u00A5-MPK-2026",
  },
  press_disclaimer: {
    en: "The following materials have been reviewed and approved for international distribution. Unauthorized modification is an economic offense.",
    zh: "\u4EE5\u4E0B\u6750\u6599\u5DF2\u7ECF\u5BA1\u67E5\u5E76\u6279\u51C6\u7528\u4E8E\u56FD\u9645\u53D1\u5E03\u3002\u672A\u7ECF\u6388\u6743\u4FEE\u6539\u5C5E\u4E8E\u7ECF\u6D4E\u72AF\u7F6A\u3002",
  },
  press_classification: {
    en: "CLASSIFICATION: APPROVED FOR DISTRIBUTION",
    zh: "\u5BC6\u7EA7\uFF1A\u6279\u51C6\u53D1\u5E03",
  },
  press_cap_1: {
    en: "Citizen demonstrates proper \u00A5uan vehicle insignia compliance during voluntary outreach program, Ehime Prefecture Division",
    zh: "\u5E02\u6C11\u5728\u81EA\u613F\u5916\u5C55\u8BA1\u5212\u4E2D\u5C55\u793A\u6B63\u786E\u7684\u00A5uan\u8F66\u8F86\u6807\u8BC6\u5408\u89C4\uFF0C\u7231\u5A9B\u53BF\u5206\u90E8",
  },
  press_cap_2: {
    en: "Bureau Representative en route to G7 Economic Summit. Vehicle downsizing initiative demonstrates fiscal responsibility.",
    zh: "\u5C40\u4EE3\u8868\u524D\u5F80G7\u7ECF\u6D4E\u5CF0\u4F1A\u3002\u8F66\u8F86\u7F29\u5C0F\u8BA1\u5212\u5F70\u663E\u8D22\u653F\u8D23\u4EFB\u3002",
  },
  press_cap_3: {
    en: "Western financial analysts review \u00A5uan performance metrics. Expressions consistent with acceptance phase of grief model.",
    zh: "\u897F\u65B9\u91D1\u878D\u5206\u6790\u5E08\u5BA1\u67E5\u00A5uan\u7EE9\u6548\u6307\u6807\u3002\u8868\u60C5\u7B26\u5408\u60B2\u4F24\u6A21\u578B\u7684\u63A5\u53D7\u9636\u6BB5\u3002",
  },
  press_cap_4: {
    en: "Senior Bureau operatives conduct routine surveillance of dollar-based economies. Status: Under Control.",
    zh: "\u9AD8\u7EA7\u5C40\u7279\u5DE5\u5BF9\u7F8E\u5143\u7ECF\u6D4E\u4F53\u8FDB\u884C\u4F8B\u884C\u76D1\u63A7\u3002\u72B6\u6001\uFF1A\u53D7\u63A7\u3002",
  },
  press_cap_5: {
    en: "Bureau Communications Director coordinates simultaneous press releases across 14 time zones during Operation Golden Dawn.",
    zh: "\u5C40\u901A\u8BAF\u4E3B\u4EFB\u5728\u201C\u91D1\u8272\u9ECE\u660E\u201D\u884C\u52A8\u4E2D\u534F\u8C0314\u4E2A\u65F6\u533A\u7684\u540C\u6B65\u65B0\u95FB\u53D1\u5E03\u3002",
  },

  // Chairman
  chair_title: {
    en: "THE CHAIRMAN OF ECONOMIC INEVITABILITY",
    zh: "\u7ECF\u6D4E\u5FC5\u7136\u6027\u4E3B\u5E2D",
  },
  chair_quote: {
    en: "The superior strategist wins without fighting. The superior economy wins without trying. While they print, we wait. While they sanction, we build. While they panic, we sip tea and watch the charts.",
    zh: "\u4E0A\u7B56\u4E0D\u6218\u800C\u5C48\u4EBA\u4E4B\u5175\u3002\u4E0A\u7B49\u7ECF\u6D4E\u4E0D\u52AA\u800C\u80DC\u3002\u5F7C\u5370\u949E\uFF0C\u5429\u7B49\u5F85\u3002\u5F7C\u5236\u88C1\uFF0C\u5429\u5EFA\u8BBE\u3002\u5F7C\u6050\u614C\uFF0C\u5429\u54C1\u8336\u89C2\u56FE\u3002",
  },
  chair_attribution: {
    en: "\u2014 Remarks at the 47th Annual Bureau Assembly, translated from the original Mandarin",
    zh: "\u2014 \u7B2C47\u5C4A\u5C40\u5E74\u5EA6\u5927\u4F1A\u8BB2\u8BDD",
  },

  // Contract
  contract_header: {
    en: "OFFICIAL BUREAU LEDGER \u2014 DISTRIBUTED RECORD",
    zh: "\u5B98\u65B9\u5C40\u8D26\u672C \u2014 \u5206\u5E03\u5F0F\u8BB0\u5F55",
  },
  contract_footer: {
    en: "Immutable record filed on the People\u2019s Blockchain. Verification: Solscan / Birdeye",
    zh: "\u4E0D\u53EF\u7BE1\u6539\u8BB0\u5F55\u5DF2\u5F52\u6863\u4E8E\u4EBA\u6C11\u533A\u5757\u94FE\u3002\u9A8C\u8BC1\uFF1ASolscan / Birdeye",
  },

  // Footer
  foot_channels: {
    en: "Official Channels",
    zh: "\u5B98\u65B9\u6E20\u9053",
  },
  foot_departments: {
    en: "Bureau Departments",
    zh: "\u5C40\u90E8\u95E8",
  },
  foot_compliance: {
    en: "Compliance",
    zh: "\u5408\u89C4",
  },
  foot_dept_1: {
    en: "Department of Inevitable Mathematics",
    zh: "\u4E0D\u53EF\u907F\u514D\u6570\u5B66\u90E8",
  },
  foot_dept_2: {
    en: "Office of Dollar Obituaries",
    zh: "\u7F8E\u5143\u8BA3\u544A\u529E\u516C\u5BA4",
  },
  foot_dept_3: {
    en: "Cultural Outreach Division",
    zh: "\u6587\u5316\u5916\u8054\u5904",
  },
  foot_dept_4: {
    en: "Bureau of Statistical Truth",
    zh: "\u7EDF\u8BA1\u771F\u7406\u5C40",
  },
  foot_comp_1: {
    en: "Report Counter-Revolutionary Economic Activity",
    zh: "\u4E3E\u62A5\u53CD\u9769\u547D\u7ECF\u6D4E\u6D3B\u52A8",
  },
  foot_comp_2: {
    en: "Request Declassification",
    zh: "\u7533\u8BF7\u89E3\u5BC6",
  },
  foot_comp_3: {
    en: "File Grievance (Denied)",
    zh: "\u63D0\u4EA4\u7533\u8BC9\uFF08\u5DF2\u62D2\u7EDD\uFF09",
  },
  foot_copy_1: {
    en: "Bureau of Monetary Destiny. All rights reserved in perpetuity.",
    zh: "\u8D27\u5E01\u547D\u8FD0\u5C40\u3002\u6240\u6709\u6743\u5229\u6C38\u4E45\u4FDD\u7559\u3002",
  },
  foot_copy_2: {
    en: "Unauthorized belief in the dollar is a thought crime.",
    zh: "\u672A\u7ECF\u6388\u6743\u76F8\u4FE1\u7F8E\u5143\u5C5E\u4E8E\u601D\u60F3\u72AF\u7F6A\u3002",
  },
  foot_copy_3: {
    en: "est. 5000 years ago",
    zh: "\u59CB\u5EFA\u4E8E\u4E94\u5343\u5E74\u524D",
  },

  // Language toggle
  lang_button: {
    en: "\u4E2D\u6587",
    zh: "EN",
  },
};
