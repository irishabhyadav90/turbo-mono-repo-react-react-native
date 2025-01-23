"use client";

import { ReactNode } from "react";
import { View, Text } from 'tamagui';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      <View margin={10}>
        <Text color="$color">Hello from Tamagui</Text>
      </View>
      {children}
    </button>
  );
};
