"use client";
import { useState } from "react";

//styles
import styles from "./Pages.module.css";

function OwnerShipPage() {
  const [filter, setFilter] = useState("All");

  return (
    <div className={styles.container}>
      <h2>Ownership Interest</h2>
      <p>In this section, you can see all your orders record</p>
      <div className={styles.filter}>
        <span
          onClick={() => setFilter("All")}
          style={{ color: filter === "All" ? "gold" : "white" }}
        >
          All
        </span>
        <span
          onClick={() => setFilter("Pending")}
          style={{ color: filter === "Pending" ? "gold" : "white" }}
        >
          Pending
        </span>
        <span
          onClick={() => setFilter("Open")}
          style={{ color: filter === "Open" ? "gold" : "white" }}
        >
          Open
        </span>
        <span
          onClick={() => setFilter("Expire")}
          style={{ color: filter === "Expire" ? "gold" : "white" }}
        >
          Expire
        </span>
        <span
          onClick={() => setFilter("Cancel")}
          style={{ color: filter === "Cancel" ? "gold" : "white" }}
        >
          Cancel
        </span>
        <span
          onClick={() => setFilter("Reject")}
          style={{ color: filter === "Reject" ? "gold" : "white" }}
        >
          Reject
        </span>
      </div>
      <div className={styles.table}>
        <div className={styles.headers}>
          <span>ID</span>
          <span>Day</span>
          <span>Total pay (T)</span>
          <span>Status</span>
          <span>Created at</span>
          <span>operation</span>
        </div>
        <div className={styles.example}>
          <span>id</span>
          <span>7 july</span>
          <span>12 T</span>
          <span>Paid</span>
          <span>5 july</span>
          <span>example</span>
        </div>
      </div>
    </div>
  );
}

export default OwnerShipPage;
