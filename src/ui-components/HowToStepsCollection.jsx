/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Steps } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import HowToStep from "./HowToStep";
import { Collection } from "@aws-amplify/ui-react";
export default function HowToStepsCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Steps,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "HowToStepsCollection")}
    >
      {(item, index) => (
        <HowToStep
          steps={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></HowToStep>
      )}
    </Collection>
  );
}
