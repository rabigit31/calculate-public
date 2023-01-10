import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

function App() {

  const [popup, setPopup] = useState(true);
  const [error, setError] = useState(true);

  const closePopup = () => {
    setPopup(false);
  }

    const [pasteEmployee, setPasteEmployee] = useState(1); 
    const [pastePercentage, setPastePercentage] = useState(40);
    const [pasteSalary, setPasteSalary] = useState(3000000);
    const [corporateTotal, setCorporateTotal] = useState(4800000);
    const [functionalTotal, setFunctionalTotal] = useState(6400000);
    const [plantTotal, setPlantTotal] = useState(2800000);
    const [grandTotal, setGrandTotal] = useState(14000000);

    const [pasteFunEmployee, setPasteFunEmployee] = useState(3); 
    const [pasteFunPercentage, setPasteFunPercentage] = useState(20);
    const [pasteFunSalary, setPasteFunSalary] = useState(2000000);

    const [pastePntEmployee, setPastePntEmployee] = useState(4); 
    const [pastePntPercentage, setPastePntPercentage] = useState(20);
    const [pastePntSalary, setPastePntSalary] = useState(500000);

    const [manUnit, setManUnit] = useState(2);
    const [plantEmployee, setPlantEmployee] = useState(2);

    const [defaultCurrency, setDefaultCurrency] = useState("INR");

    const [pdfDownloadUrl, setPdfDownloadUrl] = useState('');
    const [companyName,setCompanyName] = useState('');
    const [email,setEmail] = useState('');

      const pasteNoOfEmployee = () => {
        let total=0;
        for(let i=0;i<ctValues.length;i++){
          let updateEmpValues = [...ctValues];
          updateEmpValues[i]["employee"] = pasteEmployee;
          //new
          let tot = ((ctValues[i]["percentage"] * ctValues[i]["salary"])/100)*pasteEmployee;
          updateEmpValues[i]["total"] = tot;
           //end
          setCtValues(updateEmpValues);

          total=total+ctValues[i].total;
          setCorporateTotal(total);
        }
        setGrandTotal(total+functionalTotal+plantTotal);
      }
      const pastePercentageTime = () => {
        let total=0;
        for(let i=0;i<ctValues.length;i++){
          let updateEmpValues = [...ctValues];
          updateEmpValues[i]["percentage"] = pastePercentage;
          //new
          let tot = ((pastePercentage * ctValues[i]["salary"])/100)*ctValues[i]["employee"];
          updateEmpValues[i]["total"] = tot;
           //end
          setCtValues(updateEmpValues);

          total=total+ctValues[i].total;
          setCorporateTotal(total);
        }
        setGrandTotal(total+functionalTotal+plantTotal);
      }
      const pasteAvgSalary = () => {
        let total=0;
        for(let i=0;i<ctValues.length;i++){
          let updateEmpValues = [...ctValues];
          updateEmpValues[i]["salary"] = pasteSalary;
          //new
          let tot = ((ctValues[i]["percentage"] * pasteSalary)/100)*ctValues[i]["employee"];
          updateEmpValues[i]["total"] = tot;
           //end
          setCtValues(updateEmpValues);

          total=total+ctValues[i].total;
          setCorporateTotal(total);
        }
        setGrandTotal(total+functionalTotal+plantTotal);
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

        let total=0;
        for(let i=0;i<ctValues.length;i++){
          total=total+ctValues[i].total;
        }
        setCorporateTotal(total);
        setGrandTotal(total+functionalTotal+plantTotal);
      }

      let addCorporateFields = () => {
        setCtValues([...ctValues, { management_team:"Enter name", employee: 1, percentage : 40, salary : 3000000, total : 1200000, isEdit:false}]);
        let prevTotal=corporateTotal + 1200000;
        setCorporateTotal(prevTotal);
        setGrandTotal(prevTotal+functionalTotal+plantTotal);
      }
      let removeCorporateFields = (i) => {
          setCorporateTotal(corporateTotal - ctValues[i].total);
          setGrandTotal(grandTotal - ctValues[i].total);
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

    //   useEffect(() => {
    //     setGrandTotal(corporateTotal+functionalTotal+plantTotal);
    //   },[grandTotal]);

      let FunctionalTeamCal = (i, fieldname,fielvalue,param1, param2,param3) => {
        let tot = ((param2 * param3)/100)*param1;
        let newFormValues = [...ftValues];
        newFormValues[i][fieldname] = fielvalue;
        newFormValues[i]["total"] = tot;
        setFtValues(newFormValues);

        let total=0;
        for(let i=0;i<ftValues.length;i++){
          total=total+ftValues[i].total;
        }
        setFunctionalTotal(total);
        setGrandTotal(corporateTotal+total+plantTotal);
      }

      const [ftValues, setFtValues] = useState([
        { management_team: "Sales and Marketing",employee: 3, percentage : 20, salary : 2000000, total : 1200000, isEdit:false},
        { management_team: "Finance and Accounting",employee: 3, percentage : 20, salary : 2000000, total : 1200000, isEdit:false},
        { management_team: "Centralized Procurement",employee: 3, percentage : 20, salary : 2000000, total : 1200000, isEdit:false},
        { management_team: "Human Resources",employee: 3, percentage : 20, salary : 2000000, total : 1200000, isEdit:false},
        { management_team: "Information Technology",employee: 3, percentage : 20, salary : 2000000, total : 1200000, isEdit:false},
        { management_team: "Compliance",employee: 3, percentage : 20, salary : 2000000, total : 1200000, isEdit:false}
      ])

      let removeFunctionalFields = (i) => {
        setFunctionalTotal(functionalTotal - ftValues[i].total);
        setGrandTotal(grandTotal - ftValues[i].total);
        let newFormValues = [...ftValues];
        newFormValues.splice(i, 1);
        setFtValues(newFormValues)
      }

      let renameFunctionalFields = (i) => {
        let newFormValues = [...ftValues];
        newFormValues[i]["isEdit"] = true;
        setFtValues(newFormValues)
    }

    let changeFunctionalFieldsName = (i,name) => {
        let newFormValues = [...ftValues];
        newFormValues[i]["management_team"] = name;
        setFtValues(newFormValues)
    }

    let saverenameFunctionalFields = (i) => {
      let newFormValues = [...ftValues];
      newFormValues[i]["isEdit"] = false;
      setFtValues(newFormValues)
  }

    const pasteFunNoOfEmployee = () => {
      let total = 0;
      for(let i=0;i<ftValues.length;i++){
        let updateEmpValues = [...ftValues];
        updateEmpValues[i]["employee"] = pasteFunEmployee;
        //new
        let tot = ((ftValues[i]["percentage"] * ftValues[i]["salary"])/100)*pasteFunEmployee;
        updateEmpValues[i]["total"] = tot;
         //end
        setFtValues(updateEmpValues);

        total=total+ftValues[i].total;
        setFunctionalTotal(total);
      }
      setGrandTotal(corporateTotal+total+plantTotal);
    }
    const pasteFunPercentageTime = () => {
      let total = 0;
      for(let i=0;i<ftValues.length;i++){
        let updateEmpValues = [...ftValues];
        updateEmpValues[i]["percentage"] = pasteFunPercentage;
        //new
        let tot = ((pasteFunPercentage * ftValues[i]["salary"])/100)*ftValues[i]["employee"];
        updateEmpValues[i]["total"] = tot;
         //end
        setFtValues(updateEmpValues);

        total=total+ftValues[i].total;
        setFunctionalTotal(total);
      }
      setGrandTotal(corporateTotal+total+plantTotal);
    }
    const pasteFunAvgSalary = () => {
        let total = 0;
      for(let i=0;i<ftValues.length;i++){
        let updateEmpValues = [...ftValues];
        updateEmpValues[i]["salary"] = pasteFunSalary;
        //new
        let tot = ((ftValues[i]["percentage"] * pasteFunSalary)/100)*ftValues[i]["employee"];
        updateEmpValues[i]["total"] = tot;
         //end
        setFtValues(updateEmpValues);

        total=total+ftValues[i].total;
        setFunctionalTotal(total);
      }
      setGrandTotal(corporateTotal+total+plantTotal);
    }


    const [ptValues, setPtValues] = useState([
      { management_team: "PPC Team",employee: 4, percentage : 20, salary : 500000, total : 400000, isEdit:false},
      { management_team: "Plant HR Team",employee: 4, percentage : 20, salary : 500000, total : 400000, isEdit:false},
      { management_team: "Plant Procurement Team",employee: 4, percentage : 20, salary : 500000, total : 400000, isEdit:false},
      { management_team: "Plant Finance & Accounting",employee: 4, percentage : 20, salary : 500000, total : 400000, isEdit:false},
      { management_team: "QA & QC",employee: 4, percentage : 20, salary : 500000, total : 400000, isEdit:false},
      { management_team: "Logistics",employee: 4, percentage : 20, salary : 500000, total : 400000, isEdit:false},
      { management_team: "Costing & MIS",employee: 4, percentage : 20, salary : 500000, total : 400000, isEdit:false}
    ])

    let plantTeamCal = (i, fieldname,fielvalue,param1, param2,param3) => {
      let tot = ((param2 * param3)/100)*param1;
      let newFormValues = [...ptValues];
      newFormValues[i][fieldname] = fielvalue;
      newFormValues[i]["total"] = tot;
      setPtValues(newFormValues);

      let total=0;
    for(let i=0;i<ptValues.length;i++){
        total=total+ptValues[i].total;
    }
    setPlantTotal(total);

    setGrandTotal(corporateTotal+functionalTotal+total);
    }

    let removePlantFields = (i) => {
        setPlantTotal(plantTotal - ptValues[i].total);
        setGrandTotal(grandTotal - ptValues[i].total);
      let newFormValues = [...ptValues];
      newFormValues.splice(i, 1);
      setPtValues(newFormValues)
    }

    let renamePlantFields = (i) => {
        let newFormValues = [...ptValues];
        newFormValues[i]["isEdit"] = true;
        setPtValues(newFormValues)
    }

    let changePlantFieldsName = (i,name) => {
        let newFormValues = [...ptValues];
        newFormValues[i]["management_team"] = name;
        setPtValues(newFormValues)
    }

    let saverenamePlantFields = (i) => {
      let newFormValues = [...ptValues];
      newFormValues[i]["isEdit"] = false;
      setPtValues(newFormValues)
  }

    const pastePntNoOfEmployee = () => {
        let total = 0;
      for(let i=0;i<ptValues.length;i++){
        let updateEmpValues = [...ptValues];
        updateEmpValues[i]["employee"] = pastePntEmployee;
        //new
        let tot = ((ptValues[i]["percentage"] * ptValues[i]["salary"])/100)*pastePntEmployee;
        updateEmpValues[i]["total"] = tot;
         //end
        setPtValues(updateEmpValues);

        total=total+ptValues[i].total;
        setPlantTotal(total);
      }
      setGrandTotal(corporateTotal+functionalTotal+total);
    }
    const pastePntPercentageTime = () => {
        let total = 0;
      for(let i=0;i<ptValues.length;i++){
        let updateEmpValues = [...ptValues];
        updateEmpValues[i]["percentage"] = pastePntPercentage;
        //new
        let tot = ((pastePntPercentage * ptValues[i]["salary"])/100)*ptValues[i]["employee"];
        updateEmpValues[i]["total"] = tot;
         //end
        setPtValues(updateEmpValues);

        total=total+ptValues[i].total;
        setPlantTotal(total);
      }
      setGrandTotal(corporateTotal+functionalTotal+total);
    }
    const pastePntAvgSalary = () => {
        let total = 0;
      for(let i=0;i<ptValues.length;i++){
        let updateEmpValues = [...ptValues];
        updateEmpValues[i]["salary"] = pastePntSalary;
        //new
        let tot = ((ptValues[i]["percentage"] * pastePntSalary)/100)*ptValues[i]["employee"];
        updateEmpValues[i]["total"] = tot;
         //end
        setPtValues(updateEmpValues);

        total=total+ptValues[i].total;
        setPlantTotal(total);
      }
      setGrandTotal(corporateTotal+functionalTotal+total);
    }

    const additionPlantTwo = (param1,param2) => {
      setManUnit(param1);
      setPlantEmployee(param2);
      setPastePntEmployee(parseInt(param1)*parseInt(param2));
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(grandTotal);
        // console.log(corporateTotal);
        // console.log(functionalTotal);
        // console.log(plantTotal);
        //console.log('adadad---',ctValues);
        // console.log(JSON.stringify(ftValues));
        // console.log(JSON.stringify(ptValues));

        var data_json = {
          company_name: companyName,
          company_email: email,
          corporate_total: `${corporateTotal}`,
          functions_total: `${functionalTotal}`,
          plant_total: `${plantTotal}`,
          grand_total: `${grandTotal}`,
          no_of_units: `${manUnit}`,
          currency: defaultCurrency,
          no_of_employees: `${plantEmployee}`,
          corporate_arry: ctValues,
          functions_arry: ftValues,
          plant_arry: ptValues
        }
      
          const res = await fetch('http://65.1.80.232:3020/api/auth/costCalculate.json', {
            method: 'POST',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(data_json),
          })
          var platform_data = await res.json();
          console.log('status--',platform_data.status);
          console.log('platform_data--',platform_data);
          if(res.status == 200){
            setPdfDownloadUrl(platform_data.result.path)
            toast.success('The Report has been sent successfully.', {
              position: "bottom-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            toast.error(platform_data.error, {
              position: "bottom-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        
    }

    const isValidEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email);
    }
  
    const emailValidate = event => {
      setEmail(event.target.value);
      if (!isValidEmail(event.target.value)) {
        setError(true);
      } else {
        setError(false);
      }
    };

    const companyDataSet = event=>{
      setCompanyName(event.target.value);
    }

    const handleFocus = (event) => event.target.select();

    const currencyArr = ["INR", "USD", "EUR", "JPY", "GBP", "AUD", "CAD", "CHF", "CNH"];


  return (
    <div className=''>
        <ToastContainer/>
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
                {defaultCurrency === "CAD" &&
                <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.25 7.5H21.25C20.2554 7.5 19.3016 7.89509 18.5983 8.59835C17.8951 9.30161 17.5 10.2554 17.5 11.25C17.5 12.2446 17.8951 13.1984 18.5983 13.9017C19.3016 14.6049 20.2554 15 21.25 15H22.5C23.4946 15 24.4484 15.3951 25.1517 16.0983C25.8549 16.8016 26.25 17.7554 26.25 18.75C26.25 19.7446 25.8549 20.6984 25.1517 21.4017C24.4484 22.1049 23.4946 22.5 22.5 22.5H17.5M12.5 22.5H11.25C9.26088 22.5 7.35322 21.7098 5.9467 20.3033C4.54018 18.8968 3.75 16.9891 3.75 15C3.75 13.0109 4.54018 11.1032 5.9467 9.6967C7.35322 8.29018 9.26088 7.5 11.25 7.5H12.5M21.25 25V22.5M22.5 7.5V5" stroke="#1200D5" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                }
                {defaultCurrency === "AUD" &&
                <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.75 22.5L7.84875 8.155C7.90482 7.95926 8.0231 7.78709 8.1857 7.66453C8.3483 7.54197 8.54638 7.47568 8.75 7.47568C8.95362 7.47568 9.1517 7.54197 9.3143 7.66453C9.4769 7.78709 9.59518 7.95926 9.65125 8.155L13.75 22.5M26.25 7.5H21.25C20.2554 7.5 19.3016 7.89509 18.5983 8.59835C17.8951 9.30161 17.5 10.2554 17.5 11.25C17.5 12.2446 17.8951 13.1984 18.5983 13.9017C19.3016 14.6049 20.2554 15 21.25 15H22.5C23.4946 15 24.4484 15.3951 25.1517 16.0983C25.8549 16.8016 26.25 17.7554 26.25 18.75C26.25 19.7446 25.8549 20.6984 25.1517 21.4017C24.4484 22.1049 23.4946 22.5 22.5 22.5H17.5M21.25 25V22.5M22.5 7.5V5M5.625 17.5H11.875" stroke="#1200D5" strokeWidth="2.08333" strokeLinecap="round" stroke-linejoin="round" />
                </svg>
                }
                {defaultCurrency === "INR" &&
                <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.375 9.375C24.375 9.62364 24.2762 9.8621 24.1004 10.0379C23.9246 10.2137 23.6861 10.3125 23.4375 10.3125H19.6758C19.6758 10.4648 19.6875 10.6289 19.6875 10.7812C19.6875 12.6461 18.9467 14.4345 17.6281 15.7531C16.3095 17.0717 14.5211 17.8125 12.6562 17.8125H10.8633L19.3828 25.5586C19.475 25.6408 19.5497 25.7407 19.6027 25.8523C19.6557 25.9639 19.6858 26.085 19.6912 26.2084C19.6967 26.3318 19.6774 26.455 19.6345 26.5708C19.5916 26.6867 19.5259 26.7927 19.4414 26.8828C19.3536 26.9788 19.2468 27.0554 19.1278 27.1079C19.0087 27.1603 18.8801 27.1875 18.75 27.1875C18.5161 27.1852 18.2912 27.0977 18.1172 26.9414L7.80469 17.5664C7.66537 17.4388 7.56784 17.2721 7.52489 17.0882C7.48193 16.9042 7.49555 16.7116 7.56395 16.5355C7.63236 16.3594 7.75236 16.2081 7.90824 16.1014C8.06412 15.9947 8.2486 15.9376 8.4375 15.9375H12.6562C14.0238 15.9375 15.3353 15.3943 16.3023 14.4273C17.2693 13.4603 17.8125 12.1488 17.8125 10.7812C17.8125 10.6289 17.8008 10.4648 17.7891 10.3125H8.4375C8.18886 10.3125 7.9504 10.2137 7.77459 10.0379C7.59877 9.8621 7.5 9.62364 7.5 9.375C7.5 9.12636 7.59877 8.8879 7.77459 8.71209C7.9504 8.53627 8.18886 8.4375 8.4375 8.4375H17.25C16.8169 7.59167 16.1589 6.88164 15.3485 6.38546C14.5381 5.88927 13.6065 5.62614 12.6562 5.625H8.4375C8.18886 5.625 7.9504 5.52623 7.77459 5.35041C7.59877 5.1746 7.5 4.93614 7.5 4.6875C7.5 4.43886 7.59877 4.2004 7.77459 4.02459C7.9504 3.84877 8.18886 3.75 8.4375 3.75H23.4375C23.6861 3.75 23.9246 3.84877 24.1004 4.02459C24.2762 4.2004 24.375 4.43886 24.375 4.6875C24.375 4.93614 24.2762 5.1746 24.1004 5.35041C23.9246 5.52623 23.6861 5.625 23.4375 5.625H17.4258C18.2652 6.39801 18.9046 7.3631 19.2891 8.4375H23.4375C23.6861 8.4375 23.9246 8.53627 24.1004 8.71209C24.2762 8.8879 24.375 9.12636 24.375 9.375Z" fill="#1200D5" />
                </svg>
                }
                {defaultCurrency === "GBP" &&
                <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.9688 24.375C22.9688 24.7479 22.8206 25.1056 22.5569 25.3694C22.2931 25.6331 21.9355 25.7812 21.5625 25.7812H6.5625C6.18954 25.7812 5.83185 25.6331 5.56813 25.3694C5.30441 25.1056 5.15625 24.7479 5.15625 24.375C5.15625 24.002 5.30441 23.6443 5.56813 23.3806C5.83185 23.1169 6.18954 22.9687 6.5625 22.9687C7.30747 22.9657 8.02105 22.6683 8.54783 22.1416C9.07461 21.6148 9.37192 20.9012 9.375 20.1562V16.875H6.5625C6.18954 16.875 5.83185 16.7268 5.56813 16.4631C5.30441 16.1994 5.15625 15.8417 5.15625 15.4687C5.15625 15.0958 5.30441 14.7381 5.56813 14.4744C5.83185 14.2106 6.18954 14.0625 6.5625 14.0625H9.375V9.84374C9.37491 8.54573 9.75974 7.27685 10.4808 6.19756C11.2019 5.11828 12.2269 4.27707 13.4261 3.78033C14.6253 3.28359 15.9448 3.15363 17.2179 3.40689C18.491 3.66014 19.6603 4.28524 20.5781 5.20311C20.8423 5.46729 20.9907 5.8256 20.9907 6.19921C20.9907 6.57282 20.8423 6.93112 20.5781 7.1953C20.3139 7.45948 19.9556 7.6079 19.582 7.6079C19.2084 7.6079 18.8501 7.45948 18.5859 7.1953C18.2403 6.84426 17.8279 6.56594 17.3731 6.37676C16.9182 6.18757 16.4301 6.09134 15.9375 6.09374C14.9439 6.09683 13.9919 6.49291 13.2893 7.1955C12.5867 7.89809 12.1906 8.85013 12.1875 9.84374V14.0625H15.9375C16.3105 14.0625 16.6681 14.2106 16.9319 14.4744C17.1956 14.7381 17.3438 15.0958 17.3438 15.4687C17.3438 15.8417 17.1956 16.1994 16.9319 16.4631C16.6681 16.7268 16.3105 16.875 15.9375 16.875H12.1875V20.1562C12.1856 21.1444 11.9228 22.1146 11.4258 22.9687H21.5625C21.9355 22.9687 22.2931 23.1169 22.5569 23.3806C22.8206 23.6443 22.9688 24.002 22.9688 24.375Z" fill="#1200D5" />
                </svg>
                }
                {defaultCurrency === "USD" &&
                <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.75 18.75H11.25C11.25 20.1 12.9625 21.25 15 21.25C17.0375 21.25 18.75 20.1 18.75 18.75C18.75 17.375 17.45 16.875 14.7 16.2125C12.05 15.55 8.75 14.725 8.75 11.25C8.75 9.0125 10.5875 7.1125 13.125 6.475V3.75H16.875V6.475C19.4125 7.1125 21.25 9.0125 21.25 11.25H18.75C18.75 9.9 17.0375 8.75 15 8.75C12.9625 8.75 11.25 9.9 11.25 11.25C11.25 12.625 12.55 13.125 15.3 13.7875C17.95 14.45 21.25 15.275 21.25 18.75C21.25 20.9875 19.4125 22.8875 16.875 23.525V26.25H13.125V23.525C10.5875 22.8875 8.75 20.9875 8.75 18.75Z" fill="#1200D5" />
                </svg>
                }
                {defaultCurrency === "JPY" &&
                <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.4 13.75H22.5V16.25H16.25V18.75H22.5V21.25H16.25V26.25H13.75V21.25H7.5V18.75H13.75V16.25H7.5V13.75H12.6L6.25 3.75H9.2125L15 12.8625L20.7875 3.75H23.75L17.4 13.75Z" fill="#1200D5" />
                </svg>
                }
                {defaultCurrency === "CNH" &&
                <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 26.25C14.6458 26.25 14.3492 26.13 14.11 25.89C13.87 25.6508 13.75 25.3542 13.75 25V17.5H8.74999C8.39583 17.5 8.09874 17.38 7.85874 17.14C7.61958 16.9008 7.49999 16.6042 7.49999 16.25C7.49999 15.8958 7.61958 15.5987 7.85874 15.3587C8.09874 15.1196 8.39583 15 8.74999 15H13.4062L7.46874 5.6875C7.19791 5.27083 7.18249 4.84375 7.42249 4.40625C7.66166 3.96875 8.03124 3.75 8.53124 3.75C8.76041 3.75 8.96874 3.80208 9.15624 3.90625C9.34374 4.01042 9.48958 4.15625 9.59374 4.34375L15 12.875L20.4062 4.34375C20.5104 4.15625 20.6562 4.01042 20.8437 3.90625C21.0312 3.80208 21.2396 3.75 21.4687 3.75C21.9687 3.75 22.3383 3.96875 22.5775 4.40625C22.8175 4.84375 22.8021 5.27083 22.5312 5.6875L16.5937 15H21.25C21.6042 15 21.9008 15.1196 22.14 15.3587C22.38 15.5987 22.5 15.8958 22.5 16.25C22.5 16.6042 22.38 16.9008 22.14 17.14C21.9008 17.38 21.6042 17.5 21.25 17.5H16.25V25C16.25 25.3542 16.1304 25.6508 15.8912 25.89C15.6512 26.13 15.3542 26.25 15 26.25Z" fill="#1200D5" />
                </svg>}
                {defaultCurrency ==="CHF" &&
                <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 26.25V3.75H22.5M7.5 20H18.75M12.5 11.875H21.25" stroke="#1200D5" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                }
                {defaultCurrency === "EUR" &&
                <svg className='' width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.875 3.75C12.4331 3.75 8.82563 7.39406 7.7925 12.1875H5.625V14.0625H7.55906C7.53656 14.37 7.5 14.685 7.5 15C7.5 15.315 7.5375 15.63 7.55906 15.9375H5.625V17.8125H7.79344C8.82562 22.6059 12.4331 26.25 16.875 26.25C19.4128 26.25 21.72 25.0266 23.3794 23.115L21.9431 21.885C20.5809 23.4562 18.8156 24.375 16.875 24.375C13.59 24.375 10.6969 21.6581 9.72656 17.8125H17.8125V15.9375H9.40406C9.37875 15.6263 9.375 15.3188 9.375 15C9.375 14.6812 9.37875 14.3737 9.40406 14.0625H17.8125V12.1875H9.72656C10.6969 8.34187 13.59 5.625 16.875 5.625C18.8156 5.625 20.5809 6.54375 21.9431 8.115L23.3794 6.885C21.72 4.9725 19.4119 3.75 16.875 3.75Z" fill="#1200D5" />
                </svg>
                }
              </div>
              <div>
                <span className='text-base text-gray-700 block font-poppins'>Grand Total</span>
                <p className='text-2xl text-gray-500'>{grandTotal.toLocaleString("en-US")}</p>
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
                <p className='text-2xl text-gray-500'>{corporateTotal.toLocaleString("en-US")}</p>
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
                <p className='text-2xl text-gray-500'>{functionalTotal.toLocaleString("en-US")}</p>
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
                <p className='text-2xl text-gray-500'>{plantTotal.toLocaleString("en-US")}</p>
              </div>
            </li>
          </ul>
          <div className='max-w-[1100px] w-full m-auto rounded-10 bg-headerbg py-3 px-4 my-6'>
            <p className='text-center text-base text-indigo-700 font-medium font-poppins'>As per our estimate, For the company with <strong>{manUnit} manufacturing units</strong>, estimated cost of reporting is <strong>{defaultCurrency} {grandTotal.toLocaleString("en-US")}</strong> per year</p>
          </div>
        </div>
      </div>
      <div className='pt-[330px]'>
        <form onSubmit={handleSubmit}>
        <div className=''>
          <div className='max-w-lg w-full m-auto py-12 flex justify-center items-center font-poppins'>
            <p className='text-base text-gray-600 font-normal font-poppins mr-14'>Please select your currency</p>
            <div className="text-xs font-semibold text-gray-500 w-40">
              <select onChange={(evt) => setDefaultCurrency(evt.target.value) } id="asc" name="asc" autoComplete="asc-name" className="block w-full bg-gray-50 border border-gray-300 text-base rounded-md px-1.5 py-1 outline-none">
                {currencyArr.map((element, index) => (
                <option key={index} value={element}>{element}</option>
                ))}
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
                  {!element.isEdit ? (<span className=''>{element.management_team}</span>):(<input type="text" className='outline-none border border-gray-300 py-1 px-2 rounded-4' autoFocus onFocus={handleFocus} onChange={(e) => changeCorporateFieldsName(index,e.target.value)} value={element.management_team} placeholder="Enter name" />)}
                  {index !== 0 &&
                  <span className='flex justify-start items-center space-x-3'>
                    {element.isEdit &&
                    <svg onClick={() => saverenameCorporateFields(index)} className="cursor-pointer" width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.875 7.29163L9.37498 19.7916L3.64581 14.0625L5.11456 12.5937L9.37498 16.8437L20.4062 5.82288L21.875 7.29163Z" fill="#0CCF00" />
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
            <button className="button add ml-4 mt-3 rounded-4 bg-btnbg text-white text-sm py-1.5 px-3 font-semibold" type="button" onClick={() => addCorporateFields()}>Add More</button>
            {/* Yellow common link start */}
            <div className='flex justify-between items-center my-4 px-4 py-1 bg-yellow-100'>
              <div className='w-4/5 text-gray-700 text-sm'>Corporate Total</div>
              <div className="w-1/5 text-center text-gray-700 text-sm">{corporateTotal.toLocaleString("en-US")}</div>
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
                {!element.isEdit ? (<span className=''>{element.management_team}</span>):(<input type="text" className='outline-none border border-gray-300 py-1 px-2 rounded-4' autoFocus onFocus={handleFocus} onChange={(e) => changeFunctionalFieldsName(index,e.target.value)} value={element.management_team} placeholder="Enter name" />)}
                  {index !== 0 &&
                  <span className='flex justify-start items-center space-x-3'>
                    {element.isEdit &&
                    <svg onClick={() => saverenameFunctionalFields(index)} className="cursor-pointer" width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.875 7.29163L9.37498 19.7916L3.64581 14.0625L5.11456 12.5937L9.37498 16.8437L20.4062 5.82288L21.875 7.29163Z" fill="#0CCF00" />
                    </svg>
                    }
                    <svg onClick={() => renameFunctionalFields(index)} className='cursor-pointer' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div className="w-1/5 text-center text-gray-700 text-sm">{functionalTotal.toLocaleString("en-US")}</div>
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
                {!element.isEdit ? (<span className=''>{element.management_team}</span>):(<input type="text" className='outline-none border border-gray-300 py-1 px-2 rounded-4' autoFocus onFocus={handleFocus} onChange={(e) => changePlantFieldsName(index,e.target.value)} value={element.management_team} placeholder="Enter name" />)}
                  {index !== 0 &&
                  <span className='flex justify-start items-center space-x-3'>
                    {element.isEdit &&
                    <svg onClick={() => saverenamePlantFields(index)} className="cursor-pointer" width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.875 7.29163L9.37498 19.7916L3.64581 14.0625L5.11456 12.5937L9.37498 16.8437L20.4062 5.82288L21.875 7.29163Z" fill="#0CCF00" />
                    </svg>
                    }
                    <svg onClick={() => renamePlantFields(index)} className='cursor-pointer' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div className="w-1/5 text-center text-gray-700 text-sm">{plantTotal.toLocaleString("en-US")}</div>
            </div>
            {/* Yellow common link end */}
          </div>
        </div>
        {/*  */}
        <div className='max-w-[96%] text-gray-700 w-full m-auto text-base font-semibold rounded-10 bg-headerbg py-3 px-4 my-6 border-2 border-indigo-400 flex justify-between items-center'>
          <div className='w-4/5'>Annual Cost of Report Preparation - Grand Total</div>
          <div className="w-1/5 text-center">{defaultCurrency} {grandTotal.toLocaleString("en-US")}</div>
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
                  <input onChange={companyDataSet} autoComplete="off" className="w-full bg-gray-50 border rounded-md shadow-sm p-2 outline-none focus:shadow-outline pr-16 text-base text-gray-500 pl-5" type="text" name="" id="" placeholder='XYZ Manufacturers'></input>
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
                <button disabled={error ? "disabled":""} className={"bg-btnbg text-white text-lg font-semibold px-7 py-2 rounded-md shadow-button " +(error ? "cursor-not-allowed btn-disabled":"")}>Submit</button>
              </div>
            {/* </form> */}
            {pdfDownloadUrl &&
            <div>
              <a href={pdfDownloadUrl} target="_blank">Download</a>
              {/* <Link className="navbar-item" activeClassName="is-active" to={pdfDownloadUrl} > Download </Link> */}
            </div>
           }
          </div>
        </div>
        </form>
      </div>
    </div>

  );
}

export default App;
