

// Update to generate Java code with connectors
export const generateJavaCode = (elements, connectors) => {
    let javaCode = '';
  
    elements.forEach((element) => {
      if (element.type == 'class') {
        let classCode = `public class ${element.name}`;
  
        // Check if class has Inheritance or Implementation from connectors
        const connector = connectors.find((conn) => conn.to == element.id);

        const fromElement = elements.find(el => el.id === Number(connector.from));
        const toElement = elements.find(el => el.id === Number(connector.to));

        if (connector) {
          if (connector.type == 'Inheritance') {
            classCode += ` extends ${fromElement?.name}`;
          } else if (connector.type == 'Implementation') {
            classCode += ` implements ${fromElement?.name}`;
          }
        }
  
        classCode += ' {\n';
  
        // Generate attributes
        element.attributes.forEach((attribute) => {
          const [name, type] = attribute.split(': ');
          classCode += `  private ${type} ${name};\n`;
        });
  
        // Generate methods
        element.methods.forEach((method) => {
          classCode += `  public void ${method}() {\n    // TODO: Implement ${method}\n  }\n`;
        });
  
        classCode += `}\n\n`;
        javaCode += classCode;
      }
  
      if (element.type == 'interface') {
        let classCode = `public interface ${element.name} {\n`;
  
        element.methods.forEach((method) => {
          classCode += `  public void ${method}() {\n    // TODO: Implement ${method}\n  }\n`;
        });
  
        classCode += `}\n\n`;
        javaCode += classCode;
      }
    });
  
    return javaCode;
  };
  
  // Update to generate PHP code with connectors
  export const generatePHPCode = (elements, connectors) => {
    let phpCode = '';
  
    elements.forEach((element) => {
      if (element.type == 'class') {
        let classCode = `class ${element.name}`;
  
        // Check for Inheritance or Implementation from connectors
        const connector = connectors.find((conn) => conn.to == element.id);
        if (connector) {
          if (connector.type == 'Inheritance') {
            classCode += ` extends ${connector.from}`;
          } else if (connector.type == 'Implementation') {
            classCode += ` implements ${connector.from}`;
          }
        }
  
        classCode += ' {\n';
  
        // Generate attributes
        element.attributes.forEach((attribute) => {
          const [name, type] = attribute.split(': ');
          classCode += `  private $${name};\n`;
        });
  
        // Generate methods
        element.methods.forEach((method) => {
          classCode += `  public function ${method}() {\n    // TODO: Implement ${method}\n  }\n`;
        });
  
        classCode += `}\n\n`;
        phpCode += classCode;
      }
  
      if (element.type == 'interface') {
        let classCode = `interface ${element.name} {\n`;
  
        element.methods.forEach((method) => {
          classCode += `  public function ${method}() {\n    // TODO: Implement ${method}\n  }\n`;
        });
  
        classCode += `}\n\n`;
        phpCode += classCode;
      }
    });
  
    return phpCode;
  };
  
  // Update to generate Python code with connectors
  export const generatePythonCode = (elements, connectors) => {
    let pythonCode = '';
  
    elements.forEach((element) => {
      if (element.type == 'class') {
        let classCode = `class ${element.name}`;
  
        // Handle Inheritance or Implementation from connectors
        const connector = connectors.find((conn) => conn.to == element.id);
        if (connector) {
          if (connector.type == 'Inheritance') {
            classCode += `(${connector.from})`;
          } else if (connector.type == 'Implementation') {
            // Python uses abstract base classes for interfaces, so we assume it's an ABC
            classCode += `(ABC)`;
          }
        }
  
        classCode += ':\n';
  
        // Generate constructor
        classCode += `  def __init__(self`;
  
        element.attributes.forEach((attribute) => {
          const [name, type] = attribute.split(': ');
          classCode += `, ${name}`;
        });
        classCode += '):\n';
  
        // Constructor body
        element.attributes.forEach((attribute) => {
          const [name] = attribute.split(': ');
          classCode += `    self.${name} = ${name}\n`;
        });
  
        // Generate methods
        element.methods.forEach((method) => {
          classCode += `  def ${method}(self):\n    # TODO: Implement ${method}\n`;
        });
  
        classCode += `\n`;
        pythonCode += classCode;
      }
    });
  
    return pythonCode;
  };
  
  // Update to generate code based on language and connectors
  export const generateCode = (language, elements, connectors) => {
    switch (language) {
      case 'java':
        return generateJavaCode(elements, connectors);
      case 'php':
        return generatePHPCode(elements, connectors);
      case 'python':
        return generatePythonCode(elements, connectors);
      default:
        return 'Language not supported.';
    }
  };
  
  // Save code to file function (no change needed)
  export const saveCodeToFile = (code, language) => {
    const blob = new Blob([code], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
  
    switch (language) {
      case 'java':
        link.download = `generated_code.java`;
        break;
      case 'php':
        link.download = `generated_code.php`;
        break;
      case 'python':
        link.download = `generated_code.py`;
        break;
    }
  
    link.click();
  };
  




  export const getVisibilityIcon = (visibility) => {
    switch (visibility) {
      case "public":
        return "+";
      case "private":
        return "-";
      case "protected":
        return "#";
      default:
        return "-";
    }
  };