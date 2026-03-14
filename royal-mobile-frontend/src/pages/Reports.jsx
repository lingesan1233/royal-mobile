export default function Reports(){

  const downloadDaily = ()=>{
    window.open("https://royal-mobile.onrender.com");
  };

  const downloadWeekly = ()=>{
    window.open("https://royal-mobile.onrender.com");
  };

  const downloadMonthly = ()=>{
    window.open("https://royal-mobile.onrender.com");
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