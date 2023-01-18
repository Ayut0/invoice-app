import React, { createContext, useState } from "react";
import { Children } from "types/children";
import { Total as TotalType } from "types/total";

export const useTotalContext = createContext<TotalType | null>(null);

const TotalContext = ({ children }: Children) => {
  const [total, setTotal] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);

  return (
    <useTotalContext.Provider
      value={{ total, setTotal, subTotal, setSubTotal, tax, setTax }}
    >
      {children}
    </useTotalContext.Provider>
  );
};

export default TotalContext;
