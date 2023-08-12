import { View, Text } from "react-native";
import React, { useState } from "react";
type Props = {
  content: string;
  css: string;
};

const TextBase = (props: Props) => {
  const { content, css } = props;

  return <Text className={css}>{content}</Text>;
};

export default TextBase;
