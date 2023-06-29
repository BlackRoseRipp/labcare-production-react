import React from "react";
import EmbedMap from "./EmbedMap";
import StoreList from "./StoreList";

function StoreLocator(props) {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="grid lg:grid-cols-3 gap-8 mx-2">
        <div className="w-full mx-auto">
          <StoreList locations={props.locations} />
        </div>
        <div className="lg:col-span-2">
          <EmbedMap
            src={props.src}
            classes="h-[630px] overflow-hidden w-full"
            height={"700px"}
          />
        </div>
      </div>
    </div>
  );
}

export default StoreLocator;
