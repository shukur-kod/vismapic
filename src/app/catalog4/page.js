"use client"


import React from "react";
import Link from "next/link"; 
import styles from "./catalog4.module.css"; 

const Catalog4 = () => {
    return (
        <div className={styles.catalogContainer}>
            <h2 className={styles.headerText}>Shartnomalarni tuzish uchun ariza va hujjatlar ro'yxati</h2>
            <p>Shartnoma tuzish imkoniyatini ko'rib chiqish uchun kontragent quyidagi hujjatlarni taqdim etishi kerak:</p>
            <ul className={styles.documentList}>
                <li>
                    <strong>"UzGidroTrans AJ" bosh direktori nomiga ariza (taklif)</strong>, u tashkilotning blankida taqdim etiladi va kontragent shartnoma tuzishni taklif qilayotgan ish va xizmatlar turi, yukning nomenklaturasi va yuk nomenklaturasi to'g'risidagi ma'lumotlarni o'z ichiga olishi kerak. yil uchun umumiy hajm, oylar bo'yicha taqsimlangan.
                </li>
                </ul>
                <li>
                    <strong>O'zbekiston Respublikasi rezidentlari uchun (hujjatlar tashkilot rahbarining imzosi va muhri bilan tasdiqlangan bo'lishi kerak):</strong>
                    <ul>
                        <li>yuridik shaxslarning yagona davlat reestridan ko'chirma nusxasi (shartnoma tuzilgan sanadan kamida bir oy oldin beriladi);</li>
                        <li>ta'sis hujjatlarining (nizom, nizom) nusxalari;</li>
                        <li>ijro etuvchi organni tayinlash to'g'risidagi bayonnoma nusxasi yoki bayonnomadan ko'chirma;</li>
                        <li>davlat ro'yxatidan o'tkazilganligi to'g'risidagi guvohnoma nusxasi;</li>
                        <li>nizom asosida ish yurituvchi shaxsni tayinlash to'g'risidagi buyruq nusxasi;</li>
                        <li>vakilning ishonchnoma nusxasi;</li>
                        <li>soliq to'lovchi sifatida hisobga olinganligi to'g'risidagi guvohnoma nusxasi;</li>
                        <li>tashkilot rahbari va bosh buxgalterning imzosi va muhri bilan tasdiqlangan va quyidagi ma'lumotlarni o'z ichiga olgan kontragentning to'ldirilgan kartasi:</li>
                        <ul>
                            <li>Kontragentning yuridik manzili;</li>
                            <li>Kontragentning haqiqiy manzili;</li>
                            <li>Kontragentning bank rekvizitlari;</li>
                            <li>Aloqa ma'lumotlari: faks raqami, elektron pochta manzili va telefon raqamlarini ko'rsatgan aloqa shaxslar.</li>
                        </ul>
                    </ul>
                </li>
              
                    <strong>O'zbekiston Respublikasi norezidentlari uchun (hujjatlar notarial tasdiqlangan rus tiliga tarjimasi bilan taqdim etilishi kerak):</strong>
                    <ul>
                        <li>kontragent-kompaniya kelib chiqqan mamlakatning Savdo reestridan ko'chirma (kompaniyaning ishonchliligi to'g'risida);</li>
                        <li>ta'sis hujjatlari va kompaniyani ro'yxatdan o'tkazish hujjatlari (nusxalari);</li>
                        <li>shaxsning shartnoma imzolash vakolatini tasdiqlash, notarial tasdiqlangan apostil qo'yilgan ishonchnoma yoki lavozimga tayinlash (saylash) to'g'risidagi bayonnomadan ko'chirma;</li>
                        <li>tashkilot rahbarining imzosi va muhri bilan tasdiqlangan va quyidagi ma'lumotlarni o'z ichiga olgan kontragentning to'ldirilgan kartasi:</li>
                        <ul>
                            <li>Kontragentning yuridik manzili;</li>
                            <li>Kontragentning haqiqiy manzili;</li>
                            <li>Kontragentning bank rekvizitlari;</li>
                            <li>Aloqa ma'lumotlari: faks raqami, elektron pochta manzili va telefon raqamlarini ko'rsatgan aloqa shaxslar.</li>
                            <li>Shartnoma tuzilgan sanadan kamida bir oy oldin berilgan hujjatlar (nizom, nizom) nusxalari;</li>
                            </ul>

                            </ul>
                            <Link href="/catalog5" className={styles.linkText}>Ariza qoldirish</Link>
                            </div>
    )}


export default Catalog4;
