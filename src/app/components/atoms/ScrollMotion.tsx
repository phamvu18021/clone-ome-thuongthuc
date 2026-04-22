"use client";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const ScrollView = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2 // Kích hoạt khi 20% hiển thị
  });

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    }
  }, [inView, isVisible]);
  
  return <div ref={ref}>{isVisible && <>{children}</>}</div>;
};
