"use client";

import React from "react";
import { Provider } from "react-redux";
import dynamic from "next/dynamic";
import { store } from "@/redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

// export default Providers;
export default dynamic(() => Promise.resolve(Providers), { ssr: false });
