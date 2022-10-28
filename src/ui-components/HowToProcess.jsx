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
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
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
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={process?.pictureurl}
        {...getOverrideProps(overrides, "processpic")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="16.94318199157715px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="326px"
        height="30px"
        gap="unset"
        alignItems="unset"
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
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="311px"
        height="unset"
        gap="unset"
        alignItems="unset"
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
