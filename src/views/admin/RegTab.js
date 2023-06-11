import React from "react";

// components

import RegTable from "components/Cards/RegTable.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <RegTable />
        </div>

      </div>
    </>
  );
}
