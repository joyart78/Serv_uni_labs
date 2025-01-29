import { DataBase } from "@/pages/Lab1/model/model.ts";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import styles from "./InfoCard.module.css";

interface InfoCardProps {
  data?: DataBase;
  isLoading?: boolean;
  error?: unknown;
}

export default function InfoCard({ data, isLoading, error }: InfoCardProps) {
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error_message}>
        Ошибка загрузки данных:{" "}
        {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }

  return (
    data && (
      <div className={styles.container}>
        <div className={styles.info_card}>
          <div className={styles.info_row}>
            <span className={styles.label}>База данных:</span>
            <span className={styles.value}>{data.database}</span>
          </div>
          <div className={styles.info_row}>
            <span className={styles.label}>Версия:</span>
            <span className={styles.value}>{data.version}</span>
          </div>
          <div className={styles.info_row}>
            <span className={styles.label}>Uptime:</span>
            <span className={styles.value}>{data.uptime}</span>
          </div>
          <div className={styles.info_row}>
            <span className={styles.label}>Storage Engine:</span>
            <span className={styles.value}>{data.storageEngine}</span>
          </div>
        </div>
      </div>
    )
  );
}
