import React, { useState, createContext } from "react";

const Farmercontext = createContext();

const FarmerInboxcontext = ({ children }) => {
  const [filladrress, setfilladrress] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Farmercontext.Provider
      value={{
        filladrress,
        setfilladrress,

        activeStep,
        setActiveStep,
      }}
    >
      {children}
    </Farmercontext.Provider>
  );
};

export default FarmerInboxcontext;
export { Farmercontext };
