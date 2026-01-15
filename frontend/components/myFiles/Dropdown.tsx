"use client";

import Panel from "../General/Panel";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { SerializedError } from "@reduxjs/toolkit";

interface DropdownOption {
  name: string;
  id: number;
}

interface DropdownProps {
  options: DropdownOption[];
  className?: string;
  defaultValue?: string;
  shouldHandleClick?: boolean;
  isFetching?: boolean;
  error?: FetchBaseQueryError | SerializedError | null;
  selectFunc?: (name: string,id:number) => void;
  optionTiltle: string;
  submotted?: boolean;
}

function Dropdown({
  options,
  className,
  defaultValue,
  shouldHandleClick = true,
  selectFunc,
  optionTiltle,
  submotted,
}: DropdownProps) {
  const [selected, setSelected] = useState<string>(defaultValue ?? "");

  const [dropOpen, setDropOpen] = useState(false);

  const divEl = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  if (submotted && selected === "") {
    setSelected("Select " + optionTiltle);
  }

  useEffect(() => {
    if (defaultValue !== undefined && defaultValue !== selected) {
      setSelected(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target as Node)) {
        setDropOpen(false);
      }
    };

    if (dropOpen) {
      document.addEventListener("click", handleClick, true);
    }

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [dropOpen]);

  const handleSelect = (title: string,id:number) => {
    setSelected(title);
    setDropOpen(false);
    selectFunc?.(optionTiltle,id);
  };

  const handleDropdownClick = () => {
    setDropOpen((prev) => !prev);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLLIElement>,
    name: string,
    itemId: number
  ) => {
    if (!shouldHandleClick) {
      e.stopPropagation();
      return;
    }
    handleSelect(name, itemId);
  };

  // console.log(options);

  const renderOptions = options.map(({ name, id }, idx) => (
    <li className="w-full" key={idx} onClick={(e) => handleClick(e, name, id)}>
      <Panel
        className={`bg-white border border-gray-300 text-black md:w-90 lg:w-90 rounded-xl p-3`}
      >
        {name}
      </Panel>
    </li>
  ));
  return (
    <div
      ref={divEl}
      className={`bg-white flex flex-col w-full hover:scale-105 transtion duration-400 ease-in-out md:w-90 lg:w-90`}
    >
      <Panel
        onClick={handleDropdownClick}
        className={`text-black rounded-xl ${className} `}
      >
        {selected}

        {dropOpen ? (
          <IoIosArrowUp className={`absolute text-lg top-1 right-5`} />
        ) : (
          <IoIosArrowDown className={`absolute text-lg top-1 right-5`} />
        )}
      </Panel>
      <ol
        className={`flex flex-col mt-2 gap-1 w-full  ${
          !dropOpen ? "hidden" : ""
        }`}
      >
        <AnimatePresence>
          {dropOpen && (
            <motion.ol
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col mt-2 gap-1 w-full origin-top"
            >
              {renderOptions}
            </motion.ol>
          )}
        </AnimatePresence>
      </ol>
    </div>
  );
}

export default Dropdown;
