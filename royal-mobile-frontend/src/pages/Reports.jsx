export default function Reports(){

  const downloadDaily = ()=>{
    window.open("https://royal-mobile.onrender.com/api/reports/sales?type=daily");
  };

  const downloadWeekly = ()=>{
    window.open("https://royal-mobile.onrender.com/api/reports/sales?type=weekly");
  };

  const downloadMonthly = ()=>{
    window.open("https://royal-mobile.onrender.com/api/reports/sales?type=monthly");
  };

  return(

    <div>

      <h2>Reports</h2>

      <button onClick={downloadDaily}>
        Daily Report
      </button>

      <button onClick={downloadWeekly}>
        Weekly Report
      </button>

      <button onClick={downloadMonthly}>
        Monthly Report
      </button>

    </div>

  );
}