import { useTranslate } from "@refinedev/core";
import { useEffect } from "react";

export const useTitle = (title: string) => {
  const fullTitle = title + " | League Forge";
  const translate = useTranslate();
  useEffect(() => {
    if (!title) return;
    if (typeof title === "string") {
      document.title = translate(title) + " | League Forge";
    } else {
      document.title = translate(title) + " | League Forge";
    }
  }, [title]);
  return (title: string) => {
    if (typeof title === "string") {
      document.title = translate(title) + " | League Forge";
    } else {
      document.title = translate(title) + " | League Forge";
    }
  };
};
