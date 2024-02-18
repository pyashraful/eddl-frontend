import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const sidebarNav = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      link: '/dashboard',
    },
    {
      name: 'Users',
      icon: 'users',
      subMenu: [
        {
          name: 'All Users',
          link: '/users',
        },
        {
          name: 'Add User',
          link: '/users/add',
        },
      ],
    },
    {
      name: 'Settings',
      icon: 'settings',
      subMenu: [
        {
          name: 'Profile',
          link: '/settings/profile',
        },
        {
          name: 'Notifications',
          link: '/settings/notifications',
        },
        {
          name: 'Security',
          link: '/settings/security',
        },
      ],
    },
  ];

  const styles = {
    sidebar: {
      width: '200px',
      height: '100vh',
      backgroundColor: '#333',
      color: '#fff',
      padding: '10px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
    },
    subMenu: {
      marginLeft: '20px',
    },
  };

  return (
    <div style={styles.sidebar}>
      <ul>
        {sidebarNav.map((item, index) => (
          <li key={index}>
            <Link to={item.link} style={styles.link}>
              {item.name}
            </Link>
            {item.subMenu && (
              <button onClick={() => handleToggle(index)}>
                {openIndex === index ? 'Hide Submenu' : 'Show Submenu'}
              </button>
            )}
            {item.subMenu && openIndex === index && (
              <ul style={styles.subMenu}>
                {item.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link to={subItem.link} style={styles.link}>
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
