import { IImageArray } from "@apptypes/api"
import Image from 'next/image';

export const getImagesNodes = (images: IImageArray, baseUrl: string | undefined) => images.data.map((el, index) => {
  const { id } = el
  const imageUrl = el.attributes.url
  const href = `${baseUrl}/cms${imageUrl}`
  return (
    <Image
      key={id + index}
      alt={`${id}`}
      src={href}
      width={270}
      height={315}
      style={{
        borderRadius: '14px',
        objectFit: 'cover',
        minWidth: '270px',
        maxWidth: '270px',
        minHeight: '315px',
        maxHeight: '315px',
      }}
    />
  );
})