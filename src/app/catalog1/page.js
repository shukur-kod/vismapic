"use client"

import React from "react";
import styles from "./catalog1.module.css";

const Page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kompaniya haqida</h1>
      <div className={styles.newsGrid}>
        <div className={styles.newsCard}>
          <h2 className={styles.newsTitle}>Yralish tarixi</h2>
          <p className={styles.newsDate}>2034-01-20</p>
          <p className={styles.newsContent}>
            UzGidroTrans kompaniyasi global iqlim o'zgarishi av haroratning ko'tarilishi natijasida dunyo okeanlarinign
            suvi ko'payib sohil bo'yi shaharlariga xavf sola boshlaganda ko'rilgan chora tadbirlar natijasida paydo bo'lgan.
            Ushbuchora tadbirlarga muvofiq dunyo okeanlaring suvi su'iy bulutlar holida jahonning qurg'oqchil cho'l mintaqalariga
            yo'naltirildi, shu jumladan O'rta Osiyo chollariga ham buning uchun esa butun o'rta osiyo bo'ylab kanallar tarmog'i
            shakllantirildi va ular uchrashadigan joy Orol dengizi bo'ldi. Bundan tashqari ushbu kanallar Turkmaniston orqali o'tib Eronning
            chobahar portiga ham chiqdi.Orolport Porti shu tariqa vujudga keldi.
            
          </p>
        </div>
        <div className={styles.newsCard}>
          <h2 className={styles.newsTitle}>Port salohiyati</h2>
          <p className={styles.newsDate}>2034-01-19</p>
          <p className={styles.newsContent}>
          Port butun Markaziyu osiyo kanallar tarmog'i tutashgan joy bo'lganligi sabali Markaziy Osiyoda ishlab chiqarilgan va
          tayyorlangan maxsulotlar ushbu port orqali dunyoga chiqadi va import tovarlari ham aynan shu port orqali kirib keladi.
           Hozirda portda yuzda ortiq yirik yuk tashuvchi tankerlar fuqarolik kemalari va texnik xizmat ko'rsatish korxonalari
           faoliyat yuritib kelmoqda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;