/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Image,
  Text,
  TextAreaField,
  View,
} from "@aws-amplify/ui-react";
export default function HowToStep(props) {
  const { steps, overrides, ...rest } = props;
  return (
    <View
      width="360px"
      height="400px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HowToStep")}
    >
      <Image
        width="182px"
        height="200px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        src={steps?.pictureurl}
        {...getOverrideProps(overrides, "steppic")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="8px"
        left="188px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Step Number:"
        {...getOverrideProps(overrides, "stepnumlabel")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="8px"
        left="283px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={steps?.stepnum}
        {...getOverrideProps(overrides, "stepnum")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="162px"
        height="16px"
        position="absolute"
        top="26px"
        left="188px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={steps?.name}
        {...getOverrideProps(overrides, "stepname")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="158px"
        height="144px"
        position="absolute"
        top="56px"
        left="188px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={steps?.description}
        {...getOverrideProps(overrides, "description")}
      ></Text>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="361px"
        left="105px"
        justifyContent="center"
        alignItems="center"
        size="small"
        isDisabled={false}
        variation="link"
        children="View Code Snippet"
        {...getOverrideProps(overrides, "CodeButton")}
      ></Button>
      <TextAreaField
        display="flex"
        position="absolute"
        top="213px"
        left="43px"
        direction="column"
        width="279px"
        height="144px"
        padding="0px 0px 0px 0px"
        label="Step Actions:"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        placeholder={steps?.steptext}
        {...getOverrideProps(overrides, "TextAreaField")}
      ></TextAreaField>
    </View>
  );
}
