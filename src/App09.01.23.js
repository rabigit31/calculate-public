import './App.css';
import { useCallback, useEffect, useState } from 'react';

function App() {

  const [popup, setPopup] = useState(true);
  const [error, setError] = useState(true);

  const closePopup = () => {
    setPopup(false);
  }

    const [pasteEmployee, setPasteEmployee] = useState(1); 
    const [pastePercentage, setPastePercentage] = useState(40);
    const [pasteSalary, setPasteSalary] = useState(3000000);
    const [corporateTotal, setCorporateTotal] = useState(2400000);
    const [functionalTotal, setFunctionalTotal] = useState(6400000);
    const [plantTotal, setPlantTotal] = useState(2800000);

    const [pasteFunEmployee, setPasteFunEmployee] = useState(3); 
    const [pasteFunPercentage, setPasteFunPercentage] = useState(20);
    const [pasteFunSalary, setPasteFunSalary] = useState(2000000);

    const [pastePntEmployee, setPastePntEmployee] = useState(4); 
    const [pastePntPercentage, setPastePntPercentage] = useState(20);
    const [pastePntSalary, setPastePntSalary] = useState(500000);

    const [manUnit, setManUnit] = useState(2);
    const [plantEmployee, setPlantEmployee] = useState(2);

      const pasteNoOfEmployee = () => {
        for(let i=0;i<ctValues.length;i++){
          let updateEmpValues = [...ctValues];
          updateEmpValues[i]["employee"] = pasteEmployee;
          setCtValues(updateEmpValues);
        }
      }
      const pastePercentageTime = () => {
        for(let i=0;i<ctValues.length;i++){
          let updateEmpValues = [...ctValues];
          updateEmpValues[i]["percentage"] = pastePercentage;
          setCtValues(updateEmpValues);
        }
      }
      const pasteAvgSalary = () => {
        for(let i=0;i<ctValues.length;i++){
          let updateEmpValues = [...ctValues];
          updateEmpValues[i]["salary"] = pasteSalary;
          setCtValues(updateEmpValues);
        }
      }


      const [ctValues, setCtValues] = useState([
        { management_team: "CEO",employee: 1, percentage : 40, salary : 3000000, total : 1200000, isEdit:false},
        { management_team: "COO",employee: 1, percentage : 40, salary : 3000000, total : 1200000, isEdit:false},
        { management_team: "CFO",employee: 1, percentage : 40, salary : 3000000, total : 1200000, isEdit:false},
        { management_team: "CHRO",employee: 1, percentage : 40, salary : 3000000, total : 1200000, isEdit:false},
      ])
      
      let corporateTeamCal = (i, fieldname,fielvalue,param1, param2,param3) => {
        //console.log(param1,param2,param3)
        let tot = ((param2 * param3)/100)*param1;
        let newFormValues = [...ctValues];
        newFormValues[i][fieldname] = fielvalue;
        newFormValues[i]["total"] = tot;
        setCtValues(newFormValues);
      }

      let addCorporateFields = () => {
        setCtValues([...ctValues, { management_team:"new", employee: 1, percentage : 40, salary : 3000000, total : 1200000}])
      }
      let removeCorporateFields = (i) => {
          let newFormValues = [...ctValues];
          newFormValues.splice(i, 1);
          setCtValues(newFormValues)
      }

      let renameCorporateFields = (i) => {
          let newFormValues = [...ctValues];
          newFormValues[i]["isEdit"] = true;
          setCtValues(newFormValues)
      }

      let changeCorporateFieldsName = (i,name) => {
          let newFormValues = [...ctValues];
          newFormValues[i]["management_team"] = name;
          setCtValues(newFormValues)
      }

      let saverenameCorporateFields = (i) => {
        let newFormValues = [...ctValues];
        newFormValues[i]["isEdit"] = false;
        setCtValues(newFormValues)
    }

      useEffect(() => {
        // let total=0;
        // for(let i=0;i<ctValues.length;i++){
        //   corporateTeamCal(i,"employee",ctValues[i].employee,ctValues[i].employee,ctValues[i].percentage,ctValues[i].salary);
        //   corporateTeamCal(i,"percentage",ctValues[i].percentage,ctValues[i].employee,ctValues[i].percentage,ctValues[i].salary);
        //   corporateTeamCal(i,"salary",ctValues[i].salary,ctValues[i].employee,ctValues[i].percentage,ctValues[i].salary);
        //   total=total+ctValues[i].total;
        //   setCorporateTotal(total)
        // }


      },[ctValues]);

      let FunctionalTeamCal = (i, fieldname,fielvalue,param1, param2,param3) => {
        let tot = ((param2 * param3)/100)*param1;
        let newFormValues = [...ftValues];
        newFormValues[i][fieldname] = fielvalue;
        newFormValues[i]["total"] = tot;
        setFtValues(newFormValues);
      }

      const [ftValues, setFtValues] = useState([
        { management_team: "Sales and Marketing",employee: 3, percentage : 20, salary : 2000000, total : 1200000},
        { management_team: "Finance and Accounting",employee: 3, percentage : 20, salary : 2000000, total : 1200000},
        { management_team: "Centralized Procurement",employee: 3, percentage : 20, salary : 2000000, total : 1200000},
        { management_team: "Human Resources",employee: 3, percentage : 20, salary : 2000000, total : 1200000},
        { management_team: "Information Technology",employee: 3, percentage : 20, salary : 2000000, total : 1200000},
        { management_team: "Compliance",employee: 3, percentage : 20, salary : 2000000, total : 1200000}
      ])

      let removeFunctionalFields = (i) => {
        let newFormValues = [...ftValues];
        newFormValues.splice(i, 1);
        setFtValues(newFormValues)
      }

    const pasteFunNoOfEmployee = () => {
      for(let i=0;i<ftValues.length;i++){
        let updateEmpValues = [...ftValues];
        updateEmpValues[i]["employee"] = pasteFunEmployee;
        setFtValues(updateEmpValues);
      }
    }
    const pasteFunPercentageTime = () => {
      for(let i=0;i<ftValues.length;i++){
        let updateEmpValues = [...ftValues];
        updateEmpValues[i]["percentage"] = pasteFunPercentage;
        setFtValues(updateEmpValues);
      }
    }
    const pasteFunAvgSalary = () => {
      for(let i=0;i<ftValues.length;i++){
        let updateEmpValues = [...ftValues];
        updateEmpValues[i]["salary"] = pasteFunSalary;
        setFtValues(updateEmpValues);
      }
    }


    const [ptValues, setPtValues] = useState([
      { management_team: "PPC Team",employee: 4, percentage : 20, salary : 5000000, total : 400000},
      { management_team: "Plant HR Team",employee: 4, percentage : 20, salary : 5000000, total : 400000},
      { management_team: "Plant Procurement Team",employee: 4, percentage : 20, salary : 5000000, total : 400000},
      { management_team: "Plant Finance & Accounting",employee: 4, percentage : 20, salary : 5000000, total : 400000},
      { management_team: "QA & QC",employee: 4, percentage : 20, salary : 5000000, total : 400000},
      { management_team: "Logistics",employee: 4, percentage : 20, salary : 5000000, total : 400000},
      { management_team: "Costing & MIS",employee: 4, percentage : 20, salary : 5000000, total : 400000}
    ])

    let plantTeamCal = (i, fieldname,fielvalue,param1, param2,param3) => {
      let tot = ((param2 * param3)/100)*param1;
      let newFormValues = [...ptValues];
      newFormValues[i][fieldname] = fielvalue;
      newFormValues[i]["total"] = tot;
      setPtValues(newFormValues);
    }

    let removePlantFields = (i) => {
      let newFormValues = [...ptValues];
      newFormValues.splice(i, 1);
      setPtValues(newFormValues)
    }

    const pastePntNoOfEmployee = () => {
      for(let i=0;i<ptValues.length;i++){
        let updateEmpValues = [...ptValues];
        updateEmpValues[i]["employee"] = pastePntEmployee;
        setPtValues(updateEmpValues);
      }
    }
    const pastePntPercentageTime = () => {
      for(let i=0;i<ptValues.length;i++){
        let updateEmpValues = [...ptValues];
        updateEmpValues[i]["percentage"] = pastePntPercentage;
        setPtValues(updateEmpValues);
      }
    }
    const pastePntAvgSalary = () => {
      for(let i=0;i<ptValues.length;i++){
        let updateEmpValues = [...ptValues];
        updateEmpValues[i]["salary"] = pastePntSalary;
        setPtValues(updateEmpValues);
      }
    }

    const additionPlantTwo = (param1,param2) => {
      setManUnit(param1);
      setPlantEmployee(param2);
      setPastePntEmployee(parseInt(param1)+parseInt(param2));
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(ctValues));
        console.log(JSON.stringify(ftValues));
        console.log(JSON.stringify(ptValues));
    }

    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
  
    const emailValidate = event => {
      if (!isValidEmail(event.target.value)) {
        setError(true);
      } else {
        setError(false);
      }
    };

  return (
    <div className=''>
      {/* popup */}
        {popup &&
        <div className="w-full h-full fixed bg-bglow z-3 top-0 left-0 font-poppins">
          <div className="position max-w-[640px] w-[96%]">
            <div className="sharePopupone">
              <div className="bg-white rounded-2xl px-4 pt-8 pb-4 relative">
                <svg onClick={closePopup} className="flex-shrink-0 h-3 w-3 text-gray-400 absolute right-5 top-5 z-3 cursor-pointer" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L11 11M1 11L11 1L1 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <div className="text-lg text-black text-center font-semibold mb-3 md:text-3xl md:font-bold md:mb-3">xxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                <p className="text-center text-sm font-normal text-gray-500 mb-5">xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                <div className="">
                  {/* move to folder start */}
                  <div className="p-4 bg-gray-100 rounded-xl">
                    <ul className="space-y-2 mb-0 list-disc list-inside">
                      <li>simply dummy text of the printing and typesetting</li>
                      <li>simply dummy text of the printing and typesetting</li>
                      <li>simply dummy text of the printing and typesetting</li>
                      <li>simply dummy text of the printing and typesetting</li>
                    </ul>
                    {/* move to folder end */}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>}
      
      {/* popup */}
      <div className='w-full h-auto fixed bg-white shadow-xl z-2'>
        <div className='bg-headerbg'>
          <div className='max-w-[96%] w-full m-auto flex justify-center items-center'>
            <h1 className='font-poppins font-medium text-2xl text-headerText py-4'>MIS Cost Calculator</h1>
          </div>
        </div>
        <div className='max-w-[96%] w-full m-auto'>
          <h2 className='font-poppins font-medium text-2xl text-gray-600 py-4'>Overview</h2>
          <ul className='flex justify-start items-center space-x-20'>
            <li className='w-56 h-24 px-4 py-4 rounded-20 bg-headerbg flex justify-start items-center'>
              <div className='w-8 mr-4 flex justify-center items-center'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 36.6667C29.205 36.6667 36.6667 29.205 36.6667 20C36.6667 10.795 29.205 3.33333 20 3.33333C10.795 3.33333 3.33334 10.795 3.33334 20C3.33334 29.205 10.795 36.6667 20 36.6667Z" stroke="#1200D5" strokeWidth="2.08333" strokeLinejoin="round" />
                  <path d="M15 18.3333H25M15 23.3333H25M20.0067 18.3333V28.3333M25 12.5L20 17.5L15 12.5" stroke="#1200D5" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className='text-base text-gray-700 block font-poppins'>Grand Total</span>
                <p className='text-2xl text-gray-500'>12,800,000</p>
              </div>
            </li>
            <li className='w-56 h-24 px-4 py-4 rounded-20 bg-yellow-100 flex justify-start items-center'>
              <div className='w-8 mr-4 flex justify-center items-center'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 35H35M8.33333 35V11.6667L21.6667 5V35M31.6667 35V18.3333L21.6667 11.6667M15 15V15.0167M15 20V20.0167M15 25V25.0167M15 30V30.0167" stroke="#FFD000" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className='text-base text-gray-700 block font-poppins'>Corporate Total</span>
                <p className='text-2xl text-gray-500'>{corporateTotal}</p>
              </div>
            </li>
            <li className='w-56 h-24 px-4 py-4 rounded-20 bg-red-100 flex justify-start items-center'>
              <div className=' w-8 mr-4 flex justify-center items-center'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.00581 12.3817L4.58331 20.0442L8.98081 27.6625L13.4033 20L9.00581 12.3817V12.3817Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.4033 20L8.98083 27.6625H17.7758L22.1992 20H13.4033ZM9.00583 12.3817L13.4033 20H22.1992L17.8008 12.3817H9.00583V12.3817Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22.2242 4.71834L17.8008 12.3817L22.1992 20L26.6217 12.3375L22.2242 4.71834V4.71834ZM26.6217 12.3375L22.1992 20H30.9942L35.4167 12.3375H26.6217Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22.2242 4.71834L26.6217 12.3375H35.4167L31.0192 4.71834H22.2242V4.71834ZM22.1992 20L17.7758 27.6625L22.1733 35.2817L26.5967 27.6183L22.1992 20Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M26.5967 27.6183L22.1733 35.2817H30.9692L35.3917 27.6183H26.5967ZM22.1992 20L26.5967 27.6183H35.3917L30.9942 20H22.1992Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className='text-base text-gray-700 block font-poppins'>Functions Total</span>
                <p className='text-2xl text-gray-500'>{functionalTotal}</p>
              </div>
            </li>
            <li className='w-56 h-24 px-4 py-4 rounded-20 bg-green-100 flex justify-start items-center'>
              <div className=' w-8 mr-4 flex justify-center items-center'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.9125 7.6875C36.7225 7.57779 36.5069 7.52003 36.2875 7.52003C36.0681 7.52003 35.8525 7.57779 35.6625 7.6875L25 12.975V8.75C24.9994 8.53692 24.9443 8.32754 24.8399 8.14175C24.7356 7.95596 24.5855 7.79992 24.4039 7.68845C24.2223 7.57699 24.0152 7.5138 23.8023 7.50488C23.5894 7.49596 23.3778 7.54161 23.1875 7.6375L12.5 12.975V3.75C12.5 3.41848 12.3683 3.10054 12.1339 2.86612C11.8995 2.6317 11.5815 2.5 11.25 2.5H3.75C3.41848 2.5 3.10054 2.6317 2.86612 2.86612C2.6317 3.10054 2.5 3.41848 2.5 3.75V35H37.5V8.75C37.5004 8.53757 37.4467 8.32854 37.3439 8.14263C37.2411 7.95673 37.0926 7.80009 36.9125 7.6875ZM27.5 32.5H22.5V23.75H27.5V32.5ZM35 32.5H30V22.5C30 22.1685 29.8683 21.8505 29.6339 21.6161C29.3995 21.3817 29.0815 21.25 28.75 21.25H21.25C20.9185 21.25 20.6005 21.3817 20.3661 21.6161C20.1317 21.8505 20 22.1685 20 22.5V32.5H5V5H10V17.025L22.5 10.775V17.025L35 10.775V32.5Z" fill="#0CCF00" />
                </svg>
              </div>
              <div>
                <span className='text-base text-gray-700 block font-poppins'>Plant Total</span>
                <p className='text-2xl text-gray-500'>{plantTotal}</p>
              </div>
            </li>
          </ul>
          <div className='max-w-[1000px] w-full m-auto rounded-10 bg-headerbg py-3 px-4 my-6'>
            <p className='text-base text-indigo-700 font-medium font-poppins'>As per our estimate, For the company with <strong>2 manufacturing units</strong>, estimated cost of reporting is <strong>INR 12,800,000</strong> per year</p>
          </div>
        </div>
      </div>
      <div className='pt-[330px]'>
        <form onSubmit={handleSubmit}>
        <div className=''>
          <div className='max-w-lg w-full m-auto py-12 flex justify-center items-center font-poppins'>
            <p className='text-base text-gray-600 font-normal font-poppins mr-14'>Please select your currency</p>
            <div className="text-xs font-semibold text-gray-500 w-40">
              <select id="asc" name="asc" autoComplete="asc-name" className="block w-full bg-gray-50 border border-gray-300 text-base rounded-md px-1.5 py-1 outline-none">
                <option value="">INR</option>
                <option value="">12000</option>
                <option value="">15000</option>
                <option value="">17000</option>
              </select>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='max-w-[96%] w-full m-auto'>
          <div className='border-2 border-gary-400 rounded-10'>
            <ul className="mb-0">
              <li className="text-gray-500 text-base font-semibold px-4 py-3 flex justify-between items-center border-b-2 border-gary-400 rounded-b-10">
                <span className="w-1/5">Team</span>
                <span className="w-1/5 text-center">No of employees with report preparation as part of job detail</span>
                <span className="w-1/5 text-center">Percentage time spent in reporting</span>
                <span className="w-1/5 text-center">Average Salary - Per Year</span>
                <span className="w-1/5 text-center">Direct yearly cost of report preparation</span>
              </li>
            </ul>
            <ul className="mb-0 mt-5 space-y-4">
              <li className="text-gray-500 text-base px-4 flex justify-between items-center">
                <span className="w-1/5 flex justify-between items-center">
                  <span className=' font-semibold'>Corporate Team</span>
                  <span></span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                  <input value={pasteEmployee} onChange={(evt) => setPasteEmployee(evt.target.value) } className="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span onClick={pasteNoOfEmployee} className='text-sm text-gray-700'>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                  <input value={pastePercentage} onChange={(evt) => setPastePercentage(evt.target.value) } className="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span onClick={pastePercentageTime} className='text-sm text-gray-700'>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                  <input value={pasteSalary} onChange={(evt) => setPasteSalary(evt.target.value) } className="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span onClick={pasteAvgSalary} className='text-sm text-gray-700'>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                </span>
              </li>
              {/* loop start */}
              {ctValues.map((element, index) => (
              <li key={index} className="text-gray-500 text-sm px-4 flex justify-between items-center">
                <span className="w-1/5 flex justify-between items-center">
                  {!element.isEdit ? (<span className=''>{element.management_team}</span>):(<input type="text" onChange={(e) => changeCorporateFieldsName(index,e.target.value)} value={element.management_team} placeholder="Enter name" />)}
                  {index !== 0 &&
                  <span className='flex justify-start items-center space-x-3'>
                    {element.isEdit &&
                    <svg onClick={() => saverenameCorporateFields(index)} className='cursor-pointer flex-shrink-0 h-5 w-5 inline-block align-middle text-gray-400 hover:text-red-600' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.33337 9.16667V14.1667M11.6667 9.16667V14.1667M3.33337 5.83333H16.6667M15.8334 5.83333L15.1109 15.9517C15.0809 16.3722 14.8928 16.7657 14.5843 17.053C14.2758 17.3403 13.8699 17.5 13.4484 17.5H6.55171C6.13016 17.5 5.72426 17.3403 5.41578 17.053C5.10729 16.7657 4.91914 16.3722 4.88921 15.9517L4.16671 5.83333H15.8334ZM12.5 5.83333V3.33333C12.5 3.11232 12.4122 2.90036 12.256 2.74408C12.0997 2.5878 11.8877 2.5 11.6667 2.5H8.33337C8.11236 2.5 7.9004 2.5878 7.74412 2.74408C7.58784 2.90036 7.50004 3.11232 7.50004 3.33333V5.83333H12.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    }
                    <svg onClick={() => renameCorporateFields(index)} className='cursor-pointer' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_179_1329)">
                      <path d="M11.6833 0.653605C11.5963 0.564953 11.4925 0.494604 11.3779 0.446704C11.2633 0.398804 11.1403 0.374321 11.0162 0.374699H11.0156C10.8913 0.374408 10.7682 0.39902 10.6536 0.447084C10.5389 0.495147 10.4351 0.565688 10.3482 0.654543L2.56447 8.56153C2.39155 8.73813 2.29514 8.97573 2.29611 9.22289C2.29708 9.47005 2.39535 9.70689 2.56966 9.88212L3.00032 10.3128L0.46875 12.8738V14.0039H3.59766L5.14453 12.457L5.51013 12.8226C5.59905 12.9116 5.70495 12.9817 5.82154 13.0289C5.93812 13.076 6.063 13.0992 6.18874 13.0971C6.31448 13.095 6.43851 13.0676 6.55345 13.0166C6.66839 12.9656 6.77189 12.8919 6.85778 12.8001L14.4232 4.71005C14.5892 4.53347 14.6802 4.29934 14.6769 4.057C14.6736 3.81467 14.5764 3.58308 14.4057 3.41106L11.6833 0.653605ZM3.20941 13.0664H1.59668L2.96051 11.6865L3.77496 12.501L3.20941 13.0664ZM6.17309 12.1598L5.14453 11.1313L4.43769 11.8381L3.61937 11.0198L4.32208 10.3088L3.2325 9.21925L4.64865 7.78063L7.55273 10.6846L6.17309 12.1598ZM8.19334 9.99943L5.3064 7.11251L11.0161 1.31223L13.7385 4.06968L8.19334 9.99943Z" fill="#8980EA" />
                    </g>
                    <defs>
                      <clipPath id="clip0_179_1329">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg onClick={() => removeCorporateFields(index)} className='cursor-pointer flex-shrink-0 h-5 w-5 inline-block align-middle text-gray-400 hover:text-red-600' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33337 9.16667V14.1667M11.6667 9.16667V14.1667M3.33337 5.83333H16.6667M15.8334 5.83333L15.1109 15.9517C15.0809 16.3722 14.8928 16.7657 14.5843 17.053C14.2758 17.3403 13.8699 17.5 13.4484 17.5H6.55171C6.13016 17.5 5.72426 17.3403 5.41578 17.053C5.10729 16.7657 4.91914 16.3722 4.88921 15.9517L4.16671 5.83333H15.8334ZM12.5 5.83333V3.33333C12.5 3.11232 12.4122 2.90036 12.256 2.74408C12.0997 2.5878 11.8877 2.5 11.6667 2.5H8.33337C8.11236 2.5 7.9004 2.5878 7.74412 2.74408C7.58784 2.90036 7.50004 3.11232 7.50004 3.33333V5.83333H12.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  </span>
                  }
                </span>
                <span className="w-1/5 text-center px-10">
                  <input name="employee" value={element.employee || ""} onChange={e => corporateTeamCal(index, e.target.name,e.target.value,e.target.value, element.percentage, element.salary)} className="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10">
                  <input name="percentage" value={element.percentage || ""} onChange={e => corporateTeamCal(index, e.target.name,e.target.value,element.employee, e.target.value, element.salary)} className="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10">
                  <input name="salary" value={element.salary || ""} onChange={e => corporateTeamCal(index, e.target.name,e.target.value,element.employee, element.percentage,e.target.value)} className="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10 flex justify-center items-center">{element.total}</span>
              </li>
              ))}
              {/* loop end */}
            </ul>
            <button className="button add" type="button" onClick={() => addCorporateFields()}>Add More</button>
            {/* Yellow common link start */}
            <div className='flex justify-between items-center my-4 px-4 py-1 bg-yellow-100'>
              <div className='w-4/5 text-gray-700 text-sm'>Corporate Total</div>
              <div className="w-1/5 text-center text-gray-700 text-sm">{corporateTotal}</div>
            </div>
            {/* Yellow common link end */}
            <ul className="mb-0 mt-5 space-y-4">
              <li className="text-gray-500 text-base px-4 flex justify-between items-center">
                <span className="w-1/5 flex justify-between items-center">
                  <span className=' font-semibold'>Functional Teams</span>
                  <span></span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                  <input value={pasteFunEmployee} onChange={(evt) => setPasteFunEmployee(evt.target.value) } className="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span onClick={pasteFunNoOfEmployee}  className='text-sm text-gray-700'>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                  <input value={pasteFunPercentage} onChange={(evt) => setPasteFunPercentage(evt.target.value) } className="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span onClick={pasteFunPercentageTime} className='text-sm text-gray-700'>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                  <input value={pasteFunSalary} onChange={(evt) => setPasteFunSalary(evt.target.value) } className="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span onClick={pasteFunAvgSalary} className='text-sm text-gray-700'>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                </span>
              </li>
              {/* loop start */}
              {ftValues.map((element, index) => (
              <li key={index} className="text-gray-500 text-sm px-4 flex justify-between items-center">
                <span className="w-1/5 flex justify-between items-center">
                  <span className=''>{element.management_team}</span>
                  {index !== 0 &&
                  <span className='flex justify-start items-center space-x-3'>
                    <svg className='cursor-pointer' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_179_1329)">
                      <path d="M11.6833 0.653605C11.5963 0.564953 11.4925 0.494604 11.3779 0.446704C11.2633 0.398804 11.1403 0.374321 11.0162 0.374699H11.0156C10.8913 0.374408 10.7682 0.39902 10.6536 0.447084C10.5389 0.495147 10.4351 0.565688 10.3482 0.654543L2.56447 8.56153C2.39155 8.73813 2.29514 8.97573 2.29611 9.22289C2.29708 9.47005 2.39535 9.70689 2.56966 9.88212L3.00032 10.3128L0.46875 12.8738V14.0039H3.59766L5.14453 12.457L5.51013 12.8226C5.59905 12.9116 5.70495 12.9817 5.82154 13.0289C5.93812 13.076 6.063 13.0992 6.18874 13.0971C6.31448 13.095 6.43851 13.0676 6.55345 13.0166C6.66839 12.9656 6.77189 12.8919 6.85778 12.8001L14.4232 4.71005C14.5892 4.53347 14.6802 4.29934 14.6769 4.057C14.6736 3.81467 14.5764 3.58308 14.4057 3.41106L11.6833 0.653605ZM3.20941 13.0664H1.59668L2.96051 11.6865L3.77496 12.501L3.20941 13.0664ZM6.17309 12.1598L5.14453 11.1313L4.43769 11.8381L3.61937 11.0198L4.32208 10.3088L3.2325 9.21925L4.64865 7.78063L7.55273 10.6846L6.17309 12.1598ZM8.19334 9.99943L5.3064 7.11251L11.0161 1.31223L13.7385 4.06968L8.19334 9.99943Z" fill="#8980EA" />
                    </g>
                    <defs>
                      <clipPath id="clip0_179_1329">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg onClick={() => removeFunctionalFields(index)} className='cursor-pointer flex-shrink-0 h-5 w-5 inline-block align-middle text-gray-400 hover:text-red-600' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33337 9.16667V14.1667M11.6667 9.16667V14.1667M3.33337 5.83333H16.6667M15.8334 5.83333L15.1109 15.9517C15.0809 16.3722 14.8928 16.7657 14.5843 17.053C14.2758 17.3403 13.8699 17.5 13.4484 17.5H6.55171C6.13016 17.5 5.72426 17.3403 5.41578 17.053C5.10729 16.7657 4.91914 16.3722 4.88921 15.9517L4.16671 5.83333H15.8334ZM12.5 5.83333V3.33333C12.5 3.11232 12.4122 2.90036 12.256 2.74408C12.0997 2.5878 11.8877 2.5 11.6667 2.5H8.33337C8.11236 2.5 7.9004 2.5878 7.74412 2.74408C7.58784 2.90036 7.50004 3.11232 7.50004 3.33333V5.83333H12.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  </span>
                  }
                </span>
                <span className="w-1/5 text-center px-10">
                  <input name="employee" value={element.employee || ""} onChange={e => FunctionalTeamCal(index, e.target.name,e.target.value,e.target.value, element.percentage, element.salary)} className="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10">
                  <input name="percentage" value={element.percentage || ""} onChange={e => FunctionalTeamCal(index, e.target.name,e.target.value,element.employee, e.target.value, element.salary)} className="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10">
                  <input name="salary" value={element.salary || ""} onChange={e => FunctionalTeamCal(index, e.target.name,e.target.value,element.employee, element.percentage,e.target.value)} className="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10 flex justify-center items-center">{element.total}</span>
              </li>
              ))}
              {/* loop end */}
            </ul>
            {/* Yellow common link start */}
            <div className='flex justify-between items-center my-4 px-4 py-1 bg-yellow-100'>
              <div className='w-4/5 text-gray-700 text-sm'>Functions Total</div>
              <div className="w-1/5 text-center text-gray-700 text-sm">{functionalTotal}</div>
            </div>
            {/* Yellow common link end */}
            <div>
              <ul className="mb-0 mt-5 space-y-4">
                <li className="text-gray-500 text-sm px-4 flex justify-start items-center">
                  <span className="w-2/5 flex justify-start items-center">
                    <span className=''>No. of Manufacturing units</span>
                  </span>
                  <span className="w-1/5 text-center px-10">
                    <input value={manUnit} onChange={(evt) => additionPlantTwo(evt.target.value,plantEmployee) } className="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  </span>
                </li>
                <li className="text-gray-500 text-sm px-4 flex justify-start items-center">
                  <span className="w-2/5 flex justify-start items-center">
                    <span className=''>No of employees per team in plant responsible for report generation</span>
                  </span>
                  <span className="w-1/5 text-center px-10">
                    <input value={plantEmployee} onChange={(evt) => additionPlantTwo(manUnit,evt.target.value) } className="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  </span>
                </li>
              </ul>
            </div>
            <ul className="mb-0 mt-5 space-y-4">
              <li className="text-gray-500 text-base px-4 flex justify-between items-center">
                <span className="w-1/5 flex justify-between items-center">
                  <span className=' font-semibold'>Plant Teams</span>
                  <span></span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                  <input value={pastePntEmployee} onChange={(evt) => setPastePntEmployee(evt.target.value) } className="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span onClick={pastePntNoOfEmployee}  className='text-sm text-gray-700'>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                  <input value={pastePntPercentage} onChange={(evt) => setPastePntPercentage(evt.target.value) } className="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span onClick={pastePntPercentageTime} className='text-sm text-gray-700'>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                  <input value={pastePntSalary} onChange={(evt) => setPastePntSalary(evt.target.value) } className="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span onClick={pastePntAvgSalary} className='text-sm text-gray-700'>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                </span>
              </li>
              {/* loop start */}
              {ptValues.map((element, index) => (
              <li key={index} className="text-gray-500 text-sm px-4 flex justify-between items-center">
                <span className="w-1/5 flex justify-between items-center">
                  <span className=''>{element.management_team}</span>
                  {index !== 0 &&
                  <span className='flex justify-start items-center space-x-3'>
                    <svg className='cursor-pointer' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_179_1329)">
                      <path d="M11.6833 0.653605C11.5963 0.564953 11.4925 0.494604 11.3779 0.446704C11.2633 0.398804 11.1403 0.374321 11.0162 0.374699H11.0156C10.8913 0.374408 10.7682 0.39902 10.6536 0.447084C10.5389 0.495147 10.4351 0.565688 10.3482 0.654543L2.56447 8.56153C2.39155 8.73813 2.29514 8.97573 2.29611 9.22289C2.29708 9.47005 2.39535 9.70689 2.56966 9.88212L3.00032 10.3128L0.46875 12.8738V14.0039H3.59766L5.14453 12.457L5.51013 12.8226C5.59905 12.9116 5.70495 12.9817 5.82154 13.0289C5.93812 13.076 6.063 13.0992 6.18874 13.0971C6.31448 13.095 6.43851 13.0676 6.55345 13.0166C6.66839 12.9656 6.77189 12.8919 6.85778 12.8001L14.4232 4.71005C14.5892 4.53347 14.6802 4.29934 14.6769 4.057C14.6736 3.81467 14.5764 3.58308 14.4057 3.41106L11.6833 0.653605ZM3.20941 13.0664H1.59668L2.96051 11.6865L3.77496 12.501L3.20941 13.0664ZM6.17309 12.1598L5.14453 11.1313L4.43769 11.8381L3.61937 11.0198L4.32208 10.3088L3.2325 9.21925L4.64865 7.78063L7.55273 10.6846L6.17309 12.1598ZM8.19334 9.99943L5.3064 7.11251L11.0161 1.31223L13.7385 4.06968L8.19334 9.99943Z" fill="#8980EA" />
                    </g>
                    <defs>
                      <clipPath id="clip0_179_1329">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg onClick={() => removePlantFields(index)} className='cursor-pointer flex-shrink-0 h-5 w-5 inline-block align-middle text-gray-400 hover:text-red-600' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33337 9.16667V14.1667M11.6667 9.16667V14.1667M3.33337 5.83333H16.6667M15.8334 5.83333L15.1109 15.9517C15.0809 16.3722 14.8928 16.7657 14.5843 17.053C14.2758 17.3403 13.8699 17.5 13.4484 17.5H6.55171C6.13016 17.5 5.72426 17.3403 5.41578 17.053C5.10729 16.7657 4.91914 16.3722 4.88921 15.9517L4.16671 5.83333H15.8334ZM12.5 5.83333V3.33333C12.5 3.11232 12.4122 2.90036 12.256 2.74408C12.0997 2.5878 11.8877 2.5 11.6667 2.5H8.33337C8.11236 2.5 7.9004 2.5878 7.74412 2.74408C7.58784 2.90036 7.50004 3.11232 7.50004 3.33333V5.83333H12.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  </span>
                  }
                </span>
                <span className="w-1/5 text-center px-10">
                  <input name="employee" value={element.employee || ""} onChange={e => plantTeamCal(index, e.target.name,e.target.value,e.target.value, element.percentage, element.salary)} className="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10">
                  <input name="percentage" value={element.percentage || ""} onChange={e => plantTeamCal(index, e.target.name,e.target.value,element.employee, e.target.value, element.salary)} className="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10">
                  <input name="salary" value={element.salary || ""} onChange={e => plantTeamCal(index, e.target.name,e.target.value,element.employee, element.percentage,e.target.value)} className="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10 flex justify-center items-center">{element.total}</span>
              </li>
              ))}
              {/* loop end */}
            </ul>
            {/* Yellow common link start */}
            <div className='flex justify-between items-center my-4 px-4 py-1 mb-0 bg-yellow-100'>
              <div className='w-4/5 text-gray-700 text-sm'>Plant Total</div>
              <div className="w-1/5 text-center text-gray-700 text-sm">{plantTotal}</div>
            </div>
            {/* Yellow common link end */}
          </div>
        </div>
        {/*  */}
        <div className='max-w-[96%] text-gray-700 w-full m-auto text-base font-semibold rounded-10 bg-headerbg py-3 px-4 my-6 border-2 border-indigo-400 flex justify-between items-center'>
          <div className='w-4/5'>Annual Cost of Report Preparation - Grand Total</div>
          <div className="w-1/5 text-center">INR 12,800,000</div>
        </div>
        <div className='max-w-[96%] w-full m-auto flex justify-center items-center pt-10 pb-16'>
          <button type="button" className="bg-btnbg rounded-md min-w-[124px] shadow-button whitespace-nowrap text-white text-2xl border-0 focus:outline-none font-semibold px-20 py-2.5">Get the Final Report</button>
        </div>
        <div className='max-w-3xl rounded-10 border-2 border-gray-200 w-full m-auto mb-10 px-24 py-7'>
          <div className='border-b-4 border-indigo-400 pb-4 mb-5'>
            <p className='text-lg text-gray-500 leading-9 font-semibold block'>Please Enter the details below.</p>
            <p className='text-lg text-gray-500 leading-9 font-semibold block'>We will share the final report on your Email Address</p>
          </div>
          <div>
            {/* <form className="mb-4" action="/" method="post"> */}
              <div className="mb-7 relative md:w-full">
                <label htmlFor="name" className="block text-base font-normal text-gray-500 mb-2">Company Name</label>
                <div className='relative'>
                  <input autoComplete="off" className="w-full bg-gray-50 border rounded-md shadow-sm p-2 outline-none focus:shadow-outline pr-16 text-base text-gray-500 pl-5" type="text" name="" id="" placeholder='XYZ Manufacturers'></input>
                  {/* <svg className="absolute right-2 top-2" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.875 7.29163L9.37498 19.7916L3.64581 14.0625L5.11456 12.5937L9.37498 16.8437L20.4062 5.82288L21.875 7.29163Z" fill="#0CCF00" />
                  </svg> */}
                </div>
                {/* <span className="text-red-400 text-xs py-1 absolute left-0 top-full">Error</span> */}
              </div>
              <div className="mb-7 relative md:w-full">
                <label htmlFor="email" className="block text-base font-normal text-gray-500 mb-2">Work Email Address</label>
                <div className='relative'>
                  <input onChange={emailValidate} autoComplete="off" className="w-full bg-gray-50 border rounded p-2 outline-none focus:shadow-outline pr-16 text-base text-gray-500 pl-5" type="email" name="" id="" placeholder='xyz@workemailid'></input>
                  {!error &&
                  <svg className="absolute right-2 top-2" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.875 7.29163L9.37498 19.7916L3.64581 14.0625L5.11456 12.5937L9.37498 16.8437L20.4062 5.82288L21.875 7.29163Z" fill="#0CCF00" />
                  </svg>
                  }
                </div>
                {/* <span className="text-red-400 text-xs py-1 absolute left-0 top-full">Error</span> */}
              </div>
              <div className='flex justify-end items-center'>
                <button disabled={error ? "disabled":""} className="bg-btnbg text-white text-lg font-semibold px-7 py-2 rounded-md shadow-button">Submit</button>
              </div>
            {/* </form> */}
          </div>
        </div>
        </form>
      </div>
    </div>

  );
}

export default App;
