import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export function HeroImage({ src, alt, priority = true }: HeroImageProps) {
  return (
    <div className="relative hidden lg:block lg:w-1/2 xl:w-2/5">
      <div className="relative aspect-[3/4] w-full max-w-lg mx-auto">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover object-center"
          sizes="(max-width: 1024px) 0vw, (max-width: 1280px) 50vw, 40vw"
          quality={85}
        />
      </div>
    </div>
  );
}