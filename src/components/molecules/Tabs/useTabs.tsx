import { useCallback, useState } from "react";

/**
 * @param num - tabの数
 * @param index - activeに更新するindex
 * @returns - tabのboolean[]
 */
const _setSelectedTab = (num: number, index: number) => {
  const falseArray = [...Array(num)].map(() => false);
  falseArray[index] = true;
  return falseArray;
};

type UseTabs = (
  tabNumber: number,
  initialActiveIndex: number
) => { isActive: boolean; onClick: () => void }[];

/**
 * Tabsの選択ロジック
 */
export const useTabs: UseTabs = (tabNumber, initialActiveIndex) => {
  const initialTabs = _setSelectedTab(tabNumber, initialActiveIndex);
  const [tabs, setTabs] = useState(initialTabs);

  /**
   * indexをactiveに更新
   * @param index
   */
  const setActiveTab = useCallback(
    (index: number) => {
      const updateTab = _setSelectedTab(tabNumber, index);
      setTabs(updateTab);
    },
    [setTabs]
  );

  return [...Array(tabNumber)].map((_, index) => {
    return {
      isActive: tabs[index],
      onClick: () => setActiveTab(index),
    };
  });
};
