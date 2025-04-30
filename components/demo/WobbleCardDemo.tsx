"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Превратите свой бизнес с помощью BoldSolutions!
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Готовы превратить ваш бизнес в цифровой успех? Оставьте заявку прямо
            сейчас, и мы свяжемся с вами в течение 24 часов для бесплатной
            консультации!
          </p>
        </div>
        <img
          src="https://plus.unsplash.com/premium_vector-1725434523138-8dbce19c0e45?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGJ1c2luZXNzfGVufDB8fDB8fHww"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Часто задаваемые вопросы
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          BoldSolutions - это ведущая компания в области цифровых решений,
          предлагающая широкий спектр услуг, включая веб-разработку, мобильные
          приложения и маркетинг в социальных сетях. Мы помогаем бизнесам
          достигать успеха в цифровом мире.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Призыв к действию
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Готовы превратить ваш бизнес в цифровой успех? Оставьте заявку прямо сейчас, и мы свяжемся с вами в течение 24 часов для бесплатной консультации!
          </p>
        </div>
        <img
          src="https://plus.unsplash.com/premium_vector-1682306503579-3cb59b0ac1b8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
