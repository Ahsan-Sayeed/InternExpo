import React from "react";

const StrongPassword = ({ pass,setIsConfirm }) => {
  let data = [];

  if (/(?=.*[A-Z].*[A-Z])/.test(pass)) {
    data.push("UpperCase");
  }
  if (pass !== undefined && /^(?=.*[a-z].*[a-z])/.test(pass)) {
    data.push("LowerCase");
  }
  if (/(?=.*[0-9].*[0-9])/.test(pass)) {
    data.push("Number");
  }
  if (/(?=.*[!@#$&*])/.test(pass)) {
    data.push("Symbol");
  }
  if (pass?.length > 6) {
    data.push("More");
  }
  if (
    /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/.test(
      pass
    )
  ) {
    data.push("Good");
  }
  if(pass?.length>8){
    data.push('Medium');
  }
  if(pass?.length>10){
    data.push('Strong');
  }
  if(pass?.length>12){
    data.push('Hard');
  }
  if(pass?.length>15){
    data.push('Very Strong');
  }

  data = [...new Set(data)];
  return (
    <div className="my-5">
      <ul>
        <li className="text-sm text-slate-600">
          {data.includes("UpperCase") ? (
            <span className="text-green-600">✔</span>
          ) : (
            <span className="text-red-400">✘</span>
          )}
          At lest two upper-case
        </li>
        <li className="text-sm text-slate-600">
          {data.includes("LowerCase") ? (
            <span className="text-green-600">✔</span>
          ) : (
            <span className="text-red-400">✘</span>
          )}
          At lest two lower-case
        </li>
        <li className="text-sm text-slate-600">
          {data.includes("Number") ? (
            <span className="text-green-600">✔</span>
          ) : (
            <span className="text-red-400">✘</span>
          )}
          At lest two Number
        </li>
        <li className="text-sm text-slate-600">
          {data.includes("Symbol") ? (
            <span className="text-green-600">✔</span>
          ) : (
            <span className="text-red-400">✘</span>
          )}
          At lest one symbol
        </li>
        <li className="text-sm text-slate-600">
          {data.includes("More") ? (
            <span className="text-green-600">✔</span>
          ) : (
            <span className="text-red-400">✘</span>
          )}
          More than 6 character
        </li>
        <li className="text-sm text-slate-600 mt-3">
          <progress className={`progress ${data.length<8?'progress-warning':'progress-success'} w-full`} value={data.length*10} max="100"></progress>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(StrongPassword);
