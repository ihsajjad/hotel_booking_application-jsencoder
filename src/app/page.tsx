"use client";
import Hotels from "@/components/hotels/Hotels";
import { HotelDataType } from "@/shared/types";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

export default function Home() {
  const [hotels, setHotels] = useState<HotelDataType[]>([]);
  useEffect(() => {
    const fetchHotels = async () => {
      const response = await fetch("/hotels.josn");
      const data = await response.json();
      setHotels(data);
    };

    fetchHotels();
  }, []);

  console.log(hotels);

  return (
    <main className={styles.main}>
      <Hotels hotels={hotels} />
    </main>
  );
}
