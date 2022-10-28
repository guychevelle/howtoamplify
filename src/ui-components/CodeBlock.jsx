/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { TextAreaField, View } from "@aws-amplify/ui-react";
export default function CodeBlock(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="350px"
      height="400px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CodeBlock")}
    >
      <TextAreaField
        display="flex"
        gap="8px"
        direction="column"
        width="306px"
        height="352px"
        alignItems="flex-start"
        position="absolute"
        top="22px"
        left="25px"
        padding="0px 0px 0px 0px"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "TextAreaField")}
      ></TextAreaField>
    </View>
  );
}
