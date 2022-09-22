/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function GalleryLogoMobile(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="175px"
      height="50px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "GalleryLogoMobile")}
    >
      <Image
        width="175px"
        height="50px"
        position="absolute"
        top="0px"
        left="2px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "GalleryLogoMobile 1")}
      ></Image>
    </View>
  );
}
