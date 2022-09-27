/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HowToProcess(props) {
  const { process, overrides, ...rest } = props;
  return (
    <View
      width="350px"
      height="400px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HowToProcess")}
    >
      <Image
        width="350px"
        height="249px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        src={process?.pictureurl}
        {...getOverrideProps(overrides, "processpic")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="16.40625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="326px"
        height="30px"
        position="absolute"
        top="259px"
        left="calc(50% - 163px - 1px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={process?.name}
        {...getOverrideProps(overrides, "processname")}
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
        width="311px"
        position="absolute"
        top="305px"
        left="19px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={process?.description}
        {...getOverrideProps(overrides, "description")}
      ></Text>
    </View>
  );
}
