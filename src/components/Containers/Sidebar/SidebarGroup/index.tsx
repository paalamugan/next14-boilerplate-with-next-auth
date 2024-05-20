import type { ComponentProps, FC } from 'react';

import SidebarItem from '@/components/Containers/Sidebar/SidebarItem';

import styles from './index.module.css';

type SidebarGroupProps = {
  groupName: string;
  items: Array<ComponentProps<typeof SidebarItem>>;
};

const SidebarGroup: FC<SidebarGroupProps> = ({ groupName, items }) => (
  <section className={styles.group}>
    <label htmlFor="sidebar-group" className={styles.groupName}>
      {groupName}
    </label>
    <ul className={styles.itemList}>
      {items.map(({ label, link }) => (
        <SidebarItem key={link} label={label} link={link} />
      ))}
    </ul>
  </section>
);

export default SidebarGroup;
