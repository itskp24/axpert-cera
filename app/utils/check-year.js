const getCurrentFiscalYear = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-indexed: April is 3
  
  const startYear = currentMonth >= 3 ? currentYear : currentYear - 1;
  const endYearSnippet = (startYear + 1).toString().slice(-2);
  
  return `${startYear}-${endYearSnippet}`;
};

console.log(getCurrentFiscalYear());
