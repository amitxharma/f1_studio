import React, { useContext, useEffect } from "react";
import { Cart } from "../../context/context";
import HeadTabComponent from "./HeadTabComponent";
import MobileTabView from "./MobileTabView";
import TableComponent from "./TableComponent";
import TableTabComponent from "./TableTabComponent";

const CartPage = () => {
  const { activeTab, setInnerWidth, windowWidth } = useContext(Cart);
  const updateWidth = () => {
    setInnerWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  return (
    <div>
      <HeadTabComponent />
      {activeTab === "Carts" && <TableTabComponent />}

      {activeTab === "Carts" ? (
        windowWidth > 768 ? (
          <TableComponent />
        ) : (
          <MobileTabView />
        )
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "200px",
            fontSize: "40px",
            fontWeight: "bold",
            color: "grey",
          }}
        >
          No Data
        </div>
      )}
    </div>
  );
};

export default CartPage;
