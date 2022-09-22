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
  Flex,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function GalleryEditProfile(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="350px"
      height="400px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "GalleryEditProfile")}
    >
      <Flex
        gap="14px"
        position="absolute"
        top="calc(50% - 80.5px - -54.5px)"
        left="calc(50% - 154.5px - 14.5px)"
        direction="column"
        width="309px"
        height="161px"
        padding="10px 50px 11px 9px"
        {...getOverrideProps(overrides, "Form")}
      >
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="250px"
          height="60px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Email"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextFieldEmail")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="250px"
          height="60px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Name"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextFieldName")}
        ></TextField>
      </Flex>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="349px"
        left="140px"
        justifyContent="center"
        alignItems="center"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Save"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Text
        fontFamily="Gothic A1"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="151px"
        left="15px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="User:"
        {...getOverrideProps(overrides, "userlabel")}
      ></Text>
      <Text
        fontFamily="Gothic A1"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="151px"
        left="75px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="username"
        {...getOverrideProps(overrides, "username")}
      ></Text>
      <Image
        width="120px"
        height="110.77px"
        position="absolute"
        top="20px"
        left="27px"
        borderRadius="55.38461685180664px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "profilepic")}
      ></Image>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="58px"
        left="168px"
        justifyContent="center"
        alignItems="center"
        size="small"
        isDisabled={true}
        variation="link"
        children="upload image"
        {...getOverrideProps(overrides, "UploadButton")}
      ></Button>
    </View>
  );
}
