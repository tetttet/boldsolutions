import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import { AnimatedTextUnderlign } from "./ui/AnimatedTextUnderlign";
import { AuroraBackground } from "./ui/aurora-background";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { text } from "stream/consumers";

export default function HeroHome() {
  const words = [
    {
      text: "Комплексные",
    },
    {
      text: "digital-решения",
    },
    {
      text: "для малого",
    },
    {
      text: "и",
    },
    {
      text: "среднего бизнеса:",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <AuroraBackground>
      <section className="relative">
        <PageIllustration />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Section header */}
            <div className="pb-12 text-center md:pb-16">
              <div
                className="mb-6 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
                data-aos="zoom-y-out"
              ></div>
              <h1
                className="mb-6 text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                <AnimatedTextUnderlign />
              </h1>
              <div className="mx-auto max-w-4xl">
              <TypewriterEffectSmooth words={words} />
                <p
                  className="mb-8 text-lg text-gray-700 -mt-5"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
                >
                  Instagram, сайты, таргет, мессенджеры — всё в одних руках
                </p>
                <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                  <div
                    className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                    data-aos="zoom-y-out"
                    data-aos-delay={450}
                  >
                    <a
                      className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                      href="#0"
                    >
                      <span className="relative inline-flex items-center">
                        Получить бесплатную консультацию{" "}
                        <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
}
