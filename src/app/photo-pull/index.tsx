import { useLoaderData, useNavigation } from "react-router-dom";

const PhotoPull = () => {
  const photos = useLoaderData();
  const navigation = useNavigation();

  console.log(navigation);

  const handleClick = ({ url }: any) => {
    console.log(url);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Photo Pull</h1>
      <div className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {photos.map((photo: any) => (
            <div
              key={photo.albumId}
              onClick={() => handleClick(photo)}
              className="cursor-pointer"
            >
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                loading="lazy"
                className="w-full h-auto object-cover rounded shadow"
              />
              <p className="mt-2 text-sm text-gray-700">{photo.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoPull;
