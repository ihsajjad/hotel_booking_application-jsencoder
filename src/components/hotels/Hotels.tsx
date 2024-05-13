import { HotelDataType } from "@/shared/types";
import Image from "next/image";
import styles from "./hotels.module.css";

const Hotels = ({ hotels }: { hotels: HotelDataType[] }) => {
  return (
    <section className={`${styles.hotelsSectionContainer} container`}>
      <div className={styles.filterContainer}></div>
      <div className={styles.hotelsContainer}>
        {hotels.map((hotel) => (
          <div key={hotel._id} className={styles.hotel}>
            <div>
              <Image
                src={hotel.images[0].image}
                alt={hotel.images[0].label}
                width={200}
                height={150}
              />
            </div>
            <div>
              <h3>{hotel.name}</h3>
              <p>{hotel.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hotels;
