import React, { createContext, useContext, useRef } from "react";
const SectionRefsContext = createContext();
export const useSectionRefs = () => useContext(SectionRefsContext);
const PackageContext = ({ children }) => {
  const packageRef1 = useRef(null);
  return (
    <SectionRefsContext.Provider value={{ packageRef1 }}>
      {children}
    </SectionRefsContext.Provider>
  );
};

export default PackageContext;
