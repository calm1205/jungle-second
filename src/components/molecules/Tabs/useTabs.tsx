import { useState } from 'react';

/**
 * lengthの長さのboolean[]
 * initialのindexだけtrue
 */
const _initialaizeTabs = (length: number, initial: number) =>
  [...Array(length)].map((_, i) => {
    if (i === initial) return true;
    return false;
  });

const _activeIndex = (array: boolean[]) => array.findIndex((_) => _ === true);

type UseTabs = (
  tabLength: number,
  initialActiveIndex: number
) => [{ isActive: boolean; onClick: () => void }[], number];

/**
 * Tabsの選択ロジック
 */
export const useTabs: UseTabs = (tabLength, initialActiveIndex) => {
  const initialTabs = _initialaizeTabs(tabLength, initialActiveIndex);
  const [tabs, setTabs] = useState(initialTabs);

  const tabInfo = initialTabs.map((_, index) => {
    const newTab = _initialaizeTabs(tabLength, index);
    return {
      isActive: tabs[index],
      onClick: () => setTabs(newTab),
    };
  });

  const tabIndex = _activeIndex(tabs);

  return [tabInfo, tabIndex];
};
