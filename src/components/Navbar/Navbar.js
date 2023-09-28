import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.language}>EN</span>
          <div className={styles.searchContainer}>
            <input className={styles.input} />
            <SearchIcon className={styles.searchicon} />
          </div>
        </div>
        <div className={styles.center}>
          <h1>Store.</h1>
        </div>
        <div className={styles.right}>
          <div className={styles.menuItem}>Register</div>
          <div className={styles.menuItem}>Sign in</div>
          <div className={styles.menuItem}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
