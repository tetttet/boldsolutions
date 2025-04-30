"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Instagram под ключ",
    description:
      "Полноценная упаковка бизнес-аккаунта: оформление профиля, разработка визуального стиля, создание рубрикатора, стратегия контента, настройка связок со всеми необходимыми платформами. Мы не просто создаем красивую обложку, а формируем работающий инструмент продаж.",
    content: (
      <div className="relative flex w-full h-full items-center justify-center text-white">
        <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_vector-1682310635241-80dc3ccea061?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJ1c2luZXNzfGVufDB8fDB8fHww')] bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-50"></div>
        <h1 className="relative text-2xl font-bold z-10">Instagram под ключ</h1>
      </div>
    ),
  },
  {
    title: "Разработка сайта",
    description:
      "Создаем не просто сайт для галочки, а мощный инструмент привлечения и конвертации клиентов. В 2025 году сайт — это ваш цифровой офис, который работает 24/7, не берет отпуск и не просит повышения.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://plus.unsplash.com/premium_vector-1705741561285-2ed666e41168?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJ1c2luZXNzfGVufDB8fDB8fHww"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Таргетированная реклама",
    description:
      "В мире, где внимание пользователей на вес золота, таргетированная реклама — ваше секретное оружие. Мы настраиваем рекламные кампании так, чтобы показывать ваши предложения именно тем, кто в них заинтересован.",
    content: (
      <div className="relative flex w-full h-full items-center justify-center text-white">
        <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_vector-1720420153031-f0ebc539d4fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGJ1c2luZXNzfGVufDB8fDB8fHww')] bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-50"></div>
        <h1 className="relative text-2xl font-bold z-10">
          Анализ целевой аудитории
        </h1>
      </div>
    ),
  },
  {
    title: "WhatsApp и Telegram для бизнеса",
    description:
      "Мы превращаем мессенджеры в эффективные инструменты продаж, настраивая автоматизированное общение с клиентами через популярные платформы.  Подключаем и оформляем бизнес-аккаунты, разрабатываем продуманные сценарии общения, создаём чат-ботов для обработки типовых запросов.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://plus.unsplash.com/premium_vector-1705741561278-f07ba01ce916?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGJ1c2luZXNzfGVufDB8fDB8fHww"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
