const dataset = [
  {
    externalCompanyId: 0,
    globalCompanyId: 1013,
    companyName: "AMERICAN AXLE & MANUFACTURING HOLDINGS, INC.",
    isBaseCompany: true,
    industryId: 15,
    industryName: "Consumer",
    metrics: [
      {
        metricKey: "RiskNumber",
        metricName: "Risk Number",
        metricTooltip: [],
        metricValue: "Risk 1##VALUE##Risk 2",
        metricMinValue: null,
        metricMaxValue: null,
        isRound: false,
        metricValueIcon: null,
        metricValueTooltip: null,
        metricDescription: null,
      },
      {
        metricKey: "RiskTypeCustom",
        metricName: "Risk Type",
        metricTooltip: [],
        metricValue: "Market##VALUE##Chronic physical",
        metricMinValue: null,
        metricMaxValue: null,
        isRound: false,
        metricValueIcon: null,
        metricValueTooltip: null,
        metricDescription: null,
      },
      {
        metricKey:
          "C0_4_Select_the_currency_used_for_all_financial_information_disclosed_throughout_your_response",
        metricName: "Currency",
        metricTooltip: [],
        metricValue: "USD",
        metricMinValue: null,
        metricMaxValue: null,
        isRound: false,
        metricValueIcon: null,
        metricValueTooltip: null,
        metricDescription:
          "C0.4_Select the currency used for all financial information disclosed throughout your response.",
      },
      {
        metricKey: "PotentialFinancialImpactOfRiskSingleFigureCustom",
        metricName: "Potential Financial Impact of Risk - Single Figure",
        metricTooltip: [],
        metricValue:
          "Entity deemed question not applicable##VALUE##Entity deemed question not applicable",
        metricMinValue: null,
        metricMaxValue: null,
        isRound: false,
        metricValueIcon: null,
        metricValueTooltip: null,
        metricDescription: null,
      },
      {
        metricKey: "PotentialFinancialImpactOfRiskMinimumCustom",
        metricName: "Potential Financial Impact of Risk - Minimum/Maximum",
        metricTooltip: [],
        metricValue: "245000000##VALUE##Entity deemed question not applicable",
        metricMinValue: null,
        metricMaxValue: null,
        isRound: false,
        metricValueIcon: null,
        metricValueTooltip: null,
        metricDescription: null,
      },
      {
        metricKey: "PotentialFinancialImpactOfRiskMaximumCustom",
        metricName: "Potential Financial Impact of Risk - Minimum/Maximum",
        metricTooltip: [],
        metricValue: "1000000000##VALUE##Entity deemed question not applicable",
        metricMinValue: null,
        metricMaxValue: null,
        isRound: false,
        metricValueIcon: null,
        metricValueTooltip: null,
        metricDescription: null,
      },
      {
        metricKey: "CostOfResponseToRiskCustom",
        metricName: "Cost of response to risk",
        metricTooltip: [],
        metricValue: "28000000##VALUE##750000",
        metricMinValue: null,
        metricMaxValue: null,
        isRound: false,
        metricValueIcon: null,
        metricValueTooltip: null,
        metricDescription: null,
      },
    ],
  },
  {
    externalCompanyId: 0,
    globalCompanyId: -99,
    companyName: "Industry",
    isBaseCompany: false,
    industryId: 12,
    industryName: "Consumer",
    metrics: [
      {
        metricKey: "RiskNumber",
        metricName: "Risk Number",
        metricTooltip: [],
        metricValue: "Risk 1##VALUE##Risk 2",
        metricMinValue: null,
        metricMaxValue: null,
        isRound: false,
        metricValueIcon: null,
        metricValueTooltip: null,
        metricDescription: null,
      },
      {
        metricKey: "RiskTypeCustom",
        metricName: "Risk Type",
        metricTooltip: [],
        metricValue: "Acute physical##VALUE##Acute physical",
        metricMinValue: null,
        metricMaxValue: null,
        isRound: false,
        metricValueIcon: null,
        metricValueTooltip: null,
        metricDescription: null,
      },
      {
        metricKey:
          "C0_4_Select_the_currency_used_for_all_financial_information_disclosed_throughout_your_response",
        metricName: "Currency",
        metricTooltip: [],
        metricValue: "USD",
        metricMinValue: null,
        metricMaxValue: null,
        isRound: false,
        metricValueIcon: null,
        metricValueTooltip: null,
        metricDescription:
          "C0.4_Select the currency used for all financial information disclosed throughout your response.",
      },
      {
        metricKey: "PotentialFinancialImpactOfRiskSingleFigureCustom",
        metricName: "Potential Financial Impact of Risk - Single Figure",
        metricTooltip: [],
        metricValue:
          "Entity deemed question not applicable##VALUE##Entity deemed question not applicable",
        metricMinValue: null,
        metricMaxValue: null,
        isRound: false,
        metricValueIcon: null,
        metricValueTooltip: null,
        metricDescription: null,
      },
      {
        metricKey: "PotentialFinancialImpactOfRiskMinimumCustom",
        metricName: "Potential Financial Impact of Risk - Minimum/Maximum",
        metricTooltip: [],
        metricValue: "0##VALUE##1",
        metricMinValue: null,
        metricMaxValue: null,
        isRound: false,
        metricValueIcon: null,
        metricValueTooltip: null,
        metricDescription: null,
      },
      {
        metricKey: "PotentialFinancialImpactOfRiskMaximumCustom",
        metricName: "Potential Financial Impact of Risk - Minimum/Maximum",
        metricTooltip: [],
        metricValue: "3000000##VALUE##7000000",
        metricMinValue: null,
        metricMaxValue: null,
        isRound: false,
        metricValueIcon: null,
        metricValueTooltip: null,
        metricDescription: null,
      },
      {
        metricKey: "CostOfResponseToRiskCustom",
        metricName: "Cost of response to risk",
        metricTooltip: [],
        metricValue: "0##VALUE##0",
        metricMinValue: null,
        metricMaxValue: null,
        isRound: false,
        metricValueIcon: null,
        metricValueTooltip: null,
        metricDescription: null,
      },
    ],
  },
];

const filtered = ["Currency denominator"];

const getDataSet = (data) => {
  const dataToTake = data.map((dataset) => {
    return {
      ...dataset,
      metrics: dataset.metrics.filter(
        (metric) => !filtered.includes(metric.metricName)
      ),
    };
  });

  const result = dataToTake.reduce((finalDataset, currentDataset) => {
    console.log(" data s", currentDataset);
    currentDataset.metrics.forEach((metric) => {
      console.log(" here ", metric);
    });
  }, []);
};

console.log(" dataset - ", getDataSet(dataset));
