import React, { useRef } from 'react';
import { FaSquare, FaArrowRight } from 'react-icons/fa';
import { MdSaveAlt } from "react-icons/md";
import Button from './Button/Button';
import { VscSymbolInterface } from "react-icons/vsc";
import { LuUpload } from "react-icons/lu";
import { LuFileCode2 } from "react-icons/lu";

const Toolbar = ({elements, setElements, setShowSelection, connectors, setConnectors, setShowGenerate}) => {
  const fileInputRef = useRef();

  const randomX = Math.floor(Math.random() * 500);
  const randomY = Math.floor(Math.random() * 400);
  
  const AddClass = () => {
    let newClass = {
      id: elements?.length + 1 ,
      type: 'class', // This can be 'class', 'interface', etc.
      x: randomX,
      y: randomY,
      width: 150,
      height: 100,
      name: `Class${elements?.length + 1}`, // Class name
      attributes: [
        {
          name: "Id",
          visibility: "private",
          type: "int",
        },
        {
          name: "Name",
          visibility: "protected",
          type: "string",
        },
        {
          name: "Visible",
          visibility: "public",
          type: "boolean",
        },
      ], // Attributes
      methods: ['login', 'logout'], // Methods
    }

    setElements([...elements, newClass])
  }
  
  const AddInterface = () => {
    let newInterface = {
      id: elements?.length + 1,
      type: 'interface', // This can be 'class', 'interface', etc.
      x: randomX,
      y: randomY,
      width: 150,
      height: 100,
      name: `Iinterface${elements?.length + 1}`, // Class name
      methods: ['login', 'logout'], // Methods
    }

    setElements([...elements, newInterface])

    console.log(elements);
    console.log("Added !");
  }

  const ShowSelection = (title) => {
    setShowSelection(title)
  }

  const saveWork = () => {
    const data = {
      elements,
      connectors,
    };
  
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data, null, 2))}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'diagram.json';
    link.click();
  };
  
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setElements(data.elements || []);
        setConnectors(data.connectors || []);
      };
      reader.readAsText(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  

  return (
    <div className="toolbar h-screen w-80 bg-blue-900 text-white space-y-4 px-4 py-10">
      
      <div className='flex flex-col justify-between  h-full'>
        <div>
          <h1 className='text-center text-4xl font-bold mb-6'> UML </h1>
          <h2 className='mb-2 opacity-70'> Elements </h2>
          <Button title={"Class"} icon={<FaSquare /> } fun={AddClass} />
          <Button title={"Interface"} icon={<VscSymbolInterface size={20} />}  fun={AddInterface} />

          <h2 className='mt-6 mb-2 opacity-70'> Connectors </h2>
          <Button title={"Association"} icon={<FaArrowRight /> } fun={()=> ShowSelection("Association")} />
          <Button title={"Agregation"} icon={<FaArrowRight /> } fun={()=> ShowSelection("Agregation")} />
          <Button title={"Composition"} icon={<FaArrowRight /> } fun={()=> ShowSelection("Composition")} />
          <Button title={"Héritage"} icon={<FaArrowRight /> } fun={()=> ShowSelection("Inheritance")} />
          <Button title={"Implementation"} icon={<FaArrowRight /> } fun={()=> ShowSelection("Implementation")} />
        </div>
        <div>
          <Button title={"Save work"} icon={<MdSaveAlt size={20} />} fun={saveWork} />
          <Button title={"Load work"} icon={<LuUpload size={18} />} fun={triggerFileInput} />
          <input ref={fileInputRef} type="file" accept="application/json" onChange={handleFileUpload} style={{ display: 'none' }} />
          <Button title={"Generate code"} icon={<LuFileCode2 size={20} />} fun={setShowGenerate} />
        </div> 
      </div>
    </div>
  );
};

export default Toolbar;
