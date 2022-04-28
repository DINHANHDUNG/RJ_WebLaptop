import React from "react";
import { currency } from "../../../../commom/hooks";

interface propsBoxPrice {
  value: { min_price: number; max_price: number | null };
  toggle: (value: { min_price: number; max_price: number | null }) => void;
}
function BoxPrice(props: propsBoxPrice) {
  return (
    <div
      className="icon-box-price"
      style={{
        padding: "3px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => props.toggle(props.value)}
    >
      {!props.value.max_price ? (
        <div
          style={{
            height: "66px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>{currency(props.value.min_price)} +</span>
        </div>
      ) : (
        <>
          <span>{currency(props.value.min_price)}</span>
          <span>-</span>
          <span>{currency(props.value.max_price)}</span>
        </>
      )}
    </div>
  );
}

export default BoxPrice;
