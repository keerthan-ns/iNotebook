import PropTypes from 'prop-types'
import { useEffect } from 'react'

export default function Alert(props) {
    // useEffect(() => {
    //   setTimeout(()=>{
    //     document.getElementById("alertDiv").style.display = "none";
    //   },2000)
    // }, [])

    return (
        <>
            {props.alert &&
                <div id="alertDiv" tabIndex="-1" className={`border ${(props.alert.type==="Success")?"text-green-400 border-gray-600 ":"text-red-600 border-red-600 "} mt-16 fixed z-50 flex flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 text-sm bg-gray-800 rounded-lg  shadow-sm lg:max-w-7xl left-1/2 top-6`}>
                    <div className="flex flex-row items-start md:items-center md:flex-row md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center border-gray-200 md:pr-4 md:mr-4 md:border-r md:mb-0 dark:border-gray-600">
                            <span className="self-center text-lg font-semibold whitespace-nowrap">{props.alert.type}</span>
                        </a>
                        <p className="pl-2 md:pl-0 flex self-center items-center font-semibold">{props.alert.message}</p>
                    </div>
                    <button data-dismiss-target="#alertDiv" type="button" className="relative left-0 flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close banner</span>
                    </button>
                </div>
            }

            {/* <div id="alertDiiv" className="mx-4 flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium">{props.type}</span> {props.message}
                </div>
            </div> */}
        </>
    )
}

Alert.propTypes = {
    alert:PropTypes.shape({
        type: PropTypes.string,
        message: PropTypes.string,
    }),
}
