import React from "react";
import "./styles.scss";

const CustomTab = ({
  children,
  activeTab,
  clicked,
  headers,
  headersSpaced,
  dot,
}) => {
  return (
    <div className={`tabs`}>
      <div className={`tabsHeader`}>
        <ul
          className={`hide-scrollbar ${"tabsHeaderList"} ${
            headersSpaced ? "horizontalPadding" : ""
          }`}
        >
          {headers.map((item) => {
            return (
              <li
                key={item.id}
                className={`${activeTab === item.id ? "active " : ""}`}
              >
                <button onClick={() => clicked(item.id)}>
                  {dot && <span className={`dot`}></span>}
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {children}
    </div>
  );
};

export default CustomTab;
