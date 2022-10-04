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
      width="900px"
      height="450px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HowToStep")}
    >
      <Image
        width="450px"
        height="450px"
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
        width="374px"
        height="16px"
        position="absolute"
        top="50px"
        left="472px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={steps?.name}
        {...getOverrideProps(overrides, "stepname")}
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
        top="18px"
        left="472px"
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
        top="18px"
        left="575px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={steps?.stepnum}
        {...getOverrideProps(overrides, "stepnum")}
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
        width="405px"
        height="58px"
        position="absolute"
        top="80px"
        left="472px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={steps?.description}
        {...getOverrideProps(overrides, "description")}
      ></Text>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="408px"
        left="597px"
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
        top="166px"
        left="472px"
        direction="column"
        width="405px"
        height="226px"
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
