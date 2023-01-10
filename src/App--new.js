import './App.css';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

function App() {

    const {
        register,
        handleSubmit,
        //formState: {},
      } = useForm();
    const [c00, setC00] = useState(1);
    const [c01, setC01] = useState(40);
    const [c02, setC02] = useState(3000000);

    const [c10, setC10] = useState(1);
    const [c11, setC11] = useState(40);
    const [c12, setC12] = useState(3000000);
    const [c13, setC13] = useState(1200000);

    const [c20, setC20] = useState(1);
    const [c21, setC21] = useState(40);
    const [c22, setC22] = useState(3000000);
    const [c23, setC23] = useState(1200000);

    const [corporateTotal, setCorporateTotal] = useState(2400000);

    const corporateTeamCal = (param1,param2,param3) => {
        setC10(param1);
        setC11(param2);
        setC12(param3);
        //console.log(param1,param2,param3)
        let tot = ((param2 * param3)/100)*param1;
        setC13(tot);
        setCorporateTotal(tot+c23);
      }

      const corporateTeamCal2 = (param1,param2,param3) => {
        setC20(param1);
        setC21(param2);
        setC22(param3);
        //console.log(param1,param2,param3)
        let tot = ((param2 * param3)/100)*param1;
        setC23(tot);
        setCorporateTotal(tot+c13);
      }

      const pasteNoOfEmployee = () => {
        setC10(c00);
        setC20(c00);
      }
      const pastePercentage = () => {
        setC11(c01);
        setC21(c01);
      }
      const pasteSalary = () => {
        setC12(c02);
        setC22(c02);
      }
    
    
      useEffect(() => {
        corporateTeamCal(c10,c11,c12)
        corporateTeamCal2(c20,c21,c22)
      },[c10,c20,c13,c23,c11,c21,c12,c22]);

  return (
    <div className=''>
      <div className='w-full h-auto fixed bg-white shadow-xl z-10'>
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
                <p className='text-2xl text-gray-500'>12,800,000</p>
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
                <p className='text-2xl text-gray-500'>12,800,000</p>
              </div>
            </li>
          </ul>
          <div className='max-w-[1000px] w-full m-auto rounded-10 bg-headerbg py-3 px-4 my-6'>
            <p className='text-base text-indigo-700 font-medium font-poppins'>As per our estimate, For the company with <strong>2 manufacturing units</strong>, estimated cost of reporting is <strong>INR 12,800,000</strong> per year</p>
          </div>
        </div>
      </div>
      <div className='pt-[330px]'>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
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
                  <input {...register('c00')} value={c00} onChange={(evt) => setC00(evt.target.value) } class="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span className='text-sm text-gray-700' onClick={pasteNoOfEmployee}>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                  <input {...register('c01')} value={c01} onChange={(evt) => setC01(evt.target.value) } class="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span className='text-sm text-gray-700' onClick={pastePercentage}>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                  <input {...register('c02')} value={c02} onChange={(evt) => setC02(evt.target.value) } class="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span className='text-sm text-gray-700' onClick={pasteSalary}>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                </span>
              </li>
              {/* loop start */}
              <li className="text-gray-500 text-sm px-4 flex justify-between items-center">
                <span className="w-1/5 flex justify-between items-center">
                  <span className=''>CEO Office</span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_179_1329)">
                      <path d="M11.6833 0.653605C11.5963 0.564953 11.4925 0.494604 11.3779 0.446704C11.2633 0.398804 11.1403 0.374321 11.0162 0.374699H11.0156C10.8913 0.374408 10.7682 0.39902 10.6536 0.447084C10.5389 0.495147 10.4351 0.565688 10.3482 0.654543L2.56447 8.56153C2.39155 8.73813 2.29514 8.97573 2.29611 9.22289C2.29708 9.47005 2.39535 9.70689 2.56966 9.88212L3.00032 10.3128L0.46875 12.8738V14.0039H3.59766L5.14453 12.457L5.51013 12.8226C5.59905 12.9116 5.70495 12.9817 5.82154 13.0289C5.93812 13.076 6.063 13.0992 6.18874 13.0971C6.31448 13.095 6.43851 13.0676 6.55345 13.0166C6.66839 12.9656 6.77189 12.8919 6.85778 12.8001L14.4232 4.71005C14.5892 4.53347 14.6802 4.29934 14.6769 4.057C14.6736 3.81467 14.5764 3.58308 14.4057 3.41106L11.6833 0.653605ZM3.20941 13.0664H1.59668L2.96051 11.6865L3.77496 12.501L3.20941 13.0664ZM6.17309 12.1598L5.14453 11.1313L4.43769 11.8381L3.61937 11.0198L4.32208 10.3088L3.2325 9.21925L4.64865 7.78063L7.55273 10.6846L6.17309 12.1598ZM8.19334 9.99943L5.3064 7.11251L11.0161 1.31223L13.7385 4.06968L8.19334 9.99943Z" fill="#8980EA" />
                    </g>
                    <defs>
                      <clipPath id="clip0_179_1329">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="w-1/5 text-center px-10">
                  <input {...register('c10')} value={c10} onChange={(evt) => corporateTeamCal(evt.target.value,c11,c12) } class="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10">
                  <input {...register('c11')} value={c11} onChange={(evt) =>  corporateTeamCal(c10,evt.target.value,c12) } class="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10">
                  <input {...register('c12')} value={c12} onChange={(evt) =>  {corporateTeamCal(c10,c11,evt.target.value)} } class="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10 flex justify-center items-center">{c13}</span>
              </li>
              {/* loop end */}
              <li className="text-gray-500 text-sm px-4 flex justify-between items-center bg-orange-100">
                <span className="w-1/5 flex justify-between items-center">
                  <span className=''>COO Office</span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_179_1315)">
                      <path d="M0.0022583 14.0619L2.75663 15L3.73383 13.9614L1.88583 11.9974L0.0022583 14.0619ZM3.43723 7.03038C3.29211 7.1665 3.18691 7.34411 3.13417 7.54203C3.08143 7.73995 3.08338 7.94982 3.13979 8.14659L3.49952 9.40138L2.0956 10.8938L4.74825 13.713L6.15025 12.223L7.32841 12.6062C7.70688 12.7292 8.11817 12.6059 8.38004 12.2903L9.36 11.0704L4.58176 5.9921L3.43723 7.03038ZM14.5548 2.32237L12.8126 0.47081C12.2478 -0.129482 11.3412 -0.159658 10.7419 0.401963L5.25491 5.38126L9.93475 10.3553L14.6195 4.52345C15.1483 3.88653 15.1199 2.92296 14.5548 2.32237Z" fill="#8980EA" />
                    </g>
                    <defs>
                      <clipPath id="clip0_179_1315">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="w-1/5 text-center px-10">
                  <input {...register('c20')} value={c20} onChange={(evt) => corporateTeamCal2(evt.target.value,c21,c22) } class="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10">
                  <input {...register('c21')} value={c21} onChange={(evt) =>  corporateTeamCal2(c20,evt.target.value,c22) } class="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10">
                  <input {...register('c22')} value={c22} onChange={(evt) =>  {corporateTeamCal2(c20,c21,evt.target.value)} } class="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10 flex justify-center items-center">{c23}</span>
              </li>
            </ul>
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
                  <input class="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span className='text-sm text-gray-700'>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                  <input class="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span className='text-sm text-gray-700'>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                  <input class="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span className='text-sm text-gray-700'>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                </span>
              </li>
              {/* loop start */}
              <li className="text-gray-500 text-sm px-4 flex justify-between items-center">
                <span className="w-1/5 flex justify-between items-center">
                  <span className=''>xxxxxxx</span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_179_1329)">
                      <path d="M11.6833 0.653605C11.5963 0.564953 11.4925 0.494604 11.3779 0.446704C11.2633 0.398804 11.1403 0.374321 11.0162 0.374699H11.0156C10.8913 0.374408 10.7682 0.39902 10.6536 0.447084C10.5389 0.495147 10.4351 0.565688 10.3482 0.654543L2.56447 8.56153C2.39155 8.73813 2.29514 8.97573 2.29611 9.22289C2.29708 9.47005 2.39535 9.70689 2.56966 9.88212L3.00032 10.3128L0.46875 12.8738V14.0039H3.59766L5.14453 12.457L5.51013 12.8226C5.59905 12.9116 5.70495 12.9817 5.82154 13.0289C5.93812 13.076 6.063 13.0992 6.18874 13.0971C6.31448 13.095 6.43851 13.0676 6.55345 13.0166C6.66839 12.9656 6.77189 12.8919 6.85778 12.8001L14.4232 4.71005C14.5892 4.53347 14.6802 4.29934 14.6769 4.057C14.6736 3.81467 14.5764 3.58308 14.4057 3.41106L11.6833 0.653605ZM3.20941 13.0664H1.59668L2.96051 11.6865L3.77496 12.501L3.20941 13.0664ZM6.17309 12.1598L5.14453 11.1313L4.43769 11.8381L3.61937 11.0198L4.32208 10.3088L3.2325 9.21925L4.64865 7.78063L7.55273 10.6846L6.17309 12.1598ZM8.19334 9.99943L5.3064 7.11251L11.0161 1.31223L13.7385 4.06968L8.19334 9.99943Z" fill="#8980EA" />
                    </g>
                    <defs>
                      <clipPath id="clip0_179_1329">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="w-1/5 text-center px-10">
                  <input class="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10">
                  <input class="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10">
                  <input class="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10 flex justify-center items-center">1,200,000</span>
              </li>
              {/* loop end */}
            </ul>
            {/* Yellow common link start */}
            <div className='flex justify-between items-center my-4 px-4 py-1 bg-yellow-100'>
              <div className='w-4/5 text-gray-700 text-sm'>Functions Total</div>
              <div className="w-1/5 text-center text-gray-700 text-sm">1,200,000</div>
            </div>
            {/* Yellow common link end */}
            <div>
              <ul className="mb-0 mt-5 space-y-4">
                <li className="text-gray-500 text-sm px-4 flex justify-start items-center">
                  <span className="w-2/5 flex justify-start items-center">
                    <span className=''>No. of Manufacturing units</span>
                  </span>
                  <span className="w-1/5 text-center px-10">
                    <input class="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  </span>
                </li>
                <li className="text-gray-500 text-sm px-4 flex justify-start items-center">
                  <span className="w-2/5 flex justify-start items-center">
                    <span className=''>No of employees per team in plant responsible for report generation</span>
                  </span>
                  <span className="w-1/5 text-center px-10">
                    <input class="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
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
                  <input class="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span className='text-sm text-gray-700'>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                  <input class="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span className='text-sm text-gray-700'>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                  <input class="appearance-none text-sm text-center block w-[85px] text-gray-700 border border-gray-400 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                  <span className='text-sm text-gray-700'>Paste to All</span>
                </span>
                <span className="w-1/5 text-center px-10 flex justify-between items-center">
                </span>
              </li>
              {/* loop start */}
              <li className="text-gray-500 text-sm px-4 flex justify-between items-center">
                <span className="w-1/5 flex justify-between items-center">
                  <span className=''>xxxxxxx</span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_179_1329)">
                      <path d="M11.6833 0.653605C11.5963 0.564953 11.4925 0.494604 11.3779 0.446704C11.2633 0.398804 11.1403 0.374321 11.0162 0.374699H11.0156C10.8913 0.374408 10.7682 0.39902 10.6536 0.447084C10.5389 0.495147 10.4351 0.565688 10.3482 0.654543L2.56447 8.56153C2.39155 8.73813 2.29514 8.97573 2.29611 9.22289C2.29708 9.47005 2.39535 9.70689 2.56966 9.88212L3.00032 10.3128L0.46875 12.8738V14.0039H3.59766L5.14453 12.457L5.51013 12.8226C5.59905 12.9116 5.70495 12.9817 5.82154 13.0289C5.93812 13.076 6.063 13.0992 6.18874 13.0971C6.31448 13.095 6.43851 13.0676 6.55345 13.0166C6.66839 12.9656 6.77189 12.8919 6.85778 12.8001L14.4232 4.71005C14.5892 4.53347 14.6802 4.29934 14.6769 4.057C14.6736 3.81467 14.5764 3.58308 14.4057 3.41106L11.6833 0.653605ZM3.20941 13.0664H1.59668L2.96051 11.6865L3.77496 12.501L3.20941 13.0664ZM6.17309 12.1598L5.14453 11.1313L4.43769 11.8381L3.61937 11.0198L4.32208 10.3088L3.2325 9.21925L4.64865 7.78063L7.55273 10.6846L6.17309 12.1598ZM8.19334 9.99943L5.3064 7.11251L11.0161 1.31223L13.7385 4.06968L8.19334 9.99943Z" fill="#8980EA" />
                    </g>
                    <defs>
                      <clipPath id="clip0_179_1329">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="w-1/5 text-center px-10">
                  <input class="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10">
                  <input class="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10">
                  <input class="appearance-none text-sm text-center block w-full text-gray-700 border border-gray-300 bg-gray-50 rounded px-2 py-1 leading-tight focus:outline-none" id="" type="text" />
                </span>
                <span className="w-1/5 text-center px-10 flex justify-center items-center">1,200,000</span>
              </li>
              {/* loop end */}
            </ul>
            {/* Yellow common link start */}
            <div className='flex justify-between items-center my-4 px-4 py-1 mb-0 bg-yellow-100'>
              <div className='w-4/5 text-gray-700 text-sm'>Plant Total</div>
              <div className="w-1/5 text-center text-gray-700 text-sm">1,200,000</div>
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
            <form className="mb-4" action="/" method="post">
              <div className="mb-7 relative md:w-full">
                <label htmlFor="name" className="block text-base font-normal text-gray-500 mb-2">Company Name</label>
                <div className='relative'>
                  <input autoComplete="off" className="w-full bg-gray-50 border rounded-md shadow-sm p-2 outline-none focus:shadow-outline pr-16 text-base text-gray-500 pl-5" type="text" name="" id="" placeholder='XYZ Manufacturers'></input>
                  <svg className="absolute right-2 top-2" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.875 7.29163L9.37498 19.7916L3.64581 14.0625L5.11456 12.5937L9.37498 16.8437L20.4062 5.82288L21.875 7.29163Z" fill="#0CCF00" />
                  </svg>
                </div>
                <span className="text-red-400 text-xs py-1 absolute left-0 top-full">Error</span>
              </div>
              <div className="mb-7 relative md:w-full">
                <label htmlFor="email" className="block text-base font-normal text-gray-500 mb-2">Work Email Address</label>
                <div className='relative'>
                  <input autoComplete="off" className="w-full bg-gray-50 border rounded p-2 outline-none focus:shadow-outline pr-16 text-base text-gray-500 pl-5" type="email" name="" id="" placeholder='xyz@workemailid'></input>
                  <svg className="absolute right-2 top-2" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.875 7.29163L9.37498 19.7916L3.64581 14.0625L5.11456 12.5937L9.37498 16.8437L20.4062 5.82288L21.875 7.29163Z" fill="#0CCF00" />
                  </svg>
                </div>
                <span className="text-red-400 text-xs py-1 absolute left-0 top-full">Error</span>
              </div>
              <div className='flex justify-end items-center'>
                <button className="bg-btnbg text-white text-lg font-semibold px-7 py-2 rounded-md shadow-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
        </form>
      </div>
    </div>

  );
}

export default App;
