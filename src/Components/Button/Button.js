import React from 'react'


function Button({icon, title, fun}) {
  return (
    <button onClick={fun} type="button" className="text-white w-full flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        {icon}
        <p> {title} </p>
    </button>
  )
}

export default Button