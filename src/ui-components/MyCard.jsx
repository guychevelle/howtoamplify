/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function MyCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="350px"
      height="500px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MyCard")}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="107px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="435px"
        left="9px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Caption"
        {...getOverrideProps(overrides, "Caption")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="107px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="463px"
        left="9px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Cost"
        {...getOverrideProps(overrides, "Cost")}
      ></Text>
      <Image
        width="350px"
        height="420px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "SkyMasterson 1")}
      ></Image>
    </View>
  );
}
