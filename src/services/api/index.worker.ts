import { proxy } from "comlink";

export const getData = async () => {
  return {
    data: 1
  };
};

const gen = async function*() {
  yield 1;
};

export const ge = async () => {
  const data = await fetch("/");
  return data.blob();
};
