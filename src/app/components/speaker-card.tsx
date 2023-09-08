import { SanityImageSource } from "@sanity/asset-utils"
import { useNextSanityImage } from "next-sanity-image"
import Image from "next/image"
import { client } from "../../../sanity/lib/client"

export const SpeakerCard = ({
  name,
  position,
  profilePicture,
}: {
  name: string
  position: string
  profilePicture: SanityImageSource
}) => {
  const profileImageProps = useNextSanityImage(client, profilePicture)

  return (
    <li className="flex h-[531px] w-[calc((100cqw-16px*(var(--num-of-cards)-1))/var(--num-of-cards))] shrink-0 snap-start flex-col justify-between bg-gray-100 p-8 [--num-of-cards:1] last:mr-[--total-padding] dark:bg-indigo-900 sm:[--num-of-cards:2] xl:[--num-of-cards:3]">
      <div className="relative aspect-square w-[272px] self-center overflow-hidden rounded-full border-2 border-gray-900 dark:border-white">
        <div className="absolute inset-0 bg-gray-300" />
        <Image
          {...profileImageProps}
          alt={`Profile picture of ${name}`}
          sizes="(min-width: 1px) 272px"
          className="absolute inset-0 bg-blue-500 object-cover mix-blend-normal"
        />
        <div className="absolute inset-0 bg-blue-500 mix-blend-screen dark:bg-rose-500" />
      </div>
      <div className="h-[114px]">
        <p className="flex flex-col gap-2 leading-normal">
          <span className="text-2xl font-bold">{name}</span>
          <span className="text=xl">{position}</span>
        </p>
      </div>
    </li>
  )
}
