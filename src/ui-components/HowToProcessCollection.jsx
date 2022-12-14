/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Process, Steps } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import HowToProcess from "./HowToProcess";
import { Collection } from "@aws-amplify/ui-react";
export default function HowToProcessCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const stepsItems = useDataStoreBinding({
    type: "collection",
    model: Steps,
  }).items;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Process,
  }).items.map((item) => ({
    ...item,
    steps: stepsItems.filter((model) => model.processStepsId === item.id),
  }));
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "HowToProcessCollection")}
    >
      {(item, index) => (
        <HowToProcess
          process={item}
          margin="0px 10px 10px 10px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></HowToProcess>
      )}
    </Collection>
  );
}
